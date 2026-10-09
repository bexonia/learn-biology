---
name: molecular-nodes
description: >
  Create, style, animate, and export 3D molecular structures, biological assemblies,
  and whole-cell nanomachinery in Blender using Molecular Nodes (v4/v5+) and nodebpy.
  Use when asked to import or visualize PDB/mmCIF structures, create cartoon/ribbon/surface/stick
  representations, apply chain/residue/pLDDT color palettes, construct Geometry Node trees,
  animate macromolecules or trajectories, or export molecular models to WebGL/Vulkan GLB.
---

# Molecular Nodes for Blender & Antigravity

This skill provides complete reference, API patterns, and recipes for programmatically creating, styling, animating, and exporting macromolecular 3D models in Blender using **Molecular Nodes** (`bl_ext.blender_org.molecularnodes` / `molecularnodes`) and **nodebpy**.

---

## 1. Architectural Overview & Execution Modes

Molecular Nodes transforms structural biology data (PDB, mmCIF, BCIF, trajectories) into Blender Geometry Node geometry, storing atomic attributes (chain, residue, B-factor, atom name) directly on mesh points.

Operations are executed via two modes:

| Mode | Trigger / Transport | Best For |
| :--- | :--- | :--- |
| **Live GUI Bridge** | `blender_python_exec` via MCP (port `9876`) | Interactive pair-modeling with the user looking at Blender 3D Viewport. |
| **Headless CLI** | `blender.exe --background --python <script.py>` | Bulk generation, CI/CD, baking high-poly meshes, and headless GLB exports. |

### Module Import Pattern
In Blender 4.2+ and 5.x extension ecosystem:
```python
try:
    import bl_ext.blender_org.molecularnodes as mn
except ImportError:
    import molecularnodes as mn

import nodebpy
from bl_ext.blender_org.molecularnodes.nodes import geometry as mg
from bl_ext.blender_org.molecularnodes.nodes import shader as ms
```

---

## 2. Core Python API Reference

### 2.1 Fetching & Loading Structures

#### From Online Databases (RCSB PDB, AlphaFold DB, PubChem)
```python
# Fetch via RCSB accession code (binary CIF format is fastest and most compact)
mol = mn.Molecule.fetch(
    code="6YKM",              # PDB ID or AlphaFold ID
    format=".bcif",           # '.bcif', '.cif', or '.pdb'
    database="rcsb"           # 'rcsb' or 'alphafold'
)
```

#### From Local Files
```python
# Load local PDB, mmCIF, GRO, SDF, or PQR
mol = mn.Molecule.from_file(
    file_path="C:/path/to/structure.cif"
)
```

#### Small Molecule & Ligand Generation via RDKit
Both Blender's bundled Python and the workspace `.venv` have `rdkit` installed:
```python
from rdkit import Chem
from rdkit.Chem import AllChem

# 1. Parse SMILES (e.g. Ampicillin, Maltose, ATP, D-Ala-D-Ala)
smiles = "CC1(C(N2C(S1)C(C2=O)NC(=O)C(C3=CC=CC=C3)N)C(=O)O)C" # Ampicillin
mol_rd = Chem.MolFromSmiles(smiles)
mol_rd = Chem.AddHs(mol_rd)

# 2. Compute energy-minimized 3D conformer
AllChem.EmbedMolecule(mol_rd, AllChem.ETKDGv3())
AllChem.MMFFOptimizeMolecule(mol_rd)

# 3. Export to SDF or PDB
sdf_path = "C:/path/to/ligand.sdf"
Chem.MolToMolFile(mol_rd, sdf_path)

# 4. Import directly into Molecular Nodes
ligand_mol = mn.Molecule.from_file(file_path=sdf_path)
ligand_mol.add_style(style="ball_and_stick", color="element")
```

#### Biological Assemblies (Oligomers / Symmetries)
```python
# Instance biological assemblies defined in the CIF header
mol.assemblies()
```

---

### 2.2 Styling with `mol.add_style()`

`mol.add_style()` is the primary method to attach Geometry Node visualization groups.

```python
mol.add_style(
    style="cartoon",          # Style name or callable
    selection="protein",      # MDAnalysis selection string or callable
    color="common",           # Color scheme or RGBA tuple (r, g, b, a)
    material=None,            # Blender material or preset
    assembly=False,           # Instance over biological assembly
    **kwargs                  # Quality, loop_radius, thickness, etc.
)
```

#### Available Styles:
- `"cartoon"`: Protein secondary structure (sheet arrows, cylinders/helices, loops) and nucleic acids (backbone ribbon + base slabs).
- `"ribbon"`: Smooth backbone ribbon trace through alpha carbons / phosphate backbone.
- `"surface"`: Solvent Excluded Surface (SES) or Gaussian surface representation.
- `"spheres"`: Van der Waals (VDW) space-filling sphere representation.
- `"sticks"`: Covalent bonds rendered as cylinders.
- `"ball_and_stick"`: Atoms as spheres with connecting stick bonds.

#### Styling Multiple Subunits / Functional Regions:
```python
# Clear default style if needed or chain multiple styles:
# 1. Flagellar Rotor (FliG subunits - chains A-Z) in cartoon yellow:
mol.add_style(
    style="cartoon",
    selection="chainID A B C D E F G H I J K L M N O P Q R S T U V W X Y Z",
    color=(1.0, 0.82, 0.1, 1.0)
)

# 2. Drive Shaft (FlgB/C/F/G) in cartoon orange:
mol.add_style(
    style="cartoon",
    selection="chainID a b c d",
    color=(1.0, 0.45, 0.0, 1.0)
)

# 3. Active site or Bound Ligand in Ball-and-Stick:
mol.add_style(
    style="ball_and_stick",
    selection="resname ATP or resname MG",
    color="common"
)
```

---

### 2.3 MDAnalysis Selection Grammar Reference

Molecular Nodes uses standard MDAnalysis selection syntax:

| Selection Type | Syntax Example | Description |
| :--- | :--- | :--- |
| **Chain / Segment** | `chainID A` or `segid A B C` | Specific chains or segments |
| **Residue Name** | `resname ATP HEM MG` | Specific amino acids or ligands |
| **Residue Number** | `resid 1:50` or `resid 120 125 150` | Residue index range (1-based) |
| **Atom Name** | `name CA CB` | Alpha carbons, beta carbons |
| **Biochemical Class**| `protein`, `nucleic`, `ligand`, `solvent` | Major polymer categories |
| **Secondary Struct** | `is_helix`, `is_sheet`, `is_loop` | Secondary structure elements |
| **Chemical Elements**| `element C N O P S` | Specific atomic elements |
| **Backbone / Side** | `backbone`, `not backbone` | Main chain vs. side chains |
| **Spatial Distance** | `around 5.0 (resname ATP)` | Within 5.0 Ångströms of ATP |
| **Boolean Logic** | `(protein and chainID A) and not resid 1:20` | Combined logic operators |

---

### 2.4 Color Presets & Custom Palettes

Molecular Nodes provides specialized coloring nodes and presets in `bl_ext.blender_org.molecularnodes.nodes.geometry`:

| Color Method | Python Argument | Description |
| :--- | :--- | :--- |
| **Common / Default** | `color="common"` | IUPAC element colors + random unique color per chain. |
| **pLDDT / B-Factor** | `color="plddt"` | AlphaFold confidence gradient (Very High >90 blue, Confident cyan, Low yellow, Very Low <50 orange). |
| **Element** | `color=lambda: mg.ColorElement()` | CPK element coloring (C gray/cyan, O red, N blue, S yellow, P orange). |
| **Rainbow** | `color=lambda: mg.ColorRainbow()` | N-terminus to C-terminus blue-cyan-green-yellow-red rainbow. |
| **Residue / Polarity**| `color=lambda: mg.ColorResName()` | Acidic (red), Basic (blue), Polar (green), Hydrophobic (gray). |
| **Uniform Custom** | `color=(0.1, 0.7, 0.9, 1.0)` | Exact RGBA float tuple (0.0 to 1.0 range). |

---

### 2.5 Material Presets (`mn.material`)

```python
import bl_ext.blender_org.molecularnodes.material as mn_mat

# Preset materials optimized for molecular visualization:
mat_ao = mn_mat.AmbientOcclusion()          # Clean white AO with contact shadows
mat_flat = mn_mat.Flat()                    # Cell-shaded / illustrative flat style
mat_outline = mn_mat.TransparentOutlineShader() # Stylized outline shader
mat_squishy = mn_mat.Squishy()              # Soft subsurface scattering
mat_glass = mn_mat.Transparent()            # Glass / cryo-EM density transparency

mol.add_style("surface", material=mat_ao)
```

---

## 3. Advanced Node Tree Construction (`nodebpy`)

Molecular Nodes integrates Brady Johnston's `nodebpy` syntax, allowing programmatic Geometry Node graph authoring:

```python
import bl_ext.blender_org.molecularnodes as mn
from bl_ext.blender_org.molecularnodes.nodes import geometry as mg
import nodebpy
from nodebpy.geometry import nodes as gn

mol = mn.Molecule.fetch("1BNA")

# Access the molecule's underlying node tree
with mol.tree as tree:
    # Query geometry attributes
    atoms = tree.inputs.geometry("Atoms")
    
    # Custom cartoon with custom parameters
    cartoon = mg.StyleCartoon(
        Atoms=atoms,
        Selection=mg.IsNucleic(),
        Quality=3
    )
    
    # Custom color offset / lighting
    color_node = mg.ColorElement(Atoms=atoms)
    
    # Output
    tree.outputs.geometry("Geometry", cartoon.o.geometry)
```

---

## 4. Automated Baking & WebGL / Vulkan GLB Export Pipeline

Geometry Nodes dynamically generate procedural geometry at render time. For real-time WebGL engines (Three.js, Vulkan, WebGPU), geometry node instances must be baked into triangle meshes and exported:

```python
import bpy

def bake_and_export_glb(obj, output_glb_path):
    """
    Evaluates Geometry Node modifier stack, converts to a standard mesh,
    preserves materials/vertex colors, and exports an optimized binary GLTF/GLB.
    """
    # 1. Ensure object is selected and active
    bpy.ops.object.select_all(action='DESELECT')
    obj.select_set(True)
    bpy.context.view_layer.objects.active = obj
    
    # 2. Convert Geometry Nodes modifier to Real Polygonal Mesh
    bpy.ops.object.convert(target='MESH')
    
    # 3. Clean up loose vertices or zero-area faces
    bpy.ops.object.mode_set(mode='EDIT')
    bpy.ops.mesh.select_all(action='SELECT')
    bpy.ops.mesh.remove_doubles(threshold=0.001)
    bpy.ops.object.mode_set(mode='OBJECT')
    
    # 4. Export GLB with vertex colors and PBR materials
    bpy.ops.export_scene.gltf(
        filepath=str(output_glb_path),
        export_format='GLB',
        use_selection=True,
        export_apply=True,
        export_attributes=True,         # Exports Color and UV attributes
        export_materials='EXPORT',
        export_colors=True
    )
    print(f"Exported baked GLB to: {output_glb_path}")
```

---

## 5. Whole-Cell Modeling & Nanotechnology

Molecular Nodes supports advanced biological data sources beyond isolated PDB structures:

### 5.1 Cryo-EM Density Maps (`Density`)
```python
# Load MRC/CCP4/MAP cryo-EM volumetric maps
density = mn.entities.Density.from_file(
    file_path="C:/path/to/map.mrc",
    threshold=1.5
)
```

### 5.2 Whole-Cell Packings (`CellPack`)
```python
# Load CellPack whole-cell recipies (e.g. E. coli or Mycoplasma cytoplasm)
cell = mn.entities.CellPack.from_file(
    file_path="C:/path/to/cellpack_model.cpr"
)
```

### 5.3 oxDNA Nanotechnology (`OXDNA`)
```python
# Load DNA origami / DNA nanotechnology simulations
dna_origami = mn.entities.OXDNA.from_file(
    top_file="origami.top",
    traj_file="origami.oxdna"
)
```

### 5.4 MD Simulations & Trajectories
```python
# Stream multi-frame molecular dynamics trajectories
mol = mn.Molecule.from_file("sim.gro")
mol.load_trajectory("sim.xtc")
mol.animate_frames()
```

---

## 6. Common Gotchas & Troubleshooting

1. **`TypeError: Molecule.fetch() got unexpected keyword 'style'`**:
   - In MolecularNodes 4.x/5.x, do NOT pass `style` inside `Molecule.fetch()`.
   - Call `mol = mn.Molecule.fetch("1BNA")` first, then call `mol.add_style("cartoon")`.
2. **`Connection refused` on Port 9876**:
   - The user's Blender GUI instance is either closed or the add-on `blender_mcp_bridge` is disabled.
   - Run via headless CLI (`blender.exe --background --python <script>`) if the GUI is not needed.
3. **Black or Unlit Models in WebGL**:
   - Geometry nodes default shaders often use attributes (`Color`) instead of base color textures. Ensure the material assigns attribute `Color` into the `Base Color` socket of the Principled BSDF node before GLB export.
