// @ts-nocheck
import type { ExerciseData } from '../../../types';

const data: ExerciseData = {
  id: "mc-ket-096",
  category: "Exploration",
  categoryZh: "冒险探索",
  type: "Listening",
  title: "Into the Nether",

  audioText: "Today, Steve is building a Nether Portal. He places obsidian blocks in a rectangle — four blocks wide and five blocks tall. Then, he uses a flint and steel to light the portal. Whoosh! A purple, glowing gateway appears. Steve steps through the portal. He is now in the Nether — a hot, dark world made of Netherrack. Strange red mushrooms grow everywhere. He sees a group of Zombie Pigmen. They do not attack him. Steve remembers that Pigmen are neutral — they only fight if you hit them first. He walks carefully through the Nether, looking for a Nether Fortress.",

  passage: "Today, Steve is building a Nether Portal. He places obsidian blocks in a rectangle — four blocks wide and five blocks tall. Then, he uses a flint and steel to light the portal. Whoosh! A purple, glowing gateway appears. Steve steps through the portal. He is now in the Nether — a hot, dark world made of Netherrack. Strange red mushrooms grow everywhere. He sees a group of Zombie Pigmen. They do not attack him. Steve remembers that Pigmen are neutral — they only fight if you hit them first. He walks carefully through the Nether, looking for a Nether Fortress.",

  questions: [
    {
      id: "q1",
      text: "What shape does Steve build for the portal?",
      options: ["A square", "A rectangle", "A circle"],
      correct: 1,
    },
    {
      id: "q2",
      text: "What does Steve use to light the portal?",
      options: ["A torch", "Flint and steel", "Lava"],
      correct: 1,
    },
    {
      id: "q3",
      text: "Why do the Zombie Pigmen not attack Steve?",
      options: ["They are sleeping", "They are neutral mobs", "Steve is invisible"],
      correct: 1,
    },
  ],

  answers: [
    {
      id: "q1",
      answer: "B",
      explanation: "音频中说 He places obsidian blocks in a rectangle（他把黑曜石摆成长方形）。",
    },
    {
      id: "q2",
      answer: "B",
      explanation: "音频中说 he uses a flint and steel to light the portal（用打火石点燃传送门）。",
    },
    {
      id: "q3",
      answer: "B",
      explanation: "音频中说 Pigmen are neutral — they only fight if you hit them first（僵尸猪人是中立的，只有你先打它们才会反击）。",
    },
  ],

  vocabulary: [
    { word: "portal", pos: "n.", meaning: "传送门", gameContext: "Build a Nether Portal with 10-14 obsidian blocks, then light it with flint and steel" },
    { word: "obsidian", pos: "n.", meaning: "黑曜石", gameContext: "Created when water touches lava — you need a diamond pickaxe to mine it" },
    { word: "neutral", pos: "adj.", meaning: "中立的", gameContext: "Neutral mobs like Zombie Pigmen and Wolves won't attack unless you hit them first" },
    { word: "Netherrack", pos: "n.", meaning: "地狱岩", gameContext: "The red stone that makes up most of the Nether — it burns forever when lit on fire" },
  ],

  wordCount: 113,
  estimatedDifficulty: "A2 (KET)",
  grammarFocus: "Present simple narrative + Relative clauses (who/that)",
};

export default data;
