/**
 * mc-ket-082 — Help the Villagers
 * Category: Mobs & Creatures / 生物图鉴
 * Type: Part 2 — Matching (3 players × 3 items, short)
 * Grammar: needs / wants（第三人称单数）
 */

(function () {
  if (!window.MINECRAFT_KET_DATA) window.MINECRAFT_KET_DATA = {};

  MINECRAFT_KET_DATA["mc-ket-082"] = {
    id: "mc-ket-082",
    category: "Mobs & Creatures",
    categoryZh: "生物图鉴",
    type: "Part 2",
    title: "Help the Villagers",

    players: [
      { id: 1, name: "Farmer", desc: "needs emeralds to buy better tools." },
      { id: 2, name: "Librarian", desc: "needs paper to make new books." },
      { id: 3, name: "Butcher", desc: "needs raw meat to cook for the village." },
    ],

    items: [
      { label: "A", name: "Sugar Cane", desc: "Grows near water. You can turn it into paper." },
      { label: "B", name: "Wheat", desc: "Grows on farmland. Farmers will trade emeralds for it." },
      { label: "C", name: "Raw Chicken", desc: "Dropped by chickens. Butchers use it to make cooked meat." },
    ],

    correctMatching: { 1: "B", 2: "A", 3: "C" },

    answers: [
      { id: "1", answer: "B (Wheat)", explanation: "农民（Farmer）会用绿宝石（emerald）换小麦（Wheat）。种小麦来赚绿宝石。" },
      { id: "2", answer: "A (Sugar Cane)", explanation: "图书管理员（Librarian）需要纸（paper）。甘蔗（Sugar Cane）能做纸，给他就能换到书。" },
      { id: "3", answer: "C (Raw Chicken)", explanation: "屠夫（Butcher）需要生鸡肉（Raw Chicken）来做饭。鸡掉落的生鸡肉正好可以给他。" },
    ],

    vocabulary: [
      { word: "emerald", pos: "n.", meaning: "绿宝石", gameContext: "Villagers trade items for emeralds. Use emeralds to buy rare things." },
      { word: "librarian", pos: "n.", meaning: "图书管理员", gameContext: "The librarian villager sells enchanted books and bookshelves." },
      { word: "trade", pos: "v.", meaning: "交易", gameContext: "Right-click a villager to trade — give them items, get emeralds or goods." },
    ],

    wordCount: 70,
    estimatedDifficulty: "A2 (KET)",
    grammarFocus: "第三人称单数（needs, wants, grows）",
  };
})();
