// @ts-nocheck
import type { ExerciseData } from '../../../types';

const data: ExerciseData = {
id: "mc-ket-001",
    category: "Mobs & Creatures",
    categoryZh: "生物图鉴",
    type: "Part 3",
    title: "The Creeper Surprise",

    passage: [
      "Last Saturday, Steve wanted to build a new farm for his sheep.",
      "He went to the forest to collect wood. It was a beautiful day and he felt happy.",
      "",
      "While Steve was cutting down a big oak tree, he heard a strange sound",
      "behind him. Sssssss... He turned around quickly and saw a green monster",
      "with four legs. It was a Creeper! Steve felt very scared because Creepers",
      "can explode and destroy everything.",
      "",
      "He tried to run away, but it was too late. The Creeper exploded and",
      "destroyed half of his new farm. Steve was sad because he lost all his",
      "work. But he was also lucky — he was not hurt.",
      "",
      "Steve decided to make torches and put them around his farm. Now, no",
      "Creepers can come near his house at night because the area is very",
      "bright.",
      "",
      '“Next time I will be more careful,” Steve said to himself.',
      "He smiled and started to build his farm again.",
    ].join("\n"),

    questions: [
      {
        id: "q1",
        text: "What was Steve doing when he heard the sound?",
        options: [
          "Sleeping in his bed",
          "Cutting down a tree",
          "Building a house",
        ],
        correct: 1,
      },
      {
        id: "q2",
        text: "How did Steve feel when he saw the Creeper?",
        options: ["Happy", "Excited", "Scared"],
        correct: 2,
      },
      {
        id: "q3",
        text: "What happened after the Creeper exploded?",
        options: [
          "Steve lost all his sheep",
          "Half of the farm was destroyed",
          "Steve was badly hurt",
        ],
        correct: 1,
      },
      {
        id: "q4",
        text: "Why did Steve put torches around his farm?",
        options: [
          "To make the farm look nice",
          "To keep Creepers away at night",
          "To find his lost tools",
        ],
        correct: 1,
      },
      {
        id: "q5",
        text: "How did Steve feel at the end of the story?",
        options: [
          "Still scared and sad",
          "Positive and determined",
          "Angry at the Creeper",
        ],
        correct: 1,
      },
    ],

    answers: [
      {
        id: "q1",
        answer: "B",
        explanation:
          "原文 While Steve was cutting down a big oak tree, he heard a strange sound，当时他正在砍树。",
      },
      {
        id: "q2",
        answer: "C",
        explanation:
          "原文 Steve felt very scared，直接表达了恐惧情绪。",
      },
      {
        id: "q3",
        answer: "B",
        explanation:
          "原文 destroyed half of his new farm。A 错在农场里还没羊，C 错在 he was not hurt。",
      },
      {
        id: "q4",
        answer: "B",
        explanation:
          "原文 no Creepers can come near ... because the area is very bright。火把照亮区域阻止怪物生成。",
      },
      {
        id: "q5",
        answer: "B",
        explanation:
          "结尾 He smiled and started to build his farm again 表明他积极乐观。",
      },
    ],

    vocabulary: [
      {
        word: "explode",
        pos: "v.",
        meaning: "爆炸",
        gameContext:
          "Creepers explode when they get close to players",
      },
      {
        word: "destroy",
        pos: "v.",
        meaning: "破坏",
        gameContext:
          "TNT can destroy blocks and items in the game",
      },
      {
        word: "torch",
        pos: "n.",
        meaning: "火把",
        gameContext:
          "Place torches to light up dark areas and stop mobs from spawning",
      },
      {
        word: "strange",
        pos: "adj.",
        meaning: "奇怪的",
        gameContext:
          "You may hear strange sounds in caves at night",
      },
      {
        word: "collect",
        pos: "v.",
        meaning: "收集",
        gameContext:
          "Collect wood, stone, and food to survive in Minecraft",
      },
    ],

    wordCount: 185,
    estimatedDifficulty: "A2 (KET)",
    grammarFocus: "Past Simple Tense（一般过去时叙事）",
};

export default data;
