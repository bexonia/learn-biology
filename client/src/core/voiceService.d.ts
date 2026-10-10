export const CURATED_VOICES: Record<string, any>;

declare const voiceService: {
  playText(text: string, options?: any): Promise<void>;
  speak(text: string, voice?: string): Promise<void>;
  stop(): void;
  isBusy(): boolean;
  getSelectedVoice(): string;
  setVoice(voice: string): void;
};

export default voiceService;
