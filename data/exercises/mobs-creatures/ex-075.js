/**
 * mc-ket-075 — Villager Wants to Trade
 * Category: Mobs & Creatures / 生物图鉴
 * Type: Part 1 — Short Text (Chat, ~20 words, 1 × MCQ)
 * Grammar: want to trade（want + to-infinitive）
 */

(function () {
  if (!window.MINECRAFT_KET_DATA) window.MINECRAFT_KET_DATA = {};

  MINECRAFT_KET_DATA["mc-ket-075"] = {
    id: "mc-ket-075",
    category: "Mobs & Creatures",
    categoryZh: "生物图鉴",
    type: "Part 1",
    title: "Villager Wants to Trade",

    passage: [
      "🟤 Farmer Villager says:",
      "Give me 20 wheat → I will give you 1 emerald!",
    ].join("\n"),

    questions: [
      {
        id: "q1",
        text: "What does the villager want?",
        options: [
          "He wants to buy wheat with emeralds.",
          "He wants to give an emerald for 20 wheat.",
          "He wants to find more villagers.",
        ],
        correct: 1,
      },
    ],

    answers: [
      { id: "q1", answer: "B", explanation: "村民说：你给我20个小麦（Give me 20 wheat），我给你1个绿宝石（I will give you 1 emerald）。这是用绿宝石换小麦。A 反了——是拿小麦换绿宝石，不是拿绿宝石买小麦。" },
    ],

    vocabulary: [
      { word: "villager", pos: "n.", meaning: "村民", gameContext: "Villagers live in villages and will trade items with you." },
      { word: "trade", pos: "v.", meaning: "交易", gameContext: "You can trade with villagers — give them items to get other items." },
      { word: "emerald", pos: "n.", meaning: "绿宝石", gameContext: "Emeralds are the money of Minecraft. Villagers use them to trade." },
    ],

    wordCount: 18,
    estimatedDifficulty: "A2 (KET)",
    grammarFocus: "want to + verb（want to trade：want 后跟 to 不定式）",
  };
})();
