// @ts-nocheck
import type { ExerciseData } from '../../../types';

const data: ExerciseData = {
  id: "mc-ket-094",
  category: "Survival Basics",
  categoryZh: "生存基础",
  type: "Listening",
  title: "Brewing a Potion",

  audioText: "Alex wants to brew a Potion of Healing. First, she needs a Brewing Stand. She crafts one with three cobblestone and one Blaze Rod. Then, she fills three glass bottles with water from a cauldron. She places the bottles in the Brewing Stand. She adds one Nether Wart to turn the water into an Awkward Potion. Next, she adds a Glistering Melon Slice. Now the potion is a Potion of Healing! Alex drinks it, and her health goes back to full. She is ready to fight monsters again.",

  passage: "Alex wants to brew a Potion of Healing. First, she needs a Brewing Stand. She crafts one with three cobblestone and one Blaze Rod. Then, she fills three glass bottles with water from a cauldron. She places the bottles in the Brewing Stand. She adds one Nether Wart to turn the water into an Awkward Potion. Next, she adds a Glistering Melon Slice. Now the potion is a Potion of Healing! Alex drinks it, and her health goes back to full. She is ready to fight monsters again.",

  questions: [
    {
      id: "q1",
      text: "What does Alex need first to brew potions?",
      options: ["A Cauldron", "A Brewing Stand", "A Furnace"],
      correct: 1,
    },
    {
      id: "q2",
      text: "What ingredient turns water into an Awkward Potion?",
      options: ["Glistering Melon", "Blaze Powder", "Nether Wart"],
      correct: 2,
    },
    {
      id: "q3",
      text: "What does Alex add to make a Potion of Healing?",
      options: ["Golden Apple", "Glistering Melon Slice", "Ghast Tear"],
      correct: 1,
    },
  ],

  answers: [
    {
      id: "q1",
      answer: "B",
      explanation: "音频中说 First, she needs a Brewing Stand（她需要酿造台）。",
    },
    {
      id: "q2",
      answer: "C",
      explanation: "音频中说 She adds one Nether Wart to turn the water into an Awkward Potion（下界疣把水变成粗制药水）。",
    },
    {
      id: "q3",
      answer: "B",
      explanation: "音频中说 she adds a Glistering Melon Slice（她加入闪烁的西瓜片）。Golden Apple 是做金苹果的，Ghast Tear 是做再生药水的。",
    },
  ],

  vocabulary: [
    { word: "brew", pos: "v.", meaning: "酿造", gameContext: "You can brew potions at a Brewing Stand using Nether Wart and other ingredients" },
    { word: "cauldron", pos: "n.", meaning: "炼药锅", gameContext: "Fill a cauldron with water, then use glass bottles to collect water for brewing" },
    { word: "Nether Wart", pos: "n.", meaning: "下界疣", gameContext: "Found in Nether Fortresses — the base ingredient for all potions" },
    { word: "Glistering Melon", pos: "n.", meaning: "闪烁的西瓜", gameContext: "Craft with a melon slice and gold nuggets — used to brew Potions of Healing" },
  ],

  wordCount: 112,
  estimatedDifficulty: "A2 (KET)",
  grammarFocus: "Sequencing words（顺序词）: First, Then, Next + Cause and effect",
};

export default data;
