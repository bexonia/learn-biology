"""
generate_7cgo_flagellar_motor.py
================================
Automated Blender 5.2 + Molecular Nodes pipeline to build:
1. PDB 7CGO: Authentic 3.4 Å Cryo-EM structure of the Bacterial Flagellar
   Basal Body & Motor-Hook Complex (Tan et al., Cell 2021).
   Spans C-ring (FliG/M/N), MS-ring (FliF), Axle Rod (FlgB/C/F/G),
   Bushings (FlgI/FlgH), and Universal Joint Hook (FlgE).
2. PDB 6YKM: MotA4/MotB2 Proton-Conducting Stator Complexes (Johnson et al., Nature 2020).
   Arranged into an authentic 11-fold radial ring surrounding the C-ring rotor.

Outputs:
  - models/flagellar_motor_45nm.blend
  - models/7CGO_flagellar_motor.glb
  - models/6YKM_stator_molecular.glb

Usage (Windows PowerShell):
  & "C:\\Program Files\\Blender Foundation\\Blender 5.2\\blender.exe" --background --python scripts\\generate_7cgo_flagellar_motor.py
"""

import bpy
import os
import sys
import time
import math

try:
    from bl_ext.blender_org import molecularnodes as mn
    print("[+] Molecular Nodes extension loaded successfully.")
except ImportError:
    try:
        import molecularnodes as mn
        print("[+] Molecular Nodes package loaded successfully.")
    except ImportError:
        print("[-] Molecular Nodes add-on is required. Please install/enable bl_ext.blender_org.molecularnodes")
        sys.exit(1)

def clear_scene():
    """Safely clear active objects without touching internal add-on data."""
    bpy.ops.object.select_all(action='SELECT')
    bpy.ops.object.delete(use_global=False)
    for block in bpy.data.meshes:
        if block.users == 0:
            bpy.data.meshes.remove(block)
    for block in bpy.data.materials:
        if block.users == 0:
            bpy.data.materials.remove(block)

def create_pbr_material(name, color_rgba, roughness=0.35, metalness=0.10):
    mat = bpy.data.materials.new(name=name)
    mat.use_nodes = True
    nodes = mat.node_tree.nodes
    nodes.clear()
    bsdf = nodes.new(type='ShaderNodeBsdfPrincipled')
    bsdf.inputs['Base Color'].default_value = color_rgba
    bsdf.inputs['Roughness'].default_value = roughness
    bsdf.inputs['Metallic'].default_value = metalness
    output = nodes.new(type='ShaderNodeOutputMaterial')
    mat.node_tree.links.new(bsdf.outputs['BSDF'], output.inputs['Surface'])
    return mat

def realize_and_convert(obj):
    bpy.context.view_layer.objects.active = obj
    obj.select_set(True)
    for mod in obj.modifiers:
        if mod.type == 'NODES' and mod.node_group:
            tree = mod.node_group
            realize_node = tree.nodes.new(type='GeometryNodeRealizeInstances')
            output_node = next((n for n in tree.nodes if n.type == 'GROUP_OUTPUT'), None)
            if output_node and output_node.inputs[0].links:
                prev_link = output_node.inputs[0].links[0]
                from_socket = prev_link.from_socket
                tree.links.remove(prev_link)
                tree.links.new(from_socket, realize_node.inputs[0])
                tree.links.new(realize_node.outputs[0], output_node.inputs[0])
    bpy.ops.object.convert(target='MESH')

def main():
    repo_root = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
    models_dir = os.path.join(repo_root, "models")
    os.makedirs(models_dir, exist_ok=True)

    blend_output = os.path.join(models_dir, "flagellar_motor_45nm.blend")
    glb_7cgo_output = os.path.join(models_dir, "7CGO_flagellar_motor.glb")
    glb_6ykm_output = os.path.join(models_dir, "6YKM_stator_molecular.glb")

    print("\n" + "=" * 70)
    print("[*] BUILDING COMPLETE FLAGELLAR MOTOR BLENDER SCENE (7CGO + 6YKM)...")
    print("=" * 70)
    clear_scene()

    # 1. Fetch 7CGO Basal Body
    t0 = time.time()
    print("[*] [1/2] Fetching PDB 7CGO Flagellar Basal Body from RCSB...")
    mol_7cgo = mn.entities.Molecule.fetch('7CGO', format='.bcif')
    mol_7cgo.add_style(
        style="cartoon",
        selection="all",
        color=(0.10, 0.52, 0.70, 1.0) # Deep Marine / Cyan Blue
    )
    obj_7cgo = mol_7cgo.object
    obj_7cgo.name = "MN_7CGO_Basal_Body"
    realize_and_convert(obj_7cgo)

    mod_dec = obj_7cgo.modifiers.new(name="Decimate_7CGO", type='DECIMATE')
    mod_dec.ratio = 0.35
    bpy.ops.object.modifier_apply(modifier="Decimate_7CGO")
    mat_7cgo = create_pbr_material("Mat_7CGO_BasalBody", (0.10, 0.52, 0.70, 1.0), roughness=0.35)
    obj_7cgo.data.materials.clear()
    obj_7cgo.data.materials.append(mat_7cgo)
    print(f"[+] 7CGO ready in {time.time() - t0:.2f}s ({len(obj_7cgo.data.vertices)} verts)")

    # 2. Fetch 6YKM Stator Unit
    t1 = time.time()
    print("[*] [2/2] Fetching PDB 6YKM MotA4/MotB2 Stator Unit from RCSB...")
    mol_6ykm = mn.entities.Molecule.fetch('6YKM', format='.bcif')
    mol_6ykm.add_style(
        style="cartoon",
        selection="chainID A B C D E F",
        color=(0.91, 0.43, 0.32, 1.0) # Terracotta Amber
    )
    obj_6ykm = mol_6ykm.object
    obj_6ykm.name = "MN_6YKM_Stator_Unit_1"
    realize_and_convert(obj_6ykm)

    mod_dec2 = obj_6ykm.modifiers.new(name="Decimate_6YKM", type='DECIMATE')
    mod_dec2.ratio = 0.40
    bpy.ops.object.modifier_apply(modifier="Decimate_6YKM")
    mat_6ykm = create_pbr_material("Mat_6YKM_Stator", (0.91, 0.43, 0.32, 1.0), roughness=0.38)
    obj_6ykm.data.materials.clear()
    obj_6ykm.data.materials.append(mat_6ykm)
    print(f"[+] 6YKM base unit ready in {time.time() - t1:.2f}s")

    # Center 7CGO to global origin
    bpy.context.view_layer.objects.active = obj_7cgo
    bpy.ops.object.origin_set(type='ORIGIN_GEOMETRY', center='MEDIAN')
    obj_7cgo.location = (0, 0, 0)

    # 3. Arrange 11 Stator Complexes in a radial ring at R = 24.5 nm (245 Å)
    stator_ring_group = bpy.data.objects.new("MotA_MotB_11x_Stator_Ring", None)
    bpy.context.scene.collection.objects.link(stator_ring_group)

    num_stators = 11
    # Scale from Angstroms to scene units matching 7CGO
    stator_radius = 24.5 # nm

    stator_objects = [obj_6ykm]
    obj_6ykm.parent = stator_ring_group
    angle_0 = 0.0
    obj_6ykm.location = (math.cos(angle_0) * stator_radius, math.sin(angle_0) * stator_radius, -1.2)
    obj_6ykm.rotation_euler = (0, 0, angle_0 + math.pi / 2)

    for i in range(1, num_stators):
        angle = (i / num_stators) * math.pi * 2
        dup = obj_6ykm.copy()
        dup.data = obj_6ykm.data
        dup.name = f"MN_6YKM_Stator_Unit_{i + 1}"
        dup.parent = stator_ring_group
        dup.location = (math.cos(angle) * stator_radius, math.sin(angle) * stator_radius, -1.2)
        dup.rotation_euler = (0, 0, angle + math.pi / 2)
        bpy.context.scene.collection.objects.link(dup)
        stator_objects.append(dup)

    # 4. Master Parent Empty
    root_empty = bpy.data.objects.new("Flagellar_Motor_45nm_Complex", None)
    root_empty.empty_display_type = 'ARROWS'
    root_empty.empty_display_size = 5.0
    bpy.context.scene.collection.objects.link(root_empty)

    obj_7cgo.parent = root_empty
    stator_ring_group.parent = root_empty

    # Save Master .blend Scene
    print(f"\n[*] Saving master .blend scene to:\n    {blend_output}")
    bpy.ops.wm.save_as_mainfile(filepath=blend_output)
    print(f"[+] Master .blend saved successfully ({os.path.getsize(blend_output) / 1024 / 1024:.2f} MB)")

    # Export GLB files
    if "--no-glb" not in sys.argv:
        print(f"\n[*] Exporting 7CGO GLB to: {glb_7cgo_output}")
        bpy.ops.object.select_all(action='DESELECT')
        obj_7cgo.select_set(True)
        bpy.context.view_layer.objects.active = obj_7cgo
        bpy.ops.export_scene.gltf(filepath=glb_7cgo_output, export_format='GLB', use_selection=True, export_apply=True)

        print(f"[*] Exporting 6YKM GLB to: {glb_6ykm_output}")
        bpy.ops.object.select_all(action='DESELECT')
        obj_6ykm.select_set(True)
        bpy.context.view_layer.objects.active = obj_6ykm
        bpy.ops.export_scene.gltf(filepath=glb_6ykm_output, export_format='GLB', use_selection=True, export_apply=True)

    print("\n[+] Done! Flagellar Motor 45nm Blender Scene fully generated.")

if __name__ == "__main__":
    main()
