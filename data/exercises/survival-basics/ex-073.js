/**
 * mc-ket-073 — The Chest is Empty!
 * Category: Survival Basics / 生存基础
 * Type: Part 1 — Short Text (Chat, ~25 words, 1 × MCQ)
 * Grammar: present perfect (have + past participle)
 */

(function () {
  if (!window.MINECRAFT_KET_DATA) window.MINECRAFT_KET_DATA = {};

  MINECRAFT_KET_DATA["mc-ket-073"] = {
    id: "mc-ket-073",
    category: "Survival Basics",
    categoryZh: "生存基础",
    type: "Part 1",
    title: "The Chest is Empty!",

    passage: [
      "<Alex> I put 12 iron ingots in the chest.",
      "<Alex> Now they are all gone! Who took them?",
    ].join("\n"),

    questions: [
      {
        id: "q1",
        text: "What has happened?",
        options: [
          "Alex found 12 iron ingots.",
          "Alex's iron ingots have disappeared from the chest.",
          "Alex wants to buy more iron.",
        ],
        correct: 1,
      },
    ],

    answers: [
      { id: "q1", answer: "B", explanation: "Alex 说他放了12块铁锭在箱子里，但现在都消失了（are all gone）。选项 B 正确描述了消失这件事。A 错在她说的是放进去不是找到，C 错在她没说要买。" },
    ],

    vocabulary: [
      { word: "ingot", pos: "n.", meaning: "锭", gameContext: "Smelt iron ore in a furnace to get iron ingots." },
      { word: "chest", pos: "n.", meaning: "箱子", gameContext: "Place a chest to store your items safely." },
      { word: "gone", pos: "adj.", meaning: "不见了/消失了", gameContext: "If your stuff is gone, someone might have taken it!" },
    ],

    wordCount: 22,
    estimatedDifficulty: "A2 (KET)",
    grammarFocus: "present perfect（have + 过去分词：表示已经发生的结果）",
  };
})();
