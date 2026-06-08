// @ts-nocheck
import type { ExerciseData } from '../../../types';

const data: ExerciseData = {
id: "mc-ket-033",
    category: "Survival Basics",
    categoryZh: "生存基础",
    type: "Part 5",
    title: "How to Mine Iron Ore",

    clozeText: [
      "Iron is one of the most important materials (1)[____] Minecraft.",
      "To find iron ore, you must go deep (2)[____] the ground.",
      "Take a stone pickaxe (3)[____] you — you cannot mine iron with",
      "a wooden one. Look (4)[____] the grey blocks with small brown",
      "spots — that is iron ore. After you mine the ore, you will get",
      "raw iron. Put it in a furnace (5)[____] coal to smelt it into",
      "iron ingots. With iron, you can make better tools, armour and",
      "many useful things.",
    ].join(" "),

    blanks: [
      { id: 1, correct: "in" },
      { id: 2, correct: "into" },
      { id: 3, correct: "with" },
      { id: 4, correct: "for" },
      { id: 5, correct: "with" },
    ],

    answers: [
      { id: "1", answer: "in", explanation: "materials IN Minecraft — 在游戏中，in 表示'在……之中'" },
      { id: "2", answer: "into", explanation: "go deep INTO the ground — 向下深入地下，into 表示进入内部" },
      { id: "3", answer: "with", explanation: "take a pickaxe WITH you — 带着镐子一起去，with 表示随身携带" },
      { id: "4", answer: "for", explanation: "look FOR — 寻找，固定搭配 look for = 寻找" },
      { id: "5", answer: "with", explanation: "in a furnace WITH coal — 用煤炭，with 表示使用某种工具/材料" },
    ],

    vocabulary: [
      { word: "iron ore", pos: "n.", meaning: "铁矿石", gameContext: "Grey blocks with brown spots found underground — smelt into iron ingots" },
      { word: "mine", pos: "v.", meaning: "挖掘/采矿", gameContext: "Use a pickaxe to mine stone, ores and other hard blocks" },
      { word: "furnace", pos: "n.", meaning: "熔炉", gameContext: "Use a furnace with coal or wood to cook food and smelt ores" },
      { word: "smelt", pos: "v.", meaning: "熔炼", gameContext: "Smelt raw iron in a furnace to turn it into useful iron ingots" },
      { word: "ingot", pos: "n.", meaning: "锭", gameContext: "Iron ingots are used to craft tools, armour, buckets and more" },
    ],

    wordCount: 85,
    estimatedDifficulty: "A2 (KET)",
    grammarFocus: "Prepositions（介词：in, into, with, for）",
};

export default data;
