# Minecraft KET Reading

Minecraft 主题的 KET (A2) 英语阅读练习 Web 应用，专为 Angle 设计。

**单文件部署** — 构建产物为单一 `index.html`，可直接在浏览器打开，无需服务器。

## 快速开始

```bash
# 安装依赖
npm install

# 开发模式 (热更新)
npm run dev

# 生产构建 → index.html
npm run build
```

`npm run build` 会执行 `tsc && vite build && cp dist/index.html ./`，最终产物在项目根目录的 `index.html`。

## 项目结构

```
src/
├── main.tsx              # 入口
├── App.tsx               # 路由 (习题 / 词汇表)
├── types/index.ts        # 类型定义 (ExerciseData, ExerciseType 等)
├── data/
│   ├── index.ts          # 数据加载与归一化 (loadExercises, getCategories, TYPE_CONFIG)
│   ├── glossary.ts       # 词汇表数据
│   └── exercises/        # 练习题 (73 道)
│       ├── survival-basics/      # 生存基础
│       ├── mobs-creatures/       # 生物图鉴
│       ├── exploration/          # 冒险探索
│       └── settings-commands/    # 设置与指令
├── components/
│   ├── ExerciseCard.tsx   # 核心渲染组件 (Part 1-5 + Listening)
│   ├── GlossaryCard.tsx   # 词汇卡片 (TTS 发音)
│   ├── Layout.tsx         # 页面布局 + 侧边导航
│   └── Toolbar.tsx        # 分类 / 题型筛选栏
├── pages/
│   ├── ExercisesPage.tsx  # 习题列表页
│   └── GlossaryPage.tsx   # 词汇表页
├── utils/
│   ├── tts.ts             # Web Speech API TTS (语音评分 + KET 听力)
│   └── storage.ts         # localStorage 完成状态
└── styles/global.css      # Minecraft 像素风主题样式
```

## 题型

| 题型 | 说明 | 交互 |
|------|------|------|
| Part 1 | 阅读理解 + MCQ | 选 A/B/C/D |
| Part 2 | 人物物品匹配 | 下拉匹配 |
| Part 3 | 长文阅读 + MCQ | 选 A/B/C/D |
| Part 4 | 完形填空 (选词) | 下拉选词 |
| Part 5 | 开放完形填空 | 键盘输入 |
| 🎧 Listening | 听力理解 + MCQ | **英式发音 TTS** → 答题 → 查看 Transcript |

## 听力题设计 (Listening)

- **语音**: 英式英语 (`en-GB`)，优先 Daniel / Serena 等英音
- **语速**: 0.72× (~120 wpm，KET 考试标准)
- **流程**: 点击 🎧 Play Audio → 听音频 → 答题 → Check → 查看 📝 Transcript
- 音频由 Web Speech API 朗读，无需外部依赖

## 新增练习题

在 `src/data/exercises/{category}/ex-{nnn}.ts` 创建文件：

```ts
import type { ExerciseData } from '../../../types';

const data: ExerciseData = {
  id: "mc-ket-NNN",
  category: "Survival Basics",
  categoryZh: "生存基础",
  type: "Listening",  // 或 Part 1~5
  title: "题目标题",
  passage: "阅读短文...",           // 或 audioText (Listening)
  audioText: "TTS 朗读文本...",     // 仅 Listening
  questions: [ /* ... */ ],
  answers: [ /* ... */ ],
  vocabulary: [ /* ... */ ],
  wordCount: 100,
  estimatedDifficulty: "A2 (KET)",
  grammarFocus: "...",
};
export default data;
```

## 技术栈

- React 18 + TypeScript
- Vite 5 + vite-plugin-singlefile (单文件打包)
- React Router v6 (Hash 路由)
- Web Speech API (TTS)
- CSS Variables (Minecraft 像素风主题)
