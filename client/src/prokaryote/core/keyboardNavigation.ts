import * as THREE from 'three';

export interface KeyboardNavigationConfig {
  camera: THREE.PerspectiveCamera;
  target?: THREE.Vector3;
  spherical?: { radius: number; theta: number; phi: number };
  controls?: any; // OrbitControls instance
  isActive: () => boolean;
  onReset?: () => void;
  onUpdate?: () => void;
  baseSpeedMultiplier?: number;
}

/**
 * Universal Keyboard Flight & Navigation Controller
 * Provides video game / Counter-Strike style free-look flight and panning
 * (WASD, Arrows, Space, C/Ctrl, Q/E, Shift, and R reset) across all 3D scenes.
 */
export class KeyboardFlightController {
  private keys: Record<string, boolean> = {
    KeyW: false, KeyS: false, KeyA: false, KeyD: false,
    KeyQ: false, KeyE: false, Space: false, KeyC: false,
    ShiftLeft: false, ShiftRight: false,
    ControlLeft: false, ControlRight: false,
    ArrowUp: false, ArrowDown: false, ArrowLeft: false, ArrowRight: false,
  };

  private config: KeyboardNavigationConfig;
  private onKeyDownBound: (e: KeyboardEvent) => void;
  private onKeyUpBound: (e: KeyboardEvent) => void;

  constructor(config: KeyboardNavigationConfig) {
    this.config = config;

    this.onKeyDownBound = (e: KeyboardEvent) => {
      if (!this.config.isActive()) return;
      const target = e.target as HTMLElement | null;
      if (target && (target.tagName === 'INPUT' || target.tagName === 'TEXTAREA' || target.isContentEditable)) {
        return;
      }
      if (this.keys.hasOwnProperty(e.code)) {
        this.keys[e.code] = true;
      }
      if (e.code === 'KeyR' && this.config.onReset) {
        this.config.onReset();
      }
    };

    this.onKeyUpBound = (e: KeyboardEvent) => {
      if (this.keys.hasOwnProperty(e.code)) {
        this.keys[e.code] = false;
      }
    };

    window.addEventListener('keydown', this.onKeyDownBound);
    window.addEventListener('keyup', this.onKeyUpBound);
  }

  public resetKeys() {
    Object.keys(this.keys).forEach((k) => { this.keys[k] = false; });
  }

  public update(delta: number = 0.016) {
    if (!this.config.isActive()) return;

    const hasInput = this.keys.KeyW || this.keys.KeyS || this.keys.KeyA || this.keys.KeyD ||
                     this.keys.KeyQ || this.keys.KeyE || this.keys.Space || this.keys.KeyC ||
                     this.keys.ControlLeft || this.keys.ControlRight ||
                     this.keys.ArrowUp || this.keys.ArrowDown || this.keys.ArrowLeft || this.keys.ArrowRight;
    if (!hasInput) return;

    const { camera, target, spherical, controls, onUpdate, baseSpeedMultiplier = 1.0 } = this.config;
    if (!camera) return;

    // 1. Camera basis vectors in world space
    const forward = new THREE.Vector3();
    camera.getWorldDirection(forward);
    forward.normalize();

    const right = new THREE.Vector3();
    const up = new THREE.Vector3();
    camera.matrixWorld.extractBasis(right, up, new THREE.Vector3());
    right.normalize();

    // 2. Dynamic movement speed with shift sprint boost
    const isShift = this.keys.ShiftLeft || this.keys.ShiftRight;
    const sprintMultiplier = isShift ? 2.5 : 1.0;

    let baseDist = 30;
    if (controls && controls.target) {
      baseDist = camera.position.distanceTo(controls.target);
    } else if (spherical && spherical.radius) {
      baseDist = spherical.radius;
    } else if (target) {
      baseDist = camera.position.distanceTo(target);
    }

    const baseSpeed = Math.max(12, baseDist * 0.9) * baseSpeedMultiplier;
    const speed = baseSpeed * sprintMultiplier * delta;

    const moveDelta = new THREE.Vector3();

    // W / ArrowUp -> Fly FORWARD in 3D look direction
    if (this.keys.KeyW || this.keys.ArrowUp) {
      moveDelta.addScaledVector(forward, speed);
    }
    // S / ArrowDown -> Fly BACKWARD
    if (this.keys.KeyS || this.keys.ArrowDown) {
      moveDelta.addScaledVector(forward, -speed);
    }
    // A / ArrowLeft -> Strafe LEFT
    if (this.keys.KeyA || this.keys.ArrowLeft) {
      moveDelta.addScaledVector(right, -speed);
    }
    // D / ArrowRight -> Strafe RIGHT
    if (this.keys.KeyD || this.keys.ArrowRight) {
      moveDelta.addScaledVector(right, speed);
    }
    // Space -> Fly UP (world Y)
    if (this.keys.Space) {
      moveDelta.y += speed;
    }
    // Control / KeyC -> Fly DOWN (world Y)
    if (this.keys.ControlLeft || this.keys.ControlRight || this.keys.KeyC) {
      moveDelta.y -= speed;
    }
    // Q / E -> Dolly Forward / Backward
    if (this.keys.KeyQ) {
      moveDelta.addScaledVector(forward, -speed * 0.8);
    }
    if (this.keys.KeyE) {
      moveDelta.addScaledVector(forward, speed * 0.8);
    }

    if (moveDelta.lengthSq() > 0) {
      camera.position.add(moveDelta);

      if (controls && controls.target) {
        controls.target.add(moveDelta);
        controls.update();
      } else if (target) {
        target.add(moveDelta);
        if (spherical) {
          const offset = new THREE.Vector3().subVectors(camera.position, target);
          const rad = offset.length();
          if (rad > 0.001) {
            spherical.radius = THREE.MathUtils.clamp(rad, 4, 800);
            spherical.phi = THREE.MathUtils.clamp(Math.acos(offset.y / rad), 0.04, Math.PI - 0.04);
            spherical.theta = Math.atan2(offset.x, offset.z);
          }
        }
        camera.updateMatrixWorld(true);
      }

      if (onUpdate) {
        onUpdate();
      }
    }
  }

  public dispose() {
    this.resetKeys();
    window.removeEventListener('keydown', this.onKeyDownBound);
    window.removeEventListener('keyup', this.onKeyUpBound);
  }
}
