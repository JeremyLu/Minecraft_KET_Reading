/**
 * mc-ket-061 — Match the Building Blocks
 * Category: Survival Basics / 生存基础
 * Type: Part 2 — Matching (5 players x 5 items)
 * Grammar: 目的状语 (to do) + 情态动词 (can/should)
 * Topic: 建筑材料 — 不同建造需求选不同方块
 */

(function () {
  if (!window.MINECRAFT_KET_DATA) window.MINECRAFT_KET_DATA = {};

  MINECRAFT_KET_DATA["mc-ket-061"] = {
    id: "mc-ket-061",
    category: "Survival Basics",
    categoryZh: "生存基础",
    type: "Part 2",
    title: "Match the Building Blocks",

    players: [
      {
        id: 1,
        name: "Emma",
        desc: "Emma wants to build a glass house on the beach. She needs a block that lets light pass through so she can see the ocean outside."
      },
      {
        id: 2,
        name: "Jack",
        desc: "Jack is making a path through lava in the Nether. He needs blocks that cannot burn or melt when they touch fire and lava."
      },
      {
        id: 3,
        name: "Lucy",
        desc: "Lucy is building a roller coaster track. She needs a block that can stick to walls and floors so carts can climb up and go upside down."
      },
      {
        id: 4,
        name: "Ben",
        desc: "Ben wants to make a secret room under his house. He needs a block that looks like a bookshelf from outside but can open to reveal a hidden door."
      },
      {
        id: 5,
        name: "Chloe",
        desc: "Chloe is building a modern skyscraper in creative mode. She wants a clean white block that looks smooth and bright, perfect for modern buildings."
      },
    ],

    items: [
      {
        label: "A",
        name: "Glass Blocks",
        desc: "A clear block that you can see through. It lets sunlight pass through easily, making rooms bright during the day. You can make it by smelting sand in a furnace. It breaks easily, so be careful! You cannot get the block back unless you use a tool with Silk Touch.",
      },
      {
        label: "B",
        name: "Netherite Blocks",
        desc: "The strongest and most fire-resistant block in Minecraft. It does not burn in lava and cannot be destroyed by fire. It is made from 9 Netherite Ingots. It is very expensive to make but perfect for building in dangerous places like the Nether.",
      },
      {
        label: "C",
        name: "Honey Blocks",
        desc: "A sticky orange block made from 4 Honey Bottles. Mobs and players walk very slowly on it. Most importantly, you can place it on walls and carts on rails will stick to its side — this lets you build tracks that go upside down!",
      },
      {
        label: "D",
        name: "Chiseled Bookshelf",
        desc: "A special decorative block that looks like a bookshelf but has a different texture. You can place it next to a wooden door to make it look like a normal library. It can actually store real books inside, which makes it both useful and sneaky.",
      },
      {
        label: "E",
        name: "Quartz Blocks",
        desc: "A smooth, bright white block that looks very clean and modern. You get it by mining Nether Quartz in the Nether and crafting 4 pieces into a block. It is popular for modern houses, skyscrapers, and floors because of its simple and elegant look.",
      },
    ],

    correctMatching: { 1: "A", 2: "B", 3: "C", 4: "D", 5: "E" },

    answers: [
      { id: "1", answer: "A (Glass Blocks)", explanation: "Emma 要透光看海的房子 → Glass Blocks 透明、可以让光穿过。" },
      { id: "2", answer: "B (Netherite Blocks)", explanation: "Jack 要穿过岩浆 → Netherite 不燃烧、不掉进熔岩。" },
      { id: "3", answer: "C (Honey Blocks)", explanation: "Lucy 要贴在墙上的块 → Honey Block 可粘墙、矿车可侧挂。" },
      { id: "4", answer: "D (Chiseled Bookshelf)", explanation: "Ben 要伪装暗门 → Chiseled Bookshelf 像书架但可藏门后。" },
      { id: "5", answer: "E (Quartz Blocks)", explanation: "Chloe 要白净现代风 → Quartz 洁白光滑、适合现代建筑。" },
    ],

    vocabulary: [
      { word: "transparent",    pos: "adj.", meaning: "透明的",       gameContext: "Glass is a transparent block" },
      { word: "fire-resistant", pos: "adj.", meaning: "防火的",       gameContext: "Netherite blocks are fire-resistant" },
      { word: "chiseled",       pos: "adj.", meaning: "錾制的",       gameContext: "Chiseled Bookshelf has a special texture" },
      { word: "modern",         pos: "adj.", meaning: "现代的",       gameContext: "Quartz is popular for modern buildings" },
      { word: "skyscraper",     pos: "n.",   meaning: "摩天大楼",     gameContext: "Chloe is building a skyscraper" },
    ],

    wordCount: 72,
    estimatedDifficulty: "A2 (KET)",
    grammarFocus: "目的状语从句（to do / so that）+ 情态动词（can/cannot）",
  };
})();
