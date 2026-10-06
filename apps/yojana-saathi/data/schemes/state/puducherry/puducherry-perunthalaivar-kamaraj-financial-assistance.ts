import { all, isTrue, labelled, residentOf } from "@/lib/engine/build";
import type { Scheme } from "@/lib/types";

const scheme: Scheme = {
  slug: "puducherry-perunthalaivar-kamaraj-financial-assistance",
  tier: "compact",
  overlapGroup: "scholarship",
  name: { en: "Perunthalaivar Kamaraj Financial Assistance Scheme (PKFAS)", hi: "पेरुंतलैवर कामराज वित्तीय सहायता योजना (PKFAS)" },
  aka: ["PKFAS", "Kamaraj financial assistance", "CENTAC fee assistance"],
  shortDescription: {
    en: "Puducherry students admitted through CENTAC to government-quota seats in medicine, engineering, nursing and other courses get help with their college fees.",
    hi: "CENTAC के ज़रिए सरकारी कोटे की मेडिकल, इंजीनियरिंग, नर्सिंग और दूसरी सीटों पर दाख़िला पाने वाले पुडुचेरी के छात्रों को कॉलेज फ़ीस में मदद मिलती है।",
  },
  level: "state",
  state: "puducherry",
  department: {
    en: "Directorate of Higher and Technical Education, Government of Puducherry",
    hi: "उच्च एवं तकनीकी शिक्षा निदेशालय, पुडुचेरी सरकार",
  },
  categories: ["education"],
  tags: ["scholarship", "fee assistance", "centac", "mbbs", "engineering", "nursing", "puducherry"],
  benefitType: "cash",
  isDBT: true,
  kundliHouse: "education",
  eligibility: all(residentOf("puducherry"), labelled(isTrue("student"), { en: "You are a student", hi: "आप छात्र हैं" })),

  details: {
    en: [
      "The Perunthalaivar Kamaraj Financial Assistance Scheme helps Puducherry students who get professional seats through CENTAC (the Centralised Admission Committee) pay their fees. It is run by the Directorate of Higher and Technical Education, and the money is credited to the student's bank account.",
      "It began for medical, engineering and nursing courses. The 2025-26 budget extended it to all courses admitted through CENTAC under the government quota, with a 100% fee waiver for students admitted to NEET-based undergraduate courses under the 10% quota for government school students. In 2025-26, ₹26.14 crore went to 4,903 students, and ₹37 crore is set aside for 2026-27. The amount per student depends on the course and family income.",
    ],
    hi: [
      "पेरुंतलैवर कामराज वित्तीय सहायता योजना उन पुडुचेरी के छात्रों को फ़ीस भरने में मदद करती है जिन्हें CENTAC (केंद्रीकृत प्रवेश समिति) के ज़रिए प्रोफ़ेशनल कोर्स की सीट मिलती है। इसे उच्च एवं तकनीकी शिक्षा निदेशालय चलाता है, और पैसा छात्र के बैंक खाते में आता है।",
      "यह मेडिकल, इंजीनियरिंग और नर्सिंग कोर्स के लिए शुरू हुई थी। 2025-26 के बजट में इसे CENTAC से सरकारी कोटे में दाख़िले वाले सभी कोर्स तक बढ़ाया गया, और सरकारी स्कूल के छात्रों के 10% कोटे से NEET आधारित स्नातक कोर्स में दाख़िला पाने वालों की पूरी फ़ीस माफ़ की गई। 2025-26 में 4,903 छात्रों को ₹26.14 करोड़ दिए गए, और 2026-27 के लिए ₹37 करोड़ रखे गए हैं। हर छात्र को मिलने वाली राशि कोर्स और परिवार की आय पर निर्भर करती है।",
    ],
  },
  benefits: {
    en: [
      "Financial assistance towards college fees, paid into the student's bank account.",
      "100% fee waiver for students admitted to NEET-based undergraduate courses under the 10% government school quota.",
    ],
    hi: [
      "कॉलेज फ़ीस के लिए आर्थिक मदद, छात्र के बैंक खाते में।",
      "सरकारी स्कूल के 10% कोटे से NEET आधारित स्नातक कोर्स में दाख़िला पाने वाले छात्रों की पूरी फ़ीस माफ़।",
    ],
  },
  eligibilityText: {
    en: [
      "A resident of Puducherry admitted through CENTAC to a government-quota seat.",
      "From the second year onwards, the student must pass the exams and submit mark sheets to keep getting the assistance.",
      "A recommendation from the head of the institution is needed.",
    ],
    hi: [
      "पुडुचेरी का निवासी जिसे CENTAC के ज़रिए सरकारी कोटे की सीट मिली हो।",
      "दूसरे साल से सहायता जारी रखने के लिए छात्र को परीक्षा पास करके अंक-पत्र जमा करने होते हैं।",
      "संस्थान के प्रमुख की सिफ़ारिश ज़रूरी है।",
    ],
  },
  applicationProcess: {
    offline: {
      en: [
        "After CENTAC admission, ask your college office about the PKFAS application and get it recommended by the head of the institution.",
        "Submit it with your residence, income and educational certificates and photo ID; the Directorate publishes award lists on its website.",
      ],
      hi: [
        "CENTAC से दाख़िले के बाद PKFAS आवेदन के बारे में अपने कॉलेज के दफ़्तर से पूछें और संस्थान प्रमुख से सिफ़ारिश करवाएँ।",
        "निवास, आय और शैक्षिक प्रमाण पत्र और फ़ोटो पहचान पत्र के साथ आवेदन जमा करें; निदेशालय अपनी वेबसाइट पर लाभार्थियों की सूची डालता है।",
      ],
    },
  },

  officialUrl: "https://dhte.py.gov.in/perunthalaivar-kamaraj-financial-assistance-schemes-pkfas",
  sources: [
    "https://dhte.py.gov.in/perunthalaivar-kamaraj-financial-assistance-schemes-pkfas",
    "https://www.py.gov.in/sites/default/files/cmfile2026eng.pdf",
    "https://www.py.gov.in/sites/default/files/cm-speech-2025-26-english.pdf",
    "https://py.gov.in/sites/default/files/perunthalaivar-kamaraj-financial-assistance.pdf",
  ],
  lastVerified: "2026-10-06",
  launchedYear: 2013,
  status: "active",
};

export default scheme;
