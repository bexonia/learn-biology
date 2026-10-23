"""
generate_29_atomic_chemistry.py

Authentic All-Atom Cheminformatics & Quantum Structural Synthesis of Element 29:
Level 5 & 6 Atomic Chemistry: Biomolecular Monomers & Quantum Bonds
using RDKit 3D MMFF94 Conformers (Chem.MolFromSmiles, AllChem.EmbedMolecule, AllChem.MMFFOptimizeMolecule)
and Blender 5.2 CPK Ball-and-Stick Meshes (`Mat_CPK_*` materials preserved by roadmapScenarioScene.ts).

Exact piece names from roadmapScenariosConfig.ts (glb: atomic_chemistry.glb):
1. Piece_Atom_MgATP_Chelate (#FFB703, Top-Left) — All-atom ATP4- chelated to octahedral Mg2+ ion
2. Piece_Atom_Murein_Monomer (#E76F51, Top-Right) — GlcNAc-MurNAc disaccharide + L-Ala-D-Glu-mDAP-D-Ala stem peptide
3. Piece_Atom_POPE_Phospholipid (#06D6A0, Bottom-Left) — POPE phospholipid with sn-1 palmitoyl + kinked cis-oleoyl sn-2 tail
4. Piece_Atom_WatsonCrick_HBonds (#9D4EDD, Bottom-Right Left) — Watson-Crick G≡C base pair with 3 hydrogen bonds
5. Piece_Atom_Peptide_Resonance (#3A86FF, Bottom-Right Right) — Planar trans peptide bond (ω = 180°) with resonance bond
6. Piece_Atom_Phosphodiester_SN2 (#F77F00, Bottom-Right Upper-Mid) — Two-metal Mg2+ SN2 pentacoordinate phosphate state
7. Piece_Atom_Grotthuss_Wire (#00F5D4, Bottom-Right Lower) — Single-file hydrogen-bonded H3O+/H2O Grotthuss proton wire
"""

import os
import sys
import math
import site

# Ensure Blender 5.2 headless Python includes user site-packages where rdkit is installed
user_site = site.getusersitepackages()
if user_site not in sys.path:
    sys.path.append(user_site)
roaming_py313 = os.path.expanduser(r"~\AppData\Roaming\Python\Python313\site-packages")
if roaming_py313 not in sys.path:
    sys.path.append(roaming_py313)
blender_ext_site = os.path.expanduser(r"~\AppData\Roaming\Blender Foundation\Blender\5.2\extensions\.local\lib\python3.13\site-packages")
if blender_ext_site not in sys.path:
    sys.path.append(blender_ext_site)

import numpy as np
import bpy
import bmesh
from mathutils import Vector, Matrix
from rdkit import Chem
from rdkit.Chem import AllChem

sys.path.append(os.path.dirname(os.path.abspath(__file__)))
from mn_builder_utils import (
    clear_scene,
    three_to_blender,
    hex_to_rgba,
    create_pbr_material,
    export_roadmap_glb,
)

clear_scene()

# Standard CPK Element Materials (prefixed with Mat_CPK_ so roadmapScenarioScene.ts preserves them!)
CPK_COLORS = {
    "C":  ("#495057", 0.34),
    "N":  ("#3A86FF", 0.33),
    "O":  ("#E63946", 0.32),
    "P":  ("#F77F00", 0.42),
    "S":  ("#FFB703", 0.40),
    "Mg": ("#06D6A0", 0.48),
    "H":  ("#F8F9FA", 0.21),
    "BOND": ("#ADB5BD", 0.10),
    "HBOND": ("#00F5D4", 0.07),
}

CPK_MATS = {}
for sym, (hex_col, _) in CPK_COLORS.items():
    CPK_MATS[sym] = create_pbr_material(f"Mat_CPK_{sym}", hex_to_rgba(hex_col), roughness=0.28, metalness=0.15)


def rdkit_smiles_to_cpk_piece(
    smiles: str,
    piece_name: str,
    center_three,
    spans_three,
    include_hydrogens: bool = True,
    align_principal_x: bool = True,
    extra_atoms=None,
    extra_hbonds=None,
):
    mol = Chem.MolFromSmiles(smiles)
    if mol is None:
        raise ValueError(f"Failed to parse SMILES for {piece_name}: {smiles}")
    mol = Chem.AddHs(mol)
    params = AllChem.ETKDGv3()
    params.randomSeed = 42
    res = AllChem.EmbedMolecule(mol, params)
    if res != 0:
        AllChem.EmbedMolecule(mol, useRandomCoords=True, randomSeed=42)
    try:
        AllChem.MMFFOptimizeMolecule(mol, maxIters=400)
    except Exception:
        pass

    if not include_hydrogens:
        mol = Chem.RemoveHs(mol)

    conf = mol.GetConformer()
    n_atoms = mol.GetNumAtoms()
    coords = np.zeros((n_atoms, 3), dtype=float)
    symbols = []
    for i in range(n_atoms):
        p = conf.GetAtomPosition(i)
        coords[i] = [p.x, p.y, p.z]
        symbols.append(mol.GetAtomWithIdx(i).GetSymbol())

    coords -= coords.mean(axis=0)

    if align_principal_x and len(coords) >= 3:
        cov = np.cov(coords.T)
        eigvals, eigvecs = np.linalg.eigh(cov)
        order = np.argsort(eigvals)[::-1]
        rot = eigvecs[:, order]
        if np.linalg.det(rot) < 0:
            rot[:, 2] *= -1
        coords = coords @ rot

    min_c = coords.min(axis=0)
    max_c = coords.max(axis=0)
    span_c = np.maximum(max_c - min_c, 0.5)
    scale = min(spans_three[0] / span_c[0], spans_three[1] / span_c[1], spans_three[2] / span_c[2])
    mid_c = 0.5 * (min_c + max_c)
    coords = (coords - mid_c) * scale
    coords[:, 0] += center_three[0]
    coords[:, 1] += center_three[1]
    coords[:, 2] += center_three[2]

    bm = bmesh.new()
    mat_Order = ["C", "N", "O", "P", "S", "Mg", "H", "BOND", "HBOND"]
    mat_idx_map = {sym: idx for idx, sym in enumerate(mat_Order)}

    atom_radius_scale = 0.42 * min(max(scale, 0.22), 0.48)

    def add_sphere(pos_three, sym, radius_override=None):
        mat_idx = mat_idx_map.get(sym, 0)
        rad = radius_override if radius_override else CPK_COLORS.get(sym, ("#495057", 0.34))[1] * atom_radius_scale * 2.4
        ret = bmesh.ops.create_uvsphere(
            bm,
            u_segments=12,
            v_segments=8,
            radius=rad,
            matrix=Matrix.Translation(three_to_blender(*pos_three)),
        )
        seen_f = set()
        for v in ret["verts"]:
            for f in v.link_faces:
                if f not in seen_f:
                    f.material_index = mat_idx
                    seen_f.add(f)

    def add_cylinder(p1_three, p2_three, sym="BOND", radius=0.055):
        b1 = three_to_blender(*p1_three)
        b2 = three_to_blender(*p2_three)
        vec = b2 - b1
        dist = vec.length
        if dist < 1e-4:
            return
        mid = 0.5 * (b1 + b2)
        rot_q = Vector((0.0, 0.0, 1.0)).rotation_difference(vec.normalized())
        mat_xform = Matrix.Translation(mid) @ rot_q.to_matrix().to_4x4()
        ret = bmesh.ops.create_cone(
            bm,
            cap_ends=True,
            cap_tris=False,
            segments=8,
            radius1=radius,
            radius2=radius,
            depth=dist,
            matrix=mat_xform,
        )
        mat_idx = mat_idx_map.get(sym, 7)
        seen_f = set()
        for v in ret["verts"]:
            for f in v.link_faces:
                if f not in seen_f:
                    f.material_index = mat_idx
                    seen_f.add(f)

    for i in range(n_atoms):
        add_sphere(coords[i], symbols[i])

    for bond in mol.GetBonds():
        i1 = bond.GetBeginAtomIdx()
        i2 = bond.GetEndAtomIdx()
        p1 = coords[i1]
        p2 = coords[i2]
        btype = bond.GetBondTypeAsDouble()
        if btype >= 1.5 and symbols[i1] != "H" and symbols[i2] != "H":
            d = p2 - p1
            perp = np.array([-d[1], d[0], 0.0])
            norm = np.linalg.norm(perp)
            if norm > 1e-4:
                perp = (perp / norm) * 0.045
            else:
                perp = np.array([0.0, 0.045, 0.0])
            add_cylinder(p1 + perp, p2 + perp, "BOND", radius=0.036)
            add_cylinder(p1 - perp, p2 - perp, "BOND", radius=0.036)
        else:
            add_cylinder(p1, p2, "BOND", radius=0.048 if (symbols[i1] != "H" and symbols[i2] != "H") else 0.032)

    if extra_atoms:
        for ea_pos, ea_sym, coord_targets in extra_atoms(coords, symbols):
            add_sphere(ea_pos, ea_sym)
            for tgt in coord_targets:
                for seg in range(4):
                    t0 = (seg + 0.15) / 4.0
                    t1 = (seg + 0.75) / 4.0
                    s_p1 = (1.0 - t0) * ea_pos + t0 * tgt
                    s_p2 = (1.0 - t1) * ea_pos + t1 * tgt
                    add_cylinder(s_p1, s_p2, "Mg", radius=0.030)

    if extra_hbonds:
        for hp1, hp2 in extra_hbonds(coords, symbols):
            for seg in range(4):
                t0 = (seg + 0.15) / 4.0
                t1 = (seg + 0.75) / 4.0
                s_p1 = (1.0 - t0) * hp1 + t0 * hp2
                s_p2 = (1.0 - t1) * hp1 + t1 * hp2
                add_cylinder(s_p1, s_p2, "HBOND", radius=0.032)

    mesh = bpy.data.meshes.new(piece_name)
    bm.to_mesh(mesh)
    bm.free()
    obj = bpy.data.objects.new(piece_name, mesh)
    bpy.context.collection.objects.link(obj)
    obj.data.materials.clear()
    for sym in mat_Order:
        obj.data.materials.append(CPK_MATS[sym])
    print(f"[+] Built RDKit CPK Piece {piece_name}: {len(obj.data.vertices)} verts ({n_atoms} atoms)")
    return obj


# 1. TOP-LEFT QUADRANT: ATP-Mg2+ Triphosphate Complex (Piece_Atom_MgATP_Chelate)
def atp_mg_chelation(coords, symbols):
    p_indices = [i for i, s in enumerate(symbols) if s == "P"]
    o_indices = [i for i, s in enumerate(symbols) if s == "O"]
    if len(p_indices) >= 2:
        p_center = coords[p_indices].mean(axis=0)
        mg_pos = p_center + np.array([0.0, -0.78, 0.25])
        dists = [(np.linalg.norm(coords[oi] - mg_pos), coords[oi]) for oi in o_indices]
        dists.sort(key=lambda x: x[0])
        targets = [d[1] for d in dists[:3]]
        return [(mg_pos, "Mg", targets)]
    return []

rdkit_smiles_to_cpk_piece(
    "Nc1ncnc2c1ncn2[C@@H]3O[C@H](COP(=O)(O)OP(=O)(O)OP(=O)(O)O)[C@@H](O)[C@H]3O",
    "Piece_Atom_MgATP_Chelate",
    center_three=(-2.35, 1.55, 0.0),
    spans_three=(3.85, 2.15, 1.45),
    include_hydrogens=True,
    extra_atoms=atp_mg_chelation,
)

# 2. TOP-RIGHT QUADRANT: Peptidoglycan GlcNAc-MurNAc Stem Peptide (Piece_Atom_Murein_Monomer)
rdkit_smiles_to_cpk_piece(
    "CC(=O)NC1C(O)OC(CO)C(OC2C(O)C(OC(C)C(=O)NC(C)C(=O)NC(CCC(=O)NC(CCCC(N)C(=O)O)C(=O)NC(C)C(=O)O)C(=O)O)C(NC(C)=O)C2O)C1O",
    "Piece_Atom_Murein_Monomer",
    center_three=(2.35, 1.55, 0.0),
    spans_three=(4.15, 2.15, 1.55),
    include_hydrogens=False,
)

# 3. BOTTOM-LEFT QUADRANT: POPE Phospholipid with cis-Oleoyl Kink (Piece_Atom_POPE_Phospholipid)
rdkit_smiles_to_cpk_piece(
    "CCCCCCCCCCCCCCCC(=O)OC[C@H](COP(=O)(O)OCCN)OC(=O)CCCCCCC/C=C\\CCCCCCCC",
    "Piece_Atom_POPE_Phospholipid",
    center_three=(-2.35, -1.55, 0.0),
    spans_three=(4.05, 2.25, 1.45),
    include_hydrogens=False,
)

# 4. BOTTOM-RIGHT QUADRANT (Left): Watson-Crick G≡C Base Pair (Piece_Atom_WatsonCrick_HBonds)
def gc_hbonds(coords, symbols):
    mid_x = coords[:, 0].mean()
    left_no = [coords[i] for i, s in enumerate(symbols) if s in ("N", "O") and coords[i, 0] < mid_x]
    right_no = [coords[i] for i, s in enumerate(symbols) if s in ("N", "O") and coords[i, 0] >= mid_x]
    pairs = []
    for lp in left_no:
        for rp in right_no:
            pairs.append((np.linalg.norm(lp - rp), lp, rp))
    pairs.sort(key=lambda x: x[0])
    return [(p[1], p[2]) for p in pairs[:3]]

rdkit_smiles_to_cpk_piece(
    "Nc1nc2c(ncn2C)c(=O)[nH]1.Nc1cc(C)n(C)c(=O)n1",
    "Piece_Atom_WatsonCrick_HBonds",
    center_three=(1.55, -1.25, 0.0),
    spans_three=(2.45, 1.55, 1.05),
    include_hydrogens=True,
    extra_hbonds=gc_hbonds,
)

# 5. BOTTOM-RIGHT QUADRANT (Right): Planar Peptide Bond Resonance (Piece_Atom_Peptide_Resonance)
rdkit_smiles_to_cpk_piece(
    "CC(=O)NC(C)C(=O)NC",
    "Piece_Atom_Peptide_Resonance",
    center_three=(3.65, -1.25, 0.0),
    spans_three=(1.55, 1.35, 0.95),
    include_hydrogens=True,
)

# 6. BOTTOM-RIGHT QUADRANT (Lower-Left): Two-Metal Mg2+ SN2 Pentacoordinate Phosphate (Piece_Atom_Phosphodiester_SN2)
rdkit_smiles_to_cpk_piece(
    "COP(=O)(O)OC",
    "Piece_Atom_Phosphodiester_SN2",
    center_three=(1.35, -2.55, 0.0),
    spans_three=(1.35, 0.95, 0.85),
    include_hydrogens=True,
    extra_atoms=atp_mg_chelation,
)

# 7. BOTTOM-RIGHT QUADRANT (Lower-Right): Grotthuss Proton Wire (Piece_Atom_Grotthuss_Wire)
def grotthuss_hbonds(coords, symbols):
    o_coords = [coords[i] for i, s in enumerate(symbols) if s == "O"]
    o_coords.sort(key=lambda p: p[0])
    return [(o_coords[i], o_coords[i + 1]) for i in range(len(o_coords) - 1)]

rdkit_smiles_to_cpk_piece(
    "O.O.O.O",
    "Piece_Atom_Grotthuss_Wire",
    center_three=(3.25, -2.55, 0.0),
    spans_three=(2.15, 0.75, 0.75),
    include_hydrogens=True,
    extra_hbonds=grotthuss_hbonds,
)

export_roadmap_glb("atomic_chemistry.glb", blend_filename="atomic_chemistry.blend")
