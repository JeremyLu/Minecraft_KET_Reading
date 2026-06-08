// @ts-nocheck
import type { ExerciseData } from '../../../types';

const data: ExerciseData = {
id: "mc-ket-078",
    category: "Survival Basics",
    categoryZh: "生存基础",
    type: "Part 4",
    title: "Time to Sleep",

    clozeText: "When the sun goes down, you (1)[____] go to sleep. If you do not sleep, monsters (2)[____] come out at night. You need a bed to sleep, and you can make one (3)[____] wool and wood.",

    blanks: [
      { id: 1, options: ["should", "can't", "mustn't"], correct: 0 },
      { id: 2, options: ["will", "was", "did"], correct: 0 },
      { id: 3, options: ["use", "using", "used"], correct: 1 },
    ],

    answers: [
      { id: "1", answer: "should", explanation: "should 表示建议——天黑了应该睡觉。can't 是不能（太绝对），mustn't 是禁止（意思相反）。" },
      { id: "2", answer: "will", explanation: "if...will 是第一条件句结构。if you do not sleep, monsters will come out（如果你不睡觉，怪物就会出现）。" },
      { id: "3", answer: "using", explanation: "make one using wool and wood = 用羊毛和木头做一个（bed），using 表示使用的材料/方式。" },
    ],

    vocabulary: [
      { word: "go down", pos: "phr.v.", meaning: "落下", gameContext: "When the sun goes down, it gets dark and mobs start to spawn." },
      { word: "monster", pos: "n.", meaning: "怪物", gameContext: "Zombies, skeletons and spiders are monsters that come out at night." },
      { word: "bed", pos: "n.", meaning: "床", gameContext: "Sleep in a bed to skip the night and set your respawn point." },
    ],

    wordCount: 50,
    estimatedDifficulty: "A2 (KET)",
    grammarFocus: "should（建议）+ 第一条件句（if...will）",
};

export default data;
