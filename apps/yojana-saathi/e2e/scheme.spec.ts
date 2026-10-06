import { expect, test } from "@playwright/test";
import { answerQuestions, PERSONA, seedProfile } from "./helpers";

test("scheme page has all sections, sources and the disclaimer", async ({ page }) => {
  await page.goto("./schemes/pm-kisan");
  await expect(page.getByRole("heading", { level: 1, name: "PM Kisan Samman Nidhi" })).toBeVisible();
  for (const name of ["Details", "Benefits", "Eligibility", "Exclusions", "How to apply", "Documents", "FAQs", "Sources"]) {
    await expect(page.getByRole("heading", { level: 2, name })).toBeAttached();
  }
  await expect(page.getByText(/independent project, not affiliated with the Government of India/).first()).toBeVisible();
  await expect(page.getByText(/Last verified/).first()).toBeVisible();
});

test("eligibility check asks only what's missing and explains the result", async ({ page }) => {
  await page.goto("./schemes/pm-kisan");
  await page.getByRole("button", { name: "Check eligibility" }).last().click();
  const dialog = page.getByRole("dialog");
  const asked = await answerQuestions(page, dialog, async () => (await dialog.getByText("Conditions we checked").count()) > 0);
  expect(asked.length).toBeLessThanOrEqual(4);
  await expect(dialog.getByRole("heading", { name: "You look eligible" })).toBeVisible();
});

test("almost eligible names the one failing condition", async ({ page }) => {
  await seedProfile(page, { ...PERSONA, age: 67 });
  await page.goto("./schemes/majhi-ladki-bahin");
  await page.getByRole("button", { name: "Check eligibility" }).last().click();
  const dialog = page.getByRole("dialog");
  await expect(dialog.getByRole("heading", { name: "You're almost eligible" })).toBeVisible();
  await expect(dialog.getByText("Age is 65 or below")).toBeVisible();
});

test("apply opens a leaving-site notice before the official portal", async ({ page }) => {
  await page.goto("./schemes/pm-kisan");
  await page.getByRole("button", { name: /Apply on official portal/ }).last().click();
  const dialog = page.getByRole("dialog");
  await expect(dialog.getByRole("heading", { name: "You're leaving Yojana Saathi" })).toBeVisible();
  const link = dialog.getByRole("link", { name: /Continue to official site/ });
  await expect(link).toHaveAttribute("target", "_blank");
  await expect(link).toHaveAttribute("href", /pmkisan\.gov\.in/);
});

test("section tabs scroll to their section and highlight it", async ({ page }) => {
  await page.goto("./schemes/rashtriya-vayoshri-yojana");
  const nav = page.getByRole("navigation", { name: "Sections on this page" });
  for (const name of ["Benefits", "Documents", "Details", "Sources"]) {
    await nav.getByRole("link", { name, exact: true }).click();
    await expect(nav.getByRole("link", { name, exact: true })).toHaveAttribute("aria-current", "location");
    await expect
      .poll(() =>
        page.evaluate((n) => {
          const bar = document.querySelector('nav[aria-label="Sections on this page"]')!.getBoundingClientRect().bottom;
          const h = [...document.querySelectorAll("main h2")].find((x) => x.textContent === n)!;
          return Math.round(h.getBoundingClientRect().top - bar);
        }, name),
      )
      .toBe(16);
  }
});

test("the section highlight follows normal scrolling", async ({ page }) => {
  await page.goto("./schemes/pm-kisan");
  const nav = page.getByRole("navigation", { name: "Sections on this page" });
  await page.getByRole("heading", { level: 2, name: "Exclusions" }).evaluate((h) => window.scrollTo({ top: h.getBoundingClientRect().top + window.scrollY - 140 }));
  await expect(nav.getByRole("link", { name: "Exclusions", exact: true })).toHaveAttribute("aria-current", "location");
});
