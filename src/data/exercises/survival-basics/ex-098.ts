// @ts-nocheck
import type { ExerciseData } from '../../../types';

const data: ExerciseData = {
  id: "mc-ket-098",
  category: "Survival Basics",
  categoryZh: "生存基础",
  type: "Listening",
  title: "The Enchanting Table",

  audioText: "Steve has collected thirty experience levels from mining and fighting mobs. He wants to enchant his diamond sword. He walks to his Enchanting Table — a dark, glowing block surrounded by fifteen bookshelves. He places his sword in the table and looks at the three options. The first option shows Sharpness III. The second shows Fire Aspect I. The third shows Looting II. Steve thinks carefully and chooses Sharpness III — it makes his sword do more damage. He sees purple glowing letters fly from the bookshelves into the table. His sword is now enchanted! He tests it on a zombie, and it dies in one hit. Enchanting is powerful!",

  passage: "Steve has collected thirty experience levels from mining and fighting mobs. He wants to enchant his diamond sword. He walks to his Enchanting Table — a dark, glowing block surrounded by fifteen bookshelves. He places his sword in the table and looks at the three options. The first option shows Sharpness III. The second shows Fire Aspect I. The third shows Looting II. Steve thinks carefully and chooses Sharpness III — it makes his sword do more damage. He sees purple glowing letters fly from the bookshelves into the table. His sword is now enchanted! He tests it on a zombie, and it dies in one hit. Enchanting is powerful!",

  questions: [
    {
      id: "q1",
      text: "How many experience levels does Steve have?",
      options: ["Fifteen", "Twenty", "Thirty"],
      correct: 2,
    },
    {
      id: "q2",
      text: "Which enchantment does Steve choose?",
      options: ["Fire Aspect", "Sharpness", "Looting"],
      correct: 1,
    },
    {
      id: "q3",
      text: "What happens when Steve tests the sword on a zombie?",
      options: ["The zombie runs away", "The zombie dies in one hit", "The zombie sets on fire"],
      correct: 1,
    },
  ],

  answers: [
    {
      id: "q1",
      answer: "C",
      explanation: "音频开头说 Steve has collected thirty experience levels（收集了 30 级经验）。",
    },
    {
      id: "q2",
      answer: "B",
      explanation: "音频中说 Steve thinks carefully and chooses Sharpness III（选择了锋利 III）。",
    },
    {
      id: "q3",
      answer: "B",
      explanation: "音频结尾说 it dies in one hit（一刀就死了）。设置着火是 Fire Aspect 的效果，但他没选这个。",
    },
  ],

  vocabulary: [
    { word: "enchant", pos: "v.", meaning: "附魔", gameContext: "Use an Enchanting Table with Lapis Lazuli and experience levels to enchant your gear" },
    { word: "bookshelf", pos: "n.", meaning: "书架", gameContext: "Place 15 bookshelves around an Enchanting Table to unlock the highest level enchantments" },
    { word: "Sharpness", pos: "n.", meaning: "锋利（附魔）", gameContext: "Sharpness increases melee damage — each level adds more damage to your hits" },
    { word: "experience", pos: "n.", meaning: "经验值", gameContext: "You get experience from mining, smelting, and defeating mobs — needed for enchanting" },
  ],

  wordCount: 122,
  estimatedDifficulty: "A2 (KET)",
  grammarFocus: "Present perfect（现在完成时）: has collected + Comparatives（比较级）",
};

export default data;
