import { all, isTrue, labelled, notGovtEmployee, residentOf, when } from "@/lib/engine/build";
import type { Scheme } from "@/lib/types";

const scheme: Scheme = {
  slug: "arunachal-state-stipend-scheme",
  overlapGroup: "scholarship",
  name: { en: "Arunachal Pradesh State Stipend Scheme", hi: "अरुणाचल प्रदेश राज्य स्टाइपेंड योजना" },
  aka: ["APST stipend", "Arunachal stipend", "State stipend Arunachal"],
  shortDescription: {
    en: "APST students in higher, technical or professional courses, in or outside Arunachal, get a state stipend of ₹16,400 a year, applied for on the National Scholarship Portal.",
    hi: "उच्च, तकनीकी या प्रोफ़ेशनल कोर्स कर रहे APST विद्यार्थियों को, अरुणाचल के अंदर या बाहर, हर साल ₹16,400 का राज्य स्टाइपेंड मिलता है, जिसके लिए नेशनल स्कॉलरशिप पोर्टल पर आवेदन होता है।",
  },
  level: "state",
  state: "arunachal-pradesh",
  department: {
    en: "Directorate of Higher & Technical Education, Government of Arunachal Pradesh",
    hi: "उच्च एवं तकनीकी शिक्षा निदेशालय, अरुणाचल प्रदेश सरकार",
  },
  categories: ["education"],
  tags: ["scholarship", "stipend", "apst", "college", "tribal students", "nsp", "arunachal"],
  benefitType: "cash",
  isDBT: true,
  value: { amount: 16_400, period: "yearly", kind: "cash" },
  kundliHouse: "education",
  eligibility: all(
    residentOf("arunachal-pradesh"),
    labelled(when("caste", "in", ["st", "pvtg"]), {
      en: "You are an Arunachal Pradesh Scheduled Tribe (APST) student",
      hi: "आप अरुणाचल प्रदेश अनुसूचित जनजाति (APST) के विद्यार्थी हैं",
    }),
    isTrue("student"),
    labelled(notGovtEmployee(), { en: "You are not a regular government employee", hi: "आप नियमित सरकारी कर्मचारी नहीं हैं" }),
  ),

  details: {
    en: [
      "The Arunachal Pradesh State Stipend Scheme is paid entirely from the state budget to APST students studying in higher, technical or professional courses, whether in Arunachal or elsewhere in India.",
      "The rate is ₹16,400 a year. Applications are made on the National Scholarship Portal (NSP), and the Directorate of Higher & Technical Education pays the money by Aadhaar-based payment into the student's bank account.",
      "Students must choose either this state stipend or the central Post-Matric Scholarship for ST students. Applying for both gets the application rejected.",
    ],
    hi: [
      "अरुणाचल प्रदेश राज्य स्टाइपेंड योजना पूरी तरह राज्य बजट से उन APST विद्यार्थियों को दी जाती है जो उच्च, तकनीकी या प्रोफ़ेशनल कोर्स कर रहे हैं, चाहे अरुणाचल में या भारत में कहीं और।",
      "दर ₹16,400 सालाना है। आवेदन नेशनल स्कॉलरशिप पोर्टल (NSP) पर होता है, और उच्च एवं तकनीकी शिक्षा निदेशालय पैसा आधार आधारित भुगतान से विद्यार्थी के बैंक खाते में भेजता है।",
      "विद्यार्थी को यह राज्य स्टाइपेंड या केंद्र की ST पोस्ट-मैट्रिक छात्रवृत्ति में से कोई एक चुननी होती है। दोनों में आवेदन करने पर आवेदन रद्द हो जाता है।",
    ],
  },
  benefits: {
    en: [
      "₹16,400 a year, paid into your Aadhaar-seeded bank account.",
      "Available for courses both inside and outside Arunachal Pradesh.",
      "Fresh and renewal applications are accepted every year.",
    ],
    hi: [
      "हर साल ₹16,400, आधार से जुड़े बैंक खाते में।",
      "अरुणाचल प्रदेश के अंदर और बाहर, दोनों जगह के कोर्स के लिए।",
      "हर साल नए और नवीनीकरण (रिन्यूअल) दोनों तरह के आवेदन लिए जाते हैं।",
    ],
  },
  eligibilityText: {
    en: [
      "You belong to an Arunachal Pradesh Scheduled Tribe (APST) and are a permanent resident of the state.",
      "You are a regular student in a recognised higher, technical or professional course.",
      "You are not a regular government employee.",
      "You apply for only one scheme on NSP: this stipend or the central Post-Matric Scholarship for ST students.",
    ],
    hi: [
      "आप अरुणाचल प्रदेश की अनुसूचित जनजाति (APST) से हैं और राज्य के स्थायी निवासी हैं।",
      "आप किसी मान्यता प्राप्त उच्च, तकनीकी या प्रोफ़ेशनल कोर्स के नियमित विद्यार्थी हैं।",
      "आप नियमित सरकारी कर्मचारी नहीं हैं।",
      "आप NSP पर सिर्फ़ एक योजना में आवेदन करते हैं: यह स्टाइपेंड या केंद्र की ST पोस्ट-मैट्रिक छात्रवृत्ति।",
    ],
  },
  exclusions: {
    en: [
      "Regular government servants enrolled as students.",
      "Students whose data shows up in more than one scheme on NSP.",
      "Incomplete applications or those submitted after the last date.",
    ],
    hi: [
      "नियमित सरकारी कर्मचारी जो विद्यार्थी के रूप में दाख़िल हैं।",
      "जिन विद्यार्थियों का डेटा NSP पर एक से ज़्यादा योजना में मिले।",
      "अधूरे आवेदन या आख़िरी तारीख़ के बाद जमा आवेदन।",
    ],
  },
  applicationProcess: {
    online: {
      en: [
        "Create your One Time Registration (OTR) on the National Scholarship Portal (scholarships.gov.in).",
        "Log in, choose 'Arunachal Pradesh State Stipend Scheme' as a fresh or renewal application, and fill in the form. For 2026-27, the last date is 16 October 2026.",
        "Get your application verified by your institute's nodal officer quickly; it then goes to the state nodal officer. Track the status on NSP until payment.",
      ],
      hi: [
        "नेशनल स्कॉलरशिप पोर्टल (scholarships.gov.in) पर अपना वन टाइम रजिस्ट्रेशन (OTR) बनाएँ।",
        "लॉग इन करें, नए या रिन्यूअल आवेदन में 'Arunachal Pradesh State Stipend Scheme' चुनें और फ़ॉर्म भरें। 2026-27 के लिए आख़िरी तारीख़ 16 अक्टूबर 2026 है।",
        "अपने संस्थान के नोडल अधिकारी से आवेदन जल्दी सत्यापित कराएँ; इसके बाद यह राज्य नोडल अधिकारी के पास जाता है। भुगतान होने तक NSP पर स्थिति देखते रहें।",
      ],
    },
  },
  documents: {
    en: [
      "APST certificate",
      "Aadhaar card, seeded to an active bank account in a nationalised bank",
      "Income certificate",
      "Bonafide certificate from your institute and previous mark sheet",
    ],
    hi: [
      "APST प्रमाण पत्र",
      "आधार कार्ड, जो किसी राष्ट्रीयकृत बैंक के चालू खाते से जुड़ा हो",
      "आय प्रमाण पत्र",
      "संस्थान का बोनाफ़ाइड प्रमाण पत्र और पिछली मार्कशीट",
    ],
  },
  faqs: [
    {
      q: { en: "Can I get this and the central ST post-matric scholarship together?", hi: "क्या यह और केंद्र की ST पोस्ट-मैट्रिक छात्रवृत्ति दोनों साथ मिल सकती हैं?" },
      a: {
        en: "No. You must apply for only one of them on NSP; if your details appear in both, the portal rejects the application.",
        hi: "नहीं। NSP पर इनमें से सिर्फ़ एक के लिए आवेदन करना है; दोनों में आपका ब्योरा मिला तो पोर्टल आवेदन रद्द कर देता है।",
      },
    },
    {
      q: { en: "I study outside Arunachal. Can I apply?", hi: "मैं अरुणाचल के बाहर पढ़ता/पढ़ती हूँ। क्या आवेदन कर सकता/सकती हूँ?" },
      a: {
        en: "Yes. The stipend covers APST students in courses both inside and outside the state.",
        hi: "हाँ। यह स्टाइपेंड राज्य के अंदर और बाहर, दोनों जगह पढ़ रहे APST विद्यार्थियों के लिए है।",
      },
    },
  ],

  officialUrl: "https://apdhte.nic.in/Stipend.htm",
  sources: [
    "https://apdhte.nic.in/Stipend/2026-27/Scholarship%20Notice.pdf",
    "https://scholarships.gov.in/",
  ],
  lastVerified: "2026-10-06",
  launchedYear: 2021,
  status: "active",
};

export default scheme;
