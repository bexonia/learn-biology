# 🛠️ Open-Source Structural Biology, Cheminformatics & 3D Toolchain Specification

This specification defines the **trusted open-source organizations, public scientific databases, and open-source software libraries** used to build, validate, and render every prokaryotic structure in [`learn-biology`](file:///c:/Users/devcd/GenProjects/learn-biology).

> **Strict Open-Source & Public-Domain Policy:**  
> All macromolecular coordinates, chemical conformers, volumetric maps, and software libraries used in this repository MUST come from verified, peer-reviewed, open-access scientific organizations (wwPDB/RCSB, EMBL-EBI, NIH/NCBI, RDKit, Blender Foundation, Biotite, OpenJS/Three.js) under permissive open-source or public-domain licenses (`CC0-1.0`, `CC-BY-4.0`, `BSD-3-Clause`, `MIT`, `Apache-2.0`, `GPL-3.0`).

---

## 1. Trusted Open-Source Scientific Data Organizations

### 1.1 Worldwide Protein Data Bank (wwPDB) & RCSB PDB
* **Organization:** RCSB Protein Data Bank (`https://www.rcsb.org`) / Worldwide PDB Consortium (Rutgers, UCSD, EMBL-EBI PDBe, PDBj).
* **License:** **CC0 1.0 Universal (Public Domain)** — 100% free to download, process, remix, and redistribute in 3D applications.
* **What We Fetch:** Experimentally determined X-ray Crystallography, Cryo-Electron Microscopy (Cryo-EM), and NMR atomic structures in `.cif` (mmCIF), `.bcif` (BinaryCIF), and `.pdb` formats.
* **Programmatic Access (Zero-Auth REST APIs):**
  * **Coordinate Download:** `https://files.rcsb.org/download/<PDB_ID>.cif` or `https://models.rcsb.org/<PDB_ID>.bcif`
  * **Biological Assembly Download:** `https://files.rcsb.org/download/<PDB_ID>-assembly1.cif.gz`
  * **Metadata REST API:** `https://data.rcsb.org/rest/v1/core/entry/<PDB_ID>`
  * **Python Clients:** `biotite.database.rcsb` (BSD-3-Clause) and `rcsb-api` (MIT).

### 1.2 AlphaFold Protein Structure Database (EMBL-EBI & Google DeepMind)
* **Organization:** European Molecular Biology Laboratory – European Bioinformatics Institute (`https://alphafold.ebi.ac.uk`).
* **License:** **CC-BY-4.0**.
* **What We Fetch:** Full-length monomeric and domain structures for *Escherichia coli* K-12 (proteome `UP000000625`) when an experimental crystal structure is missing flexible linkers or disordered tails (e.g., RNase E C-terminal scaffold in the RNA Degradosome, or full-length periplasmic disordered linkers).
* **Programmatic Access:**
  * **Coordinate Download:** `https://alphafold.ebi.ac.uk/files/AF-<UNIPROT_ID>-F1-model_v4.cif`
  * **Metadata API:** `https://alphafold.ebi.ac.uk/api/prediction/<UNIPROT_ID>`

### 1.3 Electron Microscopy Data Bank (EMDB — EMBL-EBI)
* **Organization:** EMBL-EBI (`https://www.ebi.ac.uk/emdb`).
* **License:** **CC0 1.0 Public Domain**.
* **What We Fetch:** Sub-tomogram averaged Cryo-Electron Tomography (Cryo-ET) envelopes for massive in-situ prokaryotic complexes (e.g., whole intact Chemosensory arrays, Type IV Pilus basal bodies, Archaeal S-layer lattices, and Carboxysome shells).

### 1.4 NIH / NCBI PubChem & EMBL-EBI ChEMBL (Small Molecules & Ligands)
* **Organizations:**
  * **PubChem:** National Center for Biotechnology Information / National Library of Medicine (`https://pubchem.ncbi.nlm.nih.gov`, Public Domain).
  * **ChEMBL:** EMBL-EBI (`https://www.ebi.ac.uk/chembl`, CC-BY-SA-3.0).
* **What We Fetch:** Validated chemical structures, 3D conformer `.sdf` files, and canonical Isomeric SMILES for cofactors, energetic nucleotides, cell-wall precursors, lipids, and antibiotics:
  * **ATP:** PubChem CID `5957`
  * **GTP:** PubChem CID `135398633`
  * **NADH:** PubChem CID `439153`
  * **FMN (Flavin Mononucleotide):** PubChem CID `643976`
  * **Ubiquinone-8 ($Q_8$):** PubChem CID `5281915`
  * **Ciprofloxacin (Gyrase Inhibitor):** PubChem CID `2764`
  * **Rifampicin (RNAP Inhibitor):** PubChem CID `135398735`
  * **mDAP (*meso*-Diaminopimelic Acid):** PubChem CID `439283`
  * **Dipicolinic Acid (Endospore Core Chelator):** PubChem CID `10367`
* **Programmatic Access (PubChem PUG-REST):**
  * **3D SDF Download:** `https://pubchem.ncbi.nlm.nih.gov/rest/pug/compound/cid/<CID>/SDF?record_type=3d`
  * **2D/SMILES JSON:** `https://pubchem.ncbi.nlm.nih.gov/rest/pug/compound/cid/<CID>/property/IsomericSMILES,MolecularFormula,IUPACName/JSON`

### 1.5 UniProtKB (*E. coli* Reference Proteome `UP000000625`)
* **Organization:** UniProt Consortium (EMBL-EBI, SIB, PIR — `https://www.uniprot.org`, CC-BY-4.0).
* **What We Fetch:** Exact stoichiometry, sequence lengths, transmembrane topological domains, catalytic site residue numbers, and cross-referenced PDB IDs via `https://rest.uniprot.org/uniprotkb/<ACCESSION>.json`.

---

## 2. Open-Source Software Pipeline (Blender 5.2 + Molecular Nodes + RDKit)

### 2.1 Dual Python Environment Configuration
As documented in [`AGENTS.md`](file:///c:/Users/devcd/GenProjects/AGENTS.md), the workspace provides two synchronized Python environments with pre-installed open-source structural biology packages:
1. **Blender 5.2 Embedded Python (3.13):**
   * Path: `"C:\Program Files\Blender Foundation\Blender 5.2\5.2\python\bin\python.exe"`
   * Installed Open-Source Packages: `bl_ext.blender_org.molecularnodes` (GPL-3.0), `biotite` (BSD-3-Clause), `rdkit` (BSD-3-Clause), `MDAnalysis` (GPL-3.0), `numpy`, `scipy`, `requests`.
2. **Workspace CLI Virtual Environment (3.14):**
   * Path: `"c:\Users\devcd\GenProjects\blender-mcp-server\.venv\Scripts\python.exe"`
   * Installed Open-Source Packages: `rdkit`, `biotite`, `rcsb-api`, `requests`, `httpx`, `numpy`, `Pillow`.

To verify both environments at any time:
```powershell
& "c:\Users\devcd\GenProjects\blender-mcp-server\.venv\Scripts\python.exe" c:\Users\devcd\GenProjects\ecoli-vulkan-engine\scripts\verify_cheminformatics_env.py
```

### 2.2 Importing Real PDB Structures in Blender via Molecular Nodes & Biotite
Agents building new `.glb` assets can combine **authentic atomic coordinates from RCSB PDB** (via `molecularnodes` or `biotite.structure.io.pdbx`) with clean **functional subunit partitioning (`Piece_<ID>_<Subunit>`)**:

```python
import bpy
import urllib.request
from pathlib import Path
import biotite.structure.io.pdbx as pdbx
import numpy as np

def fetch_pdb_cif(pdb_id: str, cache_dir: str = "cache/pdb") -> Path:
    """Downloads an experimental mmCIF structure from RCSB PDB (CC0 Public Domain)."""
    out_dir = Path(cache_dir)
    out_dir.mkdir(parents=True, exist_ok=True)
    cif_path = out_dir / f"{pdb_id.upper()}.cif"
    if not cif_path.exists():
        url = f"https://files.rcsb.org/download/{pdb_id.upper()}.cif"
        urllib.request.urlretrieve(url, cif_path)
    return cif_path

def load_chain_centroids_and_ca_trace(cif_path: Path, chain_id: str):
    """Extracts C-alpha backbone coordinates (in nm) for a specific PDB chain using Biotite."""
    cif_file = pdbx.CIFFile.read(str(cif_path))
    atom_array = pdbx.get_structure(cif_file, model=1)
    chain_atoms = atom_array[(atom_array.chain_id == chain_id) & (atom_array.atom_name == "CA")]
    # Convert Angstroms (Å) to Nanometers (nm) for engine scale consistency
    coords_nm = chain_atoms.coord / 10.0
    return coords_nm
```

Alternatively, when running inside Blender with the **Molecular Nodes** extension enabled (`bl_ext.blender_org.molecularnodes`):
```python
import bpy
import molecularnodes as mn

# Enable Molecular Nodes and fetch directly from RCSB PDB in BinaryCIF format
mol = mn.entities.Molecule.fetch("6X9Q", style="surface", del_solvent=True)
```

### 2.3 Generating 3D Small Molecules & Chemical Bonds with RDKit
For Level 5 (Chemical Monomers) and Level 6 (Atomic Bonds) or bound active-site cofactors:

```python
from rdkit import Chem
from rdkit.Chem import AllChem

def generate_3d_conformer_from_smiles(smiles: str, name: str):
    """Uses RDKit ETKDGv3 + MMFF94 force field to compute 3D atomic coordinates and bond orders."""
    mol = Chem.MolFromSmiles(smiles)
    mol = Chem.AddHs(mol)
    params = AllChem.ETKDGv3()
    params.randomSeed = 42
    AllChem.EmbedMolecule(mol, params)
    AllChem.MMFFOptimizeMolecule(mol, maxIters=500)
    conf = mol.GetConformer()
    
    atoms = []
    for atom in mol.GetAtoms():
        pos = conf.GetAtomPosition(atom.GetIdx())
        atoms.append({
            "idx": atom.GetIdx(),
            "symbol": atom.GetSymbol(),
            "pos": (pos.x, pos.y, pos.z),
            "formal_charge": atom.GetFormalCharge(),
        })
    bonds = []
    for bond in mol.GetBonds():
        bonds.append({
            "begin": bond.GetBeginAtomIdx(),
            "end": bond.GetEndAtomIdx(),
            "order": int(bond.GetBondTypeAsDouble()),
            "is_aromatic": bond.GetIsAromatic(),
        })
    return {"name": name, "atoms": atoms, "bonds": bonds}
```

### 2.4 Reusing Pre-Built PDB `.glb` Assets in the Workspace
Before downloading from scratch, check [`c:\Users\devcd\GenProjects\ecoli-vulkan-engine\web\models\`](file:///c:/Users/devcd/GenProjects/ecoli-vulkan-engine/web/models), which already contains 10 pre-built experimental PDB `.glb` models:
1. [`6X9Q.glb`](file:///c:/Users/devcd/GenProjects/ecoli-vulkan-engine/web/models/6X9Q.glb) — *E. coli* Coupled Transcription-Translation Expressome (43.7 MB)
2. [`1AON.glb`](file:///c:/Users/devcd/GenProjects/ecoli-vulkan-engine/web/models/1AON.glb) — GroEL–GroES Chaperonin Nano-Cage (18.9 MB)
3. [`6WTI.glb`](file:///c:/Users/devcd/GenProjects/ecoli-vulkan-engine/web/models/6WTI.glb) — Cytochrome $bo_3$ Ubiquinol Terminal Oxidase (4.7 MB)
4. [`1EAE.glb`](file:///c:/Users/devcd/GenProjects/ecoli-vulkan-engine/web/models/1EAE.glb) — Pyruvate Dehydrogenase E2 Cubic Core (5.7 MB)
5. [`2OMF.glb`](file:///c:/Users/devcd/GenProjects/ecoli-vulkan-engine/web/models/2OMF.glb) — OmpF Outer Membrane Porin Trimer (3.4 MB)
6. [`1TR7.glb`](file:///c:/Users/devcd/GenProjects/ecoli-vulkan-engine/web/models/1TR7.glb) — FimH Type 1 Pilus Catch-Bond Tip Adhesin (2.1 MB)
7. [`1M5Y.glb`](file:///c:/Users/devcd/GenProjects/ecoli-vulkan-engine/web/models/1M5Y.glb) — SurA Periplasmic Holdase Chaperone (4.4 MB)
8. [`1OMP.glb`](file:///c:/Users/devcd/GenProjects/ecoli-vulkan-engine/web/models/1OMP.glb) — MalE Periplasmic Maltose-Binding Protein (0.95 MB)
9. [`3VMA.glb`](file:///c:/Users/devcd/GenProjects/ecoli-vulkan-engine/web/models/3VMA.glb) — Peptidoglycan Murein Sacculus Lattice (3.7 MB)
10. [`1BNA.glb`](file:///c:/Users/devcd/GenProjects/ecoli-vulkan-engine/web/models/1BNA.glb) — Drew-Dickerson B-DNA Double Helix (0.57 MB)

> **Important Note on Subunit Decomposition:**  
> Every `.glb` model in `learn-biology` MUST expose distinct child meshes named `Piece_<ID>_<Subunit>` so that `setExplodedProgress(p)` and hover raycasting work seamlessly. If importing a merged Molecular Nodes `.glb`, split it by chain/domain in Blender or pair it with decomposed functional subunit meshes.

---

## 3. Mandatory Architectural Invariants for All Roadmap Modules

Every module implemented from `roadmap/01_...` through `roadmap/16_...` MUST satisfy all 7 invariants from [`CELLULAR_INSPECTOR_BLUEPRINT.md`](file:///c:/Users/devcd/GenProjects/learn-biology/CELLULAR_INSPECTOR_BLUEPRINT.md):
1. **Multi-Piece `Piece_<ID>_<Subunit>` Mesh Hierarchy** (never a single merged mesh).
2. **Biophysical Color Palette Compliance** (Outer Membrane = `#0077B6`, Peptidoglycan = `#E76F51`, Inner Membrane = `#06D6A0`, Catalytic/ATP = `#FFB703`, Fe-S/Electron = `#00F5D4`, RNA = `#7209B7`, DNA = `#3A0CA3`).
3. **Exploded View Dissociation (`setExplodedProgress`)** with smooth $0.0 \to 1.0$ vector translation and dynamic camera centroid framing.
4. **Biochemical Circuit I/O Card (`CIRCUITS_DB`)** specifying Upstream Donor, Molecular Inputs, Molecular Outputs, Downstream Consumer, Thermodynamic Currency, and $k_{\text{cat}}$.
5. **Interactive Simulation HUD Sliders (`ITERATION_CONTROLS_DB`)** modifying real-time 3D speeds, conformations, or inhibitor states.
6. **Dynamic 3D Leader Lines & 1-Click Subpills** projecting 3D subunit centroids to 2D SVG overlays.
7. **5-Stage Explanatory Trace ("How It Works" Tutorial)** with synchronized camera dollies, subunit highlighting, and Kokoro-82M neural voiceover narration.
