/** The bare Kundli diamond (no data, no JS) for decorative teasers */
export function KundliOutline({ className, label = "₹ ?" }: { className?: string; label?: string }) {
  return (
    <svg viewBox="0 0 420 420" className={className} aria-hidden>
      <defs>
        <radialGradient id="ko-glow" cx="50%" cy="50%" r="60%">
          <stop offset="0%" stopColor="#F5B83D" stopOpacity="0.28" />
          <stop offset="100%" stopColor="#F5B83D" stopOpacity="0" />
        </radialGradient>
      </defs>
      <rect x="10" y="10" width="400" height="400" fill="url(#ko-glow)" />
      <g fill="none" stroke="#F5B83D" strokeLinejoin="round">
        <path d="M10 10H410V410H10Z" strokeWidth="2.5" />
        <path d="M10 10L410 410M410 10L10 410M210 10L410 210L210 410L10 210Z" strokeWidth="1.75" />
      </g>
      <circle cx="210" cy="210" r="60" fill="#0B0D17" stroke="#F5B83D" strokeWidth="2" />
      <text x="210" y="219" textAnchor="middle" fontSize="26" fontWeight="800" fill="#F8CB6B">
        {label}
      </text>
    </svg>
  );
}
