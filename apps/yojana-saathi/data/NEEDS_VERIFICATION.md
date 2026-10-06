# Needs verification

Schemes and facts a human should confirm against the official source before launch.
Every scheme with `status: "check-status"` must appear here (the dataset test enforces it).
Batch notes from the original research pass are kept below as written.

## Summary (23 schemes marked `check-status`, research pass of 2026-10-06)

- `anna-bhagya`
- `cm-comprehensive-health-insurance`
- `delhi-old-age-pension`
- `indira-gandhi-widow-pension`
- `kalaignar-magalir-urimai-thogai`
- `kisan-credit-card`
- `lakhpati-didi`
- `merit-cum-means-scholarship-minorities`
- `mission-vatsalya-sponsorship`
- `mukhyamantri-annapurna-yojana`
- `mukhyamantri-yuva-karya-prashikshan`
- `pm-kusum`
- `pm-matsya-sampada-yojana`
- `pm-poshan`
- `pm-ujjwala-yojana`
- `pmegp`
- `pmkvy`
- `poshan-anganwadi`
- `post-matric-scholarship-minorities`
- `post-matric-scholarship-sc`
- `pre-matric-scholarship-minorities`
- `stand-up-india`
- `vidiyal-payanam`

Also worth a look:
- **MGNREGA** was replaced by the VB-G RAM G Act from 1 July 2026; it is covered by `vb-g-ram-g` (searchable as MGNREGA/NREGA). Its portal (vbgramg.dord.gov.in) needs JavaScript, so only offline steps are listed; a reported ₹300/day minimum wage and a 31 Dec 2026 card-transition deadline are unconfirmed and left out.
- The guidelines for several scholarships (SC, ST, OBC) ran 2021-22 to 2025-26; recheck once the 2026-31 versions are notified.
- `pm-internship-scheme` is a pilot; its terms were revised in 2026.

## Research notes by batch

### batch-a-agriculture-energy
- `kisan-credit-card`: MISS (7% / 1.5% subvention / 3% PRI → 4% effective, ₹2 lakh sub-limit for animal husbandry & fisheries) is confirmed only for FY 2025-26 (CCEA May 2025; RBI circular Jan 2026). Continuation for FY 2026-27 not confirmed on an official page. Budget 2025-26 raised the KCC limit under MISS to ₹5 lakh, but whether the subvention now applies on the full ₹5 lakh (secondary sources say concessional 7% stays on the first ₹3 lakh) is unconfirmed. Text keeps subvention at ₹3 lakh. Ministry set to agriculture-farmers-welfare (DA&FW runs MISS).
- `pm-kusum`: Scheme sanction period ended 31 Mar 2026; MNRE extended completion to 31 Mar 2027 for projects with PPA/NTP issued by 31 Dec 2025 (reported April 2026). PM-KUSUM 2.0 "under consideration", not yet approved. Unclear whether states are accepting new farmer applications for Components B/C. Subsidy pattern (30% CFA / 50% special-category, ≥30% state) from MNRE guidelines.
- `pm-matsya-sampada-yojana`: Officially extended only up to FY 2025-26. ₹2,500 crore in BE 2026-27 (reported Sept 2026 around 6-year anniversary) suggests it continues, but no official extension order/new period found. 40%/60% subsidy rates confirmed.
- `pm-ujjwala-yojana`: ₹300 targeted subsidy for up to 9 refills confirmed for FY 2025-26 (CCEA Aug 2025); 25 lakh extra connections approved for FY 2025-26. For FY 2026-27, secondary sources (not official) report ₹300 continues but subsidised refills cut from 9 to 4/year, and biometric Aadhaar authentication from 1 Oct 2026. Refill count left out of the file; whether new deposit-free connections are still being released in FY 2026-27 is unconfirmed.
- Note (`pm-fasal-bima-yojana`, active): official continuation was approved through 2025-26 (Jan 2025); Kharif 2026 enrolment is running and a PIB backgrounder (Aug 2026) covers it. Wild-animal add-on cover from Kharif 2026 confirmed via secondary sources only; worded as state-optional.
- Note (`pm-kisan-maandhan-yojana`, active): still open — enrolment reported at ~24.96 lakh as of 6 Feb 2026; enrolment via CSC / maandhan.in.

### batch-b-health-senior

All 11 schemes confirmed as running, with current amounts, so none is marked check-status. Points worth a human look:

- `indira-gandhi-old-age-pension`: central share ₹200 (ages 60–79) / ₹500 (80+) confirmed on nsap.dord.gov.in and the Nov 2025 PIB document. News reports describe a *proposal* to raise these amounts (to ₹500 / ₹1,000) and to use SECC data for targeting. No approval found as of 2026-10-06. Re-check if it gets approved. The old NSAP site nsap.nic.in no longer resolves; officialUrl is nsap.dord.gov.in.
- `national-family-benefit-scheme`: nsap.dord.gov.in still describes the breadwinner's age as 18–64, while PIB (Nov 2025) and the 2012 revision say 18–59. The text uses 18–59. No age rule is encoded either way.
- `senior-citizens-savings-scheme`: 8.2% for Oct–Dec 2026 is confirmed by several news reports of the Ministry of Finance (DEA) notification dated 30 Sep 2026. I couldn't load the official nsiindia.gov.in rate page (TLS error). The rate is in the text only, not in `value`. Update it each quarter.
- `rashtriya-vayoshri-yojana`: now a component of Atal Vayo Abhyuday Yojana (AVYAY), approved "up to 2025-26". An AIR news item from Sep 2026 shows it is still active. No formal extension beyond 2025-26 was found. The ₹15,000/month income limit dates from the 2020-21 revision (ALIMCO PDF, vikaspedia). It is encoded as incomeUpTo(₹1.8 lakh/yr) OR BPL.
- `janani-suraksha-yojana`: the low-performing-state list (UP, Uttarakhand, Bihar, Jharkhand, MP, Chhattisgarh, Assam, Rajasthan, Odisha, J&K) is taken from the NHM page. Ladakh, carved out of J&K, is not included. The ₹500 for BPL home delivery comes from long-standing JSY guidelines and is not on the current NHM page.
- `ni-kshay-poshan-yojana` and `ayushman-bharat-pmjay`: eligibility is everyone(), because the profile can't capture TB or SECC entitlement. Ni-kshay deliberately has no `value`, so a ₹1,000/month amount isn't counted for every user. PM-JAY keeps a ₹5 lakh `cover` value.
- `pmjay.gov.in`, `pmbjp.gov.in` and `nsap.nic.in` didn't respond to curl from this machine, so the officialUrls are beneficiary.nha.gov.in, janaushadhi.gov.in and nsap.dord.gov.in, which all return 200.

### batch-c-housing-food-women
- `pm-poshan`: Scheme approval (2021-22 to 2025-26) ran out on 31 Mar 2026. The Ministry of Education extended it on the same terms until 30 Sep 2026 or until the 16th Finance Commission cycle (2026-31) is approved, whichever comes first. As of 2026-10-06 I couldn't find that 2026-31 approval. Meals are almost certainly still being served, but please confirm the scheme is formally continued, and whether any changes (e.g. breakfast, Class 9-10) were added.
- `poshan-anganwadi`: Mission Saksham Anganwadi & POSHAN 2.0 was approved only for the 15th FC period (2021-22 to 2025-26). It falls under the same Finance Ministry interim extension to 30 Sep 2026, and I found no 2026-31 approval. I also couldn't confirm that beneficiaries can self-register on Poshan Tracker, so the file lists only offline (anganwadi) registration.
- `mission-vatsalya-sponsorship`: The ₹4,000/month amount and the ₹72,000 rural / ₹96,000 urban income limits come from the 2022 guidelines. The scheme is a 15th FC CSS, and I found no 2026-31 approval. I also couldn't confirm the joint bank account detail against the guideline PDF (missionvatsalya.wcd.gov.in blocks bots).
- `indira-gandhi-widow-pension`: The ₹300/month amount (ages 40-79) is confirmed and unchanged since 2012. NSAP was approved "in present form" only for 2021-26, and I found no 2026-31 approval. A revision has been proposed (to ₹800+), so recheck the amount once the scheme is re-approved.
- `lakhpati-didi`: This is a DAY-NRLM target/initiative (household income of at least ₹1 lakh/yr), not an entitlement with a defined individual benefit. Support (training, SHG credit, market links) comes through existing NRLM components. Marked check-status per the batch brief. lakhpatididi.gov.in shows 3.46 crore achieved; the new target is reported (secondary sources) as 6 crore by March 2029.
- `pmay-urban-2`: `value` uses the ₹2.5 lakh BLC/AHP assistance (EWS only). ISS for LIG/MIG is up to ₹1.8 lakh. The exclusion "already received a house under any govt housing scheme" is worded softly because I couldn't read the operational-guidelines PDF (the 20-year look-back is from memory and is not stated in the file).
- `pmay-gramin`: The detailed exclusion list (the 10 criteria from Sep 2024) was confirmed only through news and secondary summaries of the MoRD notification, and the irrigated-land thresholds are simplified. pmayg.nic.in times out to curl, but it is the known official portal.
- All other schemes (`swachh-bharat-mission-gramin`, `pm-garib-kalyan-anna-yojana`, `sukanya-samriddhi-yojana`, `nps-vatsalya`) were confirmed current as of 2026-10-06. SBM-G Phase II is funded through FY 2026-27. PMGKAY runs to 31 Dec 2028. The SSY rate is 8.2% for Oct-Dec 2026. NPS Vatsalya follows the 2025 guidelines (minimum ₹250).

### batch-d-education
- `post-matric-scholarship-sc`: income ceiling. ₹2.5 lakh is still the last notified figure (socialjustice.gov.in, PIB, state portals for 2026-27). But in March 2026 MoSJE told the Parliamentary Standing Committee it plans to raise it to ₹4.5 lakh and cap course fees from 2026-27 (careers360, 16 Mar 2026). I could not find a notification or cabinet approval. If it has been notified, update `incomeUpTo(250_000)` to 450_000 and edit the FAQ. The scheme's 2021-22 to 2025-26 cycle has ended, though states are taking 2026-27 applications.
- `post-matric-scholarship-sc` / `pre-matric-scholarship-sc` / `post-matric-scholarship-st` / `pm-yasasvi-obc`: the guidelines for all four are for the 15th Finance Commission cycle (2021-22 to 2025-26). All four are taking 2026-27 applications at the ₹2.5 lakh limit (Goa DIP 14 May 2026, tribal.nic.in). Only PMS-SC has a revision announced. Re-check the others when the 2026-31 guidelines come out.
- `post-matric-scholarship-st`: the official page gives the maintenance allowance only as "₹230 to ₹1,200 per month", so value is stored as ₹230 a month. launchedYear 2010 is when the current MoTA guidelines took effect (1 July 2010, according to the guideline PDF on tribal.nic.in). The scheme itself is much older.
- `pm-yasasvi-obc`: EBC/DNT can't be captured in the profile. The rule allows caste `obc` or `general` (EBC = economically backward people outside SC/ST/OBC lists), with a label. DNTs listed as SC/ST would be told they don't match. The page covers the post-matric part, and the other four parts are summarised in an FAQ.
- `national-overseas-scholarship-sc`: the rule only checks caste `sc` (115 of 125 slots). DNT, landless agricultural labourer and traditional artisan candidates are mentioned only in text. nosmsje.gov.in refused connections from here, so officialUrl uses socialjustice.gov.in/schemes/28. The 2026-27 guidelines PDF there was read in full. launchedYear 1954 is the commonly cited start year and was not re-checked today.
- `aicte-pragati-scholarship`: the 10,000 slots (5,000 degree + 5,000 diploma) come from PIB Dec 2023. I could not open the current AICTE guideline PDF (the links are broken). The 2026-27 AICTE notification (19 Jun 2026) confirms the scheme is open until 31 Oct 2026.
- `pm-vidyalaxmi`: I could not fetch the guideline PDF (403). The facts come from the PIB cabinet release (PRID 2071131) and the portal.

### batch-e-business-jobs
- `stand-up-india`: The original lending period ended in March 2025 (FM statement, newsonair.gov.in, 16 Mar 2026). A revamped version (reportedly loan cap doubled to ₹2 crore) was announced in March 2026 and was to go to Cabinet; no approval or launch found as of 2026-10-06. Kept with old ₹10 lakh–₹1 crore terms, no `value`. Update (or remove) once the revamp is notified.
- `pmegp`: Last approved cycle ran to 31 Mar 2026. Centre told Parliament (reported 3 Aug 2026) that EFC had met on continuation and further margin-money release depends on approval. Budget 2026-27 has an allocation (₹4,500 cr) but no continuation approval found. Limits (₹50 L / ₹20 L, 15–35% subsidy) are from the 2021-26 guidelines. No `value`.
- `pmkvy`: Skill India Programme (PMKVY 4.0 + NAPS + JSS) was approved only to 2025-26 (PIB Feb 2025). Secondary sources mention a proposed PMKVY 5.0 (2026-27 to 2030-31) but I found no official approval. Age 15–59 (STT 15–45, RPL 18–59) is the PMKVY 4.0 rule.
- `pm-internship-scheme`: status `pilot`. Revised terms (age 18–25, ₹9,000/month, ₹6,000 one-time grant, final-year UG/PG allowed) are from a 2026 PIB release (PRID 2254498, page returned 403 to the fetcher; contents confirmed via search snippets) and Business Today (22 Apr 2026). Internship length is reported as 6–9 months in some sources and 12 months in others, so it's left out of the text. The govt/company split of the ₹9,000 (₹8,100/₹900) is from secondary sources only and not used.
- `e-shram`: I couldn't confirm that the free one-year PMSBY accident cover for new registrants is still offered, so it's left out of the benefits.
- `national-apprenticeship-promotion-scheme`: NAPS-2 is still running in FY 2026-27 (PIB, July 2026), but it sits under the Skill India Programme, whose approval ran to 2025-26. Kept `active`.
- `pm-mudra-yojana` uses `everyone()` with no age rule, because I found no official minimum age.
- (discontinued) Mahatma Gandhi NREGA (`mgnrega`): replaced by the Viksit Bharat – Guarantee for Rozgar and Ajeevika Mission (Gramin) Act, 2025 (VB-G RAM G), in force from 1 July 2026: 125 days of guaranteed wage work per rural household, 60:40 Centre–state funding, new "Gramin Rozgar Guarantee Card" (old job cards valid after e-KYC until replaced). Sources: outlookmoney.com/news/vb-g-ram-g-act-replaces-mgnrega-implementation-to-take-effect-from-july-1, etvbharat.com (West Bengal notification, 1 Jul 2026). File not written. Suggest a new `vb-g-ram-g` scheme file once the official rules/portal are confirmed.

### batch-f-insurance-disability-minority-delhi
- `post-matric-scholarship-minorities`: not approved beyond 2021-22; no disbursal since 2022-23 (Standing Committee report, reported Mar 2026 by ThePrint/The Wire/Careers360). EFC approved revival twice but it has not gone to Cabinet. 2026-27 BE still has ₹581 cr. Not formally discontinued, so kept as check-status. Income cap (₹2 lakh) and 50% marks rule are from the last guidelines. No amounts in `value`. launchedYear 2007 from memory of the scheme history, not re-checked.
- `pre-matric-scholarship-minorities`: same freeze as above (2026-27 BE ₹198 cr). Restricted to Classes 9–10 from 2022-23 (vikaspedia, citing ministry). Income cap ₹1 lakh from last guidelines. launchedYear 2008 not re-checked.
- `merit-cum-means-scholarship-minorities`: same freeze; 2026-27 allocation cut to ~₹6 lakh (token). Arguably effectively discontinued, but no official closure found, so kept as check-status. A reviewer may prefer to drop it. launchedYear 2007 not re-checked.
- `delhi-old-age-pension`: the Social Welfare dept page still lists ₹2,000 (60–69, +₹500 SC/ST/minority) and ₹2,500 (70+); The Week (Nov 2025) quotes the same. A ₹500 hike (₹2,500/₹3,000) was announced in the March 2025 budget and the Sept 2025 enrolment drive, but I couldn't find an official order showing it in force. `value` uses ₹2,000. launchedYear 2010 is based on "since 2010-11" in the Nov 2025 report, not the original notification.
- `delhi-mahila-samriddhi-yojana`: renamed **Delhi Lakshmi Yojana** from 1 Aug 2026 (WCD gazette, 6 Aug 2026). The slug is unchanged and the file uses the new name, with the old name in `aka`. Active: registration is open and approval letters have been issued. That first payments began 1 Sep 2026 comes only from secondary reports.
- `delhi-ladli-scheme`: Delhi Ladli Scheme 2008 was superseded by the **Delhi Lakhpati Bitiya Scheme** from 1 Apr 2026 (WCD gazette, 30 Mar 2026). The slug is unchanged and the file uses the new name. Income cap is now ₹1.2 lakh. The online portal is delhilakhpatibitiyawcd.sbilife.co.in (JS-only), so officialUrl points at the WCD scheme page.
- `delhi-free-bus-travel-women`: Pink Saheli Smart Card. Age rule is unclear: DTC's 2025 bank EOI FAQ says "12+ years", while vikaspedia says 5+. No age rule is encoded. The exact date the card became mandatory moved several times (DTC circular: 1 Sep 2026; later reports: 1 Oct 2026), so the text says only that it is now required.
- `delhi-ayushman-bharat`: Delhi-specific beneficiary criteria (NFSA/SECC/Cabinet-decided categories) come from news reports of the Cabinet decision. No Delhi health dept page lists them. The ₹5 lakh top-up is confirmed by AIR (MoU of 5 Apr 2025).
- `delhi-widow-pension`: launchedYear 2010 is taken from the title of the "18–60 years, 2010" rules. The scheme may be older.

### batch-g-maharashtra-up
- `mukhyamantri-annapurna-yojana`: (check-status) Benefits (3 free 14.2 kg refills/year for Ladki Bahin and PM Ujjwala women, notified July 2024) are confirmed only from 2024 sources. I found no official 2025–26 or 2026–27 confirmation that refunds are still being paid, and the state top-up for Ujjwala homes (₹530 in 2024) may have changed. No `value` set.
- `mukhyamantri-yuva-karya-prashikshan`: (check-status) Stipends (₹6,000/₹8,000/₹10,000), age 18–35 and the 6-month duration come from the official CMYKPY note and rojgar.mahaswayam.gov.in, which still links CMYKPY registration. cmykpy.mahaswayam.gov.in timed out, and I could not confirm fresh 2026–27 intake on an official page. Secondary sites disagree on the duration (6 vs 11 months) and minimum education (10th vs 12th). I used the official 12th-pass minimum.
- `majhi-ladki-bahin`: Amount is still ₹1,500/month (WCD dept page; PRS 2026–27 budget analysis). The ₹2,100 increase has been promised but not notified, so recheck it. Exclusions follow the June/July 2024 GR as reported (four-wheeler, govt employee, income-tax payer, MP/MLA, board members). I could not open the GR PDF, and ladakibahin portal returns 403 to bots. Whether new registrations are open right now is unclear.
- `namo-shetkari-mahasanman-nidhi`: Value kept at ₹6,000/year (₹2,000 × 3; 8th instalment of ₹2,000 in March 2026). In Feb 2025 the CM announced a rise to ₹9,000/year, but I found no evidence it has been paid. Recheck it.
- `mahatma-jyotiba-phule-jan-arogya-yojana`: ₹5 lakh/family/year since the 1 July 2024 integration with PM-JAY. jeevandayee.gov.in did not load from here (timeout), so facts come from secondary and news sources (myscheme is JS-only). The Dec 2025 rise in procedures to 2,399 was announced by the minister, but its effective date is unconfirmed. The helpline numbers 155388 / 1800 233 2200 are worth a quick check.
- `up-old-age-pension`: sspy-up.gov.in still says "₹500" on its old-age eligibility page (stale). ₹1,000/month is confirmed by saharanpur.nic.in and 2025 government press coverage. The site's TLS certificate has expired (browsers may warn). Rural/urban income limits ₹46,080/₹56,460 are from the SSPY page. The rule uses the higher urban cap.
- `up-nirashrit-mahila-pension`: ₹1,000/month and the ₹2 lakh income cap are confirmed (saharanpur.nic.in, Aug 2025 govt release). launchedYear is set to 2021, when the ₹1,000 rate started. The original scheme year is unverified. Same sspy-up.gov.in certificate issue.
- `mukhyamantri-samuhik-vivah-yojana`: ₹1 lakh per couple and the ₹3 lakh income cap are confirmed on cmsvy.upsdc.gov.in. The same site gives the bride's bank transfer as ₹64,000 (home page) and ₹60,000 (brief-history page), so the lower ₹60,000 is used as `value`.
- `up-post-matric-scholarship`: Income caps (₹2.5 lakh SC/ST, ₹2 lakh General/OBC/minority) come from reputable secondary sources. The official niyamavali PDFs on scholarship.up.gov.in are scanned images I could not read. The 2026–27 timetable (issued 20-07-2026) confirms the scheme is running. launchedYear 2023 = date of the current revised guidelines.
- `mukhyamantri-kanya-sumangala-yojana`, `lek-ladki-yojana`, `mukhyamantri-yuva-udyami-abhiyan`: confirmed on official pages (mksy.up.gov.in, zpsatara.gov.in / icds.gov.in, msme1connect.up.gov.in). No doubts.

### batch-h-karnataka-tamilnadu
- `anna-bhagya`: The cabinet approved replacing the extra 5 kg of state rice with an "Indira food kit". The kit tender was cancelled in September 2026 so the kit could be redesigned (ETV Bharat, 21 Sep 2026), and extra rice is expected to continue until then. Re-check once the redesigned kit launches; the benefit text will need rewriting at that point. AAY per-card quantities were left out on purpose.
- `kalaignar-magalir-urimai-thogai`: The TVK government (elected April 2026) is still paying ₹1,000 a month. It has announced a restructure: a higher amount (₹2,500 promised), a possible rename to "Madhippumigu Magalir Thittam", and moving beneficiaries aged 60+ to old age pension. The only sources for these plans are secondary, and no G.O. has been seen. The eligibility and exclusion rules come from kmut.tn.gov.in/faq.html (2023 rules). kmut.tn.gov.in has an EXPIRED TLS certificate, so browsers may show a warning. Department set to Revenue & Disaster Management; please confirm.
- `cm-comprehensive-health-insurance`: The CM announced on 19 Aug 2026 (Rule 110) that cover rises from ₹5 lakh to ₹25 lakh per family per year. There is no G.O. or effective date yet, so `value` stays at ₹5 lakh. Update it when the order is issued. The ₹1.2 lakh income cap comes from myscheme and secondary sources, because cmchistn.com is a JS app that could not be read.
- `vidiyal-payanam`: The scheme was renamed "Magalir Vettri Payanam" and expanded on 2 Oct 2026, and the slug was kept. The facts come from news reports (South First, DT Next). No official TN Transport G.O. or press release was found. Not confirmed: the exact list of excluded services (AC/SETC) and whether the separate free-travel facility for persons with disabilities has changed. officialUrl is tnsta.gov.in (a generic page).
- `cm-breakfast-scheme`: The scheme was renamed "Perunthalaivar Kamarajar Breakfast Scheme" and extended to classes 6–8 from 22 Sep 2026 (tiruvarur.nic.in press release), and the slug was kept. officialUrl is the Social Welfare dept homepage because there is no dedicated scheme page. Status is active.
- `pudhumai-penn` / `tamil-pudhalvan` (active): Continuation under the TVK government is confirmed by news only (News Today, 14 May 2026). The official portals pudhumaipenn.tn.gov.in and umis.tn.gov.in did not respond from our network (connection refused/timeout), but search results confirm they exist. Implementing department (Social Welfare & Women Empowerment) is unconfirmed, especially for Tamil Pudhalvan.
- `gruha-jyothi` (active): The 2024 change from a "10% buffer" to "10 extra units" comes from news reports (South First / Deccan Herald) because no revised G.O. was found. Please confirm whether it applies to all consumers or only to low users.
- `yuva-nidhi` (active): The eligible pass-out years (2022–23 onward) and the exclusions come from vikaspedia/myscheme and secondary sources. The amounts (₹3,000/₹1,500) are confirmed on sevasindhugs.karnataka.gov.in.
- Note (taxonomy): there are no `department` slugs to choose from, so this note is just for the record. `gruha-lakshmi`'s tax/GST exclusion covers only the woman or her husband, not the whole family, so it is in the text and not encoded as `notTaxPayer()`.
