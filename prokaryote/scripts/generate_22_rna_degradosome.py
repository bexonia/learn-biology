"""
generate_22_rna_degradosome.py

Authentic Macromolecular Synthesis of Element 22:
Bacterial RNA Degradosome & mRNA Decay Factory (PDB: 2C0B, 1E3P, 1E9I, 1KQ2, 1HV8)
using Molecular Nodes in Blender 5.2.

Exact piece names from roadmapScenariosConfig.ts (glb: rna_degradosome_5m3p.glb):
1. Piece_Deg_Inner_Membrane (#06D6A0) — Curved inner membrane phospholipid bilayer + amphipathic Helix A
2. Piece_Deg_RNaseE_Tetramer (#3A86FF) — Central X-shaped RNase E catalytic NTD tetramer (PDB: 2C0B)
3. Piece_Deg_CTD_Scaffold (#00F5D4) — RNase E intrinsically disordered C-terminal macromolecular scaffold
4. Piece_Deg_RhlB_Helicase (#9D4EDD) — Bilobed DEAD-box RNA helicase unwinding structured RNA (PDB: 1HV8)
5. Piece_Deg_Enolase_Dimer (#2A9D8F) — Dimeric glycolytic enolase sensor bound to the scaffold (PDB: 1E9I)
6. Piece_Deg_PNPase_Trimer (#FFB703) — Ring-shaped trimeric PNPase phosphorolytic exoribonuclease barrel (PDB: 1E3P)
7. Piece_Deg_Hfq_sRNA_Target (#E63946) — Hfq hexameric Sm-ring chaperone + single-stranded mRNA transcript (PDB: 1KQ2)
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
    build_phospholipid_bilayer_piece,
    join_objects_as_piece,
    export_roadmap_glb,
)

clear_scene()

print("[*] Fetching 2C0B (RNase E tetramer), 1E3P (PNPase trimer), 1HV8 (DEAD-box helicase), 1E9I (Enolase), 1KQ2 (Hfq-RNA)...")
mol_2c0b = mn.entities.Molecule.fetch("2C0B")
u_2c0b = mol_2c0b.universe

mol_1e3p = mn.entities.Molecule.fetch("1E3P")
u_1e3p = mol_1e3p.universe

mol_1hv8 = mn.entities.Molecule.fetch("1HV8")
u_1hv8 = mol_1hv8.universe

mol_1e9i = mn.entities.Molecule.fetch("1E9I")
u_1e9i = mol_1e9i.universe

mol_1kq2 = mn.entities.Molecule.fetch("1KQ2")
u_1kq2 = mol_1kq2.universe

# 1. Piece_Deg_Inner_Membrane (#06D6A0 — Curved inner-membrane phospholipid bilayer)
build_phospholipid_bilayer_piece(
    "Piece_Deg_Inner_Membrane",
    center_three=(0.15, -2.15, 0.0),
    span_x=8.6,
    thickness_y=0.95,
    span_z=3.2,
    color_hex="#06D6A0",
    nx=16,
    nz=6,
    arch_curv=0.04,
)

# 2. Piece_Deg_RNaseE_Tetramer (#3A86FF — Central X-shaped RNase E catalytic tetramer 2C0B)
build_mn_piece(
    u_2c0b,
    "Piece_Deg_RNaseE_Tetramer",
    "protein",
    style="cartoon",
    color_hex="#3A86FF",
    decimate=0.35,
    center_three=(-0.55, 1.15, 0.0),
    spans_three=(3.15, 2.85, 2.55),
)

# 3. Piece_Deg_CTD_Scaffold (#00F5D4 — Amphipathic Helix A tether + C-terminal scaffold)
scaf_1 = build_mn_piece(
    u_2c0b,
    "Deg_Helix_A",
    "resid 1:180 and protein",
    style="ribbon",
    color_hex="#00F5D4",
    decimate=0.65,
    center_three=(-0.75, -0.75, 0.15),
    spans_three=(2.45, 1.65, 1.45),
)
scaf_2 = build_mn_piece(
    u_2c0b,
    "Deg_CTD_Tail",
    "resid 181:380 and protein",
    style="ribbon",
    color_hex="#00F5D4",
    decimate=0.65,
    center_three=(1.15, 0.05, 0.10),
    spans_three=(3.15, 1.55, 1.35),
)
join_objects_as_piece([scaf_1, scaf_2], "Piece_Deg_CTD_Scaffold", "#00F5D4")

# 4. Piece_Deg_RhlB_Helicase (#9D4EDD — Bilobed DEAD-box RNA helicase on left side of scaffold)
build_mn_piece(
    u_1hv8,
    "Piece_Deg_RhlB_Helicase",
    "protein",
    style="cartoon",
    color_hex="#9D4EDD",
    decimate=0.45,
    center_three=(-2.95, 0.75, 0.20),
    spans_three=(2.25, 2.35, 2.05),
    euler_xyz=(0.2, -0.3, 0.4),
)

# 5. Piece_Deg_Enolase_Dimer (#2A9D8F — Dimeric glycolytic enolase docked on lower-right scaffold)
build_mn_piece(
    u_1e9i,
    "Piece_Deg_Enolase_Dimer",
    "protein",
    style="cartoon",
    color_hex="#2A9D8F",
    decimate=0.45,
    center_three=(2.85, -0.75, 0.15),
    spans_three=(2.35, 2.05, 2.05),
    euler_xyz=(0.15, 0.4, -0.25),
)

# 6. Piece_Deg_PNPase_Trimer (#FFB703 — Ring-shaped trimeric PNPase phosphorolytic exoribonuclease barrel on upper-right)
build_mn_piece(
    u_1e3p,
    "Piece_Deg_PNPase_Trimer",
    "protein",
    style="cartoon",
    color_hex="#FFB703",
    decimate=0.35,
    center_three=(2.25, 1.35, 0.15),
    spans_three=(2.75, 2.65, 2.55),
    euler_xyz=(0.35, 0.25, 0.0),
)

# 7. Piece_Deg_Hfq_sRNA_Target (#E63946 — Hfq Sm-ring chaperone + single-stranded mRNA substrate threading across top)
hfq_ring = build_mn_piece(
    u_1kq2,
    "Hfq_Ring",
    "protein",
    style="cartoon",
    color_hex="#E63946",
    decimate=0.45,
    center_three=(-3.95, 1.55, 0.25),
    spans_three=(1.85, 1.85, 1.65),
    euler_xyz=(0.4, 0.3, 0.2),
)
mrna_thread = build_mn_piece(
    u_2c0b,
    "mRNA_Thread",
    "resid 1:180 and protein",
    style="ribbon",
    color_hex="#E63946",
    decimate=0.65,
    center_three=(-1.45, 1.95, 0.35),
    spans_three=(3.85, 1.15, 1.15),
    euler_xyz=(0.0, 0.8, 0.2),
)
join_objects_as_piece([hfq_ring, mrna_thread], "Piece_Deg_Hfq_sRNA_Target", "#E63946")

for tmp in [mol_2c0b.object, mol_1e3p.object, mol_1hv8.object, mol_1e9i.object, mol_1kq2.object]:
    if tmp and tmp.name in bpy.data.objects:
        bpy.data.objects.remove(tmp, do_unlink=True)

export_roadmap_glb("rna_degradosome_5m3p.glb", blend_filename="rna_degradosome_5m3p.blend")
