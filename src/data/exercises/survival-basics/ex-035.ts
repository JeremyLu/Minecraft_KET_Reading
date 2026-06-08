// @ts-nocheck
import type { ExerciseData } from '../../../types';

const data: ExerciseData = {
id: "mc-ket-035",
    category: "Survival Basics",
    categoryZh: "生存基础",
    type: "Part 1",
    title: "Farm Animals — What They Need",

    passage: [
      "🐄 ANIMAL FARM RULES 🐑",
      "",
      "You can feed cows and sheep with wheat.",
      "Chickens can eat seeds, but not meat.",
      "Pigs can eat carrots and potatoes.",
      "You cannot feed any animal rotten flesh.",
      "Happy animals can give you milk, wool and eggs!",
    ].join("\n"),

    questions: [
      {
        id: "q1",
        text: "What is the main message of this sign?",
        options: [
          "All animals eat the same food",
          "Different animals need different food to be happy",
          "You should not keep animals on your farm",
        ],
        correct: 1,
      },
    ],

    answers: [
      {
        id: "q1",
        answer: "B",
        explanation:
          "告示牌明确列出不同动物的不同食物：牛羊吃小麦、鸡吃种子、猪吃萝卜和土豆。A 错在说了'相同'，C 全文没有提到不该养。",
      },
    ],

    vocabulary: [
      {
        word: "feed",
        pos: "v.",
        meaning: "喂养",
        gameContext:
          "Hold wheat in your hand and right-click to feed cows and sheep",
      },
      {
        word: "wheat",
        pos: "n.",
        meaning: "小麦",
        gameContext:
          "Plant wheat seeds on farmland, wait for them to grow, then harvest",
      },
      {
        word: "rotten flesh",
        pos: "n.",
        meaning: "腐肉",
        gameContext:
          "Zombies drop rotten flesh when killed — it is not good for farm animals",
      },
      {
        word: "seed",
        pos: "n.",
        meaning: "种子",
        gameContext:
          "Break tall grass to get wheat seeds — chickens love to eat them",
      },
    ],

    wordCount: 35,
    estimatedDifficulty: "A2 (KET)",
    grammarFocus: "can/cannot（情态动词：能力与许可 — You can... / You cannot...）",
};

export default data;
