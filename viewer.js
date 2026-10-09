/**
 * The Biology Primer: 3D Prokaryote Cell Explorer
 * Real-time camera dynamics, spatial projection, and physics powered by WebAssembly
 */

import voiceService, { CURATED_VOICES } from './voiceService.js';
import { FlagellarMotorScene } from './flagellarMotor.js?v=uint32_clean_v52';

(async function () {
  const canvas = document.getElementById('gl-canvas');
  const svgOverlay = document.getElementById('leader-lines-svg');
  const labelsContainer = document.getElementById('labels-container');
  const wasmStatus = document.getElementById('wasm-status');
  const btnReset = document.getElementById('btn-reset');
  const btnAutoRotate = document.getElementById('btn-autorotate');
  const btnLabels = document.getElementById('btn-labels');
  const btnTour = document.getElementById('btn-tour');

  // Multi-Scale & Navigation Index Elements
  const scaleNavigator = document.getElementById('scale-navigator');
  const btnNavCell = document.getElementById('btn-nav-cell');
  const btnNavMotor = document.getElementById('btn-nav-motor');
  const pageMainTitle = document.getElementById('page-main-title');
  const pageMainSubtitle = document.getElementById('page-main-subtitle');
  const canvasWrapper = document.getElementById('canvas-wrapper');
  const toolbar = document.getElementById('toolbar');
  const scaleCard = document.getElementById('scale-card');
  const microCard = document.getElementById('inset-microcompartment-card');
  const drawerDrilldownBtn = document.getElementById('drawer-drilldown-btn');

  // Flagellar Motor Scenario Elements
  const motorContainer = document.getElementById('motor-container');
  const btnMotorBack = document.getElementById('btn-motor-back');
  const btnRepMolecular = document.getElementById('btn-rep-molecular');
  const btnRepSchematic = document.getElementById('btn-rep-schematic');
  const btnToggleMembrane = document.getElementById('btn-toggle-membrane');
  const btnMotorCcw = document.getElementById('btn-motor-ccw');
  const btnMotorCw = document.getElementById('btn-motor-cw');
  const btnMotorPause = document.getElementById('btn-motor-pause');
  const motorExplodedSlider = document.getElementById('motor-exploded-slider');
  const explodedVal = document.getElementById('exploded-val');
  const motorSpeedSlider = document.getElementById('motor-speed-slider');
  const speedVal = document.getElementById('speed-val');
  const btnOpenBlueprint = document.getElementById('btn-open-blueprint');
  const btnCloseBlueprint = document.getElementById('btn-close-blueprint');
  const blueprintModal = document.getElementById('blueprint-modal');
  const motorInspector = document.getElementById('motor-inspector');
  const motorCompBadge = document.getElementById('motor-comp-badge');
  const motorCompTitle = document.getElementById('motor-comp-title');
  const motorCompDims = document.getElementById('motor-comp-dims');
  const motorCompProteins = document.getElementById('motor-comp-proteins');
  const motorCompPdb = document.getElementById('motor-comp-pdb');
  const motorCompDesc = document.getElementById('motor-comp-desc');
  const motorCompTtsBtn = document.getElementById('motor-comp-tts-btn');
  const motorCompTtsLabel = document.getElementById('motor-comp-tts-label');
  const motorPartsChips = document.getElementById('motor-parts-chips');

  let currentScenario = 'cell'; // 'cell' | 'motor'
  let flagellarMotorInstance = null;
  let currentMotorComponentMeta = null;

  // Kokoro TTS Elements
  const ttsVoiceSelect = document.getElementById('ttsVoiceSelect');
  const btnTtsNarrate = document.getElementById('btn-tts-narrate');
  const ttsMainIcon = document.getElementById('tts-main-icon');
  const ttsMainText = document.getElementById('tts-main-text');
  const ttsMainSpinner = document.getElementById('tts-main-spinner');
  const drawerTtsBtn = document.getElementById('drawer-tts-btn');
  const drawerTtsIcon = document.getElementById('drawer-tts-icon');
  const drawerTtsLabel = document.getElementById('drawer-tts-label');
  const drawerTtsSpinner = document.getElementById('drawer-tts-spinner');
  const drawerTtsStatus = document.getElementById('drawer-tts-status');
  const tourTtsToggle = document.getElementById('tour-tts-toggle');

  // Inspector Drawer Elements
  const inspectorDrawer = document.getElementById('inspector-drawer');
  const drawerZone = document.getElementById('drawer-zone');
  const drawerTitle = document.getElementById('drawer-title');
  const drawerScientificTitle = document.getElementById('drawer-scientific-title');
  const drawerSubtitle = document.getElementById('drawer-subtitle');
  const drawerPhonetic = document.getElementById('drawer-phonetic');
  const drawerScientificName = document.getElementById('drawer-scientific-name');
  const drawerSwatch = document.getElementById('drawer-swatch');
  const drawerScale = document.getElementById('drawer-scale');
  const drawerAbundance = document.getElementById('drawer-abundance');
  const drawerComposition = document.getElementById('drawer-composition');
  const drawerColorHex = document.getElementById('drawer-color-hex');
  const drawerDescription = document.getElementById('drawer-description');
  const drawerProteinsList = document.getElementById('drawer-proteins-list');
  const drawerFocusBtn = document.getElementById('drawer-focus-btn');
  const drawerCloseBtn = document.getElementById('drawer-close-btn');

  // Tour Bar Elements
  const tourBar = document.getElementById('tour-bar');
  const tourStepBadge = document.getElementById('tour-step-badge');
  const tourStepTitle = document.getElementById('tour-step-title');
  const tourPrev = document.getElementById('tour-prev');
  const tourPlayPause = document.getElementById('tour-play-pause');
  const tourNext = document.getElementById('tour-next');
  const tourTimerFill = document.getElementById('tour-timer-fill');
  const tourExit = document.getElementById('tour-exit');

  let isAutoRotating = false;
  let showLabels = true;
  let isPointerDown = false;
  let lastPointerX = 0;
  let lastPointerY = 0;

  // --------------------------------------------------------------------------
  // 1. Initialize WebAssembly Core Engine
  // --------------------------------------------------------------------------
  let wasm = null;
  try {
    const wasmResponse = await fetch('wasm/orbit_engine.wasm');
    const wasmBytes = await wasmResponse.arrayBuffer();
    const wasmModule = await WebAssembly.instantiate(wasmBytes, {});
    wasm = wasmModule.instance.exports;
    
    // Initial camera coordinates matching 3/4 high perspective of Image 3
    // theta ~ 0.54 rad, phi ~ 0.98 rad, radius ~ 10.8 (hero framing of cell + trailing flagella)
    wasm.init_engine(0.54, 0.98, 10.8, -0.6, 0.0, 0.0);
    console.log('[+] WebAssembly Orbit Engine Initialized Successfully');
  } catch (err) {
    console.error('[-] Failed to load WebAssembly module:', err);
    wasmStatus.querySelector('.badge-text').textContent = 'WebAssembly: JS Fallback';
  }

  // --------------------------------------------------------------------------
  // 2. Three.js Scene, Camera, and Studio Lighting Setup
  // --------------------------------------------------------------------------
  const scene = new THREE.Scene();
  scene.background = new THREE.Color(0xFAF8F5);

  const camera = new THREE.PerspectiveCamera(
    42,
    window.innerWidth / window.innerHeight,
    0.1,
    100
  );

  const renderer = new THREE.WebGLRenderer({
    canvas: canvas,
    antialias: true,
    powerPreference: 'high-performance'
  });
  renderer.setSize(window.innerWidth, window.innerHeight);
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2.0));
  renderer.outputColorSpace = THREE.SRGBColorSpace;
  renderer.toneMapping = THREE.ACESFilmicToneMapping;
  renderer.toneMappingExposure = 0.94;
  renderer.shadowMap.enabled = true;
  renderer.shadowMap.type = THREE.PCFSoftShadowMap;

  // Studio Lights: Warm Key, Cool Fill, Top Rim (high contrast, authentic contact shadows)
  const ambientLight = new THREE.AmbientLight(0xFAF8F5, 0.95);
  scene.add(ambientLight);

  const keyLight = new THREE.DirectionalLight(0xFFF7EC, 2.6);
  keyLight.position.set(6.5, -6.5, 8.5);
  scene.add(keyLight);

  const fillLight = new THREE.DirectionalLight(0xEFF5FD, 1.2);
  fillLight.position.set(-8.5, -5.0, 5.5);
  scene.add(fillLight);

  const rimLight = new THREE.DirectionalLight(0xFFFFFF, 1.3);
  rimLight.position.set(0.0, 8.5, 7.5);
  scene.add(rimLight);

  // Soft shadow ground plane
  const planeGeo = new THREE.PlaneGeometry(70, 70);
  const planeMat = new THREE.ShadowMaterial({ opacity: 0.15 });
  const shadowPlane = new THREE.Mesh(planeGeo, planeMat);
  shadowPlane.position.set(0, 0, -2.6);
  shadowPlane.receiveShadow = true;
  scene.add(shadowPlane);

  // --------------------------------------------------------------------------
  // 3. Procedural Micro-Textures & Physical Materials matching Image 3
  // --------------------------------------------------------------------------
  function createWallPorousTexture() {
    const canvas = document.createElement('canvas');
    canvas.width = 1024;
    canvas.height = 512;
    const ctx = canvas.getContext('2d');

    // 1. Full solid rich biological green base (20% darker, stronger green across entire piece, no brown degradé)
    const grad = ctx.createLinearGradient(0, 0, 1024, 0);
    grad.addColorStop(0.0, '#3F6636'); // Deep biological forest/sage green (20% darker)
    grad.addColorStop(0.5, '#49733F'); // Strong mid-green body
    grad.addColorStop(1.0, '#3F6636'); // Full green across entire piece
    ctx.fillStyle = grad;
    ctx.fillRect(0, 0, 1024, 512);

    // 2. Sandstone micro-stipple noise
    const imgData = ctx.getImageData(0, 0, 1024, 512);
    const data = imgData.data;
    for (let i = 0; i < data.length; i += 4) {
      const noise = (Math.random() - 0.5) * 28;
      data[i] = Math.min(255, Math.max(0, data[i] + noise));
      data[i + 1] = Math.min(255, Math.max(0, data[i + 1] + noise));
      data[i + 2] = Math.min(255, Math.max(0, data[i + 2] + noise));
    }
    ctx.putImageData(imgData, 0, 0);

    // 3. Spongy circular cavity pits/pores (Image 3 porous sandstone look!)
    const numPores = 160;
    for (let i = 0; i < numPores; i++) {
      const px = Math.random() * 1024;
      const py = Math.random() * 512;
      const pr = 3.5 + Math.random() * 9.5;

      const pGrad = ctx.createRadialGradient(px - pr * 0.2, py - pr * 0.2, pr * 0.1, px, py, pr);
      pGrad.addColorStop(0, '#261C14');
      pGrad.addColorStop(0.65, '#48382A');
      pGrad.addColorStop(0.9, 'rgba(72, 56, 42, 0.45)');
      pGrad.addColorStop(1.0, 'transparent');

      ctx.fillStyle = pGrad;
      ctx.beginPath();
      ctx.arc(px, py, pr, 0, Math.PI * 2);
      ctx.fill();
    }

    const texture = new THREE.CanvasTexture(canvas);
    texture.wrapS = THREE.RepeatWrapping;
    texture.wrapT = THREE.RepeatWrapping;
    return texture;
  }

  // --------------------------------------------------------------------------
  // 2b. Procedural Macromolecular Crowding: Cytoplasmic Molecular Soup Texture
  // --------------------------------------------------------------------------
  function createCytoplasmicSoupTexture() {
    const canvas = document.createElement('canvas');
    canvas.width = 1024;
    canvas.height = 1024;
    const ctx = canvas.getContext('2d');

    // 1. Warm colloidal fluid base (crowded cytoplasm medium)
    ctx.fillStyle = '#D4C6AA'; // Rich biological cytoplasm beige
    ctx.fillRect(0, 0, 1024, 1024);

    // 2. Micro-stippling of millions of free amino acids, nucleotides (ATP, dNTPs), and small metabolites
    const numMicroDots = 6500;
    const microColors = ['#EAE2D2', '#C2B193', '#F4EDE0', '#B5A484', '#DFD3BC', '#E2D8C0'];
    for (let i = 0; i < numMicroDots; i++) {
      const x = Math.random() * 1024;
      const y = Math.random() * 1024;
      const r = 0.6 + Math.random() * 1.4;
      ctx.fillStyle = microColors[(Math.random() * microColors.length) | 0];
      ctx.beginPath();
      ctx.arc(x, y, r, 0, Math.PI * 2);
      ctx.fill();
    }

    // 3. Small-to-medium globular cellular proteins & enzymes (3-8 nm scale)
    // Metabolic enzymes, chaperones, transporters, synthases in natural muted organic tones
    const numProteins = 1400;
    const proteinColors = [
      'rgba(180, 95, 75, 0.45)',   // Muted terracotta/coral enzyme
      'rgba(70, 130, 95, 0.40)',   // Soft jade/folate enzyme
      'rgba(195, 145, 55, 0.45)',  // Warm amber dehydrogenase
      'rgba(110, 85, 135, 0.40)',  // Soft lavender kinase
      'rgba(75, 115, 155, 0.40)',  // Slate blue transferase
      'rgba(150, 130, 110, 0.50)'  // Colloidal grey-brown globular core
    ];

    for (let i = 0; i < numProteins; i++) {
      const px = Math.random() * 1024;
      const py = Math.random() * 1024;
      const pr = 2.0 + Math.random() * 4.6;
      
      const grad = ctx.createRadialGradient(px - pr * 0.25, py - pr * 0.25, pr * 0.1, px, py, pr);
      const col = proteinColors[(Math.random() * proteinColors.length) | 0];
      grad.addColorStop(0, col.replace(/[\d\.]+\)$/, '0.75)'));
      grad.addColorStop(0.7, col);
      grad.addColorStop(1.0, 'transparent');

      ctx.fillStyle = grad;
      ctx.beginPath();
      ctx.arc(px, py, pr, 0, Math.PI * 2);
      ctx.fill();
    }

    // 4. Intermediate multi-protein complexes (10-15 nm scale, e.g. DNA Polymerase III, GroEL, RNA Pol)
    const numComplexes = 160;
    for (let i = 0; i < numComplexes; i++) {
      const cx = Math.random() * 1024;
      const cy = Math.random() * 1024;
      const baseR = 5.0 + Math.random() * 6.5;

      // Draw 2-3 clustered lobes representing multi-subunit quaternary architecture
      const lobes = 2 + ((Math.random() * 2) | 0);
      for (let l = 0; l < lobes; l++) {
        const angle = Math.random() * Math.PI * 2;
        const dist = Math.random() * baseR * 0.55;
        const lx = cx + Math.cos(angle) * dist;
        const ly = cy + Math.sin(angle) * dist;
        const lr = baseR * (0.6 + Math.random() * 0.4);

        const lGrad = ctx.createRadialGradient(lx - lr * 0.2, ly - lr * 0.2, lr * 0.1, lx, ly, lr);
        lGrad.addColorStop(0, 'rgba(165, 120, 85, 0.7)');
        lGrad.addColorStop(0.6, 'rgba(130, 95, 65, 0.5)');
        lGrad.addColorStop(1.0, 'transparent');

        ctx.fillStyle = lGrad;
        ctx.beginPath();
        ctx.arc(lx, ly, lr, 0, Math.PI * 2);
        ctx.fill();
      }
    }

    // 5. Macromolecular crowding density gradient & subtle textural normal noise
    const imgData = ctx.getImageData(0, 0, 1024, 1024);
    const data = imgData.data;
    for (let i = 0; i < data.length; i += 4) {
      const noise = (Math.random() - 0.5) * 16;
      data[i] = Math.min(255, Math.max(0, data[i] + noise));
      data[i + 1] = Math.min(255, Math.max(0, data[i + 1] + noise));
      data[i + 2] = Math.min(255, Math.max(0, data[i + 2] + noise));
    }
    ctx.putImageData(imgData, 0, 0);

    const texture = new THREE.CanvasTexture(canvas);
    texture.wrapS = THREE.RepeatWrapping;
    texture.wrapT = THREE.RepeatWrapping;
    texture.repeat.set(3, 3);
    return texture;
  }

  function createNucleoidRugoseMaps() {
    const size = 512;
    const canvasColor = document.createElement('canvas');
    canvasColor.width = size;
    canvasColor.height = size;
    const ctxColor = canvasColor.getContext('2d');

    const canvasNormal = document.createElement('canvas');
    canvasNormal.width = size;
    canvasNormal.height = size;
    const ctxNormal = canvasNormal.getContext('2d');

    // 1. Generate height array with multi-frequency plectonemic fiber noise
    const heightMap = new Float32Array(size * size);
    for (let y = 0; y < size; y++) {
      const v = y / size;
      for (let x = 0; x < size; x++) {
        const u = x / size;
        let h = 0.5;
        // Directional fibrous striations + twisting ribbon creases
        h += 0.24 * Math.sin(u * 55.0 + Math.cos(v * 35.0) * 2.2);
        h += 0.18 * Math.cos(v * 60.0 + Math.sin(u * 30.0) * 2.0);
        h += 0.12 * Math.sin((u + v) * 85.0);
        h += 0.08 * Math.cos((u - v) * 110.0);
        h += 0.12 * (Math.random() - 0.5); // Micro-rugose grain
        heightMap[y * size + x] = Math.max(0.0, Math.min(1.0, h));
      }
    }

    // 2. Microcompartment purple palette precisely calibrated to match user uploaded image
    // Target on-screen rendered percentiles: P15 [80, 52, 104], P50 [106, 73, 133], P85 [134, 101, 162]
    const colorImg = ctxColor.createImageData(size, size);
    const colorData = colorImg.data;
    for (let i = 0; i < heightMap.length; i++) {
      const h = heightMap[i];
      const p = i * 4;
      let r, g, b;
      if (h < 0.5) {
        const t = h * 2.0;
        // Deep crevice [17, 10, 24] to rich body [36, 22, 53]
        r = 17 + (36 - 17) * t;
        g = 10 + (22 - 10) * t;
        b = 24 + (53 - 24) * t;
      } else {
        const t = (h - 0.5) * 2.0;
        // Rich body [36, 22, 53] to crest highlight [58, 37, 84]
        r = 36 + (58 - 36) * t;
        g = 22 + (37 - 22) * t;
        b = 53 + (84 - 53) * t;
      }
      colorData[p] = Math.round(r);
      colorData[p + 1] = Math.round(g);
      colorData[p + 2] = Math.round(b);
      colorData[p + 3] = 255;
    }
    ctxColor.putImageData(colorImg, 0, 0);

    // 3. Normal map computed via Sobel-like central differences
    const normImg = ctxNormal.createImageData(size, size);
    const normData = normImg.data;
    const bumpScale = 3.6;
    for (let y = 0; y < size; y++) {
      const ym1 = (y - 1 + size) % size;
      const yp1 = (y + 1) % size;
      for (let x = 0; x < size; x++) {
        const xm1 = (x - 1 + size) % size;
        const xp1 = (x + 1) % size;

        const dhdx = (heightMap[y * size + xp1] - heightMap[y * size + xm1]) * 0.5;
        const dhdy = (heightMap[yp1 * size + x] - heightMap[ym1 * size + x]) * 0.5;

        let nx = -dhdx * bumpScale;
        let ny = -dhdy * bumpScale;
        let nz = 1.0;
        const len = Math.sqrt(nx * nx + ny * ny + nz * nz);
        nx /= len;
        ny /= len;
        nz /= len;

        const p = (y * size + x) * 4;
        normData[p] = Math.round((nx * 0.5 + 0.5) * 255);
        normData[p + 1] = Math.round((ny * 0.5 + 0.5) * 255);
        normData[p + 2] = Math.round((nz * 0.5 + 0.5) * 255);
        normData[p + 3] = 255;
      }
    }
    ctxNormal.putImageData(normImg, 0, 0);

    const colorTex = new THREE.CanvasTexture(canvasColor);
    colorTex.wrapS = THREE.RepeatWrapping;
    colorTex.wrapT = THREE.RepeatWrapping;
    colorTex.repeat.set(6, 6);

    const normalTex = new THREE.CanvasTexture(canvasNormal);
    normalTex.wrapS = THREE.RepeatWrapping;
    normalTex.wrapT = THREE.RepeatWrapping;
    normalTex.repeat.set(6, 6);

    return { colorTex, normalTex };
  }

  let cellRoot = null;
  const loader = new THREE.GLTFLoader();
  const wallTex = createWallPorousTexture();
  const basinSoupTex = createCytoplasmicSoupTexture();
  const nucleoidMaps = createNucleoidRugoseMaps();

  loader.load(
    'prokaryote_cell.glb',
    function (gltf) {
      cellRoot = gltf.scene;
      cellRoot.traverse(function (child) {
        if (child.isMesh) {
          child.castShadow = true;
          child.receiveShadow = true;
          const name = child.name;

          if (name.includes('OuterCapsule')) {
            // Translucent frosted sage-green outer capsule shell
            child.material = new THREE.MeshStandardMaterial({
              color: 0x82A47E,
              roughness: 0.32,
              transparent: true,
              opacity: 0.38,
              side: THREE.DoubleSide,
              depthWrite: false
            });
          } else if (name.includes('CellWall')) {
            // Porous spongy layered wall with sage-to-terracotta gradient and pits
            child.material = new THREE.MeshStandardMaterial({
              map: wallTex,
              roughness: 0.55,
              metalness: 0.05,
              side: THREE.DoubleSide
            });
          } else if (name.includes('PlasmaMembrane')) {
            // Golden inner plasma membrane lip
            child.material = new THREE.MeshStandardMaterial({
              color: 0xE2A824,
              roughness: 0.24,
              metalness: 0.30,
              side: THREE.DoubleSide
            });
          } else if (name.includes('Cytoplasm_Bedding')) {
            // Authentic macromolecular crowding "Cytoplasmic Soup" (dense colloidal medium)
            child.material = new THREE.MeshStandardMaterial({
              map: basinSoupTex,
              color: 0xC8B896,
              roughness: 0.68,
              metalness: 0.04,
              side: THREE.DoubleSide
            });
          } else if (name.includes('Nucleoid')) {
            // Ultra-dense rugose chromatin yarn skein (deep plum crevice + orchid crest + normal map)
            child.material = new THREE.MeshStandardMaterial({
              map: nucleoidMaps.colorTex,
              normalMap: nucleoidMaps.normalTex,
              normalScale: new THREE.Vector2(2.4, 2.4),
              roughness: 0.86, // Natural, velvety, matte biological feel (zero plastic shine!)
              metalness: 0.02
            });
          } else if (name.includes('Plasmid')) {
            // Slender crisp double-strand circular DNA loops in glowing electric azure cyan
            child.material = new THREE.MeshStandardMaterial({
              color: 0x00B4D8, // High-contrast electric cyan
              roughness: 0.32,
              metalness: 0.25
            });
          } else if (name.includes('Ribosomes')) {
            // Giant 70S ribonucleoprotein translation factories: warm coral terracotta beads
            child.material = new THREE.MeshStandardMaterial({
              color: 0xE06D53, // Warm Coral Terracotta (high contrast above beige soup)
              roughness: 0.64,
              metalness: 0.06
            });
          } else if (name.includes('Solute')) {
            // Soft colloidal protein complexes
            child.material = new THREE.MeshStandardMaterial({
              color: 0x4895EF,
              roughness: 0.38,
              metalness: 0.10,
              transparent: true,
              opacity: 0.85
            });
          } else if (name.includes('Motor_Gold')) {
            // Gold motor bushing collars
            child.material = new THREE.MeshStandardMaterial({
              color: 0xDDAE32,
              roughness: 0.22,
              metalness: 0.75
            });
          } else if (name.includes('Motor_Red')) {
            // Crimson red central sleeve
            child.material = new THREE.MeshStandardMaterial({
              color: 0xC81414,
              roughness: 0.30,
              metalness: 0.08
            });
          } else if (name.includes('Flagellum')) {
            // Frosted wavy flagellar tail
            child.material = new THREE.MeshPhysicalMaterial({
              color: 0xC6C2BA,
              transparent: true,
              opacity: 0.80,
              roughness: 0.35,
              transmission: 0.38
            });
          } else if (name.includes('Pili')) {
            // Organic whisker cilia
            child.material = new THREE.MeshStandardMaterial({
              color: 0xD8DED8,
              transparent: true,
              opacity: 0.65,
              roughness: 0.36
            });
          }
        }
      });
      scene.add(cellRoot);
      console.log('[+] Prokaryote Cell GLB Loaded Successfully with Physical PBR Overrides');
    },
    undefined,
    function (error) {
      console.error('[-] Error loading GLB:', error);
    }
  );

  // --------------------------------------------------------------------------
  // 3b. Volumetric Cytoplasmic Solute & Amino Acid Colloidal Cloud
  // --------------------------------------------------------------------------
  const soupParticleCount = 2200;
  const soupGeo = new THREE.BufferGeometry();
  const soupPos = new Float32Array(soupParticleCount * 3);
  const soupCols = new Float32Array(soupParticleCount * 3);

  // Palette for floating amino acids, tRNA, cofactors, and micro-enzyme specks
  const solutePalette = [
    new THREE.Color(0xF4A261), // Warm coral amino acid
    new THREE.Color(0x2A9D8F), // Jade enzyme speck
    new THREE.Color(0xE9C46A), // Amber metabolic cofactor
    new THREE.Color(0x8338EC), // Lavender nucleotide (ATP/GTP)
    new THREE.Color(0x48CAE4), // Sky cyan tRNA
    new THREE.Color(0xDDAE32), // Gold metabolite
    new THREE.Color(0xEAE2D2)  // Pale white/silver ion
  ];

  let placed = 0;
  while (placed < soupParticleCount) {
    const x = (Math.random() - 0.5) * 4.2;
    const y = -0.10 + Math.random() * 0.26;
    const z = (Math.random() - 0.5) * 2.1;

    // Strict containment within internal cytoplasm lumen
    const radY = y / 0.92;
    const radZ = z / 1.05;
    if (radY * radY + radZ * radZ > 0.78) continue;
    if (Math.abs(x) > 1.85 && (radY * radY + radZ * radZ > 0.40)) continue; // Cap taper

    soupPos[placed * 3] = x;
    soupPos[placed * 3 + 1] = y;
    soupPos[placed * 3 + 2] = z;

    const col = solutePalette[(Math.random() * solutePalette.length) | 0];
    soupCols[placed * 3] = col.r;
    soupCols[placed * 3 + 1] = col.g;
    soupCols[placed * 3 + 2] = col.b;
    placed++;
  }

  soupGeo.setAttribute('position', new THREE.BufferAttribute(soupPos, 3));
  soupGeo.setAttribute('color', new THREE.BufferAttribute(soupCols, 3));

  const soupMat = new THREE.PointsMaterial({
    size: 0.025,
    vertexColors: true,
    transparent: true,
    opacity: 0.55,
    blending: THREE.NormalBlending
  });

  const soupPoints = new THREE.Points(soupGeo, soupMat);
  scene.add(soupPoints);

  // --------------------------------------------------------------------------
  // 4. Biological Landmarks & Anatomy Knowledge Database
  // --------------------------------------------------------------------------
  const ANATOMY_DATA = {
    overview: {
      zone: 'Zone 0: Whole Cell Morphology',
      title: 'A Typical Prokaryotic Cell',
      scientific: 'Escherichia coli K-12 (Bacterium)',
      phonetic: 'Pronounced: /ˌɛʃ.əˈrɪk.i.ə ˈkoʊ.laɪ/ (Named after Theodor Escherich)',
      subtitle: 'Gram-Negative Bacillus Model Organism',
      color: '#D1C2A5',
      colorName: 'Warm Biological Palette',
      scale: '1.5 µm × 0.8 µm (Volume ~1 µm³)',
      abundance: 'Single autonomous unicellular organism',
      composition: 'Multi-layer envelope, genetic core, and cytosol',
      description: 'Prokaryotes are single-celled organisms defined by the absence of a membrane-enclosed nucleus and membrane-bound eukaryotic organelles (mitochondria, chloroplasts, Golgi). In Gram-negative bacteria such as Escherichia coli, the cell is enveloped by a complex multi-layered architecture: an outer capsule/glycocalyx, an outer membrane, a periplasmic space housing the thin peptidoglycan cell wall, and an inner cytoplasmic (plasma) membrane generating the electrochemical proton gradient that fuels cellular life.',
      proteins: [
        { name: 'FtsZ (Divisome Z-Ring)', tag: '4 nm', desc: 'Tubulin-homolog GTPase that polymerizes into a constricting ring to divide the cell in two.' },
        { name: 'MreB (Actin Cytoskeleton)', tag: '5 nm', desc: 'Actin-homolog helical cables orchestrating rod shape (bacillus) elongation.' },
        { name: 'DNA Polymerase III Holoenzyme', tag: '10–12 nm', desc: 'Massive 10-subunit replication engine duplicating the chromosome at 1,000 bp/sec.' }
      ],
      camPos: new THREE.Vector3(0.54, 0.98, 10.8),
      camTarget: new THREE.Vector3(-0.6, 0.0, 0.0)
    },
    capsule: {
      zone: 'Zone 1: Cell Envelope Boundary',
      title: 'Capsule',
      scientific: 'Glycocalyx Capsularis (K-Antigen)',
      phonetic: 'Pronounced: /ˈkæp.sjuːl/ • /ˌɡlaɪ.koʊˈkeɪ.lɪks/ (Greek: glykys "sweet" + kalyx "husk")',
      subtitle: 'Outer Polysaccharide Hydration & Slime Shield',
      color: '#82A47E',
      colorName: '#82A47E Frosted Mint',
      scale: '100–400 nm thick coat',
      abundance: '1 continuous outermost coat',
      composition: 'High-molecular-weight acidic polysaccharides (CPS) & colanic acid',
      description: 'The outermost non-living protective envelope layer. Formed from high-molecular-weight extracellular polysaccharides linked into a dense, gelatinous matrix, the capsule shields the bacterium against desiccation, acts as a physical barrier against bacteriophage infection, and prevents complement deposition and macrophage phagocytosis in host immune environments.',
      proteins: [
        { name: 'Wza Translocon Octamer', tag: 'Secretory Outer Ring', desc: 'Large 8-stranded α-helical barrel conducting capsular polysaccharides across the outer membrane.' },
        { name: 'Wzb / Wzc Tyrosine Kinase', tag: 'Polymerization Motor', desc: 'Inner membrane autophosphorylating tyrosine kinase regulating polymer chain length.' },
        { name: 'Capsular Glycosyltransferases', tag: 'Polysaccharide Synthase', desc: 'Assembly enzymes linking UDP-sugar monomers into long polysaccharide repeat units.' }
      ],
      camPos: new THREE.Vector3(-0.95, 0.35, 4.4),
      camTarget: new THREE.Vector3(-0.957, -0.285, 1.854)
    },
    wall: {
      zone: 'Zone 1: Cell Envelope Boundary',
      title: 'Peptidoglycan Cell Wall',
      scientific: 'Murein Sacculus & Outer Membrane',
      phonetic: 'Pronounced: /ˌpɛp.tɪ.doʊˈɡlaɪ.kæn/ • /ˈmjʊər.iːn/ (Latin: murus "wall")',
      subtitle: 'Crosslinked Glycan Structural Exoskeleton',
      color: '#3F6636',
      colorName: '#3F6636 Forest Green Sandstone',
      scale: '15–30 nm thickness (mesh pores ~2–4 nm)',
      abundance: '1 continuous covalently closed macromolecular bag',
      composition: 'Poly-NAG-NAM glycan chains + D-alanine/D-glutamate crosslinks',
      description: 'The rigid exoskeleton of the bacterium. In Gram-negative cells, the cell wall consists of a thin, elastic single-layered sheet of murein peptidoglycan situated directly inside the periplasm, beneath the lipopolysaccharide (LPS) outer membrane. It preserves the distinctive bacillus rod shape and counteracts internal osmotic turgor pressure (2–5 atm), preventing osmotic lysis.',
      proteins: [
        { name: 'Penicillin-Binding Proteins (PBPs)', tag: 'Transpeptidases', desc: 'Transpeptidases and transglycosylases that crosslink peptide stems; prime targets of β-lactam antibiotics.' },
        { name: 'MurA-F Biosynthetic Cascade', tag: 'Metabolic Pathway', desc: 'Sequential cytosolic enzymes synthesizing the lipid II murein precursor from UDP-GlcNAc.' },
        { name: 'Lytic Transglycosylases', tag: 'Space Cutters', desc: 'Enzymes that selectively cleave glycan bonds to allow insertion of flagellar basal bodies and secretion systems.' }
      ],
      camPos: new THREE.Vector3(-0.55, 0.45, 4.0),
      camTarget: new THREE.Vector3(-0.594, -0.182, 1.627)
    },
    membrane: {
      zone: 'Zone 1: Cell Envelope Boundary',
      title: 'Periplasmic Space & Inner Membrane',
      scientific: 'Spatium Periplasmicum & Membrana Interna',
      phonetic: 'Pronounced: /ˌpɛr.ɪˈplæz.əm/ (Greek: peri- "around" + plasma "formed substance")',
      subtitle: 'Proton Motive Force & Trans-Envelope Gateway',
      color: '#E2A824',
      colorName: '#E2A824 Golden Amber',
      scale: 'Periplasm: 10–25 nm width | Inner Bilayer: 4–5 nm',
      abundance: '1 continuous periplasmic compartment & 1 inner bilayer',
      composition: 'Periplasmic gel (SurA/Skp/DegP) + Phospholipid bilayer (PE 75%, PG 20%, CL 5%)',
      description: 'In Gram-negative bacteria such as E. coli, this critical boundary encompasses both the periplasmic space (an oxidizing, protein-dense aqueous gel between the outer wall and inner membrane) and the inner cytoplasmic membrane. The inner membrane acts as the primary impermeable barrier that maintains the electrochemical proton motive force (PMF), powering ATP synthase and flagellar rotation, while the periplasm orchestrates protein folding, solute binding (MalE), and peptidoglycan assembly.',
      proteins: [
        { name: 'SurA & Skp Chaperones', tag: 'Periplasmic Foldases', desc: 'Periplasmic escort chaperones preventing aggregation of outer membrane proteins (OMPs) across the periplasmic space.' },
        { name: 'ATP Synthase F₁F₀ (6RKW)', tag: '10 nm Rotary Motor', desc: 'Rotary nanomachine converting the electrochemical proton gradient into chemical ATP energy as H⁺ flows from periplasm into cytosol.' },
        { name: 'SecYEG Protein Translocon', tag: 'Core Transporter', desc: 'Central protein-conducting channel exporting newly synthesized precursor peptides across the inner membrane into the periplasm.' }
      ],
      camPos: new THREE.Vector3(0.85, 1.35, -2.8),
      camTarget: new THREE.Vector3(0.625, 0.652, -1.348)
    },
    cytoplasm: {
      zone: 'Zone 4: Soluble Matrix & Micro-Organelles',
      title: 'Cytoplasm & Macromolecular Soup',
      scientific: 'Cytosol Matrix (Intracellular Fluidum)',
      phonetic: 'Pronounced: /ˈsaɪ.təˌplæz.əm/ • /ˈsaɪ.təˌsɒl/ (Greek: kytos "cell" + sol "solution")',
      subtitle: 'Colloidal Crowding Matrix (300–400 mg/mL)',
      color: '#D4C6AA',
      colorName: '#D4C6AA Colloidal Beige',
      scale: 'Sub-nanometer ions to 15 nm enzyme complexes',
      abundance: 'Millions of enzymes, metabolites, and nucleic acids in suspension',
      composition: 'Water (70%), proteins & enzymes (20%), RNA (6%), metabolites & ions',
      description: 'The dense intracellular matrix enclosed by the inner membrane. Contrary to an empty aqueous broth, 20–30% of cytoplasmic volume is occupied by macromolecules (concentrations reaching 300–400 mg/mL). This phenomenon of "macromolecular crowding" dramatically increases effective association constants, accelerating metabolic pathways and chaperone-assisted protein folding.',
      proteins: [
        { name: 'DNA Polymerase III (Holoenzyme)', tag: '10–12 nm (~half ribosome)', desc: '10-protein replisome engine synthesizing duplicate DNA strands at 1,000 nucleotides/sec.' },
        { name: 'DNA Helicase (DnaB)', tag: '8 nm Hexamer', desc: 'ATP-powered rotary ring unzipping the double-stranded DNA helix ahead of the replication fork.' },
        { name: 'GroEL / GroES Chaperonin', tag: '14 nm Nano-Cage', desc: 'Double-ring protein cylinder providing an isolated chamber for unfolded proteins to reach native fold.' },
        { name: 'Glycolytic Enzymes (GAPDH, Pyk)', tag: '3–6 nm Globular', desc: 'Metabolic assembly line converting glucose into pyruvate, yielding ATP and NADH reducing equivalents.' }
      ],
      camPos: new THREE.Vector3(0.35, 0.95, 2.7),
      camTarget: new THREE.Vector3(0.35, -0.05, 0.40)
    },
    ribosomes: {
      zone: 'Zone 3: Genetic & Translation Machinery',
      title: '70S Polyribosomes',
      scientific: 'Ribonucleoprotein Complex (30S + 50S)',
      phonetic: 'Pronounced: /ˈraɪ.bəˌsoʊm/ (Ribonucleic acid + Greek: soma "body")',
      subtitle: 'Macromolecular Protein Translation Factories',
      color: '#E06D53',
      colorName: '#E06D53 Warm Coral Terracotta',
      scale: '25 nm diameter (210 Å × 290 Å | 2.5 MDa mass)',
      abundance: '20,000–70,000 ribosomes per actively growing cell',
      composition: 'Ribosomal RNA (65%: 16S, 23S, 5S) + 55 ribosomal proteins (35%)',
      description: 'Universal programmable molecular assembly engines that translate messenger RNA (mRNA) sequences into polypeptide chains. In prokaryotes, because there is no nuclear membrane separating transcription from translation, ribosomes bind to nascent mRNA transcripts while they are still being synthesized by RNA polymerase off the nucleoid DNA—a coordinated phenomenon called the "expressome".',
      proteins: [
        { name: '50S Large Subunit (23S & 5S rRNA)', tag: 'Welding Engine', desc: 'Contains the Peptidyl Transferase Center (PTC), an RNA ribozyme catalyzing peptide bond formation.' },
        { name: '30S Small Subunit (16S rRNA)', tag: 'Barcode Scanner', desc: 'Decodes mRNA codons by verifying codon-anticodon base pairing with aminoacyl-tRNA molecules.' },
        { name: 'Elongation Factors (EF-Tu & EF-G)', tag: 'GTPase Drivers', desc: 'GTP-driven molecular switches shuttling aminoacyl-tRNA to the A-site and ratcheting the mRNA strand.' }
      ],
      camPos: new THREE.Vector3(2.10, 0.85, 1.55),
      camTarget: new THREE.Vector3(1.574, 0.356, 0.293)
    },
    nucleoid: {
      zone: 'Zone 3: Genetic & Translation Machinery',
      title: 'Nucleoid',
      scientific: 'Bacterial Chromosome (dsDNA Genophore)',
      phonetic: 'Pronounced: /ˈnjuː.kli.ɔɪd/ (Latin: nucleus + Greek: -oeides "resembling")',
      subtitle: 'Supercoiled Master Genetic Chromatin Skein',
      color: '#6A4985',
      colorName: '#6A4985 Calibrated Royal Purple',
      scale: '4.64 Mbp (~1.5 mm contour length compacted into ~1 µm region)',
      abundance: '1 master circular chromosome (often 2–4 replication forks)',
      composition: 'Closed circular dsDNA (80%) + NAPs (10%) + nascent RNA (10%)',
      description: 'The irregular, non-membrane-enclosed region where the master genetic material resides. The single circular double-stranded DNA genome measures ~1.5 mm when stretched out, but is compacted >1,000-fold into the bacterial cell volume through negative supercoiling by DNA gyrase and structural organization into ~400 topologically isolated loops by Nucleoid-Associated Proteins (NAPs).',
      proteins: [
        { name: 'Nucleoid-Associated Proteins (HU, H-NS)', tag: 'Histone Analogs', desc: 'Bacterial chromatin architecture proteins that bridge, bend, and loop DNA strands into a compact skein.' },
        { name: 'RNA Polymerase Core & Sigma-70', tag: 'Transcription Engine', desc: 'Multiprotein machine unwinding promoter DNA and synthesizing complementary mRNA transcripts.' },
        { name: 'DNA Topoisomerase IV & Gyrase', tag: 'Tension Relievers', desc: 'Enzymes introducing negative supercoils and resolving catenated DNA rings during chromosome segregation.' }
      ],
      camPos: new THREE.Vector3(0.12, 1.65, 2.15),
      camTarget: new THREE.Vector3(0.098, 0.647, 0.304)
    },
    plasmid: {
      zone: 'Zone 3: Genetic & Translation Machinery',
      title: 'Plasmids',
      scientific: 'Extrachromosomal Autonomous Replicon (dsDNA)',
      phonetic: 'Pronounced: /ˈplæz.mɪd/ (From cytoplasm + -id)',
      subtitle: 'Mobile Genetic Cassettes & Resistance Rings',
      color: '#00B4D8',
      colorName: '#00B4D8 Electric Azure Cyan',
      scale: '2 kb to 200 kb (~50–150 nm circular diameter)',
      abundance: '1 to 50+ copies per cell depending on copy control origin',
      composition: 'Covalently closed circular double-stranded DNA (cccDNA)',
      description: 'Small, extrachromosomal circular DNA duplexes that replicate independently of the master bacterial chromosome. Plasmids carry non-essential yet selectively advantageous genes—such as antibiotic-degrading enzymes, heavy metal resistance operons, and virulence determinants—and can be horizontally transferred between bacterial species via conjugative pili.',
      proteins: [
        { name: 'RepA Initiator Protein', tag: 'Plasmid Replication', desc: 'Protein binding specifically to the plasmid origin (oriV) to recruit host DNA polymerase III.' },
        { name: 'Beta-Lactamase (Bla)', tag: 'Antibiotic Defense', desc: 'Secreted periplasmic enzyme that hydrolyzes the β-lactam ring of penicillin, rendering it ineffective.' },
        { name: 'Tra Conjugation Machinery', tag: 'Horizontal Transfer', desc: 'Type IV secretion system assembling the conjugative pilus to transfer plasmid DNA to recipient bacteria.' }
      ],
      camPos: new THREE.Vector3(-0.06, 0.95, 2.05),
      camTarget: new THREE.Vector3(-0.058, 0.184, 0.576)
    },
    flagellum: {
      zone: 'Zone 2: Surface Appendages & Nanomachinery',
      title: 'Flagellum & Rotary Motor',
      scientific: 'FliC Axoneme & Proton-Driven Basal Body',
      phonetic: 'Pronounced: /fləˈdʒɛl.əm/ (Latin: flagellum "whip")',
      subtitle: 'Archimedean Screw Propulsion Engine',
      color: '#D6E2E8',
      colorName: '#D6E2E8 Gossamer Silver',
      scale: 'Filament: 20 nm wide × 10–15 µm long | Motor: 45 nm diameter',
      abundance: '3 to 8 peritrichous helical filaments per cell',
      composition: 'FliC flagellin protofilaments + MS/P/L/C protein rings + MotA/B stators',
      description: 'A sophisticated supramolecular nanomachine providing bacterial motility. The motor spans the outer membrane, peptidoglycan wall, periplasmic space, and inner membrane. Driven by proton flow through MotA/MotB stators down the electrochemical gradient, the basal body spins at 200–1,000 RPM, rotating the helical flagellin filament to propel the cell in a "run and tumble" chemotactic migration.',
      proteins: [
        { name: 'Flagellin (FliC)', tag: 'Filament Subunit', desc: 'Globular protein polymerizing into an 11-protofilament hollow helical cylinder.' },
        { name: 'MotA / MotB Proton Stators', tag: 'Ion Turbines', desc: 'Transmembrane proton-conducting channels converting electrochemical gradient into torque.' },
        { name: 'FliG / FliM / FliN (C-Ring Switch)', tag: 'Direction Rotor', desc: 'Chemotaxis-responsive rotor switch reversing rotation from counter-clockwise (run) to clockwise (tumble).' }
      ],
      camPos: new THREE.Vector3(-4.50, 0.30, 4.60),
      camTarget: new THREE.Vector3(-3.792, -0.896, 1.741)
    }
  };

  const landmarks = [
    {
      id: 'label-membrane',
      key: 'membrane',
      name: 'periplasmic space & membrane',
      pos: new THREE.Vector3(0.625, 0.652, -1.348), // Upper golden plasma membrane lip
      screenOffset: { x: 240, y: -70 }
    },
    {
      id: 'label-nucleoid',
      key: 'nucleoid',
      name: 'nucleoid',
      pos: new THREE.Vector3(0.098, 0.647, 0.304), // Top crest loop of supercoiled chromosome
      screenOffset: { x: 280, y: -15 }
    },
    {
      id: 'label-ribosomes',
      key: 'ribosomes',
      name: 'ribosomes',
      pos: new THREE.Vector3(1.574, 0.356, 0.293), // Prominent individual ribosome bead on floor
      screenOffset: { x: 220, y: 40 }
    },
    {
      id: 'label-plasmid',
      key: 'plasmid',
      name: 'plasmids',
      pos: new THREE.Vector3(-0.058, 0.184, 0.576), // Top rim of front circular blue plasmid ring
      screenOffset: { x: 250, y: 85 }
    },
    {
      id: 'label-cytoplasm',
      key: 'cytoplasm',
      name: 'cytoplasm & proteins',
      pos: new THREE.Vector3(0.35, -0.05, 0.40), // Exposed colloidal bedding floor
      screenOffset: { x: 220, y: 130 }
    },
    {
      id: 'label-wall',
      key: 'wall',
      name: 'cell wall',
      pos: new THREE.Vector3(-0.594, -0.182, 1.627), // Cut porous green sandstone wall face
      screenOffset: { x: 170, y: 175 }
    },
    {
      id: 'label-capsule',
      key: 'capsule',
      name: 'capsule',
      pos: new THREE.Vector3(-0.957, -0.285, 1.854), // Outer translucent capsule shell boundary
      screenOffset: { x: 110, y: 225 }
    },
    {
      id: 'label-flagellum',
      key: 'flagellum',
      name: 'flagellum & motor',
      pos: new THREE.Vector3(-3.792, -0.896, 1.741), // Trailing sinusoidal flagellar filament
      screenOffset: { x: -90, y: 70 }
    }
  ];

  // --------------------------------------------------------------------------
  // 5. Smooth Cinematic Camera Transitions
  // --------------------------------------------------------------------------
  const camTransition = {
    active: false,
    startPos: new THREE.Vector3(),
    endPos: new THREE.Vector3(),
    startTarget: new THREE.Vector3(),
    endTarget: new THREE.Vector3(),
    currentTarget: new THREE.Vector3(-0.6, 0.0, 0.0),
    startTime: 0,
    duration: 1300
  };

  function flyCameraTo(pos, target, duration = 1300) {
    camTransition.active = true;
    camTransition.startPos.copy(camera.position);
    camTransition.endPos.copy(pos);

    // Current camera lookAt direction vector
    const dir = new THREE.Vector3();
    camera.getWorldDirection(dir);
    camTransition.startTarget.copy(camera.position).addScaledVector(dir, 5.0);
    camTransition.endTarget.copy(target);

    camTransition.startTime = performance.now();
    camTransition.duration = duration;
  }

  // --------------------------------------------------------------------------
  // 6. Anatomy Inspector Drawer Management
  // --------------------------------------------------------------------------
  let currentActiveTarget = null;

  function openInspector(key) {
    const data = ANATOMY_DATA[key];
    if (!data) return;

    currentActiveTarget = key;

    drawerZone.textContent = data.zone;
    drawerTitle.textContent = data.title;
    if (drawerScientificTitle) drawerScientificTitle.textContent = data.scientific || '';
    drawerSubtitle.textContent = data.subtitle;
    if (drawerPhonetic) drawerPhonetic.textContent = data.phonetic || '';
    if (drawerScientificName) drawerScientificName.textContent = data.scientific || data.title;
    drawerSwatch.style.backgroundColor = data.color;
    drawerScale.textContent = data.scale;
    drawerAbundance.textContent = data.abundance;
    drawerComposition.textContent = data.composition;
    drawerColorHex.textContent = data.colorName;
    drawerDescription.textContent = data.description;

    // Render key proteins list
    drawerProteinsList.innerHTML = '';
    if (data.proteins && data.proteins.length > 0) {
      data.proteins.forEach((p) => {
        const li = document.createElement('li');
        li.className = 'protein-item';
        li.innerHTML = `
          <div class="protein-item-top">
            <span class="protein-name">${p.name}</span>
            <span class="protein-tag">${p.tag}</span>
          </div>
          <p class="protein-desc">${p.desc}</p>
        `;
        drawerProteinsList.appendChild(li);
      });
    }

    // Highlight matching label in viewport
    document.querySelectorAll('.bio-label').forEach((lbl) => {
      lbl.classList.toggle('active-target', lbl.getAttribute('data-target') === key);
    });

    // Show drill-down button if flagellum is inspected
    if (drawerDrilldownBtn) {
      if (key === 'flagellum') {
        drawerDrilldownBtn.classList.remove('hidden');
      } else {
        drawerDrilldownBtn.classList.add('hidden');
      }
    }

    inspectorDrawer.classList.remove('closed');
    const appContainer = document.getElementById('app-container');
    if (appContainer) appContainer.classList.add('drawer-open');
  }

  function closeInspector() {
    voiceService.stop();
    inspectorDrawer.classList.add('closed');
    const appContainer = document.getElementById('app-container');
    if (appContainer) appContainer.classList.remove('drawer-open');
    document.querySelectorAll('.bio-label').forEach((lbl) => lbl.classList.remove('active-target'));
    currentActiveTarget = null;
  }

  drawerCloseBtn.addEventListener('click', closeInspector);

  drawerFocusBtn.addEventListener('click', () => {
    if (currentActiveTarget && ANATOMY_DATA[currentActiveTarget]) {
      flyCameraTo(ANATOMY_DATA[currentActiveTarget].camPos, ANATOMY_DATA[currentActiveTarget].camTarget);
    }
  });

  // --------------------------------------------------------------------------
  // 6b. Multi-Scale Navigation & Flagellar Motor Scenario Orchestration
  // --------------------------------------------------------------------------
  function updateMotorInspector(key, meta) {
    if (!meta) return;
    currentMotorComponentMeta = meta;
    if (motorCompBadge) motorCompBadge.textContent = (meta.name || 'Component').toUpperCase();
    if (motorCompTitle) motorCompTitle.textContent = meta.name || '';
    if (motorCompDims) motorCompDims.textContent = meta.dimensions || '';
    if (motorCompProteins) motorCompProteins.textContent = meta.proteins || '';
    if (motorCompDesc) motorCompDesc.textContent = meta.role || '';

    // Render PDB chips
    if (motorCompPdb) {
      if (meta.pdb) {
        motorCompPdb.innerHTML = meta.pdb.split(',').map(p => `<span class="pdb-chip">PDB ${p.trim()}</span>`).join(' ');
      } else {
        motorCompPdb.innerHTML = '';
      }
    }

    // Update active chip in selector
    if (motorPartsChips) {
      const chips = motorPartsChips.querySelectorAll('.part-chip');
      chips.forEach(chip => {
        chip.classList.toggle('active', chip.dataset.part === key);
      });
    }
  }

  function switchToMotorScenario() {
    currentScenario = 'motor';
    if (tourActive) exitTour();
    voiceService.stop();

    // Update Scale Navigator buttons
    if (btnNavCell) btnNavCell.classList.remove('active');
    if (btnNavMotor) btnNavMotor.classList.add('active');

    // Hide Cell view and overlays
    if (canvasWrapper) canvasWrapper.classList.add('hidden');
    if (toolbar) toolbar.classList.add('hidden');
    if (scaleCard) scaleCard.classList.add('hidden');
    if (microCard) microCard.classList.add('hidden');
    closeInspector();

    // Show Motor scenario
    if (motorContainer) motorContainer.classList.remove('hidden');
    if (pageMainTitle) pageMainTitle.textContent = 'BACTERIAL FLAGELLAR ROTARY MOTOR & BASAL BODY';
    if (pageMainSubtitle) {
      pageMainSubtitle.textContent = 'Nature\'s 45-nanometer biological rotary turbine, driven by proton motive force across the bacterial envelope.';
    }

    // Lazy initialize FlagellarMotorScene
    if (!flagellarMotorInstance && motorContainer) {
      flagellarMotorInstance = new FlagellarMotorScene(motorContainer, {
        voiceService,
        onSelectComponent: (key, meta) => {
          updateMotorInspector(key, meta);
        }
      });
      flagellarMotorInstance.init();
      window.flagellarMotorInstance = flagellarMotorInstance;
    }

    if (flagellarMotorInstance) {
      flagellarMotorInstance.start();
      flagellarMotorInstance.setRepresentationMode('molecular');
      if (btnRepMolecular) btnRepMolecular.classList.add('active');
      if (btnRepSchematic) btnRepSchematic.classList.remove('active');
      // Frame complete motor + entire tail assembly in default overview
      flagellarMotorInstance.target.set(0, 65, 0);
      flagellarMotorInstance.spherical.radius = 275;
      flagellarMotorInstance.spherical.phi = 1.35;
      flagellarMotorInstance.updateCameraPosition();
      flagellarMotorInstance.updateLandmarksAndLeaders();
    }
  }

  function switchToCellScenario() {
    currentScenario = 'cell';
    voiceService.stop();

    if (flagellarMotorInstance) {
      flagellarMotorInstance.stop();
    }

    // Update Scale Navigator buttons
    if (btnNavCell) btnNavCell.classList.add('active');
    if (btnNavMotor) btnNavMotor.classList.remove('active');

    // Show Cell view and restore overlays
    if (motorContainer) motorContainer.classList.add('hidden');
    if (canvasWrapper) canvasWrapper.classList.remove('hidden');
    if (toolbar) toolbar.classList.remove('hidden');
    if (scaleCard) scaleCard.classList.remove('hidden');
    if (microCard) microCard.classList.remove('hidden');
    if (pageMainTitle) pageMainTitle.textContent = 'A TYPICAL PROKARYOTIC CELL';
    if (pageMainSubtitle) {
      pageMainSubtitle.textContent = 'Prokaryotes are small but highly organized, with specialized structures that support efficient life processes.';
    }

    updateLandmarksAndLeaders();
  }

  // Connect Navigation triggers
  if (btnNavCell) btnNavCell.addEventListener('click', switchToCellScenario);
  if (btnNavMotor) btnNavMotor.addEventListener('click', switchToMotorScenario);
  if (btnMotorBack) btnMotorBack.addEventListener('click', switchToCellScenario);
  if (drawerDrilldownBtn) drawerDrilldownBtn.addEventListener('click', switchToMotorScenario);

  // Motor Controls HUD listeners
  if (btnMotorCcw) {
    btnMotorCcw.addEventListener('click', () => {
      if (flagellarMotorInstance) flagellarMotorInstance.setDirection('CCW');
      btnMotorCcw.classList.add('active');
      if (btnMotorCw) btnMotorCw.classList.remove('active');
    });
  }

  if (btnMotorCw) {
    btnMotorCw.addEventListener('click', () => {
      if (flagellarMotorInstance) flagellarMotorInstance.setDirection('CW');
      btnMotorCw.classList.add('active');
      if (btnMotorCcw) btnMotorCcw.classList.remove('active');
    });
  }

  if (btnMotorPause) {
    btnMotorPause.addEventListener('click', () => {
      if (flagellarMotorInstance) {
        flagellarMotorInstance.isPaused = !flagellarMotorInstance.isPaused;
        btnMotorPause.textContent = flagellarMotorInstance.isPaused ? '▶ Resume' : '⏸ Pause';
        btnMotorPause.classList.toggle('active', flagellarMotorInstance.isPaused);
      }
    });
  }

  if (motorExplodedSlider && explodedVal) {
    motorExplodedSlider.addEventListener('input', (e) => {
      const val = parseFloat(e.target.value);
      explodedVal.textContent = `${Math.round(val)}%`;
      if (flagellarMotorInstance) {
        flagellarMotorInstance.setExplodedProgress(val / 100);
      }
    });
  }

  if (motorSpeedSlider && speedVal) {
    motorSpeedSlider.addEventListener('input', (e) => {
      const val = parseFloat(e.target.value);
      speedVal.textContent = `${Math.round(val)}%`;
      if (flagellarMotorInstance) {
        flagellarMotorInstance.setSpeed(val / 100);
      }
    });
  }

  // Representation Mode listeners
  if (btnRepMolecular) {
    btnRepMolecular.addEventListener('click', () => {
      if (flagellarMotorInstance) flagellarMotorInstance.setRepresentationMode('molecular');
      btnRepMolecular.classList.add('active');
      if (btnRepSchematic) btnRepSchematic.classList.remove('active');
    });
  }

  if (btnRepSchematic) {
    btnRepSchematic.addEventListener('click', () => {
      if (flagellarMotorInstance) flagellarMotorInstance.setRepresentationMode('schematic');
      btnRepSchematic.classList.add('active');
      if (btnRepMolecular) btnRepMolecular.classList.remove('active');
    });
  }

  // Molecular parts chips selector
  if (motorPartsChips) {
    motorPartsChips.addEventListener('click', (e) => {
      const btn = e.target.closest('.part-chip');
      if (btn && btn.dataset.part && flagellarMotorInstance) {
        motorPartsChips.querySelectorAll('.part-chip').forEach(c => c.classList.remove('active'));
        btn.classList.add('active');

        if (btn.dataset.part === 'molecular_7cgo' || btn.dataset.part === 'molecular_6ykm') {
          flagellarMotorInstance.setRepresentationMode('molecular');
          if (btnRepMolecular) btnRepMolecular.classList.add('active');
          if (btnRepSchematic) btnRepSchematic.classList.remove('active');
          flagellarMotorInstance.selectComponent(btn.dataset.part);
        } else {
          // All sub-components exist in both authentic Molecular Nodes and Schematic modes!
          // Maintain active representation mode and focus directly on the selected component.
          flagellarMotorInstance.selectComponent(btn.dataset.part);
        }
      }
    });
  }

  // Membrane toggle listener
  if (btnToggleMembrane) {
    btnToggleMembrane.addEventListener('click', () => {
      if (flagellarMotorInstance) {
        const isVis = flagellarMotorInstance.toggleMembranes();
        btnToggleMembrane.classList.toggle('active', isVis);
        btnToggleMembrane.textContent = isVis
          ? '🔬 Cell Envelope Membranes: Visible'
          : '🔬 Cell Envelope Membranes: Hidden';
      }
    });
  }

  // 3D Anatomy Tags toggle listener
  const btnMotorLabels = document.getElementById('btn-motor-labels');
  if (btnMotorLabels) {
    btnMotorLabels.addEventListener('click', () => {
      if (flagellarMotorInstance) {
        const isVis = flagellarMotorInstance.toggleLabels();
        btnMotorLabels.classList.toggle('active', isVis);
        btnMotorLabels.textContent = isVis
          ? '🏷 Anatomy Tags: ON'
          : '🏷 Anatomy Tags: OFF';
      }
    });
  }

  // Camera Mode: CS Free-Look vs Orbit Turntable toggle
  const btnCamMode = document.getElementById('btn-cam-mode');
  if (btnCamMode) {
    btnCamMode.addEventListener('click', () => {
      if (flagellarMotorInstance) {
        const mode = flagellarMotorInstance.toggleCameraMode();
        btnCamMode.classList.toggle('active', mode === 'freelook');
        btnCamMode.textContent = (mode === 'freelook')
          ? '🕹️ Camera Mode: CS Free-Look (WASD)'
          : '🔄 Camera Mode: Orbit Turntable';
      }
    });
  }

  // Motor inspector TTS Narration
  if (motorCompTtsBtn) {
    motorCompTtsBtn.addEventListener('click', () => {
      if (voiceService.isBusy()) {
        voiceService.stop();
      } else if (currentMotorComponentMeta) {
        const speech = `${currentMotorComponentMeta.name}. ${currentMotorComponentMeta.role}`;
        voiceService.playText(speech);
      }
    });
  }

  // Blueprint Reference Modal Listeners
  if (btnOpenBlueprint && blueprintModal) {
    btnOpenBlueprint.addEventListener('click', () => {
      blueprintModal.classList.remove('hidden');
    });
  }

  if (btnCloseBlueprint && blueprintModal) {
    btnCloseBlueprint.addEventListener('click', () => {
      blueprintModal.classList.add('hidden');
    });
  }

  if (blueprintModal) {
    blueprintModal.addEventListener('click', (e) => {
      if (e.target === blueprintModal) {
        blueprintModal.classList.add('hidden');
      }
    });
  }

  // Label Click Handlers: Open Inspector and focus camera on click
  document.querySelectorAll('.bio-label').forEach((el) => {
    el.addEventListener('click', () => {
      const targetKey = el.getAttribute('data-target');
      if (targetKey && ANATOMY_DATA[targetKey]) {
        if (tourActive && tourPlaying) {
          toggleTourPlay(); // Pause tour for manual exploration
        }
        openInspector(targetKey);
        flyCameraTo(ANATOMY_DATA[targetKey].camPos, ANATOMY_DATA[targetKey].camTarget);
      }
    });
  });

  // --------------------------------------------------------------------------
  // 7. Cinematic Guided Tour ("Story Mode" / Autoplay)
  // --------------------------------------------------------------------------
  // 7. Guided Interactive Tour System with Voice Narration Synchronization
  // --------------------------------------------------------------------------
  const TOUR_STOPS = ['overview', 'capsule', 'wall', 'membrane', 'cytoplasm', 'ribosomes', 'nucleoid', 'plasmid', 'flagellum'];
  let tourActive = false;
  let tourPlaying = false;
  let currentTourStep = 0;
  let tourStepId = 0; // Incremented on every step to prevent race conditions
  let tourPhase = 'idle'; // 'idle' | 'narrating' | 'cooldown' | 'reading'
  let tourCooldownTimer = 0;
  const TOUR_COOLDOWN_DURATION = 3000; // 3 seconds pause after narration ends, as requested
  let tourReadingTimer = 0;
  const TOUR_READING_DURATION = 10000; // 10 seconds per step if voice is turned off
  let lastTourTick = 0;

  function updateTourBadge() {
    if (!tourActive) return;
    const base = `STEP ${currentTourStep + 1} OF ${TOUR_STOPS.length}`;
    if (!tourPlaying) {
      tourStepBadge.textContent = `${base} • ⏸ PAUSED`;
    } else if (tourPhase === 'narrating') {
      tourStepBadge.textContent = `${base} • 🔊 SPEAKING`;
    } else if (tourPhase === 'cooldown') {
      const remainingSec = Math.max(1, Math.ceil((TOUR_COOLDOWN_DURATION - tourCooldownTimer) / 1000));
      tourStepBadge.textContent = `${base} • NEXT IN ${remainingSec}s`;
    } else if (tourPhase === 'reading') {
      tourStepBadge.textContent = `${base} • 📖 READING`;
    } else {
      tourStepBadge.textContent = base;
    }
  }

  function startTour() {
    tourActive = true;
    tourPlaying = true;
    btnTour.classList.add('active');
    btnTour.textContent = '🎬 Tour: ON';
    tourBar.classList.remove('hidden');
    tourPlayPause.textContent = '⏸ Pause';
    tourPlayPause.classList.add('primary-tour-btn');
    goToTourStep(0);
  }

  function exitTour() {
    tourStepId++;
    tourPhase = 'idle';
    voiceService.stop();
    tourActive = false;
    tourPlaying = false;
    btnTour.classList.remove('active');
    btnTour.textContent = '🎬 Guided Tour';
    tourBar.classList.add('hidden');
    tourTimerFill.style.width = '0%';
    closeInspector();
    flyCameraTo(ANATOMY_DATA.overview.camPos, ANATOMY_DATA.overview.camTarget);
  }

  function goToTourStep(index) {
    if (index < 0) index = TOUR_STOPS.length - 1;
    if (index >= TOUR_STOPS.length) index = 0;
    
    currentTourStep = index;
    const thisStepId = ++tourStepId;
    
    // Reset state & progress bar
    tourCooldownTimer = 0;
    tourReadingTimer = 0;
    tourTimerFill.style.width = '0%';

    const key = TOUR_STOPS[currentTourStep];
    const data = ANATOMY_DATA[key];

    tourStepBadge.textContent = `STEP ${currentTourStep + 1} OF ${TOUR_STOPS.length}`;
    tourStepTitle.textContent = data.title;

    openInspector(key);
    flyCameraTo(data.camPos, data.camTarget);

    if (!tourActive) return;

    if (tourTtsEnabled) {
      tourPhase = 'narrating';
      updateTourBadge();
      narrateTourStep(currentTourStep, key, thisStepId);
    } else {
      tourPhase = 'reading';
      updateTourBadge();
    }
  }

  function nextTourStep() {
    goToTourStep(currentTourStep + 1);
  }

  function prevTourStep() {
    goToTourStep(currentTourStep - 1);
  }

  function toggleTourPlay() {
    tourPlaying = !tourPlaying;
    tourPlayPause.textContent = tourPlaying ? '⏸ Pause' : '▶ Play';
    tourPlayPause.classList.toggle('primary-tour-btn', tourPlaying);

    if (!tourPlaying) {
      // Paused: stop active speech so it doesn't talk during manual pause
      if (voiceService.isBusy()) {
        voiceService.stop();
      }
      updateTourBadge();
    } else {
      // Resumed:
      if (tourPhase === 'narrating' && tourTtsEnabled) {
        const key = TOUR_STOPS[currentTourStep];
        narrateTourStep(currentTourStep, key, tourStepId);
      }
      updateTourBadge();
    }
  }

  btnTour.addEventListener('click', () => {
    if (tourActive) {
      exitTour();
    } else {
      startTour();
    }
  });

  tourPrev.addEventListener('click', prevTourStep);
  tourNext.addEventListener('click', nextTourStep);
  tourPlayPause.addEventListener('click', toggleTourPlay);
  tourExit.addEventListener('click', exitTour);

  // --------------------------------------------------------------------------
  // 7b. Kokoro-82M Text-to-Speech (TTS) Integration
  // --------------------------------------------------------------------------
  let tourTtsEnabled = true;

  // 1. Sync voice dropdown with persisted preference
  if (ttsVoiceSelect) {
    ttsVoiceSelect.value = voiceService.getSelectedVoice();
    ttsVoiceSelect.addEventListener('change', (e) => {
      voiceService.setSelectedVoice(e.target.value);
    });
  }

  // 2. Observer for synthesis and playback state changes
  voiceService.onStateChange((state, detail) => {
    const selectedVoiceId = detail.voice || voiceService.getSelectedVoice();
    const personaObj = CURATED_VOICES.find(v => v.id === selectedVoiceId);
    const personaName = personaObj ? personaObj.name.split(' ')[0] : 'Voice';

    // Update Toolbar Button
    if (btnTtsNarrate) {
      if (state === 'synthesizing') {
        btnTtsNarrate.classList.add('synthesizing');
        btnTtsNarrate.classList.remove('playing');
        if (ttsMainIcon) ttsMainIcon.textContent = '⏳';
        if (ttsMainText) ttsMainText.textContent = 'Synthesizing...';
        if (ttsMainSpinner) ttsMainSpinner.classList.remove('hidden');
      } else if (state === 'playing') {
        btnTtsNarrate.classList.remove('synthesizing');
        btnTtsNarrate.classList.add('playing');
        if (ttsMainIcon) ttsMainIcon.textContent = '⏹';
        if (ttsMainText) ttsMainText.textContent = 'Stop';
        if (ttsMainSpinner) ttsMainSpinner.classList.add('hidden');
      } else {
        btnTtsNarrate.classList.remove('synthesizing', 'playing');
        if (ttsMainIcon) ttsMainIcon.textContent = '🔊';
        if (ttsMainText) ttsMainText.textContent = 'Narrate';
        if (ttsMainSpinner) ttsMainSpinner.classList.add('hidden');
      }
    }

    // Update Drawer Button & Status Label
    if (drawerTtsBtn) {
      if (state === 'synthesizing') {
        drawerTtsBtn.classList.add('synthesizing');
        drawerTtsBtn.classList.remove('playing');
        if (drawerTtsIcon) drawerTtsIcon.textContent = '⏳';
        if (drawerTtsLabel) drawerTtsLabel.textContent = 'Synthesizing...';
        if (drawerTtsSpinner) drawerTtsSpinner.classList.remove('hidden');
        if (drawerTtsStatus) {
          drawerTtsStatus.textContent = `Synthesizing (${personaName})...`;
          drawerTtsStatus.classList.add('active');
        }
      } else if (state === 'playing') {
        drawerTtsBtn.classList.remove('synthesizing');
        drawerTtsBtn.classList.add('playing');
        if (drawerTtsIcon) drawerTtsIcon.textContent = '⏹';
        if (drawerTtsLabel) drawerTtsLabel.textContent = 'Stop';
        if (drawerTtsSpinner) drawerTtsSpinner.classList.add('hidden');
        if (drawerTtsStatus) {
          drawerTtsStatus.textContent = `Narrating (${personaName})`;
          drawerTtsStatus.classList.add('active');
        }
      } else {
        drawerTtsBtn.classList.remove('synthesizing', 'playing');
        if (drawerTtsIcon) drawerTtsIcon.textContent = '🔊';
        if (drawerTtsLabel) drawerTtsLabel.textContent = 'Read Aloud';
        if (drawerTtsSpinner) drawerTtsSpinner.classList.add('hidden');
        if (drawerTtsStatus) {
          drawerTtsStatus.textContent = state === 'error' ? (detail.error || 'TTS Error') : 'Ready';
          drawerTtsStatus.classList.remove('active');
        }
      }
    }
  });

  // 3. Speech generation handler for individual organelles
  function narrateOrganelle(key) {
    const data = ANATOMY_DATA[key] || ANATOMY_DATA.overview;
    if (!data) return;

    let narrative = `${data.title}. `;
    if (data.scientific) {
      narrative += `Scientific name: ${data.scientific}. `;
    }
    if (data.subtitle) {
      narrative += `${data.subtitle}. `;
    }
    narrative += data.description;

    const chosenVoice = ttsVoiceSelect ? ttsVoiceSelect.value : voiceService.getSelectedVoice();
    voiceService.playText(narrative, { voice: chosenVoice });
  }

  // 4. Tour step narration handler with completion synchronization
  function narrateTourStep(stepIndex, key, thisStepId) {
    if (!tourTtsEnabled || !tourActive) return;
    const data = ANATOMY_DATA[key];
    if (!data) return;

    const tourSpeech = `Step ${stepIndex + 1} of ${TOUR_STOPS.length}: ${data.title}. ${data.description}`;
    const chosenVoice = ttsVoiceSelect ? ttsVoiceSelect.value : voiceService.getSelectedVoice();

    voiceService.playText(tourSpeech, {
      voice: chosenVoice,
      onStart: () => {
        if (!tourActive || tourStepId !== thisStepId) return;
        tourPhase = 'narrating';
        updateTourBadge();
      },
      onEnd: () => {
        // Voice reproduction ended! Begin the 3-second delay requested by user
        if (!tourActive || tourStepId !== thisStepId) return;
        tourPhase = 'cooldown';
        tourCooldownTimer = 0;
        updateTourBadge();
      },
      onError: (err) => {
        console.warn('[Tour] Narration error:', err);
        if (!tourActive || tourStepId !== thisStepId) return;
        tourPhase = 'cooldown';
        tourCooldownTimer = 0;
        updateTourBadge();
      }
    });
  }

  // 5. Connect UI Triggers
  if (drawerTtsBtn) {
    drawerTtsBtn.addEventListener('click', () => {
      if (voiceService.isBusy()) {
        voiceService.stop();
      } else {
        narrateOrganelle(currentActiveTarget || 'overview');
      }
    });
  }

  if (btnTtsNarrate) {
    btnTtsNarrate.addEventListener('click', () => {
      if (voiceService.isBusy()) {
        voiceService.stop();
      } else {
        narrateOrganelle(currentActiveTarget || 'overview');
      }
    });
  }

  if (tourTtsToggle) {
    tourTtsToggle.addEventListener('click', () => {
      tourTtsEnabled = !tourTtsEnabled;
      tourTtsToggle.classList.toggle('active', tourTtsEnabled);
      tourTtsToggle.textContent = tourTtsEnabled ? '🔊 Voice: ON' : '🔈 Voice: OFF';
      if (!tourTtsEnabled) {
        voiceService.stop();
        if (tourActive && tourPlaying) {
          tourPhase = 'reading';
          tourReadingTimer = 0;
          updateTourBadge();
        }
      } else if (tourActive && tourPlaying) {
        const key = TOUR_STOPS[currentTourStep];
        tourPhase = 'narrating';
        updateTourBadge();
        narrateTourStep(currentTourStep, key, tourStepId);
      }
    });
  }

  // --------------------------------------------------------------------------
  // 8. Landmark Projection and SVG Leader Lines
  // --------------------------------------------------------------------------
  function updateLandmarksAndLeaders() {
    if (!showLabels) {
      svgOverlay.innerHTML = '';
      labelsContainer.style.display = 'none';
      return;
    }
    labelsContainer.style.display = 'block';

    const width = window.innerWidth;
    const height = window.innerHeight;
    let svgLines = '';

    landmarks.forEach((item) => {
      const el = document.getElementById(item.id);
      if (!el) return;

      // Exact pixel-perfect projection locked to the 3D mesh surface
      const v = item.pos.clone().project(camera);
      const isVisible = v.z > -1 && v.z < 1;
      const screenX = (v.x * 0.5 + 0.5) * width;
      const screenY = (-v.y * 0.5 + 0.5) * height;

      if (isVisible && screenX > 0 && screenX < width && screenY > 0 && screenY < height) {
        el.style.opacity = '1';
        const labelX = screenX + item.screenOffset.x;
        const labelY = screenY + item.screenOffset.y;
        el.style.left = `${labelX}px`;
        el.style.top = `${labelY}px`;

        const halfW = el.offsetWidth ? (el.offsetWidth * 0.5) : 75;
        const lineEndX = item.screenOffset.x >= 0 ? (labelX - halfW - 2) : (labelX + halfW + 2);

        // SVG Hairline Leader line connecting 3D anchor to HTML label
        const anchorDotRadius = 2.5;
        svgLines += `
          <g class="leader-group">
            <circle cx="${screenX}" cy="${screenY}" r="${anchorDotRadius}" fill="#2E3A2B" />
            <polyline points="${screenX},${screenY} ${screenX + item.screenOffset.x * 0.45},${labelY} ${lineEndX},${labelY}" 
                      fill="none" stroke="#2E3A2B" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round" opacity="0.85" />
          </g>
        `;
      } else {
        el.style.opacity = '0';
      }
    });

    svgOverlay.innerHTML = svgLines;
  }

  // --------------------------------------------------------------------------
  // 9. Inset Microcompartment Mini Canvas (Icosahedron + RuBisCO pearls)
  // --------------------------------------------------------------------------
  const microCanvas = document.getElementById('micro-canvas');
  const microCtx = microCanvas.getContext('2d');
  let microAngle = 0;

  function drawMicrocompartment() {
    const w = microCanvas.width;
    const h = microCanvas.height;
    microCtx.clearRect(0, 0, w, h);

    // Warm background
    microCtx.fillStyle = '#EFE9DD';
    microCtx.fillRect(0, 0, w, h);

    const cx = w * 0.5;
    const cy = h * 0.5;
    const R = 38;

    microCtx.save();
    microCtx.translate(cx, cy);

    // Outer icosahedral facet ring (sage green)
    microCtx.fillStyle = '#738C6D';
    microCtx.strokeStyle = '#53684E';
    microCtx.lineWidth = 1.5;

    const sides = 8;
    microCtx.beginPath();
    for (let i = 0; i < sides; i++) {
      const a = (i / sides) * Math.PI * 2 + microAngle * 0.2;
      const x = Math.cos(a) * R;
      const y = Math.sin(a) * R;
      if (i === 0) microCtx.moveTo(x, y);
      else microCtx.lineTo(x, y);
    }
    microCtx.closePath();
    microCtx.fill();
    microCtx.stroke();

    // Inner cavity cutaway
    microCtx.fillStyle = '#445440';
    microCtx.beginPath();
    microCtx.arc(0, 0, R * 0.72, 0, Math.PI * 2);
    microCtx.fill();

    // Packed purple RuBisCO cargo pearls
    const pearls = [
      { x: -9, y: -8, r: 7 },
      { x: 7, y: -7, r: 6.5 },
      { x: -5, y: 7, r: 7.5 },
      { x: 10, y: 6, r: 6 },
      { x: 0, y: -1, r: 8 }
    ];

    pearls.forEach((p) => {
      const grad = microCtx.createRadialGradient(p.x - 2, p.y - 2, 1, p.x, p.y, p.r);
      grad.addColorStop(0, '#9D7BB8');
      grad.addColorStop(0.7, '#644380');
      grad.addColorStop(1, '#3B2152');
      microCtx.fillStyle = grad;
      microCtx.beginPath();
      microCtx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
      microCtx.fill();
    });

    microCtx.restore();
    microAngle += 0.02;
  }

  // --------------------------------------------------------------------------
  // 10. User Pointer / Mouse / Touch Controls Connected to WebAssembly
  // --------------------------------------------------------------------------
  let cellPointerButton = 0;
  let cellShiftDown = false;

  canvas.addEventListener('contextmenu', (e) => e.preventDefault());

  canvas.addEventListener('pointerdown', (e) => {
    isPointerDown = true;
    cellPointerButton = e.button;
    cellShiftDown = e.shiftKey;
    lastPointerX = e.clientX;
    lastPointerY = e.clientY;
    canvas.setPointerCapture(e.pointerId);

    // If user interacts manually during tour, pause autoplay
    if (tourActive && tourPlaying) {
      toggleTourPlay();
    }
  });

  canvas.addEventListener('pointermove', (e) => {
    if (!isPointerDown) return;
    const dx = e.clientX - lastPointerX;
    const dy = e.clientY - lastPointerY;
    lastPointerX = e.clientX;
    lastPointerY = e.clientY;

    const isPan = (cellPointerButton === 2) || (cellPointerButton === 1) || (cellPointerButton === 0 && (e.shiftKey || cellShiftDown));

    if (isPan) {
      // Free 2D Pan in camera view plane for whole cell
      if (wasm && wasm.get_cam_x) {
        const rad = Math.hypot(wasm.get_cam_x() - wasm.get_target_x(), wasm.get_cam_y() - wasm.get_target_y(), wasm.get_cam_z() - wasm.get_target_z());
        const factor = rad * 0.0014;
        const right = new THREE.Vector3();
        const up = new THREE.Vector3();
        camera.matrixWorld.extractBasis(right, up, new THREE.Vector3());

        const tx = wasm.get_target_x() - right.x * dx * factor + up.x * dy * factor;
        const ty = wasm.get_target_y() - right.y * dx * factor + up.y * dy * factor;
        const tz = wasm.get_target_z() - right.z * dx * factor + up.z * dy * factor;

        const relX = wasm.get_cam_x() - wasm.get_target_x();
        const relY = wasm.get_cam_y() - wasm.get_target_y();
        const relZ = wasm.get_cam_z() - wasm.get_target_z();
        const theta = Math.atan2(relX, relZ);
        const phi = Math.acos(Math.max(-1, Math.min(1, relY / (rad || 1))));
        wasm.init_engine(theta, phi, rad, tx, ty, tz);
      }
    } else {
      if (wasm && wasm.add_orbit_impulse) {
        wasm.add_orbit_impulse(dx * 0.005, -dy * 0.005);
      }
    }
  });

  canvas.addEventListener('pointerup', (e) => {
    isPointerDown = false;
    try { canvas.releasePointerCapture(e.pointerId); } catch (_) {}
  });

  canvas.addEventListener('wheel', (e) => {
    e.preventDefault();
    if (tourActive && tourPlaying) {
      toggleTourPlay();
    }
    if (wasm && wasm.add_zoom_impulse) {
      wasm.add_zoom_impulse(e.deltaY * 0.008);
    }
  }, { passive: false });

  // Whole-cell ASDW & Arrow keys continuous keyboard navigation
  window.addEventListener('keydown', (e) => {
    if (currentScenario !== 'cell') return;
    if (e.target.tagName === 'INPUT' || e.target.tagName === 'TEXTAREA') return;

    // Video game / Counter-Strike free-look navigation for cell overview
    if (e.code === 'KeyW' || e.code === 'ArrowUp') {
      if (wasm && wasm.add_zoom_impulse) wasm.add_zoom_impulse(-0.85); // Fly forward
    } else if (e.code === 'KeyS' || e.code === 'ArrowDown') {
      if (wasm && wasm.add_zoom_impulse) wasm.add_zoom_impulse(0.85); // Fly backward
    } else if (e.code === 'KeyA' || e.code === 'ArrowLeft') {
      panCellCamera(-0.35, 0); // Strafe left
    } else if (e.code === 'KeyD' || e.code === 'ArrowRight') {
      panCellCamera(0.35, 0); // Strafe right
    } else if (e.code === 'Space') {
      panCellCamera(0, 0.35); // Fly up
    } else if (e.code === 'KeyC' || e.code === 'ControlLeft' || e.code === 'ControlRight') {
      panCellCamera(0, -0.35); // Fly down
    } else if (e.code === 'KeyQ') {
      if (wasm && wasm.add_zoom_impulse) wasm.add_zoom_impulse(-0.8);
    } else if (e.code === 'KeyE') {
      if (wasm && wasm.add_zoom_impulse) wasm.add_zoom_impulse(0.8);
    } else if (e.code === 'KeyR') {
      if (wasm && wasm.init_engine) wasm.init_engine(0.54, 0.98, 10.8, -0.6, 0.0, 0.0);
    }
  });

  function panCellCamera(deltaX, deltaY) {
    if (!wasm || !wasm.get_cam_x) return;
    const rad = Math.hypot(wasm.get_cam_x() - wasm.get_target_x(), wasm.get_cam_y() - wasm.get_target_y(), wasm.get_cam_z() - wasm.get_target_z());
    const right = new THREE.Vector3();
    const up = new THREE.Vector3();
    camera.matrixWorld.extractBasis(right, up, new THREE.Vector3());

    const tx = wasm.get_target_x() + right.x * deltaX + up.x * deltaY;
    const ty = wasm.get_target_y() + right.y * deltaX + up.y * deltaY;
    const tz = wasm.get_target_z() + right.z * deltaX + up.z * deltaY;

    const relX = wasm.get_cam_x() - wasm.get_target_x();
    const relY = wasm.get_cam_y() - wasm.get_target_y();
    const relZ = wasm.get_cam_z() - wasm.get_target_z();
    const theta = Math.atan2(relX, relZ);
    const phi = Math.acos(Math.max(-1, Math.min(1, relY / (rad || 1))));
    wasm.init_engine(theta, phi, rad, tx, ty, tz);
  }

  // Toolbar Button Interactions
  btnReset.addEventListener('click', () => {
    if (tourActive) exitTour();
    if (wasm && wasm.init_engine) {
      wasm.init_engine(0.54, 0.98, 10.8, -0.6, 0.0, 0.0);
    }
  });

  btnAutoRotate.addEventListener('click', () => {
    isAutoRotating = !isAutoRotating;
    btnAutoRotate.classList.toggle('active', isAutoRotating);
  });

  btnLabels.addEventListener('click', () => {
    showLabels = !showLabels;
    btnLabels.classList.toggle('active', showLabels);
    btnLabels.textContent = showLabels ? '🏷 Labels: ON' : '🏷 Labels: OFF';
    updateLandmarksAndLeaders();
  });

  window.addEventListener('resize', () => {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
    updateLandmarksAndLeaders();
  });

  // --------------------------------------------------------------------------
  // 11. Render Loop Executing at 120 FPS
  // --------------------------------------------------------------------------
  function animate() {
    requestAnimationFrame(animate);

    // 1. Smooth Camera Transition
    if (camTransition.active) {
      const elapsed = performance.now() - camTransition.startTime;
      const t = Math.min(1.0, elapsed / camTransition.duration);
      // Cubic easeInOut
      const ease = t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;

      camera.position.lerpVectors(camTransition.startPos, camTransition.endPos, ease);
      camTransition.currentTarget.lerpVectors(camTransition.startTarget, camTransition.endTarget, ease);
      camera.lookAt(camTransition.currentTarget);

      if (t >= 1.0) {
        camTransition.active = false;
        // Sync WASM engine
        if (wasm && wasm.init_engine) {
          const relX = camera.position.x - camTransition.currentTarget.x;
          const relY = camera.position.y - camTransition.currentTarget.y;
          const relZ = camera.position.z - camTransition.currentTarget.z;
          const rad = Math.sqrt(relX * relX + relY * relY + relZ * relZ);
          const theta = Math.atan2(relX, relZ);
          const phi = Math.acos(Math.max(-1, Math.min(1, relY / (rad || 1))));
          wasm.init_engine(theta, phi, rad, camTransition.currentTarget.x, camTransition.currentTarget.y, camTransition.currentTarget.z);
        }
      }
    } else if (wasm && wasm.step_physics) {
      // Step WebAssembly orbit physics with 0.88 damping
      wasm.step_physics(0.88, isAutoRotating ? 1 : 0);

      camera.position.set(wasm.get_cam_x(), wasm.get_cam_y(), wasm.get_cam_z());
      camera.lookAt(wasm.get_target_x(), wasm.get_target_y(), wasm.get_target_z());
    }

    // 2. Guided Tour State Machine & Autoplay Progression
    if (tourActive && tourPlaying && !camTransition.active) {
      const now = performance.now();
      if (!lastTourTick) lastTourTick = now;
      const delta = Math.min(now - lastTourTick, 100);

      if (tourPhase === 'narrating') {
        // Voice is actively speaking!
        // DO NOT ADVANCE! Wait until the voice reproduction ends!
        const pulse = 16 + Math.sin(now * 0.006) * 10;
        tourTimerFill.style.width = `${pulse}%`;
        tourTimerFill.style.background = '#64D2B4';
      } else if (tourPhase === 'cooldown') {
        // Voice reproduction has ended!
        // Wait 3 seconds before transitioning to the next step
        tourCooldownTimer += delta;
        const progress = Math.min(100, (tourCooldownTimer / TOUR_COOLDOWN_DURATION) * 100);
        tourTimerFill.style.width = `${progress}%`;
        tourTimerFill.style.background = '#D96B43';
        updateTourBadge();

        if (tourCooldownTimer >= TOUR_COOLDOWN_DURATION) {
          tourPhase = 'idle';
          nextTourStep();
        }
      } else if (tourPhase === 'reading') {
        // Voice is turned off, silent reading countdown
        tourReadingTimer += delta;
        const progress = Math.min(100, (tourReadingTimer / TOUR_READING_DURATION) * 100);
        tourTimerFill.style.width = `${progress}%`;
        tourTimerFill.style.background = '#D96B43';

        if (tourReadingTimer >= TOUR_READING_DURATION) {
          tourPhase = 'idle';
          nextTourStep();
        }
      }
    }
    lastTourTick = performance.now();

    // 3. Subtle Brownian Motion of Cytoplasmic Soup Solutes
    if (soupPoints) {
      soupPoints.rotation.y = Math.sin(Date.now() * 0.0004) * 0.015;
    }

    renderer.render(scene, camera);
    updateLandmarksAndLeaders();
    drawMicrocompartment();
  }

  animate();
})();
