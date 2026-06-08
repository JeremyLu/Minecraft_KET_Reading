// @ts-nocheck
import type { ExerciseData } from '../../../types';

const data: ExerciseData = {
id: "mc-ket-059",
    category: "Survival Basics",
    categoryZh: "生存基础",
    type: "Part 4",
    title: "Copper Armor Set",

    clozeText: [
      "The Copper Armor set was added in the Copper Age Update.",
      "It includes a helmet, chestplate, leggings, (1)[____] boots.",
      "A full copper armor set gives you 5 armor points.",
      "This is (2)[____] than leather armor (4 points) but",
      "lower than iron armor (7 points).",
      "One important fact about copper armor is that it",
      "does NOT (3)[____] like copper blocks. It keeps its",
      "shiny orange colour forever. You can enchant it",
      "with protection (4)[____] other useful enchantments.",
      "Copper armor has good durability. It lasts",
      "(5)[____] than leather and gold armor. If your",
      "copper armor breaks, you can put it (6)[____] a",
      "furnace to get copper nuggets back!",
    ].join(" "),

    blanks: [
      { id: 1, options: ["and", "or", "but"],               correct: 0 },
      { id: 2, options: ["better", "worse", "less"],        correct: 0 },
      { id: 3, options: ["oxidize", "break", "shine"],      correct: 0 },
      { id: 4, options: ["and", "or", "but"],               correct: 0 },
      { id: 5, options: ["longer", "shorter", "heavier"],   correct: 0 },
      { id: 6, options: ["in", "on", "under"],              correct: 0 },
    ],

    answers: [
      {
        id: "1",
        answer: "A — and",
        explanation: "helmet, chestplate, leggings, and boots — and 连接并列项。",
      },
      {
        id: "2",
        answer: "A — better",
        explanation: "better than leather armor，比较级。5 点护甲 > 4 点皮革护甲。",
      },
      {
        id: "3",
        answer: "A — oxidize",
        explanation: "does NOT oxidize — 铜装备不会氧化，保持橙色外观。",
      },
      {
        id: "4",
        answer: "A — and",
        explanation: "protection and other enchantments — and 连接两种附魔类型。",
      },
      {
        id: "5",
        answer: "A — longer",
        explanation: "lasts longer than leather and gold，比较级，耐久度更高。",
      },
      {
        id: "6",
        answer: "A — in",
        explanation: "put it in a furnace — 放进熔炉里，in 表示在容器内部。",
      },
    ],

    vocabulary: [
      { word: "armor",        pos: "n.", meaning: "盔甲；护甲",            gameContext: "Copper armor set includes helmet, chestplate, leggings, boots" },
      { word: "oxidize",      pos: "v.", meaning: "氧化；生锈",            gameContext: "Copper armor does NOT oxidize like copper blocks" },
      { word: "nugget",       pos: "n.", meaning: "粒；小块",              gameContext: "Smelt broken copper armor to get copper nuggets" },
      { word: "chestplate",   pos: "n.", meaning: "胸甲",                  gameContext: "Craft a copper chestplate with 8 copper ingots" },
      { word: "furnace",      pos: "n.", meaning: "熔炉",                  gameContext: "Put copper armor in a furnace to recycle it" },
    ],

    wordCount: 100,
    estimatedDifficulty: "A2 (KET)",
    grammarFocus: "比较级（better/longer than）+ 否定句（does NOT oxidize）+ 并列连词（and）",
};

export default data;
