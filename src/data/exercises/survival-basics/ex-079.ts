// @ts-nocheck
import type { ExerciseData } from '../../../types';

const data: ExerciseData = {
id: "mc-ket-079",
    category: "Survival Basics",
    categoryZh: "生存基础",
    type: "Part 2",
    title: "Cook Time!",

    players: [
      { id: 1, name: "Alex", desc: "is very hungry and has raw beef." },
      { id: 2, name: "Sophie", desc: "wants to bake a cake for her friend." },
      { id: 3, name: "Tom", desc: "caught a fish and wants to eat it outside." },
    ],

    items: [
      { label: "A", name: "Campfire", desc: "Cook food anywhere without making a furnace. Just place it and tap!" },
      { label: "B", name: "Furnace", desc: "Smelt raw meat into steak. Uses coal or wood as fuel." },
      { label: "C", name: "Crafting Table", desc: "Make cake with wheat, sugar, eggs and milk." },
    ],

    correctMatching: { 1: "B", 2: "C", 3: "A" },

    answers: [
      { id: "1", answer: "B (Furnace)", explanation: "熔炉（Furnace）可以把生牛肉烤成牛排。Alex 肚子饿了，用熔炉烤肉吃。" },
      { id: "2", answer: "C (Crafting Table)", explanation: "蛋糕只能在合成台（Crafting Table）上制作。Sophie 想做蛋糕给朋友。" },
      { id: "3", answer: "A (Campfire)", explanation: "营火（Campfire）在户外就能烤鱼吃，不用回家做熔炉。Tom 在河边就能烤鱼。" },
    ],

    vocabulary: [
      { word: "furnace", pos: "n.", meaning: "熔炉", gameContext: "Use a furnace to smelt raw meat, iron ore and sand into glass." },
      { word: "campfire", pos: "n.", meaning: "营火", gameContext: "Place a campfire on the ground to cook food anywhere outdoors." },
      { word: "smelt", pos: "v.", meaning: "熔炼", gameContext: "Put raw beef in a furnace with coal to smelt it into cooked steak." },
    ],

    wordCount: 68,
    estimatedDifficulty: "A2 (KET)",
    grammarFocus: "need to / can（情态动词）",
};

export default data;
