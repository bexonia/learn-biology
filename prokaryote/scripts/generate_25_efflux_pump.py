"""
generate_25_efflux_pump.py

Authentic Macromolecular Synthesis of Element 25:
AcrAB-TolC Multidrug Resistance RND Tripartite Efflux Pump (PDB: 5V5S, 1EK9, 4DX5)
using Molecular Nodes in Blender 5.2.

Exact piece names from roadmapScenariosConfig.ts (glb: efflux_5v5s.glb):
1. Piece_5V5S_TolC_ExitDuct (#3A86FF) — Trimeric TolC 14-nm alpha-helical tunnel & OM beta-barrel duct (PDB: 1EK9)
2. Piece_5V5S_Outer_Membrane (#0077B6) — Horizontal outer membrane phospholipid bilayer at top (Y = +2.15)
3. Piece_5V5S_AcrA_Collar (#F77F00) — Hexameric AcrA periplasmic membrane-fusion adaptor collar (PDB: 5V5S chains D-I)
4. Piece_5V5S_AcrB_Loose (#00F5D4) — AcrB Protomer 1 in Loose (Access) state on left (PDB: 4DX5 chain A)
5. Piece_5V5S_AcrB_Tight (#FFB703) — AcrB Protomer 2 in Tight (Binding) state in front-center + bound drug (PDB: 4DX5 chain B)
6. Piece_5V5S_AcrB_Open (#9D4EDD) — AcrB Protomer 3 in Open (Extrusion) state on right (PDB: 4DX5 chain C)
7. Piece_5V5S_Inner_Membrane (#06D6A0) — Horizontal inner membrane phospholipid bilayer at bottom (Y = -1.65)
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

print("[*] Fetching 4DX5 (AcrB trimer + bound drug), 1EK9 (TolC trimer channel), 5V5S (AcrAB-TolC pump)...")
mol_4dx5 = mn.entities.Molecule.fetch("4DX5")
u_4dx5 = mol_4dx5.universe

mol_1ek9 = mn.entities.Molecule.fetch("1EK9")
u_1ek9 = mol_1ek9.universe

mol_5v5s = mn.entities.Molecule.fetch("5V5S")
u_5v5s = mol_5v5s.universe

# 1. Piece_5V5S_TolC_ExitDuct (#3A86FF — Trimeric TolC 14-nm alpha-helical tunnel & outer membrane beta-barrel duct)
build_mn_piece(
    u_1ek9,
    "Piece_5V5S_TolC_ExitDuct",
    "protein",
    style="cartoon",
    color_hex="#3A86FF",
    decimate=0.45,
    center_three=(0.0, 2.05, 0.0),
    spans_three=(2.45, 2.65, 2.45),
)

# 2. Piece_5V5S_Outer_Membrane (#0077B6 — Horizontal outer membrane phospholipid bilayer with central TolC pore)
build_phospholipid_bilayer_piece(
    "Piece_5V5S_Outer_Membrane",
    center_three=(0.0, 2.15, 0.0),
    span_x=8.2,
    thickness_y=1.15,
    span_z=3.4,
    color_hex="#0077B6",
    nx=16,
    nz=7,
    hole_xz_radii=[(0.0, 0.0, 1.15)],
)

# 3. Piece_5V5S_AcrA_Collar (#F77F00 — Hexameric AcrA periplasmic adaptor collar linking AcrB to TolC)
acra_sel = "chainID D E F G H I and protein"
if len(u_5v5s.select_atoms(acra_sel)) == 0:
    acra_sel = "protein"
build_mn_piece(
    u_5v5s,
    "Piece_5V5S_AcrA_Collar",
    acra_sel,
    style="cartoon",
    color_hex="#F77F00",
    decimate=0.32,
    center_three=(0.0, 0.25, 0.0),
    spans_three=(3.05, 1.95, 2.85),
)

# 4. Piece_5V5S_AcrB_Loose (#00F5D4 — Left protomer of AcrB trimer in Loose/Access state)
build_mn_piece(
    u_4dx5,
    "Piece_5V5S_AcrB_Loose",
    "chainID A and protein",
    style="surface",
    color_hex="#00F5D4",
    decimate=0.40,
    center_three=(-0.95, -1.45, 0.15),
    spans_three=(1.65, 2.65, 1.85),
)

# 5. Piece_5V5S_AcrB_Tight (#FFB703 — Center protomer of AcrB trimer in Tight/Binding state + bound drug)
acrb_t = build_mn_piece(
    u_4dx5,
    "AcrB_Tight_Protomer",
    "chainID B and protein",
    style="cartoon",
    color_hex="#FFB703",
    decimate=0.45,
    center_three=(0.0, -1.55, 0.45),
    spans_three=(1.65, 2.65, 1.85),
)
drug_sel = "not protein and not water"
if len(u_4dx5.select_atoms(drug_sel)) == 0:
    drug_sel = "resid 1:25"
drug_obj = build_mn_piece(
    u_4dx5,
    "Drug_Bound",
    drug_sel,
    style="ball_and_stick",
    color_hex="#E63946",
    decimate=0.75,
    center_three=(0.0, -1.35, 0.85),
    spans_three=(0.95, 0.85, 0.85),
)
join_objects_as_piece([acrb_t, drug_obj], "Piece_5V5S_AcrB_Tight", "#FFB703")

# 6. Piece_5V5S_AcrB_Open (#9D4EDD — Right protomer of AcrB trimer in Open/Extrusion state)
build_mn_piece(
    u_4dx5,
    "Piece_5V5S_AcrB_Open",
    "chainID C and protein",
    style="surface",
    color_hex="#9D4EDD",
    decimate=0.40,
    center_three=(0.95, -1.45, 0.15),
    spans_three=(1.65, 2.65, 1.85),
)

# 7. Piece_5V5S_Inner_Membrane (#06D6A0 — Horizontal inner membrane phospholipid bilayer with central AcrB pore)
build_phospholipid_bilayer_piece(
    "Piece_5V5S_Inner_Membrane",
    center_three=(0.0, -1.65, 0.0),
    span_x=8.2,
    thickness_y=1.15,
    span_z=3.4,
    color_hex="#06D6A0",
    nx=16,
    nz=7,
    hole_xz_radii=[(0.0, 0.0, 1.45)],
)

for tmp in [mol_4dx5.object, mol_1ek9.object, mol_5v5s.object]:
    if tmp and tmp.name in bpy.data.objects:
        bpy.data.objects.remove(tmp, do_unlink=True)

export_roadmap_glb("efflux_5v5s.glb", blend_filename="efflux_5v5s.blend")
