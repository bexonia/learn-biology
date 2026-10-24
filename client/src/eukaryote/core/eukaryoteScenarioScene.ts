import * as THREE from 'three';
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
  private disposed: boolean = false;
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
    // Deep teal-navy studio background matching 3D Editorial Biomedical Cutaway Illustrations
    this.scene.background = new THREE.Color(0x0b1d28);

    this.camera = new THREE.PerspectiveCamera(38, width / height, 0.1, 1000);
    this.camera.position.set(0, 8.2, 13.4);

    this.container.querySelectorAll('canvas').forEach((c) => c.remove());

    this.renderer = new THREE.WebGLRenderer({ antialias: true, alpha: false, powerPreference: 'high-performance' });
    this.renderer.setSize(width, height);
    this.renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    this.renderer.toneMapping = THREE.ACESFilmicToneMapping;
    this.renderer.toneMappingExposure = 0.96;
    this.renderer.domElement.style.display = 'block';
    this.renderer.domElement.style.width = '100%';
    this.renderer.domElement.style.height = '100%';
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
    const hemi = new THREE.HemisphereLight(0xd8f3ff, 0x091624, 0.82);
    this.scene.add(hemi);

    // Studio key light from top-front-right (highlights flat-sliced organelle rims)
    const keyLight = new THREE.DirectionalLight(0xfffaf2, 1.45);
    keyLight.position.set(12, 28, 22);
    this.scene.add(keyLight);

    // Cool cyan Fresnel rim light from back-left (matches Adobe Stock cell bowl rim glow)
    const rimLight = new THREE.DirectionalLight(0x64dfdf, 1.05);
    rimLight.position.set(-22, 16, -18);
    this.scene.add(rimLight);

    // Soft lavender-blue fill light from front-left
    const fillLight = new THREE.DirectionalLight(0x90b8f8, 0.58);
    fillLight.position.set(-16, 8, 18);
    this.scene.add(fillLight);

    // Subtle warm subsurface internal glow near center
    const sssGlow = new THREE.PointLight(0xffb703, 0.55, 18);
    sssGlow.position.set(0, 1.8, 2.0);
    this.scene.add(sssGlow);
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

  private createBiomedicalPhysicalMaterial(
    origMat: THREE.MeshStandardMaterial | undefined,
    fallbackCol: THREE.Color
  ): THREE.MeshPhysicalMaterial {
    const matName = origMat?.name || '';
    const keepBioColor =
      matName.startsWith('Mat_Bio_') ||
      matName.startsWith('Mat_CPK_') ||
      matName.startsWith('Mat_Keep_');

    const col = keepBioColor && origMat?.color ? origMat.color.clone() : fallbackCol.clone();

    const isGlassBowl =
      matName.includes('Glass') ||
      matName.includes('Flap') ||
      matName.includes('Shell');
    const isDarkLumen =
      matName.includes('Lumen') ||
      matName.includes('PoreDark') ||
      matName.includes('MatrixUmber') ||
      matName.includes('Chromatin') ||
      matName.includes('Ribosome');
    const isTopRim = matName.includes('Rim') || matName.includes('CristaeApricot');

    if (isGlassBowl) {
      return new THREE.MeshPhysicalMaterial({
        name: matName,
        color: col,
        emissive: col.clone(),
        emissiveIntensity: 0.14,
        roughness: 0.12,
        metalness: 0.02,
        clearcoat: 1.0,
        clearcoatRoughness: 0.10,
        transmission: 0.42,
        thickness: 0.8,
        ior: 1.42,
        transparent: true,
        opacity: origMat && origMat.opacity < 0.99 ? origMat.opacity : 0.52,
        depthWrite: false,
        side: THREE.DoubleSide
      });
    }

    const baseEmissive = isDarkLumen ? 0.01 : isTopRim ? 0.08 : 0.03;
    const baseRoughness = isDarkLumen ? 0.54 : isTopRim ? 0.22 : 0.30;

    const mat = new THREE.MeshPhysicalMaterial({
      name: matName,
      color: col,
      emissive: col.clone(),
      emissiveIntensity: baseEmissive,
      roughness: baseRoughness,
      metalness: 0.04,
      clearcoat: isDarkLumen ? 0.04 : 0.32,
      clearcoatRoughness: 0.26,
      sheen: isDarkLumen ? 0.0 : 0.24,
      sheenRoughness: 0.42,
      sheenColor: col.clone().lerp(new THREE.Color(0xffffff), 0.16),
      transparent: false,
      opacity: 1.0,
      depthWrite: true,
      side: THREE.DoubleSide
    });
    mat.userData.baseEmissive = baseEmissive;
    return mat;
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
      `${cfg.glb}?v=euk_editorial_v3`,
      (gltf) => {
        if (this.disposed) return;
        const group = gltf.scene;
        const box = new THREE.Box3().setFromObject(group);
        const size = new THREE.Vector3();
        const center = new THREE.Vector3();
        box.getSize(size);
        box.getCenter(center);
        const maxDim = Math.max(size.x, size.y, size.z, 0.001);
        const targetSpan = scenarioId === 'eukaryotic_animal_cell' ? 11.4 : 9.8;
        const scale = targetSpan / maxDim;
        group.scale.setScalar(scale);
        group.position.set(-center.x * scale, -center.y * scale, -center.z * scale);

        cfg.pieces.forEach((pieceCfg) => {
          const node = group.getObjectByName(pieceCfg.meshName);
          if (node) {
            const fallbackCol = new THREE.Color(pieceCfg.color);
            node.traverse((child) => {
              if (child instanceof THREE.Mesh) {
                if (child.geometry && child.geometry.attributes && child.geometry.attributes.color) {
                  child.geometry.deleteAttribute('color');
                }
                if (Array.isArray(child.material)) {
                  child.material = child.material.map((m) =>
                    this.createBiomedicalPhysicalMaterial(m as THREE.MeshStandardMaterial, fallbackCol)
                  );
                } else {
                  child.material = this.createBiomedicalPhysicalMaterial(
                    child.material as THREE.MeshStandardMaterial | undefined,
                    fallbackCol
                  );
                }
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
        if (child instanceof THREE.Mesh) {
          const mats = Array.isArray(child.material) ? child.material : [child.material];
          mats.forEach((m) => {
            if (m instanceof THREE.MeshStandardMaterial) {
              const baseEm = m.userData.baseEmissive ?? 0.12;
              m.emissiveIntensity = !targetMesh ? baseEm : isTarget ? baseEm + 0.24 : baseEm * 0.5;
            }
          });
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
    if (this.currentScenarioId === 'eukaryotic_animal_cell') {
      this.flyCameraTo(new THREE.Vector3(0, 7.6, 13.8), new THREE.Vector3(0, -0.25, 0));
    } else {
      this.flyCameraTo(new THREE.Vector3(0, 4.2, 18.8), new THREE.Vector3(0, 0.0, 0));
    }
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
      const swayAmp = this.currentScenarioId === 'eukaryotic_animal_cell' ? 0.04 : 0.12;
      this.activeGroup.rotation.y = Math.sin(time * 0.35) * swayAmp;
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
    this.disposed = true;
    this.stop();
    window.removeEventListener('resize', this.handleResize);
    this.controls.dispose();
    if (this.renderer.domElement && this.renderer.domElement.parentNode) {
      this.renderer.domElement.parentNode.removeChild(this.renderer.domElement);
    }
    if (this.svgLayer && this.svgLayer.parentNode) {
      this.svgLayer.parentNode.removeChild(this.svgLayer);
      this.svgLayer = null;
    }
    this.renderer.dispose();
  }
}
