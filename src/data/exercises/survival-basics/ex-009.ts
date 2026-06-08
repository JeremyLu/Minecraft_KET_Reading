// @ts-nocheck
import type { ExerciseData } from '../../../types';

const data: ExerciseData = {
id: "mc-ket-009",
    category: "Survival Basics",
    categoryZh: "生存基础",
    type: "Part 1",
    title: "Warning: Lava Ahead!",

    passage: [
      "🔥 DANGER — LAVA AREA AHEAD 🔥",
      "",
      "You must wear iron boots to walk near lava.",
      "You should carry a water bucket to put out",
      "fires. Do not bring wood or wool — they",
      "will burn! If you fall in, you cannot swim.",
    ].join("\n"),

    questions: [
      {
        id: "q1",
        text: "What is the purpose of this sign?",
        options: [
          "To tell players where to find lava",
          "To warn players about lava and give safety advice",
          "To sell boots and water buckets",
        ],
        correct: 1,
      },
    ],

    answers: [
      {
        id: "q1",
        answer: "B",
        explanation:
          "告示牌标题 DANGER 表明是警告。内容包含安全建议：穿铁靴(must wear iron boots)、带水桶(should carry water bucket)、不带易燃物(do not bring wood)。A 错在不是指引位置，C 错在不是广告。",
      },
    ],

    vocabulary: [
      {
        word: "lava",
        pos: "n.",
        meaning: "熔岩/岩浆",
        gameContext:
          "Hot orange liquid found deep underground — it burns everything it touches",
      },
      {
        word: "bucket",
        pos: "n.",
        meaning: "桶",
        gameContext:
          "Use an iron bucket to carry water, milk or lava in Minecraft",
      },
      {
        word: "burn",
        pos: "v.",
        meaning: "燃烧",
        gameContext:
          "Wood, wool and leaves will burn if they touch fire or lava",
      },
      {
        word: "put out",
        pos: "phr.v.",
        meaning: "扑灭",
        gameContext:
          "Use a water bucket to put out fires before they spread",
      },
    ],

    wordCount: 30,
    estimatedDifficulty: "A2 (KET)",
    grammarFocus: "Modal verbs（情态动词：must/should/cannot 表示义务和建议）",
};

export default data;
