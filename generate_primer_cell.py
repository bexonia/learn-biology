import bpy
import bmesh
import math
import random
from mathutils import Vector, Euler, Matrix
import os

def clear_all():
    """Wipes all default objects, meshes, curves, materials and lights."""
    bpy.ops.wm.read_factory_settings(use_empty=True)

def create_material(name, base_color, roughness=0.45, sss_weight=0.18, sss_color=(1.0, 0.8, 0.6), metallic=0.0, transmission=0.0):
    mat = bpy.data.materials.new(name=name)
    nodes = mat.node_tree.nodes
    nodes.clear()
    
    bsdf = nodes.new(type='ShaderNodeBsdfPrincipled')
    bsdf.inputs['Base Color'].default_value = base_color
    bsdf.inputs['Roughness'].default_value = roughness
    bsdf.inputs['Metallic'].default_value = metallic
    
    if 'Subsurface Weight' in bsdf.inputs:
        bsdf.inputs['Subsurface Weight'].default_value = sss_weight
        if 'Subsurface Radius' in bsdf.inputs:
            bsdf.inputs['Subsurface Radius'].default_value = Vector(sss_color)
    elif 'Subsurface' in bsdf.inputs:
        bsdf.inputs['Subsurface'].default_value = sss_weight
        if 'Subsurface Radius' in bsdf.inputs:
            bsdf.inputs['Subsurface Radius'].default_value = Vector(sss_color)
            
    if transmission > 0.0:
        if 'Transmission Weight' in bsdf.inputs:
            bsdf.inputs['Transmission Weight'].default_value = transmission
        elif 'Transmission' in bsdf.inputs:
            bsdf.inputs['Transmission'].default_value = transmission
            
    output = nodes.new(type='ShaderNodeOutputMaterial')
    mat.node_tree.links.new(bsdf.outputs['BSDF'], output.inputs['Surface'])
    return mat

def create_capsule_cutaway_layer(name, length, radius, z_cut, mat, wall_thickness=0.065):
    bm = bmesh.new()
    segments_u = 64
    segments_v = 32
    
    temp_mesh = bpy.data.meshes.new(f"{name}_temp")
    temp_obj = bpy.data.objects.new(name, temp_mesh)
    bpy.context.collection.objects.link(temp_obj)
    
    # 1. Cylinder
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
        
    bmesh.ops.remove_doubles(bm, verts=bm.verts, dist=0.005)
    
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
    
    temp_obj.data.materials.append(mat)
    for poly in temp_obj.data.polygons:
        poly.use_smooth = True
        
    return temp_obj

def build_cytoplasm_basin(name, length, radius, z_top, mat):
    bm = bmesh.new()
    segments_u = 64
    segments_v = 32
    
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
        
    bmesh.ops.remove_doubles(bm, verts=bm.verts, dist=0.005)
    
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
    bpy.context.collection.objects.link(obj)
    obj.data.materials.append(mat)
    
    for poly in obj.data.polygons:
        poly.use_smooth = True
    return obj

def build_dense_nucleoid_dna(collection, length, radius, z_level, mat):
    """
    Constructs a rich, intricately tangled 3D supercoiled yarn bundle
    resembling the authentic purple nucleoid from The Biology Primer.
    """
    curve_data = bpy.data.curves.new(name="Nucleoid_Chromosome", type='CURVE')
    curve_data.dimensions = '3D'
    curve_data.fill_mode = 'FULL'
    curve_data.bevel_depth = 0.030
    curve_data.bevel_resolution = 4
    
    random.seed(2026)
    
    # We create 3 continuous intertwined cyclic sub-splines
    num_subsplines = 3
    pts_per_spline = 52
    
    x_span = length * 0.34
    y_span = radius * 0.40
    
    for s_idx in range(num_subsplines):
        spline = curve_data.splines.new('BEZIER')
        spline.use_cyclic_u = True
        spline.bezier_points.add(pts_per_spline - 1)
        
        phase = s_idx * (2.0 * math.pi / num_subsplines)
        
        for i in range(pts_per_spline):
            t = i / float(pts_per_spline)
            # Sinuous 3D Lissajous trajectory with harmonics
            u = t * 2.0 * math.pi
            bx = x_span * math.sin(u * 3 + phase)
            by = y_span * math.sin(u * 5 + phase * 1.5)
            bz = z_level + 0.14 + 0.16 * math.sin(u * 7 + phase * 2.0)
            
            # Curl loops
            curl_r = 0.12 + 0.05 * math.cos(u * 9)
            cx = curl_r * math.cos(u * 14) + random.uniform(-0.04, 0.04)
            cy = curl_r * math.sin(u * 14) + random.uniform(-0.04, 0.04)
            cz = 0.06 * math.sin(u * 12) + random.uniform(-0.03, 0.03)
            
            pt = Vector((bx + cx, by + cy, bz + cz))
            bp = spline.bezier_points[i]
            bp.co = pt
            bp.handle_left_type = 'AUTO'
            bp.handle_right_type = 'AUTO'
            
    obj = bpy.data.objects.new("Nucleoid_Chromosome", curve_data)
    collection.objects.link(obj)
    obj.data.materials.append(mat)
    return obj

def build_plasmids(collection, count, mat, z_level, length, radius):
    """Builds circular double-strand plasmid rings."""
    random.seed(77)
    positions = [
        (-1.18, -0.42, z_level + 0.04),
        (0.85, -0.40, z_level + 0.03),
        (-0.85, 0.44, z_level + 0.04),
        (1.15, 0.36, z_level + 0.03),
        (-0.25, -0.50, z_level + 0.03)
    ]
    
    for i, pos in enumerate(positions[:count]):
        p_name = f"Plasmid_Ring_{i+1}"
        curve_data = bpy.data.curves.new(name=p_name, type='CURVE')
        curve_data.dimensions = '3D'
        curve_data.fill_mode = 'FULL'
        curve_data.bevel_depth = 0.018
        curve_data.bevel_resolution = 3
        
        spline = curve_data.splines.new('BEZIER')
        spline.use_cyclic_u = True
        
        ring_radius = random.uniform(0.13, 0.16)
        num_pts = 8
        spline.bezier_points.add(num_pts - 1)
        
        for j in range(num_pts):
            theta = (j / float(num_pts)) * 2 * math.pi
            px = ring_radius * math.cos(theta)
            py = ring_radius * math.sin(theta)
            pz = 0.015 * math.sin(theta * 3)
            
            bp = spline.bezier_points[j]
            bp.co = Vector((px, py, pz))
            bp.handle_left_type = 'AUTO'
            bp.handle_right_type = 'AUTO'
            
        obj = bpy.data.objects.new(p_name, curve_data)
        collection.objects.link(obj)
        obj.location = Vector(pos)
        obj.rotation_euler = Euler((random.uniform(-0.1, 0.1), random.uniform(-0.1, 0.1), random.uniform(0, math.pi)), 'XYZ')
        obj.data.materials.append(mat)

def build_ribosomes(collection, count, mat_a, z_level, length, radius):
    """Builds scattered granular ribosomes across cytoplasm floor."""
    random.seed(999)
    bm_all = bmesh.new()
    x_half = length * 0.44
    y_half = radius * 0.72
    
    for i in range(count):
        rx = random.uniform(-x_half, x_half)
        ry = random.uniform(-y_half, y_half)
        
        if (rx / (x_half + 0.25))**2 + (ry / y_half)**2 > 0.85:
            continue
            
        # Leave nucleoid core slightly less crowded
        if abs(rx) < 0.95 and abs(ry) < 0.32 and random.random() < 0.65:
            continue
            
        rz = z_level + random.uniform(0.01, 0.14)
        r_scale = random.uniform(0.026, 0.040)
        
        bmesh.ops.create_uvsphere(bm_all, u_segments=8, v_segments=6, radius=r_scale, matrix=Matrix.Translation(Vector((rx, ry, rz))))
        
    ribo_mesh = bpy.data.meshes.new("Ribosomes_Cluster")
    bm_all.to_mesh(ribo_mesh)
    bm_all.free()
    ribo_mesh.update()
    
    ribo_obj = bpy.data.objects.new("Ribosomes_Cluster", ribo_mesh)
    collection.objects.link(ribo_obj)
    ribo_obj.data.materials.append(mat_a)
    for poly in ribo_obj.data.polygons:
        poly.use_smooth = True

def build_flagella_with_motors(collection, count, mat_filament, mat_motor, length, radius):
    """Builds wavy sinusoidal helical flagella anchored via golden basal body collars."""
    insertion_points = [
        Vector((-length/2 - radius * 0.85, -0.16, 0.08)),
        Vector((-length/2 - radius * 0.88, 0.16, -0.06)),
        Vector((-length/2 - radius * 0.94, -0.04, -0.22))
    ]
    
    for i, base_pos in enumerate(insertion_points[:count]):
        # Golden Basal Motor Ring
        motor_mesh = bpy.data.meshes.new(f"Basal_Motor_{i+1}")
        bm_motor = bmesh.new()
        bmesh.ops.create_cone(
            bm_motor,
            cap_ends=True,
            cap_tris=False,
            segments=16,
            radius1=0.08,
            radius2=0.095,
            depth=0.18,
            matrix=Matrix.Rotation(math.pi/2, 4, 'Y')
        )
        bm_motor.to_mesh(motor_mesh)
        bm_motor.free()
        
        motor_obj = bpy.data.objects.new(f"Basal_Motor_{i+1}", motor_mesh)
        collection.objects.link(motor_obj)
        motor_obj.location = base_pos
        motor_obj.data.materials.append(mat_motor)
        
        # Helical Filament with graceful flowing curve extending leftwards
        fil_name = f"Flagellum_Filament_{i+1}"
        curve_data = bpy.data.curves.new(name=fil_name, type='CURVE')
        curve_data.dimensions = '3D'
        curve_data.fill_mode = 'FULL'
        curve_data.bevel_depth = 0.034
        curve_data.bevel_resolution = 4
        
        spline = curve_data.splines.new('BEZIER')
        spline.use_cyclic_u = False
        
        num_pts = 28
        spline.bezier_points.add(num_pts - 1)
        total_len = 4.2 + i * 0.4
        phase_offset = i * (math.pi * 0.65)
        
        for j in range(num_pts):
            s = j / float(num_pts - 1)
            dist_x = s * total_len
            freq = 4.5
            amp = 0.24 * (0.35 + 0.65 * s)
            
            # Curve down and towards lower-left
            fx = base_pos.x - dist_x
            fy = base_pos.y + amp * math.sin(s * freq * math.pi + phase_offset) - s * 0.45 * (i - 0.5)
            fz = base_pos.z + amp * math.cos(s * freq * math.pi + phase_offset) - s * 0.35
            
            bp = spline.bezier_points[j]
            bp.co = Vector((fx, fy, fz))
            bp.handle_left_type = 'AUTO'
            bp.handle_right_type = 'AUTO'
            
        fil_obj = bpy.data.objects.new(fil_name, curve_data)
        collection.objects.link(fil_obj)
        fil_obj.data.materials.append(mat_filament)

def build_pili_bristles(collection, count, mat_pili, length, radius, z_cut):
    """Builds delicate outward radiating pili/fimbriae around envelope perimeter."""
    random.seed(888)
    curve_data = bpy.data.curves.new(name="Pili_Bristles", type='CURVE')
    curve_data.dimensions = '3D'
    curve_data.fill_mode = 'FULL'
    curve_data.bevel_depth = 0.013
    curve_data.bevel_resolution = 2
    
    for i in range(count):
        px = random.uniform(-length * 0.48, length * 0.48)
        theta = random.uniform(math.pi * 0.65, math.pi * 2.35)
        
        py = radius * math.sin(theta)
        pz = radius * math.cos(theta)
        
        if pz > (z_cut + 0.05):
            continue
            
        norm = Vector((0, py, pz)).normalized()
        dir_vec = (norm + Vector((random.uniform(-0.35, 0.35), random.uniform(-0.15, 0.15), random.uniform(-0.15, 0.15)))).normalized()
        pili_len = random.uniform(0.42, 0.78)
        
        spline = curve_data.splines.new('BEZIER')
        spline.bezier_points.add(1)
        
        bp0 = spline.bezier_points[0]
        bp0.co = Vector((px, py, pz))
        bp0.handle_left_type = 'AUTO'
        bp0.handle_right_type = 'AUTO'
        
        mid_curv = Vector((random.uniform(-0.06, 0.06), random.uniform(-0.06, 0.06), random.uniform(-0.06, 0.06)))
        bp1 = spline.bezier_points[1]
        bp1.co = Vector((px, py, pz)) + dir_vec * pili_len + mid_curv
        bp1.handle_left_type = 'AUTO'
        bp1.handle_right_type = 'AUTO'
        
    pili_obj = bpy.data.objects.new("Pili_Bristles", curve_data)
    collection.objects.link(pili_obj)
    pili_obj.data.materials.append(mat_pili)

def setup_studio_environment(collection):
    """Sets up camera, warm backdrop, and 3-point soft lighting."""
    plane_mesh = bpy.data.meshes.new("Studio_Backdrop")
    bm_plane = bmesh.new()
    bmesh.ops.create_grid(bm_plane, x_segments=2, y_segments=2, size=50.0)
    bm_plane.to_mesh(plane_mesh)
    bm_plane.free()
    
    backdrop = bpy.data.objects.new("Studio_Backdrop", plane_mesh)
    collection.objects.link(backdrop)
    backdrop.location = Vector((0, 0, -2.8))
    
    mat_back = create_material("Mat_Backdrop", (0.94, 0.93, 0.91, 1.0), roughness=0.90, sss_weight=0.0)
    backdrop.data.materials.append(mat_back)
    
    cam_data = bpy.data.cameras.new("Main_Camera")
    cam_data.lens = 54
    cam_obj = bpy.data.objects.new("Main_Camera", cam_data)
    collection.objects.link(cam_obj)
    
    # Position camera to capture the full cell body and flagella waving to the left
    cam_obj.location = Vector((0.2, -9.2, 5.8))
    target = Vector((-1.0, 0.0, 0.0))
    direction = target - cam_obj.location
    rot_quat = direction.to_track_quat('-Z', 'Y')
    cam_obj.rotation_euler = rot_quat.to_euler()
    
    bpy.context.scene.camera = cam_obj
    
    # Key Light (Warm soft sun from front-right)
    key_data = bpy.data.lights.new(name="Key_Light", type='AREA')
    key_data.energy = 280.0
    key_data.size = 7.0
    key_data.color = (1.0, 0.97, 0.93)
    key_obj = bpy.data.objects.new("Key_Light", key_data)
    collection.objects.link(key_obj)
    key_obj.location = Vector((5.5, -5.5, 7.5))
    key_obj.rotation_euler = (target - key_obj.location).to_track_quat('-Z', 'Y').to_euler()
    
    # Fill Light (Soft neutral from left)
    fill_data = bpy.data.lights.new(name="Fill_Light", type='AREA')
    fill_data.energy = 130.0
    fill_data.size = 8.0
    fill_data.color = (0.94, 0.95, 1.0)
    fill_obj = bpy.data.objects.new("Fill_Light", fill_data)
    collection.objects.link(fill_obj)
    fill_obj.location = Vector((-7.0, -4.5, 4.5))
    fill_obj.rotation_euler = (target - fill_obj.location).to_track_quat('-Z', 'Y').to_euler()
    
    # Rim Light (Top-back rim)
    rim_data = bpy.data.lights.new(name="Rim_Light", type='AREA')
    rim_data.energy = 110.0
    rim_data.size = 6.0
    rim_data.color = (1.0, 0.98, 0.95)
    rim_obj = bpy.data.objects.new("Rim_Light", rim_data)
    collection.objects.link(rim_obj)
    rim_obj.location = Vector((0.0, 7.0, 6.5))
    rim_obj.rotation_euler = (target - rim_obj.location).to_track_quat('-Z', 'Y').to_euler()

def main():
    print("[*] Clearing default startup scene...")
    clear_all()
    
    print("[*] Starting Prokaryote Cell 3D Generator (The Biology Primer Style)...")
    
    col_name = "Prokaryote_Primer_Cell"
    col = bpy.data.collections.new(col_name)
    bpy.context.scene.collection.children.link(col)
        
    length = 3.6
    r_outer = 1.25
    r_wall = 1.18
    r_inner = 1.12
    r_basin = 1.06
    z_cut = 0.28
    
    # Materials with exact color taxonomy
    mat_outer = create_material("Mat_OuterCapsule", (0.24, 0.35, 0.22, 1.0), roughness=0.45, sss_weight=0.18, sss_color=(0.9, 0.8, 0.6))
    mat_wall = create_material("Mat_CellWall", (0.58, 0.26, 0.14, 1.0), roughness=0.48, sss_weight=0.15, sss_color=(1.0, 0.6, 0.4))
    mat_inner = create_material("Mat_PlasmaMembrane", (0.56, 0.45, 0.18, 1.0), roughness=0.38, sss_weight=0.20, sss_color=(1.0, 0.9, 0.5))
    mat_basin = create_material("Mat_CytoplasmBasin", (0.72, 0.66, 0.54, 1.0), roughness=0.55, sss_weight=0.25, sss_color=(1.0, 0.85, 0.7))
    mat_nucleoid = create_material("Mat_Nucleoid", (0.28, 0.14, 0.42, 1.0), roughness=0.40, sss_weight=0.22, sss_color=(0.85, 0.4, 0.9))
    mat_plasmid = create_material("Mat_Plasmid", (0.08, 0.22, 0.50, 1.0), roughness=0.32, sss_weight=0.12, sss_color=(0.3, 0.6, 1.0))
    mat_ribo_a = create_material("Mat_Ribosome_A", (0.73, 0.68, 0.55, 1.0), roughness=0.45)
    mat_motor = create_material("Mat_BasalMotor", (0.65, 0.36, 0.08, 1.0), roughness=0.32, metallic=0.25)
    mat_flag = create_material("Mat_Flagellum", (0.48, 0.38, 0.24, 1.0), roughness=0.42, sss_weight=0.15)
    mat_pili = create_material("Mat_Pili", (0.70, 0.76, 0.68, 0.85), roughness=0.40, transmission=0.25)
    
    print("  -> Creating 3-layered cutaway cell envelope...")
    obj_outer = create_capsule_cutaway_layer("Envelope_OuterCapsule", length, r_outer, z_cut, mat_outer, wall_thickness=0.06)
    obj_wall = create_capsule_cutaway_layer("Envelope_CellWall", length, r_wall, z_cut, mat_wall, wall_thickness=0.05)
    obj_inner = create_capsule_cutaway_layer("Envelope_PlasmaMembrane", length, r_inner, z_cut, mat_inner, wall_thickness=0.04)
    
    for obj in (obj_outer, obj_wall, obj_inner):
        if obj.name not in col.objects:
            col.objects.link(obj)
            try:
                bpy.context.scene.collection.objects.unlink(obj)
            except:
                pass
            
    print("  -> Building cytoplasm interior bedding...")
    obj_basin = build_cytoplasm_basin("Cytoplasm_Bedding", length, r_basin, z_cut - 0.04, mat_basin)
    if obj_basin.name not in col.objects:
        col.objects.link(obj_basin)
        try:
            bpy.context.scene.collection.objects.unlink(obj_basin)
        except:
            pass
        
    print("  -> Constructing entangled nucleoid chromosome bundle...")
    obj_dna = build_dense_nucleoid_dna(col, length, r_basin, z_cut - 0.03, mat_nucleoid)
    
    print("  -> Placing circular plasmid rings...")
    build_plasmids(col, 5, mat_plasmid, z_cut - 0.03, length, r_basin)
    
    print("  -> Scattering dual-tone granular ribosomes...")
    build_ribosomes(col, 320, mat_ribo_a, z_cut - 0.03, length, r_basin)
    
    print("  -> Generating helical flagella and motor collars...")
    build_flagella_with_motors(col, 3, mat_flag, mat_motor, length, r_outer)
    
    print("  -> Adding perimeter pili bristles...")
    build_pili_bristles(col, 90, mat_pili, length, r_outer, z_cut)
    
    # Orient the whole cell diagonally as in the reference infographic
    root_empty = bpy.data.objects.new("Prokaryote_Root", None)
    col.objects.link(root_empty)
    root_empty.rotation_euler = Euler((math.radians(10), math.radians(-10), math.radians(24)), 'XYZ')
    
    for obj in list(col.objects):
        if obj != root_empty and obj.type not in ('CAMERA', 'LIGHT'):
            obj.parent = root_empty
            
    print("  -> Setting up studio lighting and backdrop...")
    setup_studio_environment(col)
    
    scene = bpy.context.scene
    scene.render.engine = 'BLENDER_EEVEE'
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
    world.use_nodes = True
    bg_node = world.node_tree.nodes.get('Background')
    if bg_node:
        bg_node.inputs['Color'].default_value = (0.94, 0.93, 0.90, 1.0)
        bg_node.inputs['Strength'].default_value = 1.0
    
    output_dir = r"c:\Users\devcd\GenProjects\prokaryote-primer-3d"
    os.makedirs(output_dir, exist_ok=True)
    
    blend_path = os.path.join(output_dir, "prokaryote_cell.blend")
    glb_path = os.path.join(output_dir, "prokaryote_cell.glb")
    render_path = os.path.join(output_dir, "prokaryote_cell_blender_render.png")
    
    print(f"[*] Saving master .blend file to {blend_path}...")
    bpy.ops.wm.save_as_mainfile(filepath=blend_path)
    
    print(f"[*] Rendering high-res still to {render_path}...")
    scene.render.filepath = render_path
    bpy.ops.render.render(write_still=True)
    
    print(f"[*] Converting curves to meshes for glTF export...")
    bpy.ops.object.select_all(action='DESELECT')
    for obj in list(col.objects):
        if obj.type == 'CURVE':
            obj.select_set(True)
            bpy.context.view_layer.objects.active = obj
            bpy.ops.object.convert(target='MESH')
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
