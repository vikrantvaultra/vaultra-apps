import { all, female, labelled, minAge, notGovtEmployee, residentOf, when } from "@/lib/engine/build";
import type { Scheme } from "@/lib/types";

const scheme: Scheme = {
  slug: "mukhyamantri-avivahita-pension-yojana",
  tier: "compact",
  name: { en: "Mukhyamantri Avivahita Pension Yojana", hi: "मुख्यमंत्री अविवाहिता पेंशन योजना" },
  aka: ["Avivahita Pension", "unmarried women pension MP"],
  shortDescription: {
    en: "Unmarried women aged 50 and above in Madhya Pradesh who don't pay income tax and have no government job get ₹600 a month.",
    hi: "मध्य प्रदेश की 50 साल या उससे ज़्यादा उम्र की अविवाहित महिलाओं को, जो आयकर नहीं देतीं और सरकारी नौकरी में नहीं हैं, हर महीने ₹600 मिलते हैं।",
  },
  level: "state",
  state: "madhya-pradesh",
  department: {
    en: "Social Justice and Empowerment of Persons with Disabilities Department, Government of Madhya Pradesh",
    hi: "सामाजिक न्याय एवं दिव्यांगजन कल्याण विभाग, मध्य प्रदेश सरकार",
  },
  categories: ["pension-insurance", "women-child", "social-welfare"],
  tags: ["unmarried women", "pension", "single women", "women", "madhya pradesh"],
  benefitType: "pension",
  isDBT: true,
  value: { amount: 600, period: "monthly", kind: "pension" },
  ageRange: { min: 50 },
  kundliHouse: "women-family",
  eligibility: all(
    residentOf("madhya-pradesh"),
    female(),
    minAge(50),
    labelled(when("marital", "eq", "never-married"), { en: "You have never married", hi: "आपकी शादी नहीं हुई है" }),
    labelled(notGovtEmployee(), { en: "You are not a government employee", hi: "आप सरकारी कर्मचारी नहीं हैं" }),
  ),

  details: {
    en: [
      "This state pension, started in 2018, supports single women who never married. Unmarried women aged 50 and above get ₹600 a month.",
      "It is run on the same Samagra pension portal as the other social security pensions, and applications must be decided within 15 working days.",
    ],
    hi: [
      "2018 में शुरू हुई यह राज्य पेंशन उन अकेली महिलाओं के लिए है जिनकी शादी नहीं हुई। 50 साल या उससे ज़्यादा उम्र की अविवाहित महिलाओं को हर महीने ₹600 मिलते हैं।",
      "यह दूसरी सामाजिक सुरक्षा पेंशनों की तरह समग्र पेंशन पोर्टल से चलती है, और आवेदन पर 15 कार्य दिवस में फ़ैसला होना चाहिए।",
    ],
  },
  benefits: {
    en: ["₹600 every month, paid into your bank account."],
    hi: ["हर महीने ₹600, आपके बैंक खाते में।"],
  },
  eligibilityText: {
    en: [
      "An unmarried woman, native of Madhya Pradesh, aged 50 or older.",
      "Does not pay income tax.",
      "Is not a government employee or officer, and not an honorarium worker in a government or private office.",
      "Does not get a family pension, and her name is on the Samagra portal.",
    ],
    hi: [
      "मध्य प्रदेश की मूल निवासी अविवाहित महिला, उम्र 50 साल या उससे ज़्यादा।",
      "आयकर न देती हो।",
      "सरकारी कर्मचारी या अधिकारी न हो, और किसी सरकारी या निजी दफ़्तर में मानदेय पर काम न करती हो।",
      "परिवार पेंशन न मिलती हो, और नाम समग्र पोर्टल पर दर्ज हो।",
    ],
  },
  applicationProcess: {
    online: {
      en: ["Apply on the Samagra pension portal (socialsecurity.mp.gov.in) with your 9-digit Samagra ID."],
      hi: ["अपनी 9 अंकों की समग्र ID से समग्र पेंशन पोर्टल (socialsecurity.mp.gov.in) पर आवेदन करें।"],
    },
    offline: {
      en: [
        "Fill in the form at your gram panchayat or janpad panchayat (villages) or municipal office (towns).",
        "Attach three photos, age proof and a copy of your bank passbook.",
      ],
      hi: [
        "गाँव में ग्राम पंचायत या जनपद पंचायत, और शहर में नगर निगम / नगर पालिका / नगर परिषद कार्यालय में फ़ॉर्म भरें।",
        "तीन फ़ोटो, उम्र का प्रमाण और बैंक पासबुक की कॉपी साथ लगाएँ।",
      ],
    },
  },

  officialUrl: "https://socialsecurity.mp.gov.in/Scheme/SSAPY.aspx",
  sources: ["https://socialsecurity.mp.gov.in/Scheme/SSAPY.aspx"],
  lastVerified: "2026-10-06",
  launchedYear: 2018,
  status: "active",
};

export default scheme;
