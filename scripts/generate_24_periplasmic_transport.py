"""
generate_24_periplasmic_transport.py

Authentic Macromolecular Synthesis of Element 24:
Periplasmic Chaperone Handover (SurA) & ABC Transporter (MalFGK2-MalE) (PDB: 1M5Y, 1OMP, 2R6G, 2OMF)
using Molecular Nodes in Blender 5.2.

Exact piece names from roadmapScenariosConfig.ts (glb: periplasmic_transport.glb):
1. Piece_Peri_SurA_CoreCradle (#3A86FF) — SurA N+C core chaperone cradle module in periplasm (PDB: 1M5Y)
2. Piece_Peri_SurA_PPIase_P1P2 (#00F5D4) — SurA PPIase-1 & PPIase-2 peptidyl-prolyl isomerase domains (PDB: 1M5Y)
3. Piece_Peri_Unfolded_OMP_Cargo (#9D4EDD) — Unfolded OMP client polypeptide + top outer-membrane BAM target (PDB: 2OMF)
4. Piece_Peri_MalE_VenusFlytrap (#FFB703) — Periplasmic MalE Venus-flytrap maltose-binding protein (PDB: 1OMP)
5. Piece_Peri_Maltose_Ligand (#E63946) — Bound crimson maltose disaccharide inside the MalE cleft (PDB: 2R6G / 1OMP)
6. Piece_Peri_MalFG_TM_Channel (#2A9D8F) — Transmembrane MalF-MalG permease heterodimer + OM/IM phospholipid bilayers (PDB: 2R6G)
7. Piece_Peri_MalK2_ATPase_Dimer (#F77F00) — Cytoplasmic MalK2 nucleotide-binding ATPase dimer at bottom (PDB: 2R6G chains A/B)
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

print("[*] Fetching 1M5Y (SurA chaperone), 1OMP (MalE SBP), 2R6G (MalFGK2-MalE ABC transporter), 2OMF (OMP barrel)...")
mol_1m5y = mn.entities.Molecule.fetch("1M5Y")
u_1m5y = mol_1m5y.universe

mol_1omp = mn.entities.Molecule.fetch("1OMP")
u_1omp = mol_1omp.universe

mol_2r6g = mn.entities.Molecule.fetch("2R6G")
u_2r6g = mol_2r6g.universe

mol_2omf = mn.entities.Molecule.fetch("2OMF")
u_2omf = mol_2omf.universe

# 1. Piece_Peri_SurA_CoreCradle (#3A86FF — SurA core N+C chaperone module on left periplasm)
build_mn_piece(
    u_1m5y,
    "Piece_Peri_SurA_CoreCradle",
    "resid 1:170 or resid 385:428",
    style="cartoon",
    color_hex="#3A86FF",
    decimate=0.60,
    center_three=(-2.35, -0.55, 0.1),
    spans_three=(2.45, 2.05, 1.95),
)

# 2. Piece_Peri_SurA_PPIase_P1P2 (#00F5D4 — SurA PPIase-1 & PPIase-2 domains flanking the cradle)
build_mn_piece(
    u_1m5y,
    "Piece_Peri_SurA_PPIase_P1P2",
    "resid 171:384",
    style="cartoon",
    color_hex="#00F5D4",
    decimate=0.60,
    center_three=(-2.35, 0.65, 0.15),
    spans_three=(2.65, 1.85, 1.85),
)

# 3. Piece_Peri_Unfolded_OMP_Cargo (#9D4EDD — Unfolded OMP client ribbon + outer-membrane beta-barrel insertase at top-left)
omp_ribbon = build_mn_piece(
    u_2omf,
    "Unfolded_OMP_Ribbon",
    "resid 1:110 and protein",
    style="ribbon",
    color_hex="#9D4EDD",
    decimate=0.70,
    center_three=(-2.35, 1.65, 0.2),
    spans_three=(1.65, 1.85, 1.35),
)
bam_barrel = build_mn_piece(
    u_2omf,
    "BAM_OMP_Target",
    "protein",
    style="cartoon",
    color_hex="#9D4EDD",
    decimate=0.50,
    center_three=(-2.35, 2.85, 0.0),
    spans_three=(2.15, 1.45, 2.05),
)
join_objects_as_piece([omp_ribbon, bam_barrel], "Piece_Peri_Unfolded_OMP_Cargo", "#9D4EDD")

# 4. Piece_Peri_MalE_VenusFlytrap (#FFB703 — Bilobed MalE Venus-flytrap binding protein on right periplasm)
build_mn_piece(
    u_1omp,
    "Piece_Peri_MalE_VenusFlytrap",
    "protein",
    style="cartoon",
    color_hex="#FFB703",
    decimate=0.55,
    center_three=(2.25, 0.75, 0.1),
    spans_three=(2.25, 1.95, 1.95),
)

# 5. Piece_Peri_Maltose_Ligand (#E63946 — Bound maltose disaccharide inside the MalE binding cleft)
mal_sel = "not protein and not water"
if len(u_2r6g.select_atoms(mal_sel)) == 0:
    mal_sel = "resid 10:25"
build_mn_piece(
    u_2r6g,
    "Piece_Peri_Maltose_Ligand",
    mal_sel,
    style="ball_and_stick",
    color_hex="#E63946",
    decimate=0.80,
    center_three=(2.25, 0.55, 0.45),
    spans_three=(1.15, 0.85, 0.95),
)

# 6. Piece_Peri_MalFG_TM_Channel (#2A9D8F — Transmembrane MalF-MalG permease helices + OM & IM phospholipid bilayers)
om_bilayer = build_phospholipid_bilayer_piece(
    "Peri_OM_Bilayer",
    center_three=(0.0, 2.85, 0.0),
    span_x=8.4,
    thickness_y=0.95,
    span_z=3.2,
    color_hex="#0077B6",
    nx=16,
    nz=6,
    hole_xz_radii=[(-2.35, 0.0, 0.95)],
)
im_bilayer = build_phospholipid_bilayer_piece(
    "Peri_IM_Bilayer",
    center_three=(0.0, -1.75, 0.0),
    span_x=8.4,
    thickness_y=0.95,
    span_z=3.2,
    color_hex="#06D6A0",
    nx=16,
    nz=6,
    hole_xz_radii=[(2.25, 0.0, 1.05)],
)
malfg_core = build_mn_piece(
    u_2r6g,
    "MalFG_TM_Core",
    "chainID F G and protein",
    style="cartoon",
    color_hex="#2A9D8F",
    decimate=0.45,
    center_three=(2.25, -1.55, 0.0),
    spans_three=(2.35, 2.25, 2.15),
)
sec_dock = build_mn_piece(
    u_2r6g,
    "SecY_Bottom_Left",
    "chainID F and protein",
    style="cartoon",
    color_hex="#2A9D8F",
    decimate=0.55,
    center_three=(-2.35, -1.75, 0.0),
    spans_three=(1.85, 1.45, 1.75),
)
join_objects_as_piece([om_bilayer, im_bilayer, malfg_core, sec_dock], "Piece_Peri_MalFG_TM_Channel", "#2A9D8F")

# 7. Piece_Peri_MalK2_ATPase_Dimer (#F77F00 — Cytoplasmic MalK2 nucleotide-binding ATPase dimer below the inner membrane)
build_mn_piece(
    u_2r6g,
    "Piece_Peri_MalK2_ATPase_Dimer",
    "chainID A B and protein",
    style="cartoon",
    color_hex="#F77F00",
    decimate=0.50,
    center_three=(2.25, -3.15, 0.0),
    spans_three=(2.35, 1.75, 2.05),
)

for tmp in [mol_1m5y.object, mol_1omp.object, mol_2r6g.object, mol_2omf.object]:
    if tmp and tmp.name in bpy.data.objects:
        bpy.data.objects.remove(tmp, do_unlink=True)

export_roadmap_glb("periplasmic_transport.glb", blend_filename="periplasmic_transport.blend")
