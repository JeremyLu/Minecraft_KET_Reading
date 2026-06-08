// localStorage helpers for completed exercises
const STORAGE_KEY = 'mc_ket_done';

export function getDoneSet(): Set<string> {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    return raw ? new Set(JSON.parse(raw)) : new Set();
  } catch {
    return new Set();
  }
}

export function saveDoneSet(done: Set<string>): void {
  localStorage.setItem(STORAGE_KEY, JSON.stringify([...done]));
}

export function toggleDone(id: string): boolean {
  const done = getDoneSet();
  if (done.has(id)) {
    done.delete(id);
  } else {
    done.add(id);
  }
  saveDoneSet(done);
  return done.has(id);
}

export function isDone(id: string): boolean {
  return getDoneSet().has(id);
}

// ─── Voice preference ──────────────────────────────
const VOICE_KEY = 'mc_ket_voice';

export function getSavedVoiceId(): string | null {
  try {
    return localStorage.getItem(VOICE_KEY);
  } catch {
    return null;
  }
}

export function saveVoiceId(id: string): void {
  localStorage.setItem(VOICE_KEY, id);
}
