"""
build_assets.py - One-command build script for Learn Biology assets.

Compiles:
1. Rust WebAssembly engine (src/lib.rs -> wasm/orbit_engine.wasm)
2. Blender procedural 3D model (generate_primer_cell_hq.py -> prokaryote_cell.glb)
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

    script_path = ROOT_DIR / "generate_primer_cell_hq.py"
    cmd = [
        str(blender_bin),
        "--background",
        "--python", str(script_path)
    ]
    print(f"[*] Running Blender ({blender_bin}) to export prokaryote_cell.glb...")
    res = subprocess.run(cmd, cwd=str(ROOT_DIR))
    if res.returncode == 0:
        glb_path = ROOT_DIR / "prokaryote_cell.glb"
        if glb_path.exists():
            print(f"[+] Successfully exported: {glb_path} ({glb_path.stat().st_size} bytes)")
            return True
    print("[-] Failed to export 3D cell geometry from Blender.")
    return False

def main():
    print("==================================================")
    print(" Learn Biology — Asset Builder")
    print("==================================================")
    wasm_ok = build_wasm()
    blender_ok = build_blender_glb()
    print("\n==================================================")
    print(f"Summary: WASM={wasm_ok}, 3D GLB={blender_ok}")
    print("To launch the app: python -m http.server 8080")
    print("==================================================")

if __name__ == "__main__":
    main()
