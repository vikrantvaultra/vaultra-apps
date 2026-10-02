"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { TRAP_TYPES, type TrapType } from "@/lib/deals";
import {
  BUDGET, DEAL_MS, REVEAL_MS, buildDeck, costOf, isCorrect, parseChallenge, resolve, summarize,
  type Action, type Card, type Challenge, type Pick, type Summary,
} from "@/lib/game";
import { newSeed } from "@/lib/rng";
import { load, save } from "@/lib/storage";
import { buzz, setMuted, sfx } from "@/lib/audio";
import { burst, confetti, floatText, reducedMotion, shake } from "@/lib/fx";
import { inr, pctOff, signed } from "@/lib/format";
import { trackEvent } from "@/lib/analytics";
import StartScreen from "./StartScreen";
import PlayScreen from "./PlayScreen";
import ResultScreen from "./ResultScreen";

export type Phase = "start" | "countdown" | "deal" | "reveal" | "result";

export interface Round {
  seed: string;
  deck: Card[];
  picks: Pick[];
  idx: number;
  wallet: number;
  streak: number;
  fromChallenge: boolean;
  newTrick: TrapType | null;
}

export interface Stats {
  played: number;
  best: number | null;
  maxStreak: number;
  dex: TrapType[];
}

const STATS_KEY = "lylg:stats";
const MUTE_KEY = "lylg:muted";
const EMPTY_STATS: Stats = { played: 0, best: null, maxStreak: 0, dex: [] };
const STREAK_CALLOUTS: Record<number, string> = { 3: "Hat-trick! 🔥", 5: "Rukna mana hai!", 8: "Sale ka baap!", 12: "Perfect 12! 🏆" };
const COUNTDOWN = ["3", "2", "1", "Sale LIVE!"];

export default function Game({ initialChallenge = null, siteUrl }: { initialChallenge?: Challenge | null; siteUrl: string }) {
  const [phase, setPhaseState] = useState<Phase>("start");
  const [round, setRoundState] = useState<Round | null>(null);
  const [challenge, setChallenge] = useState<Challenge | null>(initialChallenge);
  const [stats, setStats] = useState<Stats>(EMPTY_STATS);
  const [muted, setMutedState] = useState(true);
  const [cdStep, setCdStep] = useState(0);
  const [leaving, setLeaving] = useState<"left" | "right" | null>(null);
  const [summary, setSummary] = useState<Summary | null>(null);
  const [newBest, setNewBest] = useState(false);
  const [live, setLive] = useState("");

  // refs mirror state so timers / key handlers never read stale values
  const phaseRef = useRef<Phase>("start");
  const roundRef = useRef<Round | null>(null);
  const statsRef = useRef<Stats>(EMPTY_STATS);
  const challengePending = useRef(!!initialChallenge?.seed);
  const advancing = useRef(false);
  const decidedAt = useRef(0);

  // DOM handles for the per-frame timer and the juice effects
  const barRef = useRef<HTMLElement>(null);
  const secRef = useRef<HTMLElement>(null);
  const cardRef = useRef<HTMLDivElement>(null);
  const walletRef = useRef<HTMLDivElement>(null);
  const stageRef = useRef<HTMLDivElement>(null);
  const appRef = useRef<HTMLDivElement>(null);

  const setPhase = (p: Phase) => {
    phaseRef.current = p;
    setPhaseState(p);
  };
  const setRound = (r: Round | null) => {
    roundRef.current = r;
    setRoundState(r);
  };
  const updateStats = (s: Stats) => {
    statsRef.current = s;
    setStats(s);
    save(STATS_KEY, s);
  };

  // ── mount: restore stats + mute pref, read ?s=&r=&d= on the home page ────
  // Restoring saved prefs must happen after hydration (localStorage isn't available on the server).
  /* eslint-disable react-hooks/set-state-in-effect */
  useEffect(() => {
    const s = { ...EMPTY_STATS, ...load<Partial<Stats>>(STATS_KEY, {}) };
    statsRef.current = s;
    setStats(s);
    const m = load(MUTE_KEY, true); // muted by default on first load
    setMutedState(m);
    setMuted(m, false);
    let c = initialChallenge;
    if (!c) {
      c = parseChallenge(new URLSearchParams(window.location.search));
      if (c) {
        setChallenge(c);
        challengePending.current = !!c.seed;
      }
    }
    if (c) trackEvent("challenge_open", { has_seed: !!c.seed });
  }, [initialChallenge]);
  /* eslint-enable react-hooks/set-state-in-effect */

  const toggleMute = useCallback(() => {
    setMutedState(m => {
      const next = !m;
      save(MUTE_KEY, next);
      setMuted(next);
      if (!next) sfx.dodge();
      return next;
    });
  }, []);

  // ── start a round ────────────────────────────────────────────────────────
  const start = useCallback(() => {
    const fromChallenge = challengePending.current && !!challenge?.seed;
    challengePending.current = false;
    const seed = fromChallenge && challenge?.seed ? challenge.seed : newSeed();
    setRound({ seed, deck: buildDeck(seed), picks: [], idx: 0, wallet: BUDGET, streak: 0, fromChallenge, newTrick: null });
    setSummary(null);
    setLeaving(null);
    advancing.current = false;
    setCdStep(0);
    setPhase("countdown");
    window.scrollTo(0, 0);
    trackEvent("game_start", { mode: challenge ? "challenge" : "solo", replay: statsRef.current.played > 0 });
  }, [challenge]);

  // ── 3-2-1 countdown ──────────────────────────────────────────────────────
  useEffect(() => {
    if (phase !== "countdown") return;
    sfx.count(cdStep === COUNTDOWN.length - 1);
    const t = setTimeout(
      () => {
        if (cdStep < COUNTDOWN.length - 1) setCdStep(cdStep + 1);
        else setPhase("deal");
      },
      cdStep === COUNTDOWN.length - 1 ? 650 : 430
    );
    return () => clearTimeout(t);
  }, [phase, cdStep]);

  // ── decide: buy / skip / timeout ─────────────────────────────────────────
  const decide = useCallback((action: Action) => {
    const r = roundRef.current;
    if (phaseRef.current !== "deal" || !r) return;
    const card = r.deck[r.idx];
    if (action === "buy" && costOf(card) > r.wallet) {
      floatText(cardRef.current, "Paise kam hain 💸", "bad");
      buzz(60);
      return;
    }
    const pick = resolve(card, action);
    const streak = isCorrect(pick.outcome) ? r.streak + 1 : 0;

    let newTrick: TrapType | null = null;
    const st = statsRef.current;
    if (pick.outcome === "dodge" && action === "skip" && card.type && !st.dex.includes(card.type)) {
      newTrick = card.type;
      updateStats({ ...st, dex: [...st.dex, card.type] });
    }

    setRound({ ...r, picks: [...r.picks, pick], wallet: r.wallet - pick.paid, streak, newTrick });
    decidedAt.current = performance.now();
    setPhase("reveal");

    // juice
    const el = cardRef.current;
    if (pick.outcome === "loot") {
      sfx.buy(streak);
      burst(el, ["🪙", "💰", "✨"], 14);
      floatText(walletRef.current, signed(pick.gain), "good");
      buzz(20);
    } else if (pick.outcome === "trap") {
      sfx.trap();
      shake(appRef.current, 12);
      floatText(walletRef.current, signed(pick.gain), "bad");
      buzz([40, 60, 40]);
    } else if (pick.outcome === "dodge") {
      sfx.dodge(streak);
      burst(el, ["🛡️", "✨"], 8);
      buzz(15);
    } else {
      sfx.miss();
      buzz(30);
    }
    setTimeout(() => sfx.flip(), 120);
    if (STREAK_CALLOUTS[streak]) floatText(stageRef.current, STREAK_CALLOUTS[streak], "callout");

    const label =
      pick.outcome === "loot" ? "Asli loot!" : pick.outcome === "trap" ? `Jaal! ${card.trick}.` : pick.outcome === "dodge" ? "Bach gaye!" : "Chhoot gaya.";
    setLive(`${label} ${card.why} ${pick.action === "buy" ? signed(pick.gain) : ""}`);
  }, []);

  // ── per-deal timer (rAF, pauses while the tab is hidden) ─────────────────
  const idx = round?.idx ?? 0;
  useEffect(() => {
    if (phase !== "deal") return;
    const r = roundRef.current;
    if (r) {
      const c = r.deck[r.idx];
      setLive(`Deal ${r.idx + 1} of 12: ${c.n}. ${inr(c.p)}, MRP ${inr(c.m)}, ${pctOff(c.p, c.m)}% off. ${c.b}.`);
    }
    let start = performance.now();
    let pausedAt = 0;
    let lastSec = 7;
    let raf = 0;
    const cardEl = cardRef.current;
    const tick = (now: number) => {
      const left = Math.max(0, DEAL_MS - (now - start));
      const k = left / DEAL_MS;
      if (barRef.current) barRef.current.style.transform = `scaleX(${k})`;
      const sec = Math.ceil(left / 1000);
      if (sec !== lastSec) {
        lastSec = sec;
        if (secRef.current) secRef.current.textContent = String(sec);
        if (sec <= 2 && sec >= 1) {
          sfx.tick();
          cardRef.current?.setAttribute("data-hurry", "");
        }
      }
      if (left <= 0) return decide("timeout");
      raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    const onVis = () => {
      if (document.hidden) {
        pausedAt = performance.now();
        cancelAnimationFrame(raf);
      } else if (pausedAt) {
        start += performance.now() - pausedAt;
        pausedAt = 0;
        raf = requestAnimationFrame(tick);
      }
    };
    document.addEventListener("visibilitychange", onVis);
    return () => {
      cancelAnimationFrame(raf);
      document.removeEventListener("visibilitychange", onVis);
      cardEl?.removeAttribute("data-hurry");
    };
  }, [phase, idx, decide]);

  // ── finish ───────────────────────────────────────────────────────────────
  const finish = useCallback((r: Round) => {
    const s = summarize(r.picks);
    const st = statsRef.current;
    const isBest = st.best === null || s.score > st.best;
    updateStats({ ...st, played: st.played + 1, best: isBest ? s.score : st.best, maxStreak: Math.max(st.maxStreak, s.maxStreak) });
    setNewBest(isBest);
    setSummary(s);
    setPhase("result");
    window.scrollTo(0, 0);
    if (s.win) {
      sfx.win();
      setTimeout(() => confetti(), 1100);
      buzz([30, 40, 30, 40, 80]);
    } else {
      sfx.lose();
      buzz(120);
    }
    setLive(`${s.win ? "Loot liye!" : "Lut gaye!"} Asli bachat ${signed(s.score)}.`);
    trackEvent("game_complete", { verdict: s.win ? "loot_liye" : "lut_gaye", rank: s.rank, traps: s.traps, mode: r.fromChallenge ? "challenge" : "solo" });
  }, []);

  // ── advance to the next card (card flies off first) ─────────────────────
  const next = useCallback(() => {
    const r = roundRef.current;
    if (phaseRef.current !== "reveal" || !r || advancing.current) return;
    advancing.current = true;
    const last = r.picks[r.picks.length - 1];
    setLeaving(last?.action === "buy" ? "right" : "left");
    setTimeout(
      () => {
        advancing.current = false;
        setLeaving(null);
        if (r.idx + 1 >= r.deck.length) finish(r);
        else {
          setRound({ ...r, idx: r.idx + 1, newTrick: null });
          setPhase("deal");
        }
      },
      reducedMotion() ? 0 : 240
    );
  }, [finish]);

  const tapNext = useCallback(() => {
    if (performance.now() - decidedAt.current > 380) next();
  }, [next]);

  // auto-advance after the reveal
  useEffect(() => {
    if (phase !== "reveal") return;
    const t = setTimeout(next, REVEAL_MS);
    return () => clearTimeout(t);
  }, [phase, idx, next]);

  // ── keyboard: ← skip, → buy, Enter/Space next ───────────────────────────
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      const p = phaseRef.current;
      if (p === "deal") {
        if (e.key === "ArrowRight") decide("buy");
        else if (e.key === "ArrowLeft") decide("skip");
      } else if (p === "reveal" && (e.key === "Enter" || e.key === " " || e.key === "ArrowRight")) {
        e.preventDefault();
        tapNext();
      }
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [decide, tapNext]);

  const replay = useCallback(() => start(), [start]);

  return (
    <div ref={appRef} className="app-root">
      {phase === "start" && <StartScreen stats={stats} challenge={challenge} onStart={start} muted={muted} onToggleMute={toggleMute} />}
      {(phase === "countdown" || phase === "deal" || phase === "reveal") && round && (
        <PlayScreen
          round={round}
          phase={phase}
          countdown={phase === "countdown" ? COUNTDOWN[cdStep] : null}
          leaving={leaving}
          muted={muted}
          onToggleMute={toggleMute}
          onDecide={decide}
          onNext={tapNext}
          dexCount={stats.dex.length}
          barRef={barRef}
          secRef={secRef}
          cardRef={cardRef}
          walletRef={walletRef}
          stageRef={stageRef}
        />
      )}
      {phase === "result" && round && summary && (
        <ResultScreen
          round={round}
          summary={summary}
          stats={stats}
          newBest={newBest}
          challenge={challenge}
          siteUrl={siteUrl}
          muted={muted}
          onToggleMute={toggleMute}
          onReplay={replay}
        />
      )}
      <div className="sr-only" aria-live="polite" aria-atomic="true">
        {live}
      </div>
    </div>
  );
}

export const trickLabel = (t: TrapType) => TRAP_TYPES[t].label;
