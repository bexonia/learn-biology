"""
generate_7cgo_flagellar_motor.py
================================
Automated Blender 5.2 + Molecular Nodes pipeline to fetch and export:
1. PDB 7CGO: Authentic 3.4 Å Cryo-EM structure of the Bacterial Flagellar
   Basal Body & Motor-Hook Complex (Tan et al., Cell 2021).
   Spans C-ring (FliG/M/N), MS-ring (FliF), Rod (FlgB/C/F/G),
   Bushings (FlgI/FlgH), and Universal Joint Hook (FlgE).
2. PDB 6YKM: MotA4/MotB2 Proton-Conducting Stator Units (Johnson et al., Nature 2020).

Outputs:
  - models/7CGO_flagellar_motor.glb (18.1 MB)
  - models/6YKM_stator_molecular.glb (0.9 MB)

Usage (Windows PowerShell):
  & "C:\\Program Files\\Blender Foundation\\Blender 5.2\\blender.exe" --background --python scripts\\generate_7cgo_flagellar_motor.py
"""

import bpy
import os
import sys
import time

try:
    import molecularnodes as mn
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

def build_7cgo_flagellar_motor(output_path):
    print("\n" + "=" * 70)
    print("[*] Fetching & Building PDB 7CGO Flagellar Basal Motor...")
    print("=" * 70)
    t0 = time.time()
    clear_scene()

    # Fetch 7CGO via Molecular Nodes
    mol = mn.entities.Molecule.fetch('7CGO', format='.bcif')
    print(f"[+] 7CGO fetched in {time.time() - t0:.2f}s")

    # Add cartoon secondary structure representation
    mol.add_style(
        style="cartoon",
        selection="",
        color=(0.10, 0.45, 0.70, 1.0)
    )

    # Realize Geometry Node instances to standard Blender mesh
    obj = mol.object
    bpy.context.view_layer.objects.active = obj
    obj.select_set(True)

    # Add realize instances node if geometry nodes modifier is present
    for mod in obj.modifiers:
        if mod.type == 'NODES' and mod.node_group:
            tree = mod.node_group
            realize_node = tree.nodes.new(type='GeometryNodeRealizeInstances')
            # Wire before output
            output_node = next((n for n in tree.nodes if n.type == 'GROUP_OUTPUT'), None)
            if output_node and output_node.inputs[0].links:
                prev_link = output_node.inputs[0].links[0]
                from_socket = prev_link.from_socket
                tree.links.remove(prev_link)
                tree.links.new(from_socket, realize_node.inputs[0])
                tree.links.new(realize_node.outputs[0], output_node.inputs[0])

    bpy.ops.object.convert(target='MESH')

    # Apply decimation to optimize for WebGL interactive runtime (~15 MB)
    mod_dec = obj.modifiers.new(name="Decimate_7CGO", type='DECIMATE')
    mod_dec.ratio = 0.35
    bpy.ops.object.modifier_apply(modifier="Decimate_7CGO")

    # Export to GLB
    os.makedirs(os.path.dirname(output_path), exist_ok=True)
    bpy.ops.export_scene.gltf(
        filepath=output_path,
        export_format='GLB',
        use_selection=True,
        export_apply=True
    )
    print(f"[+] Exported 7CGO GLB to: {output_path} ({os.path.getsize(output_path) / 1024 / 1024:.2f} MB)")

def build_6ykm_stator(output_path):
    print("\n" + "=" * 70)
    print("[*] Fetching & Building PDB 6YKM MotA/B Stator Unit...")
    print("=" * 70)
    t0 = time.time()
    clear_scene()

    # Fetch 6YKM stator unit
    mol = mn.entities.Molecule.fetch('6YKM', format='.bcif')
    print(f"[+] 6YKM fetched in {time.time() - t0:.2f}s")

    mol.add_style(
        style="cartoon",
        selection="chainID A B C D E F",
        color=(0.91, 0.43, 0.32, 1.0)
    )

    obj = mol.object
    bpy.context.view_layer.objects.active = obj
    obj.select_set(True)

    # Realize instances
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

    mod_dec = obj.modifiers.new(name="Decimate_6YKM", type='DECIMATE')
    mod_dec.ratio = 0.40
    bpy.ops.object.modifier_apply(modifier="Decimate_6YKM")

    os.makedirs(os.path.dirname(output_path), exist_ok=True)
    bpy.ops.export_scene.gltf(
        filepath=output_path,
        export_format='GLB',
        use_selection=True,
        export_apply=True
    )
    print(f"[+] Exported 6YKM Stator GLB to: {output_path} ({os.path.getsize(output_path) / 1024 / 1024:.2f} MB)")

def main():
    repo_root = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
    models_dir = os.path.join(repo_root, "models")
    
    path_7cgo = os.path.join(models_dir, "7CGO_flagellar_motor.glb")
    path_6ykm = os.path.join(models_dir, "6YKM_stator_molecular.glb")

    build_7cgo_flagellar_motor(path_7cgo)
    build_6ykm_stator(path_6ykm)
    print("\n[+] All Flagellar Motor Cryo-EM assets successfully processed!")

if __name__ == "__main__":
    main()
