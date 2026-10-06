import { expect, test } from "@playwright/test";
import { answerQuestions } from "./helpers";

test("questionnaire → matched results with the Kundli entry point", async ({ page }) => {
  await page.goto("/find");
  await page.getByRole("button", { name: "Let's start" }).click();
  const asked = await answerQuestions(page, page.locator("main"), async () => page.url().includes("/search"));
  expect(asked.length).toBeGreaterThan(12);
  // Skip logic: a woman is asked about pregnancy; questions about disability % are skipped
  expect(asked.some((q) => /pregnant/i.test(q))).toBe(true);
  expect(asked.some((q) => /disability percentage/i.test(q))).toBe(false);

  await expect(page).toHaveURL(/mine=yes/);
  await expect(page.locator("#find-banner-h")).toContainText(/You may be eligible for \d+ schemes/);
  await expect(page.getByRole("link", { name: /See my Sarkari Kundli/ })).toBeVisible();
  await expect(page.getByRole("heading", { name: "Atal Pension Yojana" })).toBeVisible();

  // Answers were auto-saved
  const saved = await page.evaluate(() => JSON.parse(localStorage.getItem("ys-profile-v1") ?? "{}"));
  expect(saved).toMatchObject({ gender: "female", state: "maharashtra", income: "1l-2l" });
});
