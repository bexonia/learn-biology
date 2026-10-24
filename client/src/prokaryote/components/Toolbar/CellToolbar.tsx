import React from 'react';

interface CellToolbarProps {
  wasmStatus: string;
  selectedVoice: string;
  onVoiceChange: (voice: string) => void;
  isNarrating: boolean;
  onNarrateClick: () => void;
  onResetCamera: () => void;
  isAutoRotating: boolean;
  onToggleAutoRotate: () => void;
  showLabels: boolean;
  onToggleLabels: () => void;
  isTourActive: boolean;
  onToggleTour: () => void;
}

export const CellToolbar: React.FC<CellToolbarProps> = ({
  wasmStatus,
  selectedVoice,
  onVoiceChange,
  isNarrating,
  onNarrateClick,
  onResetCamera,
  isAutoRotating,
  onToggleAutoRotate,
  showLabels,
  onToggleLabels,
  isTourActive,
  onToggleTour
}) => {
  return (
    <div id="toolbar">
      <div className="wasm-badge" id="wasm-status">
        <span className="pulse-dot"></span>
        <span className="badge-text">{wasmStatus}</span>
      </div>

      <div className="tts-toolbar-group" id="tts-controls" title="Local Client-Side Kokoro-82M Voice Synthesis">
        <label htmlFor="ttsVoiceSelect" className="tts-label">🎙 Voice:</label>
        <select
          id="ttsVoiceSelect"
          className="tts-select"
          value={selectedVoice}
          onChange={(e) => onVoiceChange(e.target.value)}
          aria-label="Select Narration Voice Persona"
        >
          <option value="af_heart">Heart (Warm &amp; Jovial Female)</option>
          <option value="af_sky">Sky (Bright &amp; Fresh Female)</option>
          <option value="af_bella">Bella (Smooth &amp; Soft Female)</option>
          <option value="af_nicole">Nicole (Crisp &amp; Professional Female)</option>
          <option value="am_adam">Adam (Casual &amp; Friendly Male)</option>
          <option value="am_michael">Michael (Narrative &amp; Polished Male)</option>
          <option value="am_echo">Echo (Energetic Male)</option>
        </select>
        <button
          className={`tool-btn tts-btn ${isNarrating ? 'speaking' : ''}`}
          id="btn-tts-narrate"
          onClick={onNarrateClick}
          title="Read current structure or cell overview aloud"
        >
          <span className="tts-icon" id="tts-main-icon">🔊</span>
          <span className="tts-text" id="tts-main-text">{isNarrating ? 'Stop' : 'Narrate'}</span>
          <span className={`tts-spinner ${isNarrating ? '' : 'hidden'}`} id="tts-main-spinner"></span>
        </button>
      </div>

      <button
        className="tool-btn"
        id="btn-reset"
        onClick={onResetCamera}
        title="Reset camera to default 3/4 perspective"
      >
        ⟲ Reset Camera
      </button>

      <button
        className={`tool-btn ${isAutoRotating ? 'active' : ''}`}
        id="btn-autorotate"
        onClick={onToggleAutoRotate}
        title="Toggle automatic orbit"
      >
        ⟳ Auto-Rotate
      </button>

      <button
        className={`tool-btn ${showLabels ? 'active' : ''}`}
        id="btn-labels"
        onClick={onToggleLabels}
        title="Toggle anatomical leader lines"
      >
        {showLabels ? '🏷 Labels: ON' : '🏷 Labels: OFF'}
      </button>

      <button
        className={`tool-btn highlight-btn ${isTourActive ? 'active' : ''}`}
        id="btn-tour"
        onClick={onToggleTour}
        title="Start cinematic 3D guided tour"
      >
        {isTourActive ? '🎬 Tour: ON' : '🎬 Guided Tour'}
      </button>
    </div>
  );
};
