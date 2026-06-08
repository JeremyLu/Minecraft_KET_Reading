import { Link, Outlet } from 'react-router-dom';
import { exerciseCount } from '../data';
import { getDoneSet } from '../utils/storage';
import { useEffect, useState } from 'react';

export default function Layout() {
  const [doneCount, setDoneCount] = useState(0);

  useEffect(() => {
    setDoneCount(getDoneSet().size);
    const onStorage = () => setDoneCount(getDoneSet().size);
    window.addEventListener('storage', onStorage);
    return () => window.removeEventListener('storage', onStorage);
  }, []);

  return (
    <>
      <header>
        <div className="header-eyebrow">⬜ Bedrock Edition × Cambridge A2</div>
        <h1>Minecraft KET Reading</h1>
        <p className="header-sub">
          Angle's English Adventure — Build your vocabulary block by block
        </p>
        <div className="badge-row">
          <span className="badge green">{doneCount}/{exerciseCount} Exercises</span>
          <span className="badge">📚 KET A2 Level</span>
          <span className="badge">🎮 Bedrock Edition</span>
          <Link
            to="/glossary"
            className="badge"
            style={{ textDecoration: 'none', cursor: 'pointer' }}
          >
            📖 词汇大全
          </Link>
          <span className="badge">🌏 Cross-Platform</span>
        </div>
      </header>

      <Outlet />

      <footer
        style={{
          textAlign: 'center',
          padding: '32px 24px 48px',
          color: 'var(--text-muted)',
          fontSize: '0.78rem',
        }}
      >
        Minecraft KET Reading — Made for Angle 💚
      </footer>
    </>
  );
}
