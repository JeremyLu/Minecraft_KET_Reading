// @ts-nocheck
import type { ExerciseData } from '../../../types';

const data: ExerciseData = {
id: "mc-ket-072",
    category: "Survival Basics",
    categoryZh: "生存基础",
    type: "Part 2",
    title: "Plant a Garden",

    players: [
      { id: 1, name: "Alex", desc: "wants to grow wheat for bread." },
      { id: 2, name: "Sophie", desc: "wants to grow pumpkins for pie." },
      { id: 3, name: "Tom", desc: "wants to grow carrots for his horse." },
    ],

    items: [
      { label: "A", name: "Carrot Seeds", desc: "Plant these near water. They grow into orange carrots." },
      { label: "B", name: "Wheat Seeds", desc: "Break tall grass to get these. They grow into wheat." },
      { label: "C", name: "Pumpkin Seeds", desc: "You can find these in chests. They grow big pumpkins." },
    ],

    correctMatching: { 1: "B", 2: "C", 3: "A" },

    answers: [
      { id: "1", answer: "B (Wheat Seeds)", explanation: "小麦种子（Wheat Seeds）可以种出小麦，用来做面包（bread）。" },
      { id: "2", answer: "C (Pumpkin Seeds)", explanation: "南瓜种子（Pumpkin Seeds）可以种出南瓜，用来做南瓜派（pie）。" },
      { id: "3", answer: "A (Carrot Seeds)", explanation: "胡萝卜种子长成胡萝卜，可以给马（horse）吃。" },
    ],

    vocabulary: [
      { word: "wheat", pos: "n.", meaning: "小麦", gameContext: "Grow wheat from seeds. Use it to make bread and cake." },
      { word: "pumpkin", pos: "n.", meaning: "南瓜", gameContext: "Pumpkins grow on farmland. Make them into pumpkin pie!" },
      { word: "seed", pos: "n.", meaning: "种子", gameContext: "Break tall grass to get wheat seeds. Plant them on farmland." },
    ],

    wordCount: 60,
    estimatedDifficulty: "A2 (KET)",
    grammarFocus: "want to / needs to（动词不定式表达目的）",
};

export default data;
