// @ts-nocheck
import type { ExerciseData } from '../../../types';

const data: ExerciseData = {
id: "mc-ket-047",
    category: "Exploration & Adventure",
    categoryZh: "冒险探索",
    type: "Part 3",
    title: "Into the End",

    passage: [
      "After many days of mining and building, Alex finally had enough",
      "blaze powder and ender pearls. She crafted twelve Eyes of",
      "Ender and placed them into the End Portal in the Stronghold.",
      "The portal activated with a loud noise. Purple particles flew",
      "everywhere.",
      "",
      "Alex jumped into the portal. When she opened her eyes, she",
      "was on a small grass island in the middle of a dark void. This",
      "was the End — the final dimension.",
      "",
      "In the distance, she could see the main End island. A tall",
      "black tower stood there — the End Portal with its Ender Crystals.",
      "And high above the tower, the Ender Dragon was flying in",
      "circles. Its purple wings blocked the light.",
      "",
      "Alex felt excited and scared at the same time. She put on her",
      "diamond armour, drank an Invisibility potion, and walked",
      "across the End stone bridge towards the tower.",
    ].join("\n"),

    questions: [
      {
        id: "q1",
        text: "What did Alex use to activate the End Portal?",
        options: ["Ender Pearls only", "Twelve Eyes of Ender", "Blaze Rods"],
        correct: 1,
      },
      {
        id: "q2",
        text: "Where did Alex appear after jumping into the portal?",
        options: ["On a small grass island", "In a Nether fortress", "In a village"],
        correct: 0,
      },
      {
        id: "q3",
        text: "What was flying above the End Portal tower?",
        options: ["A Ghast", "The Wither", "The Ender Dragon"],
        correct: 2,
      },
      {
        id: "q4",
        text: "How did Alex feel before fighting the dragon?",
        options: ["Only excited", "Only scared", "Excited and scared"],
        correct: 2,
      },
      {
        id: "q5",
        text: "What did Alex drink before walking to the tower?",
        options: ["A Healing potion", "An Invisibility potion", "A Water bottle"],
        correct: 1,
      },
    ],

    answers: [
      { id: "q1", answer: "B", explanation: "原文 crafted twelve Eyes of Ender and placed them into the End Portal，需要 12 个末影之眼。" },
      { id: "q2", answer: "A", explanation: "原文 she was on a small grass island in the middle of a dark void，这是末地外岛。" },
      { id: "q3", answer: "C", explanation: "原文 the Ender Dragon was flying in circles，末影龙在末地传送门塔上方盘旋。" },
      { id: "q4", answer: "C", explanation: "原文 Alex felt excited and scared at the same time，既兴奋又害怕。" },
      { id: "q5", answer: "B", explanation: "原文 drank an Invisibility potion，喝隐身药水是为了不被末影人发现。" },
    ],

    vocabulary: [
      { word: "stronghold",   pos: "n.", meaning: "要塞",             gameContext: "An underground structure that contains the End Portal" },
      { word: "void",          pos: "n.", meaning: "虚空",             gameContext: "The dark empty space in the End dimension" },
      { word: "activate",      pos: "v.", meaning: "激活；启动",       gameContext: "Place Eyes of Ender to activate the End Portal" },
      { word: "circle",        pos: "n.", meaning: "圆圈；环形",       gameContext: "The Ender Dragon flies in circles above the tower" },
      { word: "invisibility",  pos: "n.", meaning: "隐身；不可见",   gameContext: "Invisibility potion makes you invisible to mobs" },
    ],

    wordCount: 175,
    estimatedDifficulty: "A2 (KET)",
    grammarFocus: "过去进行时（was flying） + 序数词（twelve/first） + 并列连词（and/but）",
};

export default data;
