// @ts-nocheck
import type { ExerciseData } from '../../../types';

const data: ExerciseData = {
id: "mc-ket-054",
    category: "Survival Basics",
    categoryZh: "生存基础",
    type: "Part 4",
    title: "The Loyal Trident",

    clozeText: [
      "The Trident is a powerful weapon (1)[____] you can only find in the ocean.",
      "To get one, you must (2)[____] Drowned zombies that are holding tridents.",
      "There are many enchantments for the Trident. Loyalty makes",
      "the Trident (3)[____] back to you after you throw it.",
      "If you use Riptide in the rain, your Trident will",
      "(4)[____] you through the air like a dolphin.",
      "Channeling is another enchantment. When you throw a Trident",
      "with Channeling (5)[____] a thunderstorm, it will call a",
      "lightning bolt to hit your enemy. Impaling makes the Trident",
      "deal more damage to ocean mobs (6)[____] Guardians and Squids.",
    ].join(" "),

    blanks: [
      { id: 1, options: ["that", "what", "who"],              correct: 0 },
      { id: 2, options: ["kill", "kills", "killed"],          correct: 0 },
      { id: 3, options: ["come", "coming", "comes"],          correct: 0 },
      { id: 4, options: ["carry", "carries", "carried"],      correct: 0 },
      { id: 5, options: ["at", "during", "for"],              correct: 1 },
      { id: 6, options: ["such", "like", "so"],               correct: 1 },
    ],

    answers: [
      {
        id: "1",
        answer: "A — that",
        explanation: "that 引导定语从句修饰 weapon，a weapon that you can only find in the ocean。",
      },
      {
        id: "2",
        answer: "A — kill",
        explanation: "must + 动词原形，must kill Drowned zombies。不定式后动词用原形。",
      },
      {
        id: "3",
        answer: "A — come",
        explanation: "make + 宾语 + 动词原形（come back），固定搭配。",
      },
      {
        id: "4",
        answer: "A — carry",
        explanation: "will + 动词原形（carry），将来时。Riptide 可以带玩家飞起来。",
      },
      {
        id: "5",
        answer: "B — during",
        explanation: "during a thunderstorm 表示「在雷暴期间」，最符合语境。at 用于具体时间点。",
      },
      {
        id: "6",
        answer: "B — like",
        explanation: "like 表示「比如；像…一样」，列举示例。such 后面需要接 as。",
      },
    ],

    vocabulary: [
      { word: "trident",      pos: "n.", meaning: "三叉戟",            gameContext: "A rare weapon dropped by Drowned zombies" },
      { word: "loyalty",      pos: "n.", meaning: "忠诚（附魔）",      gameContext: "Loyalty enchantment makes the Trident return to you" },
      { word: "riptide",      pos: "n.", meaning: "激流（附魔）",      gameContext: "Riptide launches you through the air in rain or water" },
      { word: "channeling",   pos: "n.", meaning: "引雷（附魔）",      gameContext: "Channeling calls lightning during thunderstorms" },
      { word: "impaling",     pos: "n.", meaning: "穿刺（附魔）",      gameContext: "Impaling deals extra damage to ocean mobs" },
    ],

    wordCount: 92,
    estimatedDifficulty: "A2 (KET)",
    grammarFocus: "定语从句（that）+ make + 宾 + 原形 + will 将来时 + during 时间状语",
};

export default data;
