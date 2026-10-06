import { all, female, isTrue, labelled, residentOf, when } from "@/lib/engine/build";
import type { Scheme } from "@/lib/types";

const scheme: Scheme = {
  slug: "gaon-ki-beti-yojana",
  tier: "compact",
  overlapGroup: "scholarship",
  name: { en: "Gaon Ki Beti Yojana", hi: "गाँव की बेटी योजना" },
  aka: ["Gaon ki Beti", "Gav ki Beti"],
  shortDescription: {
    en: "Village girls in Madhya Pradesh who pass Class 12 with 60% from a village school and join college get ₹5,000 a year (₹500 a month for 10 months).",
    hi: "मध्य प्रदेश की गाँव की जो बेटियाँ गाँव के स्कूल से 12वीं 60% अंकों से पास करके कॉलेज में दाख़िला लेती हैं, उन्हें हर साल ₹5,000 (10 महीने तक ₹500 महीना) मिलते हैं।",
  },
  level: "state",
  state: "madhya-pradesh",
  department: { en: "Higher Education Department, Government of Madhya Pradesh", hi: "उच्च शिक्षा विभाग, मध्य प्रदेश सरकार" },
  categories: ["education", "women-child"],
  tags: ["scholarship", "girls", "rural", "college", "graduation", "madhya pradesh"],
  benefitType: "cash",
  isDBT: true,
  value: { amount: 5000, period: "yearly", kind: "cash" },
  kundliHouse: "education",
  eligibility: all(
    residentOf("madhya-pradesh"),
    female(),
    labelled(when("area", "eq", "rural"), { en: "You live in a village", hi: "आप गाँव में रहती हैं" }),
    labelled(isTrue("student"), { en: "You are studying in college", hi: "आप कॉलेज में पढ़ रही हैं" }),
  ),

  details: {
    en: [
      "Gaon Ki Beti Yojana encourages girls from villages to go to college. The Higher Education Department pays ₹500 a month for 10 months, which is ₹5,000 a year, to each eligible girl studying for a graduation degree.",
      "Applications are made every year on the state scholarship portal on the announced dates. The college principal sanctions the scholarship and the money goes into the student's bank account.",
    ],
    hi: [
      "गाँव की बेटी योजना गाँव की लड़कियों को कॉलेज की पढ़ाई के लिए बढ़ावा देती है। उच्च शिक्षा विभाग स्नातक में पढ़ रही हर पात्र छात्रा को 10 महीने तक ₹500 महीना, यानी साल में ₹5,000 देता है।",
      "आवेदन हर साल तय तारीखों पर राज्य छात्रवृत्ति पोर्टल पर होता है। कॉलेज के प्राचार्य छात्रवृत्ति मंज़ूर करते हैं और पैसा छात्रा के बैंक खाते में आता है।",
    ],
  },
  benefits: {
    en: ["₹500 a month for 10 months, a total of ₹5,000 every year of graduation."],
    hi: ["स्नातक के हर साल 10 महीने तक ₹500 महीना, कुल ₹5,000।"],
  },
  eligibilityText: {
    en: [
      "The girl lives in a village in Madhya Pradesh.",
      "She passed Class 12 with at least 60% marks while living in the village and studying at the village school.",
      "She is studying for a graduation degree at a government or private college or university.",
    ],
    hi: [
      "छात्रा मध्य प्रदेश के किसी गाँव की निवासी हो।",
      "गाँव में रहकर गाँव के स्कूल से 12वीं कम से कम 60% अंकों से पास की हो।",
      "किसी सरकारी या निजी कॉलेज या विश्वविद्यालय में स्नातक की पढ़ाई कर रही हो।",
    ],
  },
  applicationProcess: {
    online: {
      en: [
        "Apply on the MP state scholarship portal (scholarshipportal.mp.nic.in) during the dates announced each year.",
        "Fill in your details, upload your Class 12 mark sheet and admission proof, and submit.",
        "Your college verifies and sanctions it, and the money is sent to your bank account.",
      ],
      hi: [
        "हर साल घोषित तारीखों में MP राज्य छात्रवृत्ति पोर्टल (scholarshipportal.mp.nic.in) पर आवेदन करें।",
        "अपनी जानकारी भरें, 12वीं की अंकसूची और दाख़िले का प्रमाण अपलोड करें और जमा करें।",
        "आपका कॉलेज इसे सत्यापित और मंज़ूर करता है, और पैसा आपके बैंक खाते में भेजा जाता है।",
      ],
    },
  },

  officialUrl: "https://highereducation.mp.gov.in/",
  sources: ["https://highereducation.mp.gov.in/?page=a%2Fl6c0hzsecoQ0GSYBnewA%3D%3D"],
  lastVerified: "2026-10-06",
  launchedYear: 2005,
  status: "active",
};

export default scheme;
