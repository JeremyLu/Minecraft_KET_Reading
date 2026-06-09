import type { ExerciseType } from '../types';
import { TYPE_CONFIG } from '../data';
import { useI18n } from '../i18n';

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

const TYPE_IDS = ['all', 'Part 1', 'Part 2', 'Part 3', 'Part 4', 'Part 5', 'Listening', 'done'];
const CAT_IDS = ['all', 'Mobs & Creatures', 'Survival Basics', 'Exploration & Adventure', 'Settings & Commands'];

export default function Toolbar(props: Props) {
  const { t, lang, setLang } = useI18n();

  return (
    <div className="toolbar">
      {/* Row 1 — type filters */}
      <div className="filter-row">
        <span className="filter-label">{t('toolbar.type')}</span>
        {TYPE_IDS.map(id => (
          <button
            key={id}
            className={`filter-btn${props.activeType === id ? ' active' : ''}`}
            onClick={() => props.onTypeChange(id)}
          >
            {t(`type.${id}`)}
          </button>
        ))}
      </div>

      {/* Type description — shows when a specific type is selected */}
      {props.activeType !== 'all' && props.activeType !== 'done' && TYPE_CONFIG[props.activeType] && (
        <div className="type-desc-row">
          <span className="type-desc-text">📌 {t(`desc.${props.activeType}`)}</span>
        </div>
      )}

      {/* Row 2 — category pills */}
      <div className="category-row">
        <span className="filter-label">{t('toolbar.category')}</span>
        {CAT_IDS.map(id => (
          <button
            key={id}
            className={`cat-pill${props.activeCat === id ? ' active' : ''}`}
            onClick={() => props.onCatChange(id)}
          >
            {t(`cat.${id}`)}
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
          <span className="toggle-label">{t('toolbar.hideDone')}</span>
        </div>
        <button className="show-all-btn" onClick={props.onShowAll}>
          {t('toolbar.showAll')}
        </button>
        <div className="search-wrap">
          <span className="search-icon">🔍</span>
          <input
            id="search-input"
            type="text"
            placeholder={t('toolbar.search')}
            value={props.search}
            onChange={e => props.onSearchChange(e.target.value)}
          />
        </div>

        {/* Language toggle */}
        <button
          className="lang-toggle-btn"
          onClick={() => setLang(lang === 'en' ? 'zh' : 'en')}
          title={lang === 'en' ? 'Switch to Chinese' : '切换到英文'}
        >
          {lang === 'en' ? '🌐 中文' : '🌐 English'}
        </button>
      </div>
    </div>
  );
}
