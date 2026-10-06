import { describe, expect, it } from "vitest";
import { all, ageBetween, everyone, female, isTrue, minAge, when } from "@/lib/engine/build";
import { allCards, type SchemeCard } from "@/lib/schemes";
import type { Profile, Rule, SchemeValue } from "@/lib/types";
import { computeKundli, EXCLUSIVE_GROUPS, kundliAge } from "./compute";

const YEAR = 2026;

function card(slug: string, eligibility: Rule, extra: Partial<SchemeCard> = {}): SchemeCard {
  return {
    slug,
    name: { en: slug, hi: slug },
    shortDescription: { en: "", hi: "" },
    level: "central",
    categories: ["social-welfare"],
    tags: [],
    benefitType: "cash",
    isDBT: true,
    kundliHouse: "women-family",
    eligibility,
    launchedYear: 2020,
    status: "active",
    ...extra,
  };
}
const cash = (amount: number, period: SchemeValue["period"]): SchemeValue => ({ amount, period, kind: "cash" });

// A 30-year-old woman (born 1996), fully answered so nothing is "unknown"
const base: Profile = {
  birthYear: 1996,
  gender: "female",
  state: "maharashtra",
  area: "rural",
  caste: "general",
  minority: false,
  disabled: false,
  marital: "married",
  student: false,
  employment: "self-employed",
  occupation: "farmer",
  govtEmployee: false,
  bpl: true,
  income: "1l-2l",
  taxPayer: false,
  pucca: false,
  daughterUnder10: false,
  pregnantOrLactating: false,
  planningBusiness: false,
  planningHome: true,
};

describe("kundliAge", () => {
  it("prefers year of birth over a stated age", () => {
    expect(kundliAge({ birthYear: 1990, age: 20 }, YEAR)).toBe(36);
    expect(kundliAge({ age: 20 }, YEAR)).toBe(20);
    expect(kundliAge({}, YEAR)).toBeUndefined();
  });
});

describe("computeKundli", () => {
  it("returns null without an age", () => {
    expect(computeKundli([], { gender: "female" }, { currentYear: YEAR })).toBeNull();
  });

  it("counts monthly cash ×12 for every eligible year up to 75", () => {
    // Eligible 21–65; she is 30 → ages 30..65 = 36 years × ₹1,500 × 12
    const s = card("monthly", all(female(), ...ageBetween(21, 65)), { value: cash(1500, "monthly"), ageRange: { min: 21, max: 65 } });
    const r = computeKundli([s], base, { currentYear: YEAR })!;
    expect(r.age).toBe(30);
    expect(r.totals.cash).toBe(36 * 1500 * 12);
    expect(r.entries[0].now).toBe(true);
  });

  it("caps yearly cash at age 75 and counts one-time amounts once", () => {
    const yearly = card("yearly", everyone(), { value: cash(6000, "yearly") });
    const once = card("once", everyone(), { value: cash(20000, "one-time") });
    const r = computeKundli([yearly, once], base, { currentYear: YEAR })!;
    expect(r.totals.cash).toBe((75 - 30 + 1) * 6000 + 20000);
  });

  it("pays contributory pensions from 60 to 75 if you can join now", () => {
    const apy = card("atal-pension-yojana", all(...ageBetween(18, 40)), {
      value: { amount: 1000, period: "monthly", kind: "pension" },
      ageRange: { min: 18, max: 40 },
      kundliHouse: "retirement",
    });
    const r = computeKundli([apy], base, { currentYear: YEAR })!;
    expect(r.totals.cash).toBe(16 * 12 * 1000); // ages 60..75
    const kinds = r.milestones.map((m) => `${m.kind}@${m.age}`);
    expect(kinds).toContain("lastChance@40");
    expect(kinds).toContain("pensionStarts@60");
  });

  it("pays nothing from a contributory pension once the joining age has passed", () => {
    const apy = card("atal-pension-yojana", all(...ageBetween(18, 40)), {
      value: { amount: 1000, period: "monthly", kind: "pension" },
      ageRange: { min: 18, max: 40 },
    });
    const r = computeKundli([apy], { ...base, birthYear: 1976 }, { currentYear: YEAR })!; // age 50
    expect(r.entries).toHaveLength(0);
    expect(r.totals.cash).toBe(0);
  });

  it("pays welfare pensions only in eligible years and marks when they open", () => {
    const oap = card("indira-gandhi-old-age-pension", all(minAge(60), when("bpl", "eq", true)), {
      value: { amount: 200, period: "monthly", kind: "pension" },
      ageRange: { min: 60 },
      kundliHouse: "senior",
    });
    const r = computeKundli([oap], base, { currentYear: YEAR })!;
    expect(r.totals.cash).toBe(16 * 12 * 200);
    expect(r.entries[0].now).toBe(false);
    expect(r.milestones[0]).toMatchObject({ age: 60, kind: "opens" });
  });

  it("counts only the largest scheme in an overlap group each year", () => {
    const central = card("indira-gandhi-old-age-pension", minAge(60), { value: { amount: 200, period: "monthly", kind: "pension" }, ageRange: { min: 60 } });
    const state = card("up-old-age-pension", minAge(60), { value: { amount: 1000, period: "monthly", kind: "pension" }, ageRange: { min: 60 } });
    const r = computeKundli([central, state], base, { currentYear: YEAR })!;
    expect(r.totals.cash).toBe(16 * 12 * 1000);
    expect(r.entries.find((e) => e.card.slug === "indira-gandhi-old-age-pension")!.counted).toBe(0);
  });

  it("uses a scheme's own overlapGroup", () => {
    const a = card("state-a-pension", minAge(60), { value: { amount: 600, period: "monthly", kind: "pension" }, ageRange: { min: 60 }, overlapGroup: "old-age-pension" });
    const b = card("indira-gandhi-old-age-pension", minAge(60), { value: { amount: 200, period: "monthly", kind: "pension" }, ageRange: { min: 60 } });
    expect(computeKundli([a, b], base, { currentYear: YEAR })!.totals.cash).toBe(16 * 12 * 600);
  });

  it("never adds cover or loans to the cash total", () => {
    const health = card("health", everyone(), { value: { amount: 500000, period: "yearly", kind: "cover" }, kundliHouse: "health" });
    const life = card("life", everyone(), { value: { amount: 200000, period: "yearly", kind: "cover" }, kundliHouse: "insurance" });
    const loan = card("loan", everyone(), { value: { amount: 2000000, period: "one-time", kind: "loan" }, kundliHouse: "career" });
    const r = computeKundli([health, life, loan], base, { currentYear: YEAR })!;
    expect(r.totals).toEqual({ cash: 0, healthCover: 500000, lifeCover: 200000, loan: 2000000 });
  });

  it("holds back business schemes until you plan a business", () => {
    const mudra = card("mudra", everyone(), { value: { amount: 2000000, period: "one-time", kind: "loan" }, kundliHouse: "business" });
    const off = computeKundli([mudra], base, { currentYear: YEAR })!;
    expect(off.entries[0].gatedBy).toBe("business");
    expect(off.totals.loan).toBe(0);
    expect(off.houses.find((h) => h.house === "business")!.count).toBe(0);

    const on = computeKundli([mudra], { ...base, planningBusiness: true }, { currentYear: YEAR })!;
    expect(on.entries[0].gatedBy).toBeUndefined();
    expect(on.totals.loan).toBe(2000000);
  });

  it("holds back home schemes when you are not planning a house", () => {
    const pmay = card("pmay", everyone(), { value: cash(120000, "one-time"), kundliHouse: "home" });
    expect(computeKundli([pmay], { ...base, planningHome: false }, { currentYear: YEAR })!.totals.cash).toBe(0);
    expect(computeKundli([pmay], base, { currentYear: YEAR })!.totals.cash).toBe(120000);
  });

  it("scores claimed schemes against those available now", () => {
    const a = card("a", everyone());
    const b = card("b", everyone());
    const later = card("later", minAge(60));
    const r = computeKundli([a, b, later], base, { currentYear: YEAR, claimed: ["a", "later"] })!;
    expect(r.score).toEqual({ claimed: 1, available: 2, pct: 50 });
    expect(computeKundli([later], base, { currentYear: YEAR })!.score.pct).toBe(0);
  });

  it("scales house glow by value and keeps every house in the result", () => {
    const big = card("big", everyone(), { value: cash(10000, "yearly"), kundliHouse: "farming" });
    const small = card("small", everyone(), { value: cash(1000, "yearly"), kundliHouse: "health" });
    const free = card("free", everyone(), { kundliHouse: "education" });
    const r = computeKundli([big, small, free], base, { currentYear: YEAR })!;
    const glow = Object.fromEntries(r.houses.map((h) => [h.house, h.intensity]));
    expect(r.houses).toHaveLength(12);
    expect(glow.farming).toBe(1);
    expect(glow.health).toBeGreaterThan(0.35);
    expect(glow.health).toBeLessThan(1);
    expect(glow.education).toBe(0.2);
    expect(glow.retirement).toBe(0);
  });

  it("caps fixed-length benefits at their months", () => {
    const stipend = card("stipend", all(...ageBetween(18, 35)), { value: { ...cash(6000, "monthly"), maxMonths: 6 }, ageRange: { min: 18, max: 35 } });
    expect(computeKundli([stipend], base, { currentYear: YEAR })!.totals.cash).toBe(36000);
    const allowance = card("allowance", everyone(), { value: { ...cash(1500, "monthly"), maxMonths: 24 } });
    expect(computeKundli([allowance], base, { currentYear: YEAR })!.totals.cash).toBe(36000);
  });

  it("ends studies at 25 so scholarships aren't projected for life", () => {
    const scholarship = card("nmmss", isTrue("student"), { value: cash(12000, "yearly"), kundliHouse: "education" });
    const r = computeKundli([scholarship], { ...base, birthYear: 2006, student: true }, { currentYear: YEAR })!; // age 20
    expect(r.entries[0].ages).toEqual([20, 21, 22, 23, 24, 25]);
    expect(r.totals.cash).toBe(6 * 12000);
  });

  it("applies pregnancy-linked benefits only to the current year", () => {
    const maternity = card("pm-matru-vandana-yojana", isTrue("pregnantOrLactating"), { value: cash(5000, "one-time") });
    const r = computeKundli([maternity], { ...base, pregnantOrLactating: true }, { currentYear: YEAR })!;
    expect(r.entries[0].ages).toEqual([30]);
  });

  it("lists hardship-triggered benefits without counting them", () => {
    const nfbs = card("national-family-benefit-scheme", isTrue("bpl"), { value: cash(20000, "one-time") });
    const r = computeKundli([nfbs], base, { currentYear: YEAR })!;
    expect(r.entries).toHaveLength(1);
    expect(r.totals.cash).toBe(0);
    expect(r.score.available).toBe(0);
  });

  it("counts schemes available at each age for the timeline", () => {
    const kid = card("young", all(...ageBetween(18, 35)), { ageRange: { min: 18, max: 35 } });
    const r = computeKundli([kid], base, { currentYear: YEAR })!;
    expect(r.countsByAge[0]).toEqual({ age: 30, count: 1 });
    expect(r.countsByAge.find((c) => c.age === 36)!.count).toBe(0);
    expect(r.countsByAge.at(-1)!.age).toBe(80);
  });
});

describe("overlap groups", () => {
  it("only reference schemes that exist", () => {
    const slugs = new Set(allCards().map((c) => c.slug));
    const missing = Object.values(EXCLUSIVE_GROUPS)
      .flat()
      .filter((s) => !slugs.has(s));
    expect(missing).toEqual([]);
  });

  it("produce a sane estimate for a real profile", () => {
    const r = computeKundli(allCards(), base, { currentYear: YEAR })!;
    expect(r.totals.cash).toBeGreaterThan(0);
    expect(r.nowCount).toBeGreaterThan(5);
    expect(r.houses.some((h) => h.count > 0)).toBe(true);
  });
});
