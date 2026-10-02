// Pure game rules — no DOM. Rules are unchanged from the original prototype.
import { GOOD, TRAPS, TRAP_TYPES, type Deal, type TrapType } from "./deals";
import { makeRng, shuffle } from "./rng";

export const BUDGET = 10_000;
export const DEAL_MS = 6_000;
export const REVEAL_MS = 3_800;
export const PER_KIND = 6;

export type Action = "buy" | "skip" | "timeout";
/** loot = bought a real deal · trap = bought a trap · dodge = skipped a trap · miss = skipped a real deal */
export type Outcome = "loot" | "trap" | "dodge" | "miss";

export interface Card extends Deal {
  good: boolean;
  trick?: string;
}

export interface Pick {
  card: Card;
  action: Action;
  outcome: Outcome;
  paid: number; // incl. hidden fee
  gain: number; // v − paid (0 when not bought)
}

export const RANKS = {
  don: { title: "Deal Ka Don", emoji: "👑" },
  smart: { title: "Smart Shopper", emoji: "🧠" },
  darpok: { title: "Darpok Customer", emoji: "🙈" },
  shikaar: { title: "Sale Ka Shikaar", emoji: "🎯" },
  thoda: { title: "Thoda thoda lut gaye", emoji: "😬" },
} as const;
export type RankKey = keyof typeof RANKS;
export const rankLabel = (k: RankKey) => `${RANKS[k].title} ${RANKS[k].emoji}`;
export const isRankKey = (k: unknown): k is RankKey => typeof k === "string" && Object.hasOwn(RANKS, k);

export const costOf = (c: Deal) => c.p + (c.fee ?? 0);

export function buildDeck(seed: string): Card[] {
  const rnd = makeRng(seed);
  const good = shuffle(GOOD, rnd).slice(0, PER_KIND).map(d => ({ ...d, good: true }));
  const traps = shuffle(TRAPS, rnd)
    .slice(0, PER_KIND)
    .map(d => ({ ...d, good: false, trick: d.trick ?? TRAP_TYPES[d.type as TrapType].label }));
  return shuffle<Card>([...good, ...traps], rnd);
}

export function resolve(card: Card, action: Action): Pick {
  if (action === "buy") {
    const paid = costOf(card);
    return { card, action, outcome: card.good ? "loot" : "trap", paid, gain: card.v - paid };
  }
  return { card, action, outcome: card.good ? "miss" : "dodge", paid: 0, gain: 0 };
}

export const isCorrect = (o: Outcome) => o === "loot" || o === "dodge";

export interface Summary {
  score: number;
  claimed: number; // what the sale "said" you saved (MRP − price) on things bought
  traps: number;
  missed: number;
  bought: number;
  maxStreak: number;
  fell: string[]; // unique trick labels fallen for
  win: boolean;
  rank: RankKey;
}

export function summarize(picks: Pick[]): Summary {
  let score = 0, claimed = 0, traps = 0, missed = 0, bought = 0, streak = 0, maxStreak = 0;
  const fell: string[] = [];
  for (const p of picks) {
    if (p.action === "buy") {
      score += p.gain;
      claimed += p.card.m - p.card.p;
      bought++;
    }
    if (p.outcome === "trap") {
      traps++;
      if (p.card.trick && !fell.includes(p.card.trick)) fell.push(p.card.trick);
    }
    if (p.outcome === "miss") missed++;
    streak = isCorrect(p.outcome) ? streak + 1 : 0;
    maxStreak = Math.max(maxStreak, streak);
  }
  const win = score >= 1000 && traps <= 1;
  let rank: RankKey;
  if (win) rank = score >= 2000 ? "don" : "smart";
  else if (bought === 0) rank = "darpok";
  else if (traps >= 4) rank = "shikaar";
  else rank = "thoda";
  return { score, claimed, traps, missed, bought, maxStreak, fell, win, rank };
}

/** What to aim for next round — drives the progress bar on the result screen. */
export function nextGoal(s: Summary): { label: string; progress: number; hint: string } {
  if (s.rank === "don") {
    const perfect = s.traps === 0 && s.missed === 0;
    return {
      label: perfect ? "Perfect round 🏆" : "Perfect 12/12 🏆",
      progress: perfect ? 1 : Math.min(1, (12 - s.traps - s.missed) / 12),
      hint: perfect ? "Ab dosto ko dikhao 😤" : `${s.traps + s.missed} galti baaki. Perfect round try karo`,
    };
  }
  if (s.rank === "smart") {
    return {
      label: "Deal Ka Don 👑",
      progress: Math.max(0, s.score) / 2000,
      hint: `Bas ${Math.round(2000 - s.score).toLocaleString("en-IN")} rupaye aur bachao`,
    };
  }
  const need: string[] = [];
  if (s.score < 1000) need.push(`₹${Math.round(1000 - s.score).toLocaleString("en-IN")} aur asli bachat`);
  if (s.traps > 1) need.push(`${s.traps - 1} jaal kam`);
  return {
    label: "LOOT LIYE 😎",
    progress: Math.max(0, Math.min(s.score, 1000)) / 1000 * (s.traps <= 1 ? 1 : 0.7),
    hint: "Chahiye: " + need.join(" + "),
  };
}

export const GRID_EMOJI: Record<Outcome, string> = { loot: "🟩", dodge: "🟩", trap: "🟥", miss: "🟨" };

export interface Challenge {
  score: number;
  rank: RankKey | null;
  seed: string | null;
}

export function parseChallenge(q: { get(k: string): string | null }): Challenge | null {
  const s = q.get("s");
  if (s === null || !/^-?\d{1,6}$/.test(s)) return null;
  const r = q.get("r");
  const d = q.get("d");
  return {
    score: Math.max(-99999, Math.min(99999, Number(s))),
    rank: isRankKey(r) ? r : null,
    seed: d && /^[0-9a-z]{1,10}$/.test(d) ? d : null,
  };
}
