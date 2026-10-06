import { all, incomeUpTo, labelled, residentOf } from "@/lib/engine/build";
import type { Scheme } from "@/lib/types";

const scheme: Scheme = {
  slug: "bebe-nanki-laadli-beti",
  tier: "compact",
  overlapGroup: "daughter-savings",
  name: { en: "Bebe Nanki Laadli Beti Kalyan Scheme", hi: "बेबे नानकी लाडली बेटी कल्याण योजना" },
  aka: ["Bebe Nanki scheme", "Laadli Beti Punjab"],
  shortDescription: {
    en: "For girls born in Punjab after 1 January 2011 to very poor families: the state deposits money with LIC, which pays the family in stages up to age 18 as long as she stays in school.",
    hi: "1 जनवरी 2011 के बाद पंजाब के बहुत ग़रीब परिवारों में जन्मी बेटियों के लिए: राज्य LIC में पैसा जमा करता है, जो बेटी के पढ़ाई जारी रखने पर 18 साल तक किस्तों में परिवार को पैसा देती है।",
  },
  level: "state",
  state: "punjab",
  department: {
    en: "Department of Social Security and Women & Child Development, Government of Punjab",
    hi: "सामाजिक सुरक्षा और महिला एवं बाल विकास विभाग, पंजाब सरकार",
  },
  categories: ["women-child", "education"],
  tags: ["girl child", "daughter", "laadli", "lic", "bebe nanki", "punjab"],
  benefitType: "savings",
  isDBT: false,
  kundliHouse: "daughter",
  eligibility: all(
    residentOf("punjab"),
    labelled(incomeUpTo(30_000), { en: "Family income below ₹30,000 a year (blue card holder)", hi: "परिवार की सालाना आय ₹30,000 से कम (ब्लू कार्ड धारक)" }),
  ),

  details: {
    en: [
      "Bebe Nanki Laadli Beti Kalyan Scheme started in 2011-12 to stop female foeticide and support girls' education. For each eligible girl, the state deposits ₹20,000 with LIC.",
      "LIC then pays the guardian at set stages: at birth, at age 3 after full immunisation, on joining Class 1 and Class 9, and at 18 after passing Class 12, plus a monthly scholarship through school. The department lists the total as ₹61,000. Benefits stop if the girl drops out of school.",
    ],
    hi: [
      "बेबे नानकी लाडली बेटी कल्याण योजना 2011-12 में कन्या भ्रूण हत्या रोकने और बेटियों की पढ़ाई में मदद के लिए शुरू हुई। हर पात्र बेटी के लिए राज्य LIC में ₹20,000 जमा करता है।",
      "फिर LIC तय पड़ावों पर अभिभावक को पैसा देती है: जन्म पर, पूरे टीकाकरण के बाद 3 साल पर, पहली और नौवीं कक्षा में दाख़िले पर, और 12वीं पास करके 18 साल पर, साथ में स्कूल के दौरान हर महीने वज़ीफ़ा। विभाग के अनुसार कुल राशि ₹61,000 है। बेटी के स्कूल छोड़ने पर लाभ बंद हो जाता है।",
    ],
  },
  benefits: {
    en: [
      "₹2,100 each at birth, at age 3, on joining Class 1 and on joining Class 9.",
      "₹31,000 at age 18 after passing Class 12.",
      "Scholarship of ₹100 a month in Classes 1–6 and ₹200 a month in Classes 7–12.",
    ],
    hi: [
      "जन्म पर, 3 साल पर, पहली कक्षा में दाख़िले पर और नौवीं कक्षा में दाख़िले पर ₹2,100-₹2,100।",
      "12वीं पास करके 18 साल पर ₹31,000।",
      "कक्षा 1–6 में ₹100 महीना और कक्षा 7–12 में ₹200 महीना वज़ीफ़ा।",
    ],
  },
  eligibilityText: {
    en: [
      "Girls born on or after 1 January 2011, whose parents are permanent residents of Punjab.",
      "Family income below ₹30,000 a year; the blue card from the Food and Supplies Department is the proof of income.",
      "Abandoned girls found after 1 January 2011 living in orphanages and children's homes in Punjab also qualify.",
      "There is no limit on the number of earlier daughters in the family.",
    ],
    hi: [
      "1 जनवरी 2011 या उसके बाद जन्मी बेटियाँ, जिनके माता-पिता पंजाब के स्थायी निवासी हों।",
      "परिवार की सालाना आय ₹30,000 से कम; खाद्य एवं आपूर्ति विभाग का ब्लू कार्ड आय का सबूत है।",
      "1 जनवरी 2011 के बाद मिली परित्यक्त बेटियाँ, जो पंजाब के अनाथालयों और बाल गृहों में रहती हैं, भी पात्र हैं।",
      "परिवार में पहले से कितनी बेटियाँ हैं, इसकी कोई सीमा नहीं है।",
    ],
  },
  applicationProcess: {
    offline: {
      en: [
        "Contact your District Programme Officer (DPO) of the Women & Child Development Department, as the department advises, to check whether new enrolments are open.",
        "Keep the girl's birth certificate, your blue card and Punjab residence proof ready.",
      ],
      hi: [
        "विभाग की सलाह के अनुसार, नया नाम जुड़ रहा है या नहीं, यह जानने के लिए महिला एवं बाल विकास विभाग के अपने ज़िला प्रोग्राम अधिकारी (DPO) से संपर्क करें।",
        "बेटी का जन्म प्रमाण पत्र, ब्लू कार्ड और पंजाब के निवास का प्रमाण तैयार रखें।",
      ],
    },
  },

  officialUrl: "https://sswcd.punjab.gov.in/en/wcd/state-schemes",
  sources: [
    "https://sswcd.punjab.gov.in/en/wcd/state-schemes",
    "https://finance.punjab.gov.in/uploads/9abf7814-c6c6-4933-963a-bcb650c10a3e_Economic%20Survey%202025-26.pdf",
  ],
  lastVerified: "2026-10-06",
  launchedYear: 2011,
  status: "check-status",
};

export default scheme;
