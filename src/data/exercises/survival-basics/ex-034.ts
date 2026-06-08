// @ts-nocheck
import type { ExerciseData } from '../../../types';

const data: ExerciseData = {
id: "mc-ket-034",
    category: "Survival Basics",
    categoryZh: "生存基础",
    type: "Part 5",
    title: "How to Make a Sword",

    clozeText: [
      "Every player needs a sword to fight monsters and protect",
      "themselves. To make a sword, (1)[____] need two things: a",
      "stick and two blocks of a hard material. The material (2)[____]",
      "be wood, stone, iron, gold or diamond. Iron is (3)[____] good",
      "choice because it is strong and not too hard to find. Open your",
      "crafting table and put one stick (4)[____] the bottom middle",
      "box. Place the two blocks above the stick in a straight line.",
      "Your sword is ready! Hold it (5)[____] your right hand and",
      "you can now fight any mobs that come near you.",
    ].join(" "),

    blanks: [
      { id: 1, correct: "you" },
      { id: 2, correct: "can" },
      { id: 3, correct: "a" },
      { id: 4, correct: "in" },
      { id: 5, correct: "in" },
    ],

    answers: [
      { id: "1", answer: "you", explanation: "主语 you 表示'你'，祈使句隐含主语，此处需要代词作主语" },
      { id: "2", answer: "can", explanation: "The material CAN be wood... — can 表示可能性，材料可以是木头等" },
      { id: "3", answer: "a", explanation: "a good choice — a 修饰可数名词单数 choice，表示'一个不错的选择'" },
      { id: "4", answer: "in", explanation: "put the stick IN the bottom middle box — in 表示在格子里面" },
      { id: "5", answer: "in", explanation: "hold it IN your right hand — 用右手拿着，in 表示用手持有" },
    ],

    vocabulary: [
      { word: "sword", pos: "n.", meaning: "剑", gameContext: "The main melee weapon in Minecraft — craft with a stick and two blocks" },
      { word: "protect", pos: "v.", meaning: "保护", gameContext: "Use a sword and armour to protect yourself from hostile mobs" },
      { word: "material", pos: "n.", meaning: "材料", gameContext: "Different materials make tools with different strength and speed" },
      { word: "straight", pos: "adj.", meaning: "直的", gameContext: "Place blocks in a straight line on the crafting table grid" },
      { word: "mob", pos: "n.", meaning: "生物/怪物", gameContext: "Mob is short for 'mobile entity' — all animals and monsters in the game" },
    ],

    wordCount: 90,
    estimatedDifficulty: "A2 (KET)",
    grammarFocus: "Pronouns & Modals（代词 you / 情态动词 can / 介词 in）",
};

export default data;
