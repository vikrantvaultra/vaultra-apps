import { all, isTrue, residentOf } from "@/lib/engine/build";
import type { Scheme } from "@/lib/types";

const scheme: Scheme = {
  slug: "manipur-cm-shotharabasingi-tengbang",
  tier: "compact",
  name: { en: "Chief Ministergi Shotharabasingi Tengbang (CMST)", hi: "चीफ़ मिनिस्टरगी शोथाराबासिंगी तेंगबांग (CMST)" },
  aka: ["CMST", "Shotharabasingi Tengbang", "Manipur disability scheme", "caregiver allowance Manipur"],
  shortDescription: {
    en: "Manipur's state scheme for persons with disabilities: a caregiver allowance for those with high support needs, scholarships for disabled students and free skill training.",
    hi: "दिव्यांगजनों के लिए मणिपुर की राज्य योजना: ज़्यादा सहारे की ज़रूरत वालों के लिए देखभालकर्ता भत्ता, दिव्यांग विद्यार्थियों के लिए छात्रवृत्ति और मुफ़्त कौशल प्रशिक्षण।",
  },
  level: "state",
  state: "manipur",
  department: {
    en: "Social Welfare Department, Government of Manipur",
    hi: "समाज कल्याण विभाग, मणिपुर सरकार",
  },
  categories: ["disability", "social-welfare"],
  tags: ["disability", "divyang", "caregiver allowance", "scholarship", "skill training", "manipur"],
  benefitType: "composite",
  isDBT: false,
  kundliHouse: "health",
  eligibility: all(residentOf("manipur"), isTrue("disabled")),

  details: {
    en: [
      "Chief Ministergi Shotharabasingi Tengbang (CMST) is a Government of Manipur scheme for persons with disabilities, run by the Social Welfare Department since 2017-18.",
      "Under CMST the department pays a caregiver allowance to persons with disabilities who need high support, gives scholarships to students with disabilities, and arranges skill training with partner training providers. The department reported more than 7,573 people getting the caregiver allowance. Current amounts and how to apply were not found on an official page.",
    ],
    hi: [
      "चीफ़ मिनिस्टरगी शोथाराबासिंगी तेंगबांग (CMST) दिव्यांगजनों के लिए मणिपुर सरकार की योजना है, जिसे समाज कल्याण विभाग 2017-18 से चला रहा है।",
      "CMST में विभाग ज़्यादा सहारे की ज़रूरत वाले दिव्यांगजनों को देखभालकर्ता भत्ता देता है, दिव्यांग विद्यार्थियों को छात्रवृत्ति देता है, और साझेदार संस्थाओं के साथ कौशल प्रशिक्षण करवाता है। विभाग के अनुसार 7,573 से ज़्यादा लोगों को देखभालकर्ता भत्ता मिल रहा है। अभी की राशि और आवेदन का तरीका किसी आधिकारिक पेज पर नहीं मिला।",
    ],
  },
  benefits: {
    en: [
      "Caregiver allowance for persons with disabilities who have high support needs.",
      "Scholarships for students with disabilities.",
      "Free skill training for persons with disabilities.",
    ],
    hi: [
      "ज़्यादा सहारे की ज़रूरत वाले दिव्यांगजनों के लिए देखभालकर्ता भत्ता।",
      "दिव्यांग विद्यार्थियों के लिए छात्रवृत्ति।",
      "दिव्यांगजनों के लिए मुफ़्त कौशल प्रशिक्षण।",
    ],
  },
  eligibilityText: {
    en: [
      "You are a resident of Manipur.",
      "You have a disability, with a disability certificate or UDID card.",
      "For the caregiver allowance: your disability needs high support from another person.",
      "For the scholarship: you are a student with a disability in a recognised school or college.",
    ],
    hi: [
      "आप मणिपुर के निवासी हैं।",
      "आप दिव्यांग हैं और आपके पास दिव्यांगता प्रमाण पत्र या UDID कार्ड है।",
      "देखभालकर्ता भत्ते के लिए: आपकी दिव्यांगता में किसी दूसरे व्यक्ति के ज़्यादा सहारे की ज़रूरत पड़ती है।",
      "छात्रवृत्ति के लिए: आप किसी मान्यता प्राप्त स्कूल या कॉलेज के दिव्यांग विद्यार्थी हैं।",
    ],
  },
  applicationProcess: {
    offline: {
      en: [
        "Visit the Directorate of Social Welfare in Imphal or your District Social Welfare Officer.",
        "Ask which CMST component is open and collect the form.",
        "Submit it with your disability certificate or UDID card, Aadhaar and bank details.",
      ],
      hi: [
        "इंफाल में समाज कल्याण निदेशालय या अपने ज़िला समाज कल्याण अधिकारी के पास जाएँ।",
        "पूछें कि CMST का कौन-सा हिस्सा खुला है और फ़ॉर्म लें।",
        "उसे दिव्यांगता प्रमाण पत्र या UDID कार्ड, आधार और बैंक विवरण के साथ जमा करें।",
      ],
    },
  },

  officialUrl: "https://socialwelfare.mn.gov.in/en/",
  sources: [
    "https://socialwelfare.mn.gov.in/en/sctet-sckim/disabled/",
    "https://manipur.gov.in/?p=13518",
  ],
  lastVerified: "2026-10-06",
  launchedYear: 2017,
  status: "check-status",
};

export default scheme;
