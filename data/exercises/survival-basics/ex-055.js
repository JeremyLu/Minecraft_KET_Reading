/**
 * mc-ket-055 — Shield Defense
 * Category: Survival Basics / 生存基础
 * Type: Part 5 — Open Cloze (6 gaps, 无选项，需填入合适单词)
 * Grammar: 现在时 + 情态动词 + 比较级
 * Topic: Shield 盾牌 — 防御机制与使用技巧
 */

(function () {
  if (!window.MINECRAFT_KET_DATA) window.MINECRAFT_KET_DATA = {};

  MINECRAFT_KET_DATA["mc-ket-055"] = {
    id: "mc-ket-055",
    category: "Survival Basics",
    categoryZh: "生存基础",
    type: "Part 5",
    title: "Shield Defense",

    passage: [
      "A Shield is one of the most useful tools in Minecraft.",
      "You can craft it (1) _______ six wooden planks and one",
      "iron ingot. When you hold a shield and press the right",
      "mouse button, it (2) _______ most attacks.",
      "",
      "Shields can block arrows, melee attacks, and even",
      "Creeper explosions. However, a shield cannot block",
      "magic attacks like the Dragon's (3) _______ or",
      "the Warden's sonic boom.",
      "",
      "You should always bring a shield when you go into",
      "caves or strongholds. It is (4) _______ than wearing",
      "armour alone. If you fight a Skeleton, hold up your",
      "shield. When the arrow hits the shield, the Skeleton",
      "will take some (5) _______ and bounce the arrow back!",
      "",
      "A shield can also be decorated with a (6) _______.",
      "You can put any pattern on your shield to make it unique.",
    ].join("\n"),

    blanks: [
      { id: 1, answer: ["with", "from", "using"],  hint: "用……制作（介词）" },
      { id: 2, answer: ["blocks", "stops"],         hint: "阻挡（动词第三人称单数）" },
      { id: 3, answer: ["breath", "fire"],          hint: "龙息 / 龙火（末影龙的魔法攻击）" },
      { id: 4, answer: ["better", "safer"],         hint: "更好的 / 更安全的（比较级）" },
      { id: 5, answer: ["damage", "knockback"],     hint: "伤害 / 击退（反弹效果）" },
      { id: 6, answer: ["banner", "pattern"],       hint: "旗帜（可给盾牌印上图案）" },
    ],

    answers: [
      { id: "1", accepted: ["with", "from", "using"], explanation: "craft it with/from/using 都表示用材料合成。" },
      { id: "2", accepted: ["blocks", "stops"], explanation: "第三人称单数，it blocks/stops most attacks。盾牌阻挡大多数攻击。" },
      { id: "3", accepted: ["breath", "fire"], explanation: "Dragon's Breath（龙息）是魔法攻击，盾牌无法格挡。" },
      { id: "4", accepted: ["better", "safer"], explanation: "better/safer than wearing armour alone，比较级结构。" },
      { id: "5", accepted: ["damage", "knockback"], explanation: "骷髅射中盾牌后会被弹回并受伤（take damage/knockback）。" },
      { id: "6", accepted: ["banner", "pattern"], explanation: "盾牌可以印上旗帜（banner）图案来装饰。" },
    ],

    vocabulary: [
      { word: "shield",       pos: "n.", meaning: "盾牌",               gameContext: "A shield blocks arrows, melee attacks, and explosions" },
      { word: "block",        pos: "v.", meaning: "阻挡；格挡",         gameContext: "Shields block most attacks except magic" },
      { word: "banner",       pos: "n.", meaning: "旗帜",               gameContext: "You can decorate your shield with a banner" },
      { word: "ingot",        pos: "n.", meaning: "锭",                 gameContext: "Iron ingot is needed to craft a shield" },
      { word: "sonic",        pos: "adj.", meaning: "音波的；声波的",   gameContext: "Warden's sonic boom cannot be blocked by shields" },
    ],

    wordCount: 135,
    estimatedDifficulty: "A2 (KET)",
    grammarFocus: "介词（with）+ 一般现在时第三人称单数 + 比较级（better/safer than）",
  };
})();
