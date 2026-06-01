/**
 * mc-ket-070 — Night Survival
 * Category: Mobs & Creatures / 生物图鉴
 * Type: Part 2 — Matching (3 players × 3 items, short)
 * Grammar: must / should（建议与义务）
 */

(function () {
  if (!window.MINECRAFT_KET_DATA) window.MINECRAFT_KET_DATA = {};

  MINECRAFT_KET_DATA["mc-ket-070"] = {
    id: "mc-ket-070",
    category: "Mobs & Creatures",
    categoryZh: "生物图鉴",
    type: "Part 2",
    title: "Night Survival",

    players: [
      { id: 1, name: "Alex", desc: "A skeleton is shooting arrows at her." },
      { id: 2, name: "Sophie", desc: "A creeper is walking toward her base." },
      { id: 3, name: "Tom", desc: "He cannot see anything in a dark cave." },
    ],

    items: [
      { label: "A", name: "Shield", desc: "Blocks arrows and protects you from attacks." },
      { label: "B", name: "Bow", desc: "Shoots arrows from far away. Stay safe!" },
      { label: "C", name: "Torches", desc: "Makes light so you can see in the dark." },
    ],

    correctMatching: { 1: "A", 2: "B", 3: "C" },

    answers: [
      { id: "1", answer: "A (Shield)", explanation: "盾牌（Shield）可以挡住骷髅射来的箭。Alex 应该用盾牌保护自己。" },
      { id: "2", answer: "B (Bow)", explanation: "弓（Bow）可以从远处射箭。Sophie 应该用弓远程攻击苦力怕，保持安全距离。" },
      { id: "3", answer: "C (Torches)", explanation: "火把（Torch）能发出亮光。Tom 在黑暗洞穴里需要火把才能看见路。" },
    ],

    vocabulary: [
      { word: "shield", pos: "n.", meaning: "盾牌", gameContext: "Hold a shield in your hand to block arrows from skeletons." },
      { word: "bow", pos: "n.", meaning: "弓", gameContext: "Use a bow to shoot arrows at mobs from a safe distance." },
      { word: "torch", pos: "n.", meaning: "火把", gameContext: "Place torches on walls to light up dark caves and stop mobs spawning." },
    ],

    wordCount: 70,
    estimatedDifficulty: "A2 (KET)",
    grammarFocus: "must / should（情态动词：建议 vs 义务）",
  };
})();
