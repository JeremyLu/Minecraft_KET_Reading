/**
 * mc-ket-011 — My First Day (Diary)
 * Category: Survival Basics / 生存基础
 * Type: Part 3 — Longer Text (160 words, 5 × MCQ)
 * Grammar: Past Simple + Emotions
 */

(function () {
  if (!window.MINECRAFT_KET_DATA) window.MINECRAFT_KET_DATA = {};

  MINECRAFT_KET_DATA["mc-ket-011"] = {
    id: "mc-ket-011",
    category: "Survival Basics",
    categoryZh: "生存基础",
    type: "Part 3",
    title: "My First Day — Diary",

    passage: [
      "Dear Diary,",
      "",
      "Today was my first day in this new world. When I woke up,",
      "I stood in the middle of a large forest. There were tall trees",
      "everywhere and I could hear birds singing. I felt excited but",
      "also a little scared because I had nothing — no tools, no food,",
      "and no house.",
      "",
      "The first thing I did was punch a tree with my hands. It felt",
      "strange, but small pieces of wood fell to the ground. I made a",
      "crafting table and then built a wooden pickaxe. With my new",
      "tool, I dug into a hillside and collected some stone and coal.",
      "",
      "When the sun started to go down, I quickly built a small dirt",
      "house. It was not beautiful, but it made me feel safe. I put",
      "torches on the walls and the room became warm and bright.",
      "",
      "Now I am sitting in my little house, writing this diary. Outside,",
      "I can hear the sounds of zombies and skeletons. But I am not",
      "afraid any more. Tomorrow I will look for food and maybe even",
      "find some sheep for a bed.",
    ].join("\n"),

    questions: [
      {
        id: "q1",
        text: "How did the writer feel when he first arrived in the forest?",
        options: [
          "Sad and lonely",
          "Excited but a little scared",
          "Angry and confused",
        ],
        correct: 1,
      },
      {
        id: "q2",
        text: "What was the first thing the writer did?",
        options: [
          "Built a dirt house",
          "Punched a tree with his hands",
          "Collected some stone",
        ],
        correct: 1,
      },
      {
        id: "q3",
        text: "Why did the writer build the house quickly?",
        options: [
          "It was going to rain",
          "He was hungry",
          "The sun was going down",
        ],
        correct: 2,
      },
      {
        id: "q4",
        text: "What did the writer use to make the room bright?",
        options: [
          "A campfire",
          "Torches on the walls",
          "Sunlight from windows",
        ],
        correct: 1,
      },
      {
        id: "q5",
        text: "What does the writer want to do tomorrow?",
        options: [
          "Go mining for diamonds",
          "Look for food and find sheep",
          "Build a bigger house",
        ],
        correct: 1,
      },
    ],

    answers: [
      { id: "q1", answer: "B", explanation: "原文 felt excited but also a little scared。C 文中未提到 anger，A 与 excited 矛盾。" },
      { id: "q2", answer: "B", explanation: "原文 The first thing I did was punch a tree。建房子和收集石头是之后的事。" },
      { id: "q3", answer: "C", explanation: "原文 When the sun started to go down, I quickly built...。不是下雨也不是饿了。" },
      { id: "q4", answer: "B", explanation: "原文 I put torches on the walls and the room became warm and bright。" },
      { id: "q5", answer: "B", explanation: "原文 Tomorrow I will look for food and maybe even find some sheep for a bed。" },
    ],

    vocabulary: [
      { word: "world", pos: "n.", meaning: "世界", gameContext: "Every new Minecraft game creates a unique world to explore" },
      { word: "punch", pos: "v.", meaning: "击打/拳击", gameContext: "Punch trees with your hands to get your first wood blocks" },
      { word: "crafting table", pos: "n.", meaning: "工作台", gameContext: "A crafting table lets you make tools, weapons and more items" },
      { word: "hillside", pos: "n.", meaning: "山坡", gameContext: "Dig into a hillside to make a simple cave home on your first day" },
      { word: "dirt", pos: "n.", meaning: "泥土", gameContext: "Dirt is the easiest block to find — great for a quick first shelter" },
    ],

    wordCount: 160,
    estimatedDifficulty: "A2 (KET)",
    grammarFocus: "Past Simple（一般过去时叙事）+ Emotions（情感词汇：excited, scared, safe, afraid）",
  };
})();
