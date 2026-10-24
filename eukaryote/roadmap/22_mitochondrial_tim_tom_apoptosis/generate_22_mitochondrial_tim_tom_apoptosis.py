"""
generate_22_mitochondrial_tim_tom_apoptosis.py

Discrete Blender 5.2 + Molecular Nodes / RDKit 3D Generator for Eukaryote Scenario 22:
TOM/TIM23 Protein Import, Drp1 Fission Ring & BAX/BAK–Apoptosome Wheel (PDB: 7CP9 / 3J2T)

Run with:
  & "C:\Program Files\Blender Foundation\Blender 5.2\blender.exe" --background --python generate_22_mitochondrial_tim_tom_apoptosis.py
"""

import os
import sys

SCRIPTS_DIR = os.path.abspath(os.path.join(os.path.dirname(__file__), "..", "..", "scripts"))
if SCRIPTS_DIR not in sys.path:
    sys.path.insert(0, SCRIPTS_DIR)

from build_eukaryote_glbs import build_single_eukaryote_scenario

if __name__ == "__main__":
    build_single_eukaryote_scenario("22")
