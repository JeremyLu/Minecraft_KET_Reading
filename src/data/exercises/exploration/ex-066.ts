// @ts-nocheck
import type { ExerciseData } from '../../../types';

const data: ExerciseData = {
id: "mc-ket-066",
    category: "Exploration & Adventure",
    categoryZh: "冒险探索",
    type: "Part 2",
    title: "Match the Story Item",

    players: [
      {
        id: 1,
        name: "Leo the Brave",
        desc: "Leo found a strange square frame made of purple and black stone in a stronghold. In the middle was a dark starry void. He thinks the frame is a doorway to another world. What did he discover?"
      },
      {
        id: 2,
        name: "Nora the Explorer",
        desc: "Nora went deep into a dark cave and found an old dusty box with moss on it. She opened it with excitement and found a golden apple and some iron bars inside. What kind of treasure box did she find?"
      },
      {
        id: 3,
        name: "Kai the Builder",
        desc: "Kai wanted to make his house look magical. He found a glowing powder in the Nether and used it to make bright orange lamps that light up the whole room. What glowing material did he use?"
      },
      {
        id: 4,
        name: "Zara the Farmer",
        desc: "Zara loves growing food. She found a strange fish with spikes and used it to make a special potion. When she drinks it, she can breathe underwater without needing to come up for air. What aquatic creature helped her?"
      },
      {
        id: 5,
        name: "Rex the Collector",
        desc: "Rex was exploring shipwrecks at the bottom of the ocean. He found an old piece of paper with pictures on it. When he held it, a map appeared showing a hidden treasure chest on a beach. What did he find in the wreck?"
      },
    ],

    items: [
      {
        label: "A",
        name: "End Portal Frame",
        desc: "A special structure found only in Strongholds underground. It looks like a ring of 12 green and black blocks. You must place an Eye of Ender in each one to open the portal. Behind the portal lies the End — a floating island where the Ender Dragon lives.",
      },
      {
        label: "B",
        name: "Bonus Chest",
        desc: "A brown wooden chest that you can turn on in world settings before starting a new game. It appears next to you when you spawn! It usually contains basic tools like a wooden pickaxe, some apples, and maybe some wood planks to help you get started faster.",
      },
      {
        label: "C",
        name: "Glowstone Dust",
        desc: "A bright yellow powder that drops when you break Glowstone blocks in the Nether. You can use 4 dust to craft one Glowstone block. Glowstone blocks give off the brightest light of any block in the game — even brighter than torches! Perfect for lighting up large rooms.",
      },
      {
        label: "D",
        name: "Pufferfish",
        desc: "A round spiky orange fish found swimming in warm ocean waters. Be careful — it poisons you if you get too close! But it is very valuable: you can use it as the main ingredient to brew a Potion of Water Breathing, which lets you stay underwater for 3 whole minutes.",
      },
      {
        label: "E",
        name: "Treasure Map",
        desc: "A piece of old paper with a drawing of land and a red X. You can find it inside buried treasure chests in shipwrecks and underwater ruins. Follow the map to the red X and dig in the sand or gravel. There you will find a hidden chest with gold, diamonds, and sometimes a Heart of the Sea!",
      },
    ],

    correctMatching: { 1: "A", 2: "B", 3: "C", 4: "D", 5: "E" },

    answers: [
      { id: "1", answer: "A (End Portal Frame)", explanation: "Leo 在要塞发现紫色方块框架 → End Portal Frame，通往末地。" },
      { id: "2", answer: "B (Bonus Chest)", explanation: "Nora 在洞穴发现长苔藓的箱子有金苹果铁条 → Bonus Chest 开局物资箱。" },
      { id: "3", answer: "C (Glowstone Dust)", explanation: "Kai 在下界找到发光粉末做橙灯 → Glowstone Dust 做萤石灯，最亮的方块。" },
      { id: "4", answer: "D (Pufferfish)", explanation: "Zara 发现有刺的鱼 → Pufferfish 是做水下呼吸药水的关键材料。" },
      { id: "5", answer: "E (Treasure Map)", explanation: "Rex 在沉船发现旧纸片 → Treasure Map 藏宝图，跟着红X挖宝藏。" },
    ],

    vocabulary: [
      { word: "stronghold",    pos: "n.", meaning: "要塞",         gameContext: "The End Portal is found in a stronghold" },
      { word: "moss",          pos: "n.", meaning: "苔藓",         gameContext: "The old chest had moss on it" },
      { word: "glowstone",     pos: "n.", meaning: "萤石",         gameContext: "Glowstone is the brightest light block" },
      { word: "pufferfish",    pos: "n.", meaning: "河豚",         gameContext: "Pufferfish can poison you if you get too close" },
      { word: "shipwreck",     pos: "n.", meaning: "沉船",         gameContext: "Treasure maps are found in shipwrecks" },
    ],

    wordCount: 72,
    estimatedDifficulty: "A2 (KET)",
    grammarFocus: "过去时叙事（found/went/opened）+ 间接引语（thought that / said that）",
};

export default data;
