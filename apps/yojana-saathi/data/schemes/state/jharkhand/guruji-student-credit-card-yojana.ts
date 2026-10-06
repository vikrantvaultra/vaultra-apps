import { all, maxAge, residentOf } from "@/lib/engine/build";
import type { Scheme } from "@/lib/types";

const scheme: Scheme = {
  slug: "guruji-student-credit-card-yojana",
  name: { en: "Guruji Student Credit Card Yojana", hi: "गुरुजी स्टूडेंट क्रेडिट कार्ड योजना" },
  aka: ["GSCC", "Guruji Credit Card", "Jharkhand student credit card"],
  shortDescription: {
    en: "Jharkhand students can get an education loan of up to ₹15 lakh with no collateral, guaranteed by the state, at about 4% interest after the state subsidy.",
    hi: "झारखंड के छात्र-छात्राओं को बिना गिरवी ₹15 लाख तक का शिक्षा ऋण मिलता है, जिसकी गारंटी राज्य देता है, और राज्य की छूट के बाद ब्याज लगभग 4% रहता है।",
  },
  level: "state",
  state: "jharkhand",
  department: {
    en: "Department of Higher and Technical Education, Government of Jharkhand",
    hi: "उच्च एवं तकनीकी शिक्षा विभाग, झारखंड सरकार",
  },
  categories: ["education"],
  tags: ["education loan", "student credit card", "guruji", "higher education", "college fees", "jharkhand"],
  benefitType: "loan",
  isDBT: false,
  value: { amount: 1500000, period: "one-time", kind: "loan" },
  ageRange: { max: 40 },
  kundliHouse: "education",
  eligibility: all(residentOf("jharkhand"), maxAge(40)),

  details: {
    en: [
      "Under the Guruji Student Credit Card scheme, the Jharkhand government stands guarantee for education loans from banks, so students do not need to pledge property or find a guarantor. It was launched in March 2024.",
      "The loan can be up to ₹15 lakh for a diploma, degree or higher course at a listed institution. The bank charges SBI's EBLR plus 1.5% for male students and plus 1% for female students. The state pays part of the interest, so the student's own rate comes down to 4%, or 3% if interest is paid during the course.",
      "You can either pay interest while you study, or start EMIs for principal and interest after the course ends.",
    ],
    hi: [
      "गुरुजी स्टूडेंट क्रेडिट कार्ड योजना में झारखंड सरकार बैंक से मिलने वाले शिक्षा ऋण की गारंटी ख़ुद देती है, इसलिए छात्र को कोई संपत्ति गिरवी नहीं रखनी पड़ती और गारंटर नहीं ढूँढना पड़ता। यह मार्च 2024 में शुरू हुई।",
      "सूचीबद्ध संस्थानों में डिप्लोमा, डिग्री या उच्च कोर्स के लिए ₹15 लाख तक का ऋण मिल सकता है। बैंक छात्रों से SBI के EBLR से 1.5% ज़्यादा और छात्राओं से 1% ज़्यादा ब्याज लेता है। ब्याज का एक हिस्सा राज्य सरकार भरती है, जिससे छात्र के लिए दर 4% रह जाती है, या पढ़ाई के दौरान ब्याज भरने पर 3%।",
      "आप पढ़ाई के दौरान ब्याज भर सकते हैं, या कोर्स पूरा होने के बाद मूलधन और ब्याज की EMI शुरू कर सकते हैं।",
    ],
  },
  benefits: {
    en: [
      "Education loan of up to ₹15 lakh.",
      "No collateral and no third-party guarantor: the state government is the guarantor.",
      "Effective interest of 4% after the state subsidy, or 3% if you pay interest during the course.",
      "Covers diploma, degree and postgraduate courses at eligible institutions.",
    ],
    hi: [
      "₹15 लाख तक का शिक्षा ऋण।",
      "कोई गिरवी नहीं और किसी गारंटर की ज़रूरत नहीं: गारंटी राज्य सरकार देती है।",
      "राज्य की छूट के बाद ब्याज 4%, या पढ़ाई के दौरान ब्याज भरने पर 3%।",
      "योग्य संस्थानों में डिप्लोमा, डिग्री और पोस्ट-ग्रेजुएट कोर्स के लिए।",
    ],
  },
  eligibilityText: {
    en: [
      "Has a Jharkhand local residence certificate, or passed Class 10 from a recognised school in Jharkhand.",
      "Passed Class 10 (for diploma courses) or Class 10 and 12 (for degree and higher courses) from Jharkhand institutions.",
      "Has secured admission in an eligible institution, such as a NAAC 'A' grade college, an NIRF top-100 institution, an IIT, IIM, AIIMS, NIT, NID or NIFT.",
      "Not more than 40 years old when applying.",
      "Has not taken this loan before.",
    ],
    hi: [
      "झारखंड का स्थानीय निवास प्रमाण पत्र हो, या झारखंड के किसी मान्यता प्राप्त स्कूल से 10वीं पास की हो।",
      "डिप्लोमा कोर्स के लिए 10वीं, और डिग्री या उच्च कोर्स के लिए 10वीं और 12वीं झारखंड के संस्थानों से पास की हो।",
      "किसी योग्य संस्थान में दाख़िला मिल चुका हो, जैसे NAAC 'A' ग्रेड कॉलेज, NIRF टॉप-100 संस्थान, IIT, IIM, AIIMS, NIT, NID या NIFT।",
      "आवेदन के समय उम्र 40 साल से ज़्यादा न हो।",
      "पहले इस योजना में ऋण न लिया हो।",
    ],
  },
  exclusions: {
    en: ["Students above 40 years of age.", "Courses at institutions that are not on the eligible list.", "Students who have already got a loan under this scheme."],
    hi: ["40 साल से ज़्यादा उम्र के छात्र।", "जो संस्थान योग्य सूची में नहीं हैं, उनके कोर्स।", "जिन्हें इस योजना में पहले ही ऋण मिल चुका है।"],
  },
  applicationProcess: {
    online: {
      en: [
        "Go to gscc.jharkhand.gov.in and register as a student with your Aadhaar-linked mobile number.",
        "Fill in your academic, course and fee details, and choose the bank, district and branch you want the loan from.",
        "Upload the documents with a parent or guardian as co-applicant, submit, and then follow up with the bank branch you chose. Help: 1800-569-3311 (working days).",
      ],
      hi: [
        "gscc.jharkhand.gov.in पर जाएँ और आधार से जुड़े मोबाइल नंबर से छात्र के रूप में रजिस्टर करें।",
        "पढ़ाई, कोर्स और फ़ीस की जानकारी भरें, और जिस बैंक, ज़िले और शाखा से ऋण चाहिए उसे चुनें।",
        "माता-पिता या अभिभावक को सह-आवेदक बनाकर दस्तावेज़ अपलोड करें, आवेदन जमा करें, फिर चुनी हुई बैंक शाखा से संपर्क करें। मदद: 1800-569-3311 (कामकाजी दिनों में)।",
      ],
    },
  },
  documents: {
    en: [
      "Class 10 and Class 12 mark sheets and certificates",
      "Aadhaar card of the student and the co-applicant (parent or guardian)",
      "Photo and signature of the student and the co-applicant",
      "Bank passbook front page or cancelled cheque of the student and the co-applicant",
      "Proof of admission and the fee structure from the institution",
      "No objection certificate, if you had an earlier education loan that you have closed",
    ],
    hi: [
      "10वीं और 12वीं की मार्कशीट और प्रमाण पत्र",
      "छात्र और सह-आवेदक (माता-पिता या अभिभावक) का आधार कार्ड",
      "छात्र और सह-आवेदक की फ़ोटो और हस्ताक्षर",
      "छात्र और सह-आवेदक की बैंक पासबुक का पहला पन्ना या रद्द किया हुआ चेक",
      "संस्थान का दाख़िले का सबूत और फ़ीस का ब्योरा",
      "अगर पहले कोई शिक्षा ऋण लेकर बंद किया है तो उसका अनापत्ति प्रमाण पत्र",
    ],
  },
  faqs: [
    {
      q: { en: "Do my parents need to give a guarantee?", hi: "क्या माता-पिता को गारंटी देनी होगी?" },
      a: {
        en: "No. The state government guarantees the loan to the bank, so no property or outside guarantor is needed.",
        hi: "नहीं। ऋण की गारंटी राज्य सरकार बैंक को देती है, इसलिए कोई संपत्ति या बाहरी गारंटर नहीं चाहिए।",
      },
    },
    {
      q: { en: "Can I study outside Jharkhand?", hi: "क्या मैं झारखंड से बाहर पढ़ सकता/सकती हूँ?" },
      a: {
        en: "Yes, if the institution is on the eligible list, for example an IIT, NIT or a top NIRF-ranked college anywhere in India.",
        hi: "हाँ, अगर संस्थान योग्य सूची में है, जैसे देश में कहीं भी कोई IIT, NIT या NIRF में ऊपर की रैंक वाला कॉलेज।",
      },
    },
  ],

  officialUrl: "https://gscc.jharkhand.gov.in/",
  sources: ["https://gscc.jharkhand.gov.in/", "https://cm.jharkhand.gov.in/node/14351", "https://cm.jharkhand.gov.in/node/16026"],
  lastVerified: "2026-10-06",
  launchedYear: 2024,
  status: "active",
};

export default scheme;
