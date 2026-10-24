"""
generate_25_calvin_cycle_rubisco_16mer.py

Discrete Blender 5.2 + Molecular Nodes / RDKit 3D Generator for Eukaryote Scenario 25:
The Calvin–Benson Cycle & RuBisCO Hexadecamer (L₈S₈ Carbon Fixation vs. Photorespiration) (PDB: 1RBL / 3ZUH)

Run with:
  & "C:\Program Files\Blender Foundation\Blender 5.2\blender.exe" --background --python generate_25_calvin_cycle_rubisco_16mer.py
"""

import os
import sys

SCRIPTS_DIR = os.path.abspath(os.path.join(os.path.dirname(__file__), "..", "..", "scripts"))
if SCRIPTS_DIR not in sys.path:
    sys.path.insert(0, SCRIPTS_DIR)

from build_eukaryote_glbs import build_single_eukaryote_scenario

if __name__ == "__main__":
    build_single_eukaryote_scenario("25")
