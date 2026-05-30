/**
 * mc-ket-053 — Bow vs Crossbow
 * Category: Survival Basics / 生存基础
 * Type: Part 2 — Matching (5 × 左栏描述 → 右栏图片选项)
 * Grammar: 比较级 + 不定式表目的
 * Topic: 弓 vs 弩 — 远程武器对比
 */

(function () {
  if (!window.MINECRAFT_KET_DATA) window.MINECRAFT_KET_DATA = {};

  MINECRAFT_KET_DATA["mc-ket-053"] = {
    id: "mc-ket-053",
    category: "Survival Basics",
    categoryZh: "生存基础",
    type: "Part 2",
    title: "Bow vs Crossbow",

    descriptions: [
      { id: "d1", text: "The most common long-range weapon. It shoots arrows." },
      { id: "d2", text: "A stronger weapon that shoots farther. It takes longer to load." },
      { id: "d3", text: "A special arrow that explodes when it hits something." },
      { id: "d4", text: "A magical enchantment that lets your bow shoot three arrows at once." },
      { id: "d5", text: "A device made of strings and sticks that shoots arrows. You need to pull it back." },
    ],

    images: [
      { id: "iA", alt: "A crossbow with a wooden stock" },
      { id: "iB", alt: "A bow made of wood and string" },
      { id: "iC", alt: "Three arrows flying at once from one bow" },
      { id: "iD", alt: "A bow with a glowing purple enchantment on its string" },
      { id: "iE", alt: "A red and white arrow with a glowing tip" },
    ],

    answers: [
      { id: "d1", match: "iB", explanation: "最基础的远程武器是 Bow（弓），用木棍和线合成。" },
      { id: "d2", match: "iA", explanation: "Crossbow（弩）射程远、伤害高，但装填时间比弓慢。" },
      { id: "d3", match: "iE", explanation: "Tipped Arrow with a glowing tip can explode（火箭/gas arrow）。红白箭头表示特殊药箭。" },
      { id: "d4", match: "iC", explanation: "Multishot 附魔让弩一次射出 3 支箭，是弩的专属附魔。" },
      { id: "d5", match: "iD", explanation: "Bow 是木棍+线制成的弓，需要蓄力（pull back）才能射出，紫色的魔法发光是附魔弓。" },
    ],

    vocabulary: [
      { word: "crossbow",      pos: "n.", meaning: "弩",               gameContext: "Crossbow shoots farther but loads slower than a bow" },
      { word: "enchantment",   pos: "n.", meaning: "附魔",             gameContext: "Multishot is an enchantment for crossbows" },
      { word: "multishot",     pos: "n.", meaning: "多重射击",         gameContext: "Multishot lets you shoot three arrows at once" },
      { word: "long-range",    pos: "adj.", meaning: "远程的",         gameContext: "Both bow and crossbow are long-range weapons" },
      { word: "string",        pos: "n.", meaning: "线；弓弦",         gameContext: "You need string to craft a bow" },
    ],

    wordCount: 70,
    estimatedDifficulty: "A2 (KET)",
    grammarFocus: "比较级（longer / stronger / farther）+ 不定式表目的（to shoot / to load）",
  };
})();
