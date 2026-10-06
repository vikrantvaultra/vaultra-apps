import { all, isTrue, maxAge, residentOf } from "@/lib/engine/build";
import type { Scheme } from "@/lib/types";

const scheme: Scheme = {
  slug: "manohar-parrikar-goa-scholars-scheme",
  tier: "compact",
  overlapGroup: "scholarship",
  name: { en: "Manohar Parrikar Goa Scholars Scheme", hi: "मनोहर पर्रिकर गोवा स्कॉलर्स योजना" },
  aka: ["Goa Scholars", "MPGSS", "Goa scholar award"],
  shortDescription: {
    en: "A ₹6 lakh award (₹15 lakh for study abroad) for up to 40–50 meritorious Goan students under 35 doing a postgraduate degree or PhD at a reputed institution.",
    hi: "किसी प्रतिष्ठित संस्थान में पोस्टग्रेजुएट या PhD कर रहे 35 साल से कम उम्र के 40–50 मेधावी गोवा के छात्रों को ₹6 लाख (विदेश में पढ़ाई के लिए ₹15 लाख) का पुरस्कार।",
  },
  level: "state",
  state: "goa",
  department: {
    en: "Directorate of Higher Education, Government of Goa",
    hi: "उच्च शिक्षा निदेशालय, गोवा सरकार",
  },
  categories: ["education"],
  tags: ["scholarship", "postgraduate", "phd", "study abroad", "merit", "goa scholars"],
  benefitType: "cash",
  isDBT: true,
  value: { amount: 600000, period: "one-time", kind: "cash" },
  ageRange: { max: 35 },
  kundliHouse: "education",
  eligibility: all(residentOf("goa"), maxAge(35), isTrue("student")),

  details: {
    en: [
      "The Manohar Parrikar Goa Scholars Scheme, 2025 was notified in the Goa Gazette in March 2026 by the Directorate of Higher Education. It rewards talented young Goans who take admission for a PG programme or PhD in a good institution in India or abroad.",
      "Each year 40 scholars are chosen (up to 50 in special cases). Candidates are shortlisted on their class 10, 12 and degree marks, then selected after an interview that also weighs extra-curricular achievements and the reputation of the institution.",
    ],
    hi: [
      "मनोहर पर्रिकर गोवा स्कॉलर्स योजना, 2025 को उच्च शिक्षा निदेशालय ने मार्च 2026 में गोवा राजपत्र में अधिसूचित किया। यह भारत या विदेश के किसी अच्छे संस्थान में PG या PhD में दाख़िला लेने वाले प्रतिभाशाली युवा गोवावासियों को पुरस्कृत करती है।",
      "हर साल 40 स्कॉलर चुने जाते हैं (ख़ास हालात में 50 तक)। 10वीं, 12वीं और डिग्री के अंकों पर शॉर्टलिस्ट करके इंटरव्यू से चयन होता है, जिसमें अन्य उपलब्धियों और संस्थान की प्रतिष्ठा को भी अंक मिलते हैं।",
    ],
  },
  benefits: {
    en: [
      "₹6,00,000 for studies in India.",
      "₹15,00,000 for studies abroad.",
      "Paid directly into your Aadhaar-seeded bank account.",
    ],
    hi: [
      "भारत में पढ़ाई के लिए ₹6,00,000।",
      "विदेश में पढ़ाई के लिए ₹15,00,000।",
      "सीधे आपके आधार से जुड़े बैंक खाते में।",
    ],
  },
  eligibilityText: {
    en: [
      "Not older than 35 on 1 January of the award year.",
      "Resident of Goa for at least 15 years, or 7 years if you are of Goan origin (a parent or grandparent born in Goa).",
      "At least 60% in your qualifying degree, preferably from an institution in Goa, and at least 70 out of 100 on the weighted score of class 10, 12 and degree marks.",
      "A bonafide student of a PG or PhD programme in any subject for the year the award is announced.",
    ],
    hi: [
      "पुरस्कार वर्ष की 1 जनवरी को उम्र 35 साल से ज़्यादा न हो।",
      "कम से कम 15 साल से गोवा के निवासी, या गोवा मूल के हों (माता-पिता या दादा-दादी गोवा में जन्मे) तो 7 साल।",
      "योग्यता डिग्री में कम से कम 60% अंक, बेहतर हो गोवा के किसी संस्थान से, और 10वीं, 12वीं व डिग्री के भारित अंकों में 100 में से कम से कम 70।",
      "पुरस्कार घोषित होने वाले साल में किसी भी विषय के PG या PhD कोर्स के नियमित छात्र।",
    ],
  },
  applicationProcess: {
    online: {
      en: [
        "Watch for the yearly announcement on the Directorate of Higher Education website (dhe.goa.gov.in) and in local newspapers.",
        "Apply online in the prescribed form before the last date, with your marksheets and a bonafide certificate from your institution.",
        "If shortlisted, submit your CV and a 500-word write-up and attend the interview (in person or by video).",
      ],
      hi: [
        "उच्च शिक्षा निदेशालय की वेबसाइट (dhe.goa.gov.in) और स्थानीय अख़बारों में सालाना घोषणा देखें।",
        "आख़िरी तारीख से पहले तय फ़ॉर्म में ऑनलाइन आवेदन करें, अपनी अंकतालिकाओं और संस्थान के बोनाफ़ाइड प्रमाण पत्र के साथ।",
        "शॉर्टलिस्ट होने पर अपना CV और 500 शब्दों का लेख जमा करें और इंटरव्यू (आमने-सामने या वीडियो से) दें।",
      ],
    },
  },

  officialUrl: "https://dhe.goa.gov.in/",
  sources: [
    "https://www.goa.gov.in/wp-content/uploads/2026/09/Manohar-Parrikar-Goa-Scholars-Scheme-2025.pdf",
  ],
  lastVerified: "2026-10-06",
  launchedYear: 2026,
  status: "active",
};

export default scheme;
