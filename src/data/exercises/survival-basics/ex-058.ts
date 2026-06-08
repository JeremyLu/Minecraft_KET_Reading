// @ts-nocheck
import type { ExerciseData } from '../../../types';

const data: ExerciseData = {
id: "mc-ket-058",
    category: "Survival Basics",
    categoryZh: "生存基础",
    type: "Part 3",
    title: "The Copper Sword",

    passage: [
      "After the Copper Age Update, Steve found something new.",
      "He was mining near a cave when he saw orange ore in the",
      "walls. It was copper ore! He had seen it before, but now",
      "copper could be used for much more.",
      "",
      "Steve smelted the copper ore into copper ingots. Then he",
      "crafted a copper sword. It was orange and shiny. The copper",
      "sword was not as strong as iron but better than stone.",
      "",
      "Here is what Steve learned about the copper sword:",
      "It does 3 points of damage, the same as a stone sword.",
      "But its durability is 191, which is higher than stone (131)",
      "and lower than iron (251). It has an enchantability of 13,",
      "which makes it easier to enchant than iron.",
      "",
      "If you are new to the game, a copper sword is a great",
      "choice. Copper ore is easier to find than iron, and the",
      "sword lasts longer than stone. When you are ready, you",
      "can upgrade to an iron sword later.",
    ].join("\n"),

    questions: [
      {
        id: "q1",
        text: "What colour is copper ore?",
        options: ["Blue", "Orange", "Green"],
        correct: 1,
      },
      {
        id: "q2",
        text: "How much damage does a copper sword deal?",
        options: ["2 points", "3 points", "4 points"],
        correct: 1,
      },
      {
        id: "q3",
        text: "What is the durability of a copper sword?",
        options: ["131", "191", "251"],
        correct: 1,
      },
      {
        id: "q4",
        text: "Why is a copper sword good for new players?",
        options: ["It is the strongest weapon", "Copper ore is easier to find than iron", "It never breaks"],
        correct: 1,
      },
      {
        id: "q5",
        text: "What is the enchantability of a copper sword?",
        options: ["10", "13", "15"],
        correct: 1,
      },
    ],

    answers: [
      { id: "q1", answer: "B", explanation: "铜矿石是橙色的（orange ore in the walls）。" },
      { id: "q2", answer: "B", explanation: "铜剑造成 3 点伤害，与石剑相同（the same as a stone sword）。" },
      { id: "q3", answer: "B", explanation: "铜剑耐久度 191，介于石剑 131 和铁剑 251 之间。" },
      { id: "q4", answer: "B", explanation: "铜矿比铁矿更容易获取（Copper ore is easier to find than iron）。" },
      { id: "q5", answer: "B", explanation: "铜剑附魔能力 13，比铁剑的 14 稍低但依然不错。" },
    ],

    vocabulary: [
      { word: "copper",      pos: "n.", meaning: "铜",                        gameContext: "Copper ore is orange and common in caves" },
      { word: "smelt",       pos: "v.", meaning: "熔炼；冶炼",                gameContext: "Smelt copper ore in a furnace to get copper ingots" },
      { word: "ingot",       pos: "n.", meaning: "锭",                        gameContext: "Craft a sword with 2 copper ingots and 1 stick" },
      { word: "durability",  pos: "n.", meaning: "耐久度",                    gameContext: "Copper sword has 191 durability, more than stone" },
      { word: "enchant",     pos: "v.", meaning: "附魔",                      gameContext: "Copper sword is easier to enchant than iron" },
    ],

    wordCount: 158,
    estimatedDifficulty: "A2 (KET)",
    grammarFocus: "比较级（stronger than / easier to find）+ 条件句（if you are new...）",
};

export default data;
