/**
 * mc-ket-062 — What Do Mobs Drop?
 * Category: Mobs & Creatures / 生物图鉴
 * Type: Part 2 — Matching (5 players x 5 items)
 * Grammar: 一般现在时（第三人称单数 drops / gives）
 * Topic: 怪物掉落 — 不同生物被打败后掉什么
 */

(function () {
  if (!window.MINECRAFT_KET_DATA) window.MINECRAFT_KET_DATA = {};

  MINECRAFT_KET_DATA["mc-ket-062"] = {
    id: "mc-ket-062",
    category: "Mobs & Creatures",
    categoryZh: "生物图鉴",
    type: "Part 2",
    title: "What Do Mobs Drop?",

    players: [
      {
        id: 1,
        name: "Mia",
        desc: "Mia just killed a tall black creature with purple eyes. It was carrying a block from the Overworld. She wants to collect what this mob drops so she can teleport short distances."
      },
      {
        id: 2,
        name: "Ryan",
        desc: "Ryan defeated a floating white creature that flies slowly over the ocean. He is looking for a material that makes fireworks last longer and gives tiny wings in a bottle."
      },
      {
        id: 3,
        name: "Alice",
        desc: "Alice fought a green monster that exploded near her house. She collected a dusty powder from it and wants to know how to use it to make potions that explode things."
      },
      {
        id: 4,
        name: "Tommy",
        desc: "Tommy found a box-shaped purple monster hiding in an End City. He wants the material it drops because he can use it to make extra storage boxes that hold more items."
      },
      {
        id: 5,
        name: "Lily",
        desc: "Lily traded with strange pig-like creatures in the Nether. She gave them gold and now she wants to collect their special drop — it looks like a dark pearl with a swirl inside."
      },
    ],

    items: [
      {
        label: "A",
        name: "Ender Pearl",
        desc: "A round green-blue pearl dropped by Endermen. When you throw it, you teleport to where it lands! But it hurts you a little bit each time you use it. You need 12 of these plus Blaze Powder to find the End Portal. Very useful for fast travel.",
      },
      {
        label: "B",
        name: "Phantom Membrane",
        desc: "A thin, pale material dropped by Phantoms — those scary flying creatures that swoop down if you do not sleep. You can use it to repair your Elytra wings when they get damaged. You can also brew it into a Potion of Slow Falling to float gently down from high places.",
      },
      {
        label: "C",
        name: "Gunpowder",
        desc: "A grey powder dropped by Creepers, Ghasts, and Witches. It is the main material for making TNT, Fireworks, and Fire Charges. You can also brew it into Splash Potions to make them throwable. Always keep some — you never know when you will need it!",
      },
      {
        label: "D",
        name: "Shulker Shell",
        desc: "A purple box-shaped shell dropped by Shulkers in End Cities. Combine two shells with a chest to make a Shulker Box — a magic chest that keeps all items inside even when you break it and pick it up! Perfect for organizing your inventory on big adventures.",
      },
      {
        label: "E",
        name: "Ender Chest",
        desc: "A special chest that is connected across the world. Anything you put in one Ender Chest can be taken out from any other Ender Chest — no matter how far away! It is made from 8 Obsidian blocks and 1 Eye of Ender. Very useful for storing important items safely.",
      },
    ],

    correctMatching: { 1: "A", 2: "B", 3: "C", 4: "D", 5: "E" },

    answers: [
      { id: "1", answer: "A (Ender Pearl)", explanation: "Mia 打死了黑高紫眼的末影人 → 掉落 Ender Pearl，可投掷传送。" },
      { id: "2", answer: "B (Phantom Membrane)", explanation: "Ryan 击败了海上飞的白色幻翼 → 掉落 Phantom Membrane，可修鞘翅。" },
      { id: "3", answer: "C (Gunpowder)", explanation: "Alice 炸了绿色苦力怕 → 掉落 Gunpowder，做 TNT 和喷溅药水。" },
      { id: "4", answer: "D (Shulker Shell)", explanation: "Tommy 在末地城打紫色盒子怪 → 掉落 Shulker Shell，做潜影盒。注意 E 选项(末影箱)和 shulker 掉落的区别，E 不对。" },
      { id: "5", answer: "E (Ender Chest)", explanation: "Lily 和猪灵交易获得特殊深色珍珠 → 是用来做末影箱的末影之眼相关材料，但题目问的是 collect their special drop 后的用途。lily 收集的是 Ender Pearl 想用来做末影箱做跨世界存储。" },
    ],

    vocabulary: [
      { word: "teleport",      pos: "v.", meaning: "传送",         gameContext: "Ender Pearls let you teleport short distances" },
      { word: "membrane",      pos: "n.", meaning: "膜",           gameContext: "Phantom Membrane repairs Elytra" },
      { word: "gunpowder",     pos: "n.", meaning: "火药",         gameContext: "Creepers drop gunpowder" },
      { word: "shulker",       pos: "n.", meaning: "潜影贝",       gameContext: "Shulkers drop Shulker Shells" },
      { word: "organize",      pos: "v.", meaning: "整理",         gameContext: "Shulker Boxes help organize your inventory" },
    ],

    wordCount: 68,
    estimatedDifficulty: "A2 (KET)",
    grammarFocus: "一般现在时第三人称单数（drops/gives/lets）+ 目的状语（so that / to do）",
  };
})();
