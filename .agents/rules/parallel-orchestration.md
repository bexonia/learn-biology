---
trigger: always_on
---

# Parallel Task Decomposition Rule
1. When receiving multi-part system requests (e.g., scene construction, asset download, shader setup), do not execute all tasks linearly in a single thread.
2. Formulate an implementation plan in an Artifact first.
3. Decouple independent tasks into non-blocking operations:
   - Task A: Fetch and validate PDB molecular data.
   - Task B: Procedural geometry generation for cell envelope.
   - Task C: Shaders, lighting, and camera tracking scripts.
4. Execute non-dependent tool operations and file generations concurrently.
