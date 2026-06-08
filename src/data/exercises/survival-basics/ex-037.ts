// @ts-nocheck
import type { ExerciseData } from '../../../types';

const data: ExerciseData = {
id: "mc-ket-037",
    category: "Survival Basics",
    categoryZh: "生存基础",
    type: "Part 4",
    title: "How to Breed Cows",

    clozeText: "If you want (1)[____] cows on your farm, you need to breed them. First, build a fenced area with (2)[____] space for the animals to walk around. You must have at least two cows close to (3)[____] other. Hold wheat in your hand and right-click on (4)[____] cow. You will see hearts appear — this means the cow is ready to breed. Then do the same to the other cow. Soon, a baby cow will appear! After breeding, you must wait (5)[____] minutes before the cows can breed again. With patience, you can have (6)[____] cows for milk, leather and meat.",

    blanks: [
      { id: 1, options: ["more", "many", "much"], correct: 0 },
      { id: 2, options: ["enough", "a few", "too many"], correct: 0 },
      { id: 3, options: ["each", "every", "all"], correct: 0 },
      { id: 4, options: ["each", "every", "all"], correct: 0 },
      { id: 5, options: ["some", "many", "much"], correct: 0 },
      { id: 6, options: ["many", "much", "any"], correct: 0 },
    ],

    answers: [
      { id: "1", answer: "more", explanation: "you want MORE cows — 想要更多牛，more 用于比较级或表示额外数量。many 不可修饰 'cows' 前的 more，much 修饰不可数。" },
      { id: "2", answer: "enough", explanation: "ENOUGH space — 足够空间，表示充足。a few 修饰可数名词但不能修饰 space，too many 否定意味不对。" },
      { id: "3", answer: "each", explanation: "close to EACH other — 彼此靠近，固定搭配 each other = 互相。every other 指每隔一个。" },
      { id: "4", answer: "each", explanation: "right-click on EACH cow — 点击每头牛，each 强调个体逐一。" },
      { id: "5", answer: "some", explanation: "wait SOME minutes — 等几分钟，some 修饰可数名词复数表示'一些/几个'。many 也可用，但 some 在肯定句中更自然。" },
      { id: "6", answer: "many", explanation: "MANY cows — 许多牛，many 修饰可数名词复数。much 修饰不可数名词，any 用于否定/疑问句。" },
    ],

    vocabulary: [
      { word: "breed", pos: "v.", meaning: "繁殖", gameContext: "Give two of the same animal their favourite food to make them breed" },
      { word: "fence", pos: "n./v.", meaning: "围栏/围起来", gameContext: "Build a fence around your farm to keep animals safe and stop them from running away" },
      { word: "leather", pos: "n.", meaning: "皮革", gameContext: "Kill cows to get leather — you can use it to make books, armour and item frames" },
      { word: "patience", pos: "n.", meaning: "耐心", gameContext: "You need patience — animals take about 5 minutes before they can breed again" },
      { word: "appear", pos: "v.", meaning: "出现", gameContext: "Hearts appear above animals when they are ready to breed" },
    ],

    wordCount: 100,
    estimatedDifficulty: "A2 (KET)",
    grammarFocus: "Quantifiers（量词：more, enough, each, some, many）",
};

export default data;
