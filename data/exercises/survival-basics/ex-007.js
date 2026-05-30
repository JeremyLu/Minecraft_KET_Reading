/**
 * mc-ket-007 — How to Tame a Wolf
 * Category: Survival Basics / 生存基础
 * Type: Part 4 — Multiple-Choice Cloze (70-100 words, 6 gaps × 3 options)
 */

(function () {
  if (!window.MINECRAFT_KET_DATA) window.MINECRAFT_KET_DATA = {};

  MINECRAFT_KET_DATA["mc-ket-007"] = {
    id: "mc-ket-007",
    category: "Survival Basics",
    categoryZh: "生存基础",
    type: "Part 4",
    title: "How to Tame a Wolf",

    clozeText: "In Minecraft, you can tame a wolf and make it (1)[____] pet. First, you need to find a wolf. Wolves usually live (2)[____] forests and taiga biomes. When you see a wolf, do not hit it — you must give it (3)[____] bones. To do this, hold the bone in your hand and right-click (4)[____] the wolf. After you give enough bones, red hearts will appear above (5)[____] head. The wolf is now your friend! It will follow you and help you fight (6)[____] monsters.",

    blanks: [
      { id: 1, options: ["your", "you", "yours"], correct: 0 },
      { id: 2, options: ["at", "in", "on"], correct: 1 },
      { id: 3, options: ["some", "any", "much"], correct: 0 },
      { id: 4, options: ["at", "to", "on"], correct: 2 },
      { id: 5, options: ["it", "its", "it's"], correct: 1 },
      { id: 6, options: ["for", "with", "against"], correct: 2 },
    ],

    answers: [
      { id: "1", answer: "your", explanation: "your 是形容词性物主代词，后面接名词 pet，表示'你的宠物'。you 是主格，yours 是名词性物主代词后不接名词。" },
      { id: "2", answer: "in", explanation: "live in + 地点，表示'住在某地'。at 用于小地点，on 用于表面。" },
      { id: "3", answer: "some", explanation: "some 用于肯定句中表示'一些'。any 用于否定/疑问句，much 修饰不可数名词但 bones 可数。" },
      { id: "4", answer: "on", explanation: "right-click on 是固定搭配，表示'右键点击某物'。" },
      { id: "5", answer: "its", explanation: "its 是所有格，表示'它的头'。it 是主格/宾格，it's 是 it is 缩写。" },
      { id: "6", answer: "against", explanation: "fight against 是固定搭配，表示'对抗/与…战斗'。fight for 表示为…而战，fight with 表示与…一起战斗。" },
    ],

    vocabulary: [
      { word: "tame", pos: "v.", meaning: "驯服", gameContext: "Use bones to tame a wolf and it becomes your pet dog" },
      { word: "biome", pos: "n.", meaning: "生物群系", gameContext: "Different biomes like forests, deserts and taiga have different animals" },
      { word: "appear", pos: "v.", meaning: "出现", gameContext: "Red hearts appear above a wolf's head when you tame it" },
      { word: "follow", pos: "v.", meaning: "跟随", gameContext: "A tamed wolf will follow you everywhere you go" },
      { word: "enough", pos: "adj.", meaning: "足够的", gameContext: "You need to give a wolf enough bones before it trusts you" },
    ],

    wordCount: 85,
    estimatedDifficulty: "A2 (KET)",
    grammarFocus: "物主代词（your/its）、介词搭配（in/on/against）、限定词（some）",
  };
})();
