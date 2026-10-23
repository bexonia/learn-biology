import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';
import type { RoadmapScenarioId } from '../types/biology';
import { ROADMAP_SCENARIOS_CONFIG, type RoadmapPieceConfig } from './roadmapScenariosConfig';
import { KeyboardFlightController } from './keyboardNavigation';

export class RoadmapScenarioScene {
  private container: HTMLElement;
  private scene: THREE.Scene;
  private camera: THREE.PerspectiveCamera;
  private renderer: THREE.WebGLRenderer;
  private controls: OrbitControls;
  private animFrameId: number | null = null;
  private active: boolean = false;
  private clock = new THREE.Clock();
  private keyboardFlight: KeyboardFlightController | null = null;

  private currentScenarioId: RoadmapScenarioId = 'expressome';
  private modelCache: Map<RoadmapScenarioId, THREE.Group> = new Map();
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

  private onSelectPiece: (piece: RoadmapPieceConfig) => void;

  constructor(
    container: HTMLElement,
    callbacks: {
      onSelectPiece: (piece: RoadmapPieceConfig) => void;
    }
  ) {
    this.container = container;
    this.onSelectPiece = callbacks.onSelectPiece;

    const width = this.container.clientWidth || window.innerWidth;
    const height = this.container.clientHeight || window.innerHeight;

    this.scene = new THREE.Scene();
    this.scene.background = new THREE.Color(0x060e20);

    this.camera = new THREE.PerspectiveCamera(40, width / height, 0.1, 1000);
    this.camera.position.set(0, 6.5, 22);

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
    const existing = document.getElementById('roadmap-svg-overlay') as SVGSVGElement | null;
    if (existing) {
      this.svgLayer = existing;
    } else {
      this.svgLayer = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
      this.svgLayer.id = 'roadmap-svg-overlay';
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

  public loadScenario(scenarioId: RoadmapScenarioId): void {
    this.currentScenarioId = scenarioId;
    this.explodedProgress = 0.0;

    if (this.activeGroup) {
      this.scene.remove(this.activeGroup);
      this.activeGroup = null;
    }

    const cfg = ROADMAP_SCENARIOS_CONFIG[scenarioId];
    if (!cfg) return;

    const cached = this.modelCache.get(scenarioId);
    if (cached) {
      this.mountGroup(cached, cfg.pieces);
      return;
    }

    const loader = new GLTFLoader();
    loader.load(
      `${cfg.glb}?v=mn_authentic_v5`,
      (gltf) => {
        const group = gltf.scene;
        // Auto-fit & center group into a comfortable ~9.8-unit span box between left HUD and right drawer
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

        // Apply rich biophysical taxonomy materials per piece
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
                // Remove any default white vertex color attribute from Molecular Nodes so PBR color shows cleanly
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
        console.error(`[-] Failed to load GLB for ${scenarioId}:`, err);
      }
    );
  }

  private mountGroup(group: THREE.Group, pieces: RoadmapPieceConfig[]): void {
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
    const cfg = ROADMAP_SCENARIOS_CONFIG[this.currentScenarioId];
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
    const cfg = ROADMAP_SCENARIOS_CONFIG[this.currentScenarioId];
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
    const cfg = ROADMAP_SCENARIOS_CONFIG[this.currentScenarioId];
    if (!cfg) return;

    const width = this.container.clientWidth || window.innerWidth;
    const height = this.container.clientHeight || window.innerHeight;
    const midX = width * 0.5;
    let html = '';

    type AnchorInfo = {
      p: RoadmapPieceConfig;
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

    // De-overlap left and right columns independently so pills never collide or cover the 3D complex
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
