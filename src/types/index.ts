// ─── Vocabulary ─────────────────────────────────────
export interface VocabularyItem {
  word: string;
  pos: string;       // e.g. "v.", "n.", "adj."
  meaning: string;    // Chinese translation
  gameContext: string;
}

// ─── Answers ────────────────────────────────────────
export interface AnswerItem {
  id: string;
  answer?: string;     // e.g. "B" for MCQ, "to" for cloze (optional: some files use accepted)
  explanation: string;
  accepted?: string[]; // alternative accepted answers
}

// ─── Part 1 / 3: MCQ Questions ────────────────────
export interface QuestionItem {
  id: string;
  text: string;       // question text
  options: string[];   // 3 options (A/B/C)
  correct: number;     // 0-based index → A=0, B=1, C=2
}

// ─── Part 2: Matching ───────────────────────────────
export interface PlayerItem {
  id: number;
  name: string;
  desc?: string;       // optional: some files use text instead
  text?: string;
}

export interface MatchingItem {
  label: string;      // "A", "B", "C"
  name: string;        // item name
  desc?: string;       // optional: some files use text instead
  id?: number;
  text?: string;
}

// ─── Part 4 / 5: Cloze Blanks ─────────────────────
export interface BlankItem {
  id: number;
  correct?: string;          // correct answer text (optional: some files use answer)
  answer?: string;           // alternative field name
  options?: string[];       // only for Part 4 (MCQ cloze)
}

// ─── Union type for each exercise ───────────────────
export type ExerciseType = "Part 1" | "Part 2" | "Part 3" | "Part 4" | "Part 5" | "Listening";

// ─── Main Exercise Data type ────────────────────────
export interface ExerciseData {
  id: string;
  category: string;       // e.g. "Mobs & Creatures"
  categoryZh: string;     // e.g. "生物图鉴"
  type: ExerciseType;
  title: string;

  // Part 1 & 3: passage (string) + questions
  passage?: string;
  questions?: QuestionItem[];

  // Part 2: matching
  players?: PlayerItem[];
  items?: MatchingItem[];
  correctMatching?: Record<number, string>;  // { 1: "B", 2: "C", 3: "A" }

  // Part 4 & 5: cloze
  clozeText?: string;
  blanks?: BlankItem[];

  // Listening: audio text to be read by TTS
  audioText?: string;

  // Common
  answers: AnswerItem[];
  vocabulary: VocabularyItem[];
  wordCount: number;
  estimatedDifficulty: string;
  grammarFocus: string;

  // Optional extra fields used by some exercise files
  notices?: string[];
  signType?: string;
  text?: string;
}

// ─── Normalized exercise (after processing) ─────────
export interface NormalizedExercise extends ExerciseData {
  typeClass: string;   // CSS class for card styling
  typeShort: string;    // short label for badge
  typeColor: string;    // badge color
}

// ─── Category info ──────────────────────────────────
export interface CategoryInfo {
  id: string;
  label: string;
  labelZh: string;
}

// ─── Glossary Word ──────────────────────────────────
export type GlossaryCategory =
  | "tools" | "armor" | "mobs" | "animals"
  | "blocks" | "ores" | "food" | "nature"
  | "nether" | "end" | "potions" | "commands";

export interface GlossaryWord {
  word: string;
  meaning: string;
  emoji: string;
  category: GlossaryCategory;
  tip?: string;
}
