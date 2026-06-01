/**
 * mc-ket-088 — Building Time!
 * Category: Survival Basics / 生存基础
 * Type: Part 2 — Matching (3 players × 3 items, short)
 * Grammar: need / want（情态动词 + 动词）
 */

(function () {
  if (!window.MINECRAFT_KET_DATA) window.MINECRAFT_KET_DATA = {};

  MINECRAFT_KET_DATA["mc-ket-088"] = {
    id: "mc-ket-088",
    category: "Survival Basics",
    categoryZh: "生存基础",
    type: "Part 2",
    title: "Building Time!",

    players: [
      { id: 1, name: "Alex", desc: "wants to make a big window to see her garden." },
      { id: 2, name: "Sophie", desc: "wants to make a soft floor for her bedroom." },
      { id: 3, name: "Tom", desc: "wants to keep sheep inside a pen so they don't run away." },
    ],

    items: [
      { label: "A", name: "Wool Blocks", desc: "Soft and colorful. You can dye them. Perfect for carpets and beds." },
      { label: "B", name: "Fence", desc: "Made from sticks. Mobs and animals cannot jump over it. Great for pens!" },
      { label: "C", name: "Glass Panes", desc: "Thin and clear. You can see through them. Perfect for windows!" },
    ],

    correctMatching: { 1: "C", 2: "A", 3: "B" },

    answers: [
      { id: "1", answer: "C (Glass Panes)", explanation: "玻璃板（Glass Panes）透明又薄，做窗户最好。Alex 想透过窗户看花园。" },
      { id: "2", answer: "A (Wool Blocks)", explanation: "羊毛块（Wool）柔软，还能染色。Sophie 想给卧室铺地毯（carpet），用羊毛最合适。" },
      { id: "3", answer: "B (Fence)", explanation: "栅栏（Fence）是方块高的障碍，动物跳不过去。Tom 用栅栏围个圈（pen）来关羊。" },
    ],

    vocabulary: [
      { word: "glass", pos: "n.", meaning: "玻璃", gameContext: "Smelt sand in a furnace to make glass. Use glass panes for windows." },
      { word: "fence", pos: "n.", meaning: "栅栏", gameContext: "Craft fences from sticks. Place them in a line to make a pen for your animals." },
      { word: "dye", pos: "v.", meaning: "染色", gameContext: "Use dyes from flowers to color wool, glass and leather armor any color!" },
    ],

    wordCount: 65,
    estimatedDifficulty: "A2 (KET)",
    grammarFocus: "need / want + 动词（情态动词表达需求）",
  };
})();
