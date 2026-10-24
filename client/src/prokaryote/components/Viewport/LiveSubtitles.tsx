import React from 'react';

export interface LiveSubtitlesProps {
  visible: boolean;
  text: string;
  badge?: string;
  speaker?: string;
  hasTourBar?: boolean;
  onClose?: () => void;
}

export const LiveSubtitles: React.FC<LiveSubtitlesProps> = ({
  visible,
  text,
  badge = 'AI NARRATOR',
  speaker,
  hasTourBar = false,
  onClose
}) => {
  if (!visible || !text) return null;

  return (
    <div
      id="live-subtitles-banner"
      className={`live-subtitles-banner ${hasTourBar ? 'with-tour-bar' : ''}`}
      role="region"
      aria-live="polite"
      aria-label="Live narration subtitles"
    >
      <div className="live-subtitles-card">
        <div className="live-subtitles-header">
          <div className="live-subtitles-meta">
            <span className="live-subtitles-icon">🎙️</span>
            <span className="live-subtitles-badge">{badge}</span>
            <div className="live-subtitles-soundwave" aria-hidden="true">
              <span className="soundwave-bar bar-1"></span>
              <span className="soundwave-bar bar-2"></span>
              <span className="soundwave-bar bar-3"></span>
            </div>
          </div>
          {speaker && <span className="live-subtitles-speaker">{speaker}</span>}
          {onClose && (
            <button
              className="live-subtitles-close-btn"
              onClick={onClose}
              title="Dismiss subtitles"
              aria-label="Close subtitles"
            >
              ✕
            </button>
          )}
        </div>
        <div className="live-subtitles-body">
          <p className="live-subtitles-text">{text}</p>
        </div>
      </div>
    </div>
  );
};
