// @ts-nocheck
import type { ExerciseData } from '../../../types';

const data: ExerciseData = {
id: "mc-ket-039",
    category: "Mobs & Creatures",
    categoryZh: "生物图鉴",
    type: "Part 3",
    title: "The Piglin's Gold",

    passage: [
      "Alex visited the Nether for the first time last week. The Nether is a",
      "dangerous dimension full of fire and lava. Alex was very nervous.",
      "",
      "She walked carefully through a crimson forest when she suddenly saw a",
      "Piglin. Piglins are pig-like creatures that live only in the Nether.",
      "They wear gold armour and carry golden swords. Alex remembered an",
      "important rule: Piglins attack players who are not wearing gold.",
      "",
      'Alex quickly put on her gold helmet. "Now I look like a friend," she',
      'thought. The Piglin stopped and looked at her. It did not attack!',
      "",
      "Alex threw a gold ingot on the ground. The Piglin picked it up and gave",
      "her some food in return. This is called bartering. Alex was very happy.",
      "",
      "Suddenly, a Zombified Piglin appeared. Unlike normal Piglins, Zombified",
      "Piglins look green and sick. They do not attack first, but if you hit",
      "one, all of them will chase you!",
      "",
      '"I will never hit a Zombified Piglin," Alex decided. She left the Nether',
      "safely and felt very proud of herself.",
    ].join("\n"),

    questions: [
      {
        id: "q1",
        text: "Why was Alex nervous when she arrived in the Nether?",
        options: [
          "She forgot to bring food",
          "It is a dangerous place with fire and lava",
          "She had never seen a Piglin before",
        ],
        correct: 1,
      },
      {
        id: "q2",
        text: "What do Piglins wear?",
        options: ["Iron armour", "Diamond armour", "Gold armour"],
        correct: 2,
      },
      {
        id: "q3",
        text: "Why did Alex put on her gold helmet?",
        options: [
          "To protect herself from fire",
          "So the Piglin would not attack her",
          "Because it was very cold in the Nether",
        ],
        correct: 1,
      },
      {
        id: "q4",
        text: "What happened when Alex threw a gold ingot?",
        options: [
          "The Piglin attacked her",
          "The Piglin gave her some food",
          "The Piglin ran away",
        ],
        correct: 1,
      },
      {
        id: "q5",
        text: "What is dangerous about Zombified Piglins?",
        options: [
          "They explode like Creepers",
          "If you hit one, all will chase you",
          "They can shoot arrows at you",
        ],
        correct: 1,
      },
    ],

    answers: [
      {
        id: "q1",
        answer: "B",
        explanation:
          "原文 The Nether is a dangerous dimension full of fire and lava. Alex was very nervous，直接指出原因。",
      },
      {
        id: "q2",
        answer: "C",
        explanation:
          "原文 They wear gold armour and carry golden swords，猪灵穿金甲。",
      },
      {
        id: "q3",
        answer: "B",
        explanation:
          "原文 Piglins attack players who are not wearing gold，所以戴金头盔是为了避免被攻击。",
      },
      {
        id: "q4",
        answer: "B",
        explanation:
          "原文 The Piglin picked it up and gave her some food in return，扔金锭换到了食物。",
      },
      {
        id: "q5",
        answer: "B",
        explanation:
          "原文 if you hit one, all of them will chase you！打一只会引发群体追击。",
      },
    ],

    vocabulary: [
      {
        word: "dimension",
        pos: "n.",
        meaning: "维度；次元",
        gameContext: "The Nether and The End are different dimensions in Minecraft",
      },
      {
        word: "armour",
        pos: "n.",
        meaning: "盔甲",
        gameContext: "Piglins wear gold armour; players can craft iron or diamond armour",
      },
      {
        word: "barter",
        pos: "v.",
        meaning: "以物易物；交换",
        gameContext: "Throw gold ingots to Piglins to barter for useful items",
      },
      {
        word: "ingot",
        pos: "n.",
        meaning: "锭（金属块）",
        gameContext: "Smelt iron ore in a furnace to make iron ingots",
      },
      {
        word: "zombified",
        pos: "adj.",
        meaning: "僵尸化的",
        gameContext: "Zombified Piglins are former Piglins that turned into undead creatures",
      },
    ],

    wordCount: 172,
    estimatedDifficulty: "A2 (KET)",
    grammarFocus: "Past Simple（叙事）+ 条件句 if...will",
};

export default data;
