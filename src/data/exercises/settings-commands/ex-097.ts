// @ts-nocheck
import type { ExerciseData } from '../../../types';

const data: ExerciseData = {
  id: "mc-ket-097",
  category: "Settings & Commands",
  categoryZh: "设置指令",
  type: "Listening",
  title: "Redstone Door Puzzle",

  audioText: "Alex loves redstone. Today, she wants to build a secret door. First, she places two sticky pistons in the wall. Then, she puts redstone dust behind them. She adds a lever on the wall and connects it to the redstone dust. When she pulls the lever up, the pistons push the blocks out. When she pulls it down, the pistons pull the blocks back. The door opens and closes! But wait — Alex wants to make it better. She adds a pressure plate on the floor. Now, when she walks on the plate, the door opens automatically! Her friends are amazed.",

  passage: "Alex loves redstone. Today, she wants to build a secret door. First, she places two sticky pistons in the wall. Then, she puts redstone dust behind them. She adds a lever on the wall and connects it to the redstone dust. When she pulls the lever up, the pistons push the blocks out. When she pulls it down, the pistons pull the blocks back. The door opens and closes! But wait — Alex wants to make it better. She adds a pressure plate on the floor. Now, when she walks on the plate, the door opens automatically! Her friends are amazed.",

  questions: [
    {
      id: "q1",
      text: "What does Alex use to push the blocks?",
      options: ["Slime blocks", "Sticky pistons", "Observers"],
      correct: 1,
    },
    {
      id: "q2",
      text: "What does the lever do on the first version?",
      options: ["It turns on a light", "It opens and closes the door", "It plays music"],
      correct: 1,
    },
    {
      id: "q3",
      text: "How does Alex make the door open automatically?",
      options: ["She uses a button", "She adds a pressure plate", "She uses a clock"],
      correct: 1,
    },
  ],

  answers: [
    {
      id: "q1",
      answer: "B",
      explanation: "音频中说 she places two sticky pistons in the wall（她把两个粘性活塞放进墙里）。",
    },
    {
      id: "q2",
      answer: "B",
      explanation: "音频中说 When she pulls the lever up... the door opens and closes（拉下拉杆时门就开关）。",
    },
    {
      id: "q3",
      answer: "B",
      explanation: "音频末尾说 She adds a pressure plate on the floor... the door opens automatically（加了压力板后门自动打开）。",
    },
  ],

  vocabulary: [
    { word: "piston", pos: "n.", meaning: "活塞", gameContext: "Sticky pistons can push AND pull blocks — perfect for making secret doors" },
    { word: "redstone", pos: "n.", meaning: "红石", gameContext: "Redstone is like electricity in Minecraft — use it to build machines and circuits" },
    { word: "lever", pos: "n.", meaning: "拉杆", gameContext: "A lever gives a constant redstone signal — pull it up for on, down for off" },
    { word: "automatically", pos: "adv.", meaning: "自动地", gameContext: "Use pressure plates or tripwires to open doors automatically when you walk by" },
  ],

  wordCount: 107,
  estimatedDifficulty: "A2 (KET)",
  grammarFocus: "Sequencing (First, Then) + Conditional (When... + present simple)",
};

export default data;
