import { all, ageBetween, female, isTrue, labelled, residentOf, when } from "@/lib/engine/build";
import type { Scheme } from "@/lib/types";

const scheme: Scheme = {
  slug: "mp-parityakta-pension",
  tier: "compact",
  name: { en: "Social Security Parityakta (Deserted Women) Pension (Madhya Pradesh)", hi: "सामाजिक सुरक्षा परित्यक्ता पेंशन (मध्य प्रदेश)" },
  aka: ["Parityakta pension", "deserted women pension MP", "abandoned women pension"],
  shortDescription: {
    en: "Women aged 18 to 59 in Madhya Pradesh who have been deserted by their husband and are from BPL families get ₹600 a month.",
    hi: "मध्य प्रदेश की 18 से 59 साल की वे महिलाएँ, जिन्हें पति ने छोड़ दिया है और जो BPL परिवार से हैं, उन्हें हर महीने ₹600 मिलते हैं।",
  },
  level: "state",
  state: "madhya-pradesh",
  department: {
    en: "Social Justice and Empowerment of Persons with Disabilities Department, Government of Madhya Pradesh",
    hi: "सामाजिक न्याय एवं दिव्यांगजन कल्याण विभाग, मध्य प्रदेश सरकार",
  },
  categories: ["pension-insurance", "women-child", "social-welfare"],
  tags: ["deserted women", "abandoned", "parityakta", "pension", "women", "madhya pradesh"],
  benefitType: "pension",
  isDBT: true,
  value: { amount: 600, period: "monthly", kind: "pension" },
  ageRange: { min: 18, max: 59 },
  kundliHouse: "women-family",
  eligibility: all(
    residentOf("madhya-pradesh"),
    female(),
    ...ageBetween(18, 59),
    labelled(when("marital", "in", ["separated", "divorced"]), { en: "Your husband has deserted you", hi: "आपके पति ने आपको छोड़ दिया है" }),
    labelled(isTrue("bpl"), { en: "Your family is below the poverty line (BPL)", hi: "आपका परिवार गरीबी रेखा से नीचे (BPL) है" }),
  ),

  details: {
    en: [
      "This long-running state pension, started in 1981, supports women who have been abandoned by their husbands and have little to live on. Eligible women get ₹600 a month.",
      "It is applied for on the Samagra pension portal or at the local body office, with a desertion certificate as proof.",
    ],
    hi: [
      "1981 से चल रही यह राज्य पेंशन उन महिलाओं के लिए है जिन्हें पति ने छोड़ दिया है और जिनके पास गुज़ारे का कम साधन है। पात्र महिलाओं को हर महीने ₹600 मिलते हैं।",
      "इसके लिए समग्र पेंशन पोर्टल पर या स्थानीय निकाय कार्यालय में आवेदन होता है, और सबूत के तौर पर परित्यक्ता प्रमाण पत्र लगता है।",
    ],
  },
  benefits: {
    en: ["₹600 every month, paid into your bank account."],
    hi: ["हर महीने ₹600, आपके बैंक खाते में।"],
  },
  eligibilityText: {
    en: [
      "A deserted woman, native of Madhya Pradesh, aged 18 to 59.",
      "From a family below the poverty line.",
      "Name is on the Samagra portal.",
    ],
    hi: [
      "मध्य प्रदेश की मूल निवासी परित्यक्ता महिला, उम्र 18 से 59 साल।",
      "गरीबी रेखा से नीचे के परिवार से हो।",
      "नाम समग्र पोर्टल पर दर्ज हो।",
    ],
  },
  applicationProcess: {
    online: {
      en: ["Apply on the Samagra pension portal (socialsecurity.mp.gov.in) with your 9-digit Samagra ID."],
      hi: ["अपनी 9 अंकों की समग्र ID से समग्र पेंशन पोर्टल (socialsecurity.mp.gov.in) पर आवेदन करें।"],
    },
    offline: {
      en: [
        "Fill in the form at your gram panchayat or janpad panchayat (villages) or municipal office (towns).",
        "Attach three photos, your BPL card, age proof and a desertion certificate.",
      ],
      hi: [
        "गाँव में ग्राम पंचायत या जनपद पंचायत, और शहर में नगर निगम / नगर पालिका / नगर परिषद कार्यालय में फ़ॉर्म भरें।",
        "तीन फ़ोटो, BPL कार्ड, उम्र का प्रमाण और परित्यक्ता प्रमाण पत्र साथ लगाएँ।",
      ],
    },
  },

  officialUrl: "https://socialsecurity.mp.gov.in/Scheme/SSWP.aspx",
  sources: ["https://socialsecurity.mp.gov.in/Scheme/SSWP.aspx"],
  lastVerified: "2026-10-06",
  launchedYear: 1981,
  status: "active",
};

export default scheme;
