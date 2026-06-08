// @ts-nocheck
import type { ExerciseData } from '../../../types';

const data: ExerciseData = {
id: "mc-ket-044",
    category: "Mobs & Creatures",
    categoryZh: "生物图鉴",
    type: "Part 2",
    title: "Match the Villager Jobs",

    instruction:
      "Three players are talking about the villagers they like most. Read what each person says and match them with the villager job.",

    players: [
      {
        id: 1,
        name: "Liam",
        text:
          "I love trading with the villager who works with books. He gives me great enchanted books. Last time I got a book with Sharpness V! I always visit him when I need to make my sword stronger.",
      },
      {
        id: 2,
        name: "Mia",
        text:
          "My favourite villager grows food near the village. She gives me bread and carrots. I visit her every morning to get supplies. Without her, I would not have enough food for my long trips.",
      },
      {
        id: 3,
        name: "Jake",
        text:
          "I always go to the villager near the furnace. He trades iron and gold tools. Last week, he sold me a diamond pickaxe! I think he is the most useful villager in the whole village.",
      },
    ],

    items: [
      {
        id: "A",
        label: "A",
        name: "The Librarian",
        description:
          "Works in a library. Trades enchanted books and name tags. Wears a white robe.",
      },
      {
        id: "B",
        label: "B",
        name: "The Farmer",
        description:
          "Works in the fields. Trades food like bread, carrots, and melons. Wears a brown hat.",
      },
      {
        id: "C",
        label: "C",
        name: "The Toolsmith",
        description:
          "Works near a smithing table. Trades iron and diamond tools. Wears a black apron.",
      },
    ],

    correctMatching: { 1: "A", 2: "B", 3: "C" },

    answers: [
      {
        id: "1",
        answer: "A — The Librarian",
        explanation:
          "Liam 提到 the villager who works with books 和 enchanted books，对应 Librarian（图书馆管理员），职业块是讲台 Lectern。",
      },
      {
        id: "2",
        answer: "B — The Farmer",
        explanation:
          "Mia 提到 grows food、bread and carrots，对应 Farmer（农民），职业块是堆肥桶 Composter。",
      },
      {
        id: "3",
        answer: "C — The Toolsmith",
        explanation:
          "Jake 提到 near the furnace、iron and gold tools、diamond pickaxe，对应 Toolsmith（工具匠），职业块是铁砧 Smithing Table。",
      },
    ],

    vocabulary: [
      {
        word: "librarian",
        pos: "n.",
        meaning: "图书管理员",
        gameContext: "The Librarian villager trades enchanted books; find them near lecterns",
      },
      {
        word: "enchanted",
        pos: "adj.",
        meaning: "附魔的；施了魔法的",
        gameContext: "Use an enchanting table or enchanted book to make enchanted weapons",
      },
      {
        word: "toolsmith",
        pos: "n.",
        meaning: "工具匠",
        gameContext: "The Toolsmith trades high-quality tools, sometimes at great prices",
      },
      {
        word: "trade",
        pos: "v.",
        meaning: "交易；交换",
        gameContext: "Trade with villagers by giving them emeralds in exchange for items",
      },
      {
        word: "supplies",
        pos: "n.",
        meaning: "补给品；物资",
        gameContext: "Stock up on supplies from villagers before going on a long adventure",
      },
    ],

    wordCount: 165,
    estimatedDifficulty: "A2 (KET)",
    grammarFocus: "职业描述词汇 + 关系从句（the villager who...）",
};

export default data;
