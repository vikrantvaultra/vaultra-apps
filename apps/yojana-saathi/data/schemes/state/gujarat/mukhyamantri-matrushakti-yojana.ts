import { all, female, isTrue, labelled, residentOf } from "@/lib/engine/build";
import type { Scheme } from "@/lib/types";

const scheme: Scheme = {
  slug: "mukhyamantri-matrushakti-yojana",
  tier: "compact",
  name: { en: "Mukhyamantri Matrushakti Yojana", hi: "मुख्यमंत्री मातृशक्ति योजना" },
  aka: ["Matrushakti", "1000 days nutrition Gujarat", "MMY Gujarat"],
  shortDescription: {
    en: "First-time pregnant women and new mothers in Gujarat get a free monthly food kit (2 kg chana, 1 kg tuvar dal, 1 litre groundnut oil) through the Anganwadi for 1,000 days.",
    hi: "गुजरात में पहली बार गर्भवती महिलाओं और नई माताओं को आंगनवाड़ी से 1,000 दिन तक हर महीने मुफ़्त राशन किट (2 किलो चना, 1 किलो तुअर दाल, 1 लीटर मूंगफली तेल) मिलती है।",
  },
  level: "state",
  state: "gujarat",
  department: { en: "Women and Child Development Department, Government of Gujarat", hi: "महिला एवं बाल विकास विभाग, गुजरात सरकार" },
  categories: ["women-child", "health"],
  tags: ["pregnant women", "nutrition", "anganwadi", "mother", "matrushakti", "gujarat"],
  benefitType: "in-kind",
  isDBT: false,
  kundliHouse: "women-family",
  eligibility: all(
    residentOf("gujarat"),
    female(),
    labelled(isTrue("pregnantOrLactating"), { en: "Pregnant for the first time, or mother of a first child under 2", hi: "पहली बार गर्भवती हो, या पहले बच्चे (2 साल से कम) की माँ हो" }),
  ),

  details: {
    en: [
      "Mukhyamantri Matrushakti Yojana supports a mother's nutrition during the first 1,000 days, from conception until the child turns two. It started in 2022 and is run through Anganwadi centres.",
      "Every month the mother gets 2 kg of chana, 1 kg of tuvar dal and 1 litre of groundnut oil free of cost. The 2026-27 budget set aside ₹284 crore for the scheme.",
    ],
    hi: [
      "मुख्यमंत्री मातृशक्ति योजना पहले 1,000 दिनों में, यानी गर्भ से लेकर बच्चे के दो साल का होने तक, माँ के पोषण में मदद करती है। यह 2022 में शुरू हुई और आंगनवाड़ी केंद्रों से चलती है।",
      "हर महीने माँ को 2 किलो चना, 1 किलो तुअर दाल और 1 लीटर मूंगफली का तेल मुफ़्त मिलता है। 2026-27 के बजट में इसके लिए ₹284 करोड़ रखे गए हैं।",
    ],
  },
  benefits: {
    en: ["2 kg chana, 1 kg tuvar dal and 1 litre groundnut oil every month.", "Free of cost, collected from your Anganwadi centre.", "Continues for up to 1,000 days."],
    hi: ["हर महीने 2 किलो चना, 1 किलो तुअर दाल और 1 लीटर मूंगफली तेल।", "मुफ़्त, आपके आंगनवाड़ी केंद्र से।", "1,000 दिन तक मिलता है।"],
  },
  eligibilityText: {
    en: ["A woman in Gujarat who is pregnant for the first time.", "Or a mother of her first child, until the child is two years old."],
    hi: ["गुजरात में पहली बार गर्भवती महिला।", "या पहले बच्चे की माँ, बच्चे के दो साल का होने तक।"],
  },
  applicationProcess: {
    online: {
      en: ["Register on 1000d.gujarat.gov.in using your Aadhaar number and the health department ID from your pregnancy registration."],
      hi: ["आधार नंबर और गर्भावस्था पंजीकरण वाली स्वास्थ्य विभाग की ID से 1000d.gujarat.gov.in पर रजिस्टर करें।"],
    },
    offline: {
      en: ["Or visit your nearest Anganwadi centre; the worker will register you and give you the kit each month."],
      hi: ["या अपने नज़दीकी आंगनवाड़ी केंद्र जाएँ; कार्यकर्ता आपका नाम दर्ज करके हर महीने किट देंगी।"],
    },
  },

  officialUrl: "https://1000d.gujarat.gov.in/",
  sources: ["https://wcd.gujarat.gov.in/initiativedetails?id=292", "https://cmogujarat.gov.in/sites/default/files/2026-02/gujarat-budget-2026-27.pdf"],
  lastVerified: "2026-10-06",
  launchedYear: 2022,
  status: "active",
};

export default scheme;
