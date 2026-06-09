import { Link, Outlet, useLocation } from 'react-router-dom';
import { exerciseCount } from '../data';
import { getDoneSet } from '../utils/storage';
import { useEffect, useState } from 'react';
import { useI18n } from '../i18n';

export default function Layout() {
  const { t } = useI18n();
  const [doneCount, setDoneCount] = useState(0);
  const location = useLocation();
  const isGlossary = location.pathname === '/glossary';

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
          <span className="badge">🌏 Cross-Platform</span>
        </div>

        {/* ── Tab Navigation ── */}
        <nav className="header-tabs">
          <Link
            to="/"
            className={`header-tab ${!isGlossary ? 'active' : ''}`}
          >
            {t('layout.tabKET')}
          </Link>
          <Link
            to="/glossary"
            className={`header-tab ${isGlossary ? 'active' : ''}`}
          >
            {t('layout.tabGlossary')}
          </Link>
        </nav>
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
