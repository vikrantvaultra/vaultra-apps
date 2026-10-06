import { expect, test } from "@playwright/test";
import { answerQuestions } from "./helpers";

test("home → Kundli → reveal → share image", async ({ page }) => {
  const started = Date.now();
  await page.goto("./");
  await page.getByRole("link", { name: /Get my Sarkari Kundli/ }).first().click();
  await page.getByRole("button", { name: /Make my Kundli/ }).click();
  await answerQuestions(page, page.locator("main"), async () => (await page.getByText("Reading the rules of every scheme…").count()) > 0);

  await page.getByRole("button", { name: "Skip animation" }).click();
  await expect(page.getByRole("heading", { name: "Share your Kundli" })).toBeVisible();
  await expect(page.getByText(/No stars involved, just the rules of every scheme/).first()).toBeVisible();
  await expect(page.getByText("Lifetime cash benefits").first()).toBeVisible();

  // A house opens its schemes
  await page.getByRole("button", { name: /^House 4, Farming/ }).click();
  await expect(page.getByRole("dialog").getByRole("link", { name: "PM Kisan Samman Nidhi" })).toBeVisible();
  await page.keyboard.press("Escape");

  // Ticking a scheme raises the Saathi Score
  await page.locator("#now-h ~ ul").getByText("Already receiving").first().click();
  await expect(page.getByText(/^1 of \d+ schemes you qualify for today$/)).toBeVisible();

  // Share card downloads as a PNG and never contains sensitive answers
  await page.getByLabel("First name (optional)").fill("Asha");
  const download = page.waitForEvent("download");
  await page.getByRole("button", { name: /Download Story/ }).click();
  expect((await download).suggestedFilename()).toBe("sarkari-kundli-story.png");
  const card = await page.locator("[aria-hidden] >> text=Asha's Sarkari Kundli").first().locator("xpath=ancestor::div[@lang][1]").innerText();
  expect(card).not.toMatch(/OBC|BPL|lakh a year income|disab/i);

  expect(Date.now() - started).toBeLessThan(120_000);
});
