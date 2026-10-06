import { all, labelled, residentOf, when } from "@/lib/engine/build";
import type { Scheme } from "@/lib/types";

const scheme: Scheme = {
  slug: "tamil-nadu-fishing-ban-relief",
  tier: "compact",
  name: { en: "Fishing Ban Period Relief Assistance (Tamil Nadu)", hi: "मछली पकड़ने पर रोक की अवधि में राहत सहायता (तमिलनाडु)" },
  aka: ["fishing ban relief", "ban period assistance fishermen", "Meenpidi Thadaikaala Nivaranam"],
  shortDescription: {
    en: "Marine fishermen families in Tamil Nadu get ₹8,000 as relief during the yearly 61-day fishing ban, when they cannot go to sea.",
    hi: "तमिलनाडु के समुद्री मछुआरा परिवारों को हर साल 61 दिन की मछली पकड़ने की रोक के दौरान, जब वे समुद्र में नहीं जा सकते, ₹8,000 की राहत।",
  },
  level: "state",
  state: "tamil-nadu",
  department: {
    en: "Department of Fisheries and Fishermen Welfare, Government of Tamil Nadu",
    hi: "मत्स्य पालन एवं मछुआरा कल्याण विभाग, तमिलनाडु सरकार",
  },
  categories: ["agriculture", "social-welfare"],
  tags: ["fishermen", "fishing ban", "relief", "marine fisher", "8000 rupees"],
  benefitType: "cash",
  isDBT: true,
  value: { amount: 8000, period: "yearly", kind: "cash" },
  kundliHouse: "farming",
  eligibility: all(
    residentOf("tamil-nadu"),
    labelled(when("occupation", "eq", "fisher"), { en: "You fish full-time at sea for a living", hi: "आप पूरे समय समुद्र में मछली पकड़कर गुज़ारा करते हैं" }),
  ),

  details: {
    en: [
      "To let fish breed, sea fishing is banned for 61 days every year: 15 April to 14 June on the east coast and 1 June to 31 July on the west coast. Marine fishermen lose their income during this time.",
      "The Department of Fisheries gives each eligible marine fishermen family ₹8,000 as relief for the ban period, paid into the bank account.",
    ],
    hi: [
      "मछलियों के प्रजनन के लिए हर साल 61 दिन समुद्र में मछली पकड़ने पर रोक रहती है: पूर्वी तट पर 15 अप्रैल से 14 जून और पश्चिमी तट पर 1 जून से 31 जुलाई। इस दौरान समुद्री मछुआरों की कमाई रुक जाती है।",
      "मत्स्य विभाग हर पात्र समुद्री मछुआरा परिवार को रोक की अवधि के लिए ₹8,000 की राहत देता है, जो बैंक खाते में आती है।",
    ],
  },
  benefits: {
    en: ["₹8,000 per marine fishermen family for each annual ban period."],
    hi: ["हर साल की रोक अवधि के लिए हर समुद्री मछुआरा परिवार को ₹8,000।"],
  },
  eligibilityText: {
    en: [
      "You are a full-time marine fisherman in Tamil Nadu and a member of a Fishermen Co-operative Society.",
      "Your family has a valid ration card / smart card.",
      "If you work on a mechanised boat, you have a certificate from the boat owner.",
      "No one in the family has a regular job or another source of income.",
    ],
    hi: [
      "आप तमिलनाडु के पूर्णकालिक समुद्री मछुआरे हैं और मछुआरा सहकारी समिति के सदस्य हैं।",
      "आपके परिवार के पास वैध राशन कार्ड / स्मार्ट कार्ड है।",
      "अगर आप मशीनी नाव पर काम करते हैं, तो नाव मालिक का प्रमाण पत्र है।",
      "परिवार में किसी के पास नियमित नौकरी या कमाई का कोई और ज़रिया नहीं है।",
    ],
  },
  applicationProcess: {
    online: {
      en: [
        "Enrol through an e-Sevai centre, as directed on the Fisheries Department website.",
        "Submit the form through your Fishermen Co-operative Society or the Assistant Director of Fisheries office with the documents below.",
      ],
      hi: [
        "मत्स्य विभाग की वेबसाइट के निर्देश के अनुसार ई-सेवै केंद्र से नामांकन करें।",
        "नीचे दिए दस्तावेज़ों के साथ फ़ॉर्म अपनी मछुआरा सहकारी समिति या सहायक मत्स्य निदेशक कार्यालय में जमा करें।",
      ],
    },
  },
  documents: {
    en: ["Family ration card / smart card", "Fishermen biometric identity card", "Bank passbook (first page with photo)", "Fishermen Co-operative Society membership certificate", "Aadhaar card", "Employee certificate from the boat owner (for mechanised boat workers)"],
    hi: ["परिवार का राशन कार्ड / स्मार्ट कार्ड", "मछुआरा बायोमेट्रिक पहचान पत्र", "बैंक पासबुक (फ़ोटो वाला पहला पन्ना)", "मछुआरा सहकारी समिति की सदस्यता का प्रमाण पत्र", "आधार कार्ड", "नाव मालिक का कर्मचारी प्रमाण पत्र (मशीनी नाव पर काम करने वालों के लिए)"],
  },

  officialUrl: "https://www.fisheries.tn.gov.in/pages/view/Ban_Period",
  sources: ["https://www.fisheries.tn.gov.in/pages/view/Ban_Period"],
  lastVerified: "2026-10-06",
  launchedYear: 2023,
  status: "active",
};

export default scheme;
