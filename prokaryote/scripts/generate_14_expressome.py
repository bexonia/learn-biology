"""
generate_14_expressome.py

Authentic Cryo-EM Macromolecular Synthesis of Element 14:
Co-Transcriptional Expressome Supercomplex (PDB: 6X9Q) using Molecular Nodes in Blender 5.2.

All 8 pieces are extracted directly from the experimental cryo-EM chains of PDB 6X9Q
and rotated/fitted as a unified quaternary holoenzyme so that:
- RNAP Core (Chains AA, AC, AD, AE, AF) and DNA Bubble (Chains 5, 6) are on the Left (-X)
- NusG Bridge (Chain AB), NusA Chaperone (Chain AG), and Nascent mRNA (Chain 7) span the Center
- 30S Decoding Subunit (Chain D + C..X), 50S Catalytic Subunit (Chains a, d + 0..z),
  and A/P/E-Site tRNAs (Chains A, B) are on the Right (+X), matching expected_expressome.png.
"""

import os
import sys
import math
import bpy
import numpy as np
from mathutils import Vector, Matrix

sys.path.append(os.path.dirname(os.path.abspath(__file__)))
from mn_builder_utils import (
    mn,
    clear_scene,
    hex_to_rgba,
    create_pbr_material,
    realize_mn_to_mesh,
    fit_object_group_to_three_bounds,
    export_roadmap_glb,
)

clear_scene()

print("[*] Fetching experimental cryo-EM Expressome structure 6X9Q...")
mol = mn.entities.Molecule.fetch("6X9Q")
u = mol.universe
print(f"[+] Loaded 6X9Q: {len(u.atoms)} atoms")

PIECES_SPEC = [
    {
        "name": "Piece_6X9Q_RNAP_Core",
        "sel": "chainID AA AC AD AE AF",
        "style": "cartoon",
        "color": "#3A86FF",
        "decimate": 0.32,
    },
    {
        "name": "Piece_6X9Q_DNA_Duplex",
        "sel": "chainID 5 6",
        "style": "cartoon",
        "color": "#F77F00",
        "decimate": 0.75,
    },
    {
        "name": "Piece_6X9Q_NusG_Bridge",
        "sel": "chainID AB",
        "style": "cartoon",
        "extra_style": "surface",
        "color": "#FFB703",
        "decimate": 0.65,
    },
    {
        "name": "Piece_6X9Q_NusA_Modulator",
        "sel": "chainID AG",
        "style": "cartoon",
        "extra_style": "surface",
        "color": "#9D4EDD",
        "decimate": 0.55,
    },
    {
        "name": "Piece_6X9Q_Nascent_mRNA",
        "sel": "chainID 7",
        "style": "cartoon",
        "color": "#E63946",
        "decimate": 0.85,
    },
    {
        "name": "Piece_6X9Q_Ribosome_30S",
        "sel": "chainID D C E F G H I J K L M N O P Q R S T U V W X",
        "style": "cartoon",
        "color": "#06D6A0",
        "decimate": 0.14,
    },
    {
        "name": "Piece_6X9Q_Ribosome_50S",
        "sel": "chainID a d 0 1 2 3 4 9 Y Z b c e f g h i j k l m n o p q r s t u v w x y z",
        "style": "cartoon",
        "color": "#2A9D8F",
        "decimate": 0.10,
    },
    {
        "name": "Piece_6X9Q_tRNA_Sites",
        "sel": "chainID A B",
        "style": "cartoon",
        "color": "#00F5D4",
        "decimate": 0.75,
    },
]

built_objs = []
for spec in PIECES_SPEC:
    rgba = hex_to_rgba(spec["color"])
    p_mol = mn.entities.Molecule(u, name=spec["name"])
    p_mol.add_style(style=spec["style"], selection=spec["sel"], color=rgba)
    if spec.get("extra_style"):
        p_mol.add_style(style=spec["extra_style"], selection=spec["sel"], color=rgba)
    obj = realize_mn_to_mesh(p_mol, decimate_ratio=spec["decimate"])
    obj.name = spec["name"]
    obj.data.name = spec["name"]
    mat = create_pbr_material(f"Mat_{spec['name']}", rgba, roughness=0.34, metalness=0.10)
    obj.data.materials.clear()
    obj.data.materials.append(mat)
    built_objs.append(obj)
    print(f"[+] Built {spec['name']}: {len(obj.data.vertices)} verts")

# Remove original container if still present
if mol.object and mol.object.name in bpy.data.objects:
    bpy.data.objects.remove(mol.object, do_unlink=True)

# Orient the unified 6X9Q supercomplex so RNAP is on the Left (-X), NusG/NusA/mRNA in the Center,
# and 30S (lower-right) + 50S (upper-right) are on the Right (+X)
# Compute orthonormal frame from RNAP -> Ribosome vector and 30S -> 50S vector
rnap_com = Vector(u.select_atoms("chainID AA AE").center_of_mass())
rib30_com = Vector(u.select_atoms("chainID D").center_of_mass())
rib50_com = Vector(u.select_atoms("chainID a").center_of_mass())

# In Blender (before export_yup=True):
# X_blender -> +X_three (Right)
# Z_blender -> +Y_three (Up)
# -Y_blender -> +Z_three (Front)
axis_right = (0.5 * (rib30_com + rib50_com) - rnap_com).normalized()
axis_up_raw = (rib50_com - rib30_com).normalized()
axis_back = axis_right.cross(axis_up_raw).normalized()  # +Y_blender (-Z_three)
axis_up = axis_back.cross(axis_right).normalized()      # +Z_blender (+Y_three)

rot3 = Matrix((axis_right, axis_back, axis_up))  # rows map original coords -> (X_b, Y_b, Z_b)
rot4 = rot3.to_4x4()

for o in built_objs:
    for v in o.data.vertices:
        v.co = rot4 @ v.co
    o.data.update()

# Slightly separate RNAP+DNA+NusG/NusA along X so the central NusG/NusA/mRNA bridge is clearly visible
fit_object_group_to_three_bounds(built_objs, (0.0, 0.0, 0.0), (13.2, 8.8, 8.5))

export_roadmap_glb("expressome_6x9q.glb", blend_filename="expressome_6x9q.blend")
