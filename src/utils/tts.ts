// TTS (Web Speech API) utility
// Mirrors the voice-ranking logic from the original glossary.html

const VOICE_PRIORITY: Record<string, number> = {
  // macOS premium voices — highest priority
  'Samantha': 100,
  'Alex':       98,
  'Ava':        96,
  'Karen':      94,
  'Moira':      92,
  'Tessa':      90,
  'Veena':      88,
  'Victoria':   86,
  // British English — preferred for KET listening
  'Daniel':      97,
  'Serena':      95,
  'Google UK English Female': 84,
  'Google UK English Male':   82,
  // American English — good quality
  'Google US English': 80,
  'Microsoft Zira':          76,
  'Microsoft David':          74,
  // Acceptable fallback
  'Arthur': 58,
  'Fred':   56,
  // Penalised — robotic / annoying
  'Bells':       -100,
  'Zarvox':     -100,
  'Trinoids':   -100,
  'Whisper':    -90,
  'Cellos':     -90,
  'Good News':  -80,
  'Deranged':   -80,
  'Bad News':   -80,
  'Boing':      -80,
  'Bubbles':    -80,
  'Albert':     -60,
  'Kathy':      -60,
};

function scoreVoice(v: SpeechSynthesisVoice): number {
  if (VOICE_PRIORITY[v.name] !== undefined) return VOICE_PRIORITY[v.name];
  // Default: prefer en-US / en-GB, penalise non-English
  if (/^en[-_]/.test(v.lang)) return 40;
  return 10;
}

export function getBestVoice(allVoices: SpeechSynthesisVoice[]): SpeechSynthesisVoice | null {
  const en = allVoices.filter(v => /^en[-_]/.test(v.lang));
  if (en.length === 0) return allVoices[0] || null;
  en.sort((a, b) => scoreVoice(b) - scoreVoice(a));
  return en[0] || null;
}

export function getAllVoices(): SpeechSynthesisVoice[] {
  return window.speechSynthesis.getVoices();
}

export function preloadVoices(): Promise<SpeechSynthesisVoice[]> {
  return new Promise(resolve => {
    const voices = getAllVoices();
    if (voices.length > 0) { resolve(voices); return; }
    const onEnd = () => {
      window.speechSynthesis.removeEventListener('voiceschanged', onEnd);
      resolve(getAllVoices());
    };
    window.speechSynthesis.addEventListener('voiceschanged', onEnd);
    // Safari requires a dummy utterance to trigger
    window.speechSynthesis.speak(new SpeechSynthesisUtterance(''));
    setTimeout(() => resolve(getAllVoices()), 300);
  });
}

export function speak(text: string, voiceId?: string, voiceName?: string): void {
  window.speechSynthesis.cancel();
  const u = new SpeechSynthesisUtterance(text);
  u.lang = 'en-US';
  u.rate = 0.9;
  u.pitch = 1.0;

  const voices = getAllVoices();
  if (voiceName) {
    const picked = voices.find(v => v.name === voiceName);
    if (picked) u.voice = picked;
  } else if (voiceId) {
    const picked = voices.find(v => v.name === voiceId);
    if (picked) u.voice = picked;
  } else {
    const best = getBestVoice(voices);
    if (best) u.voice = best;
  }

  window.speechSynthesis.speak(u);
}

/**
 * KET Listening — British English, slow & clear (~120 wpm).
 * Must be called after preloadVoices() to ensure the voice list is ready.
 */
export function speakKETListening(text: string): Promise<void> {
  return preloadVoices().then(voices => {
    window.speechSynthesis.cancel();

    const u = new SpeechSynthesisUtterance(text);
    u.lang = 'en-GB';
    u.rate = 0.72;       // ~120 wpm — KET listening exam speed
    u.pitch = 1.0;

    // Prefer British English voices
    const gb = voices.filter(v => v.lang === 'en-GB');
    if (gb.length > 0) {
      const best = getBestVoice(gb);
      if (best) u.voice = best;
    } else {
      // Fallback: any English voice
      const en = voices.filter(v => /^en[-_]/.test(v.lang));
      const best = getBestVoice(en);
      if (best) u.voice = best;
    }

    return new Promise<void>(resolve => {
      u.onend = () => resolve();
      u.onerror = () => resolve();
      window.speechSynthesis.speak(u);
    });
  });
}
