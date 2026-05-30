/**
 * mc-ket-060 — Recycle Your Copper
 * Category: Survival Basics / 生存基础
 * Type: Part 5 — Open Cloze (6 gaps, 无选项，需填入合适单词)
 * Grammar: 被动语态 + 情态动词 + 序数词
 * Topic: 铜装备回收 — 熔炉回收铜粒，可持续资源利用
 */

(function () {
  if (!window.MINECRAFT_KET_DATA) window.MINECRAFT_KET_DATA = {};

  MINECRAFT_KET_DATA["mc-ket-060"] = {
    id: "mc-ket-060",
    category: "Survival Basics",
    categoryZh: "生存基础",
    type: "Part 5",
    title: "Recycle Your Copper",

    passage: [
      "One of the best things about copper equipment is that",
      "you (1) _______ recycle it! When your copper sword or",
      "armor is about to break, do not throw it away.",
      "",
      "Put the broken copper item (2) _______ a furnace.",
      "When it finishes smelting, you will get copper nuggets.",
      "Nine copper nuggets can be crafted (3) _______ one",
      "copper ingot. This means you can use your copper",
      "equipment again and again!",
      "",
      "This is a great way to save resources. Copper ore is",
      "(4) _______ common than iron ore. You can find it in",
      "most caves and mountains. After you mine enough copper",
      "and craft your first sword, you will not need to mine",
      "much (5) _______ because you can recycle old items.",
      "",
      "If you take care of your copper (6) _______, it will",
      "protect you through many adventures. And when it finally",
      "breaks, just smelt it and start again!",
    ].join("\n"),

    blanks: [
      { id: 1, answer: ["can", "may"],           hint: "可以（情态动词）" },
      { id: 2, answer: ["in", "into"],           hint: "放进……里面（介词）" },
      { id: 3, answer: ["into", "to"],           hint: "变成；制成（介词）" },
      { id: 4, answer: ["more"],                  hint: "更多（比较级 more common）" },
      { id: 5, answer: ["more"],                  hint: "更多（不再需要挖更多铜）" },
      { id: 6, answer: ["equipment", "armor", "gear"],  hint: "装备（铜装/铜盔甲）" },
    ],

    answers: [
      { id: "1", accepted: ["can", "may"], explanation: "can recycle it — 可以回收铜装备，can 表示能力/可能性。" },
      { id: "2", accepted: ["in", "into"], explanation: "put it in/into a furnace — 放进熔炉里。" },
      { id: "3", accepted: ["into", "to"], explanation: "crafted into one copper ingot — 9 铜粒 = 1 铜锭。" },
      { id: "4", accepted: ["more"], explanation: "more common than iron — 铜矿比铁矿更常见。" },
      { id: "5", accepted: ["more"], explanation: "not need to mine much more — 因为可以回收，不再需要挖更多。" },
      { id: "6", accepted: ["equipment", "armor", "gear", "tools"], explanation: "copper equipment/armor/gear 都指铜装备。" },
    ],

    vocabulary: [
      { word: "recycle",      pos: "v.", meaning: "回收；循环利用",       gameContext: "You can recycle old copper items in a furnace" },
      { word: "nugget",       pos: "n.", meaning: "粒；小块",             gameContext: "Nine copper nuggets make one copper ingot" },
      { word: "resource",     pos: "n.", meaning: "资源",                 gameContext: "Recycling copper saves resources" },
      { word: "common",       pos: "adj.", meaning: "常见的；普遍的",     gameContext: "Copper ore is more common than iron ore" },
      { word: "save",         pos: "v.", meaning: "节省；保存",           gameContext: "Recycling saves you from mining more copper" },
    ],

    wordCount: 128,
    estimatedDifficulty: "A2 (KET)",
    grammarFocus: "情态动词（can）+ 被动语态 + 比较级（more common than）",
  };
})();
