// @ts-nocheck
import type { ExerciseData } from '../../../types';

const data: ExerciseData = {
id: "mc-ket-068",
    category: "Mobs & Creatures",
    categoryZh: "生物图鉴",
    type: "Part 2",
    title: "Match the Pet Food",

    players: [
      {
        id: 1,
        name: "Ivy",
        desc: "Ivy found a wild white wolf in the forest. She wants to make it her pet. She needs the right food to give it so the wolf trusts her and a red collar appears around its neck."
      },
      {
        id: 2,
        name: "Rory",
        desc: "Rory tamed a cat in a village. Now he has two cats and wants them to have a baby kitten. He needs to give them both the right food to make them fall in love and breed."
      },
      {
        id: 3,
        name: "Stella",
        desc: "Stella is sailing across the ocean and found a lonely dolphin following her boat. She wants to feed it so it becomes her friend and leads her to the nearest shipwreck or ocean ruin."
      },
      {
        id: 4,
        name: "Felix",
        desc: "Felix found a colorful parrot in the jungle. He has some seeds in his bag but he is not sure which plant food to give the parrot so it sits on his shoulder and copies the sounds of nearby mobs."
      },
      {
        id: 5,
        name: "Violet",
        desc: "Violet has a horse she wants to ride faster. She wants to make her two adult horses breed so she can get a baby foal that might be even faster than its parents. What food makes horses breed?"
      },
    ],

    items: [
      {
        label: "A",
        name: "Bones",
        desc: "White sticks that drop from Skeletons when you defeat them. You can use them to tame a wild Wolf — just hold a bone and right-click the wolf until hearts appear and a red collar shows around its neck. The wolf will now follow you and fight for you!",
      },
      {
        label: "B",
        name: "Raw Cod",
        desc: "A grey fish you can catch with a fishing rod. You can also kill Cod swimming in cold ocean waters. Raw Cod is the food that makes cats trust you and breed. Cook it in a furnace with coal to get Cooked Cod, which gives you more hunger bars when you eat it.",
      },
      {
        label: "C",
        name: "Raw Salmon",
        desc: "A pink fish found in rivers and warm ocean waters. It is the favorite food of dolphins! If you feed it to a dolphin, it will become friendly and swim toward the nearest shipwreck or buried treasure. You can also cook it to make a better meal for yourself.",
      },
      {
        label: "D",
        name: "Seeds",
        desc: "Small brown dots you get by breaking tall grass. You can also get them from harvesting wheat. Parrots love seeds! Feed seeds to a wild parrot to tame it — it will sit on your shoulder and make fun sounds like nearby mob noises. Seeds also breed chickens.",
      },
      {
        label: "E",
        name: "Golden Apple",
        desc: "A shiny golden fruit made from an Apple and 8 Gold Ingots. Horses, donkeys, and mules must be given Golden Apples or Golden Carrots to breed. A regular apple won't work! You can also use it to attract and heal Zombie Villagers to turn them back into normal Villagers.",
      },
    ],

    correctMatching: { 1: "A", 2: "B", 3: "C", 4: "D", 5: "E" },

    answers: [
      { id: "1", answer: "A (Bones)", explanation: "Ivy 要驯服狼 → Bones（骨头）驯服狼，喂到出现红项圈。" },
      { id: "2", answer: "B (Raw Cod)", explanation: "Rory 要让猫繁殖 → Raw Cod（生鳕鱼）是猫信任和繁殖的食物。" },
      { id: "3", answer: "C (Raw Salmon)", explanation: "Stella 要跟海豚交朋友 → Raw Salmon（生鲑鱼）喂海豚，带你去沉船。" },
      { id: "4", answer: "D (Seeds)", explanation: "Felix 要驯服鹦鹉 → Seeds（种子）驯服鹦鹉，它会坐在你肩膀上模仿声音。" },
      { id: "5", answer: "E (Golden Apple)", explanation: "Violet 要让马繁殖 → Golden Apple（金苹果）或金胡萝卜才能让马生小马。" },
    ],

    vocabulary: [
      { word: "collar",        pos: "n.", meaning: "项圈",         gameContext: "A red collar appears when you tame a wolf" },
      { word: "breed",         pos: "v.", meaning: "繁殖",         gameContext: "Feed two animals the right food to make them breed" },
      { word: "dolphin",       pos: "n.", meaning: "海豚",         gameContext: "Feed a dolphin salmon to make it your friend" },
      { word: "tame",          pos: "v.", meaning: "驯服",         gameContext: "Use bones to tame a wolf" },
      { word: "foal",          pos: "n.", meaning: "小马驹",       gameContext: "Two horses breed to make a baby foal" },
    ],

    wordCount: 68,
    estimatedDifficulty: "A2 (KET)",
    grammarFocus: "不定式表目的（to tame / to make / to feed）+ 条件状语",
};

export default data;
