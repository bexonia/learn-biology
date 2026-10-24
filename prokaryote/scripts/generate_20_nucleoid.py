"""
generate_20_nucleoid.py

Authentic Macromolecular Synthesis of Element 20:
Bacterial Nucleoid Architecture & NAP Chromosome Compaction (PDB: 1P71, 1BNA, 3IV5, 1ETY, 3EUH)
using Molecular Nodes in Blender 5.2.

Matches the chromosomal loop & NAP architecture in expected_nucleoid.png:
1. Piece_Nuc_Plectoneme_DNA (#F77F00) — Authentic PDB 1BNA B-DNA double-helix segments + 1P71 bent hairpin DNA
   forming the left supercoiled plectoneme loop and the right parallel bridged DNA duplexes
2. Piece_Nuc_HU_Dimers (#00F5D4) — PDB 1P71 IHF/HU heterodimer clamp at the 160° DNA hairpin U-turn (upper-left)
3. Piece_Nuc_HNS_Bridge (#9D4EDD) — PDB 3IV5 H-NS oligomeric filament bridging the two parallel DNA duplexes (right)
4. Piece_Nuc_Fis_Benders (#3A86FF) — PDB 1ETY Fis homodimer clamping the plectonemic DNA crossover (lower-left)
5. Piece_Nuc_MukBEF_Clamp (#E63946) — PDB 3EUH MukBEF condensin ring clamping the macrodomain loop root (bottom center)
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

print("[*] Fetching 1P71 (IHF-DNA 160° bend), 1BNA (B-DNA duplex), 3IV5 (H-NS), 1ETY (Fis dimer), 3EUH (MukBEF)...")
mol_1p71 = mn.entities.Molecule.fetch("1P71")
u_1p71 = mol_1p71.universe

mol_1bna = mn.entities.Molecule.fetch("1BNA")
u_1bna = mol_1bna.universe

mol_3iv5 = mn.entities.Molecule.fetch("3IV5")
u_3iv5 = mol_3iv5.universe

mol_1ety = mn.entities.Molecule.fetch("1ETY")
u_1ety = mol_1ety.universe

mol_3euh = mn.entities.Molecule.fetch("3EUH")
u_3euh = mol_3euh.universe

# Base B-DNA duplex segment from 1BNA
dna_seg = build_mn_piece(
    u_1bna,
    "Base_BDNA_Seg",
    "nucleic",
    style="cartoon",
    color_hex="#F77F00",
    decimate=0.75,
    center_three=(0, 0, 0),
    spans_three=(0.95, 1.85, 0.95),
)

# 1. Piece_Nuc_Plectoneme_DNA (#F77F00)
# Extract the authentic 160° bent DNA hairpin from 1P71 at upper-left (-1.25, +1.85, 0.0)
bent_dna = build_mn_piece(
    u_1p71,
    "IHF_Bent_DNA",
    "nucleic",
    style="cartoon",
    color_hex="#F77F00",
    decimate=0.75,
    center_three=(-1.25, 1.85, 0.0),
    spans_three=(2.6, 2.5, 1.8),
)

dna_objs = [bent_dna]
# Left supercoiled plectoneme loop + Right parallel bridged duplexes
dna_path_poses = [
    # Left outer plectoneme arc
    ((-2.85, 2.35, 0.1),  (0.0,  0.55, 0.0)),
    ((-3.85, 1.05, -0.2), (0.0,  0.15, 0.4)),
    ((-3.65, -0.45, 0.2), (0.0, -0.35, 0.8)),
    ((-2.65, -1.75, -0.1),(0.0, -0.55, 1.2)),
    ((-1.45, -2.75, 0.1), (0.0, -0.45, 1.6)),
    # Inner return stem from IHF bend down to MukBEF root
    ((-0.65, 0.25, -0.15),(0.0,  0.40, 0.5)),
    ((-0.25, -1.15, 0.15),(0.0,  0.30, 1.0)),
    # Right parallel duplex Track A (upper parallel strand)
    ((0.65, -1.05, 0.1),  (0.0, -0.52, 0.2)),
    ((1.55,  0.25, 0.1),  (0.0, -0.52, 0.7)),
    ((2.45,  1.55, 0.1),  (0.0, -0.52, 1.2)),
    ((3.35,  2.85, 0.1),  (0.0, -0.52, 1.7)),
    # Right parallel duplex Track B (lower parallel strand bridged by H-NS)
    ((1.45, -1.65, -0.1), (0.0, -0.52, 0.4)),
    ((2.35, -0.35, -0.1), (0.0, -0.52, 0.9)),
    ((3.25,  0.95, -0.1), (0.0, -0.52, 1.4)),
    ((4.15,  2.25, -0.1), (0.0, -0.52, 1.9)),
]
for pos, rot in dna_path_poses:
    c = dna_seg.copy()
    c.data = dna_seg.data.copy()
    c.location = three_to_blender(*pos)
    c.rotation_euler = rot
    bpy.context.collection.objects.link(c)
    bpy.context.view_layer.objects.active = c
    c.select_set(True)
    bpy.ops.object.transform_apply(location=True, rotation=True, scale=True)
    dna_objs.append(c)

join_objects_as_piece(dna_objs, "Piece_Nuc_Plectoneme_DNA", "#F77F00")

# 2. Piece_Nuc_HU_Dimers (#00F5D4 — PDB 1P71 IHF/HU heterodimer clamping the 160° DNA bend)
build_mn_piece(
    u_1p71,
    "Piece_Nuc_HU_Dimers",
    "protein",
    style="cartoon",
    color_hex="#00F5D4",
    decimate=0.65,
    center_three=(-1.35, 1.35, 0.25),
    spans_three=(2.2, 2.1, 1.8),
)

# 3. Piece_Nuc_HNS_Bridge (#9D4EDD — PDB 3IV5 H-NS oligomer bridging the two right-hand parallel DNA duplexes)
hns_base = build_mn_piece(
    u_3iv5,
    "Base_HNS",
    "protein",
    style="cartoon",
    color_hex="#9D4EDD",
    decimate=0.65,
    center_three=(0, 0, 0),
    spans_three=(1.15, 1.15, 1.05),
)
hns_objs = []
for i in range(4):
    hx = 1.35 + i * 0.65
    hy = -0.55 + i * 0.92
    c = hns_base.copy()
    c.data = hns_base.data.copy()
    c.location = three_to_blender(hx, hy, 0.0)
    c.rotation_euler = (0.0, -0.52, i * 0.6)
    bpy.context.collection.objects.link(c)
    bpy.context.view_layer.objects.active = c
    c.select_set(True)
    bpy.ops.object.transform_apply(location=True, rotation=True, scale=True)
    hns_objs.append(c)
join_objects_as_piece(hns_objs, "Piece_Nuc_HNS_Bridge", "#9D4EDD")

# 4. Piece_Nuc_Fis_Benders (#3A86FF — PDB 1ETY Fis homodimers stabilizing the left plectoneme crossover)
fis_1 = build_mn_piece(
    u_1ety,
    "Fis_1",
    "protein",
    style="cartoon",
    color_hex="#3A86FF",
    decimate=0.65,
    center_three=(-2.65, -0.85, 0.2),
    spans_three=(1.65, 1.65, 1.55),
)
fis_2 = build_mn_piece(
    u_1ety,
    "Fis_2",
    "protein",
    style="cartoon",
    color_hex="#3A86FF",
    decimate=0.65,
    center_three=(-3.15, 0.45, -0.15),
    spans_three=(1.45, 1.45, 1.45),
    euler_xyz=(0.3, 0.4, 0.8),
)
join_objects_as_piece([fis_1, fis_2], "Piece_Nuc_Fis_Benders", "#3A86FF")

# 5. Piece_Nuc_MukBEF_Clamp (#E63946 — PDB 3EUH MukBEF SMC Condensin ring clamping the macrodomain root at bottom)
muk_left = build_mn_piece(
    u_3euh,
    "Muk_Left",
    "protein",
    style="cartoon",
    color_hex="#E63946",
    decimate=0.45,
    center_three=(-0.55, -2.55, 0.2),
    spans_three=(1.95, 2.05, 1.85),
    euler_xyz=(0.0, 0.3, 0.0),
)
muk_right = build_mn_piece(
    u_3euh,
    "Muk_Right",
    "protein",
    style="cartoon",
    color_hex="#E63946",
    decimate=0.45,
    center_three=(0.65, -2.55, 0.2),
    spans_three=(1.95, 2.05, 1.85),
    euler_xyz=(0.0, -0.3, 3.14),
)
join_objects_as_piece([muk_left, muk_right], "Piece_Nuc_MukBEF_Clamp", "#E63946")

for tmp in [dna_seg, hns_base, mol_1p71.object, mol_1bna.object, mol_3iv5.object, mol_1ety.object, mol_3euh.object]:
    if tmp and tmp.name in bpy.data.objects:
        bpy.data.objects.remove(tmp, do_unlink=True)

export_roadmap_glb("nucleoid_naps.glb", blend_filename="nucleoid_naps.blend")
