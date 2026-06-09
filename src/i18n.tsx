import { createContext, useContext, useState, useEffect, useCallback, type ReactNode } from 'react';

// ── Types ─────────────────────────────────────────────
export type Lang = 'en' | 'zh';

const STORAGE_KEY = 'mc-ket-lang';

function getSavedLang(): Lang {
  try { return (localStorage.getItem(STORAGE_KEY) as Lang) || 'en'; } catch { return 'en'; }
}

// ── Translation table ─────────────────────────────────
type Section = Record<string, string | Record<string, string>>;

const zh: Record<string, any> = {
  // Toolbar
  'toolbar.type': '题型',
  'toolbar.category': '分类',
  'toolbar.hideDone': '隐藏已完成',
  'toolbar.showAll': '显示全部',
  'toolbar.search': '搜索练习...',

  // Toolbar type labels
  'type.all': '全部',
  'type.done': '✅ 已完成',
  'type.Part 1': 'Part 1 阅读',
  'type.Part 2': 'Part 2 匹配',
  'type.Part 3': 'Part 3 阅读',
  'type.Part 4': 'Part 4 完形',
  'type.Part 5': 'Part 5 填空',
  'type.Listening': '🎧 听力',

  // Type descriptions
  'desc.Part 1': '阅读通知、告示、标识等短文本，选择正确答案',
  'desc.Part 2': '阅读人物描述，匹配对应的物品或信息',
  'desc.Part 3': '阅读日记、故事等长文本，回答选择题',
  'desc.Part 4': '从选项中选择合适的词填入空白处',
  'desc.Part 5': '根据上下文填入正确的单词（无选项提示）',
  'desc.Listening': '听一段英文录音，回答选择题',

  // Toolbar category labels
  'cat.all': '全部主题',
  'cat.Mobs & Creatures': '生物图鉴',
  'cat.Survival Basics': '生存基础',
  'cat.Exploration & Adventure': '冒险探索',
  'cat.Settings & Commands': '设置指令',

  // ProgressBar
  'progress.label': '进度',

  // ExercisesPage
  'exercises.empty': '没有匹配的练习题，请尝试调整筛选条件或点击「显示全部」。',
  'exercises.loadMore': '加载更多',
  'exercises.allDone': '🎉 全部 {n} 道练习已加载！',

  // ExerciseCard — matching
  'card.matchLabel': '🔗 请为每位玩家匹配正确的物品：',
  'card.matchSelect': '为每位玩家选择对应的物品：',
  'card.matchChoose': '-- 请选择 --',

  // ExerciseCard — listening
  'card.listenFirst': '你将听到一段英文录音。请仔细听，然后回答下方问题。',
  'card.listenAgain': '你可以再听一遍。如需重听，请点击「重新播放」。',
  'card.listenPlaying': '播放中...',
  'card.listenReplay': '重新播放',
  'card.listenPlay': '播放音频',

  // ExerciseCard — answer section
  'card.transcript': '📝 录音原文',
  'card.answerQ': '第{n}题 答案：',
  'card.vocabHeader': '📚 词汇学习',
  'card.answerToggle': '🔑 答案 & 词汇',
  'card.checkBtn': '✅ 检查答案',
  'card.resetBtn': '🔄 重置',
  'card.doneLabel': '✅ 已完成',

  // Layout
  'layout.tabKET': '📝 KET 练习',
  'layout.tabGlossary': '📖 词汇大全',
};

const en: Record<string, any> = {
  'toolbar.type': 'Type',
  'toolbar.category': 'Category',
  'toolbar.hideDone': 'Hide Done',
  'toolbar.showAll': 'Show All',
  'toolbar.search': 'Search exercises...',

  'type.all': 'All',
  'type.done': '✅ Done',
  'type.Part 1': 'Part 1 Reading',
  'type.Part 2': 'Part 2 Matching',
  'type.Part 3': 'Part 3 Reading',
  'type.Part 4': 'Part 4 Cloze',
  'type.Part 5': 'Part 5 Open Cloze',
  'type.Listening': '🎧 Listening',

  'desc.Part 1': 'Read signs, notices, and short texts — choose the correct answer',
  'desc.Part 2': 'Read character descriptions and match with items',
  'desc.Part 3': 'Read longer texts like diary entries and stories — answer questions',
  'desc.Part 4': 'Choose the best word from options to fill each blank',
  'desc.Part 5': 'Write the correct word in each blank (no options given)',
  'desc.Listening': 'Listen to a recording and answer the questions',

  'cat.all': 'All Topics',
  'cat.Mobs & Creatures': 'Mobs & Creatures',
  'cat.Survival Basics': 'Survival Basics',
  'cat.Exploration & Adventure': 'Exploration',
  'cat.Settings & Commands': 'Commands',

  'progress.label': 'Progress',

  'exercises.empty': 'No exercises match your filters. Try adjusting the search or show all.',
  'exercises.loadMore': 'Load More',
  'exercises.allDone': '🎉 All {n} exercises loaded!',

  'card.matchLabel': '🔗 Match each player with the correct item:',
  'card.matchSelect': 'Select the correct item for each player:',
  'card.matchChoose': '-- choose --',

  'card.listenFirst': 'You will hear the recording. Listen carefully, then answer the questions.',
  'card.listenAgain': 'You can listen again. Click Replay to hear the recording a second time.',
  'card.listenPlaying': 'Playing...',
  'card.listenReplay': 'Replay Audio',
  'card.listenPlay': 'Play Audio',

  'card.transcript': '📝 Transcript',
  'card.answerQ': 'Q{n} Answer:',
  'card.vocabHeader': '📚 Vocabulary',
  'card.answerToggle': '🔑 Answer & Vocabulary',
  'card.checkBtn': '✅ Check Answer',
  'card.resetBtn': '🔄 Reset',
  'card.doneLabel': '✅ Completed',

  'layout.tabKET': '📝 KET Practice',
  'layout.tabGlossary': '📖 Glossary',
};

const tables: Record<Lang, Record<string, string>> = { zh, en };

// ── Context ────────────────────────────────────────────
interface I18nValue {
  lang: Lang;
  t: (key: string, params?: Record<string, string | number>) => string;
  setLang: (l: Lang) => void;
}

const I18nContext = createContext<I18nValue | null>(null);

export function I18nProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>(getSavedLang);

  const setLang = useCallback((l: Lang) => {
    setLangState(l);
    try { localStorage.setItem(STORAGE_KEY, l); } catch {}
  }, []);

  const t = useCallback((key: string, params?: Record<string, string | number>): string => {
    let text = tables[lang][key] ?? tables['en'][key] ?? key;
    if (params) {
      Object.entries(params).forEach(([k, v]) => {
        text = text.replace(`{${k}}`, String(v));
      });
    }
    return text;
  }, [lang]);

  return (
    <I18nContext.Provider value={{ lang, t, setLang }}>
      {children}
    </I18nContext.Provider>
  );
}

export function useI18n(): I18nValue {
  const ctx = useContext(I18nContext);
  if (!ctx) throw new Error('useI18n must be used within I18nProvider');
  return ctx;
}

// ── Static helpers (for non-component usage) ───────────
export function getStaticT(lang: Lang) {
  return (key: string, params?: Record<string, string | number>): string => {
    let text = tables[lang][key] ?? tables['en'][key] ?? key;
    if (params) {
      Object.entries(params).forEach(([k, v]) => {
        text = text.replace(`{${k}}`, String(v));
      });
    }
    return text;
  };
}
