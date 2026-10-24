"""
generate_eukaryote_frontend.py

Generates the complete TypeScript / React / Three.js Eukaryote Explorer (`client/src/eukaryote/`)
for all 36 Eukaryote scenarios (`01` through `36`) and wires the Domain Switcher in `client/src/App.tsx`.
"""

import os
import sys
import json

SCRIPT_DIR = os.path.dirname(os.path.abspath(__file__))
if SCRIPT_DIR not in sys.path:
    sys.path.insert(0, SCRIPT_DIR)

from euk_layout_spec import ALL_EUK_ELEMENTS, get_piece_layout_coords

EUK_DIR = os.path.dirname(SCRIPT_DIR)
REPO_DIR = os.path.dirname(EUK_DIR)
CLIENT_SRC = os.path.join(REPO_DIR, "client", "src")
EUK_SRC = os.path.join(CLIENT_SRC, "eukaryote")


def build_scenario_config_dict(elem: dict) -> dict:
    piece_specs = get_piece_layout_coords(elem)
    pieces_cfg = []
    for p in piece_specs:
        pieces_cfg.append({
            "meshName": p["meshName"],
            "name": p["name"],
            "badge": p["badge"],
            "color": p["color"],
            "desc": p["fullDesc"],
            "dissocVector": p["dissocVector"],
        })

    stages_cfg = []
    for idx, (st_title, st_desc) in enumerate(elem["stages"][:5]):
        target_p = pieces_cfg[idx % len(pieces_cfg)]
        stages_cfg.append({
            "step": idx + 1,
            "title": st_title.replace("Stage ", "").replace("—", ":"),
            "desc": st_desc[:96] + ("..." if len(st_desc) > 96 else ""),
            "spoken": f"{st_title}. {st_desc}",
            "color": target_p["color"],
            "targetPiece": target_p["meshName"],
        })

    hud0 = elem["hud_controls"][0] if elem.get("hud_controls") else ("flux_rate", "Biophysical Flux Rate", "0 to 100")
    hud2 = elem["hud_controls"][2] if len(elem.get("hud_controls", [])) >= 3 else ("inhibitor", "Pharmacological Inhibitor", "Active vs Inhibited")

    resources_list = [{"title": r_title, "url": r_url} for r_title, r_url in elem.get("resources", [])]
    resources_list.append({
        "title": "The Biology Primer — Prokaryotic & Eukaryotic Cells (NCBI / OpenStax)",
        "url": "https://www.ncbi.nlm.nih.gov/books/NBK21054/",
    })

    return {
        "num": elem["num"],
        "id": elem["id"],
        "folder": elem["folder"],
        "tier": elem["tier"].split("(")[0].strip(),
        "title": elem["title"].upper(),
        "subtitle": elem["overview"][:170] + "...",
        "analogy": elem["behavior"],
        "scaleTag": f"EUKARYOTE SCENARIO {elem['num']} • {elem['scale'].upper()} • PDB: {elem['pdb1']} / {elem['pdb2']}",
        "glb": f"/eukaryote/models/{elem['id']}.glb",
        "pdb": f"{elem['pdb1']}, {elem['pdb2']}",
        "pronounce": f"[{elem['id'].replace('_', '-')}]",
        "sliderLabel": f"{hud0[1].upper()}:",
        "sliderUnit": "% nominal",
        "sliderMin": 0,
        "sliderMax": 200,
        "sliderDefault": 100,
        "inhibitorBtn": [f"☣️ {hud2[1][:22]}", "🛡️ Native Physiological"],
        "energyBtn": [f"⚡ {elem['energy_currency'][:20]}", "🛑 Energy Depleted"],
        "upstream": elem["upstream"][:125],
        "coupling": f"Inputs: {elem['inputs'][0][:58]} ➔ Outputs: {elem['outputs'][0][:58]}",
        "downstream": elem["downstream"][:125],
        "kinetics": [
            ["TURNOVER / KINETICS", elem["turnover"][:44]],
            ["ENERGY CURRENCY", elem["energy_currency"][:44]],
            ["BIOPHYSICAL SCALE", elem["scale"][:44]],
            ["PRIMARY RCSB PDBS", f"{elem['pdb1']} & {elem['pdb2']}"],
        ],
        "resources": resources_list,
        "pieces": pieces_cfg,
        "stages": stages_cfg,
    }


def write_types_file():
    types_dir = os.path.join(EUK_SRC, "types")
    os.makedirs(types_dir, exist_ok=True)
    ids_union = "\n  | ".join([f"'{e['id']}'" for e in ALL_EUK_ELEMENTS])
    content = f"""export type EukaryoteScenarioId =
  | {ids_union};

export interface EukaryotePieceConfig {{
  meshName: string;
  name: string;
  badge: string;
  color: string;
  desc: string;
  dissocVector: [number, number, number];
}}

export interface EukaryoteStageConfig {{
  step: number;
  title: string;
  desc: string;
  spoken: string;
  color: string;
  targetPiece: string;
}}

export interface EukaryoteResourceLink {{
  title: string;
  url: string;
}}

export interface EukaryoteScenarioConfig {{
  num: string;
  id: EukaryoteScenarioId;
  folder: string;
  tier: string;
  title: string;
  subtitle: string;
  analogy?: string;
  scaleTag: string;
  glb: string;
  pdb: string;
  pronounce: string;
  sliderLabel: string;
  sliderUnit: string;
  sliderMin: number;
  sliderMax: number;
  sliderDefault: number;
  inhibitorBtn: [string, string];
  energyBtn: [string, string];
  upstream: string;
  coupling: string;
  downstream: string;
  kinetics: [string, string][];
  resources: EukaryoteResourceLink[];
  pieces: EukaryotePieceConfig[];
  stages: EukaryoteStageConfig[];
}}
"""
    with open(os.path.join(types_dir, "eukaryoteBiology.ts"), "w", encoding="utf-8") as f:
        f.write(content)


def write_config_file():
    core_dir = os.path.join(EUK_SRC, "core")
    os.makedirs(core_dir, exist_ok=True)
    cfg_map = {}
    cfg_list = []
    for e in ALL_EUK_ELEMENTS:
        d = build_scenario_config_dict(e)
        cfg_map[e["id"]] = d
        cfg_list.append(d)

    content = f"""import type {{ EukaryoteScenarioId, EukaryoteScenarioConfig }} from '../types/eukaryoteBiology';

export const EUKARYOTE_SCENARIOS_LIST: EukaryoteScenarioConfig[] = {json.dumps(cfg_list, indent=2, ensure_ascii=False)};

export const EUKARYOTE_SCENARIOS_CONFIG: Record<EukaryoteScenarioId, EukaryoteScenarioConfig> = {json.dumps(cfg_map, indent=2, ensure_ascii=False)} as Record<EukaryoteScenarioId, EukaryoteScenarioConfig>;
"""
    with open(os.path.join(core_dir, "eukaryoteScenariosConfig.ts"), "w", encoding="utf-8") as f:
        f.write(content)


def write_scene_file():
    core_dir = os.path.join(EUK_SRC, "core")
    os.makedirs(core_dir, exist_ok=True)
    content = """import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';
import type { EukaryoteScenarioId, EukaryotePieceConfig } from '../types/eukaryoteBiology';
import { EUKARYOTE_SCENARIOS_CONFIG } from './eukaryoteScenariosConfig';
import { KeyboardFlightController } from '../../prokaryote/core/keyboardNavigation';

export class EukaryoteScenarioScene {
  private container: HTMLElement;
  private scene: THREE.Scene;
  private camera: THREE.PerspectiveCamera;
  private renderer: THREE.WebGLRenderer;
  private controls: OrbitControls;
  private animFrameId: number | null = null;
  private active: boolean = false;
  private clock = new THREE.Clock();
  private keyboardFlight: KeyboardFlightController | null = null;

  private currentScenarioId: EukaryoteScenarioId = 'eukaryotic_animal_cell';
  private modelCache: Map<EukaryoteScenarioId, THREE.Group> = new Map();
  private activeGroup: THREE.Group | null = null;
  private pieceNodes: Map<string, THREE.Object3D> = new Map();
  private pieceBasePositions: Map<string, THREE.Vector3> = new Map();
  private pieceWorldCentroids: Map<string, THREE.Vector3> = new Map();

  private svgLayer: SVGSVGElement | null = null;
  private isLabelsVisible: boolean = true;

  private explodedProgress: number = 0.0;
  private isPaused: boolean = false;
  private isInhibited: boolean = false;
  private isEnergyActive: boolean = true;

  private camLerpProgress: number = 1.0;
  private camStartPos = new THREE.Vector3();
  private camEndPos = new THREE.Vector3();
  private camStartTarget = new THREE.Vector3();
  private camEndTarget = new THREE.Vector3();

  private onSelectPiece: (piece: EukaryotePieceConfig) => void;

  constructor(
    container: HTMLElement,
    callbacks: {
      onSelectPiece: (piece: EukaryotePieceConfig) => void;
    }
  ) {
    this.container = container;
    this.onSelectPiece = callbacks.onSelectPiece;

    const width = this.container.clientWidth || window.innerWidth;
    const height = this.container.clientHeight || window.innerHeight;

    this.scene = new THREE.Scene();
    this.scene.background = new THREE.Color(0x060e20);

    this.camera = new THREE.PerspectiveCamera(40, width / height, 0.1, 1000);
    this.camera.position.set(0, 4.2, 18.8);

    this.renderer = new THREE.WebGLRenderer({ antialias: true, alpha: false, powerPreference: 'high-performance' });
    this.renderer.setSize(width, height);
    this.renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    this.renderer.toneMapping = THREE.ACESFilmicToneMapping;
    this.renderer.toneMappingExposure = 1.25;
    this.container.appendChild(this.renderer.domElement);

    this.controls = new OrbitControls(this.camera, this.renderer.domElement);
    this.controls.enableDamping = true;
    this.controls.dampingFactor = 0.06;
    this.controls.target.set(0, 0, 0);

    this.setupLighting();
    this.setupSVGOverlay();
    this.setupRaycasting();

    this.keyboardFlight = new KeyboardFlightController({
      camera: this.camera,
      controls: this.controls,
      isActive: () => this.active,
      onReset: () => this.resetCamera(),
      onUpdate: () => this.updateSVGLeaders()
    });

    window.addEventListener('resize', this.handleResize);
  }

  private setupLighting(): void {
    const ambient = new THREE.AmbientLight(0xffffff, 1.45);
    this.scene.add(ambient);

    const dirLight1 = new THREE.DirectionalLight(0xffffff, 2.3);
    dirLight1.position.set(18, 28, 24);
    this.scene.add(dirLight1);

    const dirLight2 = new THREE.DirectionalLight(0x00f5d4, 1.25);
    dirLight2.position.set(-20, -15, -18);
    this.scene.add(dirLight2);

    const rimLight = new THREE.DirectionalLight(0x3a86ff, 1.15);
    rimLight.position.set(0, -22, 18);
    this.scene.add(rimLight);

    const goldGlow = new THREE.PointLight(0xffb703, 2.0, 20);
    goldGlow.position.set(0, 2.0, 3.0);
    this.scene.add(goldGlow);
  }

  private setupSVGOverlay(): void {
    const existing = document.getElementById('eukaryote-svg-overlay') as SVGSVGElement | null;
    if (existing) {
      this.svgLayer = existing;
    } else {
      this.svgLayer = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
      this.svgLayer.id = 'eukaryote-svg-overlay';
      this.svgLayer.style.position = 'absolute';
      this.svgLayer.style.top = '0';
      this.svgLayer.style.left = '0';
      this.svgLayer.style.width = '100%';
      this.svgLayer.style.height = '100%';
      this.svgLayer.style.pointerEvents = 'none';
      this.svgLayer.style.zIndex = '15';
      this.container.appendChild(this.svgLayer);
    }
  }

  private setupRaycasting(): void {
    const raycaster = new THREE.Raycaster();
    const mouse = new THREE.Vector2();

    this.renderer.domElement.addEventListener('pointerdown', (event: MouseEvent) => {
      if (event.button !== 0 || !this.activeGroup) return;
      const rect = this.renderer.domElement.getBoundingClientRect();
      mouse.x = ((event.clientX - rect.left) / rect.width) * 2 - 1;
      mouse.y = -((event.clientY - rect.top) / rect.height) * 2 + 1;

      raycaster.setFromCamera(mouse, this.camera);
      const intersects = raycaster.intersectObjects(this.activeGroup.children, true);
      if (intersects.length > 0) {
        let hit: THREE.Object3D | null = intersects[0].object;
        while (hit && !hit.name.startsWith('Piece_') && hit.parent !== this.activeGroup) {
          hit = hit.parent;
        }
        if (hit && hit.name.startsWith('Piece_')) {
          this.selectPiece(hit.name);
        }
      }
    });
  }

  public loadScenario(scenarioId: EukaryoteScenarioId): void {
    this.currentScenarioId = scenarioId;
    this.explodedProgress = 0.0;

    if (this.activeGroup) {
      this.scene.remove(this.activeGroup);
      this.activeGroup = null;
    }

    const cfg = EUKARYOTE_SCENARIOS_CONFIG[scenarioId];
    if (!cfg) return;

    const cached = this.modelCache.get(scenarioId);
    if (cached) {
      this.mountGroup(cached, cfg.pieces);
      return;
    }

    const loader = new GLTFLoader();
    loader.load(
      `${cfg.glb}?v=euk_mn_v1`,
      (gltf) => {
        const group = gltf.scene;
        const box = new THREE.Box3().setFromObject(group);
        const size = new THREE.Vector3();
        const center = new THREE.Vector3();
        box.getSize(size);
        box.getCenter(center);
        const maxDim = Math.max(size.x, size.y, size.z, 0.001);
        const targetSpan = 9.8;
        const scale = targetSpan / maxDim;
        group.scale.setScalar(scale);
        group.position.set(-center.x * scale, -center.y * scale, -center.z * scale);

        cfg.pieces.forEach((pieceCfg) => {
          const node = group.getObjectByName(pieceCfg.meshName);
          if (node) {
            const fallbackCol = new THREE.Color(pieceCfg.color);
            node.traverse((child) => {
              if (child instanceof THREE.Mesh) {
                const origMat = child.material as THREE.MeshStandardMaterial | undefined;
                const keepCustomColor =
                  origMat &&
                  origMat.name &&
                  (origMat.name.startsWith('Mat_CPK_') || origMat.name.startsWith('Mat_Keep_'));
                const col = keepCustomColor && origMat.color ? origMat.color.clone() : fallbackCol;
                if (child.geometry && child.geometry.attributes && child.geometry.attributes.color) {
                  child.geometry.deleteAttribute('color');
                }
                child.material = new THREE.MeshStandardMaterial({
                  color: col,
                  emissive: col,
                  emissiveIntensity: 0.15,
                  roughness: 0.35,
                  metalness: 0.10,
                  transparent: false,
                  opacity: 1.0,
                  depthWrite: true,
                  side: THREE.DoubleSide
                });
              }
            });
          }
        });

        this.modelCache.set(scenarioId, group);
        if (this.currentScenarioId === scenarioId) {
          this.mountGroup(group, cfg.pieces);
        }
      },
      undefined,
      (err) => {
        console.error(`[-] Failed to load Eukaryote GLB for ${scenarioId}:`, err);
      }
    );
  }

  private mountGroup(group: THREE.Group, pieces: EukaryotePieceConfig[]): void {
    this.activeGroup = group;
    this.scene.add(group);
    this.pieceNodes.clear();
    this.pieceBasePositions.clear();
    this.pieceWorldCentroids.clear();

    group.updateMatrixWorld(true);

    pieces.forEach((p) => {
      const obj = group.getObjectByName(p.meshName);
      if (obj) {
        this.pieceNodes.set(p.meshName, obj);
        if (!obj.userData.basePos) {
          obj.userData.basePos = obj.position.clone();
        } else {
          obj.position.copy(obj.userData.basePos);
        }
        this.pieceBasePositions.set(p.meshName, obj.userData.basePos.clone());

        const pBox = new THREE.Box3().setFromObject(obj);
        const pCenter = new THREE.Vector3();
        pBox.getCenter(pCenter);
        this.pieceWorldCentroids.set(p.meshName, pCenter);
      }
    });

    this.resetCamera();
    if (pieces.length > 0) {
      this.onSelectPiece(pieces[0]);
    }
    this.updateSVGLeaders();
  }

  public setExplodedProgress(progress: number): void {
    this.explodedProgress = Math.max(0, Math.min(1, progress));
    const cfg = EUKARYOTE_SCENARIOS_CONFIG[this.currentScenarioId];
    if (!cfg || !this.activeGroup) return;

    const invScale = 1.0 / (this.activeGroup.scale.x || 1.0);
    cfg.pieces.forEach((p) => {
      const obj = this.pieceNodes.get(p.meshName);
      const base = this.pieceBasePositions.get(p.meshName);
      if (obj && base) {
        const off = new THREE.Vector3(
          p.dissocVector[0] * this.explodedProgress * invScale * 0.75,
          p.dissocVector[1] * this.explodedProgress * invScale * 0.75,
          p.dissocVector[2] * this.explodedProgress * invScale * 0.75
        );
        obj.position.copy(base).add(off);
      }
    });

    this.activeGroup.updateMatrixWorld(true);
    cfg.pieces.forEach((p) => {
      const obj = this.pieceNodes.get(p.meshName);
      if (obj) {
        const pBox = new THREE.Box3().setFromObject(obj);
        const pCenter = new THREE.Vector3();
        pBox.getCenter(pCenter);
        this.pieceWorldCentroids.set(p.meshName, pCenter);
      }
    });
  }

  public selectPiece(meshName: string): void {
    const cfg = EUKARYOTE_SCENARIOS_CONFIG[this.currentScenarioId];
    if (!cfg) return;
    const found = cfg.pieces.find((p) => p.meshName === meshName);
    if (found) {
      this.onSelectPiece(found);
      this.highlightPiece(meshName);
    }
  }

  public focusPiece(meshName: string): void {
    this.selectPiece(meshName);
    const centroid = this.pieceWorldCentroids.get(meshName);
    if (centroid) {
      const camPos = centroid.clone().add(new THREE.Vector3(0, 3.2, 13.5));
      this.flyCameraTo(camPos, centroid.clone());
    }
  }

  private highlightPiece(targetMesh: string | null): void {
    this.pieceNodes.forEach((obj, name) => {
      const isTarget = !targetMesh || name === targetMesh;
      obj.traverse((child) => {
        if (child instanceof THREE.Mesh && child.material instanceof THREE.MeshStandardMaterial) {
          child.material.emissiveIntensity = !targetMesh ? 0.16 : isTarget ? 0.42 : 0.08;
          child.material.opacity = isTarget ? 1.0 : 0.72;
          child.material.transparent = !isTarget;
        }
      });
    });
  }

  public setLabelsVisible(visible: boolean): void {
    this.isLabelsVisible = visible;
    if (this.svgLayer) {
      this.svgLayer.style.display = visible ? 'block' : 'none';
    }
  }

  public toggleLabels(): boolean {
    this.setLabelsVisible(!this.isLabelsVisible);
    return this.isLabelsVisible;
  }

  public toggleAutoRotate(): boolean {
    this.controls.autoRotate = !this.controls.autoRotate;
    this.controls.autoRotateSpeed = 1.2;
    return this.controls.autoRotate;
  }

  public setPaused(paused: boolean): void {
    this.isPaused = paused;
  }

  public setInhibited(inhibited: boolean): void {
    this.isInhibited = inhibited;
  }

  public setEnergyActive(active: boolean): void {
    this.isEnergyActive = active;
  }

  public resetCamera(): void {
    this.flyCameraTo(new THREE.Vector3(0, 4.2, 18.8), new THREE.Vector3(0, 0.0, 0));
    this.highlightPiece(null);
  }

  public flyCameraTo(pos: THREE.Vector3, target: THREE.Vector3): void {
    this.camStartPos.copy(this.camera.position);
    this.camEndPos.copy(pos);
    this.camStartTarget.copy(this.controls.target);
    this.camEndTarget.copy(target);
    this.camLerpProgress = 0.0;
  }

  private updateSVGLeaders(): void {
    if (!this.svgLayer || !this.isLabelsVisible) return;
    const cfg = EUKARYOTE_SCENARIOS_CONFIG[this.currentScenarioId];
    if (!cfg) return;

    const width = this.container.clientWidth || window.innerWidth;
    const height = this.container.clientHeight || window.innerHeight;
    const midX = width * 0.5;
    let html = '';

    type AnchorInfo = {
      p: EukaryotePieceConfig;
      sx: number;
      sy: number;
      side: number;
      ly: number;
    };

    const rawItems: AnchorInfo[] = [];
    cfg.pieces.forEach((p, idx) => {
      const worldPos = this.pieceWorldCentroids.get(p.meshName);
      if (!worldPos) return;
      const screenPos = worldPos.clone().project(this.camera);
      if (screenPos.z > 1.0) return;
      const sx = ((screenPos.x + 1) * width) / 2;
      const sy = ((-screenPos.y + 1) * height) / 2;
      const side = sx < midX - 15 ? -1 : sx > midX + 15 ? 1 : idx % 2 === 0 ? -1 : 1;
      rawItems.push({ p, sx, sy, side, ly: sy });
    });

    [-1, 1].forEach((sideVal) => {
      const col = rawItems.filter((it) => it.side === sideVal).sort((a, b) => a.sy - b.sy);
      const minGap = 36;
      const minY = 125;
      const maxY = height - 75;
      for (let i = 0; i < col.length; i++) {
        if (i === 0) {
          col[i].ly = Math.max(minY, Math.min(maxY, col[i].sy));
        } else {
          col[i].ly = Math.max(col[i - 1].ly + minGap, Math.min(maxY, col[i].sy));
        }
      }
      for (let i = col.length - 1; i >= 0; i--) {
        if (i === col.length - 1) {
          col[i].ly = Math.min(maxY, col[i].ly);
        } else {
          col[i].ly = Math.min(col[i].ly, col[i + 1].ly - minGap);
        }
      }
    });

    rawItems.forEach(({ p, sx, sy, side, ly }) => {
      const pillWidth = Math.max(145, p.name.slice(0, 26).length * 6.3 + 46);
      const marginOffset = 225;
      const lx = side > 0 ? Math.max(sx + 70, midX + marginOffset) : Math.min(sx - 70, midX - marginOffset);
      const cardX = side > 0 ? lx : lx - pillWidth;

      html += `
        <g class="roadmap-leader-item" data-mesh="${p.meshName}" style="pointer-events: auto; cursor: pointer;">
          <line x1="${sx}" y1="${sy}" x2="${lx}" y2="${ly}" stroke="${p.color}" stroke-width="1.35" stroke-dasharray="3 2" opacity="0.88" />
          <circle cx="${sx}" cy="${sy}" r="3.5" fill="${p.color}" />
          <circle cx="${sx}" cy="${sy}" r="7" stroke="${p.color}" stroke-width="1" fill="none" opacity="0.65" />
          <g transform="translate(${cardX}, ${ly - 13})">
            <rect width="${pillWidth}" height="26" rx="13" fill="rgba(6, 14, 32, 0.90)" stroke="${p.color}" stroke-width="1.3" />
            <circle cx="15" cy="13" r="8.5" fill="${p.color}" />
            <text x="15" y="16.5" font-size="8.5" font-weight="bold" fill="#000" text-anchor="middle" font-family="monospace">${p.badge.slice(0, 5)}</text>
            <text x="29" y="16.5" font-size="10" font-weight="600" fill="#f8fafc" font-family="sans-serif">${p.name.slice(0, 26)}</text>
          </g>
        </g>
      `;
    });

    this.svgLayer.innerHTML = html;
    const items = this.svgLayer.querySelectorAll('.roadmap-leader-item');
    items.forEach((item) => {
      item.addEventListener('click', (e) => {
        e.stopPropagation();
        const meshName = item.getAttribute('data-mesh');
        if (meshName) {
          this.focusPiece(meshName);
        }
      });
    });
  }

  private animate = (): void => {
    if (!this.active) return;
    this.animFrameId = requestAnimationFrame(this.animate);

    const delta = this.clock.getDelta();
    const time = this.clock.getElapsedTime();

    if (this.keyboardFlight) {
      this.keyboardFlight.update(delta);
    }

    if (this.camLerpProgress < 1.0) {
      this.camLerpProgress = Math.min(1.0, this.camLerpProgress + delta * 2.2);
      const ease = 0.5 - 0.5 * Math.cos(this.camLerpProgress * Math.PI);
      this.camera.position.lerpVectors(this.camStartPos, this.camEndPos, ease);
      this.controls.target.lerpVectors(this.camStartTarget, this.camEndTarget, ease);
    }

    this.controls.update();

    if (this.activeGroup && !this.isPaused && !this.isInhibited && this.isEnergyActive) {
      this.activeGroup.rotation.y = Math.sin(time * 0.35) * 0.14;
    }

    this.updateSVGLeaders();
    this.renderer.render(this.scene, this.camera);
  };

  public start(): void {
    if (!this.active) {
      this.active = true;
      this.clock.start();
      this.animate();
    }
  }

  public stop(): void {
    this.active = false;
    if (this.keyboardFlight) {
      this.keyboardFlight.resetKeys();
    }
    if (this.animFrameId !== null) {
      cancelAnimationFrame(this.animFrameId);
      this.animFrameId = null;
    }
  }

  public handleResize = (): void => {
    const width = this.container.clientWidth || window.innerWidth;
    const height = this.container.clientHeight || window.innerHeight;
    this.camera.aspect = width / height;
    this.camera.updateProjectionMatrix();
    this.renderer.setSize(width, height);
  };

  public dispose(): void {
    this.stop();
    window.removeEventListener('resize', this.handleResize);
    this.controls.dispose();
    this.renderer.dispose();
  }
}
"""
    with open(os.path.join(core_dir, "eukaryoteScenarioScene.ts"), "w", encoding="utf-8") as f:
        f.write(content)


def write_explorer_component():
    content = """import { useEffect, useRef, useState } from 'react';
import type { EukaryoteScenarioId, EukaryotePieceConfig } from './types/eukaryoteBiology';
import { EUKARYOTE_SCENARIOS_LIST, EUKARYOTE_SCENARIOS_CONFIG } from './core/eukaryoteScenariosConfig';
import { EukaryoteScenarioScene } from './core/eukaryoteScenarioScene';
import { TourBar } from '../prokaryote/components/Tour/TourBar';
import { LiveSubtitles } from '../prokaryote/components/Viewport/LiveSubtitles';
import voiceService from '../prokaryote/core/voiceService';

export default function EukaryoteExplorer() {
  const [scenarioId, setScenarioId] = useState<EukaryoteScenarioId>('eukaryotic_animal_cell');
  const cfg = EUKARYOTE_SCENARIOS_CONFIG[scenarioId];

  const containerRef = useRef<HTMLDivElement | null>(null);
  const sceneRef = useRef<EukaryoteScenarioScene | null>(null);
  const autoAdvanceTimerRef = useRef<number | null>(null);

  const [selectedPiece, setSelectedPiece] = useState<EukaryotePieceConfig>(cfg.pieces[0]);
  const [isPaused, setIsPaused] = useState(false);
  const [isInhibited, setIsInhibited] = useState(false);
  const [isEnergyActive, setIsEnergyActive] = useState(true);
  const [sliderVal, setSliderVal] = useState<number>(cfg.sliderDefault);
  const [explodedProgress, setExplodedProgress] = useState<number>(0);
  const [isLabelsVisible, setIsLabelsVisible] = useState<boolean>(true);
  const [isAutoRotating, setIsAutoRotating] = useState<boolean>(false);
  const [storyStep, setStoryStep] = useState<number>(0);
  const [isTourActive, setIsTourActive] = useState<boolean>(false);
  const [isNarrating, setIsNarrating] = useState<boolean>(false);
  const [selectedVoice] = useState<string>('af_heart');

  const [subtitles, setSubtitles] = useState<{
    visible: boolean;
    text: string;
    badge: string;
    speaker: string;
  }>({ visible: false, text: '', badge: '', speaker: '' });

  const showSubtitles = (text: string, badge: string, speaker: string) => {
    setSubtitles({ visible: true, text, badge, speaker });
  };

  const hideSubtitles = () => {
    setSubtitles((prev) => ({ ...prev, visible: false }));
  };

  const clearAutoAdvance = () => {
    if (autoAdvanceTimerRef.current !== null) {
      window.clearTimeout(autoAdvanceTimerRef.current);
      autoAdvanceTimerRef.current = null;
    }
  };

  useEffect(() => {
    if (!containerRef.current) return;
    if (!sceneRef.current) {
      const sc = new EukaryoteScenarioScene(containerRef.current, {
        onSelectPiece: (p) => setSelectedPiece(p)
      });
      sceneRef.current = sc;
      (window as any).eukaryoteScene = sc;
    }
    return () => {
      clearAutoAdvance();
      if (sceneRef.current) {
        sceneRef.current.dispose();
        sceneRef.current = null;
      }
    };
  }, []);

  useEffect(() => {
    clearAutoAdvance();
    if (!sceneRef.current) return;
    const nextCfg = EUKARYOTE_SCENARIOS_CONFIG[scenarioId];
    setSelectedPiece(nextCfg.pieces[0]);
    setSliderVal(nextCfg.sliderDefault);
    setExplodedProgress(0);
    setIsPaused(false);
    setIsInhibited(false);
    setIsEnergyActive(true);
    setStoryStep(0);
    setIsTourActive(false);
    setIsNarrating(false);

    sceneRef.current.start();
    sceneRef.current.handleResize();
    sceneRef.current.loadScenario(scenarioId);
  }, [scenarioId]);

  const stopStoryTrace = () => {
    clearAutoAdvance();
    voiceService.stop();
    setIsNarrating(false);
    setStoryStep(0);
    setIsTourActive(false);
    hideSubtitles();
    sceneRef.current?.resetCamera();
  };

  const handlePlayStage = (stepNum: number, autoAdvance: boolean = true) => {
    clearAutoAdvance();
    const currentCfg = EUKARYOTE_SCENARIOS_CONFIG[scenarioId];
    const stage = currentCfg.stages.find((s) => s.step === stepNum);
    if (!stage) {
      stopStoryTrace();
      return;
    }
    setStoryStep(stepNum);
    setIsTourActive(true);
    sceneRef.current?.focusPiece(stage.targetPiece);
    showSubtitles(stage.spoken, `STAGE ${stage.step} OF ${currentCfg.stages.length}: ${stage.title}`, 'Kokoro Neural TTS');
    setIsNarrating(true);
    voiceService.playText(stage.spoken, {
      voice: selectedVoice,
      onEnd: () => {
        setIsNarrating(false);
        if (autoAdvance) {
          autoAdvanceTimerRef.current = window.setTimeout(() => {
            if (stepNum < currentCfg.stages.length) {
              handlePlayStage(stepNum + 1, true);
            } else {
              stopStoryTrace();
            }
          }, 800);
        }
      },
      onError: () => {
        setIsNarrating(false);
      }
    });
  };

  const handleNarratePiece = () => {
    clearAutoAdvance();
    if (isNarrating || storyStep > 0) {
      stopStoryTrace();
      return;
    }
    const text = `${selectedPiece.name}. ${selectedPiece.desc}`;
    setIsNarrating(true);
    showSubtitles(text, selectedPiece.badge, 'Kokoro Neural TTS');
    voiceService.playText(text, {
      voice: selectedVoice,
      onEnd: () => {
        setIsNarrating(false);
        hideSubtitles();
      },
      onError: () => {
        setIsNarrating(false);
        hideSubtitles();
      }
    });
  };

  const pdbBadges = cfg.pdb.split(',').map((s) => s.trim());

  return (
    <div id="eukaryote-app-shell" style={{ width: '100vw', height: '100vh', overflow: 'hidden', position: 'relative' }}>
      {/* Editorial Top Header & 36-Scenario Scale Navigator */}
      <header id="editorial-header">
        <div className="header-top-row">
          <div className="scale-navigator" id="eukaryote-scale-navigator" style={{ overflowX: 'auto', maxWidth: '72vw', whiteSpace: 'nowrap' }}>
            <span className="scale-nav-tag">EUKARYOTE (36):</span>
            {EUKARYOTE_SCENARIOS_LIST.map((item) => {
              const isAct = item.id === scenarioId;
              return (
                <button
                  key={item.id}
                  id={`btn-euk-nav-${item.id}`}
                  data-num={item.num}
                  className={`scale-nav-btn ${isAct ? 'active' : ''}`}
                  onClick={() => setScenarioId(item.id)}
                  title={`${item.num}. ${item.title} (${item.pdb})`}
                  style={{ flexShrink: 0 }}
                >
                  <span className="scale-icon">🧬</span> {item.num} {item.id.split('_').slice(0, 2).join(' ')}{' '}
                  <span className="scale-dim">({item.pdb.split(',')[0]})</span>
                </button>
              );
            })}
          </div>

          <div className="toolbar-actions" style={{ display: 'flex', gap: '6px', alignItems: 'center' }}>
            <button
              className="toolbar-btn"
              onClick={() => (storyStep > 0 ? stopStoryTrace() : handlePlayStage(1, true))}
            >
              {storyStep > 0 ? '⏹ Stop Tour' : '🔊 Narrate'}
            </button>
            <button
              className="toolbar-btn"
              onClick={() => sceneRef.current?.resetCamera()}
            >
              ↺ Reset Camera
            </button>
            <button
              className={`toolbar-btn ${isAutoRotating ? 'active' : ''}`}
              onClick={() => {
                const next = sceneRef.current?.toggleAutoRotate() ?? false;
                setIsAutoRotating(next);
              }}
            >
              ⟳ Auto-Rotate
            </button>
            <button
              className={`toolbar-btn ${isLabelsVisible ? 'active' : ''}`}
              onClick={() => {
                const next = sceneRef.current?.toggleLabels() ?? true;
                setIsLabelsVisible(next);
              }}
            >
              🏷️ {isLabelsVisible ? 'Labels ON' : 'Labels OFF'}
            </button>
          </div>
        </div>
      </header>

      {/* Main Scenario Container */}
      <div id="eukaryote-scenario-container" style={{ display: 'block' }}>
        <div className="motor-overlay-header">
          {scenarioId !== 'eukaryotic_animal_cell' && (
            <button
              className="btn-back-cell"
              onClick={() => setScenarioId('eukaryotic_animal_cell')}
              title="Return to Whole Animal Cell (20 µm) Master Hub"
            >
              ← Whole Animal Cell (20 µm)
            </button>
          )}
          <div className="motor-header-text">
            <span className="motor-scale-tag">{cfg.scaleTag}</span>
            <h2 className="motor-main-heading">{cfg.title}</h2>
            <div style={{ fontSize: '11px', color: '#5C6E64', marginTop: '2px' }}>{cfg.subtitle}</div>
          </div>
        </div>

        {/* 3D WebGL Viewport */}
        <div
          id="eukaryote-viewport"
          className="canvas-container"
          ref={containerRef}
          tabIndex={0}
        />

        {/* Left HUD Simulation Card */}
        <div className="motor-hud-overlay" id="eukaryote-hud-overlay">
          <div className="motor-hud-card">
            <div className="motor-card-section">
              <span className="motor-section-title">BIOPHYSICAL DYNAMICS &amp; PERTURBATION</span>
              <div className="motor-btn-group">
                <button
                  className={`motor-mode-btn ${!isPaused ? 'active' : ''}`}
                  onClick={() => {
                    const next = !isPaused;
                    setIsPaused(next);
                    sceneRef.current?.setPaused(next);
                  }}
                >
                  {isPaused ? '▶ Resume' : '⏸ Pause'}
                </button>
                <button
                  className={`motor-mode-btn ${isInhibited ? 'active' : ''}`}
                  onClick={() => {
                    const next = !isInhibited;
                    setIsInhibited(next);
                    sceneRef.current?.setInhibited(next);
                  }}
                  style={{
                    background: isInhibited ? '#E63946' : '#06D6A0',
                    color: isInhibited ? '#FFFFFF' : '#000000',
                    fontWeight: 700
                  }}
                >
                  {isInhibited ? cfg.inhibitorBtn[0] : cfg.inhibitorBtn[1]}
                </button>
                <button
                  className={`motor-mode-btn ${isEnergyActive ? 'active' : ''}`}
                  onClick={() => {
                    const next = !isEnergyActive;
                    setIsEnergyActive(next);
                    sceneRef.current?.setEnergyActive(next);
                  }}
                  style={{
                    background: isEnergyActive ? '#00F5D4' : '#5C6E64',
                    color: '#000000',
                    fontWeight: 700
                  }}
                >
                  {isEnergyActive ? cfg.energyBtn[0] : cfg.energyBtn[1]}
                </button>
              </div>
            </div>

            {/* Primary Parameter Slider */}
            <div className="motor-card-section">
              <div className="motor-slider-header">
                <span className="motor-slider-label">{cfg.sliderLabel}</span>
                <span className="motor-slider-val" style={{ color: '#3A86FF', fontWeight: 800 }}>
                  {isPaused || isInhibited || !isEnergyActive
                    ? `STALLED (0 ${cfg.sliderUnit})`
                    : `${sliderVal} ${cfg.sliderUnit}`}
                </span>
              </div>
              <input
                type="range"
                min={cfg.sliderMin}
                max={cfg.sliderMax}
                step={(cfg.sliderMax - cfg.sliderMin) / 50}
                value={sliderVal}
                onChange={(e) => setSliderVal(parseFloat(e.target.value))}
                className="motor-slider-track"
              />
              <div className="motor-slider-scale">
                <span>Min ({cfg.sliderMin})</span>
                <span>Nominal ({cfg.sliderDefault})</span>
                <span>Max ({cfg.sliderMax})</span>
              </div>
            </div>

            {/* Exploded Assembly Slider */}
            <div className="motor-card-section">
              <div className="motor-slider-header">
                <span className="motor-slider-label">EXPLODED ASSEMBLY:</span>
                <span className="motor-slider-val">
                  {explodedProgress === 0
                    ? 'ASSEMBLED (0%)'
                    : explodedProgress === 1
                    ? 'FULLY DISSOCIATED (100%)'
                    : `${Math.round(explodedProgress * 100)}%`}
                </span>
              </div>
              <input
                type="range"
                min="0"
                max="1"
                step="0.01"
                value={explodedProgress}
                onChange={(e) => {
                  const val = parseFloat(e.target.value);
                  setExplodedProgress(val);
                  sceneRef.current?.setExplodedProgress(val);
                }}
                className="motor-slider-track"
              />
              <div className="motor-slider-scale">
                <span>Assembled (0%)</span>
                <span>Dissociated (v_dissoc)</span>
              </div>
            </div>

            {/* Quick Inspect Pieces */}
            <div className="motor-card-section">
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '6px' }}>
                <span className="motor-section-title" style={{ margin: 0 }}>QUICK INSPECT PIECES:</span>
                <button
                  className={`motor-mode-btn ${isLabelsVisible ? 'active' : ''}`}
                  onClick={() => {
                    const next = !isLabelsVisible;
                    setIsLabelsVisible(next);
                    sceneRef.current?.setLabelsVisible(next);
                  }}
                  style={{ padding: '2px 8px', fontSize: '10px' }}
                >
                  {isLabelsVisible ? '🏷️ Leaders On' : '🏷️ Leaders Off'}
                </button>
              </div>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '4px' }}>
                {cfg.pieces.map((p) => (
                  <button
                    key={p.meshName}
                    onClick={() => sceneRef.current?.focusPiece(p.meshName)}
                    style={{
                      background: 'rgba(255, 255, 255, 0.88)',
                      border: `1px solid ${p.color}`,
                      color: '#1E293B',
                      fontWeight: 600,
                      borderRadius: '12px',
                      padding: '3px 7px',
                      fontSize: '10px',
                      cursor: 'pointer',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '4px'
                    }}
                  >
                    <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: p.color }} />
                    {p.badge}
                  </button>
                ))}
              </div>
            </div>

            {/* Biophysical I/O Circuit Box */}
            <div style={{ marginTop: '4px', padding: '6px 8px', background: 'rgba(26, 43, 37, 0.06)', border: '1px solid rgba(26, 43, 37, 0.12)', borderRadius: '6px', fontSize: '10px', color: '#2D3E35' }}>
              <div><strong>UPSTREAM:</strong> {cfg.upstream}</div>
              <div style={{ marginTop: '2px' }}><strong>COUPLING:</strong> {cfg.coupling}</div>
              <div style={{ marginTop: '2px' }}><strong>DOWNSTREAM:</strong> {cfg.downstream}</div>
            </div>
          </div>
        </div>

        {/* Right Inspector Drawer */}
        <aside id="eukaryote-inspector" className="motor-inspector-drawer" style={{ userSelect: 'text' }}>
          <div className="motor-insp-header">
            <span className="motor-insp-badge">{selectedPiece.badge}</span>
            <h2 className="motor-insp-title">{selectedPiece.name}</h2>
            <div className="motor-insp-dims">PDB: {cfg.pdb}</div>
          </div>

          <div className="motor-tts-row">
            <button
              className={`motor-tts-btn ${isNarrating ? 'playing' : ''}`}
              onClick={handleNarratePiece}
            >
              {isNarrating ? '⏹ Stop' : '🔊 Read Aloud'}
            </button>
            <span className="motor-pronounce">🗣️ {cfg.pronounce}</span>
          </div>

          <div className="motor-insp-body">
            {/* 5-Stage Explanatory Trace */}
            <div className="motor-insp-block" style={{ borderLeft: '3px solid #00F5D4', background: 'rgba(0, 245, 212, 0.04)' }}>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '6px' }}>
                <span style={{ fontSize: '10px', fontWeight: 800, color: '#0F766E', letterSpacing: '0.08em', textTransform: 'uppercase' }}>
                  🎬 5-Stage Masterclass Trace
                </span>
                <button
                  onClick={() => (storyStep > 0 ? stopStoryTrace() : handlePlayStage(1, true))}
                  style={{
                    fontSize: '9.5px',
                    fontWeight: 800,
                    padding: '2px 8px',
                    borderRadius: '4px',
                    border: 'none',
                    cursor: 'pointer',
                    background: storyStep > 0 ? '#E63946' : '#00F5D4',
                    color: storyStep > 0 ? '#FFFFFF' : '#000000'
                  }}
                >
                  {storyStep > 0 ? `⏹ STOP (STAGE ${storyStep}/${cfg.stages.length})` : '▶ PLAY ALL 5 STAGES'}
                </button>
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '5px' }}>
                {cfg.stages.map((st) => {
                  const isActive = storyStep === st.step;
                  return (
                    <div
                      key={st.step}
                      onClick={() => handlePlayStage(st.step, true)}
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '8px',
                        padding: '5px 8px',
                        borderRadius: '6px',
                        background: isActive ? 'rgba(0, 245, 212, 0.16)' : 'rgba(255, 255, 255, 0.55)',
                        border: isActive ? `1.5px solid ${st.color}` : '1px solid rgba(226, 218, 205, 0.6)',
                        cursor: 'pointer'
                      }}
                    >
                      <span style={{
                        width: '18px',
                        height: '18px',
                        borderRadius: '50%',
                        background: isActive ? st.color : '#CBD5E1',
                        color: isActive ? '#000000' : '#475569',
                        fontSize: '10px',
                        fontWeight: 800,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        flexShrink: 0
                      }}>
                        {st.step}
                      </span>
                      <div style={{ flex: 1, minWidth: 0 }}>
                        <div style={{ fontSize: '10.5px', fontWeight: 700, color: '#1E293B' }}>{st.title}</div>
                        <div style={{ fontSize: '9px', color: '#64748B', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>{st.desc}</div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Role & Biophysical Mechanism */}
            <div className="motor-insp-block">
              <span className="motor-insp-block-title">ROLE &amp; BIOPHYSICAL MECHANISM</span>
              <p className="motor-insp-text">{selectedPiece.desc}</p>
            </div>

            {/* Biochemical Mechanism 2x2 Grid */}
            <div className="motor-insp-block">
              <span className="motor-insp-block-title">BIOCHEMICAL MECHANISM &amp; PARAMETERS</span>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '6px', marginTop: '4px' }}>
                {cfg.kinetics.map(([kLabel, kVal], idx) => (
                  <div key={idx} style={{ background: '#F8F6F0', padding: '6px 8px', borderRadius: '4px', border: '1px solid #E2DACD' }}>
                    <span style={{ fontSize: '9px', color: '#718096', fontWeight: 700, display: 'block' }}>{kLabel}</span>
                    <span style={{ fontSize: '10.5px', color: '#0F172A', fontWeight: 800 }}>{kVal}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Subunit Architecture List */}
            <div className="motor-insp-block">
              <span className="motor-insp-block-title">SUBUNIT ARCHITECTURE ({cfg.pieces.length} PIECES)</span>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '4px', marginTop: '6px' }}>
                {cfg.pieces.map((p) => {
                  const isSelected = selectedPiece.meshName === p.meshName;
                  return (
                    <button
                      key={p.meshName}
                      onClick={() => sceneRef.current?.focusPiece(p.meshName)}
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        padding: '6px 10px',
                        borderRadius: '4px',
                        border: isSelected ? `1.5px solid ${p.color}` : '1px solid #E2DACD',
                        background: isSelected ? 'rgba(0, 245, 212, 0.12)' : '#FFFFFF',
                        cursor: 'pointer',
                        textAlign: 'left'
                      }}
                    >
                      <div>
                        <div style={{ fontSize: '11px', fontWeight: 700, color: '#1B2A20' }}>
                          <span style={{ display: 'inline-block', width: '8px', height: '8px', borderRadius: '50%', background: p.color, marginRight: '6px' }} />
                          {p.name}
                        </div>
                        <div style={{ fontSize: '9.5px', color: '#5C6E64', marginLeft: '14px' }}>{p.desc.slice(0, 82)}...</div>
                      </div>
                      {isSelected && <span style={{ fontSize: '12px', color: '#00F5D4' }}>✓</span>}
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Curated Online Resources & Structural References */}
            <div className="motor-insp-block">
              <span className="motor-insp-block-title">CURATED ONLINE &amp; RCSB PDB REFERENCES</span>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '4px', marginTop: '4px', marginBottom: '6px' }}>
                {pdbBadges.map((pdbId) => (
                  <a
                    key={pdbId}
                    href={`https://www.rcsb.org/structure/${pdbId}`}
                    target="_blank"
                    rel="noreferrer"
                    style={{
                      background: '#1A365D',
                      color: '#90CDF4',
                      fontSize: '9.5px',
                      fontWeight: 700,
                      padding: '2px 7px',
                      borderRadius: '4px',
                      textDecoration: 'none'
                    }}
                  >
                    RCSB PDB: {pdbId} ↗
                  </a>
                ))}
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
                {cfg.resources.map((res, rIdx) => (
                  <a
                    key={rIdx}
                    href={res.url}
                    target="_blank"
                    rel="noreferrer"
                    style={{
                      fontSize: '10px',
                      color: '#0F766E',
                      textDecoration: 'underline',
                      lineHeight: 1.35
                    }}
                  >
                    • {res.title}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </aside>

        {(isTourActive || storyStep > 0) && (
          <TourBar
            status={{
              active: true,
              playing: isNarrating,
              stepIndex: Math.max(0, storyStep - 1),
              key: cfg.stages[Math.max(0, storyStep - 1)]?.targetPiece || cfg.pieces[0].meshName,
              totalSteps: cfg.stages.length,
              phase: isNarrating ? 'narrating' : 'cooldown',
              cooldownRemaining: 1,
              ttsEnabled: true
            }}
            stepTitle={cfg.stages[Math.max(0, storyStep - 1)]?.title || cfg.title}
            onPrev={() => handlePlayStage(Math.max(1, storyStep - 1), true)}
            onTogglePlay={() => {
              if (isNarrating) {
                clearAutoAdvance();
                voiceService.stop();
                setIsNarrating(false);
              } else {
                handlePlayStage(storyStep > 0 ? storyStep : 1, true);
              }
            }}
            onNext={() => handlePlayStage(Math.min(cfg.stages.length, (storyStep || 1) + 1), true)}
            onToggleVoice={() => {}}
            onExit={stopStoryTrace}
          />
        )}

        <LiveSubtitles
          visible={subtitles.visible}
          text={subtitles.text}
          badge={subtitles.badge}
          speaker={subtitles.speaker}
        />
      </div>
    </div>
  );
}
"""
    with open(os.path.join(EUK_SRC, "EukaryoteExplorer.tsx"), "w", encoding="utf-8") as f:
        f.write(content)


def write_app_tsx():
    content = """import { useState } from 'react';
import ProkaryoteExplorer from './prokaryote/ProkaryoteExplorer';
import EukaryoteExplorer from './eukaryote/EukaryoteExplorer';

export {
  MREB_TOUR_STOPS,
  FTSZ_TOUR_STOPS,
  GYRASE_TOUR_STOPS,
  POL_III_TOUR_STOPS,
} from './prokaryote/ProkaryoteExplorer';

export default function App() {
  const initialDomain =
    typeof window !== 'undefined' && window.location.search.includes('domain=eukaryote')
      ? 'eukaryote'
      : 'prokaryote';
  const [domain, setDomain] = useState<'prokaryote' | 'eukaryote'>(initialDomain);

  return (
    <div style={{ width: '100vw', height: '100vh', position: 'relative' }}>
      {/* Top-Center Domain Switcher Pill */}
      <div
        id="domain-switcher-bar"
        style={{
          position: 'fixed',
          bottom: '14px',
          left: '16px',
          zIndex: 9999,
          display: 'flex',
          gap: '4px',
          background: 'rgba(10, 18, 34, 0.92)',
          padding: '4px',
          borderRadius: '20px',
          border: '1px solid rgba(0, 245, 212, 0.45)',
          boxShadow: '0 4px 14px rgba(0, 0, 0, 0.35)'
        }}
      >
        <button
          id="btn-domain-prokaryote"
          onClick={() => setDomain('prokaryote')}
          style={{
            padding: '4px 11px',
            borderRadius: '16px',
            border: 'none',
            fontSize: '11px',
            fontWeight: 800,
            cursor: 'pointer',
            background: domain === 'prokaryote' ? '#06D6A0' : 'transparent',
            color: domain === 'prokaryote' ? '#061220' : '#CBD5E1'
          }}
        >
          🦠 Prokaryote (29)
        </button>
        <button
          id="btn-domain-eukaryote"
          onClick={() => setDomain('eukaryote')}
          style={{
            padding: '4px 11px',
            borderRadius: '16px',
            border: 'none',
            fontSize: '11px',
            fontWeight: 800,
            cursor: 'pointer',
            background: domain === 'eukaryote' ? '#00F5D4' : 'transparent',
            color: domain === 'eukaryote' ? '#061220' : '#CBD5E1'
          }}
        >
          🧬 Eukaryote (36)
        </button>
      </div>

      {domain === 'eukaryote' ? <EukaryoteExplorer /> : <ProkaryoteExplorer />}
    </div>
  );
}
"""
    with open(os.path.join(CLIENT_SRC, "App.tsx"), "w", encoding="utf-8") as f:
        f.write(content)


def main():
    write_types_file()
    write_config_file()
    write_scene_file()
    write_explorer_component()
    write_app_tsx()
    print("[✓] Generated complete Eukaryote Explorer TypeScript/React/Three.js frontend in client/src/eukaryote/ and wired App.tsx!")


if __name__ == "__main__":
    main()
