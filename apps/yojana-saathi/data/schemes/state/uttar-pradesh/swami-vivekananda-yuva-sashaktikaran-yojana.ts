import { all, isTrue, labelled, residentOf } from "@/lib/engine/build";
import type { Scheme } from "@/lib/types";

const scheme: Scheme = {
  slug: "swami-vivekananda-yuva-sashaktikaran-yojana",
  tier: "full",
  name: { en: "Swami Vivekananda Yuva Sashaktikaran Yojana (Free Tablet Scheme)", hi: "स्वामी विवेकानंद युवा सशक्तीकरण योजना (मुफ़्त टैबलेट योजना)" },
  aka: ["UP free tablet yojana", "UP free smartphone yojana", "DigiShakti", "Free tablet scheme"],
  shortDescription: {
    en: "Students in Uttar Pradesh doing graduation, post-graduation, diploma, ITI or skill courses get a free tablet through their college or institute.",
    hi: "उत्तर प्रदेश में ग्रेजुएशन, पोस्ट-ग्रेजुएशन, डिप्लोमा, ITI या कौशल कोर्स कर रहे छात्रों को उनके कॉलेज या संस्थान के ज़रिए मुफ़्त टैबलेट मिलता है।",
  },
  level: "state",
  state: "uttar-pradesh",
  department: {
    en: "IT and Electronics Department with the Higher, Technical and Vocational Education Departments, Government of Uttar Pradesh",
    hi: "आईटी एवं इलेक्ट्रॉनिक्स विभाग, उच्च, प्राविधिक एवं व्यावसायिक शिक्षा विभागों के साथ, उत्तर प्रदेश सरकार",
  },
  categories: ["education", "skills-employment"],
  tags: ["free tablet", "free smartphone", "students", "digishakti", "college", "uttar pradesh"],
  benefitType: "in-kind",
  isDBT: false,
  kundliHouse: "education",
  eligibility: all(
    residentOf("uttar-pradesh"),
    labelled(isTrue("student"), {
      en: "Studying in a graduation, PG, diploma, ITI or skill course in UP",
      hi: "UP में ग्रेजुएशन, PG, डिप्लोमा, ITI या कौशल कोर्स में पढ़ रहे हों",
    }),
  ),

  details: {
    en: [
      "Under the Swami Vivekananda Yuva Sashaktikaran Yojana, the Uttar Pradesh government gives free tablets (and earlier, smartphones) to young people in higher studies and training. About 60 lakh devices have been given out so far.",
      "In August 2026 the state cabinet approved buying 25 lakh more tablets, with ₹2,374.60 crore set aside in the 2026-27 budget. The scheme now runs for five years.",
      "You do not apply as an individual. Your college, university, polytechnic, ITI or training centre uploads the details of eligible students on the DigiShakti portal, and devices are handed out at the institute.",
    ],
    hi: [
      "स्वामी विवेकानंद युवा सशक्तीकरण योजना में उत्तर प्रदेश सरकार उच्च शिक्षा और प्रशिक्षण ले रहे युवाओं को मुफ़्त टैबलेट (और पहले स्मार्टफ़ोन) देती है। अब तक लगभग 60 लाख डिवाइस बाँटे जा चुके हैं।",
      "अगस्त 2026 में राज्य कैबिनेट ने 25 लाख और टैबलेट ख़रीदने की मंज़ूरी दी, और 2026-27 के बजट में इसके लिए ₹2,374.60 करोड़ रखे गए। योजना अब पाँच साल चलेगी।",
      "छात्र को ख़ुद आवेदन नहीं करना होता। आपका कॉलेज, विश्वविद्यालय, पॉलिटेक्निक, ITI या प्रशिक्षण केंद्र पात्र छात्रों का ब्योरा DigiShakti पोर्टल पर डालता है, और डिवाइस संस्थान में ही बाँटे जाते हैं।",
    ],
  },
  benefits: {
    en: [
      "A free tablet, owned by you.",
      "Use it for study, online classes, and the job and training resources linked through the DigiShakti portal.",
      "No cost to the student or family.",
    ],
    hi: [
      "मुफ़्त टैबलेट, जो आपका अपना होगा।",
      "पढ़ाई, ऑनलाइन क्लास, और DigiShakti पोर्टल से जुड़े नौकरी और प्रशिक्षण के संसाधनों के लिए इस्तेमाल करें।",
      "छात्र या परिवार को कोई ख़र्च नहीं।",
    ],
  },
  eligibilityText: {
    en: [
      "Studying in Uttar Pradesh in a graduation, post-graduation, diploma, polytechnic, ITI, skill development or other recognised training course.",
      "Enrolled in a recognised government or private institution that is registered on the DigiShakti portal.",
      "Has not already received a tablet or smartphone under this scheme.",
    ],
    hi: [
      "उत्तर प्रदेश में ग्रेजुएशन, पोस्ट-ग्रेजुएशन, डिप्लोमा, पॉलिटेक्निक, ITI, कौशल विकास या किसी दूसरे मान्यता प्राप्त प्रशिक्षण कोर्स में पढ़ रहे हों।",
      "किसी मान्यता प्राप्त सरकारी या निजी संस्थान में दाख़िला हो, जो DigiShakti पोर्टल पर रजिस्टर्ड हो।",
      "इस योजना में पहले टैबलेट या स्मार्टफ़ोन न मिला हो।",
    ],
  },
  exclusions: {
    en: [
      "Students who already got a device under this scheme.",
      "School students (Class 1 to 12) are not covered.",
    ],
    hi: [
      "जिन छात्रों को इस योजना में पहले डिवाइस मिल चुका है।",
      "स्कूल के छात्र (कक्षा 1 से 12) शामिल नहीं हैं।",
    ],
  },
  applicationProcess: {
    offline: {
      en: [
        "Ask your college or institute's nodal officer whether your name has been uploaded on the DigiShakti portal.",
        "Check your name and details on digishakti.up.gov.in and get any mistakes corrected through the institute.",
        "Collect your tablet at the distribution event in your institute, carrying your ID card and Aadhaar.",
      ],
      hi: [
        "अपने कॉलेज या संस्थान के नोडल अधिकारी से पूछें कि आपका नाम DigiShakti पोर्टल पर डाला गया है या नहीं।",
        "digishakti.up.gov.in पर अपना नाम और ब्योरा देखें, और कोई ग़लती हो तो संस्थान के ज़रिए ठीक करवाएँ।",
        "संस्थान में वितरण कार्यक्रम के दिन पहचान पत्र और आधार लेकर अपना टैबलेट लें।",
      ],
    },
  },
  documents: {
    en: ["Aadhaar card", "College or institute ID card", "Proof of current enrolment (fee receipt or admission slip)"],
    hi: ["आधार कार्ड", "कॉलेज या संस्थान का पहचान पत्र", "मौजूदा दाख़िले का सबूत (फ़ीस रसीद या एडमिशन पर्ची)"],
  },
  faqs: [
    {
      q: { en: "Is there an online form for students?", hi: "क्या छात्रों के लिए कोई ऑनलाइन फ़ॉर्म है?" },
      a: {
        en: "No. Institutes upload student data. Beware of websites or messages asking you to pay or fill a 'tablet form'; they are not official.",
        hi: "नहीं। छात्रों का डेटा संस्थान ही डालते हैं। जो वेबसाइट या मैसेज पैसे या 'टैबलेट फ़ॉर्म' माँगें, उनसे सावधान रहें; वे सरकारी नहीं हैं।",
      },
    },
    {
      q: { en: "Do private college students get it?", hi: "क्या निजी कॉलेज के छात्रों को भी मिलता है?" },
      a: {
        en: "Yes, students of recognised private institutions in UP are covered, as long as the institute has registered on the portal.",
        hi: "हाँ, UP के मान्यता प्राप्त निजी संस्थानों के छात्र भी शामिल हैं, बशर्ते संस्थान पोर्टल पर रजिस्टर्ड हो।",
      },
    },
  ],

  officialUrl: "https://digishakti.up.gov.in/",
  sources: [
    "https://digishakti.up.gov.in/",
    "https://news.careers360.com/up-govt-cabinet-ug-pg-students-diploma-skill-development-training-educational-approves-purchase-25-lakh-tablets-youth-employment",
    "https://hbtu.ac.in/academics-notice/Tab-distribution-schedule-2025.pdf",
  ],
  lastVerified: "2026-10-06",
  launchedYear: 2021,
  status: "active",
};

export default scheme;
