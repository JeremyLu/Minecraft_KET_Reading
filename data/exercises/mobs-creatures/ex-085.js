/**
 * mc-ket-085 — What Do Farm Animals Give?
 * Category: Mobs & Creatures / 生物图鉴
 * Type: Part 2 — Matching (3 players × 3 items, short)
 * Grammar: gives / drops（一般现在时第三人称）
 */

(function () {
  if (!window.MINECRAFT_KET_DATA) window.MINECRAFT_KET_DATA = {};

  MINECRAFT_KET_DATA["mc-ket-085"] = {
    id: "mc-ket-085",
    category: "Mobs & Creatures",
    categoryZh: "生物图鉴",
    type: "Part 2",
    title: "What Do Farm Animals Give?",

    players: [
      { id: 1, name: "Alex", desc: "wants some wool to make a colorful bed." },
      { id: 2, name: "Sophie", desc: "needs leather to craft a book for her enchantment table." },
      { id: 3, name: "Tom", desc: "wants feathers to make arrows for his bow." },
    ],

    items: [
      { label: "A", name: "Cow", desc: "Drops leather and raw beef. You can also milk it with a bucket." },
      { label: "B", name: "Chicken", desc: "Drops feathers and raw chicken. It also lays eggs on grass." },
      { label: "C", name: "Sheep", desc: "Drops wool when you use shears. Dye it any color you want!" },
    ],

    correctMatching: { 1: "C", 2: "A", 3: "B" },

    answers: [
      { id: "1", answer: "C (Sheep)", explanation: "羊（Sheep）用剪刀（shears）剪能得到羊毛（wool），可以染成各种颜色做床。" },
      { id: "2", answer: "A (Cow)", explanation: "牛（Cow）掉落皮革（leather），皮革可以做书（book），书是附魔台的必需材料。" },
      { id: "3", answer: "B (Chicken)", explanation: "鸡（Chicken）掉落羽毛（feather），羽毛用来做箭（arrow），配合弓一起用。" },
    ],

    vocabulary: [
      { word: "wool", pos: "n.", meaning: "羊毛", gameContext: "Shear a sheep to get wool. Use wool to make beds, carpets and banners." },
      { word: "leather", pos: "n.", meaning: "皮革", gameContext: "Cows drop leather. Use it to make books for your enchantment table." },
      { word: "feather", pos: "n.", meaning: "羽毛", gameContext: "Chickens drop feathers. Use feathers to craft arrows for your bow." },
    ],

    wordCount: 67,
    estimatedDifficulty: "A2 (KET)",
    grammarFocus: "一般现在时第三人称（drops, gives, lays）",
  };
})();
