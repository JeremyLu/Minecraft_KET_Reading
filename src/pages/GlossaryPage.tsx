import { useState, useMemo, useEffect } from 'react';
import { Link } from 'react-router-dom';
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
  { id: 'potions', label: '药水', icon: '🧪' },
  { id: 'commands', label: '指令', icon: '⌨️' },
];

export default function GlossaryPage() {
  const [search, setSearch] = useState('');
  const [activeCat, setActiveCat] = useState<GlossaryCategory | 'all'>('all');
  const [voiceId, setVoiceId] = useState(getSavedVoiceId() || '');
  const [voices, setVoices] = useState<SpeechSynthesisVoice[]>([]);

  useEffect(() => {
    preloadVoices().then(setVoices);
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

  const handleVoiceChange = (name: string) => {
    saveVoiceId(name);
    setVoiceId(name);
    speak('Hello', undefined, name);
  };

  return (
    <div>
      {/* Mini header */}
      <div style={{
        background: 'linear-gradient(180deg, #0d1f0d 0%, #0f0f0f 100%)',
        borderBottom: '1px solid var(--border)',
        padding: '16px 24px',
        textAlign: 'center',
        position: 'relative',
      }}>
        <div className="header-nav">
          <Link to="/" className="nav-btn">⬅ 返回 KET 练习</Link>
          <span className="nav-btn active">📖 词汇大全</span>
        </div>
      </div>

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
        {CATEGORIES.map(c => (
          <button
            key={c.id}
            className={`cat-pill pill-${c.id} ${activeCat === c.id ? 'active' : ''}`}
            onClick={() => setActiveCat(c.id)}
          >
            {c.icon} {c.label}
          </button>
        ))}
      </div>

      {/* Stats bar */}
      <div className="stats-bar">
        <span>显示 <strong>{filtered.length}</strong> / {GLOSSARY_WORDS.length} 个词汇</span>
      </div>

      {/* Word grid */}
      <main>
        {filtered.length === 0 ? (
          <div className="empty-state">
            <div className="emoji">🔍</div>
            <p>没有找到匹配的词汇，试试其他搜索词</p>
          </div>
        ) : (
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
