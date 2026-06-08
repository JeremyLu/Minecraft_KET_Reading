// @ts-nocheck
import type { ExerciseData } from '../../../types';

const data: ExerciseData = {
id: "mc-ket-040",
    category: "Mobs & Creatures",
    categoryZh: "生物图鉴",
    type: "Part 4",
    title: "The Night Phantom",

    clozeText: [
      "The Phantom is a flying undead mob that (1)[____] appear in the night sky.",
      "It only comes when a player has (2)[____] slept for three days or more.",
      "Phantoms fly high (3)[____] the air and then dive down to attack players.",
      "They make a scary screaming sound before (4)[____].",
      "The best way to stop a Phantom is (5)[____] sleep in a bed before midnight.",
      "If you kill a Phantom, it will drop Phantom Membrane,",
      "(6)[____] you can use to repair the Elytra wings.",
    ].join(" "),

    blanks: [
      { id: 1, options: ["can", "is", "are"], correct: 0 },
      { id: 2, options: ["not", "never", "no"], correct: 1 },
      { id: 3, options: ["in", "at", "on"], correct: 0 },
      { id: 4, options: ["attacks", "attacked", "attacking"], correct: 2 },
      { id: 5, options: ["to", "for", "at"], correct: 0 },
      { id: 6, options: ["what", "which", "who"], correct: 1 },
    ],

    answers: [
      {
        id: "1",
        answer: "A — can",
        explanation:
          "can appear 表示能力/可能性，主语 Phantom 是单数名词，其他选项是 be 动词不合逻辑。",
      },
      {
        id: "2",
        answer: "B — never",
        explanation:
          "has never slept（现在完成时否定），表示从未睡觉。not 不能直接放在 has 后面修饰 slept，no 不修饰动词。",
      },
      {
        id: "3",
        answer: "A — in",
        explanation:
          "fly in the air 是固定搭配，表示在空中飞翔。at/on 与 air 不搭配。",
      },
      {
        id: "4",
        answer: "C — attacking",
        explanation:
          "before + V-ing 是固定语法结构（介词后接动名词）。before attacks/attacked 语法错误。",
      },
      {
        id: "5",
        answer: "A — to",
        explanation:
          "The best way to do sth. 是固定句式，way 后接不定式 to + V。",
      },
      {
        id: "6",
        answer: "B — which",
        explanation:
          "which 引导非限定性定语从句，指代前面的名词 Phantom Membrane（物）。what 不引导定语从句，who 指人。",
      },
    ],

    vocabulary: [
      {
        word: "phantom",
        pos: "n.",
        meaning: "幻翼；幽灵",
        gameContext: "Phantoms attack players who haven't slept for 3 nights",
      },
      {
        word: "undead",
        pos: "adj.",
        meaning: "不死生物的",
        gameContext: "Skeletons, Zombies and Phantoms are all undead mobs",
      },
      {
        word: "membrane",
        pos: "n.",
        meaning: "薄膜；膜",
        gameContext: "Phantom Membrane is used to repair Elytra wings",
      },
      {
        word: "elytra",
        pos: "n.",
        meaning: "鞘翅（飞行翅膀）",
        gameContext: "Elytra lets players glide through the air like a bird",
      },
      {
        word: "dive",
        pos: "v.",
        meaning: "俯冲；下潜",
        gameContext: "Phantoms dive from the sky to attack you",
      },
    ],

    wordCount: 82,
    estimatedDifficulty: "A2 (KET)",
    grammarFocus: "情态动词 can/will + before V-ing + 关系从句 which",
};

export default data;
