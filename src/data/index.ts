// Exercise registry — auto-loads all .ts exercise modules via Vite glob
import type { ExerciseData, NormalizedExercise } from '../types';

// ─── Glob import (eager, for single-file build compat) ─────
const exModules = import.meta.glob<{ default: ExerciseData }>(
  './exercises/**/*.ts',
  { eager: true }
);

// ─── Category display info ───────────────────────────────────
export const CATEGORY_LIST = [
  { id: 'Mobs & Creatures',     label: '生物',     labelZh: '生物图鉴' },
  { id: 'Survival Basics',      label: '生存',     labelZh: '生存基础' },
  { id: 'Exploration & Adventure', label: '冒险',   labelZh: '冒险探索' },
  { id: 'Settings & Commands',   label: '指令',     labelZh: '设置指令' },
] as const;

// ─── Type display config ────────────────────────────────────
export const TYPE_CONFIG: Record<string, { cls: string; short: string; label: string; desc: string; color: string }> = {
  'Part 1': { cls: 'type-part1', short: 'P1', label: 'Part 1 阅读', desc: '阅读通知、告示、标识等短文本，选择正确答案', color: '#3a3a3a' },
  'Part 2': { cls: 'type-part2', short: 'P2', label: 'Part 2 匹配', desc: '阅读人物描述，匹配对应的物品或信息', color: '#4a1a78' },
  'Part 3': { cls: 'type-part3', short: 'P3', label: 'Part 3 阅读', desc: '阅读日记、故事等长文本，回答选择题', color: '#3a2a0a' },
  'Part 4': { cls: 'type-part4', short: 'P4', label: 'Part 4 完形', desc: '从选项中选择合适的词填入空白处', color: '#0a2a3a' },
  'Part 5': { cls: 'type-part5', short: 'P5', label: 'Part 5 填空', desc: '根据上下文填入正确的单词（无选项提示）', color: '#0a3a3a' },
  'Listening': { cls: 'type-listening', short: '🎧', label: '听力理解', desc: '听一段英文录音，回答选择题', color: '#ff7043' },
};

// ─── Load all exercises ──────────────────────────────────────
function loadAll(): ExerciseData[] {
  const list: ExerciseData[] = [];
  for (const mod of Object.values(exModules)) {
    if (mod.default) list.push(mod.default);
  }
  return list;
}

// ─── Normalize ─────────────────────────────────────────────
export function normalizeAll(): NormalizedExercise[] {
  const raw = loadAll();
  return raw.map(ex => {
    const cfg = TYPE_CONFIG[ex.type] || { cls: '', short: '', label: '', desc: '', color: '#333' };
    return { ...ex, typeClass: cfg.cls, typeShort: cfg.short, typeLabel: cfg.label, typeDesc: cfg.desc, typeColor: cfg.color } as NormalizedExercise;
  });
}

export const exerciseCount = Object.keys(exModules).length;
