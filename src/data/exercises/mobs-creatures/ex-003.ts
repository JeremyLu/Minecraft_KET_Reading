// @ts-nocheck
import type { ExerciseData } from '../../../types';

const data: ExerciseData = {
id: "mc-ket-003",
    category: "Mobs & Creatures",
    categoryZh: "生物图鉴",
    type: "Part 2",
    title: "Match the Right Tool",

    players: [
      {
        id: 1,
        name: "Emma",
        desc: "Emma lives near a dark forest. She sees many skeletons and zombies at night. She wants to hit enemies from far away.",
      },
      {
        id: 2,
        name: "Jack",
        desc: "Jack loves exploring deep caves. He often finds gold, iron and diamonds. He needs something to break stone and ores quickly.",
      },
      {
        id: 3,
        name: "Mia",
        desc: "Mia wants to start a big farm. She needs to dig soil and make the ground ready for seeds.",
      },
    ],

    items: [
      {
        label: "A",
        name: "Bow and Arrows",
        desc: "This weapon lets you attack mobs from a distance. You can shoot skeletons before they shoot you. It works best when you are on a high place. You can make arrows from flint, sticks and feathers.",
      },
      {
        label: "B",
        name: "Iron Pickaxe",
        desc: "This tool is stronger than stone tools. It can break stone, ores and even diamond blocks. You use it to collect materials for building and crafting. Every miner needs one when going underground.",
      },
      {
        label: "C",
        name: "Wooden Hoe",
        desc: "This tool is used to turn grass and dirt into farmland. After you make the ground ready, you can plant wheat, carrots or potatoes. It is the first step to making your own food.",
      },
    ],

    correctMatching: { 1: "A", 2: "B", 3: "C" },

    answers: [
      {
        id: "1",
        answer: "A (Bow and Arrows)",
        explanation:
          "Emma 想从远处攻击怪物（hit enemies from far away），Bow and Arrows 正是远程武器。",
      },
      {
        id: "2",
        answer: "B (Iron Pickaxe)",
        explanation:
          "Jack 需要快速挖掘石头和矿石（break stone and ores quickly），Iron Pickaxe 是采矿工具。",
      },
      {
        id: "3",
        answer: "C (Wooden Hoe)",
        explanation:
          "Mia 要准备土地种种子（make the ground ready for seeds），Hoe 用来把土地变农田。",
      },
    ],

    vocabulary: [
      {
        word: "distance",
        pos: "n.",
        meaning: "距离",
        gameContext:
          "Bows let you attack from a distance so you don't get hurt",
      },
      {
        word: "ore",
        pos: "n.",
        meaning: "矿石",
        gameContext:
          "Iron ore, gold ore, and diamond ore are found in caves underground",
      },
      {
        word: "farmland",
        pos: "n.",
        meaning: "农田",
        gameContext:
          "Use a hoe on dirt or grass to make farmland for planting crops",
      },
      {
        word: "miner",
        pos: "n.",
        meaning: "矿工",
        gameContext:
          "A miner goes underground to collect ores, stone and other materials",
      },
      {
        word: "attack",
        pos: "v.",
        meaning: "攻击",
        gameContext:
          "Mobs will attack you if you get too close to them at night",
      },
    ],

    wordCount: 180,
    estimatedDifficulty: "A2 (KET)",
    grammarFocus: "Simple Present（一般现在时描述工具用途）",
};

export default data;
