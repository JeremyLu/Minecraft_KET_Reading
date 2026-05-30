/**
 * mc-ket-041 — The Silent Enderman
 * Category: Mobs & Creatures / 生物图鉴
 * Type: Part 5 — Open Cloze (78 words, 5 blanks, no options)
 * Grammar: 介词 + 动词搭配
 * Topic: Enderman 末影人 — 特征和避免惹怒的技巧
 */

(function () {
  if (!window.MINECRAFT_KET_DATA) window.MINECRAFT_KET_DATA = {};

  MINECRAFT_KET_DATA["mc-ket-041"] = {
    id: "mc-ket-041",
    category: "Mobs & Creatures",
    categoryZh: "生物图鉴",
    type: "Part 5",
    title: "The Silent Enderman",

    clozeText: [
      "The Enderman is a very tall black mob (1)[____] long arms and purple eyes.",
      "It can (2)[____] blocks from the ground and move them to different places.",
      "Endermen are usually peaceful, but they get angry if you look",
      "(3)[____] their eyes. When an Enderman is angry, it will teleport",
      "(4)[____] you very quickly. The best way to stay safe is to look",
      "at its feet instead (5)[____] its face.",
      "You can also wear a pumpkin on your head to stop Endermen from getting angry.",
    ].join(" "),

    blanks: [
      { id: 1, correct: "with" },
      { id: 2, correct: "pick" },
      { id: 3, correct: "into" },
      { id: 4, correct: "towards" },
      { id: 5, correct: "of" },
    ],

    answers: [
      {
        id: "1",
        answer: "with",
        explanation:
          "a mob with long arms，with 表示具有某特征，固定结构 noun + with + feature。",
      },
      {
        id: "2",
        answer: "pick",
        explanation:
          "pick up blocks 是固定搭配，意为捡起/拾取方块。can 后接动词原形。",
      },
      {
        id: "3",
        answer: "into",
        explanation:
          "look into their eyes（直视…的眼睛）是固定搭配，表示盯着眼睛看。",
      },
      {
        id: "4",
        answer: "towards",
        explanation:
          "teleport towards you 向你传送，towards 表示朝向某方向，固定介词搭配。",
      },
      {
        id: "5",
        answer: "of",
        explanation:
          "instead of 是固定搭配，意为 而不是/代替。instead of its face 意为而不是看脸。",
      },
    ],

    vocabulary: [
      {
        word: "enderman",
        pos: "n.",
        meaning: "末影人",
        gameContext: "Endermen can pick up and move blocks; avoid looking into their eyes",
      },
      {
        word: "teleport",
        pos: "v.",
        meaning: "传送；瞬移",
        gameContext: "Endermen teleport away from water and towards angry targets",
      },
      {
        word: "peaceful",
        pos: "adj.",
        meaning: "和平的；温和的",
        gameContext: "Cows and sheep are peaceful mobs that never attack you",
      },
      {
        word: "pumpkin",
        pos: "n.",
        meaning: "南瓜",
        gameContext: "Wear a carved pumpkin on your head to hide from Endermen",
      },
      {
        word: "instead of",
        pos: "prep. phr.",
        meaning: "而不是；代替",
        gameContext: "Look at the feet instead of the face to avoid angering Endermen",
      },
    ],

    wordCount: 78,
    estimatedDifficulty: "A2 (KET)",
    grammarFocus: "介词搭配 with / into / towards / instead of + pick up 短语动词",
  };
})();
