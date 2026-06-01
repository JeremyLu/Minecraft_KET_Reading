/**
 * mc-ket-064 — Match the Materials
 * Category: Survival Basics / 生存基础
 * Type: Part 2 — Matching (5 players x 5 items)
 * Grammar: 被动语态（is used for）+ 比较级（harder/stronger）
 * Topic: 材料加工 — 从原材料到成品
 */

(function () {
  if (!window.MINECRAFT_KET_DATA) window.MINECRAFT_KET_DATA = {};

  MINECRAFT_KET_DATA["mc-ket-064"] = {
    id: "mc-ket-064",
    category: "Survival Basics",
    categoryZh: "生存基础",
    type: "Part 2",
    title: "Match the Materials",

    players: [
      {
        id: 1,
        name: "Finn",
        desc: "Finn just dug up some grey blocks deep underground. He wants to smelt them in a furnace to get strong metal bars. What raw material should he put in the furnace?"
      },
      {
        id: 2,
        name: "Olivia",
        desc: "Olivia found a tree with dark brown wood. She chopped it down. Now she wants to turn the wood into small flat pieces that she can use to make tools, sticks, and chests."
      },
      {
        id: 3,
        name: "Theo",
        desc: "Theo found a block covered in red spots deep underground. He knows this is the most valuable ore in Minecraft. He needs a diamond pickaxe just to mine it so he can make the strongest gear."
      },
      {
        id: 4,
        name: "Ruby",
        desc: "Ruby killed many spiders and now has some white string. She also has some sticks from a tree. She wants to combine them to make a tool for climbing up tall cliffs."
      },
      {
        id: 5,
        name: "Oscar",
        desc: "Oscar is walking on a beach and found lots of yellow sand. He remembers that sand can be turned into a hard clear material that is perfect for windows and greenhouses."
      },
    ],

    items: [
      {
        label: "A",
        name: "Iron Ore",
        desc: "A grey block with small brown spots, found underground. When you mine it with a stone pickaxe, it drops raw iron. Put the raw iron in a furnace with coal and it becomes Iron Ingots — the most useful metal for tools, armor, minecarts, and more.",
      },
      {
        label: "B",
        name: "Oak Logs",
        desc: "The brown wood block from Oak Trees. Put one log in the crafting grid to get 4 Oak Planks — flat wooden pieces used for making crafting tables, sticks, chests, doors, and many other things. Wood is the very first material every player starts with!",
      },
      {
        label: "C",
        name: "Ancient Debris",
        desc: "A rare brown block with grey swirls, found only at the bottom of the Nether near lava level. You must mine it with a Diamond Pickaxe. Smelt it to get Netherite Scraps, then combine 4 scraps with 4 gold ingots to make 1 Netherite Ingot — the strongest material!",
      },
      {
        label: "D",
        name: "String",
        desc: "A thin white material dropped by Spiders and Cave Spiders. You can also find it in cobwebs inside mineshafts. Combine 3 string with 3 sticks to make a Bow, or 2 string with 2 sticks to make a Fishing Rod. You can also use it to make Wool!",
      },
      {
        label: "E",
        name: "Sand",
        desc: "A pale yellow block that you can find on beaches and in deserts. Put it in a furnace with any fuel and it becomes Glass — a clear hard block that lights can shine through. You can also make Sandstone for building, or TNT by mixing it with gunpowder.",
      },
    ],

    correctMatching: { 1: "A", 2: "B", 3: "C", 4: "D", 5: "E" },

    answers: [
      { id: "1", answer: "A (Iron Ore)", explanation: "Finn 挖到灰色矿石要烧 → Iron Ore 出铁锭，最常用的金属。" },
      { id: "2", answer: "B (Oak Logs)", explanation: "Olivia 砍深棕色树要做小片 → 原木合木板，做工具、棍子、箱子。" },
      { id: "3", answer: "C (Ancient Debris)", explanation: "Theo 发现红斑点块，要用钻石镐挖 → Ancient Debris 烧出下界合金。" },
      { id: "4", answer: "D (String)", explanation: "Ruby 有线和木棍想做攀爬工具 → String + Sticks 做弓、钓竿（此处答错概率高，请仔细读！）" },
      { id: "5", answer: "E (Sand)", explanation: "Oscar 在海滩发现黄沙 → 烧沙子成玻璃，做窗户和温室。" },
    ],

    vocabulary: [
      { word: "ingot",          pos: "n.", meaning: "锭",           gameContext: "Smelt iron ore to get iron ingots" },
      { word: "plank",          pos: "n.", meaning: "木板",         gameContext: "One log makes 4 planks" },
      { word: "debris",         pos: "n.", meaning: "残骸",         gameContext: "Ancient Debris smelts into Netherite Scraps" },
      { word: "greenhouse",     pos: "n.", meaning: "温室",         gameContext: "Glass is perfect for greenhouses" },
      { word: "furnace",        pos: "n.", meaning: "熔炉",         gameContext: "Put sand in a furnace to make glass" },
    ],

    wordCount: 70,
    estimatedDifficulty: "A2 (KET)",
    grammarFocus: "被动语态（is used / is made）+ 条件句（if you...you get...）",
  };
})();
