// @ts-nocheck
import type { ExerciseData } from '../../../types';

const data: ExerciseData = {
  id: "mc-ket-090",
  category: "Mobs & Creatures",
  categoryZh: "生物图鉴",
  type: "Listening",
  title: "Danger in the Cave",

  audioText: "Be careful! There is a dark cave ahead. Steve can hear strange sounds inside. First, he hears a zombie groaning. Then, he hears a skeleton's bones rattling. The scariest sound is a creeper hissing. Steve needs a sword and a shield before he goes inside. He also brings torches to light up the cave. Steve is a little scared, but he is also very brave.",

  passage: "Be careful! There is a dark cave ahead. Steve can hear strange sounds inside. First, he hears a zombie groaning. Then, he hears a skeleton's bones rattling. The scariest sound is a creeper hissing. Steve needs a sword and a shield before he goes inside. He also brings torches to light up the cave. Steve is a little scared, but he is also very brave.",

  questions: [
    {
      id: "q1",
      text: "How many different mob sounds does Steve hear?",
      options: ["Two", "Three", "Four"],
      correct: 1,
    },
    {
      id: "q2",
      text: "Which mob makes the scariest sound?",
      options: ["The zombie", "The skeleton", "The creeper"],
      correct: 2,
    },
    {
      id: "q3",
      text: "What does Steve bring to light up the cave?",
      options: ["A lantern", "Torches", "A campfire"],
      correct: 1,
    },
  ],

  answers: [
    {
      id: "q1",
      answer: "B",
      explanation: "音频中提到了三种生物的声音：zombie groaning（僵尸呻吟）、skeleton's bones rattling（骷髅骨头咔咔响）、creeper hissing（苦力怕嘶嘶声），共三种。",
    },
    {
      id: "q2",
      answer: "C",
      explanation: "音频明确说 The scariest sound is a creeper hissing（最可怕的声音是苦力怕的嘶嘶声）。",
    },
    {
      id: "q3",
      answer: "B",
      explanation: "音频中说 He also brings torches to light up the cave（他还带了火把来照亮洞穴）。",
    },
  ],

  vocabulary: [
    { word: "groaning", pos: "v.", meaning: "呻吟", gameContext: "Zombies make a groaning sound in dark caves at night" },
    { word: "rattling", pos: "v.", meaning: "咔咔作响", gameContext: "Skeletons' bones rattle when they walk or shoot arrows" },
    { word: "hissing", pos: "v.", meaning: "嘶嘶声", gameContext: "Creepers hiss before they explode — run away quickly!" },
    { word: "torch", pos: "n.", meaning: "火把", gameContext: "Place torches to stop mobs from spawning in dark areas" },
    { word: "brave", pos: "adj.", meaning: "勇敢的", gameContext: "You need to be brave to explore deep caves and the Nether" },
  ],

  wordCount: 82,
  estimatedDifficulty: "A2 (KET)",
  grammarFocus: "Present tense sensory verbs: hear, sound, see",
};

export default data;
