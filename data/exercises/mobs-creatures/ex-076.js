/**
 * mc-ket-076 — Lost Dog
 * Category: Mobs & Creatures / 生物图鉴
 * Type: Part 1 — Short Text (Notice, ~25 words, 1 × MCQ)
 * Grammar: have you seen...?（现在完成时表经历）
 */

(function () {
  if (!window.MINECRAFT_KET_DATA) window.MINECRAFT_KET_DATA = {};

  MINECRAFT_KET_DATA["mc-ket-076"] = {
    id: "mc-ket-076",
    category: "Mobs & Creatures",
    categoryZh: "生物图鉴",
    type: "Part 1",
    title: "Lost Dog",

    passage: [
      "🐺 LOST WOLF 🐺",
      "",
      "Have you seen my wolf?",
      "He has a red collar. His name is Max.",
      "If you find him, bring him to the village.",
      "— Sophie",
    ].join("\n"),

    questions: [
      {
        id: "q1",
        text: "What does Sophie want?",
        options: [
          "She wants to sell her wolf.",
          "She wants people to help find her lost wolf.",
          "She wants to give away a red collar.",
        ],
        correct: 1,
      },
    ],

    answers: [
      { id: "q1", answer: "B", explanation: "告示标题 LOST WOLF 说明狼丢了。Sophie 问 'Have you seen my wolf?' 并请人把狼带回村子，是求助找狼。A 是卖狼，C 是送项圈，都不对。" },
    ],

    vocabulary: [
      { word: "wolf", pos: "n.", meaning: "狼", gameContext: "Use bones to tame a wolf. A tamed wolf becomes your pet dog." },
      { word: "collar", pos: "n.", meaning: "项圈", gameContext: "A tamed wolf wears a red collar so you can tell it is yours." },
      { word: "lost", pos: "adj.", meaning: "丢失的/走丢的", gameContext: "If your wolf is lost, look around — it might be sitting somewhere!" },
    ],

    wordCount: 25,
    estimatedDifficulty: "A2 (KET)",
    grammarFocus: "Have you seen...?（现在完成时提问经历）",
  };
})();
