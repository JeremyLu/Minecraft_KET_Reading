interface Props {
  done: number;
  total: number;
}

export default function ProgressBar({ done, total }: Props) {
  const pct = total > 0 ? (done / total) * 100 : 0;
  return (
    <div className="progress-row">
      <span className="progress-label">进度</span>
      <div className="progress-track">
        <div id="progress-bar" style={{ width: `${pct}%` }} />
      </div>
      <span className="score-label">{done}/{total} ({Math.round(pct)}%)</span>
    </div>
  );
}
