import bpy
import bmesh
import math
import random
from mathutils import Vector, Euler, Matrix
import os
import sys

def clear_all():
    """Safely removes all objects, meshes, curves, lights, cameras, and materials without touching add-ons."""
    for o in list(bpy.data.objects):
        bpy.data.objects.remove(o, do_unlink=True)
    for m in list(bpy.data.meshes):
        bpy.data.meshes.remove(m, do_unlink=True)
    for c in list(bpy.data.curves):
        bpy.data.curves.remove(c, do_unlink=True)
    for mat in list(bpy.data.materials):
        bpy.data.materials.remove(mat, do_unlink=True)
    for l in list(bpy.data.lights):
        bpy.data.lights.remove(l, do_unlink=True)
    for cam in list(bpy.data.cameras):
        bpy.data.cameras.remove(cam, do_unlink=True)
    for col in list(bpy.data.collections):
        bpy.data.collections.remove(col, do_unlink=True)

def create_pbr_material(name, base_color, roughness=0.45, sss_weight=0.20, sss_color=(1.0, 0.8, 0.6), metallic=0.0, transmission=0.0, bump_scale=0.0, bump_strength=0.15):
    """Creates a high-end physical PBR shader with procedural noise bump and subsurface scattering."""
    mat = bpy.data.materials.new(name=name)
    nodes = mat.node_tree.nodes
    links = mat.node_tree.links
    nodes.clear()
    
    bsdf = nodes.new(type='ShaderNodeBsdfPrincipled')
    bsdf.inputs['Base Color'].default_value = base_color
    bsdf.inputs['Roughness'].default_value = roughness
    bsdf.inputs['Metallic'].default_value = metallic
    
    # Subsurface scattering
    if 'Subsurface Weight' in bsdf.inputs:
        bsdf.inputs['Subsurface Weight'].default_value = sss_weight
        if 'Subsurface Radius' in bsdf.inputs:
            bsdf.inputs['Subsurface Radius'].default_value = Vector(sss_color)
    elif 'Subsurface' in bsdf.inputs:
        bsdf.inputs['Subsurface'].default_value = sss_weight
        if 'Subsurface Radius' in bsdf.inputs:
            bsdf.inputs['Subsurface Radius'].default_value = Vector(sss_color)
            
    # Transmission
    if transmission > 0.0:
        if 'Transmission Weight' in bsdf.inputs:
            bsdf.inputs['Transmission Weight'].default_value = transmission
        elif 'Transmission' in bsdf.inputs:
            bsdf.inputs['Transmission'].default_value = transmission

    # Procedural Organic Bump mapping
    if bump_scale > 0.0:
        tex_coord = nodes.new(type='ShaderNodeTexCoord')
        noise_tex = nodes.new(type='ShaderNodeTexNoise')
        noise_tex.inputs['Scale'].default_value = bump_scale
        noise_tex.inputs['Detail'].default_value = 6.0
        noise_tex.inputs['Roughness'].default_value = 0.65
        
        bump = nodes.new(type='ShaderNodeBump')
        bump.inputs['Strength'].default_value = bump_strength
        bump.inputs['Distance'].default_value = 0.04
        
        links.new(tex_coord.outputs['Object'], noise_tex.inputs['Vector'])
        links.new(noise_tex.outputs['Fac'], bump.inputs['Height'])
        links.new(bump.outputs['Normal'], bsdf.inputs['Normal'])
            
    output = nodes.new(type='ShaderNodeOutputMaterial')
    links.new(bsdf.outputs['BSDF'], output.inputs['Surface'])
    return mat

def create_porous_wall_material(name):
    """
    Creates the authentic thick layered cell wall material:
    - Rich Sage Green on left (-X) transitioning to warm Sandy Terracotta on right (+X)
    - High-contrast Voronoi circular cavity pits/pores on the cut face exactly matching Image 3!
    """
    mat = bpy.data.materials.new(name=name)
    nodes = mat.node_tree.nodes
    links = mat.node_tree.links
    nodes.clear()
    
    tex_coord = nodes.new(type='ShaderNodeTexCoord')
    mapping = nodes.new(type='ShaderNodeMapping')
    links.new(tex_coord.outputs['Object'], mapping.inputs['Vector'])
    
    # 1. Gradient from Left (-X) to Right (+X)
    sep_xyz = nodes.new(type='ShaderNodeSeparateXYZ')
    links.new(mapping.outputs['Vector'], sep_xyz.inputs['Vector'])
    
    map_range = nodes.new(type='ShaderNodeMapRange')
    map_range.inputs['From Min'].default_value = -1.8
    map_range.inputs['From Max'].default_value = 1.8
    map_range.inputs['To Min'].default_value = 0.0
    map_range.inputs['To Max'].default_value = 1.0
    links.new(sep_xyz.outputs['X'], map_range.inputs['Value'])
    
    # 1. Full solid rich biological green base (20% darker, stronger green across entire piece, no brown degradé)
    color_ramp = nodes.new(type='ShaderNodeValToRGB')
    color_ramp.color_ramp.elements[0].position = 0.0
    color_ramp.color_ramp.elements[0].color = (0.055, 0.145, 0.045, 1.0) # Deep biological forest/sage green (20% darker)
    
    elem_mid = color_ramp.color_ramp.elements.new(0.48)
    elem_mid.color = (0.075, 0.185, 0.060, 1.0) # Rich biological mid-green
    
    color_ramp.color_ramp.elements[1].position = 1.0
    color_ramp.color_ramp.elements[1].color = (0.055, 0.145, 0.045, 1.0) # Full green across entire piece
    links.new(map_range.outputs['Result'], color_ramp.inputs['Fac'])
    
    # 2. Voronoi circular pores & cavities
    voronoi = nodes.new(type='ShaderNodeTexVoronoi')
    voronoi.feature = 'F1'
    voronoi.distance = 'EUCLIDEAN'
    voronoi.inputs['Scale'].default_value = 16.0
    links.new(mapping.outputs['Vector'], voronoi.inputs['Vector'])
    
    pore_ramp = nodes.new(type='ShaderNodeValToRGB')
    pore_ramp.color_ramp.elements[0].position = 0.0
    pore_ramp.color_ramp.elements[0].color = (0.14, 0.10, 0.08, 1.0) # Very dark pore interior
    pore_ramp.color_ramp.elements[1].position = 0.32
    pore_ramp.color_ramp.elements[1].color = (1.0, 1.0, 1.0, 1.0) # Normal surface
    links.new(voronoi.outputs['Distance'], pore_ramp.inputs['Fac'])
    
    mix_color = nodes.new(type='ShaderNodeMix')
    mix_color.data_type = 'RGBA'
    mix_color.blend_type = 'MULTIPLY'
    mix_color.inputs['Factor'].default_value = 0.92
    links.new(color_ramp.outputs['Color'], mix_color.inputs['A'])
    links.new(pore_ramp.outputs['Color'], mix_color.inputs['B'])
    
    # Fine sandstone noise bump + pore indentations
    noise_tex = nodes.new(type='ShaderNodeTexNoise')
    noise_tex.inputs['Scale'].default_value = 45.0
    noise_tex.inputs['Detail'].default_value = 5.0
    links.new(mapping.outputs['Vector'], noise_tex.inputs['Vector'])
    
    bump = nodes.new(type='ShaderNodeBump')
    bump.inputs['Strength'].default_value = 0.35
    bump.inputs['Distance'].default_value = 0.06
    links.new(noise_tex.outputs['Fac'], bump.inputs['Height'])
    
    bsdf = nodes.new(type='ShaderNodeBsdfPrincipled')
    bsdf.inputs['Roughness'].default_value = 0.58
    if 'Subsurface Weight' in bsdf.inputs:
        bsdf.inputs['Subsurface Weight'].default_value = 0.22
        if 'Subsurface Radius' in bsdf.inputs:
            bsdf.inputs['Subsurface Radius'].default_value = Vector((1.0, 0.7, 0.5))
    elif 'Subsurface' in bsdf.inputs:
        bsdf.inputs['Subsurface'].default_value = 0.22
        
    links.new(mix_color.outputs['Result'], bsdf.inputs['Base Color'])
    links.new(bump.outputs['Normal'], bsdf.inputs['Normal'])
    
    output = nodes.new(type='ShaderNodeOutputMaterial')
    links.new(bsdf.outputs['BSDF'], output.inputs['Surface'])
    return mat

def create_nucleoid_rugose_material(name):
    """
    Creates an ultra-rugose, fibrous, matte biological chromatin PBR material
    with high-frequency micro-creasing, deep crevices, and tactile velvet sheen.
    """
    mat = bpy.data.materials.new(name=name)
    nodes = mat.node_tree.nodes
    links = mat.node_tree.links
    nodes.clear()
    
    tex_coord = nodes.new(type='ShaderNodeTexCoord')
    mapping = nodes.new(type='ShaderNodeMapping')
    links.new(tex_coord.outputs['Object'], mapping.inputs['Vector'])
    
    # 1. High-frequency fibrous noise
    noise_fine = nodes.new(type='ShaderNodeTexNoise')
    noise_fine.inputs['Scale'].default_value = 160.0
    noise_fine.inputs['Detail'].default_value = 12.0
    noise_fine.inputs['Roughness'].default_value = 0.80
    links.new(mapping.outputs['Vector'], noise_fine.inputs['Vector'])
    
    # 2. Medium organic creasing noise
    noise_med = nodes.new(type='ShaderNodeTexNoise')
    noise_med.inputs['Scale'].default_value = 50.0
    noise_med.inputs['Detail'].default_value = 8.0
    noise_med.inputs['Roughness'].default_value = 0.75
    links.new(mapping.outputs['Vector'], noise_med.inputs['Vector'])
    
    # Mix for rugose height
    mix_bump = nodes.new(type='ShaderNodeMix')
    mix_bump.data_type = 'FLOAT'
    mix_bump.inputs['Factor'].default_value = 0.55
    links.new(noise_fine.outputs['Fac'], mix_bump.inputs['A'])
    links.new(noise_med.outputs['Fac'], mix_bump.inputs['B'])
    
    bump = nodes.new(type='ShaderNodeBump')
    bump.inputs['Strength'].default_value = 0.85 # Strong rugose texture!
    bump.inputs['Distance'].default_value = 0.05
    links.new(mix_bump.outputs['Result'], bump.inputs['Height'])
    
    # Color shading precisely calibrated to the Microcompartment purple icon under Cycles AgX
    color_ramp = nodes.new(type='ShaderNodeValToRGB')
    color_ramp.color_ramp.elements[0].position = 0.15
    color_ramp.color_ramp.elements[0].color = (0.045, 0.020, 0.085, 1.0) # Deep shadow crevice
    
    elem_mid = color_ramp.color_ramp.elements.new(0.50)
    elem_mid.color = (0.135, 0.055, 0.245, 1.0) # Saturated grape purple body
    
    color_ramp.color_ramp.elements[1].position = 0.85
    color_ramp.color_ramp.elements[1].color = (0.300, 0.140, 0.520, 1.0) # Microcompartment crest highlight
    links.new(noise_med.outputs['Fac'], color_ramp.inputs['Fac'])
    
    bsdf = nodes.new(type='ShaderNodeBsdfPrincipled')
    bsdf.inputs['Roughness'].default_value = 0.82 # Organic, matte, ZERO glossy plastic!
    bsdf.inputs['Metallic'].default_value = 0.0
    
    if 'Subsurface Weight' in bsdf.inputs:
        bsdf.inputs['Subsurface Weight'].default_value = 0.16
        if 'Subsurface Radius' in bsdf.inputs:
            bsdf.inputs['Subsurface Radius'].default_value = Vector((0.9, 0.3, 0.95))
    elif 'Subsurface' in bsdf.inputs:
        bsdf.inputs['Subsurface'].default_value = 0.16
        
    links.new(color_ramp.outputs['Color'], bsdf.inputs['Base Color'])
    links.new(bump.outputs['Normal'], bsdf.inputs['Normal'])
    
    output = nodes.new(type='ShaderNodeOutputMaterial')
    links.new(bsdf.outputs['BSDF'], output.inputs['Surface'])
    return mat

def create_capsule_cutaway_layer(name, length, radius, z_cut, mat, collection, wall_thickness=0.065, subsurf_levels=1):
    """
    Builds a clean, beveled capsule cutaway layer with solid rim thickness.
    """
    bm = bmesh.new()
    segments_u = 72
    segments_v = 36
    
    temp_mesh = bpy.data.meshes.new(f"{name}_mesh")
    temp_obj = bpy.data.objects.new(name, temp_mesh)
    collection.objects.link(temp_obj)
    
    # 1. Central Cylinder
    bmesh.ops.create_cone(
        bm,
        cap_ends=False,
        cap_tris=False,
        segments=segments_u,
        radius1=radius,
        radius2=radius,
        depth=length,
        matrix=Matrix.Rotation(math.pi/2, 4, 'Y')
    )
    
    # 2. Hemisphere +X
    bm_pos = bmesh.new()
    bmesh.ops.create_uvsphere(bm_pos, u_segments=segments_u, v_segments=segments_v, radius=radius)
    bmesh.ops.rotate(bm_pos, cent=(0,0,0), matrix=Matrix.Rotation(math.pi/2, 3, 'Y'), verts=bm_pos.verts)
    verts_neg = [v for v in bm_pos.verts if v.co.x < -0.001]
    bmesh.ops.delete(bm_pos, geom=verts_neg, context='VERTS')
    bmesh.ops.translate(bm_pos, vec=(length/2, 0, 0), verts=bm_pos.verts)
    
    # 3. Hemisphere -X
    bm_neg = bmesh.new()
    bmesh.ops.create_uvsphere(bm_neg, u_segments=segments_u, v_segments=segments_v, radius=radius)
    bmesh.ops.rotate(bm_neg, cent=(0,0,0), matrix=Matrix.Rotation(-math.pi/2, 3, 'Y'), verts=bm_neg.verts)
    verts_pos = [v for v in bm_neg.verts if v.co.x > 0.001]
    bmesh.ops.delete(bm_neg, geom=verts_pos, context='VERTS')
    bmesh.ops.translate(bm_neg, vec=(-length/2, 0, 0), verts=bm_neg.verts)
    
    for bm_src in (bm_pos, bm_neg):
        v_map = {}
        for v in bm_src.verts:
            v_map[v] = bm.verts.new(v.co)
        for f in bm_src.faces:
            bm.faces.new([v_map[v] for v in f.verts])
        bm_src.free()
        
    bmesh.ops.remove_doubles(bm, verts=bm.verts, dist=0.003)
    
    # Bisect and remove top half above z_cut
    bmesh.ops.bisect_plane(
        bm,
        geom=bm.verts[:] + bm.edges[:] + bm.faces[:],
        plane_co=(0, 0, z_cut),
        plane_no=(0, 0, 1),
        clear_outer=True,
        clear_inner=False
    )
    
    bm.to_mesh(temp_mesh)
    bm.free()
    temp_mesh.update()
    
    sol = temp_obj.modifiers.new(name="Solidify", type='SOLIDIFY')
    sol.thickness = wall_thickness
    sol.offset = -1.0
    
    if subsurf_levels > 0:
        sub = temp_obj.modifiers.new(name="Subdivision", type='SUBSURF')
        sub.levels = subsurf_levels
        sub.render_levels = subsurf_levels
        
    temp_obj.data.materials.append(mat)
    for poly in temp_obj.data.polygons:
        poly.use_smooth = True
        
    return temp_obj

def build_cytoplasm_basin(name, length, radius, z_top, mat, collection):
    """Builds the interior cytoplasmic volume bed."""
    bm = bmesh.new()
    segments_u = 72
    segments_v = 36
    
    bmesh.ops.create_cone(
        bm,
        cap_ends=False,
        cap_tris=False,
        segments=segments_u,
        radius1=radius,
        radius2=radius,
        depth=length,
        matrix=Matrix.Rotation(math.pi/2, 4, 'Y')
    )
    
    for sign, rot in ((1, math.pi/2), (-1, -math.pi/2)):
        bm_cap = bmesh.new()
        bmesh.ops.create_uvsphere(bm_cap, u_segments=segments_u, v_segments=segments_v, radius=radius)
        bmesh.ops.rotate(bm_cap, cent=(0,0,0), matrix=Matrix.Rotation(rot, 3, 'Y'), verts=bm_cap.verts)
        verts_del = [v for v in bm_cap.verts if (v.co.x * sign) < -0.001]
        bmesh.ops.delete(bm_cap, geom=verts_del, context='VERTS')
        bmesh.ops.translate(bm_cap, vec=(sign * length/2, 0, 0), verts=bm_cap.verts)
        
        v_map = {}
        for v in bm_cap.verts:
            v_map[v] = bm.verts.new(v.co)
        for f in bm_cap.faces:
            bm.faces.new([v_map[v] for v in f.verts])
        bm_cap.free()
        
    bmesh.ops.remove_doubles(bm, verts=bm.verts, dist=0.003)
    
    ret = bmesh.ops.bisect_plane(
        bm,
        geom=bm.verts[:] + bm.edges[:] + bm.faces[:],
        plane_co=(0, 0, z_top),
        plane_no=(0, 0, 1),
        clear_outer=True,
        clear_inner=False
    )
    
    cut_edges = [e for e in ret['geom_cut'] if isinstance(e, bmesh.types.BMEdge)]
    if cut_edges:
        bmesh.ops.edgeloop_fill(bm, edges=cut_edges)
        
    mesh = bpy.data.meshes.new(name)
    bm.to_mesh(mesh)
    bm.free()
    mesh.update()
    
    obj = bpy.data.objects.new(name, mesh)
    collection.objects.link(obj)
    obj.data.materials.append(mat)
    
    for poly in obj.data.polygons:
        poly.use_smooth = True
    return obj

def build_dense_supercoiled_nucleoid(collection, length, radius, z_level, mat):
    """
    Constructs an ultra-dense, thin, yarn-like supercoiled purple chromatin skein
    with intricate micro-loops, organic writhing, and high rugosity matching Image 3.
    """
    curve_data = bpy.data.curves.new(name="Nucleoid_Chromosome", type='CURVE')
    curve_data.dimensions = '3D'
    curve_data.fill_mode = 'FULL'
    # Fine yarn-like thread diameter: 0.016 (matching textbook illustration!)
    curve_data.bevel_depth = 0.016
    curve_data.bevel_resolution = 4
    
    random.seed(4242)
    
    # 28 tightly intertwined supercoiled splines forming a cohesive elongated chromatin bundle
    num_subsplines = 28
    pts_per_spline = 84
    
    x_span = length * 0.36
    y_span = radius * 0.44
    
    for s_idx in range(num_subsplines):
        spline = curve_data.splines.new('BEZIER')
        spline.use_cyclic_u = True
        spline.bezier_points.add(pts_per_spline - 1)
        
        phase = s_idx * (2.0 * math.pi / num_subsplines) + 0.18
        coil_r = 0.15 + 0.07 * math.sin(s_idx * 1.7)
        z_offset = (s_idx / float(num_subsplines)) * 0.20 - 0.10
        
        for i in range(pts_per_spline):
            t = i / float(pts_per_spline)
            u = t * 2.0 * math.pi
            
            # Elongated cylindrical sausage path
            bx = x_span * math.sin(u * 2 + phase) * (0.86 + 0.14 * math.cos(u * 4))
            by = y_span * math.cos(u * 3 + phase * 1.3) * (0.82 + 0.18 * math.sin(u * 5))
            bz = z_level + 0.18 + z_offset + 0.13 * math.sin(u * 5 + phase * 1.6)
            
            # Secondary supercoiling helical twist
            sc_rad = coil_r * (0.85 + 0.15 * math.sin(u * 12 + phase))
            sc_x = sc_rad * math.cos(u * 14)
            sc_y = sc_rad * math.sin(u * 14)
            sc_z = 0.038 * math.sin(u * 18)
            
            # Tertiary organic micro-writhing (rugose strand path)
            jitter_x = 0.020 * math.sin(u * 36 + phase * 3.0) + random.uniform(-0.006, 0.006)
            jitter_y = 0.020 * math.cos(u * 36 + phase * 3.0) + random.uniform(-0.006, 0.006)
            jitter_z = 0.014 * math.sin(u * 48 + phase * 2.0) + random.uniform(-0.005, 0.005)
            
            pt = Vector((bx + sc_x + jitter_x, by + sc_y + jitter_y, bz + sc_z + jitter_z))
            bp = spline.bezier_points[i]
            bp.co = pt
            
            # Organic variation in thread thickness (pinching and swelling along length)
            bp.radius = 0.85 + 0.35 * math.sin(u * 24 + s_idx)
            bp.handle_left_type = 'AUTO'
            bp.handle_right_type = 'AUTO'
            
    obj = bpy.data.objects.new("Nucleoid_Chromosome", curve_data)
    collection.objects.link(obj)
    obj.data.materials.append(mat)
    return obj

def build_plasmids(collection, count, mat, z_level):
    """Builds thin, crisp circular double-strand plasmid rings with authentic bright blue toroidal twist."""
    random.seed(909)
    positions = [
        (-1.25, -0.45, z_level + 0.04),
        (-0.95, 0.50, z_level + 0.04),
        (-0.35, -0.58, z_level + 0.04),
        (0.25, 0.52, z_level + 0.04),
        (0.95, -0.45, z_level + 0.04),
        (1.25, 0.40, z_level + 0.04),
        (1.35, -0.28, z_level + 0.04)
    ]
    
    for i, pos in enumerate(positions[:count]):
        p_name = f"Plasmid_Ring_{i+1}"
        curve_data = bpy.data.curves.new(name=p_name, type='CURVE')
        curve_data.dimensions = '3D'
        curve_data.fill_mode = 'FULL'
        curve_data.bevel_depth = 0.015 # Slender crisp plasmid ring
        curve_data.bevel_resolution = 4
        
        spline = curve_data.splines.new('BEZIER')
        spline.use_cyclic_u = True
        
        ring_radius = random.uniform(0.14, 0.17)
        num_pts = 12
        spline.bezier_points.add(num_pts - 1)
        
        for j in range(num_pts):
            theta = (j / float(num_pts)) * 2 * math.pi
            px = ring_radius * math.cos(theta)
            py = ring_radius * math.sin(theta)
            pz = 0.012 * math.sin(theta * 3)
            
            bp = spline.bezier_points[j]
            bp.co = Vector((px, py, pz))
            bp.handle_left_type = 'AUTO'
            bp.handle_right_type = 'AUTO'
            
        obj = bpy.data.objects.new(p_name, curve_data)
        collection.objects.link(obj)
        obj.location = Vector(pos)
        obj.rotation_euler = Euler((random.uniform(-0.1, 0.1), random.uniform(-0.1, 0.1), random.uniform(0, math.pi)), 'XYZ')
        obj.data.materials.append(mat)

def build_dense_cytoplasmic_granules_full_coverage(collection, count, mat_ribo, mat_solute, z_level, length, radius):
    """
    Distributes 1600+ granular ribosomes clustered into natural polyribosome patches
    across the cytoplasm floor, matching Image 3!
    """
    random.seed(777)
    
    bm_ribo = bmesh.new()
    bm_solute = bmesh.new()
    
    x_half = length * 0.48 + radius * 0.45
    y_half = radius * 0.85
    
    # Generate 110 natural polyribosome cluster centers
    num_clusters = 110
    cluster_centers = []
    for _ in range(num_clusters):
        cx = random.uniform(-x_half * 0.95, x_half * 0.95)
        cy = random.uniform(-y_half * 0.90, y_half * 0.90)
        if abs(cx) > length/2:
            dx = abs(cx) - length/2
            if (dx**2 + cy**2) > (radius * 0.86)**2:
                continue
        else:
            if abs(cy) > (radius * 0.86):
                continue
        cluster_centers.append((cx, cy))
        
    for i in range(count):
        if cluster_centers and random.random() < 0.84:
            ccx, ccy = random.choice(cluster_centers)
            rx = ccx + random.gauss(0, 0.07)
            ry = ccy + random.gauss(0, 0.07)
        else:
            rx = random.uniform(-x_half, x_half)
            ry = random.uniform(-y_half, y_half)
            
        if abs(rx) > length/2:
            dx = abs(rx) - length/2
            if (dx**2 + ry**2) > (radius * 0.88)**2:
                continue
        else:
            if abs(ry) > (radius * 0.88):
                continue
                
        # Thin under nucleoid, dense around perimeter
        in_nucleoid = (abs(rx) < 0.92 and abs(ry) < 0.32)
        if in_nucleoid and random.random() < 0.80:
            continue
            
        rz = z_level + random.uniform(0.01, 0.06)
        r_scale = random.uniform(0.016, 0.026)
        
        choice = random.random()
        if choice < 0.80:
            bmesh.ops.create_uvsphere(bm_ribo, u_segments=8, v_segments=6, radius=r_scale, matrix=Matrix.Translation(Vector((rx, ry, rz))))
        else:
            bmesh.ops.create_uvsphere(bm_solute, u_segments=8, v_segments=6, radius=r_scale * 0.82, matrix=Matrix.Translation(Vector((rx, ry, rz))))
            
    mesh_ribo = bpy.data.meshes.new("Ribosomes_Cluster")
    bm_ribo.to_mesh(mesh_ribo)
    bm_ribo.free()
    mesh_ribo.update()
    obj_ribo = bpy.data.objects.new("Ribosomes_Cluster", mesh_ribo)
    collection.objects.link(obj_ribo)
    obj_ribo.data.materials.append(mat_ribo)
    for p in obj_ribo.data.polygons: p.use_smooth = True
    
    mesh_solute = bpy.data.meshes.new("Solute_Complexes_Cluster")
    bm_solute.to_mesh(mesh_solute)
    bm_solute.free()
    mesh_solute.update()
    obj_solute = bpy.data.objects.new("Solute_Complexes_Cluster", mesh_solute)
    collection.objects.link(obj_solute)
    obj_solute.data.materials.append(mat_solute)
    for p in obj_solute.data.polygons: p.use_smooth = True

def build_flagella_with_motors(collection, count, mat_filament, mat_gold, mat_red, length, radius):
    """
    Constructs 3 long, graceful helical flagella anchored by authentic
    red and gold cylindrical bushings embedded in the cell envelope, exactly matching Image 3!
    """
    insertion_points = [
        Vector((-length/2 - radius * 0.82, -0.22, 0.06)),
        Vector((-length/2 - radius * 0.88, 0.16, -0.06)),
        Vector((-length/2 - radius * 0.94, -0.12, -0.24))
    ]
    
    for i, base_pos in enumerate(insertion_points[:count]):
        # 1. Base gold washer disc
        bm_gold = bmesh.new()
        bmesh.ops.create_cone(
            bm_gold,
            cap_ends=True,
            cap_tris=False,
            segments=24,
            radius1=0.13,
            radius2=0.13,
            depth=0.038,
            matrix=Matrix.Rotation(math.pi/2, 4, 'Y')
        )
        # Outer gold collar
        bmesh.ops.create_cone(
            bm_gold,
            cap_ends=True,
            cap_tris=False,
            segments=24,
            radius1=0.11,
            radius2=0.11,
            depth=0.038,
            matrix=Matrix.Translation(Vector((-0.15, 0, 0))) @ Matrix.Rotation(math.pi/2, 4, 'Y')
        )
        mesh_gold = bpy.data.meshes.new(f"Motor_Gold_{i+1}")
        bm_gold.to_mesh(mesh_gold)
        bm_gold.free()
        obj_gold = bpy.data.objects.new(f"Motor_Gold_{i+1}", mesh_gold)
        collection.objects.link(obj_gold)
        obj_gold.location = base_pos
        obj_gold.data.materials.append(mat_gold)
        for p in obj_gold.data.polygons: p.use_smooth = True

        # 2. Central red cylinder sleeve
        bm_red = bmesh.new()
        bmesh.ops.create_cone(
            bm_red,
            cap_ends=True,
            cap_tris=False,
            segments=24,
            radius1=0.096,
            radius2=0.096,
            depth=0.13,
            matrix=Matrix.Translation(Vector((-0.075, 0, 0))) @ Matrix.Rotation(math.pi/2, 4, 'Y')
        )
        mesh_red = bpy.data.meshes.new(f"Motor_Red_{i+1}")
        bm_red.to_mesh(mesh_red)
        bm_red.free()
        obj_red = bpy.data.objects.new(f"Motor_Red_{i+1}", mesh_red)
        collection.objects.link(obj_red)
        obj_red.location = base_pos
        obj_red.data.materials.append(mat_red)
        for p in obj_red.data.polygons: p.use_smooth = True
        
        # 3. Trailing wavy flagellar filament
        fil_name = f"Flagellum_Filament_{i+1}"
        curve_data = bpy.data.curves.new(name=fil_name, type='CURVE')
        curve_data.dimensions = '3D'
        curve_data.fill_mode = 'FULL'
        curve_data.bevel_depth = 0.045
        curve_data.bevel_resolution = 4
        
        spline = curve_data.splines.new('BEZIER')
        spline.use_cyclic_u = False
        
        num_pts = 36
        spline.bezier_points.add(num_pts - 1)
        total_len = 5.5 + i * 0.6
        phase_offset = i * (math.pi * 0.75)
        
        tip_start = base_pos + Vector((-0.18, 0, 0))
        
        for j in range(num_pts):
            s = j / float(num_pts - 1)
            dist_x = s * total_len
            freq = 3.4
            amp = 0.35 * (0.35 + 0.65 * s)
            
            fx = tip_start.x - dist_x
            fy = tip_start.y + amp * math.sin(s * freq * math.pi + phase_offset) - s * 0.58 * (i - 0.5)
            fz = tip_start.z + amp * math.cos(s * freq * math.pi + phase_offset) - s * 0.45
            
            bp = spline.bezier_points[j]
            bp.co = Vector((fx, fy, fz))
            bp.handle_left_type = 'AUTO'
            bp.handle_right_type = 'AUTO'
            
        fil_obj = bpy.data.objects.new(fil_name, curve_data)
        collection.objects.link(fil_obj)
        fil_obj.data.materials.append(mat_filament)

def build_curved_pili_hairs(collection, count, mat_pili, length, radius, z_cut):
    """
    Builds 150+ organic, gracefully curved, flexible hair-like pili
    radiating in all 3D directions around the cell contour, tapering like natural cilia.
    """
    random.seed(333)
    curve_data = bpy.data.curves.new(name="Pili_Bristles", type='CURVE')
    curve_data.dimensions = '3D'
    curve_data.fill_mode = 'FULL'
    curve_data.bevel_depth = 0.016
    curve_data.bevel_resolution = 3
    
    for i in range(count):
        px = random.uniform(-length * 0.48, length * 0.48)
        theta = random.uniform(math.pi * 0.55, math.pi * 2.45)
        
        py = radius * math.sin(theta)
        pz = radius * math.cos(theta)
        
        if pz > (z_cut + 0.04):
            continue
            
        norm = Vector((0, py, pz)).normalized()
        dir_vec = (norm + Vector((random.uniform(-0.35, 0.35), random.uniform(-0.18, 0.18), random.uniform(-0.18, 0.18)))).normalized()
        pili_len = random.uniform(0.55, 1.05)
        
        spline = curve_data.splines.new('BEZIER')
        spline.bezier_points.add(2)
        
        bp0 = spline.bezier_points[0]
        bp0.co = Vector((px, py, pz))
        bp0.radius = 1.0
        bp0.handle_left_type = 'AUTO'
        bp0.handle_right_type = 'AUTO'
        
        mid_pt = Vector((px, py, pz)) + dir_vec * (pili_len * 0.52) + Vector((random.uniform(-0.08, 0.08), random.uniform(-0.08, 0.08), random.uniform(-0.08, 0.08)))
        bp1 = spline.bezier_points[1]
        bp1.co = mid_pt
        bp1.radius = 0.70
        bp1.handle_left_type = 'AUTO'
        bp1.handle_right_type = 'AUTO'
        
        tip_pt = Vector((px, py, pz)) + dir_vec * pili_len + Vector((random.uniform(-0.12, 0.12), random.uniform(-0.12, 0.12), random.uniform(-0.12, 0.12)))
        bp2 = spline.bezier_points[2]
        bp2.co = tip_pt
        bp2.radius = 0.28
        bp2.handle_left_type = 'AUTO'
        bp2.handle_right_type = 'AUTO'
        
    pili_obj = bpy.data.objects.new("Pili_Bristles", curve_data)
    collection.objects.link(pili_obj)
    pili_obj.data.materials.append(mat_pili)

def setup_studio_environment(collection):
    """Sets up camera, warm backdrop, and 3-point soft lighting."""
    plane_mesh = bpy.data.meshes.new("Studio_Backdrop")
    bm_plane = bmesh.new()
    bmesh.ops.create_grid(bm_plane, x_segments=2, y_segments=2, size=70.0)
    bm_plane.to_mesh(plane_mesh)
    bm_plane.free()
    
    backdrop = bpy.data.objects.new("Studio_Backdrop", plane_mesh)
    collection.objects.link(backdrop)
    backdrop.location = Vector((0, 0, -3.8))
    
    mat_back = create_pbr_material("Mat_Backdrop", (0.96, 0.95, 0.92, 1.0), roughness=0.95, sss_weight=0.0)
    backdrop.data.materials.append(mat_back)
    
    cam_data = bpy.data.cameras.new("Main_Camera")
    cam_data.lens = 52
    cam_obj = bpy.data.objects.new("Main_Camera", cam_data)
    collection.objects.link(cam_obj)
    
    # Pulled back and slightly higher so the entire cell and flagella are fully framed
    cam_obj.location = Vector((0.5, -11.5, 7.8))
    target = Vector((-0.8, 0.0, 0.0))
    direction = target - cam_obj.location
    rot_quat = direction.to_track_quat('-Z', 'Y')
    cam_obj.rotation_euler = rot_quat.to_euler()
    
    bpy.context.scene.camera = cam_obj
    
    # Key Light (Warm soft sun from front-right)
    key_data = bpy.data.lights.new(name="Key_Light", type='AREA')
    key_data.energy = 520.0
    key_data.size = 8.5
    key_data.color = (1.0, 0.96, 0.90)
    key_obj = bpy.data.objects.new("Key_Light", key_data)
    collection.objects.link(key_obj)
    key_obj.location = Vector((7.5, -7.0, 9.5))
    key_obj.rotation_euler = (target - key_obj.location).to_track_quat('-Z', 'Y').to_euler()
    
    # Fill Light (Soft neutral from left)
    fill_data = bpy.data.lights.new(name="Fill_Light", type='AREA')
    fill_data.energy = 240.0
    fill_data.size = 11.0
    fill_data.color = (0.92, 0.95, 1.0)
    fill_obj = bpy.data.objects.new("Fill_Light", fill_data)
    collection.objects.link(fill_obj)
    fill_obj.location = Vector((-9.5, -5.5, 6.0))
    fill_obj.rotation_euler = (target - fill_obj.location).to_track_quat('-Z', 'Y').to_euler()
    
    # Rim Light (Top-back rim to catch membrane edges)
    rim_data = bpy.data.lights.new(name="Rim_Light", type='AREA')
    rim_data.energy = 210.0
    rim_data.size = 8.0
    rim_data.color = (1.0, 0.98, 0.95)
    rim_obj = bpy.data.objects.new("Rim_Light", rim_data)
    collection.objects.link(rim_obj)
    rim_obj.location = Vector((0.0, 9.5, 8.5))
    rim_obj.rotation_euler = (target - rim_obj.location).to_track_quat('-Z', 'Y').to_euler()

def main():
    print("[*] Clearing default startup scene safely...")
    clear_all()
    
    print("[*] Building High-Fidelity 3D Prokaryote Cell (The Biology Primer Exact Match)...")
    
    col_name = "Prokaryote_Primer_Cell"
    col = bpy.data.collections.new(col_name)
    bpy.context.scene.collection.children.link(col)
        
    length = 3.6
    r_outer = 1.34
    r_wall = 1.25
    r_inner = 1.10
    r_basin = 1.04
    z_cut = 0.28
    
    # --- PHYSICAL PBR SHADERS MATCHING IMAGE 3 TAXONOMY ---
    # 1. Translucent frosted glass/gel outer capsule
    mat_outer = create_pbr_material(
        "Mat_OuterCapsule",
        base_color=(0.85, 0.92, 0.88, 1.0),
        roughness=0.22,
        transmission=0.75,
        sss_weight=0.28,
        sss_color=(0.82, 0.94, 0.86),
        bump_scale=32.0,
        bump_strength=0.10
    )
    
    # 2. Spongy, thick porous layered cell wall with Voronoi cavity pits and Sage-to-Terracotta gradient
    mat_wall = create_porous_wall_material("Mat_CellWall")
    
    # 3. Golden inner plasma membrane lip
    mat_inner = create_pbr_material(
        "Mat_PlasmaMembrane",
        base_color=(0.88, 0.65, 0.16, 1.0),
        roughness=0.24,
        metallic=0.25,
        sss_weight=0.20,
        sss_color=(1.0, 0.85, 0.40)
    )
    
    # 4. Cytoplasm sandy floor (warm rich ochre/sand)
    mat_basin = create_pbr_material(
        "Mat_CytoplasmBasin",
        base_color=(0.78, 0.72, 0.58, 1.0),
        roughness=0.65,
        sss_weight=0.22,
        sss_color=(1.0, 0.85, 0.70),
        bump_scale=65.0,
        bump_strength=0.18
    )
    
    # 5. Ultra-rugose, matte, fibrous deep orchid purple supercoiled nucleoid chromatin
    mat_nucleoid = create_nucleoid_rugose_material("Mat_Nucleoid")
    
    # 6. Vibrant cobalt blue plasmids (matte, slender)
    mat_plasmid = create_pbr_material(
        "Mat_Plasmid",
        base_color=(0.06, 0.34, 0.82, 1.0),
        roughness=0.45,
        sss_weight=0.15,
        sss_color=(0.20, 0.65, 1.0)
    )
    
    # 7. Dense blue ribosomes (matte, granular particles)
    mat_ribo = create_pbr_material(
        "Mat_Ribosome",
        base_color=(0.07, 0.28, 0.74, 1.0),
        roughness=0.65,
        sss_weight=0.10
    )
    
    # 8. Cyan secondary solute granules
    mat_solute = create_pbr_material(
        "Mat_SoluteComplex",
        base_color=(0.14, 0.48, 0.88, 1.0),
        roughness=0.32,
        sss_weight=0.15
    )
    
    # 9. Flagellar motor rings (Gold collars + Red cylindrical body)
    mat_gold = create_pbr_material(
        "Mat_MotorGold",
        base_color=(0.86, 0.66, 0.20, 1.0),
        roughness=0.25,
        metallic=0.70
    )
    mat_red = create_pbr_material(
        "Mat_MotorRed",
        base_color=(0.80, 0.10, 0.10, 1.0),
        roughness=0.30,
        sss_weight=0.18
    )
    
    # 10. Flagellum wavy filament
    mat_flag = create_pbr_material(
        "Mat_Flagellum",
        base_color=(0.72, 0.70, 0.66, 1.0),
        roughness=0.35,
        transmission=0.42,
        sss_weight=0.22
    )
    
    # 11. Pili hairs
    mat_pili = create_pbr_material(
        "Mat_Pili",
        base_color=(0.80, 0.82, 0.80, 0.9),
        roughness=0.32,
        transmission=0.48
    )
    
    # --- CONSTRUCT GEOMETRY ---
    print("  -> Creating 3-layered cutaway cell envelope with physical thickness...")
    obj_outer = create_capsule_cutaway_layer("Envelope_OuterCapsule", length, r_outer, z_cut, mat_outer, col, wall_thickness=0.065, subsurf_levels=1)
    # Extra thick spongy porous wall: thickness = 0.14!
    obj_wall = create_capsule_cutaway_layer("Envelope_CellWall", length, r_wall, z_cut, mat_wall, col, wall_thickness=0.135, subsurf_levels=1)
    obj_inner = create_capsule_cutaway_layer("Envelope_PlasmaMembrane", length, r_inner, z_cut, mat_inner, col, wall_thickness=0.048, subsurf_levels=1)
    
    print("  -> Building cytoplasm interior bedding...")
    obj_basin = build_cytoplasm_basin("Cytoplasm_Bedding", length, r_basin, z_cut - 0.05, mat_basin, col)
        
    print("  -> Constructing ultra-dense supercoiled nucleoid chromosome bundle...")
    build_dense_supercoiled_nucleoid(col, length, r_basin, z_cut - 0.04, mat_nucleoid)
    
    print("  -> Placing circular plasmid rings...")
    build_plasmids(col, 7, mat_plasmid, z_cut - 0.04)
    
    print("  -> Scattering 1500+ dense blue ribosomes across cytoplasm floor...")
    build_dense_cytoplasmic_granules_full_coverage(col, 1550, mat_ribo, mat_solute, z_cut - 0.04, length, r_basin)
    
    print("  -> Generating 3 helical flagella with red-and-gold basal motor bushings...")
    build_flagella_with_motors(col, 3, mat_flag, mat_gold, mat_red, length, r_outer)
    
    print("  -> Adding 150+ organic curved tapering pili whiskers...")
    build_curved_pili_hairs(col, 155, mat_pili, length, r_outer, z_cut)
    
    # Orient the whole cell diagonally matching the reference infographic
    root_empty = bpy.data.objects.new("Prokaryote_Root", None)
    col.objects.link(root_empty)
    root_empty.rotation_euler = Euler((math.radians(10), math.radians(-10), math.radians(24)), 'XYZ')
    
    for obj in list(col.objects):
        if obj != root_empty and obj.type not in ('CAMERA', 'LIGHT'):
            obj.parent = root_empty
            
    print("  -> Setting up studio lighting and backdrop...")
    setup_studio_environment(col)
    
    scene = bpy.context.scene
    # Use CYCLES for photorealistic global illumination still render
    scene.render.engine = 'CYCLES'
    try:
        scene.cycles.device = 'CPU'
        scene.cycles.samples = 32
        scene.cycles.use_denoising = True
    except:
        pass
        
    scene.display_settings.display_device = 'sRGB'
    try:
        scene.view_settings.view_transform = 'AgX'
        scene.view_settings.look = 'AgX - Medium High Contrast'
    except Exception:
        scene.view_settings.view_transform = 'Filmic'
        scene.view_settings.look = 'None'
    scene.render.resolution_x = 1920
    scene.render.resolution_y = 1080
    scene.render.film_transparent = False
    
    world = bpy.data.worlds.new("Primer_World")
    scene.world = world
    try:
        world.use_nodes = True
        bg_node = world.node_tree.nodes.get('Background')
        if bg_node:
            bg_node.inputs['Color'].default_value = (0.96, 0.95, 0.92, 1.0)
            bg_node.inputs['Strength'].default_value = 1.0
    except:
        pass
    
    repo_root = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
    output_dir = repo_root
    blend_name = "prokaryote_cell.blend"
    blend_only = False
    no_render = True

    # Check CLI arguments
    for i, arg in enumerate(sys.argv):
        if arg == "--output-dir" and i + 1 < len(sys.argv):
            output_dir = sys.argv[i + 1]
        elif arg == "--blend-name" and i + 1 < len(sys.argv):
            blend_name = sys.argv[i + 1]
        elif arg == "--render":
            no_render = False
        elif arg == "--blend-only":
            blend_only = True

    os.makedirs(output_dir, exist_ok=True)
    blend_path = os.path.join(output_dir, blend_name)
    glb_path = os.path.join(output_dir, blend_name.replace(".blend", ".glb"))
    
    print(f"[*] Saving master .blend file to {blend_path}...")
    bpy.ops.wm.save_as_mainfile(filepath=blend_path)
    
    if not no_render:
        render_path = os.path.join(output_dir, "prokaryote_cell_blender_render.png")
        print(f"[*] Rendering high-res still with CYCLES to {render_path}...")
        scene.render.filepath = render_path
        bpy.ops.render.render(write_still=True)

    if blend_only:
        print(f"[+] Done! Saved .blend file successfully to {blend_path}")
        return
    
    print(f"[*] Converting curves to meshes for glTF export...")
    bpy.ops.object.select_all(action='DESELECT')
    for obj in list(col.objects):
        if obj.type == 'CURVE':
            obj.select_set(True)
            bpy.context.view_layer.objects.active = obj
            bpy.ops.object.convert(target='MESH')
            obj.select_set(False)

    print(f"[*] Baking modifiers and generating clean UV maps for all meshes...")
    for obj in list(col.objects):
        if obj.type == 'MESH' and obj.name != "Studio_Backdrop":
            bpy.context.view_layer.objects.active = obj
            obj.select_set(True)
            for mod in list(obj.modifiers):
                try:
                    bpy.ops.object.modifier_apply(modifier=mod.name)
                except Exception:
                    pass
            try:
                bpy.ops.object.mode_set(mode='EDIT')
                bpy.ops.mesh.select_all(action='SELECT')
                bpy.ops.uv.smart_project(angle_limit=66.0, island_margin=0.01)
                bpy.ops.object.mode_set(mode='OBJECT')
            except Exception:
                pass
            obj.select_set(False)
            
    print(f"[*] Exporting .glb to {glb_path}...")
    bpy.ops.object.select_all(action='DESELECT')
    for obj in col.objects:
        if obj.name != "Studio_Backdrop" and obj.type == 'MESH':
            obj.select_set(True)
            
    bpy.ops.export_scene.gltf(
        filepath=glb_path,
        export_format='GLB',
        use_selection=True,
        export_apply=True,
        export_materials='EXPORT'
    )
    
    print("[+] Done! All assets generated successfully.")

if __name__ == "__main__":
    main()
