// @ts-nocheck
import type { ExerciseData } from '../../../types';

const data: ExerciseData = {
id: "mc-ket-056",
    category: "Survival Basics",
    categoryZh: "生存基础",
    type: "Part 1",
    title: "Axe or Sword",

    passage: [
      "═══ VILLAGE BLACKSMITH ═══",
      "",
      "AXE IS BACK!",
      "An iron axe does 9 attack damage.",
      "An iron sword does 6 attack damage.",
      "But axes are slower than swords.",
      "Choose wisely: damage vs speed!",
      "Visit our shop today.",
      "",
      "═══ ADVENTURER'S TIP ═══",
      "",
      "WHEN TO USE AN AXE",
      "1. Fighting a single strong enemy",
      "2. Breaking wooden shields quickly",
      "3. Chopping trees AND fighting",
      "One tool, two uses!",
      "",
      "═══ WEAPON WARNING ═══",
      "",
      "DON'T FORGET YOUR SWORD!",
      "Axes lose durability TWICE as",
      "fast in combat. They are made",
      "for chopping wood, not fighting!",
      "Bring spare weapons!",
    ].join("\n"),

    questions: [
      {
        id: "q1",
        text: "How much damage does an iron axe do?",
        options: ["6", "9", "12"],
        correct: 1,
      },
      {
        id: "q2",
        text: "What is the disadvantage of an axe?",
        options: ["It does less damage", "It is slower", "It breaks in one hit"],
        correct: 1,
      },
      {
        id: "q3",
        text: "According to the Tip, when should you use an axe?",
        options: ["Fighting many zombies", "Fighting a single strong enemy", "Running away from mobs"],
        correct: 1,
      },
      {
        id: "q4",
        text: "What happens when you use an axe to fight for too long?",
        options: ["It becomes faster", "It loses durability faster", "It turns into a sword"],
        correct: 1,
      },
      {
        id: "q5",
        text: "What is the main use of an axe?",
        options: ["Fighting mobs", "Chopping wood", "Building houses"],
        correct: 1,
      },
    ],

    answers: [
      { id: "q1", answer: "B", explanation: "公告明确说 An iron axe does 9 attack damage。" },
      { id: "q2", answer: "B", explanation: "But axes are slower than swords，斧头速度比剑慢。" },
      { id: "q3", answer: "B", explanation: "Fighting a single strong enemy 是公告中推荐的斧头使用场景。" },
      { id: "q4", answer: "B", explanation: "Axes lose durability TWICE as fast in combat，战斗中耐久消耗翻倍。" },
      { id: "q5", answer: "B", explanation: "They are made for chopping wood，斧头主要用途是砍树。" },
    ],

    vocabulary: [
      { word: "axe",           pos: "n.", meaning: "斧头",               gameContext: "An axe deals more damage than a sword but is slower" },
      { word: "durability",    pos: "n.", meaning: "耐久度",             gameContext: "Axes lose durability twice as fast in combat" },
      { word: "blacksmith",    pos: "n.", meaning: "铁匠",               gameContext: "Village Blacksmith sells iron weapons" },
      { word: "wisely",        pos: "adv.", meaning: "明智地",           gameContext: "Choose wisely between damage and speed" },
      { word: "spare",         pos: "adj.", meaning: "备用的",           gameContext: "Bring spare weapons in case your main one breaks" },
    ],

    wordCount: 98,
    estimatedDifficulty: "A2 (KET)",
    grammarFocus: "祈使句（Choose / Visit / Bring）+ 比较级（slower / faster）+ 倍数表达（twice as fast）",
};

export default data;
