import { all, incomeUpTo, labelled, notGovtEmployee, residentOf } from "@/lib/engine/build";
import type { Scheme } from "@/lib/types";

const scheme: Scheme = {
  slug: "mukhya-mantri-sukh-ashray-yojana",
  tier: "compact",
  name: { en: "Mukhya Mantri Sukh Ashray Yojana", hi: "मुख्यमंत्री सुख आश्रय योजना" },
  aka: ["Sukh Ashray Yojana", "Children of the State Himachal", "Sukh Aashray"],
  shortDescription: {
    en: "Himachal Pradesh takes responsibility for orphaned, abandoned and surrendered children and single women: help with education, higher studies, health, housing, pocket money and marriage.",
    hi: "हिमाचल प्रदेश सरकार अनाथ, परित्यक्त और सरेंडर किए गए बच्चों और एकल नारियों की ज़िम्मेदारी लेती है: पढ़ाई, उच्च शिक्षा, इलाज, घर, जेब ख़र्च और शादी में मदद।",
  },
  level: "state",
  state: "himachal-pradesh",
  department: {
    en: "Directorate of Women and Child Development, Government of Himachal Pradesh",
    hi: "महिला एवं बाल विकास निदेशालय, हिमाचल प्रदेश सरकार",
  },
  categories: ["women-child", "social-welfare", "education"],
  tags: ["orphan", "children of the state", "sukh ashray", "abandoned children", "single women", "himachal"],
  benefitType: "composite",
  isDBT: true,
  kundliHouse: "education",
  eligibility: all(
    residentOf("himachal-pradesh"),
    labelled(incomeUpTo(500_000), { en: "Family income up to ₹5 lakh a year from all sources", hi: "सभी स्रोतों से परिवार की सालाना आय ₹5 लाख तक हो" }),
    labelled(notGovtEmployee(), { en: "You are not in a government job", hi: "आप सरकारी नौकरी में न हों" }),
  ),

  details: {
    en: [
      "Under Mukhya Mantri Sukh Ashray Yojana, the Himachal Pradesh government treats orphaned and abandoned children as its own responsibility and looks after their education, health care, shelter and other basic needs.",
      "Support includes grants to build a house, accommodation, pocket money and financial help for higher education. The Women and Child Development Directorate runs the scheme with funds from the Mukhya Mantri Sukh Ashray Kosh. Applications are made online, checked by the district office and approved at the state level.",
    ],
    hi: [
      "मुख्यमंत्री सुख आश्रय योजना में हिमाचल प्रदेश सरकार अनाथ और परित्यक्त बच्चों को अपनी ज़िम्मेदारी मानती है और उनकी पढ़ाई, इलाज, रहने और बाकी बुनियादी ज़रूरतों का ध्यान रखती है।",
      "मदद में घर बनाने के लिए अनुदान, रहने की जगह, जेब ख़र्च और उच्च शिक्षा के लिए आर्थिक सहायता शामिल है। महिला एवं बाल विकास निदेशालय यह योजना मुख्यमंत्री सुख आश्रय कोष के पैसे से चलाता है। आवेदन ऑनलाइन होता है, ज़िला कार्यालय जाँच करता है और राज्य स्तर पर मंज़ूरी मिलती है।",
    ],
  },
  benefits: {
    en: [
      "Financial help for higher education and professional courses, including coaching.",
      "Grant to build a house on your own land.",
      "Monthly pocket money or social security support.",
      "Marriage grant and help to start self-employment.",
    ],
    hi: [
      "उच्च शिक्षा और व्यावसायिक कोर्स, कोचिंग समेत, के लिए आर्थिक मदद।",
      "अपनी ज़मीन पर घर बनाने के लिए अनुदान।",
      "हर महीने जेब ख़र्च या सामाजिक सुरक्षा सहायता।",
      "शादी के लिए अनुदान और स्वरोजगार शुरू करने में मदद।",
    ],
  },
  eligibilityText: {
    en: [
      "Orphaned, abandoned or surrendered children, and single women (ekal nari), from Himachal Pradesh.",
      "Family income up to ₹5 lakh a year from all sources.",
      "Not in a government job.",
      "Children living in child care institutions are covered.",
    ],
    hi: [
      "हिमाचल प्रदेश के अनाथ, परित्यक्त या सरेंडर किए गए बच्चे, और एकल नारी।",
      "सभी स्रोतों से परिवार की सालाना आय ₹5 लाख तक।",
      "सरकारी नौकरी में न हों।",
      "बाल देखभाल संस्थानों में रहने वाले बच्चे भी शामिल हैं।",
    ],
  },
  applicationProcess: {
    online: {
      en: [
        "Open the scheme on wcd.hp.gov.in and choose 'Proceed to Application'.",
        "Log in with Him Access / Him Parivar, complete Aadhaar e-KYC and fill in the form for the benefit you need.",
        "The district office verifies it and the state authority approves the benefit.",
      ],
      hi: [
        "wcd.hp.gov.in पर योजना खोलें और 'Proceed to Application' चुनें।",
        "हिम एक्सेस / हिम परिवार से लॉग इन करें, आधार e-KYC करें और जिस लाभ की ज़रूरत है उसका फ़ॉर्म भरें।",
        "ज़िला कार्यालय सत्यापन करता है और राज्य प्राधिकरण लाभ मंज़ूर करता है।",
      ],
    },
  },

  officialUrl: "https://wcd.hp.gov.in/schemes/view?schemeId=18",
  sources: ["https://wcd.hp.gov.in/schemes/view?schemeId=18", "https://wcd.hp.gov.in/"],
  lastVerified: "2026-10-06",
  launchedYear: 2023,
  status: "check-status",
};

export default scheme;
