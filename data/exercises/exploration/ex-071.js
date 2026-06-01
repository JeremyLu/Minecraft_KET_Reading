/**
 * mc-ket-071 — What's That Sound?
 * Category: Adventure & Exploration / 冒险探索
 * Type: Part 2 — Matching (3 players × 3 items, short)
 * Grammar: hear + object + verb-ing（感官动词 + 现在分词）
 */

(function () {
  if (!window.MINECRAFT_KET_DATA) window.MINECRAFT_KET_DATA = {};

  MINECRAFT_KET_DATA["mc-ket-071"] = {
    id: "mc-ket-071",
    category: "Exploration & Adventure",
    categoryZh: "冒险探索",
    type: "Part 2",
    title: "What's That Sound?",

    players: [
      { id: 1, name: "Alex", desc: "hears a 'ssssss' sound behind her." },
      { id: 2, name: "Sophie", desc: "hears a 'cluck cluck' in the grass." },
      { id: 3, name: "Tom", desc: "hears a 'baa baa' near his farm." },
    ],

    items: [
      { label: "A", name: "Chicken", desc: "lays eggs. You can hear them clucking on grass." },
      { label: "B", name: "Sheep", desc: "gives wool. They make a 'baa' sound." },
      { label: "C", name: "Creeper", desc: "explodes! It hisses 'sssss' before it blows up." },
    ],

    correctMatching: { 1: "C", 2: "A", 3: "B" },

    answers: [
      { id: "1", answer: "C (Creeper)", explanation: "苦力怕爆炸前会发出嘶嘶声 'sssss'。Alex 听到这个声音要赶紧跑开。" },
      { id: "2", answer: "A (Chicken)", explanation: "鸡（Chicken）会发出咯咯声 'cluck cluck'，经常出现在草地上。" },
      { id: "3", answer: "B (Sheep)", explanation: "羊（Sheep）会发出咩咩声 'baa baa'，Tom 的农场旁边有一只羊。" },
    ],

    vocabulary: [
      { word: "hiss", pos: "v.", meaning: "发出嘶嘶声", gameContext: "Creepers hiss before they explode — run away fast!" },
      { word: "cluck", pos: "v.", meaning: "咯咯叫", gameContext: "Chickens cluck when they walk around on grass blocks." },
      { word: "explode", pos: "v.", meaning: "爆炸", gameContext: "Creepers explode when they get too close to a player." },
    ],

    wordCount: 65,
    estimatedDifficulty: "A2 (KET)",
    grammarFocus: "hear + object + verb-ing（感官动词 + 现在分词）",
  };
})();
