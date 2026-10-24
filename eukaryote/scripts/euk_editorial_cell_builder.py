"""
euk_editorial_cell_builder.py

Builds the full-3D volumetric "3D Editorial Biomedical Cutaway Diorama" (Adobe Stock #2089488593 style)
for Scenario 01 (`01_eukaryotic_animal_cell`), decomposed into the 7 interactive `Piece_Cell_*` meshes:

1. `Piece_Cell_PlasmaMembrane`:
   - Full-3D deep translucent icy-cyan hemispherical/spherical cell bowl (`z = 0` down to `-4.2`) + peeled outer left membrane flap
   - Translucent top cutaway veil & 3D cytoplasmic hydrogel matrix (`Mat_Bio_CytosolGlass`) so the top and interior are semi-translucent and explorable from 360° (including underneath the cell)
   - Parallel radial lipid/protein palisade border (360 parallel strands side-by-side around the perimeter)
   - Inner Cytoplasmic Cell Cortex (Cortical Actin / Spectrin protein filaments): hundreds of organic, parallel protein lines lining the inner cytoplasmic boundary and curving down the inner wall of the cell
   - 5 purple transmembrane channel/receptor dimers straddling the rim with bright-green Y-shaped glycoprotein sugar trees (glycocalyx)
2. `Piece_Cell_Nucleus`:
   - Full-3D royal-purple spherical nucleus with a 95° front-left surgical wedge cutaway and lighter-purple cutaway rim walls
   - Thick porous nuclear envelope studded around all 360° (top and bottom hemispheres) with dark recessed Nuclear Pore Complexes (NPCs)
   - Concave periwinkle-lavender cutaway nucleoplasm interior basin
   - Central dark-indigo bumpy Nucleolus sphere
   - Fine hair-like dark-navy 3D chromatin DNA loops nestled inside the cutaway nucleoplasm basin
3. `Piece_Cell_RoughSmoothER`:
   - Full-3D Endoplasmic Reticulum wrapping around AND underneath the bottom of the Nucleus (`z` extending down to `-2.15` following the 3D bowl curvature)
   - 4 concentric undulating periwinkle-blue folded cisternal ribbons + lower-hemisphere 3D ER sheets & 3D Smooth ER tubular network
   - Flat-sliced sky-blue top edges + dark recessed lumen grooves + 450+ dark-navy 80S ribosome spheres studding the 3D Rough ER walls
4. `Piece_Cell_GolgiStack`:
   - Twin polarized 3D cisternal ribbon stacks extending deep into the cytoplasm (Bottom-Left in Magenta-Violet, Bottom-Right in Warm Rose-Crimson)
   - Flat-sliced lighter pink top edges exposing dark lumen channels + 36 bulbous budding secretory vesicles pinching off in 3D
5. `Piece_Cell_Mitochondria`:
   - 5 bean-shaped terracotta-orange mitochondria at the cutaway plane with flat-sliced tops, exposed dark-umber matrix cavities, and serpentine apricot-orange cristae folds
   - PLUS 4 deep-cytoplasm 3D mitochondria suspended in the lower hemisphere (`z = -1.1` to `-2.5`) with internal cristae ribbons visible from underneath the cell
6. `Piece_Cell_CytoskeletonCentrosome`:
   - 3 orthogonal golden-tan 9x3 microtubule-triplet Centriole barrels at the middle-left centrosome
   - 48 crisscrossing 3D beige/tan cytoskeletal microtubule & intermediate filament cables spanning the entire 3D cell depth (`z = -3.1` to `+0.15`)
   - 220 free cytosolic ribosome granules distributed throughout the 3D cytoplasm
7. `Piece_Cell_LysosomePeroxisome`:
   - 12 translucent glossy lavender/ice-blue spherical lysosomes & peroxisomes (with inner granular cores visible through their translucent shells) distributed across both upper and lower 3D cytoplasm + 4 half-sliced cup-shaped endosomes
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


_UNIT_ICO_VERTS = [
    (0.0, 0.0, 1.0),
    (0.8944, 0.0, 0.4472),
    (0.2764, 0.8507, 0.4472),
    (-0.7236, 0.5257, 0.4472),
    (-0.7236, -0.5257, 0.4472),
    (0.2764, -0.8507, 0.4472),
    (0.7236, 0.5257, -0.4472),
    (-0.2764, 0.8507, -0.4472),
    (-0.8944, 0.0, -0.4472),
    (-0.2764, -0.8507, -0.4472),
    (0.7236, -0.5257, -0.4472),
    (0.0, 0.0, -1.0),
]
_UNIT_ICO_FACES = [
    (0, 1, 2), (0, 2, 3), (0, 3, 4), (0, 4, 5), (0, 5, 1),
    (1, 6, 2), (2, 6, 7), (2, 7, 3), (3, 7, 8), (3, 8, 4),
    (4, 8, 9), (4, 9, 5), (5, 9, 10), (5, 10, 1), (1, 10, 6),
    (11, 7, 6), (11, 8, 7), (11, 9, 8), (11, 10, 9), (11, 6, 10),
]


def add_fast_ico_sphere(bm, center: Vector, radius: float):
    """O(1) direct BMesh icosahedron sphere builder for high-count ribosomes & lipid heads."""
    cx, cy, cz = center.x, center.y, center.z
    vs = [bm.verts.new((cx + vx * radius, cy + vy * radius, cz + vz * radius)) for (vx, vy, vz) in _UNIT_ICO_VERTS]
    for i0, i1, i2 in _UNIT_ICO_FACES:
        bm.faces.new((vs[i0], vs[i1], vs[i2]))


def make_cylinder_between(bm, p1: Vector, p2: Vector, radius: float, segs: int = 8):
    vec = p2 - p1
    length = vec.length
    if length < 1e-5:
        return
    axis = vec / length
    up = Vector((1.0, 0.0, 0.0)) if abs(axis.z) > 0.9 else Vector((0.0, 0.0, 1.0))
    u = axis.cross(up).normalized() * radius
    v = axis.cross(u).normalized() * radius
    r1 = []
    r2 = []
    for k in range(segs):
        ang = (2.0 * math.pi * k) / segs
        ca, sa = math.cos(ang), math.sin(ang)
        off = u * ca + v * sa
        r1.append(bm.verts.new(p1 + off))
        r2.append(bm.verts.new(p2 + off))
    for k in range(segs):
        kn = (k + 1) % segs
        bm.faces.new((r1[k], r1[kn], r2[kn], r2[k]))


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
    z_bottom,
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
    1. Smooth outer side walls (`mat_wall`) extending down to `z_bottom` (can be a float or callable `f(px, py)`)
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
        zb = z_bottom(px, py) if callable(z_bottom) else float(z_bottom)

        # Outer wall vertices (left outer bottom/mid/top, right outer top/mid/bottom)
        v_lo_b = bm_wall.verts.new((px - nx * (w_out * 0.82), py - ny * (w_out * 0.82), zb))
        v_lo_m = bm_wall.verts.new((px - nx * (w_out * 1.06), py - ny * (w_out * 1.06), 0.5 * (zb + z_top)))
        v_lo_t = bm_wall.verts.new((px - nx * w_out, py - ny * w_out, z_top))
        v_ro_t = bm_wall.verts.new((px + nx * w_out, py + ny * w_out, z_top))
        v_ro_m = bm_wall.verts.new((px + nx * (w_out * 1.06), py + ny * (w_out * 1.06), 0.5 * (zb + z_top)))
        v_ro_b = bm_wall.verts.new((px + nx * (w_out * 0.82), py + ny * (w_out * 0.82), zb))
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
    # Translucent glass-like outer bowl + translucent top cytosol veil so the whole 3D interior & bottom are visible!
    mat_bowl = get_bio_material("CellBowlGlass", "#2B8AC9", roughness=0.12, metalness=0.04, alpha=0.34)
    mat_flap = get_bio_material("CellPeeledFlap", "#4EB6E8", roughness=0.16, metalness=0.04, alpha=0.44)
    mat_cytosol = get_bio_material("CytosolGlass", "#1C5D82", roughness=0.18, metalness=0.02, alpha=0.20)
    mat_head = get_bio_material("LipidHeadTeal", "#52CFE8", roughness=0.24, metalness=0.06)
    mat_tail = get_bio_material("LipidTailGold", "#D4A359", roughness=0.32, metalness=0.06)
    mat_cortex = get_bio_material("CorticalProtein", "#7AC4DE", roughness=0.28, metalness=0.05)
    mat_chan = get_bio_material("ChannelPurple", "#744BC4", roughness=0.26, metalness=0.06)
    mat_glyc = get_bio_material("GlycanGreen", "#5CE675", roughness=0.24, metalness=0.05)

    R_outer = 5.72
    R_inner = 5.38
    R_lip = 5.92

    # A. Full-3D Deep Translucent Hemispherical Cell Bowl (extending down to z = -4.25 so bottom is 100% 3D explorable!)
    bm_bowl = bmesh.new()
    bmesh.ops.create_uvsphere(bm_bowl, u_segments=72, v_segments=36, radius=R_lip)
    del_v = [v for v in bm_bowl.verts if v.co.z > 0.02]
    bmesh.ops.delete(bm_bowl, geom=del_v, context="VERTS")
    for v in bm_bowl.verts:
        if v.co.z > -0.06:
            v.co.z = 0.0
        else:
            v.co.z *= 0.74  # Deep 3D hemispherical bowl (depth ~ 4.38 units)
    bmesh.ops.recalc_face_normals(bm_bowl, faces=bm_bowl.faces)
    bowl_obj = create_mesh_object("PM_Bowl", bm_bowl, mat_bowl)
    solid_bowl = bowl_obj.modifiers.new(name="Solid_Bowl", type="SOLIDIFY")
    solid_bowl.thickness = 0.20
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
        if not (132.0 <= ang <= 218.0 and -2.6 <= v.co.z <= 0.14):
            del_f.append(v)
        else:
            v.co.z *= 0.74
    bmesh.ops.delete(bm_flap, geom=del_f, context="VERTS")
    bmesh.ops.recalc_face_normals(bm_flap, faces=bm_flap.faces)
    flap_obj = create_mesh_object("PM_PeeledFlap", bm_flap, mat_flap)
    solid_flap = flap_obj.modifiers.new(name="Solid_Flap", type="SOLIDIFY")
    solid_flap.thickness = 0.15
    solid_flap.offset = -1.0
    bpy.context.view_layer.objects.active = flap_obj
    bpy.ops.object.modifier_apply(modifier="Solid_Flap")
    objs.append(flap_obj)

    # C. Translucent Top Cutaway Veil & 3D Cytoplasmic Hydrogel Dome
    # Gives the top cutaway area the subtle aqueous translucency seen in the reference illustration,
    # while remaining transparent from both above and underneath so all deep 3D organelles are visible!
    bm_veil = bmesh.new()
    bmesh.ops.create_uvsphere(bm_veil, u_segments=64, v_segments=32, radius=R_inner - 0.04)
    for v in bm_veil.verts:
        if v.co.z > -0.35:
            # Recessed below the open cutaway cavities of Mitochondria/Golgi/ER so it never glazes over their interiors!
            v.co.z = -0.28 + max(0.0, v.co.z) * 0.01
        else:
            v.co.z *= 0.70
    bmesh.ops.recalc_face_normals(bm_veil, faces=bm_veil.faces)
    objs.append(create_mesh_object("PM_CytosolGlassVeil", bm_veil, mat_cytosol))

    # D. Parallel Radial Lipid/Protein Palisade along the Cut Rim (360 parallel lines side-by-side)
    # Instead of a bleached white dotted ring, we build a dense palisade of 360 parallel radial fibers
    # flanked by teal-blue outer/inner head bands.
    bm_heads = bmesh.new()
    bm_tails = bmesh.new()

    n_parallel = 360
    for i in range(n_parallel):
        th = (2.0 * math.pi * i) / n_parallel
        cx, sy = math.cos(th), math.sin(th)
        # Slight organic wave in radial position so it looks like natural biomolecular proteins/lipids
        wobble = 0.012 * math.sin(18.0 * th) + 0.008 * math.cos(31.0 * th)
        r_o = R_outer + wobble
        r_i = R_inner + wobble

        # Parallel radial strand from inner border to outer border
        p_o = Vector((r_o * cx, r_o * sy, 0.032))
        p_i = Vector((r_i * cx, r_i * sy, 0.032))
        make_cylinder_between(bm_tails, p_o, p_i, 0.015, segs=6)

        # Second deeper parallel layer right underneath so the border looks thick in 3D
        p_o_low = Vector((r_o * cx, r_o * sy, -0.025))
        p_i_low = Vector((r_i * cx, r_i * sy, -0.025))
        make_cylinder_between(bm_tails, p_o_low, p_i_low, 0.015, segs=5)

        if i % 2 == 0:
            add_fast_ico_sphere(bm_heads, p_o, 0.028)
            add_fast_ico_sphere(bm_heads, p_i, 0.026)

    objs.append(create_mesh_object("PM_LipidHeads", bm_heads, mat_head))
    objs.append(create_mesh_object("PM_LipidTails", bm_tails, mat_tail))

    # E. Inner Cytoplasmic Cell Cortex (Cortical Actin / Spectrin Protein Meshwork)
    # "A set of proteins, not perfectly folded, like a lot of lines in parallel one to each other
    # that cover the inner cytoplasm border and inner wall of the cell"
    bm_cortex = bmesh.new()
    rng_c = np.random.default_rng(404)

    # 1) 7 concentric organic parallel protein rings lining the inner cytoplasmic rim & upper inner bowl wall
    for ring_idx in range(7):
        t_ring = ring_idx / 6.0
        r_base = (R_inner - 0.04) - ring_idx * 0.055
        z_base = 0.025 - ring_idx * 0.075
        n_segs = 180
        ring_pts = []
        phase = rng_c.uniform(0.0, 2.0 * math.pi)
        for k in range(n_segs):
            th = (2.0 * math.pi * k) / n_segs
            # Organic, non-perfectly-folded parallel waves
            dr = 0.022 * math.sin(14.0 * th + phase) + 0.014 * math.cos(23.0 * th - phase * 0.7)
            dz = 0.018 * math.cos(16.0 * th + phase)
            rr = r_base + dr
            zz = z_base + dz
            ring_pts.append(Vector((rr * math.cos(th), rr * math.sin(th), zz)))
        for k in range(n_segs):
            make_cylinder_between(bm_cortex, ring_pts[k], ring_pts[(k + 1) % n_segs], 0.016, segs=6)

    # 2) 120 parallel meridional/oblique cortical protein filaments lining the upper inner perimeter wall
    for m_idx in range(120):
        th0 = (2.0 * math.pi * m_idx) / 120.0 + rng_c.uniform(-0.015, 0.015)
        pts_m = []
        for s in range(6):
            frac = s / 5.0
            lat = frac * math.radians(19.0)
            th_cur = th0 + 0.03 * math.sin(frac * math.pi * 2.0 + m_idx * 0.3)
            r_bowl = (R_inner - 0.06) * math.cos(lat)
            z_bowl = -(R_inner - 0.06) * math.sin(lat) * 0.72
            pts_m.append(Vector((r_bowl * math.cos(th_cur), r_bowl * math.sin(th_cur), z_bowl)))
        for s in range(len(pts_m) - 1):
            make_cylinder_between(bm_cortex, pts_m[s], pts_m[s + 1], 0.014, segs=5)

    objs.append(create_mesh_object("PM_CorticalProteins", bm_cortex, mat_cortex))

    # F. Purple Transmembrane Channel Dimers + Bright-Green Y-Shaped Glycoprotein Chains
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

    nuc_center = Vector((0.55, 0.65, 0.25))
    R_nuc = 1.92
    R_in = 1.66

    # A. Full-3D Spherical Outer Nuclear Envelope (including full bottom hemisphere!)
    # Only the front-left-top surgical cutaway quadrant is removed so the bottom of the Nucleus is 100% 3D!
    bm_env = bmesh.new()
    bmesh.ops.create_uvsphere(bm_env, u_segments=56, v_segments=36, radius=R_nuc)
    del_v = []
    for v in bm_env.verts:
        if v.co.x < 0.22 and v.co.y < 0.32 and v.co.z > -0.12:
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

    # B. Concave Periwinkle-Lavender Cutaway Nucleoplasm Interior Basin (full 3D sphere inside)
    bm_plasm = bmesh.new()
    bmesh.ops.create_uvsphere(bm_plasm, u_segments=48, v_segments=32, radius=R_in)
    for v in bm_plasm.verts:
        # Carve the front-left quadrant into a smooth concave cutaway basin around the nucleolus
        if v.co.x < 0.28 and v.co.y < 0.38 and v.co.z > -0.15:
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

    # D. Dark Recessed Nuclear Pore Complexes (NPCs) dotting the entire 3D nuclear sphere (top & bottom!)
    bm_pores = bmesh.new()
    golden_angle = math.pi * (3.0 - math.sqrt(5.0))
    for i in range(68):
        z_local = -1.75 + (3.50 * i) / 67.0
        if abs(z_local) >= R_nuc - 0.14:
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
# Exact Shape-Conforming 2D/3D Signed Distance Field (SDF) Collision Engine
# (Zero Square Hitboxes — Conforms Exactly to Curved Organelle Contours!)
# ==============================================================================
class OrganelleCollisionField:
    """
    Tracks exact curved spine segments `(ax, ay, bx, by, r, tag)` and circular boundaries
    `(cx, cy, r, tag)` so that curved ER puzzle pieces, Golgi cisternae, vesicles, lysosomes,
    centrioles, and mitochondria never overlap each other—without needing square hitboxes!
    """

    def __init__(self, inner_wall_radius: float = 5.20):
        self.inner_wall_radius = inner_wall_radius
        self.circles = []   # (cx, cy, rad, tag)
        self.segments = []  # (ax, ay, bx, by, rad, tag)

    def add_circle(self, cx: float, cy: float, rad: float, tag: str):
        self.circles.append((float(cx), float(cy), float(rad), tag))

    def add_segment(self, ax: float, ay: float, bx: float, by: float, rad: float, tag: str):
        self.segments.append((float(ax), float(ay), float(bx), float(by), float(rad), tag))

    def add_polyline(self, pts: list, base_half_width: float, tag: str):
        for i in range(len(pts) - 1):
            p0, p1 = pts[i], pts[i + 1]
            w0 = float(p0[2]) if len(p0) > 2 else 1.0
            w1 = float(p1[2]) if len(p1) > 2 else 1.0
            r_seg = base_half_width * 0.5 * (w0 + w1)
            self.add_segment(p0[0], p0[1], p1[0], p1[1], r_seg, tag)

    def eval_sdf_grid(self, X: np.ndarray, Y: np.ndarray, exclude_tag: str = None) -> np.ndarray:
        # Distance to outer cell cortical boundary (keep inside inner_wall_radius)
        D = self.inner_wall_radius - np.hypot(X, Y)
        for cx, cy, rad, tag in self.circles:
            if tag == exclude_tag:
                continue
            d_c = np.hypot(X - cx, Y - cy) - rad
            D = np.minimum(D, d_c)
        for ax, ay, bx, by, rad, tag in self.segments:
            if tag == exclude_tag:
                continue
            vx, vy = bx - ax, by - ay
            l2 = vx * vx + vy * vy + 1e-12
            t = np.clip(((X - ax) * vx + (Y - ay) * vy) / l2, 0.0, 1.0)
            d_s = np.hypot(X - (ax + t * vx), Y - (ay + t * vy)) - rad
            D = np.minimum(D, d_s)
        return D

    def min_clearance_point(self, px: float, py: float, rad: float, exclude_tag: str = None) -> float:
        min_d = (self.inner_wall_radius - math.hypot(px, py)) - rad
        for cx, cy, r_c, tag in self.circles:
            if tag == exclude_tag:
                continue
            min_d = min(min_d, math.hypot(px - cx, py - cy) - (r_c + rad))
        for ax, ay, bx, by, r_s, tag in self.segments:
            if tag == exclude_tag:
                continue
            vx, vy = bx - ax, by - ay
            l2 = vx * vx + vy * vy + 1e-12
            t = max(0.0, min(1.0, ((px - ax) * vx + (py - ay) * vy) / l2))
            d = math.hypot(px - (ax + t * vx), py - (ay + t * vy)) - (r_s + rad)
            min_d = min(min_d, d)
        return min_d

    def find_clear_spot(self, px: float, py: float, rad: float, min_gap: float = 0.06, exclude_tag: str = None):
        """If `(px, py)` overlaps an obstacle, spiral-searches nearby for the closest overlap-free coordinate."""
        if self.min_clearance_point(px, py, rad, exclude_tag) >= min_gap:
            return px, py
        best_xy = (px, py)
        best_clear = self.min_clearance_point(px, py, rad, exclude_tag)
        for step_r in np.linspace(0.06, 1.15, 18):
            for k in range(24):
                ang = (2.0 * math.pi * k) / 24.0
                tx = px + step_r * math.cos(ang)
                ty = py + step_r * math.sin(ang)
                cl = self.min_clearance_point(tx, ty, rad, exclude_tag)
                if cl >= min_gap:
                    return tx, ty
                if cl > best_clear:
                    best_clear = cl
                    best_xy = (tx, ty)
        return best_xy


# ==============================================================================
# Helper: 2D Smooth-Distance-Field (SDF) Multi-Branch Puzzle Organelle Builder
# ==============================================================================
def _extract_sdf_contours(X, Y, F, level: float):
    rows, cols = F.shape
    B = (F < level).astype(int)
    segments = {}
    pts = {}

    def get_h(r, c):
        key = ("H", r, c)
        if key not in pts:
            v0, v1 = F[r, c], F[r, c + 1]
            t = max(0.0, min(1.0, float((level - v0) / (v1 - v0 + 1e-12))))
            pts[key] = (
                float(X[r, c] * (1.0 - t) + X[r, c + 1] * t),
                float(Y[r, c] * (1.0 - t) + Y[r, c + 1] * t),
            )
        return key

    def get_v(r, c):
        key = ("V", r, c)
        if key not in pts:
            v0, v1 = F[r, c], F[r + 1, c]
            t = max(0.0, min(1.0, float((level - v0) / (v1 - v0 + 1e-12))))
            pts[key] = (
                float(X[r, c] * (1.0 - t) + X[r + 1, c] * t),
                float(Y[r, c] * (1.0 - t) + Y[r + 1, c] * t),
            )
        return key

    for r in range(rows - 1):
        for c in range(cols - 1):
            code = B[r, c] | (B[r, c + 1] << 1) | (B[r + 1, c + 1] << 2) | (B[r + 1, c] << 3)
            if code == 0 or code == 15:
                continue
            if code == 1:
                segments[get_v(r, c)] = get_h(r, c)
            elif code == 2:
                segments[get_h(r, c)] = get_v(r, c + 1)
            elif code == 3:
                segments[get_v(r, c)] = get_v(r, c + 1)
            elif code == 4:
                segments[get_v(r, c + 1)] = get_h(r + 1, c)
            elif code == 5:
                segments[get_v(r, c)] = get_h(r + 1, c)
                segments[get_v(r, c + 1)] = get_h(r, c)
            elif code == 6:
                segments[get_h(r, c)] = get_h(r + 1, c)
            elif code == 7:
                segments[get_v(r, c)] = get_h(r + 1, c)
            elif code == 8:
                segments[get_h(r + 1, c)] = get_v(r, c)
            elif code == 9:
                segments[get_h(r + 1, c)] = get_h(r, c)
            elif code == 10:
                segments[get_h(r, c)] = get_v(r, c)
                segments[get_h(r + 1, c)] = get_v(r, c + 1)
            elif code == 11:
                segments[get_h(r + 1, c)] = get_v(r, c + 1)
            elif code == 12:
                segments[get_v(r, c + 1)] = get_v(r, c)
            elif code == 13:
                segments[get_v(r, c + 1)] = get_h(r, c)
            elif code == 14:
                segments[get_h(r, c)] = get_v(r, c)

    loops = []
    visited = set()
    for start_k in list(segments.keys()):
        if start_k in visited:
            continue
        loop = []
        cur = start_k
        while cur not in visited and cur in segments:
            visited.add(cur)
            loop.append(pts[cur])
            cur = segments[cur]
        if len(loop) >= 8:
            arr = np.array(loop, dtype=np.float64)
            for _ in range(6):
                arr = 0.55 * arr + 0.225 * (np.roll(arr, 1, axis=0) + np.roll(arr, -1, axis=0))
                arr = 1.42 * arr - 0.21 * (np.roll(arr, 1, axis=0) + np.roll(arr, -1, axis=0))
            loops.append(arr)
    return loops


def build_sdf_organelle_sac(
    name_prefix: str,
    branches: list,
    z_bottom,
    z_top: float,
    half_width: float,
    groove_depth: float,
    mat_wall,
    mat_top_rim,
    mat_lumen,
    ribo_bm=None,
    ribo_seed: int = 0,
    collision_field: OrganelleCollisionField = None,
    clearance: float = 0.052,
    register_in_collision: bool = True,
    rim_ratio: float = 0.42,
):
    """
    Constructs a 3D hollow puzzle-piece organelle sac (single curved sac, U-hairpin, S-meander,
    T-junction, or H-bridge) with exact SDF collision avoidance against `collision_field`!
    """
    all_pts = [pt for br in branches for pt in br]
    if len(all_pts) < 2:
        return []

    xs_all = [p[0] for p in all_pts]
    ys_all = [p[1] for p in all_pts]
    pad = half_width * 2.5
    xmin, xmax = min(xs_all) - pad, max(xs_all) + pad
    ymin, ymax = min(ys_all) - pad, max(ys_all) + pad

    ds = 0.017
    cols = max(24, int((xmax - xmin) / ds) + 1)
    rows = max(24, int((ymax - ymin) / ds) + 1)
    xs = np.linspace(xmin, xmax, cols)
    ys = np.linspace(ymin, ymax, rows)
    X, Y = np.meshgrid(xs, ys)

    F = np.full(X.shape, 1e6, dtype=np.float64)
    k_smooth = 0.058

    for br in branches:
        if len(br) < 2:
            continue
        D_br = np.full(X.shape, 1e6, dtype=np.float64)
        for i in range(len(br) - 1):
            p0 = br[i]
            p1 = br[i + 1]
            ax, ay = float(p0[0]), float(p0[1])
            bx, by = float(p1[0]), float(p1[1])
            w0 = float(p0[2]) if len(p0) > 2 else 1.0
            w1 = float(p1[2]) if len(p1) > 2 else 1.0
            vx, vy = bx - ax, by - ay
            seg_len2 = vx * vx + vy * vy + 1e-12
            t = np.clip(((X - ax) * vx + (Y - ay) * vy) / seg_len2, 0.0, 1.0)
            px = ax + t * vx
            py = ay + t * vy
            w_loc = w0 + t * (w1 - w0)
            dist = np.hypot(X - px, Y - py) / np.maximum(0.35, w_loc)
            D_br = np.minimum(D_br, dist)
        # Polynomial smooth min across branches so T-junctions & H-bridges fillet organically
        h = np.maximum(k_smooth - np.abs(F - D_br), 0.0) / k_smooth
        F = np.minimum(F, D_br) - 0.25 * h * h * k_smooth

    # Exact shape-conforming SDF collision repulsion against all previously placed organelles & pieces!
    if collision_field is not None:
        D_obs = collision_field.eval_sdf_grid(X, Y, exclude_tag=name_prefix)
        F_repel = (half_width + clearance) - D_obs
        k_rep = 0.028
        h_rep = np.maximum(k_rep - np.abs(F - F_repel), 0.0) / k_rep
        F = np.maximum(F, F_repel) + 0.25 * h_rep * h_rep * k_rep

    loops = _extract_sdf_contours(X, Y, F, half_width)
    if not loops:
        return []

    if collision_field is not None and register_in_collision:
        for br in branches:
            collision_field.add_polyline(br, half_width, tag=name_prefix)

    bm_wall = bmesh.new()
    bm_rim = bmesh.new()
    bm_lumen = bmesh.new()

    rim_w = half_width * rim_ratio
    z_groove = z_top - groove_depth

    for loop_idx, loop_arr in enumerate(loops):
        m = len(loop_arr)
        if m < 8:
            continue

        # Compute smooth unit inward normals pointing toward decreasing F (into the sac lumen)
        normals_in = []
        for i in range(m):
            p_prev = loop_arr[(i - 1) % m]
            p_next = loop_arr[(i + 1) % m]
            tx = float(p_next[0] - p_prev[0])
            ty = float(p_next[1] - p_prev[1])
            tlen = math.hypot(tx, ty) + 1e-12
            tx /= tlen
            ty /= tlen
            # In our marching squares convention, (ty, -tx) points into F < level
            nx_in, ny_in = ty, -tx
            normals_in.append((nx_in, ny_in))

        wall_ring = []
        rim_ring = []
        lum_ring = []

        for i in range(m):
            px, py = float(loop_arr[i, 0]), float(loop_arr[i, 1])
            nx_in, ny_in = normals_in[i]
            zb = z_bottom(px, py) if callable(z_bottom) else float(z_bottom)

            # Outer wall profile from z_top down to zb (with organic 3D belly bulge)
            v_top = bm_wall.verts.new((px, py, z_top))
            v_mid1 = bm_wall.verts.new((px - nx_in * 0.022, py - ny_in * 0.022, z_top - 0.30 * (z_top - zb)))
            v_mid2 = bm_wall.verts.new((px - nx_in * 0.008, py - ny_in * 0.008, z_top - 0.70 * (z_top - zb)))
            v_bot = bm_wall.verts.new((px + nx_in * (half_width * 0.32), py + ny_in * (half_width * 0.32), zb))
            wall_ring.append((v_top, v_mid1, v_mid2, v_bot))

            # Continuous flat-sliced top rim (wraps around sides, rounded ends, and T/H-junctions!)
            qx = px + nx_in * rim_w
            qy = py + ny_in * rim_w
            r_out = bm_rim.verts.new((px, py, z_top))
            r_in = bm_rim.verts.new((qx, qy, z_top))
            rim_ring.append((r_out, r_in))

            # Recessed dark lumen channel side wall
            lx = px + nx_in * (rim_w + half_width * 0.14)
            ly = py + ny_in * (rim_w + half_width * 0.14)
            l_top = bm_lumen.verts.new((qx, qy, z_top))
            l_bot = bm_lumen.verts.new((lx, ly, z_groove))
            lum_ring.append((l_top, l_bot))

            # Optional 80S Ribosome studding along the 3D outer blue walls (checked against collision field!)
            if ribo_bm is not None and i % 4 == 0:
                for z_idx, z_r in enumerate((z_top - 0.09, z_top - 0.25, z_top - 0.52, z_top - 0.90, z_top - 1.30)):
                    if z_r > zb + 0.14 and ((i // 4 + z_idx + ribo_seed) % 2 == 0):
                        out_shift = 0.028 if z_idx in (1, 2) else 0.018
                        rx = px - nx_in * out_shift
                        ry = py - ny_in * out_shift
                        if collision_field is None or collision_field.min_clearance_point(rx, ry, 0.026, exclude_tag=name_prefix) > 0.005:
                            add_fast_ico_sphere(ribo_bm, Vector((rx, ry, z_r)), 0.031)

        for i in range(m):
            j = (i + 1) % m
            w0, w1 = wall_ring[i], wall_ring[j]
            r0, r1 = rim_ring[i], rim_ring[j]
            l0, l1 = lum_ring[i], lum_ring[j]
            bm_wall.faces.new((w0[0], w0[1], w1[1], w1[0]))
            bm_wall.faces.new((w0[1], w0[2], w1[2], w1[1]))
            bm_wall.faces.new((w0[2], w0[3], w1[3], w1[2]))
            bm_rim.faces.new((r0[0], r1[0], r1[1], r0[1]))
            bm_lumen.faces.new((l0[0], l1[0], l1[1], l0[1]))

    # Grid-based watertight dark lumen floor at z_groove & bottom sac cap at zb
    lum_thresh = half_width * 0.85
    lum_grid_verts = {}

    def get_lum_v(r, c):
        k = (r, c)
        if k not in lum_grid_verts:
            lum_grid_verts[k] = bm_lumen.verts.new((float(X[r, c]), float(Y[r, c]), z_groove))
        return lum_grid_verts[k]

    bot_grid_verts = {}

    def get_bot_v(r, c):
        k = (r, c)
        if k not in bot_grid_verts:
            gx, gy = float(X[r, c]), float(Y[r, c])
            zb_g = z_bottom(gx, gy) if callable(z_bottom) else float(z_bottom)
            bot_grid_verts[k] = bm_wall.verts.new((gx, gy, zb_g))
        return bot_grid_verts[k]

    for r in range(rows - 1):
        for c in range(cols - 1):
            f_max = max(F[r, c], F[r, c + 1], F[r + 1, c + 1], F[r + 1, c])
            if f_max <= lum_thresh:
                bm_lumen.faces.new((get_lum_v(r, c), get_lum_v(r, c + 1), get_lum_v(r + 1, c + 1), get_lum_v(r + 1, c)))
                bm_wall.faces.new((get_bot_v(r, c), get_bot_v(r + 1, c), get_bot_v(r + 1, c + 1), get_bot_v(r, c + 1)))

    return [
        create_mesh_object(f"{name_prefix}_Wall", bm_wall, mat_wall),
        create_mesh_object(f"{name_prefix}_Rim", bm_rim, mat_top_rim),
        create_mesh_object(f"{name_prefix}_Lumen", bm_lumen, mat_lumen),
    ]


# ==============================================================================
# 3. Piece_Cell_RoughSmoothER (Collision-Verified Interlocking Puzzle Agglomeration)
# ==============================================================================
def build_piece_rough_smooth_er(collision_field: OrganelleCollisionField):
    objs = []
    mat_wall = get_bio_material("ERWallBlue", "#3B62B8", roughness=0.28, metalness=0.05)
    mat_rim = get_bio_material("ERTopRimLight", "#80B0FF", roughness=0.20, metalness=0.04)
    mat_lumen = get_bio_material("ERLumenDark", "#12204A", roughness=0.48, metalness=0.05)
    mat_ribo = get_bio_material("RibosomeDarkNavy", "#10172E", roughness=0.35, metalness=0.10)

    nuc_cx, nuc_cy, nuc_cz = 0.55, 0.65, 0.25

    def make_arc_branch(r_base: float, th0_deg: float, th1_deg: float, wobble_amp: float = 0.016, pinch_mid: float = 0.0, n_pts: int = 28):
        pts = []
        for i in range(n_pts):
            u = i / float(n_pts - 1)
            th = math.radians(th0_deg + (th1_deg - th0_deg) * u)
            dr = wobble_amp * math.sin(u * math.pi * 2.0)
            r = r_base + dr
            px = nuc_cx + r * math.cos(th)
            py = nuc_cy + r * math.sin(th)
            end_bulge = 1.0 + 0.08 * ((2.0 * u - 1.0) ** 4)
            mid_pinch = 1.0 + pinch_mid * (math.sin(u * math.pi) ** 2)
            w_mult = end_bulge * mid_pinch
            pts.append((px, py, w_mult))
        return pts

    def make_radial_bridge(r_a: float, th_a_deg: float, r_b: float, th_b_deg: float, w_mult: float = 0.86):
        pts = []
        for i in range(8):
            u = i / 7.0
            r = r_a + (r_b - r_a) * u
            th = math.radians(th_a_deg + (th_b_deg - th_a_deg) * u)
            pts.append((nuc_cx + r * math.cos(th), nuc_cy + r * math.sin(th), w_mult))
        return pts

    # 5 nested radial tiers with clean radial spacing (dr = 0.285, half_width = 0.094)
    # and clean angular gaps (~11 deg between end-caps on the same tier so rounded ends never collide!)
    r1, r2, r3, r4, r5 = 2.16, 2.44, 2.72, 3.00, 3.28

    puzzle_specs = [
        # --- Upper-Left Sector (108° -> 146°) ---
        ("ER_Puz_01_UL_Hairpin", [
            make_arc_branch(r1, 108.0, 144.0, wobble_amp=0.014),
            make_arc_branch(r2, 112.0, 144.0, wobble_amp=-0.014),
            make_radial_bridge(r1, 141.0, r2, 141.0),
        ], 0.36, 0),
        ("ER_Puz_02_UL_Hook", [
            make_arc_branch(r3, 116.0, 146.0, wobble_amp=0.014),
            make_arc_branch(r4, 124.0, 146.0, wobble_amp=-0.014),
            make_radial_bridge(r3, 126.0, r4, 126.0),
        ], 0.35, 1),

        # --- Left Sector Inside Centrosome Bay (156° -> 194°, respecting Centrosome at (-3.15, 0.88)) ---
        ("ER_Puz_03_Left_H", [
            make_arc_branch(r1, 156.0, 192.0, wobble_amp=0.014),
            make_arc_branch(r2, 156.0, 192.0, wobble_amp=-0.014),
            make_radial_bridge(r1, 174.0, r2, 174.0),
        ], 0.36, 2),
        ("ER_Puz_04_Left_UHook", [
            make_arc_branch(r3, 158.0, 192.0, wobble_amp=0.014),
            make_arc_branch(r4, 158.0, 176.0, wobble_amp=-0.014),
            make_radial_bridge(r3, 160.0, r4, 160.0),
        ], 0.35, 3),

        # --- Front-Left Sector Above Left Golgi Bay (204° -> 244°: stays within r <= r3 so Left Golgi has a wide clear bay!) ---
        ("ER_Puz_06_FL_InnerSac", [
            make_arc_branch(r1, 204.0, 244.0, wobble_amp=0.014, pinch_mid=-0.10),
        ], 0.36, 5),
        ("ER_Puz_07_FL_TBranch", [
            make_arc_branch(r2, 204.0, 243.0, wobble_amp=0.014),
            make_arc_branch(r3, 206.0, 240.0, wobble_amp=-0.014),
            make_radial_bridge(r2, 223.0, r3, 223.0),
        ], 0.35, 6),

        # --- Front-Bottom Channel Between Left & Right Golgi Stacks (255° -> 296°) ---
        ("ER_Puz_09_FB_InnerU", [
            make_arc_branch(r1, 256.0, 298.0, wobble_amp=0.014),
            make_arc_branch(r2, 256.0, 294.0, wobble_amp=-0.014),
            make_radial_bridge(r1, 288.0, r2, 288.0),
        ], 0.36, 8),
        ("ER_Puz_08_FB_MidStep", [
            make_arc_branch(r3, 252.0, 288.0, wobble_amp=0.014),
            make_arc_branch(r4, 252.0, 284.0, wobble_amp=-0.014),
            make_radial_bridge(r3, 268.0, r4, 268.0),
        ], 0.34, 7),
        # Signature Front-Bottom Outer Sculpted Bilobed Sac in the central corridor between the two Golgi stacks!
        ("ER_Puz_12_FB_OuterBilobed", [
            make_arc_branch(r5, 256.0, 282.0, wobble_amp=0.018, pinch_mid=-0.18, n_pts=30),
        ], 0.33, 11),

        # --- Front-Right Sector Above Right Golgi Bay (304° -> 334°: stays within r <= r3 so Right Golgi has a wide clear bay!) ---
        ("ER_Puz_10_FB_MidSac", [
            make_arc_branch(r2, 306.0, 335.0, wobble_amp=0.014, pinch_mid=-0.08),
            make_arc_branch(r3, 304.0, 330.0, wobble_amp=-0.014),
            make_radial_bridge(r2, 316.0, r3, 316.0),
        ], 0.35, 9),

        # --- Right & Upper-Right Sector (310° -> 414°) ---
        ("ER_Puz_14_Right_InnerSac", [
            make_arc_branch(r1, 310.0, 356.0, wobble_amp=0.014),
        ], 0.36, 13),
        ("ER_Puz_15_Right_SStep", [
            make_arc_branch(r2, 346.0, 380.0, wobble_amp=0.014),
            make_arc_branch(r3, 344.0, 376.0, wobble_amp=-0.014),
            make_radial_bridge(r2, 362.0, r3, 362.0),
        ], 0.35, 14),
        ("ER_Puz_16_Right_OuterHook", [
            make_arc_branch(r4, 344.0, 372.0, wobble_amp=0.014),
            make_arc_branch(r5, 348.0, 372.0, wobble_amp=-0.014),
            make_radial_bridge(r4, 366.0, r5, 366.0),
        ], 0.34, 15),
        ("ER_Puz_17_UR_InnerHairpin", [
            make_arc_branch(r1, 368.0, 412.0, wobble_amp=0.014),
            make_arc_branch(r2, 392.0, 412.0, wobble_amp=-0.014),
            make_radial_bridge(r1, 409.0, r2, 409.0),
        ], 0.36, 16),
        ("ER_Puz_18_UR_OuterHook", [
            make_arc_branch(r3, 388.0, 412.0, wobble_amp=0.014),
            make_arc_branch(r4, 384.0, 408.0, wobble_amp=-0.014),
            make_radial_bridge(r3, 390.0, r4, 390.0),
        ], 0.35, 17),
    ]

    ribo_bm = bmesh.new()

    def er_z_bottom(px, py):
        d_origin = math.hypot(px, py)
        max_depth = -math.sqrt(max(0.25, 5.05 * 5.05 - d_origin * d_origin)) * 0.40
        target_z = -0.82 + 0.08 * math.sin(px * 1.9) * math.cos(py * 1.9)
        return max(max_depth, target_z)

    for p_name, p_branches, z_t, r_seed in puzzle_specs:
        objs.extend(
            build_sdf_organelle_sac(
                p_name,
                p_branches,
                z_bottom=er_z_bottom,
                z_top=z_t,
                half_width=0.094,
                groove_depth=0.22,
                mat_wall=mat_wall,
                mat_top_rim=mat_rim,
                mat_lumen=mat_lumen,
                ribo_bm=ribo_bm,
                ribo_seed=r_seed,
                collision_field=collision_field,
                clearance=0.068,
                register_in_collision=True,
            )
        )
        # Also register the 24-deg tilt-projected lower 3D wall footprint so Lysosomes/Filaments below ER never touch its 3D wall
        for br in p_branches:
            tilted_br = [(pt[0], pt[1] - 0.24, pt[2] if len(pt) > 2 else 1.0) for pt in br]
            collision_field.add_polyline(tilted_br, 0.11, tag=f"{p_name}_TiltFootprint")

    # B. Flared Smooth ER Trumpet Chimney & Peripheral Tubular Cross-Section Cups (collision-verified!)
    cup_specs = [
        # (theta_deg, radius, cup_rad, z_top, z_bot)
        (150.0, 3.42, 0.18, 0.42, -0.80),  # Prominent left flared Smooth ER trumpet funnel above Centrosome!
        (134.0, 3.42, 0.14, 0.28, -0.78),  # Upper-left Smooth ER cup
        (382.0, 3.42, 0.14, 0.26, -0.78),  # Upper-right Smooth ER cup 1
        (396.0, 3.42, 0.13, 0.24, -0.75),  # Upper-right Smooth ER cup 2
    ]
    for c_idx, (ang_d, r_t, c_rad, z_t, z_b) in enumerate(cup_specs):
        th = math.radians(ang_d)
        cx_raw = nuc_cx + r_t * math.cos(th)
        cy_raw = nuc_cy + r_t * math.sin(th)
        cx, cy = collision_field.find_clear_spot(cx_raw, cy_raw, c_rad + 0.06, min_gap=0.06)
        collision_field.add_circle(cx, cy, c_rad + 0.06, tag=f"SER_Cup_{c_idx}")
        pts_cup = [
            (cx + c_rad * math.cos(2.0 * math.pi * k / 20.0), cy + c_rad * math.sin(2.0 * math.pi * k / 20.0))
            for k in range(20)
        ]
        objs.extend(
            build_flat_topped_ribbon_loop(
                f"SER_Cup_{c_idx}",
                pts_cup,
                z_bottom=z_b,
                z_top=z_t,
                half_width=0.050,
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
# 4. Piece_Cell_GolgiStack (Semicircle-to-Flattened, Middle-Pinched Cisternae & Tear-Drop Buds)
# ==============================================================================
def build_single_golgi_stack(
    prefix: str,
    center_xy,
    angle_deg: float,
    wall_hex: str,
    rim_hex: str,
    lum_hex: str,
    collision_field: OrganelleCollisionField,
):
    objs = []
    mat_wall = get_bio_material(f"{prefix}_Body", wall_hex, roughness=0.25, metalness=0.04)
    mat_rim = get_bio_material(f"{prefix}_Rim", rim_hex, roughness=0.19, metalness=0.04)
    mat_lumen = get_bio_material(f"{prefix}_Lumen", lum_hex, roughness=0.48, metalness=0.04)

    cx, cy = center_xy
    rot = math.radians(angle_deg)
    cos_r, sin_r = math.cos(rot), math.sin(rot)

    def to_world(lx, ly):
        return (cx + lx * cos_r - ly * sin_r, cy + lx * sin_r + ly * cos_r)

    bm_ves = bmesh.new()

    # 6 stacked cisternae matching ref_mito_golgi_left.png & ref_golgi_bottom.png:
    # - Outer cisternae (|s| = 1.0) have a shorter span (span_x = 0.56) and strong arch so they look like true semicircles!
    # - Going toward the center of the stack (|s| -> 0), span_x widens to 0.90 and the curve flattens out!
    # - Every cisterna is pinched very thin in the middle (u = 0) and swells into wide bulbous pouches on the outer sides (|u| -> 1)!
    n_cist = 6
    cist_endpoints = []
    deferred_polylines = []

    for c_i in range(n_cist):
        s = (c_i - 2.5) / 2.5  # [-1.0, -0.6, -0.2, +0.2, +0.6, +1.0]
        abs_s = abs(s)
        # Tightly pinched waist in the middle (u = 0)
        y_waist = s * 0.195
        # Short semicircle span on the outer cisternae (0.56), widening to 0.90 as they flatten in the center!
        span_x = 0.90 - 0.34 * (s * s)

        pts_branch = []
        n_pts = 46
        for k in range(n_pts):
            u = -1.0 + (2.0 * k) / float(n_pts - 1)
            abs_u = abs(u)
            u2 = u * u
            u4 = u2 * u2

            # Outer cisternae (|s| = 1) arch strongly like semicircles; going toward the center (|s| -> 0) they flatten out!
            lx = u * span_x * (1.0 - 0.10 * abs_s * u4)
            semi_arch = s * (abs_s ** 0.5) * (0.18 * u2 + 0.16 * u4)
            ly = y_waist + semi_arch

            wx, wy = to_world(lx, ly)
            # Thinner in the middle (w_mult = 0.38 across |u| < 0.5), swelling into wide rounded semicircular bulbs on the outer sides (w_mult = 1.68 at |u| -> 1)
            bulb_env = math.exp(-(((1.0 - abs_u) / 0.24) ** 2))
            w_mult = 0.38 + 0.12 * u2 + 1.18 * bulb_env
            pts_branch.append((wx, wy, w_mult))

        objs.extend(
            build_sdf_organelle_sac(
                f"{prefix}_Cist_{c_i}",
                [pts_branch],
                z_bottom=-0.95 + abs_s * 0.14,
                z_top=0.33,
                half_width=0.060,
                groove_depth=0.22,
                mat_wall=mat_wall,
                mat_top_rim=mat_rim,
                mat_lumen=mat_lumen,
                collision_field=None,
                register_in_collision=False,
                rim_ratio=0.25,
            )
        )
        deferred_polylines.append((pts_branch, f"{prefix}_Buffer_{c_i}"))
        cist_endpoints.append((c_i, s, span_x, y_waist))

    # Now register the completed Golgi stack into collision_field so ER, vesicles, and cytoskeleton stay clear
    if collision_field is not None:
        for pts_b, tag_b in deferred_polylines:
            collision_field.add_polyline(pts_b, 0.115, tag=tag_b)

    # 3D stalked tear-drop buds protruding from the lower 3D walls + detached secretory vesicles around the bulbous ends
    for c_i, s, span_x, y_waist in cist_endpoints:
        abs_s = abs(s)
        y_end = y_waist + s * (abs_s ** 0.5) * 0.34
        lx_end = span_x * (1.0 - 0.10 * abs_s)
        for dir_sign in (-1.0, 1.0):
            # 3D stalked tear-drop bud attached to the lower 3D wall of outer/intermediate cisternae
            if c_i in (0, 1, 4, 5):
                bx0, by0 = to_world(dir_sign * (lx_end * 0.90), y_end * 0.90)
                bx1, by1 = to_world(dir_sign * (lx_end + 0.14), y_end + 0.06 * s)
                p_root = Vector((bx0, by0, 0.06))
                p_head = Vector((bx1, by1, 0.11))
                make_cylinder_between(bm_ves, p_root, p_head, 0.032, segs=8)
                make_sphere_mesh(bm_ves, p_head, 0.068, segs=12, rings=10)

            # Detached spherical secretory vesicles near the bulbous ends
            if (c_i + (0 if dir_sign < 0 else 1)) % 2 != 0:
                continue
            vx_raw, vy_raw = to_world(dir_sign * (lx_end + 0.25), y_end + 0.05 * s)
            v_rad = 0.080
            vx, vy = collision_field.find_clear_spot(vx_raw, vy_raw, v_rad, min_gap=0.050)
            if collision_field.min_clearance_point(vx, vy, v_rad) >= 0.030:
                collision_field.add_circle(vx, vy, v_rad + 0.03, tag=f"{prefix}_Ves_{c_i}_{dir_sign}")
                make_sphere_mesh(bm_ves, Vector((vx, vy, 0.12)), v_rad, segs=12, rings=10)

    objs.append(create_mesh_object(f"{prefix}_Vesicles", bm_ves, mat_wall))
    return objs


def build_piece_golgi_stack(collision_field: OrganelleCollisionField):
    objs = []
    # Golgi Stack A (Bottom-Left peripheral bay — Rich Orchid-Violet matching ref_mito_golgi_left.png)
    objs.extend(
        build_single_golgi_stack(
            "GolgiLeft",
            center_xy=(-2.20, -2.70),
            angle_deg=-35.0,
            wall_hex="#8A34A3",
            rim_hex="#EC9EF7",
            lum_hex="#180321",
            collision_field=collision_field,
        )
    )
    # Golgi Stack B (Bottom-Right peripheral bay — Warm Rose-Mauve matching ref_golgi_bottom.png)
    objs.extend(
        build_single_golgi_stack(
            "GolgiRight",
            center_xy=(2.42, -2.56),
            angle_deg=28.0,
            wall_hex="#AD3B6D",
            rim_hex="#F7A6CB",
            lum_hex="#210411",
            collision_field=collision_field,
        )
    )
    return join_and_tilt_piece(objs, "Piece_Cell_GolgiStack")


# ==============================================================================
# 5. Piece_Cell_Mitochondria (Deep 3D Hollow Boat Basin + 3D Zigzag Labyrinth Cristae)
# ==============================================================================
def build_solid_topped_3d_wall_loop(
    name_prefix: str,
    pts_2d: list,
    z_bottom: float,
    z_top: float,
    half_width: float,
    mat_wall,
    mat_top_rim,
):
    """
    Extrudes a closed 2D loop into a thick, solid-topped 3D architectural wall with a 3D beveled upper shoulder:
    - Top face at `z_top` is a continuous, solid flat ribbon (`mat_top_rim`, width `2 * w_top`) with NO slit cut down the middle.
    - Upper 3D beveled shoulder widens from `w_top` at `z_top` out to `w_sh` at `z_sh` so the warm terracotta 3D wall is visible on BOTH sides of every zigzag fold from above!
    - Vertical 3D side walls descend from `z_sh` all the way down to `z_bottom` (`mat_wall`).
    """
    arr = np.array(pts_2d, dtype=np.float64)
    for _ in range(2):
        arr = 0.62 * arr + 0.19 * (np.roll(arr, 1, axis=0) + np.roll(arr, -1, axis=0))
        arr = 1.22 * arr - 0.11 * (np.roll(arr, 1, axis=0) + np.roll(arr, -1, axis=0))

    n = len(arr)
    bm_wall = bmesh.new()
    bm_rim = bmesh.new()

    wall_rings = []
    rim_rings = []
    # Keep vertical walls truly vertical (w_top -> 1.04*w_top) so smooth-shaded normals point horizontally (nx, ny, 0)
    # and never bleed upward (+Z) into the overhead light!
    w_top = half_width
    w_sh = half_width * 1.04
    w_bot = half_width * 0.96
    z_sh = z_top - 0.12
    z_mid = 0.45 * z_sh + 0.55 * z_bottom

    for i in range(n):
        p_prev = arr[(i - 1) % n]
        p_next = arr[(i + 1) % n]
        tx = float(p_next[0] - p_prev[0])
        ty = float(p_next[1] - p_prev[1])
        tlen = math.hypot(tx, ty) + 1e-12
        nx, ny = -ty / tlen, tx / tlen

        px, py = float(arr[i, 0]), float(arr[i, 1])

        # Left and right vertical 3D walls descending from z_top down to z_bottom
        v_lb = bm_wall.verts.new((px - nx * w_bot, py - ny * w_bot, z_bottom))
        v_lm = bm_wall.verts.new((px - nx * w_sh, py - ny * w_sh, z_mid))
        v_ls = bm_wall.verts.new((px - nx * w_sh, py - ny * w_sh, z_sh))
        v_lt = bm_wall.verts.new((px - nx * w_top, py - ny * w_top, z_top))
        v_rt = bm_wall.verts.new((px + nx * w_top, py + ny * w_top, z_top))
        v_rs = bm_wall.verts.new((px + nx * w_sh, py + ny * w_sh, z_sh))
        v_rm = bm_wall.verts.new((px + nx * w_sh, py + ny * w_sh, z_mid))
        v_rb = bm_wall.verts.new((px + nx * w_bot, py + ny * w_bot, z_bottom))
        wall_rings.append((v_lb, v_lm, v_ls, v_lt, v_rt, v_rs, v_rm, v_rb))

        # Solid flat top rim spanning [-w_top, +w_top] at z_top
        r_l = bm_rim.verts.new((px - nx * w_top, py - ny * w_top, z_top))
        r_r = bm_rim.verts.new((px + nx * w_top, py + ny * w_top, z_top))
        rim_rings.append((r_l, r_r))

    for i in range(n):
        j = (i + 1) % n
        w0, w1 = wall_rings[i], wall_rings[j]
        r0, r1 = rim_rings[i], rim_rings[j]
        try:
            bm_wall.faces.new((w0[0], w1[0], w1[1], w0[1]))
            bm_wall.faces.new((w0[1], w1[1], w1[2], w0[2]))
            bm_wall.faces.new((w0[2], w1[2], w1[3], w0[3]))
            bm_wall.faces.new((w0[4], w1[4], w1[5], w0[5]))
            bm_wall.faces.new((w0[5], w1[5], w1[6], w0[6]))
            bm_wall.faces.new((w0[6], w1[6], w1[7], w0[7]))
            bm_rim.faces.new((r0[0], r1[0], r1[1], r0[1]))
        except ValueError:
            pass

    bmesh.ops.recalc_face_normals(bm_wall, faces=bm_wall.faces)
    bmesh.ops.recalc_face_normals(bm_rim, faces=bm_rim.faces)
    return [
        create_mesh_object(f"{name_prefix}_Wall", bm_wall, mat_wall),
        create_mesh_object(f"{name_prefix}_Rim", bm_rim, mat_top_rim),
    ]


def build_single_sliced_mitochondrion(
    idx: int,
    center_xy,
    angle_deg: float,
    length: float = 1.65,
    width: float = 0.86,
    z_offset: float = 0.0,
    collision_field: OrganelleCollisionField = None,
):
    objs = []
    # Linear-calibrated rich golden-amber / terracotta palette matching ref_mito_golgi_left.png & ref_golgi_bottom.png:
    # Named without 'Wall'/'Hull' so Three.js renders them 100% solid opaque with proper depth occlusion,
    # and 'MitoMatrixUmber' so Three.js applies matte dark-lumen shading to the recessed cavity floor!
    mat_outer = get_bio_material("MitoOuterOrange", "#C8460C", roughness=0.24, metalness=0.04)
    mat_inner_wall = get_bio_material("MitoInnerOrange", "#9E2E04", roughness=0.25, metalness=0.04)
    mat_rim = get_bio_material("MitoCristaeApricot", "#F59638", roughness=0.20, metalness=0.04)
    mat_matrix = get_bio_material("MitoMatrixUmber", "#1A0501", roughness=0.52, metalness=0.04)

    cx, cy = center_xy
    rot = math.radians(angle_deg)
    cos_r, sin_r = math.cos(rot), math.sin(rot)

    def to_world(lx, ly):
        ly_bean = ly + 0.085 * (1.0 - min(1.0, (lx / (0.5 * length)) ** 2))
        return (cx + lx * cos_r - ly_bean * sin_r, cy + lx * sin_r + ly_bean * cos_r)

    if collision_field is not None:
        spine_pts = []
        for s in range(9):
            u = -1.0 + 2.0 * (s / 8.0)
            wx, wy = to_world(u * (0.5 * length * 0.76), 0.0)
            spine_pts.append((wx, wy, 1.0))
        collision_field.add_polyline(spine_pts, width * 0.58, tag=f"Mito_{idx}")

    z_top_hull = 0.275 + z_offset
    z_floor = -0.20 + z_offset

    # A. Outer Bean Lower Boat Hull (from z_bot = -0.68 up to z_top_hull, strictly v.co.z <= 0.001 so top normals are 100% horizontal!)
    bm_hull = bmesh.new()
    bmesh.ops.create_uvsphere(bm_hull, u_segments=52, v_segments=26, radius=1.0)
    del_top = [v for v in bm_hull.verts if v.co.z > 0.001]
    bmesh.ops.delete(bm_hull, geom=del_top, context="VERTS")
    for v in bm_hull.verts:
        lx = v.co.x * (0.5 * length)
        ly = v.co.y * (0.5 * width)
        lz = z_top_hull + v.co.z * 0.88
        wx, wy = to_world(lx, ly)
        v.co = Vector((wx, wy, lz))
    bmesh.ops.recalc_face_normals(bm_hull, faces=bm_hull.faces)
    objs.append(create_mesh_object(f"Mito_{idx}_Hull", bm_hull, mat_outer))

    # B. Outer Membrane Top Rim & Deep 3D Inner Cavity Wall (from z_top_hull = +0.268 down to z_floor = -0.36)
    pts_outer_rim = []
    n_out = 76
    a_rim = 0.5 * length - 0.024
    b_rim = 0.5 * width - 0.024
    for k in range(n_out):
        th = (2.0 * math.pi * k) / float(n_out)
        pts_outer_rim.append(to_world(a_rim * math.cos(th), b_rim * math.sin(th)))

    objs.extend(
        build_solid_topped_3d_wall_loop(
            f"Mito_{idx}_OuterRim",
            pts_outer_rim,
            z_bottom=z_floor,
            z_top=z_top_hull,
            half_width=0.025,
            mat_wall=mat_outer,
            mat_top_rim=mat_rim,
        )
    )

    # C. Deep Recessed Cavity Floor at z_floor = -0.36 (0.628 units below the top rim for dramatic 3D cavity depth!)
    bm_floor = bmesh.new()
    a_fl = 0.5 * length - 0.032
    b_fl = 0.5 * width - 0.032
    v_center = bm_floor.verts.new((*to_world(0.0, 0.0), z_floor))
    fl_ring = []
    for k in range(n_out):
        th = (2.0 * math.pi * k) / float(n_out)
        wx, wy = to_world(a_fl * math.cos(th), b_fl * math.sin(th))
        fl_ring.append(bm_floor.verts.new((wx, wy, z_floor)))
    for k in range(n_out):
        bm_floor.faces.new((v_center, fl_ring[k], fl_ring[(k + 1) % n_out]))
    bmesh.ops.recalc_face_normals(bm_floor, faces=bm_floor.faces)
    objs.append(create_mesh_object(f"Mito_{idx}_MatrixFloor", bm_floor, mat_matrix))

    # D. 3D Zigzag Labyrinth Inner Membrane (`Mito_Cristae`)
    # Uses 7 alternating parallel-walled, rounded-U-turn folds (super-Gaussian exponent 3.6):
    # - 3 wide top-down U-turn fingers at u = (-0.44, 0.00, +0.44) reaching down past the centerline to -0.26 * y_env
    # - 4 bottom-up U-turn fingers at u = (-0.66, -0.22, +0.22, +0.66) reaching up past the centerline to +0.26 * y_env
    a_in = 0.5 * length - 0.096
    b_in = 0.5 * width - 0.090

    def y_env_at(u_val: float) -> float:
        return b_in * math.sqrt(max(0.08, 1.0 - 0.86 * u_val * u_val))

    top_folds = [(-0.44, 1.26, 0.068), (0.00, 1.28, 0.068), (0.44, 1.26, 0.068)]
    bot_folds = [(-0.66, 0.96, 0.056), (-0.22, 1.28, 0.068), (0.22, 1.28, 0.068), (0.66, 0.96, 0.056)]

    pts_labyrinth = []
    n_chain = 136

    # 1. Top chain from left (u = -0.86) to right (u = +0.86)
    for k in range(n_chain):
        u = -0.86 + (1.72 * k) / float(n_chain - 1)
        ye = y_env_at(u)
        dip = 0.0
        for u_c, depth_mult, sig in top_folds:
            g = math.exp(-((abs(u - u_c) / sig) ** 3.6))
            dip = max(dip, depth_mult * g)
        ly = ye * (1.0 - dip)
        pts_labyrinth.append(to_world(u * a_in, ly))

    # 2. Right rounded end-cap from top (u = +0.86) around +0.98 to bottom (u = +0.86)
    n_cap = 16
    ye_end = y_env_at(0.86)
    for k in range(1, n_cap):
        ang = 0.5 * math.pi - (math.pi * k) / float(n_cap)
        u = 0.86 + 0.12 * math.cos(ang)
        ly = ye_end * math.sin(ang)
        pts_labyrinth.append(to_world(u * a_in, ly))

    # 3. Bottom chain from right (u = +0.86) to left (u = -0.86)
    for k in range(n_chain):
        u = 0.86 - (1.72 * k) / float(n_chain - 1)
        ye = y_env_at(u)
        rise = 0.0
        for u_c, depth_mult, sig in bot_folds:
            g = math.exp(-((abs(u - u_c) / sig) ** 3.6))
            rise = max(rise, depth_mult * g)
        ly = -ye * (1.0 - rise)
        pts_labyrinth.append(to_world(u * a_in, ly))

    # 4. Left rounded end-cap from bottom (u = -0.86) around -0.98 to top (u = -0.86)
    for k in range(1, n_cap):
        ang = -0.5 * math.pi - (math.pi * k) / float(n_cap)
        u = -0.86 - 0.12 * math.cos(ang)
        ly = ye_end * math.sin(ang)
        pts_labyrinth.append(to_world(u * a_in, ly))

    objs.extend(
        build_solid_topped_3d_wall_loop(
            f"Mito_{idx}_Cristae",
            pts_labyrinth,
            z_bottom=z_floor,
            z_top=0.262 + z_offset,
            half_width=0.0185,
            mat_wall=mat_inner_wall,
            mat_top_rim=mat_rim,
        )
    )
    return objs


def build_piece_mitochondria(collision_field: OrganelleCollisionField):
    objs = []
    # 5 primary cutaway-plane mitochondria matching Adobe Stock #2089488593 (no overlapping lower duplicates!)
    mito_specs = [
        ((-4.08, -0.58), 76.0, 1.56, 0.82, 0.0),    # Mid-Left
        ((-2.92, 2.84), 34.0, 1.52, 0.80, 0.0),     # Top-Left
        ((-0.18, 4.28), 6.0, 1.52, 0.80, 0.0),      # Top-Center (clean clearance above Nucleus dome!)
        ((0.15, -4.12), -8.0, 1.56, 0.82, 0.0),     # Bottom-Center
        ((4.28, -0.35), -68.0, 1.54, 0.82, 0.0),    # Mid-Right
    ]
    for idx, (cxy, ang, l_m, w_m, z_off) in enumerate(mito_specs):
        objs.extend(build_single_sliced_mitochondrion(idx, cxy, ang, l_m, w_m, z_off, collision_field=collision_field))
    return join_and_tilt_piece(objs, "Piece_Cell_Mitochondria")


# ==============================================================================
# 6. Piece_Cell_CytoskeletonCentrosome (Collision-Clipped Filaments & Centrioles)
# ==============================================================================
CENTROSOME_SPECS = [
    (Vector((-3.12, 0.88, 0.08)), Euler((0.2, 1.35, 0.55)), 0.56),
    (Vector((-2.66, 1.34, 0.10)), Euler((1.2, 0.35, -0.45)), 0.54),
    (Vector((-2.62, 0.44, 0.08)), Euler((1.35, -0.25, 0.25)), 0.54),
]


def register_centrosome_in_collision(collision_field: OrganelleCollisionField):
    for idx, (c_pos, c_eul, c_len) in enumerate(CENTROSOME_SPECS):
        rot_m = c_eul.to_matrix()
        p_a = c_pos - (rot_m @ Vector((0, 0, 0.5 * c_len)))
        p_b = c_pos + (rot_m @ Vector((0, 0, 0.5 * c_len)))
        collision_field.add_segment(p_a.x, p_a.y, p_b.x, p_b.y, 0.22, tag=f"Centriole_{idx}")


def build_piece_cytoskeleton_centrosome(collision_field: OrganelleCollisionField):
    objs = []
    mat_cent = get_bio_material("CentrioleGold", "#D9822B", roughness=0.26, metalness=0.08)
    mat_cyto = get_bio_material("CytoskeletonTan", "#BFA072", roughness=0.35, metalness=0.05)
    mat_ribo = get_bio_material("FreeRibosomeDark", "#10172E", roughness=0.35, metalness=0.10)

    # A. Centrosome: 3 Golden-Tan 9x3 Microtubule-Triplet Centriole Barrels in their own clear middle-left bay
    bm_cent = bmesh.new()
    for c_pos, c_eul, c_len in CENTROSOME_SPECS:
        rot_m = c_eul.to_matrix()
        p_a = c_pos - (rot_m @ Vector((0, 0, 0.5 * c_len)))
        p_b = c_pos + (rot_m @ Vector((0, 0, 0.5 * c_len)))
        for k in range(9):
            th = (2.0 * math.pi * k) / 9.0
            off_local = rot_m @ Vector((0.13 * math.cos(th), 0.13 * math.sin(th), 0.0))
            make_cylinder_between(bm_cent, p_a + off_local, p_b + off_local, 0.034, segs=8)
    objs.append(create_mesh_object("Cyto_Centrioles", bm_cent, mat_cent))

    # B. Cytoskeletal Filaments clipped strictly to open cytoplasmic bays (never passing through/behind organelles!)
    bm_fil = bmesh.new()
    rng = np.random.default_rng(202)
    for f_i in range(42):
        ang0 = (2.0 * math.pi * f_i) / 42.0 + rng.uniform(-0.10, 0.10)
        ang1 = ang0 + rng.uniform(0.55, 1.15)
        r0 = rng.uniform(3.35, 4.88)
        r1 = rng.uniform(3.35, 4.88)
        z0 = rng.uniform(-0.28, -0.06)
        z1 = rng.uniform(-0.28, -0.06)
        p_start = Vector((r0 * math.cos(ang0), r0 * math.sin(ang0), z0))
        p_end = Vector((r1 * math.cos(ang1), r1 * math.sin(ang1), z1))
        p_mid = 0.5 * (p_start + p_end) + Vector((rng.uniform(-0.25, 0.25), rng.uniform(-0.25, 0.25), -0.05))
        n_sub = 12
        pts_f = [((1 - (s / n_sub)) ** 2) * p_start + 2 * (1 - (s / n_sub)) * (s / n_sub) * p_mid + ((s / n_sub) ** 2) * p_end for s in range(n_sub + 1)]
        for s in range(n_sub):
            pa, pb = pts_f[s], pts_f[s + 1]
            pm = 0.5 * (pa + pb)
            # Only emit filament segment if both endpoints and midpoint are completely clear of all organelles!
            if (
                collision_field.min_clearance_point(pa.x, pa.y, 0.06) > 0.06
                and collision_field.min_clearance_point(pb.x, pb.y, 0.06) > 0.06
                and collision_field.min_clearance_point(pm.x, pm.y, 0.06) > 0.06
            ):
                make_cylinder_between(bm_fil, pa, pb, 0.022, segs=6)
    objs.append(create_mesh_object("Cyto_Filaments", bm_fil, mat_cyto))

    # C. Free Cytosolic Ribosome Granules filtered by `collision_field` so none appear inside or under organelles!
    bm_ribo = bmesh.new()
    for r_i in range(220):
        ang = rng.uniform(0.0, 2.0 * math.pi)
        rad = rng.uniform(2.3, 4.9)
        zz = -0.08 + rng.uniform(-0.18, 0.14)
        rx = rad * math.cos(ang)
        ry = rad * math.sin(ang)
        if collision_field.min_clearance_point(rx, ry, 0.06) < 0.08:
            continue
        add_fast_ico_sphere(bm_ribo, Vector((rx, ry, zz)), 0.034)
    objs.append(create_mesh_object("Cyto_FreeRibosomes", bm_ribo, mat_ribo))

    return join_and_tilt_piece(objs, "Piece_Cell_CytoskeletonCentrosome")


# ==============================================================================
# 7. Piece_Cell_LysosomePeroxisome (Collision-Verified Open-Bay Distribution)
# ==============================================================================
def build_piece_lysosome_peroxisome(collision_field: OrganelleCollisionField):
    objs = []
    mat_lyso_shell = get_bio_material("LysosomeShell", "#89ADE8", roughness=0.14, metalness=0.05, alpha=0.58)
    mat_lyso_core = get_bio_material("LysosomeCore", "#5A4699", roughness=0.38, metalness=0.04)
    mat_cup = get_bio_material("EndosomeCup", "#6898DC", roughness=0.24, metalness=0.04)

    bm_shell = bmesh.new()
    bm_core = bmesh.new()

    # Intact glossy/translucent spherical lysosomes & peroxisomes placed strictly in open cytoplasmic bays!
    sphere_locs = [
        ((-3.78, 1.58, 0.14), 0.30),
        ((-4.30, 0.62, 0.08), 0.23),
        ((-1.52, 3.78, 0.12), 0.27),
        ((-0.55, -3.28, 0.12), 0.25),
        ((0.82, -3.26, 0.10), 0.22),
        ((2.75, 3.45, 0.08), 0.23),
    ]
    for idx, ((sx, sy, sz), rad) in enumerate(sphere_locs):
        sx, sy = collision_field.find_clear_spot(sx, sy, rad, min_gap=0.12)
        collision_field.add_circle(sx, sy, rad + 0.04, tag=f"Lyso_{idx}")
        c = Vector((sx, sy, sz))
        make_sphere_mesh(bm_shell, c, rad, segs=20, rings=14)
        make_sphere_mesh(bm_core, c, rad * 0.70, segs=14, rings=10)

    objs.append(create_mesh_object("Lyso_Shells", bm_shell, mat_lyso_shell))
    objs.append(create_mesh_object("Lyso_Cores", bm_core, mat_lyso_core))

    # Half-sliced cup-shaped vesicles/endosomes (collision-verified with generous gap!)
    cup_locs = [
        ((-3.58, -1.96, 0.02), 0.23),
        ((-1.05, -3.82, 0.02), 0.18),
        ((3.62, -1.92, 0.02), 0.22),
        ((4.08, 1.38, 0.02), 0.21),
    ]
    for c_i, ((cx, cy, cz), rad) in enumerate(cup_locs):
        cx, cy = collision_field.find_clear_spot(cx, cy, rad + 0.05, min_gap=0.11)
        collision_field.add_circle(cx, cy, rad + 0.05, tag=f"Lyso_Cup_{c_i}")
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
    using the Exact Shape-Conforming SDF Collision Engine (`OrganelleCollisionField`)
    so that zero organelles, ER puzzle sacs, Golgi cisternae, or vesicles overlap!
    """
    collision_field = OrganelleCollisionField(inner_wall_radius=5.12)
    # 1. Register Nucleus outer envelope boundary (center = (0.55, 0.65), R = 1.98)
    collision_field.add_circle(0.55, 0.65, 1.98, tag="Nucleus")
    # 2. Register Centrosome centriole barrels in their middle-left bay
    register_centrosome_in_collision(collision_field)

    pm_obj = build_piece_plasma_membrane()
    nuc_obj = build_piece_nucleus()
    # 3. Build & register Mitochondria and Golgi Stacks first so ER puzzle pieces mold cleanly around them
    mito_obj = build_piece_mitochondria(collision_field)
    golgi_obj = build_piece_golgi_stack(collision_field)
    # 4. Build ER puzzle pieces with piece-to-piece + organelle SDF collision avoidance
    er_obj = build_piece_rough_smooth_er(collision_field)
    # 5. Build Lysosomes/Endosomes and Cytoskeleton/Free Ribosomes with collision avoidance
    lyso_obj = build_piece_lysosome_peroxisome(collision_field)
    cyto_obj = build_piece_cytoskeleton_centrosome(collision_field)

    return [
        pm_obj,
        nuc_obj,
        er_obj,
        golgi_obj,
        mito_obj,
        cyto_obj,
        lyso_obj,
    ]
