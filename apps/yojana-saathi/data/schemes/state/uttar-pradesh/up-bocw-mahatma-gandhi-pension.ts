import { all, labelled, minAge, residentOf, when } from "@/lib/engine/build";
import type { Scheme } from "@/lib/types";

const scheme: Scheme = {
  slug: "up-bocw-mahatma-gandhi-pension",
  tier: "compact",
  overlapGroup: "old-age-pension",
  name: { en: "Mahatma Gandhi Pension Yojana (UP Construction Workers)", hi: "महात्मा गांधी पेंशन योजना (उत्तर प्रदेश निर्माण श्रमिक)" },
  aka: ["UP BOCW pension", "shramik pension UP"],
  shortDescription: {
    en: "Construction workers in Uttar Pradesh aged 60+ who were registered with the welfare board for at least 10 years get ₹1,000 a month, rising to ₹1,250.",
    hi: "उत्तर प्रदेश में 60 साल से ऊपर के वे निर्माण श्रमिक, जो कम से कम 10 साल कल्याण बोर्ड में पंजीकृत रहे, उन्हें हर महीने ₹1,000 मिलते हैं, जो बढ़कर ₹1,250 तक होते हैं।",
  },
  level: "state",
  state: "uttar-pradesh",
  department: {
    en: "UP Building and Other Construction Workers Welfare Board, Labour Department, Government of Uttar Pradesh",
    hi: "उत्तर प्रदेश भवन एवं अन्य सन्निर्माण कर्मकार कल्याण बोर्ड, श्रम विभाग, उत्तर प्रदेश सरकार",
  },
  categories: ["pension-insurance", "social-welfare"],
  tags: ["construction worker", "pension", "old age", "bocw", "labour", "uttar pradesh"],
  benefitType: "pension",
  isDBT: true,
  value: { amount: 1000, period: "monthly", kind: "pension" },
  ageRange: { min: 60 },
  kundliHouse: "senior",
  eligibility: all(
    residentOf("uttar-pradesh"),
    minAge(60),
    labelled(when("occupation", "in", ["construction-worker"]), {
      en: "Construction worker registered with the UP BOCW Board for at least 10 years",
      hi: "UP निर्माण श्रमिक बोर्ड में कम से कम 10 साल पंजीकृत निर्माण श्रमिक",
    }),
  ),

  details: {
    en: [
      "Mahatma Gandhi Pension Yojana is the old-age pension of the UP Building and Other Construction Workers Welfare Board for its long-registered workers.",
      "A committee led by the District Magistrate approves the pension, and the Board pays it directly. After the worker's death, the spouse continues to get it.",
    ],
    hi: [
      "महात्मा गांधी पेंशन योजना उत्तर प्रदेश भवन एवं अन्य सन्निर्माण कर्मकार कल्याण बोर्ड की, लंबे समय से पंजीकृत श्रमिकों के लिए बुढ़ापा पेंशन है।",
      "ज़िलाधिकारी की अध्यक्षता वाली समिति पेंशन मंज़ूर करती है, और बोर्ड सीधे भुगतान करता है। श्रमिक की मृत्यु के बाद जीवनसाथी को पेंशन मिलती रहती है।",
    ],
  },
  benefits: {
    en: [
      "₹1,000 a month.",
      "Goes up by ₹50 every two years, to a maximum of ₹1,250.",
      "After the worker's death, the spouse gets the pension.",
    ],
    hi: [
      "हर महीने ₹1,000।",
      "हर दो साल में ₹50 बढ़ती है, अधिकतम ₹1,250 तक।",
      "श्रमिक की मृत्यु के बाद जीवनसाथी को पेंशन मिलती है।",
    ],
  },
  eligibilityText: {
    en: [
      "Permanent resident of Uttar Pradesh, aged 60 or more.",
      "Registered with the UP BOCW Board for at least 10 years, with contributions paid up to age 60.",
      "Not getting any other central or state government pension (EPFO and ESIC pensions are allowed).",
    ],
    hi: [
      "उत्तर प्रदेश के स्थायी निवासी, उम्र 60 साल या ज़्यादा।",
      "UP निर्माण श्रमिक बोर्ड में कम से कम 10 साल पंजीकृत, और 60 साल तक अंशदान जमा।",
      "केंद्र या राज्य सरकार की कोई दूसरी पेंशन न मिल रही हो (EPFO और ESIC की पेंशन चल सकती है)।",
    ],
  },
  applicationProcess: {
    online: {
      en: [
        "Log in on upbocw.in with your registration details and choose Mahatma Gandhi Pension Yojana.",
        "Upload proof of contributions, Aadhaar, bank passbook, residence certificate and an affidavit that you get no other government pension.",
        "Submit a life certificate every April to keep the pension going.",
      ],
      hi: [
        "upbocw.in पर पंजीकरण की जानकारी से लॉग इन करें और महात्मा गांधी पेंशन योजना चुनें।",
        "अंशदान का सबूत, आधार, बैंक पासबुक, निवास प्रमाण पत्र और कोई दूसरी सरकारी पेंशन न मिलने का शपथ पत्र अपलोड करें।",
        "पेंशन चालू रखने के लिए हर अप्रैल में जीवन प्रमाण पत्र दें।",
      ],
    },
  },

  officialUrl: "https://website.upbocw.in/schemes",
  sources: ["https://website.upbocw.in/schemes", "https://upbocw.in/"],
  lastVerified: "2026-10-06",
  launchedYear: 2009,
  status: "active",
};

export default scheme;
