import type { Challenge } from "@/lib/game";
import { rankLabel } from "@/lib/game";
import { inr, signed } from "@/lib/format";
import { TRAP_TYPES } from "@/lib/deals";
import type { Stats } from "./Game";
import MuteButton from "./MuteButton";
import Burst from "./Burst";
import css from "./start.module.css";

const TICKER = [
  "74% OFF*",
  "Sirf 2 bache hain!",
  "No Cost EMI*",
  "FREE gift worth ₹999",
  "#1 Bestseller (Sponsored)",
  "Price badhega in 00:59",
  "Exchange pe ₹2,000 off*",
  "Buy 3 get 2 free",
  "Lowest price ever!",
];
const TOTAL_TRICKS = Object.keys(TRAP_TYPES).length;

interface Props {
  stats: Stats;
  challenge: Challenge | null;
  onStart: () => void;
  muted: boolean;
  onToggleMute: () => void;
}

export default function StartScreen({ stats, challenge, onStart, muted, onToggleMute }: Props) {
  return (
    <main className={css.start}>
      <div className="lights" aria-hidden="true">
        <i />
      </div>
      <header className={css.top}>
        <span className={css.chip}>
          <span className={css.dot} /> Festive sale special
        </span>
        <MuteButton muted={muted} onToggle={onToggleMute} />
      </header>

      {challenge && (
        <section className={`paper ${css.ticket}`} aria-label="Challenge">
          <p className={css.ticketKicker}>🥊 Challenge aaya hai</p>
          <p className={css.ticketLine}>
            {challenge.score >= 0 ? (
              <>
                Tumhare dost ne <mark>{inr(challenge.score)}</mark> bachaye. Beat karo!
              </>
            ) : (
              <>
                Tumhara dost <mark>{inr(challenge.score)}</mark> se lut gaya 💀. Beat karo!
              </>
            )}
          </p>
          <p className={css.ticketSub}>
            {[challenge.rank && `Rank: ${rankLabel(challenge.rank)}`, challenge.seed && "Same 12 deals milenge"].filter(Boolean).join(" · ")}
          </p>
        </section>
      )}

      <section className={css.hero}>
        <h1 className={css.title}>
          <span className={css.loot}>Loot liye</span>
          <span className={css.ya}>ya</span>
          <span className={css.lut}>Lut gaye?</span>
        </h1>
        <div className={css.badge} aria-hidden="true">
          <svg viewBox="0 0 100 100">
            <defs>
              <path id="ring" d="M50 50 m-37 0 a37 37 0 1 1 74 0 a37 37 0 1 1 -74 0" />
            </defs>
            <text>
              <textPath href="#ring">60 SECOND GAME ✶ 60 SECOND GAME ✶ </textPath>
            </text>
          </svg>
          <span>⏱</span>
        </div>
        <p className={css.lede}>
          Sale shuru! <b>₹10,000</b> wallet, <b>12 deals</b>, <b>6 second</b> har deal. Asli loot pakdo, jaal se bacho.
        </p>
      </section>

      {!challenge && (
        <div className={css.fan} aria-hidden="true">
          <MiniCard e="🎧" price="₹1,299" pct={74} c1="#FF7AA8" c2="#B8164E" stamp="Jaal" tone="bad" />
          <MiniCard e="🫙" price="₹2,499" pct={38} c1="#7CF5C8" c2="#0E8F7A" stamp="Loot" tone="good" />
          <MiniCard e="⌚" price="₹1,999" pct={71} c1="#B794FF" c2="#5B2BD6" />
        </div>
      )}

      <div className={css.ticker} aria-hidden="true">
        <div className={css.track}>
          {[0, 1].map(k => (
            <span key={k}>
              {TICKER.map(t => (
                <span key={t}>
                  <s>{t}</s> ✶{" "}
                </span>
              ))}
            </span>
          ))}
        </div>
      </div>

      <section className={css.actions}>
        <button type="button" className={`btn btn-lime ${css.cta}`} onClick={onStart}>
          {challenge ? "Challenge accept 🥊" : "Khelo — 60 sec ▶"}
        </button>
        <ul className={css.how}>
          <li>
            <kbd>→</kbd> swipe = Buy
          </li>
          <li>
            <kbd>←</kbd> swipe = Skip
          </li>
          <li>
            <kbd>⏱</kbd> 6s har deal
          </li>
        </ul>
        {(stats.best !== null || stats.played > 0) && (
          <dl className={css.stats}>
            {stats.best !== null && (
              <div>
                <dt>Best</dt>
                <dd>{signed(stats.best)}</dd>
              </div>
            )}
            <div>
              <dt>Tricks</dt>
              <dd>
                {stats.dex.length}/{TOTAL_TRICKS}
              </dd>
            </div>
            <div>
              <dt>Rounds</dt>
              <dd>{stats.played}</dd>
            </div>
          </dl>
        )}
      </section>

      <p className={css.fine}>Sab products aur brands kaalpanik hain. Tricks bilkul asli hain.</p>
    </main>
  );
}

function MiniCard(p: { e: string; price: string; pct: number; c1: string; c2: string; stamp?: string; tone?: "good" | "bad" }) {
  return (
    <div className={css.mini}>
      <div className={css.miniShot} style={{ "--g1": p.c1, "--g2": p.c2 } as React.CSSProperties}>
        <span>{p.e}</span>
        <Burst pct={p.pct} className={css.miniBurst} />
      </div>
      <div className={css.miniInfo}>
        <i />
        <b>{p.price}</b>
      </div>
      {p.stamp && <span className={css.miniStamp} data-tone={p.tone}>{p.stamp}</span>}
    </div>
  );
}
