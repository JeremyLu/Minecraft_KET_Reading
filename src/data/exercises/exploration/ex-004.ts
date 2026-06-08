// @ts-nocheck
import type { ExerciseData } from '../../../types';

const data: ExerciseData = {
id: "mc-ket-004",
    category: "Exploration & Adventure",
    categoryZh: "冒险探索",
    type: "Part 3",
    title: "The Nether Portal Mishap",

    passage: [
      "Alex and her friend Ben wanted to visit the Nether for the first time.",
      "They collected fourteen obsidian blocks and built a portal near their",
      "village. When they lit it with flint and steel, purple light filled the",
      "room. It looked amazing!",
      "",
      "They stepped through the portal together. Everything was dark red",
      "and very hot. They could see lava lakes below them and strange blocks",
      "above. Suddenly, a Ghast appeared in the sky above them. It shot a",
      "fireball at Alex!",
      "",
      "Alex ran quickly to hide behind a netherrack wall. Ben tried to hit",
      "the fireball back with his sword. He was lucky — the fireball flew back",
      "and hit the Ghast. It disappeared.",
      "",
      '"That was too close!" Alex said. She was still shaking.',
      "They decided to go back home. They were not ready for the Nether",
      "yet. Next time, they will bring golden armour and fire resistance",
      "potions.",
    ].join("\n"),

    questions: [
      {
        id: "q1",
        text: "What did Alex and Ben use to light the portal?",
        options: [
          "A torch",
          "Flint and steel",
          "Lava from the Nether",
        ],
        correct: 1,
      },
      {
        id: "q2",
        text: "What attacked Alex and Ben in the Nether?",
        options: ["A Creeper", "A Blaze", "A Ghast"],
        correct: 2,
      },
      {
        id: "q3",
        text: "How did Ben deal with the fireball?",
        options: [
          "He ran away from it",
          "He blocked it with a shield",
          "He hit it back with his sword",
        ],
        correct: 2,
      },
      {
        id: "q4",
        text: "How did Alex feel after the attack?",
        options: ["Excited", "Shaking and scared", "Ready to explore more"],
        correct: 1,
      },
      {
        id: "q5",
        text: "What will they bring next time?",
        options: [
          "More obsidian and flint",
          "Golden armour and fire resistance potions",
          "More friends to help fight",
        ],
        correct: 1,
      },
    ],

    answers: [
      {
        id: "q1",
        answer: "B",
        explanation:
          "原文 When they lit it with flint and steel 明确说明用打火石点燃。",
      },
      {
        id: "q2",
        answer: "C",
        explanation:
          "原文 a Ghast appeared in the sky 并朝他们射出火球。",
      },
      {
        id: "q3",
        answer: "C",
        explanation:
          "原文 Ben tried to hit the fireball back with his sword，用剑把火球打了回去。",
      },
      {
        id: "q4",
        answer: "B",
        explanation:
          "原文 She was still shaking（还在发抖），表现她受惊了。",
      },
      {
        id: "q5",
        answer: "B",
        explanation:
          "原文 Next time, they will bring golden armour and fire resistance potions。",
      },
    ],

    vocabulary: [
      {
        word: "obsidian",
        pos: "n.",
        meaning: "黑曜石",
        gameContext:
          "A dark purple block made when water touches lava — used to build Nether portals",
      },
      {
        word: "flint and steel",
        pos: "n.",
        meaning: "打火石",
        gameContext:
          "Tool used to light portals, TNT, and campfires in Minecraft",
      },
      {
        word: "netherrack",
        pos: "n.",
        meaning: "下界岩",
        gameContext:
          "A red block found everywhere in the Nether — it burns forever when lit",
      },
      {
        word: "disappear",
        pos: "v.",
        meaning: "消失",
        gameContext:
          "When you kill a mob, it disappears and may drop items",
      },
      {
        word: "shaking",
        pos: "adj.",
        meaning: "发抖的",
        gameContext:
          "Describes how a character feels after a scary experience in the game",
      },
    ],

    wordCount: 190,
    estimatedDifficulty: "A2 (KET)",
    grammarFocus: "Past Simple Tense（一般过去时叙事）+ Direct Speech（直接引语）",
};

export default data;
