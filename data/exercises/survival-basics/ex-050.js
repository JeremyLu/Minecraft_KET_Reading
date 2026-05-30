/**
 * mc-ket-050 — Match the Swords
 * Category: Survival Basics / 生存基础
 * Type: Part 2 — Matching (5 × 左栏描述 → 右栏图片选项)
 * Grammar: 比较级 + 序数词 + 物主代词
 * Topic: 武器匹配 — 从木剑到下界合金剑
 */

(function () {
  if (!window.MINECRAFT_KET_DATA) window.MINECRAFT_KET_DATA = {};

  MINECRAFT_KET_DATA["mc-ket-050"] = {
    id: "mc-ket-050",
    category: "Survival Basics",
    categoryZh: "生存基础",
    type: "Part 2",
    title: "Match the Swords",

    descriptions: [
      { id: "d1", text: "The weakest sword. It is made of wood." },
      { id: "d2", text: "This sword is made of stone. It is stronger than wood." },
      { id: "d3", text: "The most common sword. It is made of iron." },
      { id: "d4", text: "This sword can only be found in the Nether. It is orange." },
      { id: "d5", text: "The strongest sword in the game. It is blue and purple." },
    ],

    images: [
      { id: "iA", alt: "A golden sword with yellow blade" },
      { id: "iB", alt: "A sword made of grey stone" },
      { id: "iC", alt: "A sword made of brown wood" },
      { id: "iD", alt: "A sword made of shiny iron" },
      { id: "iE", alt: "A blue and purple Netherite sword" },
    ],

    answers: [
      { id: "d1", match: "iC", explanation: "木剑（Wooden Sword）是最弱的，用木板合成。" },
      { id: "d2", match: "iB", explanation: "石剑（Stone Sword）用圆石合成，比木剑强。" },
      { id: "d3", match: "iD", explanation: "铁剑（Iron Sword）用铁锭合成，是最常用的武器。" },
      { id: "d4", match: "iA", explanation: "金剑（Golden Sword）用金锭合成，仅在下界常见，橙色。" },
      { id: "d5", match: "iE", explanation: "下界合金剑（Netherite Sword）是最强的，蓝色+紫色外观。" },
    ],

    vocabulary: [
      { word: "wooden",    pos: "adj.", meaning: "木制的",           gameContext: "Wooden Sword is the weakest sword" },
      { word: "stone",      pos: "n.",  meaning: "石头",             gameContext: "Stone Sword is stronger than wood" },
      { word: "iron",       pos: "n.",  meaning: "铁",               gameContext: "Iron Sword is the most common weapon" },
      { word: "golden",     pos: "adj.", meaning: "金制的",           gameContext: "Golden Sword breaks quickly but has high attack speed" },
      { word: "netherite",  pos: "n.",  meaning: "下界合金",         gameContext: "Netherite Sword is the strongest in the game" },
    ],

    wordCount: 68,
    estimatedDifficulty: "A2 (KET)",
    grammarFocus: "比较级（stronger than / weakest / strongest）+ 物主代词（Its blade is ...）",
  };
})();
