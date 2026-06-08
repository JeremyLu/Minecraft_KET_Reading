// @ts-nocheck
import type { ExerciseData } from '../../../types';

const data: ExerciseData = {
id: "mc-ket-084",
    category: "Exploration & Adventure",
    categoryZh: "冒险探索",
    type: "Part 2",
    title: "Cave Treasures",

    players: [
      { id: 1, name: "Alex", desc: "found a red dusty block deep underground." },
      { id: 2, name: "Sophie", desc: "found a light blue shiny gem in a dark cave." },
      { id: 3, name: "Tom", desc: "found a dark grey block with black dots on it." },
    ],

    items: [
      { label: "A", name: "Iron Ore", desc: "Has light brown dots. Smelt it to get iron ingots for tools and armor." },
      { label: "B", name: "Diamond Ore", desc: "Shiny and light blue. The rarest ore. Breaks into diamonds." },
      { label: "C", name: "Redstone Dust", desc: "Red and dusty. Drops from redstone ore. Use it to make power lines." },
    ],

    correctMatching: { 1: "C", 2: "B", 3: "A" },

    answers: [
      { id: "1", answer: "C (Redstone Dust)", explanation: "红石粉从红石矿石掉落。Alex 挖到红色的、有粉末的石头，就是红石（Redstone）。" },
      { id: "2", answer: "B (Diamond Ore)", explanation: "浅蓝色发光的矿石就是钻石矿（Diamond Ore），挖掉能得到钻石。" },
      { id: "3", answer: "A (Iron Ore)", explanation: "带浅棕色斑点的深灰色石块是铁矿石（Iron Ore），熔炼后得到铁锭。" },
    ],

    vocabulary: [
      { word: "ore", pos: "n.", meaning: "矿石", gameContext: "Ores are special stone blocks. Mine them to get coal, iron, gold and diamonds." },
      { word: "redstone", pos: "n.", meaning: "红石", gameContext: "Redstone dust makes power. Use it to build doors that open by themselves!" },
      { word: "deep", pos: "adj.", meaning: "深的", gameContext: "The best ores are deep underground. Dig down to find diamonds and redstone." },
    ],

    wordCount: 65,
    estimatedDifficulty: "A2 (KET)",
    grammarFocus: "can + verb（情态动词 can 表达能力）",
};

export default data;
