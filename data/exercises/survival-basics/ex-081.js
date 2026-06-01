/**
 * mc-ket-081 — Match the Armor
 * Category: Survival Basics / 生存基础
 * Type: Part 2 — Matching (3 players × 3 items, short)
 * Grammar: comparatives（比较级：stronger, the strongest）
 */

(function () {
  if (!window.MINECRAFT_KET_DATA) window.MINECRAFT_KET_DATA = {};

  MINECRAFT_KET_DATA["mc-ket-081"] = {
    id: "mc-ket-081",
    category: "Survival Basics",
    categoryZh: "生存基础",
    type: "Part 2",
    title: "Match the Armor",

    players: [
      { id: 1, name: "Alex", desc: "just started the game and has only cows nearby." },
      { id: 2, name: "Sophie", desc: "has mined a lot of iron and wants normal protection." },
      { id: 3, name: "Tom", desc: "found diamonds and wants the strongest armor." },
    ],

    items: [
      { label: "A", name: "Leather Armor", desc: "The weakest armor. Made from cow leather. Easy to make on day one." },
      { label: "B", name: "Iron Armor", desc: "Good protection for most battles. Made from iron ingots." },
      { label: "C", name: "Diamond Armor", desc: "The strongest armor. Made from diamonds. Very rare!" },
    ],

    correctMatching: { 1: "A", 2: "B", 3: "C" },

    answers: [
      { id: "1", answer: "A (Leather Armor)", explanation: "皮甲（Leather Armor）最容易做，只需要牛掉落的皮革。Alex 刚开始游戏，只能做皮甲。" },
      { id: "2", answer: "B (Iron Armor)", explanation: "铁甲（Iron Armor）防护力不错，是大部分战斗的好选择。Sophie 有很多铁，做铁甲。" },
      { id: "3", answer: "C (Diamond Armor)", explanation: "钻石甲（Diamond Armor）是最强的盔甲。Tom 找到了钻石，当然要做钻石甲。" },
    ],

    vocabulary: [
      { word: "leather", pos: "n.", meaning: "皮革", gameContext: "Cows drop leather. Use it to make light armor on your first day." },
      { word: "diamond", pos: "n.", meaning: "钻石", gameContext: "Diamonds are very rare. Make the strongest tools and armor with them." },
      { word: "protection", pos: "n.", meaning: "保护", gameContext: "Armor gives you protection from attacks. More armor = less damage." },
    ],

    wordCount: 62,
    estimatedDifficulty: "A2 (KET)",
    grammarFocus: "比较级（the weakest, the strongest）",
  };
})();
