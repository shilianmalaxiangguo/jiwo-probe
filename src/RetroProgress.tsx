export function RetroProgress({ value, unlimited = false, hot }: { value: number; unlimited?: boolean; hot?: boolean }) {
  const safe = Number.isFinite(value) ? Math.max(0, Math.min(100, value)) : 0
  return <span className="progress" role="progressbar" aria-valuenow={Math.round(safe)} aria-valuemin={0} aria-valuemax={100}>
    <span className={`progress-fill${(hot ?? safe >= 85) ? ' hot' : ''}${unlimited ? ' unlimited' : ''}`} style={{ width: `${unlimited ? 100 : safe}%` }} />
  </span>
}
