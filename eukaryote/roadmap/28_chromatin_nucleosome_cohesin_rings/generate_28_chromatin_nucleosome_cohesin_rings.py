"""
generate_28_chromatin_nucleosome_cohesin_rings.py

Discrete Blender 5.2 + Molecular Nodes / RDKit 3D Generator for Eukaryote Scenario 28:
Chromatin Architecture: Nucleosome Histone Octamer, Epigenetic Tails, CTCF & Cohesin/Condensin Loop-Extrusion Rings (PDB: 1AOI / 6WG3)

Run with:
  & "C:\Program Files\Blender Foundation\Blender 5.2\blender.exe" --background --python generate_28_chromatin_nucleosome_cohesin_rings.py
"""

import os
import sys

SCRIPTS_DIR = os.path.abspath(os.path.join(os.path.dirname(__file__), "..", "..", "scripts"))
if SCRIPTS_DIR not in sys.path:
    sys.path.insert(0, SCRIPTS_DIR)

from build_eukaryote_glbs import build_single_eukaryote_scenario

if __name__ == "__main__":
    build_single_eukaryote_scenario("28")
