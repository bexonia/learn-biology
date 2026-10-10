import type { TourStatus } from '../../types/biology';

interface TourBarProps {
  status: TourStatus;
  stepTitle: string;
  onPrev: () => void;
  onTogglePlay: () => void;
  onNext: () => void;
  onToggleVoice: () => void;
  onExit: () => void;
}

export const TourBar: React.FC<TourBarProps> = ({
  status,
  stepTitle,
  onPrev,
  onTogglePlay,
  onNext,
  onToggleVoice,
  onExit
}) => {
  if (!status.active) return null;

  const base = `STEP ${status.stepIndex + 1} OF ${status.totalSteps}`;
  let badgeText = base;
  if (!status.playing) {
    badgeText = `${base} • ⏸ PAUSED`;
  } else if (status.phase === 'narrating') {
    badgeText = `${base} • 🔊 SPEAKING`;
  } else if (status.phase === 'cooldown') {
    badgeText = `${base} • NEXT IN ${status.cooldownRemaining}s`;
  } else if (status.phase === 'reading') {
    badgeText = `${base} • 📖 READING`;
  }

  return (
    <div id="tour-bar">
      <div className="tour-left">
        <span className="tour-step-badge" id="tour-step-badge">{badgeText}</span>
        <span className="tour-step-title" id="tour-step-title">{stepTitle}</span>
      </div>
      <div className="tour-controls">
        <button className="tour-btn" id="tour-prev" onClick={onPrev} title="Previous Stop">
          ⏮ Prev
        </button>
        <button
          className="tour-btn primary-tour-btn"
          id="tour-play-pause"
          onClick={onTogglePlay}
          title="Play or Pause Tour"
        >
          {status.playing ? '⏸ Pause' : '▶ Resume'}
        </button>
        <button className="tour-btn" id="tour-next" onClick={onNext} title="Next Stop">
          ⏭ Next
        </button>
        <button
          className={`tour-btn ${status.ttsEnabled ? 'active' : ''}`}
          id="tour-tts-toggle"
          onClick={onToggleVoice}
          title="Toggle Voice Narration on Tour Steps"
        >
          {status.ttsEnabled ? '🔊 Voice: ON' : '🔈 Voice: OFF'}
        </button>
      </div>
      <div className="tour-right">
        <div className="tour-timer-track" title="Autoplay Progress">
          <div className="tour-timer-fill" id="tour-timer-fill"></div>
        </div>
        <button className="tour-exit-btn" id="tour-exit" onClick={onExit} title="Exit Tour">
          ✕ Exit Tour
        </button>
      </div>
    </div>
  );
};
