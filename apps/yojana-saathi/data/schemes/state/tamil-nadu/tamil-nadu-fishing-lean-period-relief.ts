import { all, labelled, residentOf, when } from "@/lib/engine/build";
import type { Scheme } from "@/lib/types";

const scheme: Scheme = {
  slug: "tamil-nadu-fishing-lean-period-relief",
  tier: "compact",
  name: { en: "Lean Period Special Relief for Fishermen (Tamil Nadu)", hi: "मछुआरों के लिए मंदी के मौसम की विशेष राहत (तमिलनाडु)" },
  aka: ["lean period assistance", "fishermen special allowance", "monsoon relief fishermen"],
  shortDescription: {
    en: "Traditional marine fishermen families in Tamil Nadu get special relief during the lean fishing season, raised from ₹6,000 to ₹7,000 per family in the 2026-27 budget.",
    hi: "तमिलनाडु के पारंपरिक समुद्री मछुआरा परिवारों को मछली के मंदी के मौसम में विशेष राहत, जिसे 2026-27 के बजट में ₹6,000 से बढ़ाकर ₹7,000 प्रति परिवार किया गया।",
  },
  level: "state",
  state: "tamil-nadu",
  department: {
    en: "Department of Fisheries and Fishermen Welfare, Government of Tamil Nadu",
    hi: "मत्स्य पालन एवं मछुआरा कल्याण विभाग, तमिलनाडु सरकार",
  },
  categories: ["agriculture", "social-welfare"],
  tags: ["fishermen", "lean period", "relief", "marine fisher"],
  benefitType: "cash",
  isDBT: true,
  value: { amount: 6000, period: "yearly", kind: "cash" },
  kundliHouse: "farming",
  eligibility: all(
    residentOf("tamil-nadu"),
    labelled(when("occupation", "eq", "fisher"), { en: "You are a full-time traditional marine fisher", hi: "आप पूर्णकालिक पारंपरिक समुद्री मछुआरे हैं" }),
  ),

  details: {
    en: [
      "In the lean season, catches fall and bad weather often keeps traditional fishermen ashore, so their income drops. Tamil Nadu gives each eligible marine fishermen family a special relief amount for this lean period.",
      "The amount has been ₹6,000 per family. The 2026-27 revised budget raised it to ₹7,000 for about 1.93 lakh traditional fishermen families, with ₹135 crore set aside.",
    ],
    hi: [
      "मंदी के मौसम में मछली कम मिलती है और ख़राब मौसम की वजह से पारंपरिक मछुआरे अक्सर किनारे पर रहते हैं, इसलिए उनकी कमाई घट जाती है। तमिलनाडु इस मंदी के मौसम के लिए हर पात्र समुद्री मछुआरा परिवार को विशेष राहत राशि देता है।",
      "अब तक यह राशि ₹6,000 प्रति परिवार थी। 2026-27 के संशोधित बजट में इसे लगभग 1.93 लाख पारंपरिक मछुआरा परिवारों के लिए ₹7,000 कर दिया गया और ₹135 करोड़ रखे गए।",
    ],
  },
  benefits: {
    en: [
      "Special relief for the lean fishing season, paid into the bank account: ₹6,000 per family, raised to ₹7,000 from 2026-27.",
    ],
    hi: [
      "मछली के मंदी के मौसम के लिए विशेष राहत, बैंक खाते में: ₹6,000 प्रति परिवार, जो 2026-27 से बढ़ाकर ₹7,000 किया गया।",
    ],
  },
  eligibilityText: {
    en: [
      "You are a member of a Fishermen Co-operative Society or the Tamil Nadu Fishermen Welfare Board and fish full-time (or do allied fishing work).",
      "Your family has a valid ration card.",
      "No one in the family has a regular job or another source of income.",
    ],
    hi: [
      "आप मछुआरा सहकारी समिति या तमिलनाडु मछुआरा कल्याण बोर्ड के सदस्य हैं और पूरे समय मछली पकड़ते हैं (या उससे जुड़ा काम करते हैं)।",
      "आपके परिवार के पास वैध राशन कार्ड है।",
      "परिवार में किसी के पास नियमित नौकरी या कमाई का कोई और ज़रिया नहीं है।",
    ],
  },
  applicationProcess: {
    online: {
      en: [
        "Enrol through an e-Sevai centre, as directed on the Fisheries Department website.",
        "Submit the form through your Fishermen Co-operative Society or the Assistant Director of Fisheries office with your documents.",
      ],
      hi: [
        "मत्स्य विभाग की वेबसाइट के निर्देश के अनुसार ई-सेवै केंद्र से नामांकन करें।",
        "दस्तावेज़ों के साथ फ़ॉर्म अपनी मछुआरा सहकारी समिति या सहायक मत्स्य निदेशक कार्यालय में जमा करें।",
      ],
    },
  },
  documents: {
    en: ["Family ration card", "Fishermen biometric identity card", "Co-operative Society or Fishermen Welfare Board membership card", "Bank passbook (first page with photo)", "Aadhaar card"],
    hi: ["परिवार का राशन कार्ड", "मछुआरा बायोमेट्रिक पहचान पत्र", "सहकारी समिति या मछुआरा कल्याण बोर्ड का सदस्यता कार्ड", "बैंक पासबुक (फ़ोटो वाला पहला पन्ना)", "आधार कार्ड"],
  },

  officialUrl: "https://www.fisheries.tn.gov.in/pages/view/Special_allowance",
  sources: [
    "https://www.fisheries.tn.gov.in/pages/view/Special_allowance",
    "https://tamildigitallibrary.in/Marc-Articles/004866_Tamil_Nadu_Budget_2026_2027",
  ],
  lastVerified: "2026-10-06",
  launchedYear: 2026,
  status: "check-status",
};

export default scheme;
