// @ts-nocheck
import type { ExerciseData } from '../../../types';

const data: ExerciseData = {
id: "mc-ket-083",
    category: "Mobs & Creatures",
    categoryZh: "生物图鉴",
    type: "Part 2",
    title: "Night Monsters",

    players: [
      { id: 1, name: "Alex", desc: "sees a green monster that walks without sound." },
      { id: 2, name: "Sophie", desc: "hears bones rattling in the dark." },
      { id: 3, name: "Tom", desc: "sees a tall black monster with purple eyes." },
    ],

    items: [
      { label: "A", name: "Enderman", desc: "Tall and black. It has purple eyes and can teleport. Don't look at it!" },
      { label: "B", name: "Creeper", desc: "Green and silent. It walks close and then ... BOOM!" },
      { label: "C", name: "Skeleton", desc: "A white monster made of bones. It shoots arrows from far away." },
    ],

    correctMatching: { 1: "B", 2: "C", 3: "A" },

    answers: [
      { id: "1", answer: "B (Creeper)", explanation: "苦力怕（Creeper）是绿色的怪物，走路没有声音，靠近就会爆炸。" },
      { id: "2", answer: "C (Skeleton)", explanation: "骷髅（Skeleton）由骨头组成，走路发出咔咔声，会从远处射箭。" },
      { id: "3", answer: "A (Enderman)", explanation: "末影人（Enderman）个子高、黑色的，有紫色的眼睛，还会瞬移。" },
    ],

    vocabulary: [
      { word: "silent", pos: "adj.", meaning: "安静的", gameContext: "Creepers are silent — you cannot hear them walking behind you!" },
      { word: "rattle", pos: "v.", meaning: "咔咔响", gameContext: "Skeletons' bones rattle when they move. Listen for the sound!" },
      { word: "teleport", pos: "v.", meaning: "传送", gameContext: "Endermen can teleport. They move from one place to another in a flash." },
    ],

    wordCount: 72,
    estimatedDifficulty: "A2 (KET)",
    grammarFocus: "一般现在时（描述特征：walks, hears, sees）",
};

export default data;
