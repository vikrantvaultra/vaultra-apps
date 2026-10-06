import { describe, expect, it } from "vitest";
import type { Profile, Rule } from "@/lib/types";
import { ageBetween, all, any, female, incomeUpTo, isFalse, labelled, not, notTaxPayer, residentOf, when, everyone } from "./build";
import { checkScheme, eligibleAtAge, evaluate, evaluateLeaf, fieldsUsed, missingFields } from "./evaluate";
import { explainFailure, explainRule } from "./explain";

const scheme = (eligibility: Rule) => ({ eligibility });

describe("evaluateLeaf", () => {
  it("returns unknown when the profile lacks the field", () => {
    expect(evaluateLeaf(when("gender", "eq", "female"), {})).toBe("unknown");
  });

  it("handles eq / neq", () => {
    expect(evaluateLeaf(when("gender", "eq", "female"), { gender: "female" })).toBe("pass");
    expect(evaluateLeaf(when("gender", "eq", "female"), { gender: "male" })).toBe("fail");
    expect(evaluateLeaf(when("caste", "neq", "general"), { caste: "obc" })).toBe("pass");
    expect(evaluateLeaf(when("caste", "neq", "general"), { caste: "general" })).toBe("fail");
  });

  it("handles booleans, including false answers", () => {
    expect(evaluateLeaf(isFalse("pucca"), { pucca: false })).toBe("pass");
    expect(evaluateLeaf(isFalse("pucca"), { pucca: true })).toBe("fail");
    expect(evaluateLeaf(notTaxPayer(), { taxPayer: false })).toBe("pass");
  });

  it("handles gte / lte on numbers, inclusive at the boundary", () => {
    const [min, max] = ageBetween(18, 40);
    expect(evaluateLeaf(min as never, { age: 18 })).toBe("pass");
    expect(evaluateLeaf(min as never, { age: 17 })).toBe("fail");
    expect(evaluateLeaf(max as never, { age: 40 })).toBe("pass");
    expect(evaluateLeaf(max as never, { age: 41 })).toBe("fail");
  });

  it("handles in / notIn", () => {
    const stOrPvtg = when("caste", "in", ["st", "pvtg"]);
    expect(evaluateLeaf(stOrPvtg, { caste: "pvtg" })).toBe("pass");
    expect(evaluateLeaf(stOrPvtg, { caste: "sc" })).toBe("fail");
    expect(evaluateLeaf(when("state", "notIn", ["delhi"]), { state: "goa" })).toBe("pass");
    expect(evaluateLeaf(when("state", "notIn", ["delhi"]), { state: "delhi" })).toBe("fail");
  });

  describe("income bands against rupee caps", () => {
    const cap = incomeUpTo(250_000);
    it("passes when the whole band is at or under the cap", () => {
      expect(evaluateLeaf(cap, { income: "upto-1l" })).toBe("pass");
      expect(evaluateLeaf(cap, { income: "2l-2.5l" })).toBe("pass");
    });
    it("fails when the whole band is above the cap", () => {
      expect(evaluateLeaf(cap, { income: "2.5l-3l" })).toBe("fail");
      expect(evaluateLeaf(cap, { income: "above-12l" })).toBe("fail");
    });
    it("is unknown when the cap falls inside the band", () => {
      expect(evaluateLeaf(incomeUpTo(150_000), { income: "1l-2l" })).toBe("unknown");
    });
    it("supports gte caps", () => {
      const above = { field: "income" as const, op: "gte" as const, value: 600_000 };
      expect(evaluateLeaf(above, { income: "6l-8l" })).toBe("pass");
      expect(evaluateLeaf(above, { income: "3l-4.5l" })).toBe("fail");
      expect(evaluateLeaf(above, { income: "4.5l-6l" })).toBe("fail");
    });
    it("supports band membership", () => {
      expect(evaluateLeaf(when("income", "in", ["upto-1l", "1l-2l"]), { income: "1l-2l" })).toBe("pass");
    });
  });
});

describe("evaluate (composites)", () => {
  it("all: fail beats unknown beats pass", () => {
    const rule = all(female(), when("age", "gte", 21));
    expect(evaluate(rule, { gender: "female", age: 30 }).outcome).toBe("pass");
    expect(evaluate(rule, { gender: "female" }).outcome).toBe("unknown");
    expect(evaluate(rule, { gender: "male" }).outcome).toBe("fail");
  });

  it("any: pass beats unknown beats fail", () => {
    const rule = any(female(), when("caste", "in", ["sc", "st"]));
    expect(evaluate(rule, { gender: "male", caste: "sc" }).outcome).toBe("pass");
    expect(evaluate(rule, { gender: "male" }).outcome).toBe("unknown");
    expect(evaluate(rule, { gender: "male", caste: "general" }).outcome).toBe("fail");
  });

  it("not inverts pass/fail and keeps unknown", () => {
    const rule = not(when("govtEmployee", "eq", true));
    expect(evaluate(rule, { govtEmployee: false }).outcome).toBe("pass");
    expect(evaluate(rule, { govtEmployee: true }).outcome).toBe("fail");
    expect(evaluate(rule, {}).outcome).toBe("unknown");
  });

  it("an empty all() (open to everyone) passes", () => {
    expect(evaluate(everyone(), {}).outcome).toBe("pass");
  });
});

describe("checkScheme", () => {
  const ladkiBahinLike = scheme(
    all(residentOf("maharashtra"), female(), ...ageBetween(21, 65), incomeUpTo(250_000), notTaxPayer()),
  );
  const base: Profile = { state: "maharashtra", gender: "female", age: 34, income: "1l-2l", taxPayer: false };

  it("is eligible when every rule passes", () => {
    const r = checkScheme(ladkiBahinLike, base);
    expect(r.status).toBe("eligible");
    expect(r.eligible).toBe(true);
    expect(r.almostEligible).toBe(false);
    expect(r.criteria).toHaveLength(6);
  });

  it("is almost eligible when exactly one requirement fails", () => {
    const r = checkScheme(ladkiBahinLike, { ...base, age: 67 });
    expect(r.status).toBe("almost");
    expect(r.almostEligible).toBe(true);
    expect(r.failed).toHaveLength(1);
    expect(explainFailure(r.failed[0], "en")).toBe("Age is 65 or below");
    expect(explainFailure(r.failed[0], "hi")).toBe("उम्र 65 साल या उससे कम हो");
  });

  it("is ineligible when two or more requirements fail", () => {
    const r = checkScheme(ladkiBahinLike, { ...base, gender: "male", state: "goa" });
    expect(r.status).toBe("ineligible");
    expect(r.almostEligible).toBe(false);
    expect(r.failed).toHaveLength(2);
  });

  it("is not almost-eligible when one fails but another is still unknown", () => {
    const r = checkScheme(ladkiBahinLike, { ...base, taxPayer: undefined, age: 70 });
    expect(r.status).toBe("ineligible");
    expect(r.almostEligible).toBe(false);
  });

  it("reports incomplete with the exact missing questions", () => {
    const r = checkScheme(ladkiBahinLike, { state: "maharashtra", gender: "female" });
    expect(r.status).toBe("incomplete");
    expect(r.missing.sort()).toEqual(["age", "income", "taxPayer"]);
  });

  it("does not ask for answers that cannot change the outcome", () => {
    const disability = scheme(all(when("disabled", "eq", true), when("disabilityPct", "gte", 40)));
    const r = checkScheme(disability, { disabled: false });
    expect(r.status).toBe("ineligible");
    expect(r.missing).toEqual([]);
  });

  it("treats a labelled root all() as a single requirement", () => {
    const s = scheme(labelled(all(female(), when("marital", "eq", "widowed")), { en: "A widow", hi: "विधवा महिला" }));
    const r = checkScheme(s, { gender: "female", marital: "married" });
    expect(r.criteria).toHaveLength(1);
    expect(r.status).toBe("almost");
    expect(explainFailure(r.failed[0], "en")).toBe("A widow");
  });

  it("a single non-all root is one criterion", () => {
    const r = checkScheme(scheme(female()), { gender: "male" });
    expect(r.criteria).toHaveLength(1);
    expect(r.status).toBe("almost");
  });
});

describe("eligibleAtAge", () => {
  const apy = scheme(all(...ageBetween(18, 40)));
  const oldAge = scheme(all(when("age", "gte", 60), when("bpl", "eq", true)));

  it("re-evaluates with a hypothetical age and leaves the rest of the profile alone", () => {
    const p: Profile = { age: 25, bpl: true };
    expect(eligibleAtAge(apy, p, 40)).toBe(true);
    expect(eligibleAtAge(apy, p, 41)).toBe(false);
    expect(eligibleAtAge(oldAge, p, 59)).toBe(false);
    expect(eligibleAtAge(oldAge, p, 60)).toBe(true);
    expect(eligibleAtAge(oldAge, { ...p, bpl: false }, 70)).toBe(false);
    expect(p.age).toBe(25);
  });
});

describe("helpers", () => {
  it("fieldsUsed lists every field a rule tree mentions", () => {
    const rule = all(female(), any(when("caste", "in", ["sc"]), not(when("minority", "eq", true))));
    expect(fieldsUsed(rule).sort()).toEqual(["caste", "gender", "minority"]);
  });

  it("missingFields is empty once the outcome is decided", () => {
    const rule = any(female(), when("caste", "in", ["sc"]));
    expect(missingFields(evaluate(rule, { gender: "female" }), { gender: "female" })).toEqual([]);
  });
});

describe("explainRule", () => {
  it("prefers the rule's own label", () => {
    expect(explainRule(labelled(notTaxPayer(), { en: "No taxpayers", hi: "कोई आयकरदाता नहीं" }), "hi")).toBe("कोई आयकरदाता नहीं");
  });

  it("generates readable sentences in both languages", () => {
    expect(explainRule(incomeUpTo(250_000), "en")).toBe("Annual family income is ₹2.5 lakh or less");
    expect(explainRule(incomeUpTo(250_000), "hi")).toBe("परिवार की सालाना आय ₹2.5 लाख या उससे कम हो");
    expect(explainRule(residentOf("tamil-nadu"), "en")).toBe("Lives in Tamil Nadu");
    expect(explainRule(residentOf("tamil-nadu"), "hi")).toBe("तमिलनाडु के निवासी हों");
    expect(explainRule(isFalse("pucca"), "en")).toBe("Family does not own a pucca house");
    expect(explainRule(when("caste", "in", ["sc", "st", "pvtg"]), "en")).toBe("Social category: SC, ST or PVTG");
    expect(explainRule(when("disabilityPct", "gte", 40), "en")).toBe("Disability is 40% or more");
  });

  it("joins composites", () => {
    expect(explainRule(any(female(), when("caste", "in", ["sc"])), "en")).toBe("Gender: Female or Social category: SC");
  });
});
