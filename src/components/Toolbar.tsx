import type { ExerciseType } from '../types';

interface Props {
  activeType: string;
  onTypeChange: (t: string) => void;
  activeCat: string;
  onCatChange: (c: string) => void;
  search: string;
  onSearchChange: (s: string) => void;
  hideDone: boolean;
  onToggleHideDone: () => void;
  onShowAll: () => void;
}

const TYPES = [
  { id: 'all',  label: '全部' },
  { id: 'Part 1', label: 'Part 1' },
  { id: 'Part 2', label: 'Part 2' },
  { id: 'Part 3', label: 'Part 3' },
  { id: 'Part 4', label: 'Part 4' },
  { id: 'Part 5', label: 'Part 5' },
  { id: 'done',  label: '✅ 已完成' },
];

const CATS = [
  { id: 'all',             label: '全部主题' },
  { id: 'Mobs & Creatures',     label: '生物图鉴' },
  { id: 'Survival Basics',      label: '生存基础' },
  { id: 'Exploration & Adventure', label: '冒险探索' },
  { id: 'Settings & Commands',   label: '设置指令' },
];

export default function Toolbar(props: Props) {
  return (
    <div className="toolbar">
      {/* Row 1 — type filters */}
      <div className="filter-row">
        <span className="filter-label">题型</span>
        {TYPES.map(t => (
          <button
            key={t.id}
            className={`filter-btn${props.activeType === t.id ? ' active' : ''}`}
            onClick={() => props.onTypeChange(t.id)}
          >
            {t.label}
          </button>
        ))}
      </div>

      {/* Row 2 — category pills */}
      <div className="category-row">
        <span className="filter-label">分类</span>
        {CATS.map(c => (
          <button
            key={c.id}
            className={`cat-pill${props.activeCat === c.id ? ' active' : ''}`}
            onClick={() => props.onCatChange(c.id)}
          >
            {c.label}
          </button>
        ))}
        <div className="toggle-item" onClick={props.onToggleHideDone}>
          <input
            type="checkbox"
            checked={props.hideDone}
            onChange={() => {}}
          />
          <div className="toggle-track">
            <div className="toggle-thumb" />
          </div>
          <span className="toggle-label">Hide Done</span>
        </div>
        <button className="show-all-btn" onClick={props.onShowAll}>
          显示全部
        </button>
        <div className="search-wrap">
          <span className="search-icon">🔍</span>
          <input
            id="search-input"
            type="text"
            placeholder="搜索练习..."
            value={props.search}
            onChange={e => props.onSearchChange(e.target.value)}
          />
        </div>
      </div>
    </div>
  );
}
