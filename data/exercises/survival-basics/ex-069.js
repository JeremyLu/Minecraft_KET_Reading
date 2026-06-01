/**
 * mc-ket-069 — Find the Right Tool
 * Category: Survival Basics / 生存基础
 * Type: Part 2 — Matching (3 players × 3 items, short)
 * Grammar: can (ability), need (necessity)
 */

(function () {
  if (!window.MINECRAFT_KET_DATA) window.MINECRAFT_KET_DATA = {};

  MINECRAFT_KET_DATA["mc-ket-069"] = {
    id: "mc-ket-069",
    category: "Survival Basics",
    categoryZh: "生存基础",
    type: "Part 2",
    title: "Find the Right Tool",

    players: [
      { id: 1, name: "Alex", desc: "needs to break a stone wall fast." },
      { id: 2, name: "Sophie", desc: "wants to cut down a tall oak tree." },
      { id: 3, name: "Tom", desc: "needs to dig dirt for a farm." },
    ],

    items: [
      { label: "A", name: "Iron Pickaxe", desc: "Best tool for breaking stone and ores." },
      { label: "B", name: "Iron Axe", desc: "Best tool for chopping wood and trees." },
      { label: "C", name: "Iron Shovel", desc: "Best tool for digging dirt, sand and gravel." },
    ],

    correctMatching: { 1: "A", 2: "B", 3: "C" },

    answers: [
      { id: "1", answer: "A (Iron Pickaxe)", explanation: "镐（Pickaxe）专门用来挖石头和矿石。Alex 要快速打破石墙，选铁镐。" },
      { id: "2", answer: "B (Iron Axe)", explanation: "斧头（Axe）专门用来砍木头。Sophie 要砍橡树，选铁斧。" },
      { id: "3", answer: "C (Iron Shovel)", explanation: "铲子（Shovel）专门用来挖泥土和沙子。Tom 要挖农场的地，选铁铲。" },
    ],

    vocabulary: [
      { word: "pickaxe", pos: "n.", meaning: "镐", gameContext: "Use a pickaxe to mine stone, coal and iron." },
      { word: "axe", pos: "n.", meaning: "斧头", gameContext: "Use an axe to chop trees faster than using your hand." },
      { word: "shovel", pos: "n.", meaning: "铲子", gameContext: "Use a shovel to dig dirt, sand and gravel quickly." },
    ],

    wordCount: 75,
    estimatedDifficulty: "A2 (KET)",
    grammarFocus: "can / need（情态动词表示能力和需求）",
  };
})();
