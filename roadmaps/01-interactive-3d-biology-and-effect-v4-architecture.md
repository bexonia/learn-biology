# 01 — Interactive 3D Biology Explorer, Effect v4 Architecture & CI/CD Hardening

**Iteration:** `01` (Core 3D WebGL Engine, Effect v4 Services & Pipeline Security)  
**Status:** ✅ **Completed & Verified**  
**Parent Index:** [`roadmaps/README.md`](./README.md)  
**Next Step:** [`02-bilingual-i18n-and-reactive-locale-switching.md`](./02-bilingual-i18n-and-reactive-locale-switching.md)

---

## 1. Summary of Completed Work

1. **Interactive 3D Cell & Virus Library (14 WebGL Pages):**
   - Built schematic and true-scale realistic 3D WebGL views (`Three.js` + real Protein Data Bank coordinates) covering:
     - **4 Eukaryotic & Prokaryotic Cells:** Animal Cell, Plant Cell (Mesophyll), Fungal Cell (Budding Yeast *S. cerevisiae*), and Bacterium (*E. coli*).
     - **5 Viruses + Comparative Virosphere Overview:** Bacteriophage T4, SARS-CoV-2 Coronavirus, HIV-1 Retrovirus, Human Adenovirus, and Tobacco Mosaic Virus (TMV).
   - **208 hierarchical structure nodes** in `src/pages/cell_explorer.ts` down to individual molecules, nucleotides, amino acids, and atoms, paired with **10 interactive Guided Tours** (`src/tours/`).

2. **Effect v4 (`^4.1.2`) Service Architecture:**
   - Migrated all core services (`RandomService`, `GeometryService`, `MolecularBatchService`, `DnaService`, `RnaService`, `PdbService`, `RibosomeService`, `TourService`, and `I18nService`) to `Effect.Service` / `Context.Service` layers (`src/core/`, `src/molecules/`, `src/tours/`).
   - Compiled to zero-inline-JS ES2022 bundles via `esbuild` and verified with headless Chrome WebGL E2E tests (`tests/verify_all.ts`).

3. **Zero-Trust CI/CD & Namespace Isolation:**
   - Enforced `.github/CODEOWNERS` and hardened `.github/workflows/deploy.yml` with read-only default `GITHUB_TOKEN`, fork/external contributor guards, and protected `production` environment gates for OCI publishing (`bexonia/learn-biology#10`, `bexonia/learn-biology#11`).
   - Locked down the `bexonia-learn` Kubernetes namespace with `NetworkPolicy/bexonia-learn-namespace-isolation` (`bexonia/infra#8`, `bexonia/infra#9`), restricting ingress strictly to Child Traefik (`bexonia-ingress` on port `8080`) and egress strictly to CoreDNS (`53`) and GitHub release/CDN CIDRs (`443`).
