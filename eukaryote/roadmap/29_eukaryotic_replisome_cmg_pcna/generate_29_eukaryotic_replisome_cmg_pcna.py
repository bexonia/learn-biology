"""
generate_29_eukaryotic_replisome_cmg_pcna.py

Discrete Blender 5.2 + Molecular Nodes / RDKit 3D Generator for Eukaryote Scenario 29:
The Eukaryotic Replisome: CMG Helicase (Cdc45–MCM2-7–GINS), Pol ε/δ/α, RFC & homotrimeric PCNA Sliding Clamp Rings (PDB: 6UOM / 1PLQ)

Run with:
  & "C:\Program Files\Blender Foundation\Blender 5.2\blender.exe" --background --python generate_29_eukaryotic_replisome_cmg_pcna.py
"""

import os
import sys

SCRIPTS_DIR = os.path.abspath(os.path.join(os.path.dirname(__file__), "..", "..", "scripts"))
if SCRIPTS_DIR not in sys.path:
    sys.path.insert(0, SCRIPTS_DIR)

from build_eukaryote_glbs import build_single_eukaryote_scenario

if __name__ == "__main__":
    build_single_eukaryote_scenario("29")
