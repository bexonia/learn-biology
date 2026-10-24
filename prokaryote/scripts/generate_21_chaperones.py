"""
generate_21_chaperones.py

Authentic Macromolecular Synthesis of Element 21:
Prokaryotic Proteostasis: GroEL–GroES Anfinsen Cage & DnaK–DnaJ–GrpE (PDB: 1AON, 2KHO, 1W26)
using Molecular Nodes in Blender 5.2.

Exact piece names from roadmapScenariosConfig.ts:
1. Piece_1AON_GroES_Lid (#FFB703) — Heptameric GroES dome cap (1AON chains O-U) at top of cage
2. Piece_1AON_GroEL_CisRing (#3A86FF) — Cutaway cis-GroEL heptameric folding chamber (1AON chains A-E, front window open)
3. Piece_1AON_Encapsulated_Substrate (#06D6A0) — Encapsulated folding client protein inside the open cis-GroEL cavity
4. Piece_1AON_GroEL_TransRing (#2A9D8F) — Lower trans-GroEL heptameric ring (1AON chains H-N)
5. Piece_1AON_Trigger_Factor (#00F5D4) — Trigger Factor ribosome-associated holdase cradle (PDB: 1W26)
6. Piece_1AON_DnaK_DnaJ_GrpE (#9D4EDD) — Two-lobed DnaK (Hsp70) + DnaJ J-domain & GrpE co-chaperones (PDB: 2KHO)
"""

import os
import sys
import math
import bpy
from mathutils import Vector

sys.path.append(os.path.dirname(os.path.abspath(__file__)))
from mn_builder_utils import (
    mn,
    clear_scene,
    three_to_blender,
    build_mn_piece,
    join_objects_as_piece,
    export_roadmap_glb,
)

clear_scene()

print("[*] Fetching 1AON (GroEL-GroES 21-mer cage), 2KHO (DnaK Hsp70), 1W26 (Trigger Factor)...")
mol_1aon = mn.entities.Molecule.fetch("1AON")
u_1aon = mol_1aon.universe

mol_2kho = mn.entities.Molecule.fetch("2KHO")
u_2kho = mol_2kho.universe

mol_1w26 = mn.entities.Molecule.fetch("1W26")
u_1w26 = mol_1w26.universe

# Compute the exact 7-fold symmetry axis of 1AON in PDB coordinates so it points straight up (+Z in Blender = +Y in Three.js)
p_cap = u_1aon.select_atoms("chainID O P Q R S T U").center_of_mass()
p_trans = u_1aon.select_atoms("chainID H I J K L M N").center_of_mass()
axis_pdb = Vector((float(p_cap[0] - p_trans[0]), float(p_cap[1] - p_trans[1]), float(p_cap[2] - p_trans[2]))).normalized()
q_up = axis_pdb.rotation_difference(Vector((0.0, 0.0, 1.0)))

# Also compute rotation around Z so the missing chains (F, G) of the cis ring face the camera (-Y in Blender = +Z in Three.js)
p_cis_all = u_1aon.select_atoms("chainID A B C D E F G").center_of_mass()
p_cis_gap = u_1aon.select_atoms("chainID F G").center_of_mass()
gap_vec = Vector((float(p_cis_gap[0] - p_cis_all[0]), float(p_cis_gap[1] - p_cis_all[1]), float(p_cis_gap[2] - p_cis_all[2])))
gap_rot = q_up @ gap_vec
gap_xy = Vector((gap_rot.x, gap_rot.y, 0.0)).normalized()
q_front = gap_xy.rotation_difference(Vector((0.0, -1.0, 0.0)))
euler_1aon = (q_front @ q_up).to_euler('XYZ')

# 1. Piece_1AON_GroES_Lid (#FFB703 — Heptameric GroES dome cap at top of Anfinsen cage)
build_mn_piece(
    u_1aon,
    "Piece_1AON_GroES_Lid",
    "chainID O P Q R S T U and protein",
    style="surface",
    color_hex="#FFB703",
    decimate=0.45,
    center_three=(-2.05, 2.75, 0.0),
    spans_three=(3.15, 1.35, 3.15),
    euler_xyz=(euler_1aon.x, euler_1aon.y, euler_1aon.z),
)

# 2. Piece_1AON_GroEL_CisRing (#3A86FF — Cutaway cis-GroEL heptameric chamber with front 2 subunits open)
build_mn_piece(
    u_1aon,
    "Piece_1AON_GroEL_CisRing",
    "chainID A B C D E and protein",
    style="cartoon",
    color_hex="#3A86FF",
    decimate=0.35,
    center_three=(-2.05, 0.80, -0.15),
    spans_three=(3.75, 2.55, 3.45),
    euler_xyz=(euler_1aon.x, euler_1aon.y, euler_1aon.z),
)

# 3. Piece_1AON_Encapsulated_Substrate (#06D6A0 — Encapsulated folding intermediate inside the open cis-GroEL cavity)
build_mn_piece(
    u_1w26,
    "Piece_1AON_Encapsulated_Substrate",
    "resid 1:145 and protein",
    style="cartoon",
    color_hex="#06D6A0",
    decimate=0.70,
    center_three=(-2.05, 0.85, 0.45),
    spans_three=(1.65, 1.55, 1.55),
)

# 4. Piece_1AON_GroEL_TransRing (#2A9D8F — Lower trans-GroEL heptameric ring)
build_mn_piece(
    u_1aon,
    "Piece_1AON_GroEL_TransRing",
    "chainID H I J K L M N and protein",
    style="cartoon",
    color_hex="#2A9D8F",
    decimate=0.32,
    center_three=(-2.05, -1.75, 0.0),
    spans_three=(3.65, 2.45, 3.65),
    euler_xyz=(euler_1aon.x, euler_1aon.y, euler_1aon.z),
)

# 5. Piece_1AON_Trigger_Factor (#00F5D4 — Trigger Factor ribosome-associated holdase cradle on right)
build_mn_piece(
    u_1w26,
    "Piece_1AON_Trigger_Factor",
    "protein",
    style="cartoon",
    color_hex="#00F5D4",
    decimate=0.45,
    center_three=(1.65, -0.25, 0.15),
    spans_three=(2.35, 3.35, 2.05),
    euler_xyz=(0.2, 0.3, -0.35),
)

# 6. Piece_1AON_DnaK_DnaJ_GrpE (#9D4EDD — DnaK Hsp70 2KHO + DnaJ co-chaperone + unfolded polypeptide)
dnak_core = build_mn_piece(
    u_2kho,
    "DnaK_Core",
    "protein",
    style="cartoon",
    color_hex="#9D4EDD",
    decimate=0.45,
    center_three=(3.35, -0.15, 0.0),
    spans_three=(2.45, 3.25, 2.15),
    euler_xyz=(0.15, -0.25, 0.25),
)
dnaj_co = build_mn_piece(
    u_2kho,
    "DnaJ_CoChaperone",
    "resid 390:605 and protein",
    style="cartoon",
    color_hex="#9D4EDD",
    decimate=0.65,
    center_three=(2.55, 2.05, 0.1),
    spans_three=(2.35, 1.55, 1.75),
    euler_xyz=(0.3, 0.5, 1.1),
)
join_objects_as_piece([dnak_core, dnaj_co], "Piece_1AON_DnaK_DnaJ_GrpE", "#9D4EDD")

for tmp in [mol_1aon.object, mol_2kho.object, mol_1w26.object]:
    if tmp and tmp.name in bpy.data.objects:
        bpy.data.objects.remove(tmp, do_unlink=True)

export_roadmap_glb("chaperones_1aon.glb", blend_filename="chaperones_1aon.blend")
