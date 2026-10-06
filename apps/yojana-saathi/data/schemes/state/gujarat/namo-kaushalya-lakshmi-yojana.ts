import { all, female, isTrue, labelled, residentOf } from "@/lib/engine/build";
import type { Scheme } from "@/lib/types";

const scheme: Scheme = {
  slug: "namo-kaushalya-lakshmi-yojana",
  tier: "compact",
  name: { en: "Namo Kaushalya Lakshmi Yojana", hi: "नमो कौशल्य लक्ष्मी योजना" },
  aka: ["Namo Kaushalya Lakshmi", "ITI girls stipend Gujarat"],
  shortDescription: {
    en: "Girls training at ITIs in Gujarat get ₹750 a month linked to attendance, plus a lump sum after passing: about ₹15,000 for a one-year course and ₹24,000 for a two-year course.",
    hi: "गुजरात के ITI में प्रशिक्षण ले रही लड़कियों को हाज़िरी के आधार पर हर महीने ₹750 और पास होने पर एकमुश्त राशि मिलती है: एक साल के कोर्स में करीब ₹15,000 और दो साल के कोर्स में ₹24,000।",
  },
  level: "state",
  state: "gujarat",
  department: { en: "Labour, Skill Development and Employment Department, Government of Gujarat", hi: "श्रम, कौशल विकास एवं रोज़गार विभाग, गुजरात सरकार" },
  categories: ["skills-employment", "women-child", "education"],
  tags: ["iti", "girls", "stipend", "skill training", "namo kaushalya lakshmi", "gujarat"],
  benefitType: "cash",
  isDBT: true,
  kundliHouse: "career",
  eligibility: all(
    residentOf("gujarat"),
    female(),
    labelled(isTrue("student"), { en: "Training at an ITI in Gujarat", hi: "गुजरात के किसी ITI में प्रशिक्षण ले रही हो" }),
  ),

  details: {
    en: [
      "Namo Kaushalya Lakshmi Yojana was announced in Gujarat's 2026-27 budget to get more girls into technical training at Industrial Training Institutes (ITIs). The budget set aside ₹40 crore for it.",
      "Published details say a trainee gets ₹750 a month during training if her quarterly attendance is at least 80%, plus a lump sum after passing the final exam (₹7,500 for one-year courses and ₹9,000 for two-year courses). The money is paid by DBT. The detailed rules were not yet available on an official page, so confirm with your ITI.",
    ],
    hi: [
      "नमो कौशल्य लक्ष्मी योजना की घोषणा गुजरात के 2026-27 के बजट में हुई, ताकि ज़्यादा लड़कियाँ औद्योगिक प्रशिक्षण संस्थानों (ITI) में तकनीकी प्रशिक्षण लें। बजट में इसके लिए ₹40 करोड़ रखे गए हैं।",
      "प्रकाशित जानकारी के अनुसार तिमाही हाज़िरी कम से कम 80% होने पर प्रशिक्षण के दौरान हर महीने ₹750 मिलते हैं, और अंतिम परीक्षा पास करने पर एकमुश्त राशि (एक साल के कोर्स में ₹7,500 और दो साल के कोर्स में ₹9,000)। पैसा DBT से आता है। विस्तृत नियम अभी किसी सरकारी पेज पर नहीं मिले, इसलिए अपने ITI से पक्का कर लें।",
    ],
  },
  benefits: {
    en: ["₹750 a month during training, if attendance is at least 80%.", "A lump sum after passing the final exam.", "Paid by DBT into your bank account."],
    hi: ["प्रशिक्षण के दौरान हर महीने ₹750, अगर हाज़िरी कम से कम 80% हो।", "अंतिम परीक्षा पास करने पर एकमुश्त राशि।", "पैसा DBT से आपके बैंक खाते में।"],
  },
  eligibilityText: {
    en: ["A girl enrolled in an approved ITI course in Gujarat.", "At least 80% average attendance every quarter.", "An Aadhaar-linked bank account."],
    hi: ["गुजरात के किसी ITI में मान्य कोर्स में दाख़िला लेने वाली लड़की।", "हर तिमाही औसत हाज़िरी कम से कम 80%।", "आधार से जुड़ा बैंक खाता।"],
  },
  applicationProcess: {
    offline: {
      en: ["Take admission at an ITI through the Gujarat ITI admission process.", "Give your Aadhaar and bank details to the ITI; it sends eligible trainees' details for payment."],
      hi: ["गुजरात ITI दाख़िला प्रक्रिया से ITI में दाख़िला लें।", "अपना आधार और बैंक विवरण ITI को दें; ITI पात्र प्रशिक्षुओं का विवरण भुगतान के लिए भेजता है।"],
    },
  },

  officialUrl: "https://cmogujarat.gov.in/en/gujarat-budget-2026-2027",
  sources: [
    "https://cmogujarat.gov.in/sites/default/files/2026-02/gujarat-budget-2026-27.pdf",
    "https://en.vikaspedia.in/viewcontent/schemesall/state-specific-schemes/welfare-schemes-of-gujarat/namo-kaushalya-lakshmi-yojana-of-gujarat-govt?lgn=en",
    "https://dbt.gujarat.gov.in/mainpageschemelist",
  ],
  lastVerified: "2026-10-06",
  launchedYear: 2026,
  status: "check-status",
};

export default scheme;
