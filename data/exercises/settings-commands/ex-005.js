/**
 * mc-ket-005 — How to Use the /tp Command
 * Category: Settings & Commands / 设置指令
 * Type: Part 5 — Open Cloze (85 words, 5 blanks)
 */

(function () {
  if (!window.MINECRAFT_KET_DATA) window.MINECRAFT_KET_DATA = {};

  MINECRAFT_KET_DATA["mc-ket-005"] = {
    id: "mc-ket-005",
    category: "Settings & Commands",
    categoryZh: "设置指令",
    type: "Part 5",
    title: "How to Use the /tp Command",

    clozeText: [
      'The <code>/tp</code> command lets you teleport (1)[____] any place in your world.',
      'To use it, open the chat box (2)[____] pressing the "T" key.',
      'Then type <code>/tp</code> followed (3)[____] three numbers: X, Y and Z.',
      'For example, type <code>/tp 100 64 200</code> to move to that spot.',
      '(4)[____] you want to teleport to your friend, type <code>/tp YourName FriendName</code>.',
      'This command is very useful (5)[____] you are building a big world with your friends.',
    ].join(" "),

    blanks: [
      { id: 1, correct: "to" },
      { id: 2, correct: "by" },
      { id: 3, correct: "by" },
      { id: 4, correct: "If" },
      { id: 5, correct: "when" },
    ],

    answers: [
      {
        id: "1",
        answer: "to",
        explanation:
          "teleport TO a place — 表示目的地的方向介词",
      },
      {
        id: "2",
        answer: "by",
        explanation:
          "by + doing — 表示通过……方式（按 T 键来打开聊天框）",
      },
      {
        id: "3",
        answer: "by",
        explanation:
          "followed by — 固定搭配，表示「后面跟着……」",
      },
      {
        id: "4",
        answer: "If",
        explanation:
          "条件状语从句 If you want to… 如果你想要……",
      },
      {
        id: "5",
        answer: "when",
        explanation:
          "when you are building… 时间状语从句，当你在建造……的时候",
      },
    ],

    vocabulary: [
      {
        word: "teleport",
        pos: "v.",
        meaning: "传送",
        gameContext:
          "The /tp command instantly moves you to any coordinates in your world",
      },
      {
        word: "coordinate",
        pos: "n.",
        meaning: "坐标",
        gameContext:
          "X, Y, Z numbers that show your position — press F3 to see them",
      },
      {
        word: "command",
        pos: "n.",
        meaning: "指令",
        gameContext:
          "Type commands starting with / in the chat box to change game settings",
      },
      {
        word: "spot",
        pos: "n.",
        meaning: "地点",
        gameContext:
          "The exact place in the world — e.g. 'that spot near the river'",
      },
    ],

    wordCount: 85,
    estimatedDifficulty: "A2 (KET)",
    grammarFocus: "Prepositions & Conjunctions（介词和连词：to, by, if, when）",
  };
})();
