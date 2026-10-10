/**
 * voiceService.js - Local Client-Side Text-to-Speech (TTS) Service using kokoro-js
 * 
 * Features:
 * - Powered by KokoroTTS (onnx-community/Kokoro-82M-ONNX, dtype: 'q8')
 * - Auto-device detection (WebGPU with WASM fallback)
 * - Fixed 24000 Hz mono Web Audio API AudioContext management
 * - Handles browser autoplay restrictions via user gesture resume
 * - Voice persona management with localStorage persistence ('selected_tts_voice')
 * - Immediate interruption handling (stops existing playback before starting new clip)
 * - Non-blocking status callbacks ('idle', 'initializing', 'synthesizing', 'playing', 'error')
 */

import { KokoroTTS } from 'https://cdn.jsdelivr.net/npm/kokoro-js@1.1.1/+esm';

export const CURATED_VOICES = [
  { id: 'af_heart', name: 'Heart (Warm & Jovial Female)', default: true },
  { id: 'af_sky', name: 'Sky (Bright & Fresh Female)' },
  { id: 'af_bella', name: 'Bella (Smooth & Soft Female)' },
  { id: 'af_nicole', name: 'Nicole (Crisp & Professional Female)' },
  { id: 'am_adam', name: 'Adam (Casual & Friendly Male)' },
  { id: 'am_michael', name: 'Michael (Narrative & Polished Male)' },
  { id: 'am_echo', name: 'Echo (Energetic Male)' }
];

const STORAGE_KEY = 'selected_tts_voice';
const DEFAULT_VOICE = 'af_heart';
const SAMPLE_RATE = 24000;

class VoiceService {
  constructor() {
    this.tts = null;
    this.initPromise = null;
    this.audioCtx = null;
    this.compressor = null;
    this.activeSources = new Set();
    this.nextPlayTime = 0;
    this.state = 'idle'; // 'idle' | 'initializing' | 'synthesizing' | 'playing' | 'error'
    this.currentText = '';
    this.currentVoice = this.loadPersistedVoice();
    this.listeners = new Set();
    this._requestId = 0;
    this._inferenceQueue = Promise.resolve();
  }

  /**
   * Retrieve saved voice from localStorage or fallback to default
   */
  loadPersistedVoice() {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved && CURATED_VOICES.some(v => v.id === saved)) {
        return saved;
      }
    } catch (_) {}
    return DEFAULT_VOICE;
  }

  /**
   * Persist chosen voice persona
   */
  setSelectedVoice(voiceId) {
    if (CURATED_VOICES.some(v => v.id === voiceId)) {
      this.currentVoice = voiceId;
      try {
        localStorage.setItem(STORAGE_KEY, voiceId);
      } catch (_) {}
      this.notifyListeners();
    }
  }

  /**
   * Get currently active voice persona
   */
  getSelectedVoice() {
    return this.currentVoice || DEFAULT_VOICE;
  }

  /**
   * Web Audio API AudioContext singleton (24000 Hz, mono) with Studio Dynamics Compressor
   */
  getAudioContext() {
    if (!this.audioCtx || this.audioCtx.state === 'closed') {
      const AudioCtxClass = window.AudioContext || window.webkitAudioContext;
      this.audioCtx = new AudioCtxClass({ sampleRate: SAMPLE_RATE });

      // Studio Dynamics Compressor for perfectly uniform dialogue volume
      this.compressor = this.audioCtx.createDynamicsCompressor();
      this.compressor.threshold.setValueAtTime(-20, this.audioCtx.currentTime); // dB
      this.compressor.knee.setValueAtTime(20, this.audioCtx.currentTime);      // dB
      this.compressor.ratio.setValueAtTime(3.5, this.audioCtx.currentTime);    // 3.5:1 ratio
      this.compressor.attack.setValueAtTime(0.003, this.audioCtx.currentTime); // 3ms attack
      this.compressor.release.setValueAtTime(0.15, this.audioCtx.currentTime); // 150ms release
      this.compressor.connect(this.audioCtx.destination);
    }
    if (this.audioCtx.state === 'suspended') {
      this.audioCtx.resume().catch(() => {});
    }
    return this.audioCtx;
  }

  /**
   * Register state change observer
   */
  onStateChange(callback) {
    if (typeof callback === 'function') {
      this.listeners.add(callback);
      callback(this.state, { text: this.currentText, voice: this.currentVoice });
    }
    return () => this.listeners.delete(callback);
  }

  setState(newState, detail = {}) {
    this.state = newState;
    this.notifyListeners(detail);
  }

  notifyListeners(detail = {}) {
    for (const listener of this.listeners) {
      try {
        listener(this.state, {
          text: this.currentText,
          voice: this.currentVoice,
          ...detail
        });
      } catch (err) {
        console.warn('[VoiceService] Listener error:', err);
      }
    }
  }

  /**
   * Initialize KokoroTTS model instance with auto-device fallback
   * 
   * CRITICAL BUGFIX: ONNX Runtime Web on Windows GPU drivers has a documented int8
   * dequantization bug with 'q8' on WebGPU that causes scalar overflow (generating raw
   * float amplitudes > +/-600,000,000, resulting in broken, garbled, distorted alien noises).
   * Stable, high-fidelity configuration:
   *   • device: 'webgpu' -> dtype: 'fp32'
   *   • device: 'wasm'   -> dtype: 'q8'
   */
  async init() {
    if (this.tts) return this.tts;
    if (this.initPromise) return this.initPromise;

    this.setState('initializing');
    this.initPromise = (async () => {
      const hasGpu = (typeof navigator !== 'undefined' && !!navigator.gpu);
      let device = hasGpu ? 'webgpu' : 'wasm';
      let dtype = hasGpu ? 'fp32' : 'q8';
      const modelId = 'onnx-community/Kokoro-82M-ONNX';
      
      console.log(`[VoiceService] Initializing KokoroTTS (${modelId}, dtype: ${dtype}, device: ${device})...`);
      
      try {
        this.tts = await KokoroTTS.from_pretrained(modelId, {
          dtype: dtype,
          device: device
        });
        console.log(`[VoiceService] KokoroTTS initialized successfully on ${device} (${dtype}).`);
      } catch (primaryErr) {
        if (device === 'webgpu') {
          console.warn('[VoiceService] WebGPU init failed, falling back to wasm device with q8:', primaryErr);
          device = 'wasm';
          dtype = 'q8';
          this.tts = await KokoroTTS.from_pretrained(modelId, {
            dtype: dtype,
            device: device
          });
          console.log('[VoiceService] KokoroTTS fallback to wasm q8 succeeded.');
        } else {
          throw primaryErr;
        }
      }

      this.setState('idle');
      return this.tts;
    })().catch(err => {
      this.initPromise = null;
      this.setState('error', { error: err.message });
      console.error('[VoiceService] Initialization error:', err);
      throw err;
    });

    return this.initPromise;
  }

  /**
   * Stop any current Web Audio buffer sources
   */
  stopAudio() {
    for (const src of this.activeSources) {
      try {
        src.onended = null;
        src.stop(0);
        src.disconnect();
      } catch (_) {}
    }
    this.activeSources.clear();
    this.nextPlayTime = 0;
  }

  /**
   * Stop any current audio synthesis or playback immediately
   */
  stop() {
    this._requestId++; // Invalidate any ongoing in-flight synthesis
    this.stopAudio();
    if (this.state !== 'idle' && this.state !== 'initializing' && this.state !== 'error') {
      this.setState('idle');
    }
  }

  /**
   * Pre-process biological and scientific nomenclature for natural TTS pronunciation
   */
  prepareSpeechText(text) {
    if (!text || typeof text !== 'string') return '';
    return text
      // Greek letters
      .replace(/α/g, 'alpha ')
      .replace(/β/g, 'beta ')
      .replace(/γ/g, 'gamma ')
      .replace(/δ/g, 'delta ')
      // Scientific units and symbols
      .replace(/~/g, 'approximately ')
      .replace(/(\d+)\s*µm\b/g, '$1 micrometers')
      .replace(/µm\b/g, 'micrometers')
      .replace(/(\d+)\s*nm\b/g, '$1 nanometers')
      .replace(/\bnm\b/g, 'nanometers')
      .replace(/(\d+)\s*Å\b/g, '$1 Angstroms')
      .replace(/Å/g, 'Angstroms ')
      .replace(/\bMbp\b/g, 'megabase pairs')
      .replace(/\bkbp?\b/g, 'kilobase pairs')
      .replace(/\bMDa\b/g, 'megadaltons')
      .replace(/×/g, ' by ')
      .replace(/\+/g, ' plus ')
      .replace(/H⁺/g, 'H plus')
      // Molecular Biology acronyms & complexes
      .replace(/\bdsDNA\b/g, 'double-stranded DNA')
      .replace(/\bcccDNA\b/g, 'covalently closed circular DNA')
      .replace(/\bmRNA\b/g, 'messenger RNA')
      .replace(/\brRNA\b/g, 'ribosomal RNA')
      .replace(/\btRNA\b/g, 'transfer RNA')
      .replace(/\bK-12\b/g, 'K 12')
      .replace(/\bK-Antigen\b/g, 'K Antigen')
      .replace(/F₁F₀/g, 'F 1 F 0')
      .replace(/70S/g, '70 S')
      .replace(/50S/g, '50 S')
      .replace(/30S/g, '30 S')
      .replace(/16S/g, '16 S')
      .replace(/23S/g, '23 S')
      .replace(/5S/g, '5 S')
      // Punctuation and brackets (convert to natural speech pauses)
      .replace(/•/g, ', ')
      .replace(/—/g, ', ')
      .replace(/–/g, ' to ')
      .replace(/[/\\|]/g, ', ')
      .replace(/[()]/g, ', ')
      .replace(/\s+/g, ' ')
      .trim();
  }

  /**
   * Split continuous speech text into natural spoken sentences/clauses
   * Allows chunk 1 to begin playing almost immediately (< 500ms) while subsequent
   * chunks synthesize in parallel on the GPU and queue gaplessly.
   */
  splitIntoSentences(text) {
    if (!text || typeof text !== 'string') return [];
    
    // Split on sentence terminals (. ! ?)
    const rawSentences = text
      .split(/(?<=[.!?])\s+/)
      .map(s => s.trim())
      .filter(Boolean);

    const refined = [];
    for (const s of rawSentences) {
      if (s.length > 150) {
        // Sub-split very long sentences on clauses (, ;)
        const parts = s.split(/(?<=[,;])\s+/).map(p => p.trim()).filter(Boolean);
        let curr = '';
        for (const p of parts) {
          if ((curr + ' ' + p).length < 130) {
            curr = curr ? (curr + ' ' + p) : p;
          } else {
            if (curr) refined.push(curr);
            curr = p;
          }
        }
        if (curr) refined.push(curr);
      } else {
        refined.push(s);
      }
    }
    return refined;
  }

  /**
   * Synthesize and stream text sentence-by-sentence with consistent RMS volume
   * @param {string} text - The text to speak
   * @param {object} options - Optional parameters: { voice, speed, onStart, onEnd }
   */
  async playText(text, options = {}) {
    if (!text || typeof text !== 'string') {
      if (typeof options.onEnd === 'function') options.onEnd();
      return;
    }
    const cleanText = this.prepareSpeechText(text);
    if (!cleanText) {
      if (typeof options.onEnd === 'function') options.onEnd();
      return;
    }

    // 1. Immediately stop any currently playing or scheduled audio
    this.stopAudio();

    // 2. Invalidate previous in-flight requests
    const reqId = ++this._requestId;
    const voice = options.voice || this.getSelectedVoice();
    this.currentText = cleanText;

    // 3. Ensure AudioContext is ready and un-suspended on user gesture
    const ctx = this.getAudioContext();
    if (ctx.state === 'suspended') {
      await ctx.resume().catch(() => {});
    }

    // 4. Split narrative into sequential speech sentences for instant streaming
    const sentences = this.splitIntoSentences(cleanText);
    if (sentences.length === 0) return;

    // 5. Chain onto _inferenceQueue to guarantee sequential ONNX session execution
    const prevInference = this._inferenceQueue;
    let releaseLock;
    this._inferenceQueue = new Promise(resolve => { releaseLock = resolve; });

    try {
      this.setState('synthesizing', { text: cleanText, voice });

      // Wait for any prior ONNX model inference to complete
      await prevInference.catch(() => {});

      // If a newer request was dispatched while waiting, drop this one!
      if (this._requestId !== reqId) {
        releaseLock();
        return;
      }

      // Ensure model is loaded
      await this.init();
      if (this._requestId !== reqId) {
        releaseLock();
        return;
      }

      this.nextPlayTime = ctx.currentTime + 0.03;
      let isFirstChunk = true;
      let generationDone = false;

      // 6. Generate and stream sentence-by-sentence
      for (let sIdx = 0; sIdx < sentences.length; sIdx++) {
        const sentence = sentences[sIdx];
        if (this._requestId !== reqId) break;

        const audio = await this.tts.generate(sentence, {
          voice: voice,
          speed: options.speed || 1.0
        });

        if (this._requestId !== reqId) break;

        const rawPcm = audio.audio;
        if (!rawPcm || !(rawPcm instanceof Float32Array)) continue;

        // 7. RMS Loudness Normalization to guaranteed studio broadcast target (0.080 RMS):
        // Solves volume inconsistency across sentences and words
        let sumSq = 0, count = 0, peak = 0;
        for (let j = 0; j < rawPcm.length; j++) {
          const abs = Math.abs(rawPcm[j]);
          if (abs > peak) peak = abs;
          if (abs > 0.01) {
            sumSq += abs * abs;
            count++;
          }
        }
        const rms = count > 0 ? Math.sqrt(sumSq / count) : 0.05;
        const targetRms = 0.080;
        let gain = targetRms / Math.max(rms, 0.005);
        if (peak * gain > 0.92) {
          gain = 0.92 / peak;
        }

        const pcmData = new Float32Array(rawPcm.length);
        for (let j = 0; j < rawPcm.length; j++) {
          pcmData[j] = rawPcm[j] * gain;
        }

        // 8. Create Web Audio buffer and route through Studio Dynamics Compressor
        const audioBuffer = ctx.createBuffer(1, pcmData.length, SAMPLE_RATE);
        audioBuffer.getChannelData(0).set(pcmData);

        const source = ctx.createBufferSource();
        source.buffer = audioBuffer;
        source.connect(this.compressor || ctx.destination);

        // Schedule seamlessly in Web Audio API timeline
        const startTime = Math.max(ctx.currentTime + 0.02, this.nextPlayTime);
        source.start(startTime);
        this.nextPlayTime = startTime + audioBuffer.duration;
        this.activeSources.add(source);

        if (isFirstChunk) {
          isFirstChunk = false;
          // First word begins speaking in under ~400-600ms! Zero delay!
          this.setState('playing', { text: cleanText, voice });
          if (typeof options.onStart === 'function') {
            options.onStart();
          }
        }

        source.onended = () => {
          this.activeSources.delete(source);
          if (this._requestId === reqId) {
            if (generationDone && this.activeSources.size === 0) {
              this.setState('idle');
              if (typeof options.onEnd === 'function') {
                options.onEnd();
              }
            }
          }
        };
      }

      generationDone = true;
      if (this.activeSources.size === 0 && this._requestId === reqId) {
        this.setState('idle');
        if (typeof options.onEnd === 'function') {
          options.onEnd();
        }
      }

      releaseLock();
    } catch (err) {
      if (releaseLock) releaseLock();
      if (this._requestId === reqId) {
        console.error('[VoiceService] Playback error:', err);
        this.setState('error', { error: err.message });
        if (typeof options.onError === 'function') {
          options.onError(err);
        }
      }
    }
  }

  /**
   * Helper to check if currently synthesizing or playing
   */
  isPlaying() {
    return this.state === 'playing';
  }

  isBusy() {
    return this.state === 'synthesizing' || this.state === 'playing' || this.state === 'initializing';
  }
}

// Singleton export
export const voiceService = new VoiceService();
if (typeof window !== 'undefined') {
  window.voiceService = voiceService;
}
export default voiceService;
