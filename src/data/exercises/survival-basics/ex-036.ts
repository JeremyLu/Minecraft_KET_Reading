// @ts-nocheck
import type { ExerciseData } from '../../../types';

const data: ExerciseData = {
id: "mc-ket-036",
    category: "Survival Basics",
    categoryZh: "生存基础",
    type: "Part 5",
    title: "How to Plant a Tree",

    clozeText: [
      "Trees are very important in Minecraft. They give you wood,",
      "apples and even saplings for (1)[____] trees. To plant a tree,",
      "(2)[____] need a sapling. You can get saplings by breaking",
      "tree leaves with your hands. (3)[____], find a place with",
      "enough light — grass or dirt blocks work best. Put the sapling",
      "(4)[____] the ground by right-clicking. (5)[____] a few days,",
      "the sapling will grow into a tall tree. Remember to leave",
      "enough space around it so the tree can grow big and strong.",
    ].join(" "),

    blanks: [
      { id: 1, correct: "more" },
      { id: 2, correct: "you" },
      { id: 3, correct: "First" },
      { id: 4, correct: "on" },
      { id: 5, correct: "After" },
    ],

    answers: [
      { id: "1", answer: "more", explanation: "saplings for MORE trees — 更多树，more 表示更多" },
      { id: "2", answer: "you", explanation: "YOU need a sapling — 你需要树苗，第二人称代词作主语" },
      { id: "3", answer: "First", explanation: "FIRST, find a place — 第一步：找地方。序列词开头" },
      { id: "4", answer: "on", explanation: "put the sapling ON the ground — 放在地面上，介词 on 表示在表面" },
      { id: "5", answer: "After", explanation: "AFTER a few days — 几天之后，时间状语" },
    ],

    vocabulary: [
      { word: "sapling", pos: "n.", meaning: "树苗", gameContext: "Break tree leaves to get saplings — plant them to grow new trees" },
      { word: "plant", pos: "v.", meaning: "种植", gameContext: "You can plant saplings, seeds and many other things in Minecraft" },
      { word: "grow", pos: "v.", meaning: "生长/成长", gameContext: "Saplings grow into trees over time if they have enough light and space" },
      { word: "leaves", pos: "n.", meaning: "树叶", gameContext: "Breaking leaves with your hands can give you saplings and sometimes apples" },
      { word: "space", pos: "n.", meaning: "空间", gameContext: "Trees need at least 4 blocks of empty space above them to grow" },
    ],

    wordCount: 82,
    estimatedDifficulty: "A2 (KET)",
    grammarFocus: "Sequencers & Prepositions（序列词：First/Then + 介词：on, after）",
};

export default data;
