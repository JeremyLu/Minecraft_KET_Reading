// @ts-nocheck
import type { ExerciseData } from '../../../types';

const data: ExerciseData = {
id: "mc-ket-038",
    category: "Survival Basics",
    categoryZh: "生存基础",
    type: "Part 3",
    title: "My First Wheat Harvest",

    passage: [
      "Last week, I decided to start my own farm. I had almost no",
      "food left, and I was tired of eating rotten flesh from zombies.",
      "So I took my wooden hoe and looked for a nice flat area near",
      "a small river. The soil near water is always wet, and this helps",
      "plants grow faster.",
      "",
      "I broke some tall grass and collected wheat seeds. Then I used",
      "my hoe to turn the dirt into farmland. I planted the seeds and",
      "waited. For three days, I checked my farm every morning. On the",
      "first day, nothing happened. On the second day, small green",
      "plants came out of the ground. I felt very excited!",
      "",
      "On the third day, the wheat was tall and golden. I harvested",
      "it with my hands and got wheat and more seeds. I used three",
      "pieces of wheat to make bread. It was the best bread I ever",
      "tasted — because I grew it myself.",
      "",
      "Now I have a bigger farm with wheat, carrots and potatoes. I",
      "never go hungry any more. Farming is hard work, but it makes",
      "me feel proud. Every Minecraft player should try it.",
    ].join("\n"),

    questions: [
      {
        id: "q1",
        text: "Why did the writer decide to start a farm?",
        options: [
          "He wanted to sell food to other players",
          "He had almost no food and was tired of rotten flesh",
          "His friend told him farming was easy",
        ],
        correct: 1,
      },
      {
        id: "q2",
        text: "Why did the writer choose a place near a river?",
        options: [
          "Because the water looks nice",
          "Because wet soil helps plants grow faster",
          "Because he wanted to swim",
        ],
        correct: 1,
      },
      {
        id: "q3",
        text: "What happened on the second day?",
        options: [
          "The wheat was tall and golden",
          "Small green plants came out of the ground",
          "Nothing happened",
        ],
        correct: 1,
      },
      {
        id: "q4",
        text: "How did the writer feel about the bread he made?",
        options: [
          "He thought it was too dry",
          "He said it was the best bread he ever tasted",
          "He did not like it very much",
        ],
        correct: 1,
      },
      {
        id: "q5",
        text: "What does the writer grow on his farm now?",
        options: [
          "Only wheat",
          "Wheat, carrots and potatoes",
          "Wheat and apples",
        ],
        correct: 1,
      },
    ],

    answers: [
      { id: "q1", answer: "B", explanation: "原文 had almost no food left, and I was tired of eating rotten flesh。不是要卖食物。" },
      { id: "q2", answer: "B", explanation: "原文 soil near water is always wet, and this helps plants grow faster。" },
      { id: "q3", answer: "B", explanation: "原文 On the second day, small green plants came out of the ground。第一天 nothing happened，第三天收割。" },
      { id: "q4", answer: "B", explanation: "原文 It was the best bread I ever tasted — because I grew it myself。他非常满意。" },
      { id: "q5", answer: "B", explanation: "原文 Now I have a bigger farm with wheat, carrots and potatoes。" },
    ],

    vocabulary: [
      { word: "harvest", pos: "v./n.", meaning: "收获/收割", gameContext: "When wheat turns golden, break it to harvest the wheat and collect seeds" },
      { word: "hoe", pos: "n.", meaning: "锄头", gameContext: "Use a hoe on dirt or grass blocks to turn them into farmland for planting" },
      { word: "soil", pos: "n.", meaning: "土壤", gameContext: "Farmland is created when you use a hoe on dirt — it must be near water to stay wet" },
      { word: "seeds", pos: "n.", meaning: "种子", gameContext: "Break tall grass to get wheat seeds — plant them on farmland to grow wheat" },
      { word: "hungry", pos: "adj.", meaning: "饥饿的", gameContext: "If your hunger bar is low, you need to eat food or you will lose health" },
    ],

    wordCount: 170,
    estimatedDifficulty: "A2 (KET)",
    grammarFocus: "Past Simple + Present Simple（叙事用过去时，现状用现在时）",
};

export default data;
