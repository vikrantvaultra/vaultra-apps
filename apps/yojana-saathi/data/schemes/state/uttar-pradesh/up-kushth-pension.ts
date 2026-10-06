import { all, incomeUpTo, labelled, residentOf } from "@/lib/engine/build";
import type { Scheme } from "@/lib/types";

const scheme: Scheme = {
  slug: "up-kushth-pension",
  tier: "compact",
  overlapGroup: "disability-pension",
  name: { en: "Kushthavastha Pension Yojana (Uttar Pradesh)", hi: "कुष्ठावस्था पेंशन योजना (उत्तर प्रदेश)" },
  aka: ["UP leprosy pension", "Kushth pension", "Kushthavastha Pension"],
  shortDescription: {
    en: "People in Uttar Pradesh disabled by leprosy, from poor families, get a pension of ₹3,000 a month in their bank account, at any age.",
    hi: "उत्तर प्रदेश में कुष्ठ रोग से प्रभावित गरीब परिवारों के लोगों को, किसी भी उम्र में, हर महीने ₹3,000 पेंशन बैंक खाते में।",
  },
  level: "state",
  state: "uttar-pradesh",
  department: {
    en: "Department for Empowerment of Persons with Disabilities, Government of Uttar Pradesh",
    hi: "दिव्यांगजन सशक्तीकरण विभाग, उत्तर प्रदेश सरकार",
  },
  categories: ["disability", "pension-insurance", "health"],
  tags: ["leprosy", "kushth", "pension", "disability", "uttar pradesh"],
  benefitType: "pension",
  isDBT: true,
  value: { amount: 3000, period: "monthly", kind: "pension" },
  kundliHouse: "health",
  eligibility: all(
    residentOf("uttar-pradesh"),
    labelled(incomeUpTo(56_460), {
      en: "Family income up to ₹46,080 a year in villages or ₹56,460 in towns",
      hi: "परिवार की सालाना आय गाँव में ₹46,080 या शहर में ₹56,460 तक हो",
    }),
  ),

  details: {
    en: [
      "The Kushthavastha Pension supports people in Uttar Pradesh who have been affected by leprosy and live in poor families. There is no minimum age.",
      "It pays ₹3,000 a month by DBT, usually credited every three months. It is run by the Department for Empowerment of Persons with Disabilities through the same portal as the divyang pension.",
    ],
    hi: [
      "कुष्ठावस्था पेंशन उत्तर प्रदेश के उन लोगों के लिए है जो कुष्ठ रोग से प्रभावित हैं और गरीब परिवारों से हैं। इसमें कोई न्यूनतम उम्र नहीं है।",
      "इसमें हर महीने ₹3,000 DBT से मिलते हैं, जो आमतौर पर हर तीन महीने में खाते में आते हैं। इसे दिव्यांगजन सशक्तीकरण विभाग, दिव्यांग पेंशन वाले पोर्टल से ही चलाता है।",
    ],
  },
  benefits: {
    en: ["₹3,000 a month as pension.", "Paid into your Aadhaar-linked bank account, usually every quarter."],
    hi: ["हर महीने ₹3,000 पेंशन।", "आधार से जुड़े बैंक खाते में, आमतौर पर हर तिमाही।"],
  },
  eligibilityText: {
    en: [
      "Permanent resident of Uttar Pradesh.",
      "Affected by leprosy, with a leprosy certificate from a government doctor (any degree of disability).",
      "Family income up to ₹46,080 a year in villages or ₹56,460 in towns.",
      "Not getting any other government pension.",
    ],
    hi: [
      "उत्तर प्रदेश के स्थायी निवासी।",
      "कुष्ठ रोग से प्रभावित हों और सरकारी डॉक्टर का कुष्ठ प्रमाण पत्र हो (दिव्यांगता कितनी भी हो)।",
      "परिवार की सालाना आय गाँव में ₹46,080 या शहर में ₹56,460 तक हो।",
      "कोई दूसरी सरकारी पेंशन न मिल रही हो।",
    ],
  },
  applicationProcess: {
    online: {
      en: [
        "Go to sspy-up.gov.in and open the Divyang and Kushthavastha Pension section.",
        "Register and fill in the form. Upload your photo, leprosy certificate, income certificate and bank passbook.",
        "Submit and keep the registration number. The district office will verify your application.",
      ],
      hi: [
        "sspy-up.gov.in पर जाएँ और दिव्यांग एवं कुष्ठावस्था पेंशन वाला हिस्सा खोलें।",
        "रजिस्टर करके फ़ॉर्म भरें। फ़ोटो, कुष्ठ प्रमाण पत्र, आय प्रमाण पत्र और बैंक पासबुक अपलोड करें।",
        "फ़ॉर्म जमा करें और रजिस्ट्रेशन नंबर संभालें। ज़िला कार्यालय आवेदन की जाँच करेगा।",
      ],
    },
  },
  documents: {
    en: ["Aadhaar card", "Leprosy certificate", "Income certificate", "Passport-size photo", "Bank passbook"],
    hi: ["आधार कार्ड", "कुष्ठ प्रमाण पत्र", "आय प्रमाण पत्र", "पासपोर्ट साइज़ फ़ोटो", "बैंक पासबुक"],
  },

  officialUrl: "https://sspy-up.gov.in/HindiPages/handicap_h.aspx",
  sources: [
    "https://sspy-up.gov.in/HindiPages/handicap_h.aspx",
    "https://www.outlookindia.com/amp/story/announcements/kushthavastha-pension-scheme-brings-dignity-to-13000-divyangjan-under-yogi-govt-support",
  ],
  lastVerified: "2026-10-06",
  launchedYear: 2016,
  status: "check-status",
};

export default scheme;
