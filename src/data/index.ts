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
const TYPE_CONFIG: Record<string, { cls: string; short: string; color: string }> = {
  'Part 1': { cls: 'type-part1', short: 'P1', color: '#3a3a3a' },
  'Part 2': { cls: 'type-part2', short: 'P2', color: '#4a1a78' },
  'Part 3': { cls: 'type-part3', short: 'P3', color: '#3a2a0a' },
  'Part 4': { cls: 'type-part4', short: 'P4', color: '#0a2a3a' },
  'Part 5': { cls: 'type-part5', short: 'P5', color: '#0a3a3a' },
  'Listening': { cls: 'type-listening', short: '🎧', color: '#ff7043' },
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
    const cfg = TYPE_CONFIG[ex.type] || { cls: '', short: '', color: '#333' };
    return { ...ex, typeClass: cfg.cls, typeShort: cfg.short, typeColor: cfg.color } as NormalizedExercise;
  });
}

export const exerciseCount = Object.keys(exModules).length;
