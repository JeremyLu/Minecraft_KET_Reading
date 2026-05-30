/**
 * mc-ket-045 — Zombie Survival
 * Category: Survival Basics / 生存基础
 * Type: Part 4 — MCQ Cloze (88 words, 6 gaps × 3 options)
 * Grammar: 祈使句 + 条件句 (if ...) + 情态动词 can/should
 * Topic: Zombie 僵尸 — 夜间生存基础
 */

(function () {
  if (!window.MINECRAFT_KET_DATA) window.MINECRAFT_KET_DATA = {};

  MINECRAFT_KET_DATA["mc-ket-045"] = {
    id: "mc-ket-045",
    category: "Survival Basics",
    categoryZh: "生存基础",
    type: "Part 4",
    title: "Zombie Survival",

    clozeText: [
      "Zombies come out at (1)[____] and try to break your door.",
      "If you hear a zombie (2)[____] outside, do not open the door!",
      "You (3)[____] build a house before night comes.",
      "A wooden sword (4)[____] kill a zombie, but it takes many hits.",
      "When a zombie kills a villager, the villager (5)[____] turn into a zombie villager.",
      "You can cure a zombie villager (6)[____] throwing a Splash Potion of Weakness at it.",
    ].join(" "),

    blanks: [
      { id: 1, options: ["night", "morning", "noon"],   correct: 0 },
      { id: 2, options: ["moan", "moans", "moaning"], correct: 2 },
      { id: 3, options: ["should", "can", "is"],           correct: 0 },
      { id: 4, options: ["can", "must", "does"],         correct: 0 },
      { id: 5, options: ["will", "does", "is"],          correct: 0 },
      { id: 6, options: ["by", "for", "with"],           correct: 0 },
    ],

    answers: [
      {
        id: "1",
        answer: "A — night",
        explanation: "僵尸夜晚出现，night 是唯一符合游戏逻辑的。morning/noon 僵尸会燃烧。",
      },
      {
        id: "2",
        answer: "C — moaning",
        explanation: "hear + sb. + V-ing 是固定搭配，表示听到某人正在做某事。",
      },
      {
        id: "3",
        answer: "A — should",
        explanation: "should 表示建议，入夜前盖房子是合理建议。can 表示能力，is 语法错误。",
      },
      {
        id: "4",
        answer: "A — can",
        explanation: "can 表示能力，木剑可以杀死僵尸但效率低。must 表示必须，不合逻辑。",
      },
      {
        id: "5",
        answer: "A — will",
        explanation: "will 表示将来时，村民被僵尸杀死后会变成僵尸村民。",
      },
      {
        id: "6",
        answer: "A — by",
        explanation: "by + V-ing 表示方式，by throwing ... 意为「通过扔……的方式」。",
      },
    ],

    vocabulary: [
      { word: "zombie",    pos: "n.", meaning: "僵尸",              gameContext: "Most common hostile mob at night" },
      { word: "cure",       pos: "v.", meaning: "治疗；治愈",        gameContext: "Cure a zombie villager with a Golden Apple" },
      { word: "weakness",   pos: "n.", meaning: "虚弱",              gameContext: "Potion of Weakness helps cure zombie villagers" },
      { word: "splash",     pos: "adj.", meaning: "溅射的",        gameContext: "Splash Potion throws like a grenade" },
      { word: "break",      pos: "v.", meaning: "破坏；打碎",        gameContext: "Zombies can break wooden doors on Hard mode" },
    ],

    wordCount: 88,
    estimatedDifficulty: "A2 (KET)",
    grammarFocus: "祈使句 + if 条件句 + 情态动词 should/can/will + by V-ing",
  };
})();
