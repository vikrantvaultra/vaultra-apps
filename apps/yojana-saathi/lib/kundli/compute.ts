/**
 * Sarkari Kundli calculations. Pure and unit-tested: real scheme rules, replayed across a lifetime.
 * Every number here is an estimate; the assumptions are listed in ./assumptions.ts.
 */
import { KUNDLI_HOUSES, type KundliHouse, type Occupation } from "@/data/taxonomy";
import { checkScheme, eligibleAtAge } from "@/lib/engine/evaluate";
import { withInferred } from "@/lib/questions";
import type { SchemeCard } from "@/lib/schemes";
import type { Profile } from "@/lib/types";

export const CASH_UNTIL = 75;
export const PENSION_FROM = 60;
export const TIMELINE_UNTIL = 80;

/**
 * Schemes that overlap in real life: in any one year only the largest in a group is counted.
 * (A person draws one old-age pension, holds one scholarship, and state health schemes are merged with PM-JAY.)
 */
export const EXCLUSIVE_GROUPS: Record<string, string[]> = {
  "contributory-pension": ["atal-pension-yojana", "pm-shram-yogi-maandhan", "pm-kisan-maandhan-yojana"],
  "old-age-pension": ["indira-gandhi-old-age-pension", "up-old-age-pension", "delhi-old-age-pension"],
  "widow-pension": ["indira-gandhi-widow-pension", "up-nirashrit-mahila-pension", "delhi-widow-pension"],
  "women-monthly": ["majhi-ladki-bahin", "gruha-lakshmi", "kalaignar-magalir-urimai-thogai", "delhi-mahila-samriddhi-yojana"],
  scholarship: [
    "nmmss",
    "central-sector-scholarship-college",
    "post-matric-scholarship-sc",
    "pre-matric-scholarship-sc",
    "post-matric-scholarship-st",
    "pm-yasasvi-obc",
    "aicte-pragati-scholarship",
    "aicte-saksham-scholarship",
    "scholarships-students-with-disabilities",
    "post-matric-scholarship-minorities",
    "pre-matric-scholarship-minorities",
    "merit-cum-means-scholarship-minorities",
    "up-post-matric-scholarship",
    "pudhumai-penn",
    "tamil-pudhalvan",
  ],
  "health-cover": [
    "ayushman-bharat-pmjay",
    "ayushman-vay-vandana",
    "mahatma-jyotiba-phule-jan-arogya-yojana",
    "arogya-karnataka",
    "cm-comprehensive-health-insurance",
    "delhi-ayushman-bharat",
  ],
  "daughter-savings": ["lek-ladki-yojana", "mukhyamantri-kanya-sumangala-yojana", "delhi-ladli-scheme"],
  "maternity-cash": ["pm-matru-vandana-yojana", "janani-suraksha-yojana"],
};

const GROUP_OF = new Map(Object.entries(EXCLUSIVE_GROUPS).flatMap(([g, slugs]) => slugs.map((s) => [s, g] as const)));

const BUSINESS_OCCUPATIONS: Occupation[] = ["small-business", "street-vendor", "artisan"];

/**
 * Need-based benefits (a breadwinner's death, TB treatment, dialysis): listed in the houses,
 * but never counted as lifetime money or in the Saathi Score.
 */
export const CONTINGENT = new Set(["national-family-benefit-scheme", "ni-kshay-poshan-yojana", "pm-national-dialysis-programme"]);

/** Studying is assumed to continue until 25 (or three more years, if you're older) */
export const STUDY_UNTIL = (age: number) => Math.max(25, age + 3);

/**
 * The profile as it would look at a future age. Life-stage answers don't last forever:
 * studies end, and pregnancy or a young daughter only count for the current year.
 */
export function profileAt(p: Profile, currentAge: number, y: number): Profile {
  if (y === currentAge) return p;
  return {
    ...p,
    student: p.student && y <= STUDY_UNTIL(currentAge) ? true : p.student === undefined ? undefined : false,
    pregnantOrLactating: p.pregnantOrLactating === undefined ? undefined : false,
    daughterUnder10: p.daughterUnder10 === undefined ? undefined : false,
  };
}

export interface KundliEntry {
  card: SchemeCard;
  house: KundliHouse;
  /** Eligible at the person's current age */
  now: boolean;
  /** Ages (current..80) at which the rules pass */
  ages: number[];
  /** Business / home schemes only count once the person plans for them */
  gatedBy?: "business" | "home";
  /** Contributory pension: join now (or before the age limit), paid from 60 */
  contributory: boolean;
  /** Cash counted toward the lifetime total after removing overlaps */
  counted: number;
  claimed: boolean;
}

export interface HouseSummary {
  house: KundliHouse;
  entries: KundliEntry[];
  /** Schemes counted (not gated) available at some point in life */
  count: number;
  cash: number;
  /** 0..1 glow, scaled to value unlocked */
  intensity: number;
}

export interface Milestone {
  age: number;
  kind: "opens" | "lastChance" | "pensionStarts";
  entry: KundliEntry;
}

export interface KundliResult {
  age: number;
  entries: KundliEntry[];
  houses: HouseSummary[];
  totals: { cash: number; healthCover: number; lifeCover: number; loan: number };
  score: { claimed: number; available: number; pct: number };
  milestones: Milestone[];
  /** Number of counted schemes available at each age, current..80 */
  countsByAge: { age: number; count: number }[];
  nowCount: number;
}

/** Age from the year of birth if known (the Kundli asks for it), otherwise the stated age */
export function kundliAge(p: Profile, currentYear: number): number | undefined {
  if (p.birthYear) return Math.max(0, currentYear - p.birthYear);
  return p.age;
}

function yearlyCash(e: KundliEntry, y: number): number {
  const v = e.card.value;
  if (!v || v.kind === "cover" || v.kind === "loan") return 0;
  const perYear = v.period === "monthly" ? v.amount * 12 : v.amount;

  if (v.kind === "pension") {
    if (y < PENSION_FROM) return 0;
    // Contributory schemes pay from 60 if you could join at some point; welfare pensions only in eligible years
    if (e.contributory) return e.ages.length ? perYear : 0;
    return e.ages.includes(y) ? perYear : 0;
  }
  if (!e.ages.includes(y)) return 0;
  if (v.period === "one-time") return y === e.ages[0] ? v.amount : 0;
  if (v.maxMonths !== undefined) {
    // Fixed-length benefits stop once the months are used up
    const monthsBefore = e.ages.filter((a) => a < y).length * 12;
    const left = Math.max(0, v.maxMonths - monthsBefore);
    return Math.min(12, left) * v.amount;
  }
  return perYear;
}

export function computeKundli(
  cards: SchemeCard[],
  rawProfile: Profile,
  opts: { currentYear: number; claimed?: string[] },
): KundliResult | null {
  const age = kundliAge(rawProfile, opts.currentYear);
  if (age === undefined) return null;
  const profile = withInferred({ ...rawProfile, age });
  const claimed = new Set(opts.claimed ?? []);
  const plansBusiness = profile.planningBusiness === true || (profile.occupation !== undefined && BUSINESS_OCCUPATIONS.includes(profile.occupation));

  const ageRange = Array.from({ length: Math.max(0, TIMELINE_UNTIL - age + 1) }, (_, i) => age + i);

  const entries: KundliEntry[] = cards
    .map((card) => {
      const ages = ageRange.filter((a) => eligibleAtAge(card, profileAt(profile, age, a), a));
      const gatedBy: KundliEntry["gatedBy"] =
        card.kundliHouse === "business" && !plansBusiness ? "business" : card.kundliHouse === "home" && profile.planningHome === false ? "home" : undefined;
      const contributory = card.value?.kind === "pension" && card.ageRange?.max !== undefined && card.ageRange.max < PENSION_FROM;
      return {
        card,
        house: card.kundliHouse,
        now: checkScheme(card, profile).eligible,
        ages,
        gatedBy,
        contributory,
        counted: 0,
        claimed: claimed.has(card.slug),
      };
    })
    .filter((e) => e.ages.length > 0);

  // Year-by-year cash, keeping only the largest scheme in each overlap group
  for (let y = age; y <= CASH_UNTIL; y++) {
    const winners = new Map<string, { e: KundliEntry; amount: number }>();
    for (const e of entries) {
      if (e.gatedBy || CONTINGENT.has(e.card.slug)) continue;
      const amount = yearlyCash(e, y);
      if (amount <= 0) continue;
      const group = GROUP_OF.get(e.card.slug);
      if (!group) {
        e.counted += amount;
        continue;
      }
      const best = winners.get(group);
      if (!best || amount > best.amount) winners.set(group, { e, amount });
    }
    winners.forEach(({ e, amount }) => (e.counted += amount));
  }

  const counted = entries.filter((e) => !e.gatedBy);
  const cash = counted.reduce((sum, e) => sum + e.counted, 0);

  const coverOf = (e: KundliEntry) => (e.card.value?.kind === "cover" ? e.card.value.amount : 0);
  const healthCover = Math.max(0, ...counted.filter((e) => e.house === "health" || e.house === "senior").map(coverOf));
  const lifeCover = counted.filter((e) => e.house === "insurance" && e.now).reduce((s, e) => s + coverOf(e), 0);
  const loan = Math.max(0, ...counted.map((e) => (e.card.value?.kind === "loan" ? e.card.value.amount : 0)));

  const houseKeys = Object.keys(KUNDLI_HOUSES) as KundliHouse[];
  const maxHouseCash = Math.max(1, ...houseKeys.map((h) => counted.filter((e) => e.house === h).reduce((s, e) => s + e.counted, 0)));
  const houses: HouseSummary[] = houseKeys.map((house) => {
    const inHouse = entries.filter((e) => e.house === house);
    const live = inHouse.filter((e) => !e.gatedBy);
    const houseCash = live.reduce((s, e) => s + e.counted, 0);
    const intensity = houseCash > 0 ? 0.35 + 0.65 * Math.sqrt(houseCash / maxHouseCash) : live.length > 0 ? 0.2 : 0;
    return { house, entries: inHouse, count: live.length, cash: houseCash, intensity };
  });

  const available = counted.filter((e) => e.now && !CONTINGENT.has(e.card.slug));
  const claimedNow = available.filter((e) => e.claimed).length;

  const milestones: Milestone[] = [];
  for (const e of counted) {
    const first = e.ages[0];
    const last = e.ages[e.ages.length - 1];
    if (first > age) milestones.push({ age: first, kind: "opens", entry: e });
    // "Last chance" only when eligibility ends because of the scheme's own age limit
    if (last < TIMELINE_UNTIL && e.card.ageRange?.max === last) milestones.push({ age: last, kind: "lastChance", entry: e });
    if (e.contributory && age < PENSION_FROM) milestones.push({ age: PENSION_FROM, kind: "pensionStarts", entry: e });
  }
  milestones.sort((a, b) => a.age - b.age || b.entry.counted - a.entry.counted);

  return {
    age,
    entries,
    houses,
    totals: { cash, healthCover, lifeCover, loan },
    score: { claimed: claimedNow, available: available.length, pct: available.length ? Math.round((claimedNow / available.length) * 100) : 0 },
    milestones,
    countsByAge: ageRange.map((a) => ({ age: a, count: counted.filter((e) => e.ages.includes(a)).length })),
    nowCount: available.length,
  };
}
