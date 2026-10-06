import { all, minAge, residentOf } from "@/lib/engine/build";
import type { Scheme } from "@/lib/types";

const scheme: Scheme = {
  slug: "mp-kanya-abhibhavak-pension",
  tier: "compact",
  overlapGroup: "old-age-pension",
  name: { en: "Kanya Abhibhavak Pension Yojana (Madhya Pradesh)", hi: "कन्या अभिभावक पेंशन योजना (मध्य प्रदेश)" },
  aka: ["Kanya Abhibhavak Pension", "pension for parents of daughters"],
  shortDescription: {
    en: "Couples in Madhya Pradesh who have only daughters and no living son get ₹600 a month once either spouse turns 60, if they don't pay income tax.",
    hi: "मध्य प्रदेश के जिन दंपतियों की सिर्फ़ बेटियाँ हैं और कोई जीवित बेटा नहीं है, उन्हें पति या पत्नी में से किसी एक के 60 साल का होने पर हर महीने ₹600 मिलते हैं, अगर वे आयकर नहीं देते।",
  },
  level: "state",
  state: "madhya-pradesh",
  department: {
    en: "Social Justice and Empowerment of Persons with Disabilities Department, Government of Madhya Pradesh",
    hi: "सामाजिक न्याय एवं दिव्यांगजन कल्याण विभाग, मध्य प्रदेश सरकार",
  },
  categories: ["pension-insurance", "social-welfare"],
  tags: ["pension", "parents", "daughters", "senior citizen", "old age", "madhya pradesh"],
  benefitType: "pension",
  isDBT: true,
  value: { amount: 600, period: "monthly", kind: "pension" },
  ageRange: { min: 60 },
  kundliHouse: "senior",
  eligibility: all(residentOf("madhya-pradesh"), minAge(60)),

  details: {
    en: [
      "Kanya Abhibhavak Pension, started in 2013, supports elderly parents who have only daughters. When either the husband or the wife is 60 or older and the couple has no living son, they get ₹600 a month.",
      "Widowed or deserted mothers who meet the condition can also apply. Applications go through the Samagra pension portal or the local body office.",
    ],
    hi: [
      "2013 में शुरू हुई कन्या अभिभावक पेंशन उन बुज़ुर्ग माता-पिता के लिए है जिनकी सिर्फ़ बेटियाँ हैं। पति या पत्नी में से किसी एक की उम्र 60 साल या ज़्यादा होने पर, और कोई जीवित बेटा न होने पर, हर महीने ₹600 मिलते हैं।",
      "शर्त पूरी करने वाली विधवा या परित्यक्ता माँ भी आवेदन कर सकती है। आवेदन समग्र पेंशन पोर्टल या स्थानीय निकाय कार्यालय से होता है।",
    ],
  },
  benefits: {
    en: ["₹600 every month, paid into the bank account."],
    hi: ["हर महीने ₹600, बैंक खाते में।"],
  },
  eligibilityText: {
    en: [
      "Natives of Madhya Pradesh.",
      "A couple with only daughters and no living son.",
      "Either the husband or the wife is 60 or older.",
      "Does not pay income tax.",
    ],
    hi: [
      "मध्य प्रदेश के मूल निवासी।",
      "दंपति की सिर्फ़ बेटियाँ हों, कोई जीवित बेटा न हो।",
      "पति या पत्नी में से कोई एक 60 साल या उससे ज़्यादा उम्र का हो।",
      "आयकर न देते हों।",
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
        "Attach a certificate that you have only daughters, a self-declaration of not paying income tax, age and residence proof, and a joint photo.",
      ],
      hi: [
        "गाँव में ग्राम पंचायत या जनपद पंचायत, और शहर में नगर निगम / नगर पालिका / नगर परिषद कार्यालय में फ़ॉर्म भरें।",
        "सिर्फ़ बेटियाँ होने का प्रमाण पत्र, आयकर न देने का स्व-घोषणा पत्र, उम्र और निवास का प्रमाण, और दंपति की संयुक्त फ़ोटो साथ लगाएँ।",
      ],
    },
  },

  officialUrl: "https://socialsecurity.mp.gov.in/Scheme/KAPS.aspx",
  sources: ["https://socialsecurity.mp.gov.in/Scheme/KAPS.aspx"],
  lastVerified: "2026-10-06",
  launchedYear: 2013,
  status: "active",
};

export default scheme;
