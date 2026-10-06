import { expect, test } from "@playwright/test";

test("fuzzy search finds schemes in English and Hindi", async ({ page }) => {
  await page.goto("/search?q=kisan");
  await expect(page.getByRole("heading", { name: "PM Kisan Samman Nidhi" })).toBeVisible();
  await page.goto("/hi/search?q=पेंशन");
  await expect(page.getByRole("heading", { name: "अटल पेंशन योजना" })).toBeVisible();
});

test("old names still find renamed schemes", async ({ page }) => {
  await page.goto("/search?q=mgnrega");
  await expect(page.locator("article h3").first()).toContainText(/VB-G RAM G|Rozgar/i);
});

test("filters live in the URL, show as chips and can be removed", async ({ page }) => {
  await page.goto("/search?state=karnataka&level=state");
  const count = page.getByText(/^\d+ schemes?$/);
  await expect(page.getByRole("heading", { name: "Gruha Lakshmi" })).toBeVisible();
  const filtered = Number((await count.textContent())!.match(/\d+/)![0]);
  const chip = page.getByRole("button", { name: /Remove filter: Level: State/ });
  await expect(chip).toBeVisible();
  await chip.click();
  await expect(page).not.toHaveURL(/level=state/);
  // Without the level filter, central schemes join the Karnataka ones
  await expect.poll(async () => Number((await count.textContent())!.match(/\d+/)![0])).toBeGreaterThan(filtered);
});

test("person filters hide schemes that can't apply", async ({ page }) => {
  await page.goto("/search?gender=male&age=30&q=ladki");
  await expect(page.getByRole("heading", { name: "Mukhyamantri Majhi Ladki Bahin Yojana" })).toHaveCount(0);
  await page.goto("/search?gender=female&age=30&state=maharashtra&q=ladki");
  await expect(page.getByRole("heading", { name: "Mukhyamantri Majhi Ladki Bahin Yojana" })).toBeVisible();
});

test("filters open in a bottom sheet on phones", async ({ page, isMobile }) => {
  test.skip(!isMobile, "mobile only");
  await page.goto("/search");
  await page.getByRole("button", { name: /^Filters/ }).click();
  const sheet = page.getByRole("dialog");
  await sheet.getByLabel("Category", { exact: true }).selectOption("health");
  await sheet.getByRole("button", { name: /^Show \d+ schemes?$/ }).click();
  await expect(page).toHaveURL(/category=health/);
});

test("browse pages show their schemes", async ({ page }) => {
  await page.goto("/category/education");
  await expect(page.getByRole("heading", { level: 1, name: "Education & Scholarships" })).toBeVisible();
  await expect(page.locator("article").first()).toBeVisible();
  await page.goto("/state/tamil-nadu?q=pudhumai");
  await expect(page.getByRole("heading", { name: "Pudhumai Penn" })).toBeVisible();
});
