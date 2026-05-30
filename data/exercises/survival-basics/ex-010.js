/**
 * mc-ket-010 — Match the Survival Gear
 * Category: Survival Basics / 生存基础
 * Type: Part 2 — Matching (3 players × 3 items)
 * Grammar: Comparatives & Descriptions
 */

(function () {
  if (!window.MINECRAFT_KET_DATA) window.MINECRAFT_KET_DATA = {};

  MINECRAFT_KET_DATA["mc-ket-010"] = {
    id: "mc-ket-010",
    category: "Survival Basics",
    categoryZh: "生存基础",
    type: "Part 2",
    title: "Match the Survival Gear",

    players: [
      {
        id: 1,
        name: "Alex",
        desc: "Alex is going to explore a very dark cave. He needs a light source so he can see where he is going and stop monsters from appearing.",
      },
      {
        id: 2,
        name: "Sophie",
        desc: "Sophie is building a bridge over a river of lava. She needs something that is strong and does not burn easily. Wood is too weak for this job.",
      },
      {
        id: 3,
        name: "Tom",
        desc: "Tom is climbing a tall mountain and the top is very high. He needs something soft to land on if he falls. Something that can save his life.",
      },
    ],

    items: [
      {
        label: "A",
        name: "Torches and Flint",
        desc: "This is the easiest way to make light. You put coal and sticks together to make torches. When you place them on walls or the floor, they light up the area around you. Monsters cannot appear in bright places. With enough torches, you can safely explore any dark cave.",
      },
      {
        label: "B",
        name: "Stone Blocks",
        desc: "These blocks are easy to find and very strong. You can get them by mining stone with a pickaxe. Unlike wood, they do not catch fire. They are the best material for building bridges and walls in dangerous places. Many players use them for their first house.",
      },
      {
        label: "C",
        name: "Water Bucket",
        desc: "This simple tool can save you from the biggest falls. If you are falling from a high place, use the water bucket at your feet just before you land. The water will stop you from getting hurt. It can also turn lava into stone, which is very useful underground.",
      },
    ],

    correctMatching: { 1: "A", 2: "B", 3: "C" },

    answers: [
      {
        id: "1",
        answer: "A (Torches and Flint)",
        explanation:
          "Alex 需要光源（light source）防止怪物生成，Torches and Flint 提供照明。",
      },
      {
        id: "2",
        answer: "B (Stone Blocks)",
        explanation:
          "Sophie 需要 strong + does not burn 的材料搭桥，Stone Blocks 不怕火且结实。",
      },
      {
        id: "3",
        answer: "C (Water Bucket)",
        explanation:
          "Tom 需要从高处安全落地，Water Bucket 可以消除跌落伤害（MLG water bucket trick）。",
      },
    ],

    vocabulary: [
      {
        word: "gear",
        pos: "n.",
        meaning: "装备",
        gameContext:
          "Bring the right gear — torches, food, and a sword — before going into a cave",
      },
      {
        word: "explore",
        pos: "v.",
        meaning: "探索",
        gameContext:
          "Players explore caves, mountains and oceans to find new resources",
      },
      {
        word: "bridge",
        pos: "n.",
        meaning: "桥",
        gameContext:
          "Build bridges across rivers and ravines using stone or wood blocks",
      },
      {
        word: "catch fire",
        pos: "phrase",
        meaning: "着火",
        gameContext:
          "Wooden houses can catch fire if lightning strikes or lava is too close",
      },
      {
        word: "fall",
        pos: "n./v.",
        meaning: "掉落/跌落",
        gameContext:
          "Falling from more than 23 blocks will kill you — use a water bucket!",
      },
    ],

    wordCount: 195,
    estimatedDifficulty: "A2 (KET)",
    grammarFocus: "Comparatives & Descriptions（比较级/描述语言：easiest, best, useful, strong）",
  };
})();
