import { expect, type Page } from "@playwright/test";

/** A complete profile: 30-year-old OBC woman farmer in rural Maharashtra, BPL */
export const PERSONA: Record<string, unknown> = {
  gender: "female",
  age: 30,
  birthYear: new Date().getFullYear() - 30,
  state: "maharashtra",
  area: "rural",
  caste: "obc",
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
};

/** Answers keyed by a pattern matching the question heading */
export const ANSWERS: [RegExp, RegExp | number][] = [
  [/gender/i, /^Female$/],
  [/How old/i, 30],
  [/state or UT/i, /^Maharashtra$/],
  [/rural or urban/i, /^Rural$/],
  [/social category/i, /^OBC$/],
  [/minority/i, /^No$/],
  [/disability/i, /^No$/],
  [/marital/i, /^Married$/],
  [/studying/i, /^No$/],
  [/describes your work/i, /Self-employed/],
  [/main occupation/i, /Farmer/],
  [/government employee/i, /^No$/],
  [/BPL/i, /^Yes$/],
  [/yearly income/i, /₹1 – 2 lakh/],
  [/income tax/i, /^No$/],
  [/pucca/i, /^No$/],
  [/daughter/i, /^No$/],
  [/pregnant/i, /^No$/],
  [/year were you born/i, new Date().getFullYear() - 30],
  [/start a business/i, /^Yes$/],
  [/build or buy a house/i, /^Yes$/],
];

/** Answers whatever question is on screen until `done` returns true */
export async function answerQuestions(page: Page, scope: ReturnType<Page["locator"]>, done: () => Promise<boolean>, max = 30) {
  const asked: string[] = [];
  for (let i = 0; i < max && !(await done()); i++) {
    const heading = scope.locator("h1, h3").first();
    await expect(heading).toBeVisible();
    const text = (await heading.textContent()) ?? "";
    if (asked.at(-1) === text) {
      await page.waitForTimeout(200);
      continue;
    }
    const answer = ANSWERS.find(([q]) => q.test(text));
    if (!answer) throw new Error(`No scripted answer for "${text}"`);
    asked.push(text);
    const value = answer[1];
    if (typeof value === "number") {
      await scope.locator("input[type=number]").fill(String(value));
      await scope.getByRole("button", { name: /^Next$/ }).click();
    } else {
      await scope.getByRole("radio", { name: value }).first().click();
    }
    await page.waitForTimeout(250);
  }
  return asked;
}

export async function seedProfile(page: Page, profile: Record<string, unknown> = PERSONA) {
  await page.addInitScript((p) => localStorage.setItem("ys-profile-v1", JSON.stringify(p)), profile);
}
