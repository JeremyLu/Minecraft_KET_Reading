// @ts-nocheck
import type { ExerciseData } from '../../../types';

const data: ExerciseData = {
  id: "mc-ket-089",
  category: "Survival Basics",
  categoryZh: "生存基础",
  type: "Listening",
  title: "Morning on the Farm",

  audioText: "Good morning! It is a sunny day on the farm. Steve wakes up early. He puts on his boots and goes outside. First, he feeds the chickens. Then, he milks the cows. After that, he waters the wheat field. Steve loves his farm. It is not very big, but it is his favourite place in the world.",

  passage: "Good morning! It is a sunny day on the farm. Steve wakes up early. He puts on his boots and goes outside. First, he feeds the chickens. Then, he milks the cows. After that, he waters the wheat field. Steve loves his farm. It is not very big, but it is his favourite place in the world.",

  questions: [
    {
      id: "q1",
      text: "What is the weather like?",
      options: ["Rainy", "Sunny", "Snowy"],
      correct: 1,
    },
    {
      id: "q2",
      text: "What does Steve do first?",
      options: ["Milks the cows", "Waters the wheat", "Feeds the chickens"],
      correct: 2,
    },
    {
      id: "q3",
      text: "How does Steve feel about his farm?",
      options: ["He thinks it is too small", "He loves it very much", "He wants to sell it"],
      correct: 1,
    },
  ],

  answers: [
    {
      id: "q1",
      answer: "B",
      explanation: "音频开头说 It is a sunny day（是个晴天）。",
    },
    {
      id: "q2",
      answer: "C",
      explanation: "音频中说 First, he feeds the chickens（首先，他喂鸡）。A 和 B 都是之后做的事。",
    },
    {
      id: "q3",
      answer: "B",
      explanation: "音频最后说 it is his favourite place in the world（这是他世上最喜欢的地方），说明他非常爱他的农场。",
    },
  ],

  vocabulary: [
    { word: "feed", pos: "v.", meaning: "喂食", gameContext: "Feed animals in Minecraft by giving them wheat, seeds, or carrots" },
    { word: "wheat", pos: "n.", meaning: "小麦", gameContext: "Grow wheat from seeds on farmland near water" },
    { word: "field", pos: "n.", meaning: "田地", gameContext: "Plant crops in a field — use a hoe to prepare the soil" },
    { word: "favourite", pos: "adj.", meaning: "最喜欢的", gameContext: "What is your favourite Minecraft block or animal?" },
  ],

  wordCount: 72,
  estimatedDifficulty: "A2 (KET)",
  grammarFocus: "Sequence adverbs（顺序副词）: First, Then, After that",
};

export default data;
