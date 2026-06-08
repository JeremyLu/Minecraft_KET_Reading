// @ts-nocheck
import type { ExerciseData } from '../../../types';

const data: ExerciseData = {
id: "mc-ket-087",
    category: "Survival Basics",
    categoryZh: "生存基础",
    type: "Part 2",
    title: "Magic Potions",

    players: [
      { id: 1, name: "Alex", desc: "wants to jump over a tall wall to escape zombies." },
      { id: 2, name: "Sophie", desc: "wants to swim to the ocean monument and breathe underwater." },
      { id: 3, name: "Tom", desc: "wants to run faster to catch a fast horse on the plains." },
    ],

    items: [
      { label: "A", name: "Potion of Leaping", desc: "Makes you jump much higher! You can jump over walls and fences." },
      { label: "B", name: "Potion of Swiftness", desc: "Makes you run really fast. Great for chasing animals or running away!" },
      { label: "C", name: "Potion of Water Breathing", desc: "Lets you breathe underwater. Perfect for exploring ocean monuments." },
    ],

    correctMatching: { 1: "A", 2: "C", 3: "B" },

    answers: [
      { id: "1", answer: "A (Potion of Leaping)", explanation: "跳跃药水（Potion of Leaping）能让你跳得更高。Alex 想跳过墙躲避僵尸，用跳跃药水。" },
      { id: "2", answer: "C (Potion of Water Breathing)", explanation: "水下呼吸药水（Potion of Water Breathing）让你在水下不用换气，适合探索海底神殿。" },
      { id: "3", answer: "B (Potion of Swiftness)", explanation: "速度药水（Potion of Swiftness）让你跑得很快。Tom 想追快马，喝速度药水就追得上。" },
    ],

    vocabulary: [
      { word: "potion", pos: "n.", meaning: "药水", gameContext: "Brew potions at a brewing stand. They give you special powers for a short time." },
      { word: "breathe", pos: "v.", meaning: "呼吸", gameContext: "You cannot breathe underwater without a potion. Use water breathing to stay under!" },
      { word: "leap", pos: "v.", meaning: "跳", gameContext: "With a leaping potion you can jump over tall fences and walls." },
    ],

    wordCount: 68,
    estimatedDifficulty: "A2 (KET)",
    grammarFocus: "want to + verb（动词不定式表达意愿）",
};

export default data;
