/**
 * mc-ket-050 — Match the Swords
 * Category: Survival Basics / 生存基础
 * Type: Part 2 — Matching (5 players x 5 items)
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

    players: [
      {
        id: 1,
        name: "Alex",
        desc: "Alex just started playing Minecraft yesterday. He punched a tree and made some wooden planks. He needs a basic weapon to fight his first zombie."
      },
      {
        id: 2,
        name: "Steve",
        desc: "Steve has been mining for ten minutes. He found lots of grey cobblestone. He wants a better weapon than his wooden sword, but he hasn't found iron yet."
      },
      {
        id: 3,
        name: "Jenny",
        desc: "Jenny has been playing for a week. She has a full set of iron armour and plenty of iron ingots in her chest. She wants a reliable weapon that most players use."
      },
      {
        id: 4,
        name: "Tom",
        desc: "Tom is exploring the Nether. The piglins there love a special kind of sword. He wants to trade with them and get a weapon they like, even though it breaks fast."
      },
      {
        id: 5,
        name: "Sarah",
        desc: "Sarah is the best fighter on the server. She has explored ancient Nether ruins and found rare materials. She wants to craft the very strongest sword in the game — one that can even survive lava."
      },
    ],

    items: [
      {
        label: "A",
        name: "Wooden Sword",
        desc: "This sword is made of brown wood. It is the weakest sword in the game and breaks after only a few fights. Every new player starts with this weapon before they find better materials. You can craft it with two wooden planks and a stick.",
      },
      {
        label: "B",
        name: "Stone Sword",
        desc: "This sword is made of grey stone blocks. It is stronger than a wooden sword but not as strong as iron. It is easy to craft in your first days because stone is everywhere underground. You need two cobblestone blocks and a stick.",
      },
      {
        label: "C",
        name: "Iron Sword",
        desc: "This sword has a shiny silver blade. It is the most common weapon in Minecraft. Almost every player uses it because iron ore is easy to find and the sword lasts a long time. You craft it with two iron ingots and a stick.",
      },
      {
        label: "D",
        name: "Golden Sword",
        desc: "This sword has an orange-yellow blade. It is made of gold and can be found in the Nether. Although it looks beautiful, it breaks very quickly. Piglins love this weapon and will trade items for it. You need two gold ingots and a stick to craft it.",
      },
      {
        label: "E",
        name: "Netherite Sword",
        desc: "This sword has a dark blue and purple blade. It is the strongest sword in the entire game! To make it, you need a diamond sword and a netherite ingot from ancient debris. It can even float on lava and never burns.",
      },
    ],

    correctMatching: { 1: "A", 2: "B", 3: "C", 4: "D", 5: "E" },

    answers: [
      { id: "1", answer: "A (Wooden Sword)", explanation: "Alex 刚玩一天，只需要木剑打僵尸。Wooden Sword 是最基础的武器。" },
      { id: "2", answer: "B (Stone Sword)", explanation: "Steve 挖到很多圆石但还没找到铁，Stone Sword 比木剑强，用圆石做。" },
      { id: "3", answer: "C (Iron Sword)", explanation: "Jenny 有铁甲和铁锭，Iron Sword 是最常用、最可靠的武器。" },
      { id: "4", answer: "D (Golden Sword)", explanation: "Tom 在下界和猪灵交易，Golden Sword 是猪灵最爱的武器。" },
      { id: "5", answer: "E (Netherite Sword)", explanation: "Sarah 要最强的剑，Netherite Sword 是用远古残骸做的，浮在熔岩上也不会烧毁。" },
    ],

    vocabulary: [
      { word: "wooden",    pos: "adj.", meaning: "木制的",           gameContext: "Wooden Sword is the weakest sword" },
      { word: "stone",      pos: "n.",  meaning: "石头",             gameContext: "Stone Sword is stronger than wood" },
      { word: "iron",       pos: "n.",  meaning: "铁",               gameContext: "Iron Sword is the most common weapon" },
      { word: "golden",     pos: "adj.", meaning: "金制的",           gameContext: "Golden Sword breaks quickly but piglins love it" },
      { word: "netherite",  pos: "n.",  meaning: "下界合金",         gameContext: "Netherite Sword is the strongest in the game" },
    ],

    wordCount: 68,
    estimatedDifficulty: "A2 (KET)",
    grammarFocus: "比较级（stronger than / weakest / strongest）+ 物主代词（Its blade is ...）",
  };
})();
