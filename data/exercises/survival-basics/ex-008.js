/**
 * mc-ket-008 — How to Build a Shelter
 * Category: Survival Basics / 生存基础
 * Type: Part 4 — Multiple-Choice Cloze (Sequencers: first/then/next/finally)
 */

(function () {
  if (!window.MINECRAFT_KET_DATA) window.MINECRAFT_KET_DATA = {};

  MINECRAFT_KET_DATA["mc-ket-008"] = {
    id: "mc-ket-008",
    category: "Survival Basics",
    categoryZh: "生存基础",
    type: "Part 4",
    title: "How to Build a Shelter",

    clozeText: "On your first day, you need a safe place to stay at night. (1)[____], find a flat area on the ground. (2)[____], collect some wood from nearby trees. Break the wood into planks and build four walls. (3)[____], make a roof so monsters cannot fall on your head. (4)[____], put a door on one wall and place torches inside. Now you have a small but safe home! Remember: (5)[____] build your shelter before the sun goes down, or zombies will find you in the dark.",

    blanks: [
      { id: 1, options: ["First", "Then", "Finally"], correct: 0 },
      { id: 2, options: ["Next", "First", "Before"], correct: 0 },
      { id: 3, options: ["After that", "First", "Before that"], correct: 0 },
      { id: 4, options: ["Finally", "Next", "First"], correct: 0 },
      { id: 5, options: ["always", "never", "sometimes"], correct: 0 },
    ],

    answers: [
      { id: "1", answer: "First", explanation: "First 表示第一步，引出第一个动作 find a flat area。Then 和 Finally 用于后续步骤。" },
      { id: "2", answer: "Next", explanation: "Next 引出第二步 collect wood。First 已用过，Before 表示时间先后不对。" },
      { id: "3", answer: "After that", explanation: "After that 表示'在那之后'，引出第三个步骤 make a roof。序数逻辑正确。" },
      { id: "4", answer: "Finally", explanation: "Finally 表示最后一步 put a door。整段文字先 First → Next → After that → Finally 构成完整序列。" },
      { id: "5", answer: "always", explanation: "always build your shelter before sunset 表示'一定要在日落前建好'。never 和 sometimes 语义不对。" },
    ],

    vocabulary: [
      { word: "shelter", pos: "n.", meaning: "避难所/庇护所", gameContext: "A small house to protect you from monsters at night" },
      { word: "flat", pos: "adj.", meaning: "平坦的", gameContext: "Find a flat area so your house looks nice and even" },
      { word: "roof", pos: "n.", meaning: "屋顶", gameContext: "Build a roof to stop spiders from climbing into your house" },
      { word: "torch", pos: "n.", meaning: "火把", gameContext: "Place torches inside your home to keep it bright and safe" },
      { word: "sun goes down", pos: "phrase", meaning: "太阳下山", gameContext: "Monsters spawn when the sun goes down — be ready!" },
    ],

    wordCount: 95,
    estimatedDifficulty: "A2 (KET)",
    grammarFocus: "Sequencers（序列词：First, Next, After that, Finally）",
  };
})();
