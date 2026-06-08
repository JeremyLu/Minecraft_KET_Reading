// @ts-nocheck
import type { ExerciseData } from '../../../types';

const data: ExerciseData = {
id: "mc-ket-074",
    category: "Survival Basics",
    categoryZh: "生存基础",
    type: "Part 1",
    title: "Cave Entrance",

    passage: [
      "🕳 CAVE ENTRANCE 🕳",
      "",
      "Bring a sword and torches.",
      "Do not enter without a shield.",
      "Watch out for skeletons!",
    ].join("\n"),

    questions: [
      {
        id: "q1",
        text: "What does this sign tell players to do?",
        options: [
          "Come inside without any tools.",
          "Bring a sword and torches, and use a shield.",
          "This cave is closed today.",
        ],
        correct: 1,
      },
    ],

    answers: [
      { id: "q1", answer: "B", explanation: "告示建议带剑和火把，并强调必须带盾牌。选项 B 完全概括了告示内容。A 说不用带工具，与告示相反。C 说洞穴关闭，告示没提到。" },
    ],

    vocabulary: [
      { word: "entrance", pos: "n.", meaning: "入口", gameContext: "The entrance to a cave is where you first go in." },
      { word: "sword", pos: "n.", meaning: "剑", gameContext: "Use a sword to fight mobs like zombies and skeletons." },
      { word: "watch out", pos: "phr.v.", meaning: "小心/当心", gameContext: "Watch out for creepers — they can sneak up behind you!" },
    ],

    wordCount: 28,
    estimatedDifficulty: "A2 (KET)",
    grammarFocus: "Imperatives（祈使句：命令、建议、警告）",
};

export default data;
