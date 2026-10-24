"""
run_parallel_eukaryote_glbs.py

Orchestrates 4 parallel headless Blender 5.2 + Molecular Nodes worker processes to
synthesize all 36 Eukaryote `.glb` 3D models concurrently.
"""

import os
import sys
import time
import subprocess
from concurrent.futures import ThreadPoolExecutor, as_completed

BLENDER_EXE = r"C:\Program Files\Blender Foundation\Blender 5.2\blender.exe"
SCRIPT_DIR = os.path.dirname(os.path.abspath(__file__))
BUILDER_SCRIPT = os.path.join(SCRIPT_DIR, "build_eukaryote_glbs.py")

BATCHES = [
    ["01", "02", "03", "04", "05", "06", "07", "08", "09"],
    ["10", "11", "12", "13", "14", "15", "16", "17", "18"],
    ["19", "20", "21", "22", "23", "24", "25", "26", "27"],
    ["28", "29", "30", "31", "32", "33", "34", "35", "36"],
]


def run_batch(batch_idx: int, nums: list):
    t0 = time.time()
    cmd = [BLENDER_EXE, "--background", "--python", BUILDER_SCRIPT, "--"] + nums
    print(f"[*] Starting Worker {batch_idx + 1} for Scenarios: {', '.join(nums)}...")
    res = subprocess.run(cmd, capture_output=True, text=True, encoding="utf-8", errors="replace")
    elapsed = time.time() - t0
    if res.returncode != 0:
        print(f"[!] Worker {batch_idx + 1} FAILED ({elapsed:.1f}s):\n{res.stdout[-1500:]}\n{res.stderr[-1500:]}")
        raise RuntimeError(f"Blender worker {batch_idx + 1} failed with code {res.returncode}")
    return batch_idx + 1, nums, elapsed, res.stdout


def main():
    t0 = time.time()
    with ThreadPoolExecutor(max_workers=4) as ex:
        futs = [ex.submit(run_batch, i, b) for i, b in enumerate(BATCHES)]
        for fut in as_completed(futs):
            w_id, nums, elapsed, out = fut.result()
            lines = [ln for ln in out.splitlines() if "[OK]" in ln or "[+]" in ln]
            print(f"\n=== Worker {w_id} Finished ({', '.join(nums)}) in {elapsed:.1f}s ===")
            for ln in lines[-12:]:
                print("  " + ln)

    print(f"\n======================================================================")
    print(f"  ALL 36 EUKARYOTE .GLB 3D MODELS BUILT IN {time.time() - t0:.1f}s!")
    print(f"======================================================================")


if __name__ == "__main__":
    main()
