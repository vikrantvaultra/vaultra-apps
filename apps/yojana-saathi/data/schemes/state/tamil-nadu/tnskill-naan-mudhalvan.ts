import { all, isTrue, labelled, residentOf } from "@/lib/engine/build";
import type { Scheme } from "@/lib/types";

const scheme: Scheme = {
  slug: "tnskill-naan-mudhalvan",
  tier: "compact",
  name: { en: "TNSkill (formerly Naan Mudhalvan)", hi: "TNSkill (पहले नान मुदलवन)" },
  aka: ["Naan Mudhalvan", "TNSkill", "TNSDC skill portal", "Vetri Nichayam", "Kalloori Kanavu"],
  shortDescription: {
    en: "Free skill courses, internships, apprenticeships and competitive-exam coaching (including UPSC) for college students and youth in Tamil Nadu, through the TNSkill portal.",
    hi: "तमिलनाडु के कॉलेज विद्यार्थियों और युवाओं के लिए TNSkill पोर्टल से मुफ़्त कौशल कोर्स, इंटर्नशिप, अप्रेंटिसशिप और प्रतियोगी परीक्षा (UPSC समेत) की कोचिंग।",
  },
  level: "state",
  state: "tamil-nadu",
  department: {
    en: "Tamil Nadu Skill Development Corporation (Special Programme Implementation Department), Government of Tamil Nadu",
    hi: "तमिलनाडु कौशल विकास निगम (विशेष कार्यक्रम कार्यान्वयन विभाग), तमिलनाडु सरकार",
  },
  categories: ["skills-employment", "education"],
  tags: ["skill training", "free courses", "internship", "upsc coaching", "college students", "naan mudhalvan"],
  benefitType: "in-kind",
  isDBT: false,
  kundliHouse: "career",
  eligibility: all(
    residentOf("tamil-nadu"),
    labelled(isTrue("student"), { en: "You are studying in a college, polytechnic or ITI in Tamil Nadu", hi: "आप तमिलनाडु के किसी कॉलेज, पॉलिटेक्निक या ITI में पढ़ते हैं" }),
  ),

  details: {
    en: [
      "Naan Mudhalvan was Tamil Nadu's skill programme for college students, run by the Tamil Nadu Skill Development Corporation. After the 2026 change of government, the portal now runs under the name TNSkill, with the same kinds of offerings.",
      "Students in engineering, arts and science, polytechnic, ITI, pharmacy and medical colleges take industry-designed skill courses as part of their studies. The portal also lists internships, apprenticeships, hackathons, campus hiring and free coaching for UPSC and other competitive exams.",
      "The 2026-27 budget also announced a separate Vetri Skill Training Scheme for 12 lakh college students and 1 lakh unemployed youth, with internship stipends; its detailed rules had not been published when this page was checked.",
    ],
    hi: [
      "नान मुदलवन तमिलनाडु कौशल विकास निगम का कॉलेज विद्यार्थियों के लिए कौशल कार्यक्रम था। 2026 में सरकार बदलने के बाद पोर्टल अब TNSkill नाम से चलता है, और इसमें उसी तरह की सुविधाएँ हैं।",
      "इंजीनियरिंग, आर्ट्स और साइंस, पॉलिटेक्निक, ITI, फ़ार्मेसी और मेडिकल कॉलेजों के विद्यार्थी पढ़ाई के साथ उद्योग के हिसाब से बने कौशल कोर्स करते हैं। पोर्टल पर इंटर्नशिप, अप्रेंटिसशिप, हैकाथॉन, कैंपस भर्ती और UPSC व दूसरी प्रतियोगी परीक्षाओं की मुफ़्त कोचिंग भी है।",
      "2026-27 के बजट में 12 लाख कॉलेज विद्यार्थियों और 1 लाख बेरोज़गार युवाओं के लिए अलग वेट्री कौशल प्रशिक्षण योजना की भी घोषणा हुई, जिसमें इंटर्नशिप के दौरान वज़ीफ़ा मिलेगा; यह पेज जाँचते समय इसके विस्तृत नियम जारी नहीं हुए थे।",
    ],
  },
  benefits: {
    en: [
      "Free skill courses designed with industry partners, for your branch of study.",
      "Access to internships, apprenticeships, hackathons and campus hiring.",
      "Free coaching and study support for UPSC and other competitive exams.",
    ],
    hi: [
      "उद्योग साझेदारों के साथ बने, आपकी पढ़ाई की शाखा के हिसाब से मुफ़्त कौशल कोर्स।",
      "इंटर्नशिप, अप्रेंटिसशिप, हैकाथॉन और कैंपस भर्ती के मौक़े।",
      "UPSC और दूसरी प्रतियोगी परीक्षाओं के लिए मुफ़्त कोचिंग और पढ़ाई में मदद।",
    ],
  },
  eligibilityText: {
    en: [
      "You are a student in a college, polytechnic, ITI, pharmacy or medical institution in Tamil Nadu (your institution registers you).",
      "Some programmes, such as competitive-exam coaching, have their own selection tests and rules.",
    ],
    hi: [
      "आप तमिलनाडु के किसी कॉलेज, पॉलिटेक्निक, ITI, फ़ार्मेसी या मेडिकल संस्थान के विद्यार्थी हैं (आपका संस्थान आपको पंजीकृत करता है)।",
      "कुछ कार्यक्रमों, जैसे प्रतियोगी परीक्षा कोचिंग, की अपनी चयन परीक्षा और नियम हैं।",
    ],
  },
  applicationProcess: {
    online: {
      en: [
        "Go to naanmudhalvan.tn.gov.in (the TNSkill portal) and log in or register as a student.",
        "Pick the courses, internships or exam programmes open to you and enrol.",
        "For help, call the portal helplines listed on the site or ask your college's placement or skill coordinator.",
      ],
      hi: [
        "naanmudhalvan.tn.gov.in (TNSkill पोर्टल) पर जाएँ और विद्यार्थी के रूप में लॉग इन या रजिस्टर करें।",
        "अपने लिए खुले कोर्स, इंटर्नशिप या परीक्षा कार्यक्रम चुनें और नामांकन करें।",
        "मदद के लिए साइट पर दिए हेल्पलाइन नंबर पर कॉल करें या अपने कॉलेज के प्लेसमेंट या कौशल समन्वयक से पूछें।",
      ],
    },
  },

  officialUrl: "https://www.naanmudhalvan.tn.gov.in/",
  sources: ["https://www.naanmudhalvan.tn.gov.in/", "https://tamildigitallibrary.in/Marc-Articles/004866_Tamil_Nadu_Budget_2026_2027"],
  lastVerified: "2026-10-06",
  launchedYear: 2022,
  status: "active",
};

export default scheme;
