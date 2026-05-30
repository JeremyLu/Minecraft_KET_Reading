/**
 * mc-ket-048 — The Ocean Monument
 * Category: Exploration & Adventure / 冒险探索
 * Type: Part 4 — MCQ Cloze (95 words, 6 gaps × 3 options)
 * Grammar: 比较级 + 情态动词 must/need + 方位介词
 * Topic: Ocean Monument 海底神殿 — 守卫者与远古守卫者
 */

(function () {
  if (!window.MINECRAFT_KET_DATA) window.MINECRAFT_KET_DATA = {};

  MINECRAFT_KET_DATA["mc-ket-048"] = {
    id: "mc-ket-048",
    category: "Exploration & Adventure",
    categoryZh: "冒险探索",
    type: "Part 4",
    title: "The Ocean Monument",

    clozeText: [
      "The Ocean Monument is a (1)[____] structure made of prismarine.",
      "It is guarded by Guardians and three (2)[____] Guardians.",
      "The water inside the monument is (3)[____] because of the sponge rooms.",
      "You (4)[____] bring water-breathing potions before entering.",
      "An axolotl (5)[____] help you fight the Guardians.",
      "After you defeat the Elders, you (6)[____] get Wet Sponges and Prismarine.",
    ].join(" "),

    blanks: [
      { id: 1, options: ["large", "small", "tiny"],             correct: 0 },
      { id: 2, options: ["Elder", "Young", "Baby"],             correct: 0 },
      { id: 3, options: ["dry", "wet", "dangerous"],           correct: 0 },
      { id: 4, options: ["should", "can", "may"],              correct: 0 },
      { id: 5, options: ["can", "must", "does"],                correct: 0 },
      { id: 6, options: ["will", "will not", "cannot"],         correct: 0 },
    ],

    answers: [
      { id: "1", answer: "A — large",  explanation: "Ocean Monument 是大型水下结构，large 正确。small/tiny 与事实不符。" },
      { id: "2", answer: "A — Elder",  explanation: "海神殿里有 3 只远古守卫者（Elder Guardians），会持续给予挖掘疲劳效果。" },
      { id: "3", answer: "A — dry",    explanation: "海绵房（sponge rooms）会吸水，使神殿内部变干。dry 是唯一合理选项。" },
      { id: "4", answer: "A — should", explanation: "should 表示建议，进入前应该准备水肺药水。" },
      { id: "5", answer: "A — can",    explanation: "can 表示能力，axolotl 可以帮助你对付守卫者。" },
      { id: "6", answer: "A — will",   explanation: "will 表示将来时，击败远古守卫者后你会获得湿海绵和海晶石。" },
    ],

    vocabulary: [
      { word: "monument",     pos: "n.", meaning: "纪念碑；遗迹",       gameContext: "Ocean Monument is an underwater structure" },
      { word: "prismarine",    pos: "n.", meaning: "海晶石",             gameContext: "Prismarine blocks make up the Monument" },
      { word: "guardian",      pos: "n.", meaning: "守卫者",             gameContext: "Guardians shoot lasers at players" },
      { word: "axolotl",      pos: "n.", meaning: "美西螈",             gameContext: "Axolotls help fight underwater mobs" },
      { word: "sponge",        pos: "n.", meaning: "海绵",               gameContext: "Wet Sponge can be dried in a furnace" },
    ],

    wordCount: 95,
    estimatedDifficulty: "A2 (KET)",
    grammarFocus: "比较级 + 情态动词 should/can/will + 方位介词 inside/into",
  };
})();
