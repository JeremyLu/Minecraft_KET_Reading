// @ts-nocheck
import type { ExerciseData } from '../../../types';

const data: ExerciseData = {
id: "mc-ket-051",
    category: "Mobs & Creatures",
    categoryZh: "生物图鉴",
    type: "Part 5",
    title: "The Warden's Noise",

    passage: [
      "The Warden is the (1) _______ mob in Minecraft. It lives",
      "deep under the ground in the Deep Dark biome. The Warden",
      "(2) _______ see you because it is blind. It uses sound",
      "to find players. When you (3) _______ or break blocks,",
      "the Sculk Sensors send a signal to the Warden.",
      "",
      "The Warden has a (4) _______ on its chest. When it is",
      "calm, the light is small. When it is angry, the light",
      "becomes (5) _______. If you see a Warden, you",
      "(6) _______ run away quickly. Do not fight it!",
    ].join("\n"),

    blanks: [
      { id: 1, answer: ["strongest"],           hint: "最强的（形容词最高级）" },
      { id: 2, answer: ["cannot", "can't"],     hint: "不能（情态动词否定）" },
      { id: 3, answer: ["walk", "run", "move"], hint: "移动动词（walk/run/move）" },
      { id: 4, answer: ["light", "glow"],       hint: "光（胸口的发光器官）" },
      { id: 5, answer: ["bigger", "larger", "bright"], hint: "更大的 / 更亮的（比较级或形容词）" },
      { id: 6, answer: ["should", "must"],      hint: "应该 / 必须（情态动词）" },
    ],

    answers: [
      { id: "1", accepted: ["strongest", "most strong"], explanation: "the strongest 是 strong 的最高级，监守者是最强的生物。" },
      { id: "2", accepted: ["cannot", "can't"],   explanation: "监守者是盲的，cannot see you。" },
      { id: "3", accepted: ["walk", "run", "move", "step"], explanation: "当你 walk/run/move 或 break blocks 时，幽匿感应器会感应到。" },
      { id: "4", accepted: ["light", "glow"],     explanation: "监守者胸口有一个发光器官（light/glow）。" },
      { id: "5", accepted: ["bigger", "larger", "bright", "brighter"], explanation: "愤怒时胸口的发光体会变大变亮。" },
      { id: "6", accepted: ["should", "must"],    explanation: "见到监守者 should/must run away，不应与其战斗。" },
    ],

    vocabulary: [
      { word: "warden",      pos: "n.", meaning: "看守者；监守者",     gameContext: "The Warden is blind and uses sound to hunt" },
      { word: "biome",       pos: "n.", meaning: "生物群系",           gameContext: "The Deep Dark is a biome under the world" },
      { word: "blind",       pos: "adj.", meaning: "盲的；看不见的",   gameContext: "The Warden is blind but has excellent hearing" },
      { word: "signal",      pos: "n.", meaning: "信号",               gameContext: "Sculk Sensors send signals to the Warden" },
      { word: "calm",        pos: "adj.", meaning: "平静的",           gameContext: "When the Warden is calm, its chest light is small" },
    ],

    wordCount: 110,
    estimatedDifficulty: "A2 (KET)",
    grammarFocus: "形容词最高级（strongest）+ 情态动词否定（cannot）+ 比较级（bigger/brighter）",
};

export default data;
