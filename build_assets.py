"""
build_assets.py - One-command build script for Learn Biology assets.

Compiles:
1. Rust WebAssembly engine (src/lib.rs -> wasm/orbit_engine.wasm)
2. Blender procedural 3D model (scripts/generate_primer_cell_hq.py -> prokaryote_cell.glb)
"""

import os
import sys
import subprocess
import shutil
from pathlib import Path

ROOT_DIR = Path(__file__).parent.resolve()

def build_wasm():
    print("[*] Checking Rust toolchain for WebAssembly compilation...")
    rustc = shutil.which("rustc")
    if not rustc:
        print("[!] Warning: rustc not found on PATH. Skipping WASM build.")
        print("    If you install Rust, run: rustup target add wasm32-unknown-unknown")
        return False

    src_file = ROOT_DIR / "src" / "lib.rs"
    out_dir = ROOT_DIR / "wasm"
    out_dir.mkdir(parents=True, exist_ok=True)
    out_file = out_dir / "orbit_engine.wasm"

    cmd = [
        rustc,
        "--target", "wasm32-unknown-unknown",
        "-O",
        "--crate-type=cdylib",
        str(src_file),
        "-o", str(out_file)
    ]
    print(f"[*] Compiling {src_file.name} -> {out_file.name}...")
    res = subprocess.run(cmd)
    if res.returncode == 0:
        print(f"[+] Successfully compiled WebAssembly engine: {out_file} ({out_file.stat().st_size} bytes)")
        return True
    else:
        print("[-] Failed to compile WebAssembly engine.")
        return False

def build_blender_glb():
    print("\n[*] Searching for Blender executable...")
    blender_candidates = [
        r"C:\Program Files\Blender Foundation\Blender 5.2\blender.exe",
        r"C:\Program Files\Blender Foundation\Blender 4.3\blender.exe",
        r"C:\Program Files\Blender Foundation\Blender 4.2\blender.exe",
        shutil.which("blender")
    ]
    blender_bin = next((b for b in blender_candidates if b and Path(b).exists()), None)

    if not blender_bin:
        print("[!] Warning: Blender executable not found. Skipping 3D GLB export.")
        print("    Please install Blender 4.x/5.x or set BLENDER_BIN environment variable.")
        return False

    script_path = ROOT_DIR / "scripts" / "generate_primer_cell_hq.py"
    cmd = [
        str(blender_bin),
        "--background",
        "--python", str(script_path),
        "--",
        "--output-dir", str(ROOT_DIR),
        "--blend-name", "prokaryote_cell.blend"
    ]
    print(f"[*] Running Blender ({blender_bin}) to export prokaryote_cell.glb...")
    res = subprocess.run(cmd, cwd=str(ROOT_DIR))
    cell_ok = False
    if res.returncode == 0:
        glb_path = ROOT_DIR / "prokaryote_cell.glb"
        if glb_path.exists():
            print(f"[+] Successfully exported: {glb_path} ({glb_path.stat().st_size} bytes)")
            client_pub = ROOT_DIR / "client" / "public" / "prokaryote_cell.glb"
            if client_pub.parent.exists():
                shutil.copyfile(glb_path, client_pub)
                print(f"[+] Copied to client web assets: {client_pub}")
            cell_ok = True

    # 3. 70S Ribosome Holoenzyme (PDB: 7K00) Multi-Piece Assembly
    ribo_script = ROOT_DIR / "scripts" / "generate_7k00_assembled_pieces.py"
    ribo_ok = False
    if ribo_script.exists():
        cmd_ribo = [
            str(blender_bin),
            "--background",
            "--python", str(ribo_script)
        ]
        print(f"[*] Running Blender ({blender_bin}) to export 7K00_assembled_pieces.glb...")
        res_ribo = subprocess.run(cmd_ribo, cwd=str(ROOT_DIR))
        if res_ribo.returncode == 0:
            out_ribo = ROOT_DIR / "client" / "public" / "models" / "7K00_assembled_pieces.glb"
            if out_ribo.exists():
                print(f"[+] Successfully exported 70S Ribosome: {out_ribo} ({out_ribo.stat().st_size} bytes)")
                ribo_ok = True

    # 4. Iterate over all discrete roadmap folders (roadmap/*/generate_*.py)
    roadmap_scripts = sorted((ROOT_DIR / "roadmap").glob("*/generate_*.py"))
    roadmap_ok = True
    for r_script in roadmap_scripts:
        print(f"[*] Running Roadmap Generator: {r_script.relative_to(ROOT_DIR)}...")
        res_rm = subprocess.run([str(blender_bin), "--background", "--python", str(r_script)], cwd=str(ROOT_DIR))
        if res_rm.returncode != 0:
            print(f"[-] Failed on {r_script.name}")
            roadmap_ok = False

    return cell_ok and ribo_ok and roadmap_ok

def main():
    print("==================================================")
    print(" Learn Biology — Asset Builder")
    print("==================================================")
    wasm_ok = build_wasm()
    blender_ok = build_blender_glb()
    print("\n==================================================")
    print(f"Summary: WASM={wasm_ok}, 3D GLBs={blender_ok}")
    print("To launch the app: cd client && pnpm dev")
    print("==================================================")

if __name__ == "__main__":
    main()
