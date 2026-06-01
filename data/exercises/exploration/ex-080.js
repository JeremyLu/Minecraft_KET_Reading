/**
 * mc-ket-080 — Ride or Sail
 * Category: Adventure & Exploration / 冒险探索
 * Type: Part 2 — Matching (3 players × 3 items, short)
 * Grammar: need to + verb（不定式）
 */

(function () {
  if (!window.MINECRAFT_KET_DATA) window.MINECRAFT_KET_DATA = {};

  MINECRAFT_KET_DATA["mc-ket-080"] = {
    id: "mc-ket-080",
    category: "Exploration & Adventure",
    categoryZh: "冒险探索",
    type: "Part 2",
    title: "Ride or Sail",

    players: [
      { id: 1, name: "Alex", desc: "wants to cross a big ocean fast." },
      { id: 2, name: "Sophie", desc: "needs to go deep underground quickly." },
      { id: 3, name: "Tom", desc: "wants to ride across the plains with a friend." },
    ],

    items: [
      { label: "A", name: "Minecart", desc: "Goes fast on rails. You can ride it down into caves and mines." },
      { label: "B", name: "Horse", desc: "Runs fast on land. You can tame one and put a saddle on it." },
      { label: "C", name: "Boat", desc: "Floats on water. You can sit in it and row across rivers and seas." },
    ],

    correctMatching: { 1: "C", 2: "A", 3: "B" },

    answers: [
      { id: "1", answer: "C (Boat)", explanation: "船（Boat）可以在大海上漂浮，是跨海最快的工具。Alex 要用船渡海。" },
      { id: "2", answer: "A (Minecart)", explanation: "矿车（Minecart）在铁轨上跑得很快。Sophie 想快速下到地底，坐矿车最快。" },
      { id: "3", answer: "B (Horse)", explanation: "马（Horse）可以在草原上跑。Tom 想跟朋友在平原骑马，马是最佳选择。" },
    ],

    vocabulary: [
      { word: "minecart", pos: "n.", meaning: "矿车", gameContext: "Place a minecart on rails. Push it to ride through underground tunnels." },
      { word: "saddle", pos: "n.", meaning: "马鞍", gameContext: "Put a saddle on a horse or pig so you can ride it." },
      { word: "ocean", pos: "n.", meaning: "海洋", gameContext: "Oceans are large water areas. Use a boat to cross them." },
    ],

    wordCount: 64,
    estimatedDifficulty: "A2 (KET)",
    grammarFocus: "need to + verb（不定式表达目的）",
  };
})();
