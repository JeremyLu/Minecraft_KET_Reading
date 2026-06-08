// @ts-nocheck
import type { ExerciseData } from '../../../types';

const data: ExerciseData = {
id: "mc-ket-057",
    category: "Survival Basics",
    categoryZh: "生存基础",
    type: "Part 4",
    title: "Tipped Arrows",

    clozeText: [
      "Tipped Arrows are arrows (1)[____] have been dipped in a potion.",
      "When you shoot a Tipped Arrow, it gives the potion effect to",
      "whatever it (2)[____]. There are 16 different types of Tipped Arrows.",
      "An Arrow of Harming (3)[____] instant damage to your enemy.",
      "An Arrow of Poison makes the enemy slowly (4)[____] health.",
      "If you want to run away, you can use an Arrow of (5)[____]",
      "to make the enemy move more slowly. Tipped Arrows can be",
      "found in Bastion chests, crafted (6)[____] a Cauldron, or",
      "traded from Master-level Fletcher villagers.",
    ].join(" "),

    blanks: [
      { id: 1, options: ["that", "who", "what"],              correct: 0 },
      { id: 2, options: ["hit", "hits", "hitting"],           correct: 1 },
      { id: 3, options: ["deals", "does", "gives"],           correct: 0 },
      { id: 4, options: ["lose", "loses", "losing"],          correct: 0 },
      { id: 5, options: ["Slowness", "Slow", "Slowing"],      correct: 0 },
      { id: 6, options: ["in", "by", "with"],                 correct: 2 },
    ],

    answers: [
      {
        id: "1",
        answer: "A — that",
        explanation: "that 引导定语从句修饰 arrows，arrows that have been dipped in a potion。",
      },
      {
        id: "2",
        answer: "B — hits",
        explanation: "whatever it hits 中 it 是第三人称单数，hit 需要加 s。",
      },
      {
        id: "3",
        answer: "A — deals",
        explanation: "deals damage 是固定搭配，表示「造成伤害」。does damage 也可但 deals 更自然。",
      },
      {
        id: "4",
        answer: "A — lose",
        explanation: "make + 宾语 + 动词原形，make the enemy lose health。",
      },
      {
        id: "5",
        answer: "A — Slowness",
        explanation: "Arrow of Slowness 是迟缓药箭，使敌人变慢。Slow/Slowing 不是药水名。",
      },
      {
        id: "6",
        answer: "C — with",
        explanation: "crafted with a Cauldron 表示用炼药锅制作，with 表示工具/方式。",
      },
    ],

    vocabulary: [
      { word: "tipped",       pos: "adj.", meaning: "带尖的；蘸过药水的", gameContext: "Tipped Arrows are arrows dipped in potions" },
      { word: "instant",      pos: "adj.", meaning: "立即的；瞬间的",     gameContext: "Arrow of Harming deals instant damage" },
      { word: "poison",       pos: "n.", meaning: "中毒",                 gameContext: "Arrow of Poison makes enemies slowly lose health" },
      { word: "slowness",     pos: "n.", meaning: "缓慢；迟缓",           gameContext: "Arrow of Slowness slows down enemies" },
      { word: "cauldron",     pos: "n.", meaning: "炼药锅",               gameContext: "You can craft Tipped Arrows with a Cauldron" },
    ],

    wordCount: 98,
    estimatedDifficulty: "A2 (KET)",
    grammarFocus: "定语从句（that）+ 第三人称单数 + make + 宾 + 原形 + 药水专有名词",
};

export default data;
