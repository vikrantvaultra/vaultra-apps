// Starburst "% OFF" sticker — the loudest thing on every sale card.
const POINTS = (() => {
  const pts: string[] = [];
  const n = 18;
  for (let i = 0; i < n * 2; i++) {
    const r = i % 2 ? 41 : 50;
    const a = (Math.PI * i) / n - Math.PI / 2;
    pts.push(`${(50 + r * Math.cos(a)).toFixed(1)},${(50 + r * Math.sin(a)).toFixed(1)}`);
  }
  return pts.join(" ");
})();

export default function Burst({ pct, className }: { pct: number; className?: string }) {
  return (
    <div className={className} aria-hidden="true">
      <svg viewBox="0 0 100 100">
        <polygon points={POINTS} />
      </svg>
      <span>
        <b>{pct}%</b>
        <small>OFF</small>
      </span>
    </div>
  );
}
