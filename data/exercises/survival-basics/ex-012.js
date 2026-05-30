/**
 * mc-ket-012 — How to Make a Bed
 * Category: Survival Basics / 生存基础
 * Type: Part 4 — Multiple-Choice Cloze (Articles: a/an/the)
 */

(function () {
  if (!window.MINECRAFT_KET_DATA) window.MINECRAFT_KET_DATA = {};

  MINECRAFT_KET_DATA["mc-ket-012"] = {
    id: "mc-ket-012",
    category: "Survival Basics",
    categoryZh: "生存基础",
    type: "Part 4",
    title: "How to Make a Bed",

    clozeText: "A bed is one of (1)[____] most useful things in Minecraft. When you sleep in (2)[____] bed at night, you can skip the dangerous dark hours. To make a bed, you need three blocks of wool and three wooden planks. First, find (3)[____] sheep and use shears to get wool. Then open (4)[____] crafting table and put (5)[____] wool across the top row and the planks across the middle row. Now you have a bed! Place it in a safe room and right-click to sleep. Remember: (6)[____] bed only works at night or during thunderstorms.",

    blanks: [
      { id: 1, options: ["the", "a", "an"], correct: 0 },
      { id: 2, options: ["a", "an", "the"], correct: 0 },
      { id: 3, options: ["some", "a", "an"], correct: 0 },
      { id: 4, options: ["a", "the", "an"], correct: 1 },
      { id: 5, options: ["the", "a", "—"], correct: 0 },
      { id: 6, options: ["A", "An", "The"], correct: 0 },
    ],

    answers: [
      { id: "1", answer: "the", explanation: "the most useful — 最高级前用定冠词 the，表示'最有用的东西之一'。" },
      { id: "2", answer: "a", explanation: "sleep in a bed — 泛指'一张床'，第一次提到用不定冠词 a。" },
      { id: "3", answer: "some", explanation: "find some sheep — 找一些羊，sheep 可数名词复数，some 表示'一些'。a/an 后接单数。" },
      { id: "4", answer: "the", explanation: "the crafting table — 特指玩家的工作台，前面已提到过，用 the。" },
      { id: "5", answer: "the", explanation: "the wool — 特指前面找到的那三块羊毛，用 the 表示特指。" },
      { id: "6", answer: "A", explanation: "A bed — 泛指床这种物品，用 a 表示'一张床'，与前面提到的 bed 为同类泛指。" },
    ],

    vocabulary: [
      { word: "wool", pos: "n.", meaning: "羊毛", gameContext: "Get wool from sheep using shears — you need three for a bed" },
      { word: "skip", pos: "v.", meaning: "跳过", gameContext: "Sleeping in a bed lets you skip the dangerous night time" },
      { word: "shears", pos: "n.", meaning: "剪刀", gameContext: "Craft shears with two iron ingots — use them to cut wool from sheep" },
      { word: "row", pos: "n.", meaning: "行", gameContext: "The crafting table has a 3×3 grid — fill the top row with wool for a bed" },
      { word: "thunderstorm", pos: "n.", meaning: "雷暴", gameContext: "You can also sleep during thunderstorms to skip the bad weather" },
    ],

    wordCount: 95,
    estimatedDifficulty: "A2 (KET)",
    grammarFocus: "Articles（冠词：a/an/the + some 限定词）",
  };
})();
