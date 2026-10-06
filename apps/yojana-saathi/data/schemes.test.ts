/**
 * Validates every scheme file on disk. Set SCHEME_FILTER=<path fragment> to check only some files,
 * e.g. SCHEME_FILTER=state/karnataka npx vitest run data/schemes.test.ts
 */
import { readFileSync, existsSync } from "node:fs";
import { describe, expect, it } from "vitest";
import { CATEGORIES, KUNDLI_HOUSES, MINISTRIES, STATES } from "@/data/taxonomy";
import { isLeaf } from "@/lib/engine/evaluate";
import type { LeafRule, Localized, Rule, Scheme } from "@/lib/types";

// Vite's import.meta.glob; cast because Next's ImportMeta typing doesn't know about it
const modules = (import.meta as unknown as { glob: (p: string, o: { eager: true }) => Record<string, { default: Scheme }> }).glob(
  "./schemes/**/*.ts",
  { eager: true },
);
const filter = process.env.SCHEME_FILTER;
const entries = Object.entries(modules).filter(([path]) => !path.endsWith("/index.ts") && !path.includes("_generated") && (!filter || path.includes(filter)));

const DEVANAGARI = /[ऀ-ॿ]/;
const ISO_DATE = /^\d{4}-\d{2}-\d{2}$/;

function leaves(rule: Rule): LeafRule[] {
  if (isLeaf(rule)) return [rule];
  if ("all" in rule) return rule.all.flatMap(leaves);
  if ("any" in rule) return rule.any.flatMap(leaves);
  return leaves(rule.not);
}

function localizedList(list: Localized<string[]> | undefined, name: string) {
  expect(list, `${name} missing`).toBeDefined();
  expect(list!.en.length, `${name}.en is empty`).toBeGreaterThan(0);
  expect(list!.hi.length, `${name}: en has ${list!.en.length} items, hi has ${list!.hi.length}`).toBe(list!.en.length);
  list!.en.forEach((s) => expect(s.trim(), `${name}.en has a blank item`).not.toBe(""));
  list!.hi.forEach((s) => expect(DEVANAGARI.test(s), `${name}.hi item is not Hindi: "${s.slice(0, 40)}"`).toBe(true));
}

function verificationNotes(): string {
  return existsSync("data/NEEDS_VERIFICATION.md") ? readFileSync("data/NEEDS_VERIFICATION.md", "utf8") : "";
}

describe("scheme dataset", () => {
  it("has scheme files", () => {
    expect(entries.length).toBeGreaterThan(0);
  });

  it("slugs are unique", () => {
    const all = Object.entries(modules).filter(([p]) => !p.endsWith("/index.ts") && !p.includes("_generated"));
    const slugs = all.map(([, m]) => m.default.slug);
    const dupes = slugs.filter((s, i) => slugs.indexOf(s) !== i);
    expect(dupes).toEqual([]);
  });

  const notes = verificationNotes();
  const today = new Date().toISOString().slice(0, 10);

  describe.each(entries.map(([path, mod]) => [path, mod.default] as const))("%s", (path, s) => {
    it("is well formed", () => {
      expect(s, "missing default export").toBeDefined();
      expect(path.endsWith(`/${s.slug}.ts`), "file name must equal slug").toBe(true);
      expect(s.slug).toMatch(/^[a-z0-9]+(-[a-z0-9]+)*$/);

      expect(s.name.en.trim()).not.toBe("");
      expect(DEVANAGARI.test(s.name.hi), "name.hi must be Hindi").toBe(true);
      expect(s.shortDescription.en.length, "shortDescription.en too long (max 240)").toBeLessThanOrEqual(240);
      expect(DEVANAGARI.test(s.shortDescription.hi)).toBe(true);

      expect(s.categories.length).toBeGreaterThan(0);
      s.categories.forEach((c) => expect(c in CATEGORIES, `unknown category ${c}`).toBe(true));
      expect(s.kundliHouse in KUNDLI_HOUSES).toBe(true);
      expect(s.tags.length).toBeGreaterThan(0);
    });

    it("places itself correctly (central/state)", () => {
      if (s.level === "central") {
        expect(path.includes("/central/"), "central schemes live in schemes/central").toBe(true);
        expect(s.state).toBeUndefined();
        expect(s.ministry && s.ministry in MINISTRIES, "central schemes need a known ministry").toBe(true);
      } else {
        expect(s.state && s.state in STATES).toBe(true);
        expect(path.includes(`/state/${s.state}/`), "state schemes live in schemes/state/<state>").toBe(true);
        const stateRule = leaves(s.eligibility).find((l) => l.field === "state");
        expect(stateRule, "state schemes must include residentOf(state) in eligibility").toBeDefined();
      }
    });

    it("has complete content in both languages", () => {
      localizedList(s.details, "details");
      localizedList(s.benefits, "benefits");
      localizedList(s.eligibilityText, "eligibilityText");
      localizedList(s.exclusions, "exclusions");
      localizedList(s.documents, "documents");
      expect(s.applicationProcess.online || s.applicationProcess.offline, "needs online or offline steps").toBeTruthy();
      if (s.applicationProcess.online) localizedList(s.applicationProcess.online, "applicationProcess.online");
      if (s.applicationProcess.offline) localizedList(s.applicationProcess.offline, "applicationProcess.offline");
      expect(s.faqs.length).toBeGreaterThan(0);
      s.faqs.forEach((f) => {
        expect(f.q.en && f.a.en).toBeTruthy();
        expect(DEVANAGARI.test(f.q.hi) && DEVANAGARI.test(f.a.hi), "faq must be in Hindi too").toBe(true);
      });
    });

    it("cites sources and a verification date", () => {
      expect(s.officialUrl).toMatch(/^https:\/\//);
      expect(s.sources.length).toBeGreaterThan(0);
      s.sources.forEach((u) => expect(u).toMatch(/^https:\/\//));
      expect(s.lastVerified).toMatch(ISO_DATE);
      expect(s.lastVerified <= today, "lastVerified is in the future").toBe(true);
      expect(s.launchedYear).toBeGreaterThan(1950);
      expect(s.launchedYear).toBeLessThanOrEqual(Number(today.slice(0, 4)));
    });

    it("keeps ageRange in step with the age rules", () => {
      const ages = leaves(s.eligibility).filter((l) => l.field === "age");
      const mins = ages.filter((l) => l.op === "gte").map((l) => l.value as number);
      const maxs = ages.filter((l) => l.op === "lte").map((l) => l.value as number);
      if (mins.length) expect(s.ageRange?.min, "ageRange.min should match the age ≥ rule").toBe(Math.min(...mins));
      if (maxs.length) expect(s.ageRange?.max, "ageRange.max should match the age ≤ rule").toBe(Math.max(...maxs));
      if (s.ageRange?.min !== undefined && !mins.length) throw new Error("ageRange.min set but no age ≥ rule");
      if (s.ageRange?.max !== undefined && !maxs.length) throw new Error("ageRange.max set but no age ≤ rule");
    });

    it("has a sensible value", () => {
      if (!s.value) return;
      expect(s.value.amount).toBeGreaterThan(0);
      expect(Number.isInteger(s.value.amount)).toBe(true);
    });

    it("lists check-status schemes for verification", () => {
      if (s.status !== "check-status") return;
      expect(notes.includes(s.slug), `${s.slug} is check-status but not listed in data/NEEDS_VERIFICATION.md`).toBe(true);
    });
  });
});
