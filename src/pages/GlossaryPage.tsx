import { useState, useMemo, useEffect } from 'react';
import { GLOSSARY_WORDS } from '../data/glossary';
import { getAllVoices, preloadVoices, speak } from '../utils/tts';
import { getSavedVoiceId, saveVoiceId } from '../utils/storage';
import GlossaryCard from '../components/GlossaryCard';
import type { GlossaryCategory } from '../types';

const CATEGORIES: { id: GlossaryCategory | 'all'; label: string; icon: string }[] = [
  { id: 'all', label: '全部', icon: '📚' },
  { id: 'tools', label: '工具', icon: '⛏️' },
  { id: 'armor', label: '防具', icon: '🛡️' },
  { id: 'mobs', label: '怪物', icon: '👹' },
  { id: 'animals', label: '生物', icon: '🐮' },
  { id: 'blocks', label: '方块', icon: '🧱' },
  { id: 'ores', label: '矿石', icon: '💎' },
  { id: 'food', label: '食物', icon: '🍎' },
  { id: 'nature', label: '自然', icon: '🌲' },
  { id: 'nether', label: '下界', icon: '🔥' },
  { id: 'end', label: '末地', icon: '🌑' },
  { id: 'potions', label: '药水/附魔', icon: '🧪' },
  { id: 'commands', label: '指令/基础', icon: '⌨️' },
];

export default function GlossaryPage() {
  const [search, setSearch] = useState('');
  const [activeCat, setActiveCat] = useState<GlossaryCategory | 'all'>('all');
  const [voiceId, setVoiceId] = useState(getSavedVoiceId() || '');
  const [voices, setVoices] = useState<SpeechSynthesisVoice[]>([]);

  useEffect(() => {
    preloadVoices().then(setVoices);
  }, []);

  const catGroups = useMemo(() => {
    return CATEGORIES.filter(c => c.id !== 'all');
  }, []);

  const filtered = useMemo(() => {
    let list = [...GLOSSARY_WORDS];
    if (activeCat !== 'all') list = list.filter(w => w.category === activeCat);
    if (search.trim()) {
      const q = search.toLowerCase().trim();
      list = list.filter(w =>
        w.word.toLowerCase().includes(q) || w.meaning.includes(q)
      );
    }
    return list;
  }, [activeCat, search]);

  /** Group filtered words by category for "全部" mode */
  const groupedByCat = useMemo(() => {
    if (activeCat !== 'all') return null;
    const groups = catGroups.map(c => ({
      cat: c,
      words: filtered.filter(w => w.category === c.id),
    })).filter(g => g.words.length > 0);
    return groups;
  }, [activeCat, filtered, catGroups]);

  const handleVoiceChange = (name: string) => {
    saveVoiceId(name);
    setVoiceId(name);
    speak('Hello', undefined, name);
  };

  const scrollToCat = (catId: string) => {
    setActiveCat(catId as GlossaryCategory);
    const el = document.getElementById(`cat-section-${catId}`);
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <div>
      {/* Toolbar */}
      <div className="glossary-toolbar">
        <div className="search-box">
          <span className="search-icon">🔍</span>
          <input
            type="text"
            placeholder="搜索英文或中文..."
            value={search}
            onChange={e => setSearch(e.target.value)}
          />
        </div>
        <div className="voice-picker">
          <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)', whiteSpace: 'nowrap' }}>🔊 语音</span>
          <select
            value={voiceId}
            onChange={e => handleVoiceChange(e.target.value)}
            style={{
              background: 'var(--bg-elevated)',
              border: '1px solid var(--border-accent)',
              borderRadius: 'var(--radius-pill)',
              color: 'var(--text-primary)',
              padding: '4px 10px',
              fontSize: '0.78rem',
              fontFamily: 'var(--font-ui)',
              cursor: 'pointer',
              outline: 'none',
            }}
          >
            <option value="">自动选择</option>
            {voices.filter(v => /^en[-_]/.test(v.lang)).map(v => (
              <option key={v.name} value={v.name}>{v.name}</option>
            ))}
          </select>
        </div>
      </div>

      {/* Category pills */}
      <div className="cat-pills" style={{ padding: '10px 24px', display: 'flex', gap: 8, flexWrap: 'wrap' }}>
        <button
          className={`cat-pill pill-all ${activeCat === 'all' ? 'active' : ''}`}
          onClick={() => setActiveCat('all')}
        >
          📚 全部
        </button>
        {catGroups.map(c => (
          <button
            key={c.id}
            className={`cat-pill pill-${c.id} ${activeCat === c.id ? 'active' : ''}`}
            onClick={() => activeCat === 'all' ? scrollToCat(c.id) : setActiveCat(c.id)}
          >
            {c.icon} {c.label}
          </button>
        ))}
      </div>

      {/* Stats bar */}
      <div className="stats-bar">
        <span>显示 <strong>{filtered.length}</strong> / {GLOSSARY_WORDS.length} 个词汇</span>
        {activeCat !== 'all' && (
          <button
            className="show-all-btn"
            onClick={() => setActiveCat('all')}
            style={{ fontSize: '0.72rem' }}
          >
            查看全部分类
          </button>
        )}
      </div>

      {/* Word content */}
      <main>
        {filtered.length === 0 ? (
          <div className="empty-state">
            <div className="emoji">🔍</div>
            <p>没有找到匹配的词汇，试试其他搜索词</p>
          </div>
        ) : activeCat === 'all' && groupedByCat ? (
          /* ── All mode: grouped by chapter ── */
          groupedByCat.map(group => (
            <section
              key={group.cat.id}
              id={`cat-section-${group.cat.id}`}
              className="cat-section"
            >
              <div className="cat-header">
                <span className="cat-icon">{group.cat.icon}</span>
                <div>
                  <div className="cat-title">{group.cat.label}</div>
                  <div className="cat-subtitle">
                    {group.cat.id === 'tools' && 'Tools & Weapons · 工具与武器'}
                    {group.cat.id === 'armor' && 'Armor · 防具'}
                    {group.cat.id === 'mobs' && 'Hostile Mobs · 敌对生物'}
                    {group.cat.id === 'animals' && 'Passive Mobs · 友善生物'}
                    {group.cat.id === 'blocks' && 'Building Blocks · 建筑方块'}
                    {group.cat.id === 'ores' && 'Ores & Minerals · 矿石与矿物'}
                    {group.cat.id === 'food' && 'Food & Farming · 食物与耕种'}
                    {group.cat.id === 'nature' && 'Nature & Biomes · 自然与群系'}
                    {group.cat.id === 'nether' && 'The Nether · 下界'}
                    {group.cat.id === 'end' && 'The End · 末地'}
                    {group.cat.id === 'potions' && 'Potions & Enchantments · 药水与附魔'}
                    {group.cat.id === 'commands' && 'Commands & Basics · 指令与基础'}
                  </div>
                </div>
                <span className="cat-count">{group.words.length} words</span>
              </div>
              <div className="word-grid">
                {group.words.map((w, i) => (
                  <GlossaryCard key={`${group.cat.id}-${i}`} word={w} />
                ))}
              </div>
            </section>
          ))
        ) : (
          /* ── Filtered mode: flat grid ── */
          <div className="word-grid">
            {filtered.map((w, i) => (
              <GlossaryCard key={i} word={w} />
            ))}
          </div>
        )}
      </main>
    </div>
  );
}
