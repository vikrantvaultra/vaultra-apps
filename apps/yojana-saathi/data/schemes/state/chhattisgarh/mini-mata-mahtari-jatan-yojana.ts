import { all, female, labelled, residentOf, when } from "@/lib/engine/build";
import type { Scheme } from "@/lib/types";

const scheme: Scheme = {
  slug: "mini-mata-mahtari-jatan-yojana",
  tier: "compact",
  overlapGroup: "maternity-cash",
  name: { en: "Mini Mata Mahtari Jatan Yojana", hi: "मिनीमाता महतारी जतन योजना" },
  aka: ["Mahtari Jatan Yojana", "CG BOCW maternity help", "Minimata Mahtari Jatan"],
  shortDescription: {
    en: "Women construction workers registered with the Chhattisgarh BOCW Board get ₹20,000 for each of their first two deliveries.",
    hi: "छत्तीसगढ़ निर्माण श्रमिक कल्याण मंडल में पंजीकृत महिला निर्माण श्रमिकों को पहले दो प्रसव पर हर बार ₹20,000 मिलते हैं।",
  },
  level: "state",
  state: "chhattisgarh",
  department: {
    en: "Chhattisgarh Building and Other Construction Workers Welfare Board, Labour Department",
    hi: "छत्तीसगढ़ भवन एवं अन्य सन्निर्माण कर्मकार कल्याण मंडल, श्रम विभाग",
  },
  categories: ["women-child", "health"],
  tags: ["maternity", "pregnancy", "delivery", "construction worker", "bocw", "chhattisgarh"],
  benefitType: "cash",
  isDBT: true,
  value: { amount: 20000, period: "one-time", kind: "cash" },
  kundliHouse: "women-family",
  eligibility: all(
    residentOf("chhattisgarh"),
    female(),
    labelled(when("occupation", "in", ["construction-worker"]), {
      en: "You are a construction worker registered with the Chhattisgarh BOCW Board",
      hi: "आप छत्तीसगढ़ निर्माण श्रमिक कल्याण मंडल में पंजीकृत निर्माण श्रमिक हों",
    }),
  ),

  details: {
    en: [
      "Mini Mata Mahtari Jatan Yojana supports women construction workers around childbirth, when they cannot go to work. It is run by the Chhattisgarh construction workers' welfare board.",
      "A one-time ₹20,000 is paid into the mother's bank account for each delivery, for up to two children. It helps with medicines, food and the baby's needs.",
    ],
    hi: [
      "मिनीमाता महतारी जतन योजना प्रसव के समय महिला निर्माण श्रमिकों की मदद करती है, जब वे काम पर नहीं जा पातीं। इसे छत्तीसगढ़ निर्माण श्रमिक कल्याण मंडल चलाता है।",
      "हर प्रसव पर माँ के बैंक खाते में एक बार ₹20,000 दिए जाते हैं, अधिकतम दो बच्चों तक। इससे दवाई, पोषण और बच्चे की ज़रूरतें पूरी करने में मदद मिलती है।",
    ],
  },
  benefits: {
    en: ["₹20,000 for each delivery.", "Given for the first two children."],
    hi: ["हर प्रसव पर ₹20,000।", "पहले दो बच्चों के लिए मिलता है।"],
  },
  eligibilityText: {
    en: [
      "A woman construction worker registered with the Chhattisgarh BOCW Board.",
      "Lives in Chhattisgarh.",
      "Only the first two deliveries are covered.",
    ],
    hi: [
      "छत्तीसगढ़ निर्माण श्रमिक कल्याण मंडल में पंजीकृत महिला निर्माण श्रमिक।",
      "छत्तीसगढ़ में रहती हो।",
      "सिर्फ़ पहले दो प्रसव पर लाभ मिलता है।",
    ],
  },
  applicationProcess: {
    online: {
      en: [
        "After the delivery, apply online on the Chhattisgarh Labour Department portal (shramevjayate.cg.gov.in) or app with your labour registration.",
        "Upload the delivery or birth record and your bank details.",
      ],
      hi: [
        "प्रसव के बाद अपने श्रम पंजीयन से छत्तीसगढ़ श्रम विभाग के पोर्टल (shramevjayate.cg.gov.in) या ऐप पर ऑनलाइन आवेदन करें।",
        "प्रसव या जन्म का रिकॉर्ड और बैंक खाते का विवरण अपलोड करें।",
      ],
    },
    offline: {
      en: [
        "Or visit the district labour office or a Lok Seva Kendra with these documents.",
        "Keep the acknowledgement to track the application.",
      ],
      hi: [
        "या ये दस्तावेज़ लेकर ज़िला श्रम कार्यालय या लोक सेवा केंद्र जाएँ।",
        "आवेदन की स्थिति देखने के लिए पावती संभाल कर रखें।",
      ],
    },
  },
  officialUrl: "https://shramevjayate.cg.gov.in/",
  sources: [
    "https://dprcg.gov.in/post/1790257884/Raipur-A-Story-of-Service-%E2%80%93-Mrs-Roshni-Receives-Financial-Support-for-Motherhood-through-the-Mini-Mata-Mahtari-Jatan-Yojana",
    "https://dprcg.gov.in/post/1790935232/Raipur-Through-the-Minimata-Mahtari-Jatan-Yojana-Nandrani-received-support-for-her-own-nutrition-and-that-of-her-newborn",
  ],
  lastVerified: "2026-10-06",
  launchedYear: 2016,
  status: "active",
};

export default scheme;
