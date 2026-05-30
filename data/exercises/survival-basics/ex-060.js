/**
 * mc-ket-060 — Recycle Your Copper
 * Category: Survival Basics / 生存基础
 * Type: Part 5 — Open Cloze (6 gaps, 无选项，需填入合适单词)
 * Grammar: 被动语态 + 情态动词 + 比较级
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

    clozeText: [
      "One of the best things about copper equipment is that",
      "you (1)[____] recycle it! When your copper sword or",
      "armor is about to break, do not throw it away.",
      "",
      "Put the broken copper item (2)[____] a furnace.",
      "When it finishes smelting, you will get copper nuggets.",
      "Nine copper nuggets can be crafted (3)[____] one",
      "copper ingot. This means you can use your copper",
      "equipment again and again!",
      "",
      "This is a great way to save resources. Copper ore is",
      "(4)[____] common than iron ore. You can find it in",
      "most caves and mountains. After you mine enough copper",
      "and craft your first sword, you will not need to mine",
      "much (5)[____] because you can recycle old items.",
      "",
      "If you take care of your copper (6)[____], it will",
      "protect you through many adventures. And when it finally",
      "breaks, just smelt it and start again!",
    ].join("\n"),

    blanks: [
      { id: 1, correct: "can" },
      { id: 2, correct: "in" },
      { id: 3, correct: "into" },
      { id: 4, correct: "more" },
      { id: 5, correct: "more" },
      { id: 6, correct: "equipment" },
    ],

    answers: [
      { id: "1", answer: "can", explanation: "can recycle it — 可以回收铜装备，can 表示能力/可能性。（also accepted: may）" },
      { id: "2", answer: "in", explanation: "put it in a furnace — 放进熔炉里。（also accepted: into）" },
      { id: "3", answer: "into", explanation: "crafted into one copper ingot — 9 铜粒 = 1 铜锭。（also accepted: to）" },
      { id: "4", answer: "more", explanation: "more common than iron — 铜矿比铁矿更常见。" },
      { id: "5", answer: "more", explanation: "not need to mine much more — 因为可以回收，不再需要挖更多。" },
      { id: "6", answer: "equipment", explanation: "copper equipment — 铜装备统称。（also accepted: armor, gear, tools）" },
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
