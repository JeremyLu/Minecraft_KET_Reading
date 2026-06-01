/**
 * mc-ket-067 — Match the Enchantment
 * Category: Survival Basics / 生存基础
 * Type: Part 2 — Matching (5 players x 5 items)
 * Grammar: 定语从句（which / that）+ 被动语态
 * Topic: 附魔 — 不同工具配不同附魔效果
 */

(function () {
  if (!window.MINECRAFT_KET_DATA) window.MINECRAFT_KET_DATA = {};

  MINECRAFT_KET_DATA["mc-ket-067"] = {
    id: "mc-ket-067",
    category: "Survival Basics",
    categoryZh: "生存基础",
    type: "Part 2",
    title: "Match the Enchantment",

    players: [
      {
        id: 1,
        name: "Liam",
        desc: "Liam loves mining and wants to dig diamonds faster. He needs a magical enchantment that makes his pickaxe break stone blocks much more quickly than usual."
      },
      {
        id: 2,
        name: "Isla",
        desc: "Isla built a wheat farm near a river. But every time she breaks the fully grown wheat, it drops only one piece. She wants an enchantment that gives her more wheat and seeds when she harvests her crops."
      },
      {
        id: 3,
        name: "Mason",
        desc: "Mason is fishing on a wooden dock. He wants to catch more fish and maybe even find treasure items like enchanted books and name tags while he waits. He needs the right enchantment for his fishing rod."
      },
      {
        id: 4,
        name: "Ellie",
        desc: "Ellie found a rare diamond pickaxe in a dungeon chest. But it only has a little durability left. She wants an enchantment that can fix the pickaxe slowly while she is using it, without needing an anvil."
      },
      {
        id: 5,
        name: "Caleb",
        desc: "Caleb is building a bridge over a lava lake in the Nether. He is worried about falling in. He wants an enchantment on his boots so that if he walks too close to the edge, the lava will push him back instead of pulling him in."
      },
    ],

    items: [
      {
        label: "A",
        name: "Efficiency V",
        desc: "One of the most popular enchantments for pickaxes, axes, and shovels. At the highest level (Level V), your tool digs blocks incredibly fast — almost like creative mode! A Diamond Pickaxe with Efficiency V can mine stone in less than half a second.",
      },
      {
        label: "B",
        name: "Fortune III",
        desc: "An enchantment for pickaxes, axes, and shovels. It makes ores drop more items when you mine them. Diamond Ore with Fortune III can drop up to 4 diamonds instead of just 1! It also works on crops — you get more wheat, carrots, and potatoes from each harvest.",
      },
      {
        label: "C",
        name: "Luck of the Sea III",
        desc: "A special enchantment only for fishing rods. It makes you catch fish much faster and greatly increases your chance of pulling up treasure items instead of junk. With Luck of the Sea III, you can get enchanted books, bows, and even name tags from fishing!",
      },
      {
        label: "D",
        name: "Mending",
        desc: "A rare treasure enchantment that you can only find in chests or from fishing. When you hold a tool with Mending and collect XP orbs, the experience points go toward repairing the tool instead of your level bar. It is the best way to keep your favorite tools forever!",
      },
      {
        label: "E",
        name: "Frost Walker",
        desc: "A magical enchantment for boots that turns water into ice when you walk on it. The ice stays for a few seconds and then melts back into water. It also works on lava — but be careful! You need Fire Resistance too because the ice breaks quickly above lava.",
      },
    ],

    correctMatching: { 1: "A", 2: "B", 3: "C", 4: "D", 5: "E" },

    answers: [
      { id: "1", answer: "A (Efficiency V)", explanation: "Liam 要加速挖矿 → Efficiency 让镐子挖方块飞快。(注意：Fortune 只加掉落不加速度!)" },
      { id: "2", answer: "B (Fortune III)", explanation: "Isla 要更多收成 → Fortune 不仅加矿石掉落、也对作物有效，收小麦更多。" },
      { id: "3", answer: "C (Luck of the Sea III)", explanation: "Mason 要更多鱼和宝藏 → Luck of the Sea 是钓竿专属附魔，加快钓鱼速度加宝箱率。" },
      { id: "4", answer: "D (Mending)", explanation: "Ellie 要自动修工具 → Mending 用经验球修理工具耐久，不用铁砧。" },
      { id: "5", answer: "E (Frost Walker)", explanation: "Caleb 怕掉进岩浆 → Frost Walker 在水上结冰，岩浆上方也有短暂冰层（需配合防火）。" },
    ],

    vocabulary: [
      { word: "efficiency",    pos: "n.", meaning: "效率",         gameContext: "Efficiency makes your pickaxe dig faster" },
      { word: "fortune",       pos: "n.", meaning: "时运",         gameContext: "Fortune gives you more diamonds from each ore" },
      { word: "mending",       pos: "n.", meaning: "经验修补",     gameContext: "Mending repairs your tools using XP orbs" },
      { word: "harvest",       pos: "v.", meaning: "收获",         gameContext: "Fortune helps when you harvest crops" },
      { word: "durability",    pos: "n.", meaning: "耐久",         gameContext: "Mending slowly fixes durability" },
    ],

    wordCount: 68,
    estimatedDifficulty: "A2 (KET)",
    grammarFocus: "定语从句（which / that）+ 比较级 + 条件状语",
  };
})();
