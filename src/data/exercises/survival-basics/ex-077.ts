// @ts-nocheck
import type { ExerciseData } from '../../../types';

const data: ExerciseData = {
id: "mc-ket-077",
    category: "Survival Basics",
    categoryZh: "生存基础",
    type: "Part 4",
    title: "Smelt It!",

    clozeText: "To make an iron ingot, (1)[____] find some iron ore underground. You need a stone pickaxe or (2)[____] to mine it. Then, put the iron ore (3)[____] a furnace with some coal. Wait a few seconds and you will get an iron ingot!",

    blanks: [
      { id: 1, options: ["first", "last", "never"], correct: 0 },
      { id: 2, options: ["good", "better", "best"], correct: 1 },
      { id: 3, options: ["at", "on", "into"], correct: 2 },
    ],

    answers: [
      { id: "1", answer: "first", explanation: "first 表示第一步，先说先采矿再烧。last 是最后（不合逻辑），never 是从不。" },
      { id: "2", answer: "better", explanation: "or better（或者更好的）是比较级，需要一个比石镐更高级的工具来挖铁矿。" },
      { id: "3", answer: "into", explanation: "put...into 表示把铁矿石放进熔炉里。at 是某点位置，on 是在表面，只有 into 表达放进去。" },
    ],

    vocabulary: [
      { word: "smelt", pos: "v.", meaning: "熔炼/冶炼", gameContext: "Smelt iron ore in a furnace to turn it into iron ingots." },
      { word: "furnace", pos: "n.", meaning: "熔炉", gameContext: "Put ore and fuel in a furnace to smelt metal." },
      { word: "coal", pos: "n.", meaning: "煤", gameContext: "Coal is a fuel. Put it in a furnace to smelt ores and cook food." },
    ],

    wordCount: 55,
    estimatedDifficulty: "A2 (KET)",
    grammarFocus: "顺序连词（first/then/next）+ 比较级（better）",
};

export default data;
