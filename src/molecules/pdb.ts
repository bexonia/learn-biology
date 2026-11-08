import * as THREE from 'three';
import { Context, Effect, Layer } from 'effect';
import { type MolecularEmitter, type OccupancyGrid } from '../core/batch.js';

export interface RawPdbSubModel {
  readonly n: number;
  readonly xyz: string;
  readonly kind: string;
  readonly rad?: string;
}

export interface DecodedPdbModel {
  readonly n: number;
  readonly xyz: Int16Array;
  readonly kind: Uint8Array;
  readonly rad: Uint8Array | null;
}

export interface PdbShape {
  readonly decodeModel: (m: RawPdbSubModel) => DecodedPdbModel;
  readonly getModel: (
    pdbDict: Record<string, any>,
    key: string,
    full?: boolean
  ) => DecodedPdbModel;
  readonly placeProtein: (
    pdbDict: Record<string, any>,
    S: MolecularEmitter,
    key: string,
    at: THREE.Vector3,
    q: THREE.Quaternion,
    colour: (chain: number, part: number) => THREE.Color,
    nm?: number
  ) => void;
  readonly placeCellMol: (
    pdbDict: Record<string, any>,
    S: MolecularEmitter,
    key: string,
    at: THREE.Vector3,
    q: THREE.Quaternion,
    colour: (group: number, part: number) => THREE.Color,
    full?: boolean,
    nmt?: number
  ) => void;
  readonly placeVirusMol: (
    pdbDict: Record<string, any>,
    S: MolecularEmitter,
    name: string,
    pos: THREE.Vector3,
    quat: THREE.Quaternion,
    colFn: (grp: number, part: number, idx: number) => THREE.Color,
    full?: boolean,
    scale?: number,
    nm?: number,
    skipRna?: boolean
  ) => void;
  readonly molFits: (
    pdbDict: Record<string, any>,
    grid: OccupancyGrid,
    key: string,
    at: THREE.Vector3,
    q: THREE.Quaternion,
    pad?: number,
    nmt?: number
  ) => boolean;
  readonly molMark: (
    pdbDict: Record<string, any>,
    grid: OccupancyGrid,
    key: string,
    at: THREE.Vector3,
    q: THREE.Quaternion,
    nmt?: number
  ) => void;
}

export class PdbService extends Context.Service<PdbService, PdbShape>()(
  'learn-biology/PdbService'
) {}

export function createPdbShape(): PdbShape {
  const cache = new WeakMap<Record<string, any>, Map<string, DecodedPdbModel>>();
  const v = new THREE.Vector3();

  const b64ToBytes = (s: string): Uint8Array => {
    const bin = atob(s);
    const out = new Uint8Array(bin.length);
    for (let i = 0; i < bin.length; i++) out[i] = bin.charCodeAt(i);
    return out;
  };

  const decodeModel = (m: RawPdbSubModel): DecodedPdbModel => {
    const raw = b64ToBytes(m.xyz);
    return {
      n: m.n,
      xyz: new Int16Array(raw.buffer, raw.byteOffset, raw.byteLength >> 1),
      kind: b64ToBytes(m.kind),
      rad: m.rad ? b64ToBytes(m.rad) : null
    };
  };

  const getModel = (
    pdbDict: Record<string, any>,
    key: string,
    full = false
  ): DecodedPdbModel => {
    let map = cache.get(pdbDict);
    if (!map) {
      map = new Map<string, DecodedPdbModel>();
      cache.set(pdbDict, map);
    }
    const entry = pdbDict[key];
    const hasSub = entry && (entry.full || entry.red);
    const cacheKey = hasSub ? `${key}:${full ? 'f' : 'r'}` : key;
    const existing = map.get(cacheKey);
    if (existing) return existing;
    const rawSub: RawPdbSubModel = hasSub
      ? full && entry.full
        ? entry.full
        : entry.red ?? entry.full
      : entry;
    const decoded = decodeModel(rawSub);
    map.set(cacheKey, decoded);
    return decoded;
  };

  const placeProtein = (
    pdbDict: Record<string, any>,
    S: MolecularEmitter,
    key: string,
    at: THREE.Vector3,
    q: THREE.Quaternion,
    colour: (chain: number, part: number) => THREE.Color,
    nm = 0.02
  ): void => {
    const m = getModel(pdbDict, key, false);
    const k = 0.01 * nm;
    for (let i = 0; i < m.n; i++) {
      const kd = m.kind[i];
      v.set(m.xyz[i * 3], m.xyz[i * 3 + 1], m.xyz[i * 3 + 2])
        .multiplyScalar(k)
        .applyQuaternion(q)
        .add(at);
      S.add(v, ((kd & 3) === 1 ? 0.45 : 0.52) * nm, colour(kd >> 2, kd & 3));
    }
  };

  const placeCellMol = (
    pdbDict: Record<string, any>,
    S: MolecularEmitter,
    key: string,
    at: THREE.Vector3,
    q: THREE.Quaternion,
    colour: (group: number, part: number) => THREE.Color,
    full = false,
    nmt = 0.001
  ): void => {
    const m = getModel(pdbDict, key, full);
    const k = 0.01 * nmt;
    for (let i = 0; i < m.n; i++) {
      const kd = m.kind[i];
      v.set(m.xyz[i * 3], m.xyz[i * 3 + 1], m.xyz[i * 3 + 2])
        .multiplyScalar(k)
        .applyQuaternion(q)
        .add(at);
      S.add(
        v,
        full
          ? ((kd & 3) === 3 ? 1.05 : (kd & 3) === 2 ? 0.85 : 0.65) * nmt
          : ((m.rad ? m.rad[i] : 20) / 20) * nmt,
        colour(kd >> 2, kd & 3)
      );
    }
  };

  const placeVirusMol = (
    pdbDict: Record<string, any>,
    S: MolecularEmitter,
    name: string,
    pos: THREE.Vector3,
    quat: THREE.Quaternion,
    colFn: (grp: number, part: number, idx: number) => THREE.Color,
    full = true,
    scale = 1,
    nm = 0.1,
    skipRna = false
  ): void => {
    const m = getModel(pdbDict, name, full);
    const kScale = 0.01 * nm * scale;
    for (let i = 0; i < m.n; i++) {
      const kd = m.kind[i];
      const grp = kd >> 2;
      const part = kd & 3;
      if (skipRna && grp === 1) continue;
      v.set(m.xyz[i * 3], m.xyz[i * 3 + 1], m.xyz[i * 3 + 2])
        .multiplyScalar(kScale)
        .applyQuaternion(quat)
        .add(pos);
      const r = m.rad
        ? m.rad[i] * 0.25 * 0.18 * nm * scale
        : 0.82 * nm * scale;
      S.add(v, r, colFn(grp, part, i));
    }
  };

  const molFits = (
    pdbDict: Record<string, any>,
    grid: OccupancyGrid,
    key: string,
    at: THREE.Vector3,
    q: THREE.Quaternion,
    pad = 0,
    nmt = 0.001
  ): boolean => {
    const m = getModel(pdbDict, key, false);
    const k = 0.01 * nmt;
    for (let i = 0; i < m.n; i++) {
      v.set(m.xyz[i * 3], m.xyz[i * 3 + 1], m.xyz[i * 3 + 2])
        .multiplyScalar(k)
        .applyQuaternion(q)
        .add(at);
      const radVal = m.rad ? m.rad[i] : 25;
      if (!grid.gFree(v, (radVal / 50 + pad) * nmt)) return false;
    }
    return true;
  };

  const molMark = (
    pdbDict: Record<string, any>,
    grid: OccupancyGrid,
    key: string,
    at: THREE.Vector3,
    q: THREE.Quaternion,
    nmt = 0.001
  ): void => {
    const m = getModel(pdbDict, key, false);
    const k = 0.01 * nmt;
    for (let i = 0; i < m.n; i++) {
      v.set(m.xyz[i * 3], m.xyz[i * 3 + 1], m.xyz[i * 3 + 2])
        .multiplyScalar(k)
        .applyQuaternion(q)
        .add(at);
      const radVal = m.rad ? m.rad[i] : 25;
      grid.gAdd(v, (radVal / 50) * nmt);
    }
  };

  return {
    decodeModel,
    getModel,
    placeProtein,
    placeCellMol,
    placeVirusMol,
    molFits,
    molMark
  };
}

export const PdbLive: Layer.Layer<PdbService> = Layer.succeed(
  PdbService,
  createPdbShape()
);
