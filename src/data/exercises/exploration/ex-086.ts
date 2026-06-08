// @ts-nocheck
import type { ExerciseData } from '../../../types';

const data: ExerciseData = {
id: "mc-ket-086",
    category: "Exploration & Adventure",
    categoryZh: "冒险探索",
    type: "Part 2",
    title: "Bad Weather",

    players: [
      { id: 1, name: "Alex", desc: "It is raining hard and she is outside with no shelter." },
      { id: 2, name: "Sophie", desc: "Thunder is coming. She sees lightning hit a creeper!" },
      { id: 3, name: "Tom", desc: "It is snowing and he is walking very slowly on the ground." },
    ],

    items: [
      { label: "A", name: "Leather Boots", desc: "Walk on powdered snow without falling through. Stay safe in snow!" },
      { label: "B", name: "Shield", desc: "Block a charged creeper's explosion! It can save your life." },
      { label: "C", name: "Spawn Point", desc: "Sleep in a bed to set this. If you die in rain you come back here." },
    ],

    correctMatching: { 1: "C", 2: "B", 3: "A" },

    answers: [
      { id: "1", answer: "C (Spawn Point)", explanation: "在没遮蔽的地方下雨很危险，睡觉设置重生点（Spawn Point）可以保证死后复活在这里。" },
      { id: "2", answer: "B (Shield)", explanation: "闪电打到苦力怕会变成高压苦力怕（Charged Creeper），爆炸力更强。盾牌能挡住爆炸。" },
      { id: "3", answer: "A (Leather Boots)", explanation: "雪地上穿皮靴（Leather Boots）不会陷进细雪（powdered snow）里，可以安全走路。" },
    ],

    vocabulary: [
      { word: "thunder", pos: "n.", meaning: "雷声", gameContext: "Thunder means lightning is nearby. It can turn creepers into charged creepers!" },
      { word: "lightning", pos: "n.", meaning: "闪电", gameContext: "Lightning can hit mobs and change them. A struck creeper becomes super dangerous." },
      { word: "spawn", pos: "v.", meaning: "生成/复活", gameContext: "When you die, you spawn back at your spawn point. Set it by sleeping in a bed." },
    ],

    wordCount: 73,
    estimatedDifficulty: "A2 (KET)",
    grammarFocus: "情态动词 should / must（建议 vs 义务）",
};

export default data;
