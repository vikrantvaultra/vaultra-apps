import { all, ageBetween, residentOf, when } from "@/lib/engine/build";
import type { Scheme } from "@/lib/types";
import { UNORGANISED_OCCUPATIONS } from "@/data/taxonomy";

const scheme: Scheme = {
  slug: "bina-mulya-samajik-suraksha-yojana",
  tier: "compact",
  name: { en: "Bina Mulya Samajik Suraksha Yojana", hi: "बिना मूल्य सामाजिक सुरक्षा योजना" },
  aka: ["BMSSY", "BM-SSY"],
  shortDescription: {
    en: "Free social security for unorganised workers in West Bengal aged 18 to 60: provident fund paid fully by the state, plus help of up to ₹2 lakh on death or disability.",
    hi: "पश्चिम बंगाल के 18 से 60 साल के असंगठित मज़दूरों के लिए मुफ़्त सामाजिक सुरक्षा: पूरा भविष्य निधि अंशदान राज्य देता है, और मृत्यु या दिव्यांगता पर ₹2 लाख तक की मदद।",
  },
  level: "state",
  state: "west-bengal",
  department: { en: "Labour Department, Government of West Bengal", hi: "श्रम विभाग, पश्चिम बंगाल सरकार" },
  categories: ["pension-insurance", "social-welfare"],
  tags: ["unorganised worker", "labour", "provident fund", "accident", "insurance", "bmssy"],
  benefitType: "composite",
  isDBT: false,
  ageRange: { min: 18, max: 60 },
  kundliHouse: "insurance",
  eligibility: all(residentOf("west-bengal"), ...ageBetween(18, 60), when("occupation", "in", UNORGANISED_OCCUPATIONS)),

  details: {
    en: [
      "Bina Mulya Samajik Suraksha Yojana (BMSSY) is West Bengal's free social security scheme for workers in the unorganised sector, including the self-employed. The state pays the whole cost; workers pay nothing.",
      "Registered workers get a provident fund built entirely from government contributions, and their families get financial help if the worker dies or becomes disabled. Construction and transport workers are also registered through the same BMSSY portal.",
    ],
    hi: [
      "बिना मूल्य सामाजिक सुरक्षा योजना (BMSSY) पश्चिम बंगाल में असंगठित क्षेत्र के मज़दूरों, जिनमें स्वरोज़गार करने वाले भी शामिल हैं, के लिए मुफ़्त सामाजिक सुरक्षा योजना है। पूरा ख़र्च राज्य उठाता है; मज़दूर को कुछ नहीं देना होता।",
      "पंजीकृत मज़दूरों को पूरी तरह सरकारी अंशदान से भविष्य निधि मिलती है, और मज़दूर की मृत्यु या दिव्यांगता पर परिवार को आर्थिक मदद मिलती है। निर्माण और परिवहन मज़दूरों का पंजीकरण भी इसी BMSSY पोर्टल से होता है।",
    ],
  },
  benefits: {
    en: [
      "Provident fund with the full contribution paid by the government.",
      "₹50,000 to the family on natural death, and up to ₹2 lakh on accidental death.",
      "₹50,000 to ₹2 lakh for disability.",
      "No premium or fee for the worker.",
    ],
    hi: [
      "भविष्य निधि, जिसका पूरा अंशदान सरकार देती है।",
      "सामान्य मृत्यु पर परिवार को ₹50,000, और दुर्घटना में मृत्यु पर ₹2 लाख तक।",
      "दिव्यांगता पर ₹50,000 से ₹2 लाख तक।",
      "मज़दूर को कोई प्रीमियम या फ़ीस नहीं देनी।",
    ],
  },
  eligibilityText: {
    en: [
      "Resident of West Bengal aged 18 to 60.",
      "Works in the unorganised sector (including self-employed) in an occupation on the scheme's list.",
      "Family income up to ₹6,500 a month (this limit does not apply to construction and transport workers).",
    ],
    hi: [
      "पश्चिम बंगाल का निवासी, उम्र 18 से 60 साल।",
      "असंगठित क्षेत्र में (स्वरोज़गार सहित) योजना की सूची वाले किसी काम में लगा हो।",
      "परिवार की आय ₹6,500 महीने तक हो (निर्माण और परिवहन मज़दूरों पर यह सीमा लागू नहीं)।",
    ],
  },
  applicationProcess: {
    online: {
      en: [
        "Go to bmssy.wblabour.gov.in and choose 'New Registration by Beneficiary'.",
        "Fill in your personal, work and nominee details, upload documents and submit.",
        "After verification you get a registration card and SSIN number to claim benefits.",
      ],
      hi: [
        "bmssy.wblabour.gov.in पर जाएँ और 'New Registration by Beneficiary' चुनें।",
        "अपनी निजी जानकारी, काम और नॉमिनी का ब्योरा भरें, दस्तावेज़ अपलोड करें और जमा करें।",
        "जाँच के बाद आपको पंजीकरण कार्ड और SSIN नंबर मिलता है, जिससे लाभ ले सकते हैं।",
      ],
    },
    offline: {
      en: [
        "Visit the Regional Labour Office or the Labour Welfare Facilitation Centre at your block or municipality.",
        "Fill in the form with your work and nominee details and submit it with your documents.",
      ],
      hi: [
        "अपने क्षेत्रीय श्रम कार्यालय या ब्लॉक/नगरपालिका के श्रम कल्याण सुविधा केंद्र पर जाएँ।",
        "काम और नॉमिनी के ब्योरे के साथ फ़ॉर्म भरें और दस्तावेज़ों के साथ जमा करें।",
      ],
    },
  },

  officialUrl: "https://bmssy.wblabour.gov.in/",
  sources: [
    "https://wb.gov.in/government-schemes-details-bina-mulya-samajik-suraksha-yojana.aspx",
    "https://bmssy.wblabour.gov.in/",
  ],
  lastVerified: "2026-10-06",
  launchedYear: 2017,
  status: "active",
};

export default scheme;
