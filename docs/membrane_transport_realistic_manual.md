# Membrane Transport & Osmosis Lab (`membrane_transport_realistic.html`)

- **Source:** `src/pages/membrane_transport_realistic.ts` · **PDBs (`src/molecules/pdb_bioenergetics.ts`):** `1J4N` (Aquaporin AQP1), `4PYP` (GLUT1), `3WGU` (Na⁺/K⁺-ATPase), `1XI4` (Clathrin), `1SFC` (SNARE).
- **Views (`5`):** `overview`, `tonicity`, `bilayer_passive`, `active_pump`, `vesicular_atoms`.
- **Interactive Controls:** `#modeBtn` cycles `isotonic` (Balanced) → `hypotonic` (Animal Lysis vs. Plant Turgid) → `hypertonic` (Animal Crenation vs. Plant Plasmolysis), dynamically deforming both cells and flipping AQP1 water flux.
- **16 Inspectable Parts:** `animal_cell`, `plant_cell`, `cell_wall`, `vacuole`, `bilayer`, `simple_diff`, `aquaporin`, `water_flow`, `glut1`, `nak_pump`, `atp_hydrolysis`, `membrane_voltage`, `clathrin_pit`, `snare_fusion`, `vesicle_cargo`, `ion_atoms`.
