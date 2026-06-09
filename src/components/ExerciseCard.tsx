import type { NormalizedExercise } from '../types';
import { useState, useCallback, useEffect } from 'react';
import { isDone, toggleDone as toggleDoneStorage } from '../utils/storage';
import { speak, speakKETListening } from '../utils/tts';

interface CardProps {
  exercise: NormalizedExercise;
  index: number;
}

export default function ExerciseCard({ exercise, index }: CardProps) {
  const done = isDone(exercise.id);
  const [showAnswer, setShowAnswer] = useState(false);
  const [selected, setSelected] = useState<Record<string, number>>({});
  const [matchAnswers, setMatchAnswers] = useState<Record<number, string>>({});
  const [blankAnswers, setBlankAnswers] = useState<Record<number, string>>({});
  const [checked, setChecked] = useState(false);
  const [listenPlaying, setListenPlaying] = useState(false);
  const [listenPlayed, setListenPlayed] = useState(false);

  // Reset state when exercise changes
  useEffect(() => {
    setShowAnswer(false);
    setSelected({});
    setMatchAnswers({});
    setBlankAnswers({});
    setChecked(false);
    setListenPlaying(false);
    setListenPlayed(false);
  }, [exercise.id]);

  const ex = exercise;
  const type = ex.type;

  // ── Helpers ──────────────────────────────────────────
  const labelOf = (idx: number) => String.fromCharCode(65 + idx); // 0→A

  const handleCheck = useCallback(() => {
    setChecked(true);
    setShowAnswer(true);
  }, []);

  const handleReset = useCallback(() => {
    setSelected({});
    setMatchAnswers({});
    setBlankAnswers({});
    setChecked(false);
    setShowAnswer(false);
  }, []);

  // ── Render passage (Part 1 / 3) ───────────────────
  const renderPassage = () => {
    if (!ex.passage) return null;
    const cls = type === 'Part 1' ? 'passage-sign' : 'passage-diary';
    return (
      <div className={cls}>
        {ex.passage.split('\n').map((line, i) =>
          line === '' ? <br key={i} /> : <p key={i} style={{ margin: '0 0 0.4em 0' }}>{line}</p>
        )}
      </div>
    );
  };

  // ── Render cloze text (Part 4 / 5) ───────────────
  const renderCloze = () => {
    if (!ex.clozeText) return null;
    const isP4 = type === 'Part 4';
    const parts = ex.clozeText.split(/(\(\d+\)\[____\])/g);

    return (
      <div className={isP4 ? 'mcq-cloze-passage' : 'cloze-passage'}>
        {parts.map((part, pi) => {
          const m = part.match(/\((\d+)\)\[____\]/);
          if (m) {
            const blankId = parseInt(m[1]);
            const blank = ex.blanks?.find(b => b.id === blankId);
            const val = blankAnswers[blankId] || '';
            const blankCorrect = blank?.correct || blank?.answer || '';
            const isCorrect = checked && val.toLowerCase().trim() === blankCorrect.toLowerCase().trim();
            const isWrong = checked && val && !isCorrect;
            const cls = isCorrect ? 'correct' : isWrong ? 'wrong' : '';

            if (isP4 && blank?.options) {
              return (
                <select
                  key={pi}
                  className={`mcq-cloze-select ${cls}`}
                  value={val}
                  onChange={e => setBlankAnswers(prev => ({ ...prev, [blankId]: e.target.value }))}
                  disabled={checked}
                >
                  <option value="">...</option>
                  {blank.options.map((opt, oi) => (
                    <option key={oi} value={opt}>{labelOf(oi)}. {opt}</option>
                  ))}
                </select>
              );
            } else {
              return (
                <input
                  key={pi}
                  type="text"
                  className={`cloze-input ${cls}`}
                  value={val}
                  onChange={e => setBlankAnswers(prev => ({ ...prev, [blankId]: e.target.value }))}
                  disabled={checked}
                  style={{ width: '76px', margin: '0 2px' }}
                />
              );
            }
          }
          return <span key={pi}>{part}</span>;
        })}
      </div>
    );
  };

  // ── Render questions (Part 1 / 3) ────────────────
  const renderQuestions = () => {
    if (!ex.questions) return null;
    return (
      <div className="questions-section">
        {ex.questions.map((q, qi) => {
          const sel = selected[q.id];
          return (
            <div key={q.id} className="question-block">
              <div className="question-text">{qi + 1}. {q.text}</div>
              <div className="options">
                {q.options.map((opt, oi) => {
                  const isSel = sel === oi;
                  let cls = 'option-btn';
                  if (checked) {
                    if (oi === q.correct) cls += ' correct';
                    else if (isSel) cls += ' wrong';
                  } else if (isSel) cls += ' selected';
                  return (
                    <button
                      key={oi}
                      className={cls}
                      onClick={() => !checked && setSelected(prev => ({ ...prev, [q.id]: oi }))}
                      disabled={checked}
                    >
                      <span className="opt-label">{labelOf(oi)}</span>
                      <span>{opt}</span>
                    </button>
                  );
                })}
              </div>
            </div>
          );
        })}
      </div>
    );
  };

  // ── Render matching (Part 2) ──────────────────────
  const renderMatching = () => {
    if (!ex.players || !ex.items) return null;
    const shuffled = [...ex.items].sort(() => Math.random() - 0.5);
    return (
      <>
        <div className="passage-matching">
          <div className="passage-matching-label">🔗 Match each player with the correct item:</div>
          {ex.players.map(p => (
            <div key={p.id} className="item-card">
              <div className="item-card-head">
                <span className="item-label">{labelOf(p.id - 1)}</span>
                <span className="item-name">{p.name}</span>
              </div>
              <div className="item-desc">{p.desc}</div>
            </div>
          ))}
        </div>
        <div className="match-players-header">Select the correct item for each player:</div>
        {ex.players.map(p => {
          const val = matchAnswers[p.id] || '';
          const correctLabel = ex.correctMatching?.[p.id] || '';
          const isCorrect = checked && val === correctLabel;
          const isWrong = checked && val && !isCorrect;
          const cls = isCorrect ? 'correct' : isWrong ? 'wrong' : '';
          return (
            <div key={p.id} className="match-row">
              <div className="match-player">
                <strong>{labelOf(p.id - 1)}</strong> {p.name}: {p.desc}
              </div>
              <select
                className={`match-select ${cls}`}
                value={val}
                onChange={e => !checked && setMatchAnswers(prev => ({ ...prev, [p.id]: e.target.value }))}
                disabled={checked}
              >
                <option value="">-- choose --</option>
                {shuffled.map(item => (
                  <option key={item.label} value={item.label}>{item.label}. {item.name}</option>
                ))}
              </select>
            </div>
          );
        })}
      </>
    );
  };

  // ── Render listening (Listening) ──────────────────
  const handleListenPlay = useCallback(() => {
    if (listenPlaying) {
      window.speechSynthesis.cancel();
      setListenPlaying(false);
      return;
    }
    if (!ex.audioText) return;
    setListenPlaying(true);
    setListenPlayed(true);

    speakKETListening(ex.audioText).then(() => {
      setListenPlaying(false);
    });
  }, [listenPlaying, ex.audioText]);

  const renderListening = () => {
    if (!ex.audioText) return null;
    return (
      <div className="listen-area">
        <div className="listen-icon">🎧</div>
        <div className="listen-instruction">
          {!listenPlayed
            ? 'You will hear the recording. Listen carefully, then answer the questions.'
            : 'You can listen again. Click Replay if you need to hear the recording a second time.'}
        </div>
        <button
          className={`listen-play-btn ${listenPlaying ? 'playing' : ''} ${listenPlayed ? 'played' : ''}`}
          onClick={handleListenPlay}
        >
          {listenPlaying ? (
            <>
              <span className="listen-spinner" />
              <span>Playing...</span>
            </>
          ) : listenPlayed ? (
            <>
              <span>🔄</span>
              <span>Replay Audio</span>
            </>
          ) : (
            <>
              <span>🔊</span>
              <span>Play Audio</span>
            </>
          )}
        </button>
        {renderQuestions()}
      </div>
    );
  };

  // ── Render answer section ───────────────────────────
  const renderAnswer = () => {
    if (!showAnswer) return null;
    return (
      <div className="answer-section">
        <div className="answer-content visible">
          {type === 'Listening' && ex.passage && (
            <div className="listen-transcript">
              <div className="transcript-label">📝 Transcript</div>
              <div className="transcript-text">
                {ex.passage.split('\n').map((line, i) =>
                  line === '' ? <br key={i} /> : <p key={i} style={{ margin: '0 0 0.4em 0' }}>{line}</p>
                )}
              </div>
            </div>
          )}
          {ex.answers.map(a => (
            <div key={a.id} className="answer-item">
              <div className="answer-q">Q{a.id} Answer: <span className="answer-val">{a.answer}</span></div>
              <div className="answer-why">{a.explanation}</div>
            </div>
          ))}
          {ex.vocabulary && ex.vocabulary.length > 0 && (
            <div className="vocab-section">
              <div className="vocab-header">📚 Vocabulary</div>
              <div className="vocab-grid">
                {ex.vocabulary.map((v, vi) => (
                  <div key={vi} className="vocab-item">
                    <span className="v-word" onClick={() => speak(v.word)} style={{ cursor: 'pointer' }}>{v.word}</span>
                    <span className="v-pos">{v.pos}</span>
                    <span className="v-zh">{v.meaning}</span>
                    <span className="v-ctx">{v.gameContext}</span>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    );
  };

  // ── Card classes ───────────────────────────────────
  const cardCls = ['exercise-card', done ? 'done' : '', checked ? 'checked' : ''].filter(Boolean).join(' ');

  return (
    <div className={cardCls} style={{ animationDelay: `${index * 0.04}s` }}>
      {/* Header */}
      <div className="card-header">
        <div className="card-icon-wrap" style={{ color: ex.typeColor }}>{type === 'Part 1' ? '📋' : type === 'Part 2' ? '🔗' : type === 'Part 3' ? '📖' : type === 'Part 4' ? '✏️' : type === 'Listening' ? '🎧' : '✏️'}</div>
        <div className="card-meta">
          <div className="card-title">
            {ex.title}
            <span className="ex-id">{ex.id}</span>
          </div>
          <div className="card-tags">
            <span className="tag tag-cat">{ex.categoryZh}</span>
            <span className={`tag tag-${ex.type.replace(' ', '').toLowerCase()}`}>{ex.typeShort}</span>
            {done && <span className="tag tag-done">✅ 已完成</span>}
          </div>
        </div>
      </div>

      {/* Body */}
      <div className="card-body">
        {/* Part 1 & 3: passage + questions */}
        {(type === 'Part 1' || type === 'Part 3') && (
          <>
            {renderPassage()}
            {renderQuestions()}
          </>
        )}

        {/* Part 2: matching */}
        {type === 'Part 2' && (
          <>
            {renderMatching()}
          </>
        )}

        {/* Part 4: MCQ cloze */}
        {type === 'Part 4' && renderCloze()}

        {/* Part 5: open cloze */}
        {type === 'Part 5' && renderCloze()}

        {/* Listening: audio player + hidden passage + questions */}
        {type === 'Listening' && renderListening()}
      </div>

      {/* Answer */}
      <div style={{ padding: '0 16px' }}>
        <button className={`answer-toggle ${showAnswer ? 'open' : ''}`} onClick={() => setShowAnswer(!showAnswer)}>
          🔑 Answer & Vocabulary
          <span className="toggle-arrow">{showAnswer ? '▲' : '▼'}</span>
        </button>
        {renderAnswer()}
      </div>

      {/* Footer */}
      <div className="card-footer">
        <button className="btn btn-check" onClick={handleCheck} disabled={checked}>
          ✅ Check Answer
        </button>
        <button className="btn btn-reset" onClick={handleReset}>
          🔄 Reset
        </button>
        {done && <span style={{ color: 'var(--mc-green)', fontSize: '0.75rem', marginLeft: 'auto' }}>✅ Completed</span>}
      </div>
    </div>
  );
}
