/**
 * mc-ket-065 — Match the Mob Weaknesses
 * Category: Mobs & Creatures / 生物图鉴
 * Type: Part 2 — Matching (5 players x 5 items)
 * Grammar: 因果连词（because / so）+ 条件从句（if / when）
 * Topic: 怪物弱点 — 针对不同怪物的克制方法
 */

(function () {
  if (!window.MINECRAFT_KET_DATA) window.MINECRAFT_KET_DATA = {};

  MINECRAFT_KET_DATA["mc-ket-065"] = {
    id: "mc-ket-065",
    category: "Mobs & Creatures",
    categoryZh: "生物图鉴",
    type: "Part 2",
    title: "Match the Mob Weaknesses",

    players: [
      {
        id: 1,
        name: "James",
        desc: "James is fighting a tall skeleton that shoots arrows at him. He wants a close-combat weapon that attacks faster than any other, so he can hit the skeleton many times before it shoots again."
      },
      {
        id: 2,
        name: "Hannah",
        desc: "Hannah is trapped in a room with a Blaze flying around. The Blaze shoots three fireballs at once. She needs a way to stop the Blaze from flying so she can hit it with her sword."
      },
      {
        id: 3,
        name: "Dylan",
        desc: "Dylan entered an Ancient City and the Warden just came out of the ground. It is blind but very strong. He cannot fight it. He needs the best way to make the Warden go back underground without dying."
      },
      {
        id: 4,
        name: "Grace",
        desc: "Grace found an Enderman staring at her in the dark forest. It has purple eyes and will attack if she looks at its face. She needs to build something around her that stops the Enderman from reaching her."
      },
      {
        id: 5,
        name: "Noah",
        desc: "Noah is fighting a Witch that keeps drinking potions to heal itself. It throws Splash Potions of Poison and Slowness at him. He needs a way to drink something that stops poison from hurting him."
      },
    ],

    items: [
      {
        label: "A",
        name: "Sword with Knockback",
        desc: "A weapon enchanted with Knockback sends enemies flying backward when you hit them. For skeletons, getting close is key — a sword with high attack speed and Knockback means they cannot shoot you while they are bouncing away. An Iron Sword or better is best.",
      },
      {
        label: "B",
        name: "Snowballs",
        desc: "Small white throwable items made from snow. They deal no damage but they can hit Blazes and knock them back! Each snowball hurts a Blaze a little. It only takes 7 snowballs to kill one Blaze. They are easy to get — just dig snow with a shovel and craft them.",
      },
      {
        label: "C",
        name: "Wool Blocks",
        desc: "Soft blocks made from 4 pieces of string. When you place wool blocks and walk on them, they do NOT make any sound! The Warden is blind and finds players by sound, so if you place wool everywhere and sneak, the Warden cannot find you and will eventually dig back down.",
      },
      {
        label: "D",
        name: "Two-Block Shelter",
        desc: "A simple trick: put two blocks above your head to make a low roof. Endermen are 3 blocks tall, so they cannot fit under a 2-block-high ceiling! If you stand under it and look down, the Enderman cannot reach you but you can still hit its legs safely.",
      },
      {
        label: "E",
        name: "Milk Bucket",
        desc: "A white drink you get by right-clicking a cow with an empty bucket. Drinking milk removes ALL potion effects — good and bad. If a Witch poisons you, drinking a milk bucket will clear the poison right away. Always bring one when you are fighting Witches!",
      },
    ],

    correctMatching: { 1: "A", 2: "B", 3: "C", 4: "D", 5: "E" },

    answers: [
      { id: "1", answer: "A (Sword with Knockback)", explanation: "James 打骷髅需要快速近战 → Knockback 剑击退骷髅、阻止射箭。" },
      { id: "2", answer: "B (Snowballs)", explanation: "Hannah 被烈焰人围攻 → 雪球对烈焰人造成伤害，7个就能打死。" },
      { id: "3", answer: "C (Wool Blocks)", explanation: "Dylan 遇见循声守卫要逃脱 → 羊毛走路没声音，潜行 + 羊毛让守卫找不到你。" },
      { id: "4", answer: "D (Two-Block Shelter)", explanation: "Grace 要防末影人 → 2格高天花板，末影人 3 格高进不来。" },
      { id: "5", answer: "E (Milk Bucket)", explanation: "Noah 被女巫投毒 → 喝牛奶清除所有药水效果。" },
    ],

    vocabulary: [
      { word: "weakness",      pos: "n.", meaning: "弱点",         gameContext: "Every hostile mob has a weakness" },
      { word: "snowball",      pos: "n.", meaning: "雪球",         gameContext: "Snowballs hurt Blazes" },
      { word: "poison",        pos: "n.", meaning: "毒药",         gameContext: "Witches throw Splash Potions of Poison" },
      { word: "shelter",       pos: "n.", meaning: "庇护所",       gameContext: "A two-block shelter stops Endermen" },
      { word: "remove",        pos: "v.", meaning: "移除",         gameContext: "Milk removes all potion effects" },
    ],

    wordCount: 68,
    estimatedDifficulty: "A2 (KET)",
    grammarFocus: "因果连词（because / so）+ 条件从句（if / when）",
  };
})();
