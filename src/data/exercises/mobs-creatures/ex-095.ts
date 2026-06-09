// @ts-nocheck
import type { ExerciseData } from '../../../types';

const data: ExerciseData = {
  id: "mc-ket-095",
  category: "Mobs & Creatures",
  categoryZh: "生物图鉴",
  type: "Listening",
  title: "The Ender Dragon Fight",

  audioText: "Steve and Alex are in the End. They are standing on an island made of End Stone. In the sky, a huge black dragon flies around the tall obsidian pillars. This is the Ender Dragon — the final boss of Minecraft! Steve shouts, \"First, we need to destroy the End Crystals on top of the pillars!\" Alex uses her bow and arrows to shoot the crystals. Boom! The crystals explode. Now the dragon cannot heal. The dragon swoops down, and Steve hits it with his diamond sword. After a long fight, the dragon falls. Purple lights shoot into the sky. Steve and Alex have won!",

  passage: "Steve and Alex are in the End. They are standing on an island made of End Stone. In the sky, a huge black dragon flies around the tall obsidian pillars. This is the Ender Dragon — the final boss of Minecraft! Steve shouts, \"First, we need to destroy the End Crystals on top of the pillars!\" Alex uses her bow and arrows to shoot the crystals. Boom! The crystals explode. Now the dragon cannot heal. The dragon swoops down, and Steve hits it with his diamond sword. After a long fight, the dragon falls. Purple lights shoot into the sky. Steve and Alex have won!",

  questions: [
    {
      id: "q1",
      text: "Where are Steve and Alex?",
      options: ["In the Nether", "In the End", "In a cave"],
      correct: 1,
    },
    {
      id: "q2",
      text: "What must they destroy first?",
      options: ["The obsidian pillars", "The End Crystals", "The dragon's tail"],
      correct: 1,
    },
    {
      id: "q3",
      text: "What weapon does Alex use?",
      options: ["A diamond sword", "A bow and arrows", "A trident"],
      correct: 1,
    },
    {
      id: "q4",
      text: "What happens after the dragon is defeated?",
      options: ["It flies away", "Purple lights appear", "The island disappears"],
      correct: 1,
    },
  ],

  answers: [
    {
      id: "q1",
      answer: "B",
      explanation: "音频开头说 Steve and Alex are in the End（他们在末地）。",
    },
    {
      id: "q2",
      answer: "B",
      explanation: "Steve 说 we need to destroy the End Crystals on top of the pillars（需要摧毁柱子顶上的末影水晶）。",
    },
    {
      id: "q3",
      answer: "B",
      explanation: "音频中说 Alex uses her bow and arrows to shoot the crystals（用弓箭射水晶）。",
    },
    {
      id: "q4",
      answer: "B",
      explanation: "音频结尾说 Purple lights shoot into the sky（紫色光芒射向天空）。这是击败末影龙后的特效。",
    },
  ],

  vocabulary: [
    { word: "dragon", pos: "n.", meaning: "龙", gameContext: "The Ender Dragon is the final boss of Minecraft — defeat it to win the game" },
    { word: "crystal", pos: "n.", meaning: "水晶", gameContext: "End Crystals sit on top of obsidian pillars and heal the dragon — destroy them first" },
    { word: "defeat", pos: "v.", meaning: "击败", gameContext: "To defeat the Ender Dragon, you need strong armor, a good bow, and a sword" },
    { word: "swoop", pos: "v.", meaning: "俯冲", gameContext: "The dragon swoops down to attack — step back at the right moment" },
  ],

  wordCount: 130,
  estimatedDifficulty: "A2 (KET)",
  grammarFocus: "Past simple（一般过去时）narrative + Prepositions of place（在...上）",
};

export default data;
