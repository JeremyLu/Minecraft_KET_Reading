/**
 * mc-ket-042 — Skeleton Cave Warning
 * Category: Mobs & Creatures / 生物图鉴
 * Type: Part 1 — Short Text (Sign / Notice)
 * Grammar: must / should / don't / be careful
 * Topic: 骷髅 Skeleton — 危险区告示
 */

(function () {
  if (!window.MINECRAFT_KET_DATA) window.MINECRAFT_KET_DATA = {};

  MINECRAFT_KET_DATA["mc-ket-042"] = {
    id: "mc-ket-042",
    category: "Mobs & Creatures",
    categoryZh: "生物图鉴",
    type: "Part 1",
    title: "Skeleton Cave Warning",

    signType: "notice",
    signTitle: "⚠️ SKELETON CAVE — WARNING",
    signBody: [
      "DANGER: Skeletons live inside this cave.",
      "They shoot arrows, so you must wear armour before entering.",
      "Don't stand still — keep moving to avoid being hit.",
      "Bring a shield. Skeletons can't shoot through shields.",
      "Torches are very helpful in dark caves.",
      "",
      "Stay safe, adventurer! Good luck. 🏹",
    ].join("\n"),

    passage: [
      "SKELETON CAVE WARNING",
      "",
      "DANGER: Skeletons live inside this cave.",
      "They shoot arrows, so you must wear armour before entering.",
      "Don't stand still — keep moving to avoid being hit.",
      "Bring a shield. Skeletons can't shoot through shields.",
      "Torches are very helpful in dark caves.",
      "",
      "Stay safe, adventurer! Good luck. 🏹",
    ].join("\n"),

    questions: [
      {
        id: "q1",
        text: "What does this notice say you MUST do?",
        options: [
          "Bring a torch and a sword",
          "Wear armour before going in",
          "Stay still and wait for help",
        ],
        correct: 1,
      },
    ],

    answers: [
      {
        id: "q1",
        answer: "B",
        explanation:
          "原文 you must wear armour before entering，must 表示强制要求，答案是 B。A 提到火把但没说 must，C 与原文相反（keep moving，不能站着不动）。",
      },
    ],

    vocabulary: [
      {
        word: "skeleton",
        pos: "n.",
        meaning: "骷髅；骨架",
        gameContext: "Skeletons spawn in dark areas and shoot arrows at players",
      },
      {
        word: "arrow",
        pos: "n.",
        meaning: "箭",
        gameContext: "Skeletons use a bow and arrow to attack from a distance",
      },
      {
        word: "shield",
        pos: "n.",
        meaning: "盾牌",
        gameContext: "Hold a shield to block arrows and melee attacks",
      },
      {
        word: "adventurer",
        pos: "n.",
        meaning: "冒险者",
        gameContext: "In Minecraft, every player is an adventurer exploring the world",
      },
    ],

    wordCount: 48,
    estimatedDifficulty: "A2 (KET)",
    grammarFocus: "情态动词 must/can't + 祈使句（Don't / Bring）",
  };
})();
