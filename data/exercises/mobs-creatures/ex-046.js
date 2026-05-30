/**
 * mc-ket-046 — The Shulker Box Trap
 * Category: Mobs & Creatures / 生物图鉴
 * Type: Part 3 — Longer Text (160 words, 5 × MCQ)
 * Grammar: 现在时 + 方位介词 + 被动态
 * Topic: Shulker 潜影贝 — 末地要塞的危险
 */

(function () {
  if (!window.MINECRAFT_KET_DATA) window.MINECRAFT_KET_DATA = {};

  MINECRAFT_KET_DATA["mc-ket-046"] = {
    id: "mc-ket-046",
    category: "Mobs & Creatures",
    categoryZh: "生物图鉴",
    type: "Part 3",
    title: "The Shulker Box Trap",

    passage: [
      "Steve entered the End City for the first time. The purple blocks",
      "looked strange and beautiful. He walked carefully across the",
      "purple floor. Suddenly, something hit him from above!",
      "",
      "It was a Shulker. These mobs hide inside purple shells and",
      "float near the ceiling. When Steve came close, the Shulker",
      "opened its shell and shot a homing bullet at him.",
      "",
      "The bullet hit Steve. He started floating into the air! The",
      "levitation effect made him rise higher and higher. If he went",
      "too high, he would fall and lose all his items.",
      "",
      "Steve quickly drank a bucket of milk to remove the effect.",
      "Then he put on his diamond armour and hit the Shulker with",
      "his sword. After three hits, the Shulker dropped a Shulker",
      "Shell. Steve picked it up. Now he could craft a Shulker Box!",
    ].join("\n"),

    questions: [
      {
        id: "q1",
        text: "Where do Shulkers usually hide?",
        options: ["On the ground floor", "Near the ceiling", "Inside chests"],
        correct: 1,
      },
      {
        id: "q2",
        text: "What happens when a Shulker bullet hits you?",
        options: ["You catch fire", "You start floating", "You turn invisible"],
        correct: 1,
      },
      {
        id: "q3",
        text: "How did Steve remove the levitation effect?",
        options: ["By drinking milk", "By sleeping in a bed", "By eating bread"],
        correct: 0,
      },
      {
        id: "q4",
        text: "What did the Shulker drop after Steve hit it?",
        options: ["A Shulker Shell", "A Nether Star", "An Elytra"],
        correct: 0,
      },
      {
        id: "q5",
        text: "What can you craft with a Shulker Shell?",
        options: ["A Shulker Box", "A Beacon", "A Conduit"],
        correct: 0,
      },
    ],

    answers: [
      { id: "q1", answer: "B", explanation: "原文 Shulkers ... float near the ceiling，潜影贝通常漂浮在天花板附近。" },
      { id: "q2", answer: "B", explanation: "原文 The levitation effect made him rise higher，子弹命中后获得漂浮效果。" },
      { id: "q3", answer: "A", explanation: "原文 drank a bucket of milk to remove the effect，牛奶可以清除所有状态效果。" },
      { id: "q4", answer: "A", explanation: "原文 the Shulker dropped a Shulker Shell，击杀潜影贝掉落潜影壳。" },
      { id: "q5", answer: "A", explanation: "原文 Now he could craft a Shulker Box，2 个潜影壳 + 1 个箱子 = 潜影盒。" },
    ],

    vocabulary: [
      { word: "shulker",     pos: "n.", meaning: "潜影贝",                gameContext: "Found in End Cities; hides inside a purple shell" },
      { word: "levitation",  pos: "n.", meaning: "漂浮；悬浮",            gameContext: "Shulker bullets give you Levitation effect" },
      { word: "homing",      pos: "adj.", meaning: "自动追踪的",          gameContext: "A homing bullet follows the player" },
      { word: "shell",       pos: "n.", meaning: "壳；外壳",              gameContext: "Shulker Shell is used to craft Shulker Boxes" },
      { word: "remove",      pos: "v.", meaning: "清除；移除",            gameContext: "Milk removes all potion effects" },
    ],

    wordCount: 160,
    estimatedDifficulty: "A2 (KET)",
    grammarFocus: "现在时叙事 + 方位介词（near/above/on） + 被动态（was hit）",
  };
})();
