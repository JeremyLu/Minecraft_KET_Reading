// @ts-nocheck
import type { ExerciseData } from '../../../types';

const data: ExerciseData = {
  id: "mc-ket-091",
  category: "Exploration & Adventure",
  categoryZh: "冒险探索",
  type: "Listening",
  title: "Finding the Stronghold",

  audioText: "Last weekend, Alex went on a big adventure. She wanted to find a stronghold. First, she threw an Eye of Ender into the sky. The eye flew east, so she followed it. She walked through a dark forest and crossed a wide river. Finally, she found the stronghold under a village. Alex was so excited! She ran inside and found the End Portal. Tomorrow, she will fight the Ender Dragon.",

  passage: "Last weekend, Alex went on a big adventure. She wanted to find a stronghold. First, she threw an Eye of Ender into the sky. The eye flew east, so she followed it. She walked through a dark forest and crossed a wide river. Finally, she found the stronghold under a village. Alex was so excited! She ran inside and found the End Portal. Tomorrow, she will fight the Ender Dragon.",

  questions: [
    {
      id: "q1",
      text: "What did Alex use to find the stronghold?",
      options: ["A map", "An Eye of Ender", "A compass"],
      correct: 1,
    },
    {
      id: "q2",
      text: "Which direction did the eye fly?",
      options: ["East", "West", "North"],
      correct: 0,
    },
    {
      id: "q3",
      text: "Where did Alex find the stronghold?",
      options: ["Inside a mountain", "Under a village", "In the ocean"],
      correct: 1,
    },
    {
      id: "q4",
      text: "What will Alex do tomorrow?",
      options: ["Go home", "Fight the Ender Dragon", "Build a new portal"],
      correct: 1,
    },
  ],

  answers: [
    {
      id: "q1",
      answer: "B",
      explanation: "音频中说 she threw an Eye of Ender into the sky（她把末影之眼抛向天空），用末影之眼来寻找要塞。",
    },
    {
      id: "q2",
      answer: "A",
      explanation: "音频中说 The eye flew east（眼睛飞向东边）。",
    },
    {
      id: "q3",
      answer: "B",
      explanation: "音频中说 she found the stronghold under a village（她在村庄下面找到了要塞）。",
    },
    {
      id: "q4",
      answer: "B",
      explanation: "音频最后说 Tomorrow, she will fight the Ender Dragon（明天，她将去打败末影龙）。",
    },
  ],

  vocabulary: [
    { word: "stronghold", pos: "n.", meaning: "要塞", gameContext: "Use Eyes of Ender to locate a stronghold — it contains the End Portal" },
    { word: "adventure", pos: "n.", meaning: "冒险", gameContext: "Minecraft is full of adventures — from caves to the End dimension" },
    { word: "excited", pos: "adj.", meaning: "兴奋的", gameContext: "Players feel excited when they find diamonds or rare structures" },
    { word: "portal", pos: "n.", meaning: "传送门", gameContext: "Build a Nether Portal with obsidian or find the End Portal in a stronghold" },
  ],

  wordCount: 98,
  estimatedDifficulty: "A2 (KET)",
  grammarFocus: "Past simple narrative + future tense: went, threw, walked, found + will fight",
};

export default data;
