import { all, isTrue, labelled, residentOf } from "@/lib/engine/build";
import type { Scheme } from "@/lib/types";

const scheme: Scheme = {
  slug: "manipur-state-competitive-scholarship",
  tier: "compact",
  name: { en: "State Competitive Scholarship Examination (Manipur)", hi: "राज्य प्रतियोगी छात्रवृत्ति परीक्षा (मणिपुर)" },
  aka: ["SCSE Manipur", "Manipur scholarship exam", "Class III V VIII scholarship Manipur"],
  shortDescription: {
    en: "Manipur school children who pass Class III, V or VIII with good marks can sit a free state exam; top scorers are selected for a state scholarship.",
    hi: "कक्षा III, V या VIII अच्छे अंकों से पास करने वाले मणिपुर के स्कूली बच्चे राज्य की परीक्षा दे सकते हैं; सबसे अच्छे अंक वालों को राज्य छात्रवृत्ति के लिए चुना जाता है।",
  },
  level: "state",
  state: "manipur",
  department: {
    en: "Department of Education (Schools), Government of Manipur",
    hi: "शिक्षा विभाग (स्कूल), मणिपुर सरकार",
  },
  categories: ["education"],
  tags: ["scholarship", "school", "merit", "exam", "class 3", "class 5", "class 8", "manipur"],
  benefitType: "cash",
  isDBT: false,
  kundliHouse: "education",
  eligibility: all(
    residentOf("manipur"),
    labelled(isTrue("student"), {
      en: "You are a school student who has just passed Class III, V or VIII",
      hi: "आप स्कूल के विद्यार्थी हैं और अभी कक्षा III, V या VIII पास की है",
    }),
  ),

  details: {
    en: [
      "The Department of Education (Schools), Manipur holds a State Competitive Scholarship Examination every year for children who have just passed Class III, Class V or Class VIII. Children who do best in the exam are selected for the state scholarship.",
      "The exam is a two-hour objective paper in English with a Mental Ability part and a school-subjects part. The 2025-26 exam was held on 22 February 2026. The scholarship amount is not given in the published form, so check with your Zonal Education Officer.",
    ],
    hi: [
      "मणिपुर का शिक्षा विभाग (स्कूल) हर साल उन बच्चों के लिए राज्य प्रतियोगी छात्रवृत्ति परीक्षा करवाता है जिन्होंने अभी कक्षा III, V या VIII पास की है। परीक्षा में सबसे अच्छा करने वाले बच्चों को राज्य छात्रवृत्ति के लिए चुना जाता है।",
      "परीक्षा दो घंटे की, अंग्रेज़ी में, बहुविकल्पीय प्रश्नों वाली होती है, जिसमें मानसिक योग्यता और स्कूली विषयों के दो भाग होते हैं। 2025-26 की परीक्षा 22 फ़रवरी 2026 को हुई। छात्रवृत्ति की राशि छपे फ़ॉर्म में नहीं दी गई है, इसलिए अपने ज़ोनल शिक्षा अधिकारी से पूछें।",
    ],
  },
  benefits: {
    en: [
      "A state scholarship for children selected on the basis of the exam.",
      "Separate exams and selection lists for Class III, Class V and Class VIII.",
    ],
    hi: [
      "परीक्षा के आधार पर चुने गए बच्चों को राज्य छात्रवृत्ति।",
      "कक्षा III, कक्षा V और कक्षा VIII के लिए अलग परीक्षा और अलग चयन सूची।",
    ],
  },
  eligibilityText: {
    en: [
      "You passed Class III, V or VIII in the previous year from a government, government-aided, recognised private or CBSE school in Manipur.",
      "You scored at least 60% (General), 55% (OBC) or 50% (SC, ST and students with disabilities) in the annual exam.",
      "Students of Sainik School, Navodaya Vidyalaya, Kendriya Vidyalaya and other government residential schools cannot apply.",
    ],
    hi: [
      "आपने पिछले साल मणिपुर के किसी सरकारी, सरकारी सहायता प्राप्त, मान्यता प्राप्त निजी या CBSE स्कूल से कक्षा III, V या VIII पास की है।",
      "वार्षिक परीक्षा में आपके कम से कम 60% (सामान्य), 55% (OBC) या 50% (SC, ST और दिव्यांग विद्यार्थी) अंक हैं।",
      "सैनिक स्कूल, नवोदय विद्यालय, केंद्रीय विद्यालय और दूसरे सरकारी आवासीय स्कूलों के विद्यार्थी आवेदन नहीं कर सकते।",
    ],
  },
  applicationProcess: {
    offline: {
      en: [
        "Download the form from manipureducation.gov.in when it is published (the 2025-26 form came out in December 2025), or get it from your school.",
        "Fill it in capital letters, paste a photo attested by the head of your school, and get the school's certificate signed.",
        "Your school sends the form to the Zonal Education Officer (ZEO) before the last date; collect the admit card from the ZEO about a week before the exam.",
      ],
      hi: [
        "फ़ॉर्म जारी होने पर (2025-26 का फ़ॉर्म दिसंबर 2025 में आया था) manipureducation.gov.in से डाउनलोड करें, या अपने स्कूल से लें।",
        "उसे बड़े अक्षरों में भरें, स्कूल के प्रधान से प्रमाणित फ़ोटो लगाएँ, और स्कूल का प्रमाण पत्र भरवाकर साइन करवाएँ।",
        "आपका स्कूल आखिरी तारीख से पहले फ़ॉर्म ज़ोनल शिक्षा अधिकारी (ZEO) को भेजता है; परीक्षा से करीब एक हफ़्ता पहले ZEO से एडमिट कार्ड ले लें।",
      ],
    },
  },
  documents: {
    en: [
      "Photocopy of the Class III, V or VIII mark sheet or progress report",
      "Photocopy of Aadhaar card",
      "SC, ST, OBC or disability certificate (if you claim the lower cut-off)",
    ],
    hi: [
      "कक्षा III, V या VIII की अंकतालिका या प्रगति रिपोर्ट की फ़ोटोकॉपी",
      "आधार कार्ड की फ़ोटोकॉपी",
      "SC, ST, OBC या दिव्यांगता प्रमाण पत्र (अगर आप कम कट-ऑफ़ का लाभ ले रहे हैं)",
    ],
  },

  officialUrl: "https://manipureducation.gov.in/form-for-state-competitive-scholarship-examination-for-class-iii-v-viii-2025-26/",
  sources: [
    "https://manipureducation.gov.in/wp-content/uploads/2025/12/Application-Form_Admit-Card_SCSE2024-25.pdf",
    "https://manipureducation.gov.in/",
  ],
  lastVerified: "2026-10-06",
  launchedYear: 2025,
  status: "active",
};

export default scheme;
