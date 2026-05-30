/**
 * mc-ket-002 — The First Night Warning
 * Category: Survival Basics / 生存基础
 * Type: Part 1 — Short Text (Sign, 25 words, 1 × MCQ)
 */

(function () {
  if (!window.MINECRAFT_KET_DATA) window.MINECRAFT_KET_DATA = {};

  MINECRAFT_KET_DATA["mc-ket-002"] = {
    id: "mc-ket-002",
    category: "Survival Basics",
    categoryZh: "生存基础",
    type: "Part 1",
    title: "The First Night Warning",

    passage: [
      "⚠ DANGER — STAY INSIDE TONIGHT ⚠",
      "",
      "It is your first night. You do not have a sword",
      "or armour. Stay inside your house. Close the",
      "door and wait until morning. The sun will",
      "keep you safe.",
    ].join("\n"),

    questions: [
      {
        id: "q1",
        text: "What does the sign tell the player?",
        options: [
          "You can go outside if you are fast.",
          "You should stay inside because it is not safe outside.",
          "You need to find a sword before morning.",
        ],
        correct: 1,
      },
    ],

    answers: [
      {
        id: "q1",
        answer: "B",
        explanation:
          "告示牌说 Stay inside（待在屋里）和 you do not have a sword or armour（没有武器和盔甲），所以现在出去不安全。A 和 C 文中都没有提到。",
      },
    ],

    vocabulary: [
      {
        word: "armour",
        pos: "n.",
        meaning: "盔甲",
        gameContext:
          "Wear iron or diamond armour to protect yourself from mobs",
      },
      {
        word: "sword",
        pos: "n.",
        meaning: "剑",
        gameContext:
          "Main weapon in Minecraft — craft it with wood and stone",
      },
      {
        word: "danger",
        pos: "n.",
        meaning: "危险",
        gameContext:
          "Signs often warn about danger — lava, mobs, or deep caves",
      },
      {
        word: "safe",
        pos: "adj.",
        meaning: "安全的",
        gameContext:
          "Build a house to keep yourself safe from monsters at night",
      },
    ],

    wordCount: 25,
    estimatedDifficulty: "A2 (KET)",
    grammarFocus: "Imperatives（祈使句）: Stay inside, Close the door, Wait until",
  };
})();
