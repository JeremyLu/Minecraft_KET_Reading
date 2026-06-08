import type { GlossaryWord } from '../types';
import { speak } from '../utils/tts';
import { useState } from 'react';

const CAT_COLORS: Record<string, string> = {
  tools: '#ff7043', armor: '#78909c', mobs: '#ef5350',
  animals: '#4caf50', blocks: '#8d6e63', ores: '#42a5f5',
  food: '#ffc107', nature: '#66bb6a', nether: '#bf360c',
  end: '#7e57c2', potions: '#ab47bc', commands: '#26c6da',
};

interface Props {
  word: GlossaryWord;
}

export default function GlossaryCard({ word }: Props) {
  const [speaking, setSpeaking] = useState(false);

  const handleSpeak = (e: React.MouseEvent) => {
    e.stopPropagation();
    setSpeaking(true);
    speak(word.word);
    setTimeout(() => setSpeaking(false), 1500);
  };

  return (
    <div
      className="word-card"
      style={{ '--card-accent': CAT_COLORS[word.category] || 'var(--mc-green)' } as React.CSSProperties}
    >
      <button
        className={`speak-btn ${speaking ? 'speaking' : ''}`}
        onClick={handleSpeak}
        title="Click to hear pronunciation"
      >
        🔊
      </button>
      <div className="word-emoji">{word.emoji}</div>
      <div className="word-en" onClick={handleSpeak}>{word.word}</div>
      <div className="word-zh">{word.meaning}</div>
      {word.tip && <div className="word-tip">{word.tip}</div>}
    </div>
  );
}
