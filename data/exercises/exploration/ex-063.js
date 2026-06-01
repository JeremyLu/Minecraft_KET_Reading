/**
 * mc-ket-063 — Pack for the Adventure
 * Category: Exploration & Adventure / 冒险探索
 * Type: Part 2 — Matching (5 players x 5 items)
 * Grammar: 情态动词（should/must/need to）+ 目的状语
 * Topic: 冒险装备 — 不同探险目的地需要不同装备
 */

(function () {
  if (!window.MINECRAFT_KET_DATA) window.MINECRAFT_KET_DATA = {};

  MINECRAFT_KET_DATA["mc-ket-063"] = {
    id: "mc-ket-063",
    category: "Exploration & Adventure",
    categoryZh: "冒险探索",
    type: "Part 2",
    title: "Pack for the Adventure",

    players: [
      {
        id: 1,
        name: "Oliver",
        desc: "Oliver is going to explore a Deep Dark cave far underground. He knows the Warden is blind but can hear footsteps. He needs something to move without making any sound."
      },
      {
        id: 2,
        name: "Sophia",
        desc: "Sophia found a huge Ocean Monument full of Guardians. The water is deep and dark. She wants a special potion so she can breathe underwater and see clearly at the bottom of the sea."
      },
      {
        id: 3,
        name: "Max",
        desc: "Max is flying across a big gap between two mountains with his Elytra. But his wings are getting old and damaged. He needs something to repair them before they break in mid-air."
      },
      {
        id: 4,
        name: "Ava",
        desc: "Ava is exploring a dangerous Nether Fortress. Blazes are shooting fire at her from all directions. She needs a potion that stops her from taking damage from fire and lava."
      },
      {
        id: 5,
        name: "Ethan",
        desc: "Ethan is climbing a tall cliff but it is getting dark. He needs to see in the dark so he does not fall. He wants to turn into a creature that can see perfectly at night without any torch."
      },
    ],

    items: [
      {
        label: "A",
        name: "Swift Sneak Leggings",
        desc: "A special enchantment you can only find in Ancient Cities. When you put it on your leggings, you can sneak-walk almost as fast as normal walking. This is the best way to move quietly around the Warden, because sneaking stops the Warden from hearing your footsteps!",
      },
      {
        label: "B",
        name: "Potion of Water Breathing",
        desc: "A dark blue potion that lets you breathe underwater for 3 minutes. You make it using a Pufferfish. Add some Night Vision powder and you can see clearly underwater too. Very important for exploring Ocean Monuments without drowning!",
      },
      {
        label: "C",
        name: "Phantom Membrane",
        desc: "A thin pale material dropped by Phantoms at night. Each membrane can repair 25% of your Elytra's durability. If your wings show the red danger bar, use this in an Anvil to fix them before they break and you fall!",
      },
      {
        label: "D",
        name: "Potion of Fire Resistance",
        desc: "An orange-red potion that makes you completely immune to fire and lava for 3 minutes. You make it using Magma Cream from Magma Cubes. With this potion, you can even swim in lava without taking any damage at all!",
      },
      {
        label: "E",
        name: "Potion of Night Vision",
        desc: "A bright blue potion that makes everything look like it is daytime — even in the darkest caves! You make it using a Golden Carrot. It lasts for 3 minutes and makes water look super clear. Great for underwater exploring and dark cave adventures.",
      },
    ],

    correctMatching: { 1: "A", 2: "B", 3: "C", 4: "D", 5: "E" },

    answers: [
      { id: "1", answer: "A (Swift Sneak)", explanation: "Oliver 要静悄悄移动 → Swift Sneak 附魔让你潜行时快速走、不被循声守卫发现。" },
      { id: "2", answer: "B (Water Breathing)", explanation: "Sophia 要在海底神殿呼吸 → Water Breathing 药水 + 夜视让她水下自由活动。" },
      { id: "3", answer: "C (Phantom Membrane)", explanation: "Max 要修鞘翅 → Phantom Membrane 在铁砧上修鞘翅耐久度。" },
      { id: "4", answer: "D (Fire Resistance)", explanation: "Ava 在下界要塞被烈焰人喷火 → Fire Resistance 免疫火焰和岩浆伤害。" },
      { id: "5", answer: "E (Night Vision)", explanation: "Ethan 天黑爬山想夜视 → Night Vision 药水让黑暗变亮如白天。" },
    ],

    vocabulary: [
      { word: "immune",          pos: "adj.", meaning: "免疫的",       gameContext: "Fire Resistance makes you immune to lava" },
      { word: "durability",      pos: "n.",   meaning: "耐久度",       gameContext: "Elytra durability goes down as you fly" },
      { word: "sneak",           pos: "v.",   meaning: "潜行",         gameContext: "Sneaking stops the Warden from hearing you" },
      { word: "footstep",        pos: "n.",   meaning: "脚步声",       gameContext: "The Warden can hear your footsteps" },
      { word: "explore",         pos: "v.",   meaning: "探索",         gameContext: "Pack the right gear to explore dangerous places" },
    ],

    wordCount: 70,
    estimatedDifficulty: "A2 (KET)",
    grammarFocus: "情态动词（should/must/need to）+ 条件状语（if/when）+ 目的状语（to do）",
  };
})();
