import { all, female, isTrue, labelled, residentOf, when } from "@/lib/engine/build";
import type { Scheme } from "@/lib/types";

const scheme: Scheme = {
  slug: "pratibha-kiran-yojana",
  tier: "compact",
  overlapGroup: "scholarship",
  name: { en: "Pratibha Kiran Yojana", hi: "प्रतिभा किरण योजना" },
  aka: ["Pratibha Kiran", "Pratibha Kiran Scholarship"],
  shortDescription: {
    en: "BPL girls from towns in Madhya Pradesh who pass Class 12 with 60% from a town school and join college get ₹5,000 a year (₹500 a month for 10 months).",
    hi: "मध्य प्रदेश के शहरों की BPL परिवार की जो बेटियाँ शहर के स्कूल से 12वीं 60% अंकों से पास करके कॉलेज में दाख़िला लेती हैं, उन्हें हर साल ₹5,000 (10 महीने तक ₹500 महीना) मिलते हैं।",
  },
  level: "state",
  state: "madhya-pradesh",
  department: { en: "Higher Education Department, Government of Madhya Pradesh", hi: "उच्च शिक्षा विभाग, मध्य प्रदेश सरकार" },
  categories: ["education", "women-child"],
  tags: ["scholarship", "girls", "bpl", "urban", "college", "madhya pradesh"],
  benefitType: "cash",
  isDBT: true,
  value: { amount: 5000, period: "yearly", kind: "cash" },
  kundliHouse: "education",
  eligibility: all(
    residentOf("madhya-pradesh"),
    female(),
    labelled(when("area", "eq", "urban"), { en: "You live in a town or city", hi: "आप शहर में रहती हैं" }),
    labelled(isTrue("bpl"), { en: "Your family is below the poverty line (BPL)", hi: "आपका परिवार गरीबी रेखा से नीचे (BPL) है" }),
    labelled(isTrue("student"), { en: "You are studying in college", hi: "आप कॉलेज में पढ़ रही हैं" }),
  ),

  details: {
    en: [
      "Pratibha Kiran Yojana is the town version of Gaon Ki Beti. It helps girls from poor urban families continue to college, with ₹500 a month for 10 months (₹5,000 a year) during graduation.",
      "The Higher Education Department runs it through the state scholarship portal. The college principal sanctions the application and the money goes to the student's bank account.",
    ],
    hi: [
      "प्रतिभा किरण योजना गाँव की बेटी योजना का शहरी रूप है। यह शहर के गरीब परिवारों की बेटियों को कॉलेज की पढ़ाई जारी रखने में मदद करती है, स्नातक के दौरान 10 महीने तक ₹500 महीना (साल में ₹5,000) देकर।",
      "उच्च शिक्षा विभाग इसे राज्य छात्रवृत्ति पोर्टल से चलाता है। कॉलेज के प्राचार्य आवेदन मंज़ूर करते हैं और पैसा छात्रा के बैंक खाते में आता है।",
    ],
  },
  benefits: {
    en: ["₹500 a month for 10 months, a total of ₹5,000 every year of graduation."],
    hi: ["स्नातक के हर साल 10 महीने तक ₹500 महीना, कुल ₹5,000।"],
  },
  eligibilityText: {
    en: [
      "The girl lives in a town or city in Madhya Pradesh.",
      "Her family is below the poverty line (BPL).",
      "She passed Class 12 with at least 60% marks while living in the town and studying at a town school.",
      "She is studying for a graduation degree at a government or private college or university.",
    ],
    hi: [
      "छात्रा मध्य प्रदेश के किसी शहर की निवासी हो।",
      "उसका परिवार गरीबी रेखा से नीचे (BPL) हो।",
      "शहर में रहकर शहर के स्कूल से 12वीं कम से कम 60% अंकों से पास की हो।",
      "किसी सरकारी या निजी कॉलेज या विश्वविद्यालय में स्नातक की पढ़ाई कर रही हो।",
    ],
  },
  applicationProcess: {
    online: {
      en: [
        "Apply on the MP state scholarship portal (scholarshipportal.mp.nic.in) during the dates announced each year.",
        "Upload your Class 12 mark sheet, BPL proof and admission proof, and submit.",
        "Your college verifies and sanctions it, and the money is sent to your bank account.",
      ],
      hi: [
        "हर साल घोषित तारीखों में MP राज्य छात्रवृत्ति पोर्टल (scholarshipportal.mp.nic.in) पर आवेदन करें।",
        "12वीं की अंकसूची, BPL का प्रमाण और दाख़िले का प्रमाण अपलोड करके जमा करें।",
        "आपका कॉलेज इसे सत्यापित और मंज़ूर करता है, और पैसा आपके बैंक खाते में भेजा जाता है।",
      ],
    },
  },

  officialUrl: "https://highereducation.mp.gov.in/",
  sources: ["https://highereducation.mp.gov.in/?page=3L6Qc7Pd65PfEHTIDS8wQQ%3D%3D"],
  lastVerified: "2026-10-06",
  launchedYear: 2009,
  status: "active",
};

export default scheme;
