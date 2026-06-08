// @ts-nocheck
import type { ExerciseData } from '../../../types';

const data: ExerciseData = {
id: "mc-ket-055",
    category: "Survival Basics",
    categoryZh: "生存基础",
    type: "Part 5",
    title: "Shield Defense",

    clozeText: [
      "A Shield is one of the most useful tools in Minecraft.",
      "You can craft it (1)[____] six wooden planks and one",
      "iron ingot. When you hold a shield and press the right",
      "mouse button, it (2)[____] most attacks.",
      "",
      "Shields can block arrows, melee attacks, and even",
      "Creeper explosions. However, a shield cannot block",
      "magic attacks like the Dragon's (3)[____] or",
      "the Warden's sonic boom.",
      "",
      "You should always bring a shield when you go into",
      "caves or strongholds. It is (4)[____] than wearing",
      "armour alone. If you fight a Skeleton, hold up your",
      "shield. When the arrow hits the shield, the Skeleton",
      "will take some (5)[____] and bounce the arrow back!",
      "",
      "A shield can also be decorated with a (6)[____].",
      "You can put any pattern on your shield to make it unique.",
    ].join("\n"),

    blanks: [
      { id: 1, correct: "with" },
      { id: 2, correct: "blocks" },
      { id: 3, correct: "breath" },
      { id: 4, correct: "better" },
      { id: 5, correct: "damage" },
      { id: 6, correct: "banner" },
    ],

    answers: [
      { id: "1", answer: "with", explanation: "craft it with six wooden planks — with 表示用材料合成。（also accepted: from, using）" },
      { id: "2", answer: "blocks", explanation: "第三人称单数，it blocks most attacks。盾牌阻挡大多数攻击。（also accepted: stops）" },
      { id: "3", answer: "breath", explanation: "Dragon's Breath（龙息）是魔法攻击，盾牌无法格挡。（also accepted: fire）" },
      { id: "4", answer: "better", explanation: "better than wearing armour alone，比较级结构。（also accepted: safer）" },
      { id: "5", answer: "damage", explanation: "骷髅射中盾牌后会被弹回并受伤（take damage）。（also accepted: knockback）" },
      { id: "6", answer: "banner", explanation: "盾牌可以印上旗帜（banner）图案来装饰。（also accepted: pattern）" },
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

export default data;
