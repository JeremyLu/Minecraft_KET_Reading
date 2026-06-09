import { useState, useMemo } from 'react';
import Toolbar from '../components/Toolbar';
import ProgressBar from '../components/ProgressBar';
import ExerciseCard from '../components/ExerciseCard';
import { normalizeAll, exerciseCount } from '../data';
import { getDoneSet } from '../utils/storage';
import { useI18n } from '../i18n';

const PAGE_SIZE = 6;

export default function ExercisesPage() {
  const { t } = useI18n();
  const [activeType, setActiveType] = useState('all');
  const [activeCat, setActiveCat] = useState('all');
  const [search, setSearch] = useState('');
  const [hideDone, setHideDone] = useState(false);
  const [page, setPage] = useState(1);

  const all = useMemo(() => normalizeAll(), []);

  const filtered = useMemo(() => {
    let list = [...all];
    if (activeType !== 'all') {
      if (activeType === 'done') {
        const done = getDoneSet();
        list = list.filter(e => done.has(e.id));
      } else {
        list = list.filter(e => e.type === activeType);
      }
    }
    if (activeCat !== 'all') list = list.filter(e => e.category === activeCat);
    if (search.trim()) {
      const q = search.toLowerCase().trim();
      list = list.filter(e =>
        e.title.toLowerCase().includes(q) ||
        e.id.toLowerCase().includes(q) ||
        e.vocabulary?.some(v => v.word.toLowerCase().includes(q))
      );
    }
    if (hideDone) {
      const done = getDoneSet();
      list = list.filter(e => !done.has(e.id));
    }
    return list;
  }, [all, activeType, activeCat, search, hideDone]);

  const paged = useMemo(() => filtered.slice(0, page * PAGE_SIZE), [filtered, page]);
  const hasMore = paged.length < filtered.length;
  const doneCount = all.filter(e => getDoneSet().has(e.id)).length;

  const handleShowAll = () => {
    setActiveType('all');
    setActiveCat('all');
    setSearch('');
    setHideDone(false);
    setPage(1);
  };

  return (
    <>
      <Toolbar
        activeType={activeType}
        onTypeChange={t => { setActiveType(t); setPage(1); }}
        activeCat={activeCat}
        onCatChange={c => { setActiveCat(c); setPage(1); }}
        search={search}
        onSearchChange={s => { setSearch(s); setPage(1); }}
        hideDone={hideDone}
        onToggleHideDone={() => { setHideDone(d => !d); setPage(1); }}
        onShowAll={handleShowAll}
      />

      <ProgressBar done={doneCount} total={exerciseCount} />

      <div id="exercises-grid">
        {paged.length === 0 && (
          <div id="empty-state" style={{ display: 'block', gridColumn: '1 / -1' }}>
            <div className="icon" style={{ fontSize: '3.5rem', marginBottom: 16, opacity: 0.4 }}>🔍</div>
            <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)' }}>{t('exercises.empty')}</p>
          </div>
        )}
        {paged.map((ex, idx) => (
          <ExerciseCard key={ex.id} exercise={ex} index={idx} />
        ))}
      </div>

      <div id="load-more-section">
        {hasMore ? (
          <button id="load-more-btn" onClick={() => setPage(p => p + 1)}>
            {t('exercises.loadMore')} ({paged.length}/{filtered.length})
          </button>
        ) : (
          paged.length > 0 && (
            <div id="all-done-msg" style={{ display: 'block', marginTop: 12, fontSize: '0.82rem', color: 'var(--text-muted)' }}>
              {t('exercises.allDone', { n: filtered.length })}
            </div>
          )
        )}
      </div>
    </>
  );
}
