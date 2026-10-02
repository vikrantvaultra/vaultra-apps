"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { TRAP_TYPES, type TrapType } from "@/lib/deals";
import { GRID_EMOJI, RANKS, nextGoal, rankLabel, type Challenge, type Summary } from "@/lib/game";
import { inr, signed } from "@/lib/format";
import { countUp } from "@/lib/fx";
import { renderShareCard } from "@/lib/sharecard";
import { trackEvent } from "@/lib/analytics";
import { display, mono, text } from "@/app/fonts";
import type { Round, Stats } from "./Game";
import MuteButton from "./MuteButton";
import css from "./result.module.css";

interface Props {
  round: Round;
  summary: Summary;
  stats: Stats;
  newBest: boolean;
  challenge: Challenge | null;
  siteUrl: string;
  muted: boolean;
  onToggleMute: () => void;
  onReplay: () => void;
}

const ROW: Record<string, string> = { loot: "good", dodge: "dim", trap: "bad", miss: "meh" };

export default function ResultScreen({ round, summary: s, stats, newBest, challenge, siteUrl, muted, onToggleMute, onReplay }: Props) {
  const scoreRef = useRef<HTMLElement>(null);
  const [open, setOpen] = useState(false);
  const [toast, setToast] = useState("");
  const [file, setFile] = useState<File | null>(null);
  const [preview, setPreview] = useState<string | null>(null);
  const [date] = useState(() =>
    new Date().toLocaleString("en-IN", { day: "2-digit", month: "short", hour: "2-digit", minute: "2-digit", hour12: false })
  );
  const goal = nextGoal(s);
  const gridTxt = round.picks.map(p => GRID_EMOJI[p.outcome]).join("");
  const rank = RANKS[s.rank];

  // The result screen only ever renders in the browser (after a round), so `window` is safe here.
  const base = useMemo(() => {
    const local = /^(localhost|127\.|192\.168\.|10\.|\[::1\])/.test(window.location.hostname);
    return local ? siteUrl : window.location.origin;
  }, [siteUrl]);
  const shareUrl = useMemo(() => {
    const u = new URL("/c", base);
    u.searchParams.set("s", String(Math.round(s.score)));
    u.searchParams.set("r", s.rank);
    u.searchParams.set("d", round.seed);
    return u.toString();
  }, [base, s, round.seed]);

  // story card
  useEffect(() => {

    let url: string | null = null;
    let cancelled = false;
    renderShareCard({
      win: s.win,
      rankTitle: rankLabel(s.rank),
      score: s.score,
      claimed: s.claimed,
      traps: s.traps,
      missed: s.missed,
      streak: s.maxStreak,
      grid: round.picks.map(p => p.outcome),
      host: new URL(base).host.replace(/^www\./, ""),
      seed: round.seed,
      date,
      fonts: { display: display.style.fontFamily, text: text.style.fontFamily, mono: mono.style.fontFamily },
    }).then(blob => {
      if (!blob || cancelled) return;
      url = URL.createObjectURL(blob);
      setFile(new File([blob], "loot-liye-ya-lut-gaye.png", { type: "image/png" }));
      setPreview(url);
    });
    return () => {
      cancelled = true;
      if (url) URL.revokeObjectURL(url);
    };
  }, [round, s, base, date]);

  useEffect(() => {
    if (challenge) trackEvent("challenge_result", { beat: s.score > challenge.score });
  }, [challenge, s.score]);

  // receipt "prints", then the total counts up
  useEffect(() => {
    const t = setTimeout(() => countUp(s.score, n => scoreRef.current && (scoreRef.current.textContent = signed(n)), 900), 650);
    return () => clearTimeout(t);
  }, [s.score]);

  const shareText = () =>
    `${s.win ? "LOOT LIYE 😎" : "LUT GAYE 💀"} | Loot Liye Ya Lut Gaye? 🛒\n${gridTxt}\n` +
    `Sale ne bola maine ${inr(s.claimed)} bachaye. Asli bachat: ${signed(s.score)}\n` +
    `Jaal mein fasa: ${s.traps} baar. Rank: ${rankLabel(s.rank)}\n` +
    `Same 12 deals pe mujhe beat karke dikhao 👇\n${shareUrl}`;

  const download = () => {
    if (!preview) return;
    const a = document.createElement("a");
    a.href = preview;
    a.download = "loot-liye-ya-lut-gaye.png";
    document.body.appendChild(a);
    a.click();
    a.remove();
    setToast("Image download ho gayi. Story pe daalo, link sticker mein game ka link! 📲");
  };

  const shareImage = async () => {
    if (!file) {
      setToast("Card ban raha hai… ek second 🎨");
      return;
    }
    // Phones get the native share sheet (Instagram / WhatsApp); desktops download the PNG.
    const touch = window.matchMedia("(pointer: coarse)").matches;
    if (touch && navigator.canShare?.({ files: [file] })) {
      trackEvent("share_click", { method: "image" });
      try {
        await navigator.share({ files: [file], title: "Loot Liye Ya Lut Gaye?", text: shareText() });
        setToast("Shabaash! Ab dekhte hain kaun beat karta hai 😏");
      } catch (e) {
        if ((e as Error)?.name !== "AbortError") download();
      }
      return;
    }
    trackEvent("share_click", { method: "download" });
    download();
  };

  const copyLink = async () => {
    trackEvent("share_click", { method: "link" });
    try {
      await navigator.clipboard.writeText(shareText());
      setToast("Copy ho gaya! Kahin bhi paste karo 📋");
    } catch {
      setToast(shareUrl);
    }
  };

  const beat = challenge ? s.score > challenge.score : false;
  const tie = challenge ? s.score === challenge.score : false;

  return (
    <main className={css.result}>
      <div className="lights" aria-hidden="true">
        <i />
      </div>
      <header className={css.top}>
        <p className={css.kicker}>🧾 Tumhara bill aa gaya</p>
        <MuteButton muted={muted} onToggle={onToggleMute} />
      </header>

      {/* ── the receipt ── */}
      <div className={css.printer}>
        <div className={css.slot} aria-hidden="true" />
        <div className={css.clip}>
          <article className={`paper ${css.receipt}`} aria-labelledby="verdict">
            <header className={css.rcHead}>
              <b>Sach ka bill</b>
              <span>
                Order #{round.seed.toUpperCase()} · {date}
              </span>
            </header>
            <p className={css.rcLabel}>Asli bachat</p>
            <b className={css.total} data-tone={s.score >= 0 ? "good" : "bad"} ref={scoreRef}>
              {signed(0)}
            </b>
            <p className={css.claim}>
              Sale ka daava: <s>{inr(s.claimed)}</s> bachat 🤡
            </p>

            <div className={css.stampZone}>
              <h1 id="verdict" className={`ink ${css.stamp}`} data-tone={s.win ? "good" : "bad"}>
                {s.win ? "Loot liye 😎" : "Lut gaye 💀"}
              </h1>
            </div>

            <dl className={css.rcStats}>
              <div>
                <dt>Jaal mein fase</dt>
                <dd>{s.traps}</dd>
              </div>
              <div>
                <dt>Asli deals chhoote</dt>
                <dd>{s.missed}</dd>
              </div>
              <div>
                <dt>Best streak</dt>
                <dd>🔥 {s.maxStreak}</dd>
              </div>
            </dl>

            <div className={css.grid} role="img" aria-label={`${round.picks.filter(p => p.outcome === "loot" || p.outcome === "dodge").length} sahi faisle, ${s.traps} jaal, ${s.missed} chhoote`}>
              {round.picks.map((p, i) => (
                <i key={i} data-o={p.outcome} style={{ animationDelay: `${0.9 + i * 0.05}s` }} />
              ))}
            </div>

            <button type="button" className={css.toggle} aria-expanded={open} onClick={() => setOpen(o => !o)}>
              {open ? "Bill band karo ▴" : `Pura bill dekho (${round.picks.length} items) ▾`}
            </button>
            {open && (
              <ul className={css.items}>
                {round.picks.map((p, i) => (
                  <li key={i} data-tone={ROW[p.outcome]}>
                    <span className={css.itemName}>
                      <span aria-hidden="true">{p.card.e}</span> {p.card.n}
                      {p.outcome === "trap" && <small>🪤 {p.card.trick}</small>}
                    </span>
                    <span className={css.itemVal}>
                      {p.outcome === "loot" || p.outcome === "trap"
                        ? signed(p.gain)
                        : p.outcome === "dodge"
                          ? "bach gaye ✓"
                          : `chhoota ${inr(p.card.v - p.card.p)}`}
                    </span>
                  </li>
                ))}
              </ul>
            )}
            <p className={css.thanks}>Dhanyavaad! Phir aana 🙏</p>
          </article>
        </div>
      </div>

      {/* ── rank + next goal ── */}
      <section className={css.rank}>
        <span className={css.rankEmoji} aria-hidden="true">
          {rank.emoji}
        </span>
        <div>
          <p className={css.rankKicker}>Tumhara rank</p>
          <h2 className={css.rankTitle}>{rank.title}</h2>
          {s.rank === "darpok" && <p className={css.rankSub}>Kuch liya hi nahi</p>}
        </div>
        <div className={css.goal}>
          <div className={css.goalHead}>
            <span>Agla target</span>
            <b>{goal.label}</b>
          </div>
          <div className={css.bar}>
            <i style={{ "--p": goal.progress } as React.CSSProperties} />
          </div>
          <p>{goal.hint}</p>
        </div>
      </section>

      {challenge && (
        <section className={css.versus} data-r={beat ? "won" : tie ? "tie" : "lost"}>
          <div>
            <small>Dost</small>
            <b>{signed(challenge.score)}</b>
          </div>
          <span aria-hidden="true">{beat ? "🏆" : tie ? "🤝" : "😤"}</span>
          <div>
            <small>Tum</small>
            <b>{signed(s.score)}</b>
          </div>
          <p>
            {beat ? "Dost ko hara diya! Ab usko bata do 😏" : tie ? "Barabar! Ek aur round?" : "Dost aage hai. Ek aur try?"}
            {!round.fromChallenge && <small> (alag deals)</small>}
          </p>
        </section>
      )}

      {s.fell.length > 0 && (
        <section className={css.block}>
          <h3>Tum in tricks mein fase</h3>
          <div className={css.chips}>
            {s.fell.map(t => (
              <span key={t} className={css.chip}>
                {t}
              </span>
            ))}
          </div>
        </section>
      )}

      <section className={css.block}>
        <h3>
          Trick collection <b>{stats.dex.length}/10</b> <small>skip karke pakdo</small>
        </h3>
        <ul className={css.album}>
          {(Object.keys(TRAP_TYPES) as TrapType[]).map(k => {
            const got = stats.dex.includes(k);
            return (
              <li key={k} data-got={got || undefined}>
                <span aria-hidden="true">{got ? TRAP_TYPES[k].icon : "?"}</span>
                <small>{got ? TRAP_TYPES[k].label : "Locked"}</small>
              </li>
            );
          })}
        </ul>
      </section>

      {preview && (
        <figure className={css.preview}>
          {/* eslint-disable-next-line @next/next/no-img-element -- local blob URL */}
          <img src={preview} alt="Tumhara story share card" width={1080} height={1920} />
          <figcaption>Story card ready ✨</figcaption>
        </figure>
      )}

      <footer className={css.foot}>
        <button type="button" className={css.link} onClick={copyLink}>
          Challenge link copy karo 🔗
        </button>
        <p>{newBest ? "Naya personal best! 🎉" : stats.best !== null ? `Tumhara best: ${signed(stats.best)}` : ""}</p>
        <p>Sab products aur brands kaalpanik hain. Tricks bilkul asli hain.</p>
      </footer>

      {/* ── sticky actions ── */}
      <div className={css.dock}>
        <p className={css.toast} role="status">
          {toast}
        </p>
        <button type="button" className={`btn btn-lime ${css.share}`} onClick={shareImage}>
          📸 Story pe daalo
        </button>
        <div className={css.row}>
          <a
            className={`btn btn-wa ${css.small}`}
            href={`https://wa.me/?text=${encodeURIComponent(shareText())}`}
            target="_blank"
            rel="noopener"
            onClick={() => trackEvent("share_click", { method: "whatsapp" })}
          >
            💬 WhatsApp
          </a>
          <button type="button" className={`btn btn-ghost ${css.small}`} onClick={onReplay}>
            ↻ Phir khelo
          </button>
        </div>
      </div>
    </main>
  );
}
