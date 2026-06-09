// @ts-nocheck
import type { ExerciseData } from '../../../types';

const data: ExerciseData = {
  id: "mc-ket-092",
  category: "Settings & Commands",
  categoryZh: "设置与指令",
  type: "Listening",
  title: "How to Teleport",

  audioText: "Today I will teach you how to teleport in Minecraft. First, open the chat window. Then, type the command /tp followed by a player's name. For example, type /tp Steve to teleport to Steve. You can also use numbers for coordinates. For example, /tp 100 64 200 will take you to that exact location. But be careful! If you teleport to a wrong place, you might fall into lava or water. Always check your coordinates before you teleport.",

  passage: "Today I will teach you how to teleport in Minecraft. First, open the chat window. Then, type the command /tp followed by a player's name. For example, type /tp Steve to teleport to Steve. You can also use numbers for coordinates. For example, /tp 100 64 200 will take you to that exact location. But be careful! If you teleport to a wrong place, you might fall into lava or water. Always check your coordinates before you teleport.",

  questions: [
    {
      id: "q1",
      text: "What must you open first to use the /tp command?",
      options: ["The inventory", "The chat window", "The settings menu"],
      correct: 1,
    },
    {
      id: "q2",
      text: "What can you use instead of a player's name with /tp?",
      options: ["A block name", "Numbers for coordinates", "A colour code"],
      correct: 1,
    },
    {
      id: "q3",
      text: "What might happen if you teleport to the wrong place?",
      options: ["You will get lost", "You might fall into lava or water", "Your game will crash"],
      correct: 1,
    },
  ],

  answers: [
    {
      id: "q1",
      answer: "B",
      explanation: "音频开头说 First, open the chat window（首先，打开聊天窗口）。",
    },
    {
      id: "q2",
      answer: "B",
      explanation: "音频中说 You can also use numbers for coordinates（你也可以用数字坐标）。例如 /tp 100 64 200。",
    },
    {
      id: "q3",
      answer: "B",
      explanation: "音频中说 you might fall into lava or water（你可能会掉进岩浆或水里）。",
    },
  ],

  vocabulary: [
    { word: "teleport", pos: "v.", meaning: "传送", gameContext: "Use /tp to teleport yourself to another player or location" },
    { word: "command", pos: "n.", meaning: "指令", gameContext: "Commands like /tp, /gamemode, and /give help you control the game" },
    { word: "coordinate", pos: "n.", meaning: "坐标", gameContext: "Press F3 or enable Show Coordinates to see your X, Y, Z position" },
    { word: "location", pos: "n.", meaning: "位置", gameContext: "Write down the location of your house so you can find it again" },
  ],

  wordCount: 95,
  estimatedDifficulty: "A2 (KET)",
  grammarFocus: "Imperatives + First conditional: If you teleport..., you might fall...",
};

export default data;
