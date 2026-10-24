"""
generate_16_lysosome_v_atpase_autophagy.py

Discrete Blender 5.2 + Molecular Nodes / RDKit 3D Generator for Eukaryote Scenario 16:
Lysosome, Rotary V-ATPase Proton Pump (pH 4.5) & Autophagosome (LC3) Fusion (PDB: 6WM2 / 7K2V)

Run with:
  & "C:\Program Files\Blender Foundation\Blender 5.2\blender.exe" --background --python generate_16_lysosome_v_atpase_autophagy.py
"""

import os
import sys

SCRIPTS_DIR = os.path.abspath(os.path.join(os.path.dirname(__file__), "..", "..", "scripts"))
if SCRIPTS_DIR not in sys.path:
    sys.path.insert(0, SCRIPTS_DIR)

from build_eukaryote_glbs import build_single_eukaryote_scenario

if __name__ == "__main__":
    build_single_eukaryote_scenario("16")
