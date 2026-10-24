"""
generate_33_risc_argonaute_dicer_rna_silencing.py

Discrete Blender 5.2 + Molecular Nodes / RDKit 3D Generator for Eukaryote Scenario 33:
RNA Interference (RNAi) & Post-Transcriptional Silencing: Dicer Molecular Ruler, Argonaute-2 (RISC) & GW182 (PDB: 4W5N / 5ZAL)

Run with:
  & "C:\Program Files\Blender Foundation\Blender 5.2\blender.exe" --background --python generate_33_risc_argonaute_dicer_rna_silencing.py
"""

import os
import sys

SCRIPTS_DIR = os.path.abspath(os.path.join(os.path.dirname(__file__), "..", "..", "scripts"))
if SCRIPTS_DIR not in sys.path:
    sys.path.insert(0, SCRIPTS_DIR)

from build_eukaryote_glbs import build_single_eukaryote_scenario

if __name__ == "__main__":
    build_single_eukaryote_scenario("33")
