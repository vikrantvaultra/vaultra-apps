# Writing a scheme file

One scheme = one file. Central schemes go in `data/schemes/central/<slug>.ts`; state schemes in
`data/schemes/state/<state-slug>/<slug>.ts`. The file name must equal the slug.
`central/atal-pension-yojana.ts` is the reference: copy its shape exactly.

After adding or removing files, run `npm run schemes:index` (dev/build/test do it automatically).
Validate with `SCHEME_FILTER=<folder or slug> npx vitest run data/schemes.test.ts`.

## Ground rules (non-negotiable)

1. **Never invent facts.** Every amount, age limit, income cap and date must come from an official
   source (a `*.gov.in` / `*.nic.in` site, the scheme's own portal, PIB, an official gazette or
   guideline PDF). Use reputable secondary sources only to *find* the official one.
2. **If you can't confirm something is current**, set `status: "check-status"` and add a bullet to
   `data/NEEDS_VERIFICATION.md` saying exactly what is unconfirmed. Don't guess, and don't drop the scheme.
   Discontinued schemes are not added at all.
3. **Write everything yourself, in plain language.** Never copy sentences from myscheme.gov.in or any
   other site. Short sentences, everyday words, second person ("you") where natural.
4. **Hindi is written, not transliterated:** simple everyday Hindi (as in a Hindi newspaper), not heavy
   Sanskritised terms. Keep widely used English words (Aadhaar, OTP, KYC, BPL, online) as they are.
   Every Hindi list must have the same number of items as its English list.

## Fields

| Field | Guidance |
|---|---|
| `shortDescription` | One sentence, ≤ 240 chars, leading with the concrete benefit. |
| `ministry` | Central only: a slug from `MINISTRIES` in `data/taxonomy.ts`. |
| `department` | State schemes: the implementing department, `{ en, hi }`. |
| `categories` | 1–3 slugs from `CATEGORIES`. First one is the primary. |
| `tags` | 3–8 lowercase English search words people actually type ("scholarship", "widow", "loan"). |
| `benefitType` | `cash` · `in-kind` · `composite` · `loan` · `insurance` · `pension` · `savings` |
| `isDBT` | `true` only if money is paid by Direct Benefit Transfer into the beneficiary's account. |
| `value` | Optional. Only for a **fixed, official** amount. Ranges → the lower bound. Insurance/health cover → `kind: "cover"`; loans → `kind: "loan"` (max loan); pensions → `kind: "pension"`; everything else paid in money → `kind: "cash"`. No value for in-kind or variable benefits. |
| `ageRange` | Must match the `age` rules exactly (the test enforces it). |
| `kundliHouse` | One of: `education`, `career`, `business`, `farming`, `home`, `energy-savings`, `health`, `women-family`, `daughter`, `insurance`, `retirement`, `senior`. |
| `eligibility` | See below. |
| `details` | 2–3 short paragraphs: what it is, who runs it, how it works. |
| `benefits`, `eligibilityText`, `exclusions`, `documents` | Bullet lists (one fact per item). |
| `applicationProcess` | `online` and/or `offline` step lists. Real steps on the real portal. |
| `faqs` | 2–3 genuinely useful Q&As. |
| `officialUrl` | The page where people actually apply or learn more. Must load (check it). |
| `sources` | 2–4 https URLs you used, official first. |
| `lastVerified` | The date you checked the facts (YYYY-MM-DD). |
| `launchedYear` | Year the scheme or its current version started. |
| `status` | `active`, `pilot`, or `check-status` (see rule 2). |

## Eligibility rules

Use the helpers in `lib/engine/build.ts`; they are type-checked:

```ts
import { all, any, not, when, ageBetween, minAge, maxAge, residentOf, female, incomeUpTo,
         notTaxPayer, notGovtEmployee, isTrue, isFalse, labelled, everyone } from "@/lib/engine/build";

eligibility: all(
  residentOf("karnataka"),            // every state scheme needs this
  female(),
  ...ageBetween(21, 65),
  incomeUpTo(250_000),                // compared against the user's income band
  when("caste", "in", ["sc", "st", "pvtg"]),   // PVTG is a subset of ST: include it whenever ST qualifies
  when("occupation", "in", ["farmer"]),
  isFalse("pucca"),
  labelled(notTaxPayer(), { en: "No one in the family pays income tax", hi: "परिवार में कोई आयकर न देता हो" }),
)
```

Profile fields (see `Profile` in `lib/types.ts`): gender, age, state, area, caste, minority, disabled,
disabilityPct, marital, student, employment, occupation, govtEmployee, bpl, income, taxPayer, pucca,
daughterUnder10, pregnantOrLactating.

- **Encode only what the profile can answer.** Criteria the questionnaire can't capture (land records,
  bank account, specific course, marks, ration-card colour) go in `eligibilityText`, not in rules.
- **`taxPayer` means "anyone in the family"**. Only use it when the official criterion is about the
  family/household. If the rule is about the individual (e.g. APY), put it in text only.
- **`bpl`**: use when the scheme requires BPL / Antyodaya / priority-household status.
- **Keep each top-level condition separate** inside `all(...)`, because each becomes one ✓/✗ line.
  Add `labelled(...)` when the auto-generated wording would be unclear.
- `everyone()` for schemes open to all residents with no profile-checkable conditions.
