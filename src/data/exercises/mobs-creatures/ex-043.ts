// @ts-nocheck
import type { ExerciseData } from '../../../types';

const data: ExerciseData = {
id: "mc-ket-043",
    category: "Mobs & Creatures",
    categoryZh: "生物图鉴",
    type: "Part 3",
    title: "The Spider Jockey",

    passage: [
      "Tom was exploring a jungle at night when he heard two different sounds at",
      "the same time. One was the clicking of a spider. The other was the",
      "rattling of bones. He stopped and held up his torch.",
      "",
      "In the darkness, he saw something very strange: a skeleton was sitting",
      "on top of a giant spider. This creature is called a Spider Jockey, and",
      "it is very rare in Minecraft.",
      "",
      "The skeleton started shooting arrows while the spider ran towards Tom",
      "very quickly. Tom jumped behind a tree to hide from the arrows. Then he",
      "threw a splash potion of poison at the spider. The spider slowed down.",
      "",
      "Tom fought bravely. First, he killed the spider. When the spider died,",
      "the skeleton fell to the ground and could not move for a moment. Tom",
      "used this chance to defeat it.",
      "",
      '"That was the rarest monster I have ever seen!" Tom wrote in his',
      "adventure diary that night.",
    ].join("\n"),

    questions: [
      {
        id: "q1",
        text: "What TWO sounds did Tom hear in the jungle?",
        options: [
          "Wind blowing and water flowing",
          "A spider clicking and bones rattling",
          "Arrows flying and footsteps",
        ],
        correct: 1,
      },
      {
        id: "q2",
        text: "What is a Spider Jockey?",
        options: [
          "A player who rides a spider",
          "A skeleton riding on a spider",
          "A spider that can shoot arrows",
        ],
        correct: 1,
      },
      {
        id: "q3",
        text: "How did Tom protect himself from the arrows?",
        options: [
          "He used a shield",
          "He jumped behind a tree",
          "He ran away quickly",
        ],
        correct: 1,
      },
      {
        id: "q4",
        text: "What did Tom use to slow down the spider?",
        options: [
          "A sword attack",
          "A bucket of water",
          "A splash potion of poison",
        ],
        correct: 2,
      },
      {
        id: "q5",
        text: "What did Tom do after the battle?",
        options: [
          "He went to sleep immediately",
          "He wrote about it in his diary",
          "He told his friends about it",
        ],
        correct: 1,
      },
    ],

    answers: [
      {
        id: "q1",
        answer: "B",
        explanation:
          "原文 One was the clicking of a spider. The other was the rattling of bones，两种声音分别对应蜘蛛和骷髅。",
      },
      {
        id: "q2",
        answer: "B",
        explanation:
          "原文 a skeleton was sitting on top of a giant spider. This creature is called a Spider Jockey，是骷髅骑蜘蛛。",
      },
      {
        id: "q3",
        answer: "B",
        explanation:
          "原文 Tom jumped behind a tree to hide from the arrows，躲在树后避箭。",
      },
      {
        id: "q4",
        answer: "C",
        explanation:
          "原文 he threw a splash potion of poison at the spider. The spider slowed down，投掷毒药药水令蜘蛛减速。",
      },
      {
        id: "q5",
        answer: "B",
        explanation:
          "原文 Tom wrote in his adventure diary that night，战斗后他写了日记。",
      },
    ],

    vocabulary: [
      {
        word: "rare",
        pos: "adj.",
        meaning: "罕见的；稀有的",
        gameContext: "Spider Jockeys are rare; there is only a 1% chance they appear",
      },
      {
        word: "rattle",
        pos: "v.",
        meaning: "发出咯咯声；骨骼碰撞声",
        gameContext: "You can hear skeletons rattling in dark caves",
      },
      {
        word: "potion",
        pos: "n.",
        meaning: "药水",
        gameContext: "Splash potions can be thrown at mobs to cause effects like poison or slowness",
      },
      {
        word: "bravely",
        pos: "adv.",
        meaning: "勇敢地",
        gameContext: "Fight bravely against the Ender Dragon in the End dimension",
      },
      {
        word: "defeat",
        pos: "v.",
        meaning: "打败；击败",
        gameContext: "Defeat the Wither boss to get a Nether Star",
      },
    ],

    wordCount: 158,
    estimatedDifficulty: "A2 (KET)",
    grammarFocus: "过去进行时 was doing + 一般过去时打断（whilst narrative）",
};

export default data;
