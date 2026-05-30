/**
 * mc-ket-052 — The Mace
 * Category: Survival Basics / 生存基础
 * Type: Part 3 — Longer Text (165 words, 5 × MCQ)
 * Grammar: 现在时叙事 + 比较级 + 因果关系
 * Topic: Mace 重锤 — 1.21 最新武器，掉落伤害加成
 */

(function () {
  if (!window.MINECRAFT_KET_DATA) window.MINECRAFT_KET_DATA = {};

  MINECRAFT_KET_DATA["mc-ket-052"] = {
    id: "mc-ket-052",
    category: "Survival Basics",
    categoryZh: "生存基础",
    type: "Part 3",
    title: "The Mace",

    passage: [
      "Alex heard about a new weapon called the Mace. It was added",
      "in Minecraft 1.21, the Tricky Trials update. This weapon is",
      "different from all other swords and axes.",
      "",
      "The Mace is very special. The higher you fall before you hit",
      "a mob, the more damage you deal! If you jump from three",
      "blocks high, the Mace does extra damage. If you fall from",
      "ten blocks, it can kill a zombie in one hit!",
      "",
      "To craft a Mace, you need two rare items. First, you must",
      "find a Breeze Rod from the Breeze mob in Trial Chambers.",
      "Second, you need a Heavy Core. The Heavy Core drops from",
      "the Ominous Vault in Trial Chambers.",
      "",
      "Alex used a Wind Charge to launch herself high into the air.",
      "Then she came down with her Mace! The attack was so powerful",
      "that the zombie fell over with just one blow.",
    ].join("\n"),

    questions: [
      {
        id: "q1",
        text: "When was the Mace added to Minecraft?",
        options: ["Version 1.20", "Version 1.21", "Version 1.19"],
        correct: 1,
      },
      {
        id: "q2",
        text: "What makes the Mace do more damage?",
        options: ["Running fast before hitting", "Falling from a height", "Sneaking behind the mob"],
        correct: 1,
      },
      {
        id: "q3",
        text: "How many rare items do you need to craft a Mace?",
        options: ["One", "Two", "Three"],
        correct: 1,
      },
      {
        id: "q4",
        text: "Where can you find a Breeze Rod?",
        options: ["In Trial Chambers", "In the Nether", "In Ocean Monuments"],
        correct: 0,
      },
      {
        id: "q5",
        text: "What did Alex use to launch herself into the air?",
        options: ["A fireworks rocket", "A Wind Charge", "A Slime Block"],
        correct: 1,
      },
    ],

    answers: [
      { id: "q1", answer: "B", explanation: "Mace 在 1.21 Tricky Trials 更新中加入，是最新的近战武器。" },
      { id: "q2", answer: "B", explanation: "Mace 的核心机制：掉落高度越高，伤害越大（Smash Attack）。" },
      { id: "q3", answer: "B", explanation: "合成 Mace 需要 Breeze Rod + Heavy Core 两个稀有物品。" },
      { id: "q4", answer: "A", explanation: "Breeze Rod 来自 Trial Chambers 中的 Breeze（旋风人）。" },
      { id: "q5", answer: "B", explanation: "Wind Charge（风弹）可以将玩家弹飞到空中，配合 Mace 打出高额伤害。" },
    ],

    vocabulary: [
      { word: "mace",         pos: "n.", meaning: "重锤；锤矛",         gameContext: "A new 1.21 weapon that deals more damage from falls" },
      { word: "breeze",       pos: "n.", meaning: "旋风人",             gameContext: "Breeze mob drops Breeze Rod in Trial Chambers" },
      { word: "heavy",        pos: "adj.", meaning: "重的；沉重的",     gameContext: "Heavy Core is needed to craft the Mace" },
      { word: "launch",       pos: "v.", meaning: "发射；弹飞",         gameContext: "Wind Charge can launch players into the air" },
      { word: "blow",         pos: "n.", meaning: "打击；一击",         gameContext: "One blow with the Mace can kill a zombie" },
    ],

    wordCount: 165,
    estimatedDifficulty: "A2 (KET)",
    grammarFocus: "现在时叙事 + 比较级（higher/more damage）+ 因果关系（so...that...）",
  };
})();
