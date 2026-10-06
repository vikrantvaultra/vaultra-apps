import { all, ageBetween, isTrue, residentOf, when } from "@/lib/engine/build";
import type { Scheme } from "@/lib/types";

const scheme: Scheme = {
  slug: "teelu-rauteli-pension",
  tier: "compact",
  name: { en: "Teelu Rauteli Special Pension Scheme", hi: "तीलू रौतेली विशेष पेंशन योजना" },
  aka: ["Teelu Rauteli Pension", "Tilu Rauteli Pension"],
  shortDescription: {
    en: "Rural people in Uttarakhand aged 18 to 60 who became 20–40% disabled while doing farm work get ₹1,200 a month. There is no income limit.",
    hi: "उत्तराखंड के गाँवों में रहने वाले 18 से 60 साल के जो लोग खेती का काम करते हुए 20–40% दिव्यांग हो गए, उन्हें हर महीने ₹1,200 मिलते हैं। आय की कोई सीमा नहीं है।",
  },
  level: "state",
  state: "uttarakhand",
  department: { en: "Social Welfare Department, Government of Uttarakhand", hi: "समाज कल्याण विभाग, उत्तराखंड सरकार" },
  categories: ["disability", "agriculture", "pension-insurance"],
  tags: ["teelu rauteli", "farm accident", "disability", "pension", "farmer", "uttarakhand"],
  benefitType: "pension",
  isDBT: true,
  value: { amount: 1200, period: "monthly", kind: "pension" },
  ageRange: { min: 18, max: 60 },
  kundliHouse: "farming",
  eligibility: all(
    residentOf("uttarakhand"),
    when("area", "eq", "rural"),
    isTrue("disabled"),
    when("disabilityPct", "gte", 20),
    when("disabilityPct", "lte", 40),
    ...ageBetween(18, 60),
  ),

  details: {
    en: [
      "Named after the Garhwali heroine Teelu Rauteli, this pension supports people in villages who were partly disabled in an accident while doing farm work. It started for women and was extended to men in 2014.",
      "It covers disability between 20% and 40%, which is below the 40% needed for the regular disability pension. The rate was raised from ₹1,000 to ₹1,200 a month in October 2021. At 60 the person moves to the old age pension.",
    ],
    hi: [
      "गढ़वाल की वीरांगना तीलू रौतेली के नाम पर यह पेंशन गाँव के उन लोगों के लिए है जो खेती का काम करते हुए दुर्घटना में आंशिक रूप से दिव्यांग हो गए। यह पहले महिलाओं के लिए थी, 2014 में पुरुषों को भी जोड़ा गया।",
      "इसमें 20% से 40% तक की दिव्यांगता आती है, जो सामान्य दिव्यांग पेंशन की 40% वाली शर्त से कम है। अक्टूबर 2021 में दर ₹1,000 से बढ़ाकर ₹1,200 महीना की गई। 60 साल होने पर व्यक्ति को वृद्धावस्था पेंशन मिलने लगती है।",
    ],
  },
  benefits: {
    en: ["₹1,200 every month until you start getting the old age pension at 60.", "No income limit."],
    hi: ["60 साल पर वृद्धावस्था पेंशन शुरू होने तक हर महीने ₹1,200।", "आय की कोई सीमा नहीं।"],
  },
  eligibilityText: {
    en: [
      "A man or woman living in a rural area of Uttarakhand, aged 18 to 60.",
      "Became disabled while doing agricultural work.",
      "Disability is between 20% and 40%, certified by a medical officer.",
      "Proposed in the Gram Panchayat's open meeting.",
    ],
    hi: [
      "उत्तराखंड के ग्रामीण क्षेत्र में रहने वाले 18 से 60 साल के पुरुष या महिला।",
      "खेती का काम करते हुए दिव्यांग हुए हों।",
      "चिकित्सा अधिकारी से प्रमाणित दिव्यांगता 20% से 40% के बीच हो।",
      "ग्राम पंचायत की खुली बैठक में प्रस्ताव हुआ हो।",
    ],
  },
  applicationProcess: {
    online: {
      en: [
        "Apply on ssp.uk.gov.in or the Apni Sarkar portal.",
        "Upload the family register copy, Gram Panchayat proposal, disability certificate (20–40%), bank passbook and Aadhaar.",
      ],
      hi: [
        "ssp.uk.gov.in या अपनी सरकार पोर्टल पर आवेदन करें।",
        "परिवार रजिस्टर की नकल, ग्राम पंचायत का प्रस्ताव, दिव्यांगता प्रमाण पत्र (20–40%), बैंक पासबुक और आधार अपलोड करें।",
      ],
    },
  },

  officialUrl: "https://ssp.uk.gov.in/",
  sources: [
    "https://socialwelfare.uk.gov.in/service/teelurautelipension/",
    "https://cdnbbsr.s3waas.gov.in/s357bafb2c2dfeefba931bb03a835b1fa9/uploads/2025/02/20250204618906416.pdf",
    "https://socialwelfare.uk.gov.in/service/bauna-pension/",
  ],
  lastVerified: "2026-10-06",
  launchedYear: 2014,
  status: "active",
};

export default scheme;
