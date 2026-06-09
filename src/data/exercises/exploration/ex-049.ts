// @ts-nocheck
import type { ExerciseData } from '../../../types';

const data: ExerciseData = {
  id: "mc-ket-049",
  category: "Exploration & Adventure",
  categoryZh: "冒险探索",
  type: "Part 1",
  title: "Ancient City Warning",

  passage: [
    "⚠ DO NOT RUN!",
    "",
    "Sculk sensors can hear your footsteps.",
    "Walk slowly or sneak (hold Shift).",
    "",
    "🔥 Turn off your Redstone torch!",
    "",
    "The Warden can smell you in the dark.",
    "Use a lantern or soul torch instead.",
    "",
    "⚠ DO NOT break the Sculk Shrieker!",
    "",
    "It will summon the Warden immediately.",
    "Mine it with Silk Touch if you must.",
  ].join("\n"),

  questions: [
    {
      id: "q1",
      text: "What can hear your footsteps in the Ancient City?",
      options: ["Sculk Sensors", "Wool blocks", "Lanterns"],
      correct: 0,
    },
    {
      id: "q2",
      text: "What should you turn off so the Warden cannot smell you?",
      options: ["A lantern", "A Redstone torch", "A furnace"],
      correct: 1,
    },
    {
      id: "q3",
      text: "What will happen if you break the Sculk Shrieker?",
      options: ["Nothing happens", "The Warden appears", "You get XP"],
      correct: 1,
    },
  ],

  answers: [
    { id: "q1", answer: "A", explanation: "原文 Sculk sensors can hear your footsteps，幽匿感应器会感应脚步声。" },
    { id: "q2", answer: "B", explanation: "原文 Turn off your Redstone torch，红石火把的气味会吸引监守者。" },
    { id: "q3", answer: "B", explanation: "原文 It will summon the Warden，破坏幽匿尖啸者会召唤监守者。" },
  ],

  vocabulary: [
    { word: "ancient",    pos: "adj.", meaning: "远古的",            gameContext: "Ancient City generates deep underground" },
    { word: "sculk",      pos: "n.",  meaning: "幽匿",              gameContext: "Sculk blocks spread when a Sculk Catalyst is nearby" },
    { word: "sensor",     pos: "n.",  meaning: "感应器",            gameContext: "Sculk Sensors detect vibrations" },
    { word: "summon",     pos: "v.",  meaning: "召唤",              gameContext: "Shriekers summon the Warden" },
    { word: "footstep",    pos: "n.",  meaning: "脚步声",            gameContext: "Walking on Wool makes no sound" },
  ],

  wordCount: 52,
  estimatedDifficulty: "A2 (KET)",
  grammarFocus: "祈使句（Do not ... / Turn off ...）+ must/must not 推断",
};

export default data;
