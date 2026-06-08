// @ts-nocheck
import type { ExerciseData } from '../../../types';

const data: ExerciseData = {
id: "mc-ket-053",
    category: "Survival Basics",
    categoryZh: "生存基础",
    type: "Part 2",
    title: "Bow vs Crossbow",

    players: [
      {
        id: 1,
        name: "Alex",
        desc: "Alex is hunting skeletons from a hilltop. He needs the most common long-range weapon that shoots arrows. He has plenty of string and sticks to craft it."
      },
      {
        id: 2,
        name: "Steve",
        desc: "Steve is defending his village from pillagers. He wants a stronger weapon that shoots farther than a normal bow. He doesn't mind waiting longer to load it between shots."
      },
      {
        id: 3,
        name: "Jenny",
        desc: "Jenny wants to blow up a group of creepers from far away. She needs a special kind of arrow that explodes when it hits something."
      },
      {
        id: 4,
        name: "Tom",
        desc: "Tom is fighting three zombies at once. He wants a magical enchantment that lets his weapon shoot three arrows at the same time."
      },
      {
        id: 5,
        name: "Sarah",
        desc: "Sarah wants a glowing purple enchantment on her bow. She heard that some enchantments can make arrows deal more damage or even set targets on fire."
      },
    ],

    items: [
      {
        label: "A",
        name: "Bow",
        desc: "The most common long-range weapon in Minecraft. It is made of three sticks and three pieces of string. To shoot, you need to pull it back and hold. The longer you hold, the farther the arrow flies. It can be enchanted with Power, Flame, Punch, and Infinity.",
      },
      {
        label: "B",
        name: "Crossbow",
        desc: "A stronger long-range weapon that shoots arrows and fireworks. It takes longer to load than a bow but shoots farther and deals more damage. You can load it and keep it ready to fire instantly. It can be enchanted with Quick Charge, Piercing, and Multishot.",
      },
      {
        label: "C",
        name: "Tipped Arrows",
        desc: "Special arrows that have been dipped in potions. There are 16 types! An Arrow of Harming deals instant damage. An Arrow of Poison makes enemies slowly lose health. An Arrow of Slowness makes enemies walk slower. You can craft them using a Cauldron.",
      },
      {
        label: "D",
        name: "Multishot Enchantment",
        desc: "A magical enchantment that only works on crossbows. When you fire, it shoots three arrows at once instead of just one! It is great for fighting multiple enemies. But it uses three arrows from your inventory each time you shoot.",
      },
      {
        label: "E",
        name: "Enchanted Bow",
        desc: "A bow with a glowing purple light on it. Enchantments like Power V make it deal more damage. Flame sets enemies on fire. Infinity lets you shoot forever with just one arrow. Punch pushes enemies back when they get hit.",
      },
    ],

    correctMatching: { 1: "A", 2: "B", 3: "C", 4: "D", 5: "E" },

    answers: [
      { id: "1", answer: "A (Bow)", explanation: "Alex 需要最常见的远程武器，Bow 是用木棍和线做的基础弓。" },
      { id: "2", answer: "B (Crossbow)", explanation: "Steve 要射程更远、伤害更高的武器，Crossbow 比 Bow 更强但装填更慢。" },
      { id: "3", answer: "C (Tipped Arrows)", explanation: "Jenny 想要能爆炸的特殊箭，Tipped Arrows include the Arrow of Harming（伤害箭）。" },
      { id: "4", answer: "D (Multishot)", explanation: "Tom 要一次射三支箭，Multishot 是弩的专属附魔，一次射出 3 支箭。" },
      { id: "5", answer: "E (Enchanted Bow)", explanation: "Sarah 要发紫色光芒的附魔弓，Power / Flame / Infinity 等附魔都在弓上发光。" },
    ],

    vocabulary: [
      { word: "crossbow",      pos: "n.", meaning: "弩",               gameContext: "Crossbow shoots farther but loads slower than a bow" },
      { word: "enchantment",   pos: "n.", meaning: "附魔",             gameContext: "Multishot is an enchantment for crossbows" },
      { word: "multishot",     pos: "n.", meaning: "多重射击",         gameContext: "Multishot lets you shoot three arrows at once" },
      { word: "long-range",    pos: "adj.", meaning: "远程的",         gameContext: "Both bow and crossbow are long-range weapons" },
      { word: "string",        pos: "n.", meaning: "线；弓弦",         gameContext: "You need string to craft a bow" },
    ],

    wordCount: 70,
    estimatedDifficulty: "A2 (KET)",
    grammarFocus: "比较级（longer / stronger / farther）+ 不定式表目的（to shoot / to load）",
};

export default data;
