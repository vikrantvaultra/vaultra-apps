import { all, female, isTrue, residentOf } from "@/lib/engine/build";
import type { Scheme } from "@/lib/types";

const scheme: Scheme = {
  slug: "savitribai-phule-kishori-samridhi-yojana",
  overlapGroup: "daughter-savings",
  name: { en: "Savitribai Phule Kishori Samridhi Yojana", hi: "सावित्रीबाई फुले किशोरी समृद्धि योजना" },
  aka: ["SPKSY", "Kishori Samridhi Yojana", "Savitribai Phule Yojana Jharkhand"],
  shortDescription: {
    en: "Girls studying in Jharkhand government schools get up to ₹40,000 in stages from Class 8 to Class 12, with the last ₹20,000 at age 18.",
    hi: "झारखंड के सरकारी स्कूलों में पढ़ने वाली छात्राओं को कक्षा 8 से 12 तक किस्तों में और 18 साल की उम्र पर आख़िरी ₹20,000, कुल ₹40,000 तक मिलते हैं।",
  },
  level: "state",
  state: "jharkhand",
  department: {
    en: "Department of Women, Child Development and Social Security, Government of Jharkhand",
    hi: "महिला, बाल विकास एवं सामाजिक सुरक्षा विभाग, झारखंड सरकार",
  },
  categories: ["women-child", "education"],
  tags: ["girl child", "schoolgirl", "kishori", "savitribai phule", "dbt", "jharkhand"],
  benefitType: "cash",
  isDBT: true,
  value: { amount: 40000, period: "one-time", kind: "cash" },
  kundliHouse: "daughter",
  eligibility: all(residentOf("jharkhand"), female(), isTrue("student")),

  details: {
    en: [
      "Savitribai Phule Kishori Samridhi Yojana helps teenage girls stay in school. It was started by the Jharkhand government in 2022 and is run by the social welfare side of the Women, Child Development and Social Security Department.",
      "A girl studying in a government school gets money in her own bank account in five steps, from Class 8 to Class 12. When she turns 18 and has a voter ID card, she gets a final lump sum of ₹20,000 for further study or training.",
      "The money is on top of what the government already gives schools. Around 8 lakh girls were getting it in 2024, and the scheme is listed among the state's running schemes in the 2026-27 budget.",
    ],
    hi: [
      "सावित्रीबाई फुले किशोरी समृद्धि योजना किशोरियों को स्कूल में बनाए रखने के लिए है। इसे झारखंड सरकार ने 2022 में शुरू किया और इसे महिला, बाल विकास एवं सामाजिक सुरक्षा विभाग का समाज कल्याण भाग चलाता है।",
      "सरकारी स्कूल में पढ़ने वाली छात्रा को कक्षा 8 से 12 तक पाँच किस्तों में पैसा उसके अपने बैंक खाते में मिलता है। 18 साल की होने और वोटर ID बन जाने पर उसे आगे की पढ़ाई या प्रशिक्षण के लिए एकमुश्त ₹20,000 मिलते हैं।",
      "यह पैसा स्कूलों को मिलने वाली सरकारी मदद के अलावा है। 2024 में लगभग 8 लाख छात्राओं को इसका लाभ मिल रहा था, और 2026-27 के बजट में इसे राज्य की चालू योजनाओं में गिना गया है।",
    ],
  },
  benefits: {
    en: [
      "Class 8: ₹2,500.",
      "Class 9: ₹2,500.",
      "Class 10: ₹5,000.",
      "Class 11: ₹5,000.",
      "Class 12: ₹5,000.",
      "At age 18, with a voter ID card: ₹20,000 in one go. Total up to ₹40,000.",
    ],
    hi: [
      "कक्षा 8 में: ₹2,500।",
      "कक्षा 9 में: ₹2,500।",
      "कक्षा 10 में: ₹5,000।",
      "कक्षा 11 में: ₹5,000।",
      "कक्षा 12 में: ₹5,000।",
      "18 साल की उम्र पर, वोटर ID बनने के बाद: एकमुश्त ₹20,000। कुल ₹40,000 तक।",
    ],
  },
  eligibilityText: {
    en: [
      "A girl who is a resident of Jharkhand.",
      "Studying in a government school, in Class 8 to Class 12.",
      "Has a bank account in her own name.",
      "For the final ₹20,000: has turned 18 and has a voter ID card.",
      "Family conditions are set by the department's rules. Check them with your school or the district social welfare office.",
    ],
    hi: [
      "झारखंड की निवासी छात्रा।",
      "सरकारी स्कूल में कक्षा 8 से 12 तक पढ़ रही हो।",
      "उसके अपने नाम पर बैंक खाता हो।",
      "आख़िरी ₹20,000 के लिए: उम्र 18 साल हो चुकी हो और वोटर ID कार्ड बना हो।",
      "परिवार से जुड़ी शर्तें विभाग के नियमों में तय हैं। इन्हें अपने स्कूल या ज़िला समाज कल्याण कार्यालय से पता करें।",
    ],
  },
  exclusions: {
    en: ["Girls studying in private schools are not covered.", "A girl who leaves school does not get the instalments for the classes she does not attend."],
    hi: ["निजी स्कूलों में पढ़ने वाली छात्राएँ इसमें शामिल नहीं हैं।", "स्कूल छोड़ देने वाली छात्रा को उन कक्षाओं की किस्त नहीं मिलती जिनमें वह नहीं पढ़ती।"],
  },
  applicationProcess: {
    offline: {
      en: [
        "Ask your school headmaster or the District Social Welfare Officer about the form and the current application window.",
        "Fill in the form with your school, Aadhaar and bank details, and submit it with the documents.",
        "For the ₹20,000 instalment, apply again after you turn 18 and get your voter ID.",
      ],
      hi: [
        "फ़ॉर्म और आवेदन की तारीख़ों के बारे में अपने स्कूल के प्रधानाध्यापक या ज़िला समाज कल्याण पदाधिकारी से पूछें।",
        "फ़ॉर्म में स्कूल, आधार और बैंक की जानकारी भरें और दस्तावेज़ों के साथ जमा करें।",
        "₹20,000 की किस्त के लिए 18 साल की होने और वोटर ID बनने के बाद फिर से आवेदन करें।",
      ],
    },
  },
  documents: {
    en: ["Aadhaar card of the girl", "Bank passbook of an account in the girl's name", "Proof of studying in a government school (Class 8 to 12)", "Voter ID card (for the final ₹20,000)"],
    hi: ["छात्रा का आधार कार्ड", "छात्रा के नाम के बैंक खाते की पासबुक", "सरकारी स्कूल में कक्षा 8 से 12 में पढ़ने का सबूत", "वोटर ID कार्ड (आख़िरी ₹20,000 के लिए)"],
  },
  faqs: [
    {
      q: { en: "Can the money go into my parent's account?", hi: "क्या पैसा माता-पिता के खाते में आ सकता है?" },
      a: {
        en: "No. The money is paid into the girl's own bank account, so open one in her name before applying.",
        hi: "नहीं। पैसा छात्रा के अपने बैंक खाते में ही आता है, इसलिए आवेदन से पहले उसके नाम से खाता खुलवा लें।",
      },
    },
    {
      q: { en: "What can the ₹20,000 be used for?", hi: "₹20,000 का इस्तेमाल किसलिए कर सकते हैं?" },
      a: {
        en: "It is meant for further study or for training that helps the girl stand on her own feet.",
        hi: "यह आगे की पढ़ाई या ऐसे प्रशिक्षण के लिए है जिससे छात्रा अपने पैरों पर खड़ी हो सके।",
      },
    },
  ],

  officialUrl: "https://cm.jharkhand.gov.in/node/11420",
  sources: [
    "https://cm.jharkhand.gov.in/node/11420",
    "https://finance.jharkhand.gov.in/pdf/Budget_2026_27/Budget_Speech.pdf",
  ],
  lastVerified: "2026-10-06",
  launchedYear: 2022,
  status: "active",
};

export default scheme;
