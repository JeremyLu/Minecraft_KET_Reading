// @ts-nocheck
import type { ExerciseData } from '../../../types';

const data: ExerciseData = {
id: "mc-ket-006",
    category: "Survival Basics",
    categoryZh: "生存基础",
    type: "Part 5",
    title: "How to Craft a Pickaxe",

    clozeText: [
      "A pickaxe is the most important tool (1)[____] Minecraft.",
      "First, you need (2)[____] find a tree and break some wood with your hands.",
      "Open your inventory and turn the wood (3)[____] planks.",
      "Then make a crafting table and put (4)[____] on the ground.",
      "Use two sticks and three blocks of wood or stone to craft your first",
      "pickaxe. (5)[____] you have a stone pickaxe, you can mine iron and other",
      "useful materials.",
    ].join(" "),

    blanks: [
      { id: 1, correct: "in" },
      { id: 2, correct: "to" },
      { id: 3, correct: "into" },
      { id: 4, correct: "it" },
      { id: 5, correct: "When" },
    ],

    answers: [
      {
        id: "1",
        answer: "in",
        explanation:
          "the most important tool IN Minecraft — 介词 in 表示「在……之中」",
      },
      {
        id: "2",
        answer: "to",
        explanation:
          "need TO find — need + to do 表示需要做某事",
      },
      {
        id: "3",
        answer: "into",
        explanation:
          "turn wood INTO planks — into 表示转变、变成",
      },
      {
        id: "4",
        answer: "it",
        explanation:
          "put IT on the ground — 代词 it 指代前面的 a crafting table",
      },
      {
        id: "5",
        answer: "When",
        explanation:
          "WHEN you have a stone pickaxe — 时间状语从句，当你有了石镐之后",
      },
    ],

    vocabulary: [
      {
        word: "pickaxe",
        pos: "n.",
        meaning: "镐子",
        gameContext:
          "Tool used to mine stone, ores and other hard blocks — pick + axe",
      },
      {
        word: "inventory",
        pos: "n.",
        meaning: "背包/物品栏",
        gameContext:
          "Press E to open your inventory — all your items are stored here",
      },
      {
        word: "planks",
        pos: "n.",
        meaning: "木板",
        gameContext:
          "Made from wood logs — used to build houses and crafting tables",
      },
      {
        word: "craft",
        pos: "v.",
        meaning: "合成/制作",
        gameContext:
          "Combine materials on a crafting table to make new tools and items",
      },
    ],

    wordCount: 90,
    estimatedDifficulty: "A2 (KET)",
    grammarFocus: "Prepositions & Pronouns（介词、代词：in, to, into, it, when）",
};

export default data;
