import { all, minAge, residentOf } from "@/lib/engine/build";
import type { Scheme } from "@/lib/types";

const scheme: Scheme = {
  slug: "chhattisgarh-mukhyamantri-pension-yojana",
  tier: "compact",
  overlapGroup: "old-age-pension",
  name: { en: "Mukhyamantri Pension Yojana (Chhattisgarh)", hi: "मुख्यमंत्री पेंशन योजना (छत्तीसगढ़)" },
  aka: ["CM Pension Yojana Chhattisgarh", "old age pension Chhattisgarh", "vridhavastha pension CG"],
  shortDescription: {
    en: "A Chhattisgarh state pension for needy elderly people aged 60 and above who are not covered by the central old-age pension, paid monthly into the bank account.",
    hi: "छत्तीसगढ़ सरकार की पेंशन उन ज़रूरतमंद बुज़ुर्गों के लिए जिनकी उम्र 60 साल या उससे ज़्यादा है और जिन्हें केंद्र की वृद्धावस्था पेंशन नहीं मिलती, हर महीने बैंक खाते में।",
  },
  level: "state",
  state: "chhattisgarh",
  department: {
    en: "Social Welfare Department, Government of Chhattisgarh",
    hi: "समाज कल्याण विभाग, छत्तीसगढ़ सरकार",
  },
  categories: ["social-welfare", "pension-insurance"],
  tags: ["old age pension", "senior citizen", "pension", "monthly", "dbt", "chhattisgarh"],
  benefitType: "pension",
  isDBT: true,
  ageRange: { min: 60 },
  kundliHouse: "senior",
  eligibility: all(residentOf("chhattisgarh"), minAge(60)),

  details: {
    en: [
      "Mukhyamantri Pension Yojana is one of three pension schemes paid for by the Chhattisgarh government itself. It supports needy elderly people who are not covered under the central Indira Gandhi National Old Age Pension.",
      "Pensions are approved by a committee after checking the application, and then paid monthly by DBT. State pension payments were up to date until March 2026. The exact amount and income rules should be confirmed with the Social Welfare Department.",
    ],
    hi: [
      "मुख्यमंत्री पेंशन योजना छत्तीसगढ़ सरकार की अपनी तीन पेंशन योजनाओं में से एक है। यह उन ज़रूरतमंद बुज़ुर्गों की मदद करती है जो केंद्र की इंदिरा गांधी राष्ट्रीय वृद्धावस्था पेंशन में शामिल नहीं हैं।",
      "आवेदन की जाँच के बाद समिति पेंशन मंज़ूर करती है, फिर हर महीने DBT से भुगतान होता है। मार्च 2026 तक राज्य पेंशन का भुगतान पूरा हो चुका था। सही राशि और आय के नियम समाज कल्याण विभाग से पक्के कर लें।",
    ],
  },
  benefits: {
    en: ["A monthly pension paid into your bank account.", "District social welfare offices report state pensions in the range of ₹500 to ₹650 a month."],
    hi: ["हर महीने बैंक खाते में पेंशन।", "ज़िला समाज कल्याण कार्यालयों के अनुसार राज्य की पेंशन ₹500 से ₹650 महीने के बीच है।"],
  },
  eligibilityText: {
    en: [
      "Aged 60 or above and living in Chhattisgarh.",
      "From a needy family.",
      "Not already getting the central old-age pension (IGNOAPS).",
    ],
    hi: [
      "उम्र 60 साल या उससे ज़्यादा और छत्तीसगढ़ में निवास।",
      "ज़रूरतमंद परिवार से हों।",
      "पहले से केंद्र की वृद्धावस्था पेंशन (IGNOAPS) न मिल रही हो।",
    ],
  },
  applicationProcess: {
    offline: {
      en: [
        "Apply at your gram panchayat or janpad panchayat (villages) or the pension branch of your urban body (towns). Problems can also be raised on CM Helpline 1076.",
        "Attach age proof, Aadhaar, bank passbook and proof of residence.",
        "After approval, the pension is paid monthly by DBT. Keep your bank account linked to Aadhaar and your mobile number.",
      ],
      hi: [
        "गाँव में ग्राम पंचायत या जनपद पंचायत में, और शहर में नगरीय निकाय की पेंशन शाखा में आवेदन करें। समस्या होने पर मुख्यमंत्री हेल्पलाइन 1076 पर भी शिकायत कर सकते हैं।",
        "उम्र का प्रमाण, आधार, बैंक पासबुक और निवास प्रमाण लगाएँ।",
        "मंज़ूरी के बाद पेंशन हर महीने DBT से मिलती है। बैंक खाते को आधार और मोबाइल नंबर से जोड़कर रखें।",
      ],
    },
  },
  officialUrl: "https://dprcg.gov.in/post/1777459415/Social-Security-Pension-Schemes-have-become-a-strong-link-of-trust-a-major-step-towards-timely-payment-and-transparency",
  sources: [
    "https://dprcg.gov.in/post/1777459415/Social-Security-Pension-Schemes-have-become-a-strong-link-of-trust-a-major-step-towards-timely-payment-and-transparency",
    "https://dprcg.gov.in/post/1788350671/Raipur-CM-Helpline-comes-to-the-rescue-Ugrasen-Nande-to-receive-benefits-of-the-Chief-Minister-s-Pension-Scheme",
    "https://dprcg.gov.in/post/1790084899/Raipur-A-Story-of-Service-%E2%80%93-Over-96-000-pensioners-in-the-district-are-receiving-monthly-pension-payments-totaling-more-than-%E2%82%B94-83-crore",
  ],
  lastVerified: "2026-10-06",
  launchedYear: 2012,
  status: "check-status",
};

export default scheme;
