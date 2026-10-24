"""
generate_27_nuclear_pore_complex_npc.py

Discrete Blender 5.2 + Molecular Nodes / RDKit 3D Generator for Eukaryote Scenario 27:
The Nuclear Pore Complex (NPC): 120 MDa Octagonal Gate, FG-Repeat Hydrogel & RanGTP/RanGDP Transport Cycle (PDB: 7R5K / 1IBR)

Run with:
  & "C:\Program Files\Blender Foundation\Blender 5.2\blender.exe" --background --python generate_27_nuclear_pore_complex_npc.py
"""

import os
import sys

SCRIPTS_DIR = os.path.abspath(os.path.join(os.path.dirname(__file__), "..", "..", "scripts"))
if SCRIPTS_DIR not in sys.path:
    sys.path.insert(0, SCRIPTS_DIR)

from build_eukaryote_glbs import build_single_eukaryote_scenario

if __name__ == "__main__":
    build_single_eukaryote_scenario("27")
