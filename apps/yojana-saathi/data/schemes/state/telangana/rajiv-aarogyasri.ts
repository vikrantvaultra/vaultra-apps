import { all, isTrue, labelled, residentOf } from "@/lib/engine/build";
import type { Scheme } from "@/lib/types";

const scheme: Scheme = {
  slug: "rajiv-aarogyasri",
  overlapGroup: "health-cover",
  name: { en: "Rajiv Aarogyasri (Telangana)", hi: "राजीव आरोग्यश्री (तेलंगाना)" },
  aka: ["Aarogyasri", "Arogyasri", "Rajiv Arogyasri", "Ayushman Bharat PMJAY Rajiv Aarogyasri"],
  shortDescription: {
    en: "Poor families in Telangana get free hospital treatment up to ₹10 lakh a year in government and empanelled private hospitals under Rajiv Aarogyasri.",
    hi: "राजीव आरोग्यश्री में तेलंगाना के ग़रीब परिवारों को सरकारी और सूचीबद्ध निजी अस्पतालों में हर साल ₹10 लाख तक का मुफ़्त इलाज मिलता है।",
  },
  level: "state",
  state: "telangana",
  department: {
    en: "Health, Medical and Family Welfare Department (Rajiv Aarogyasri Health Care Trust), Government of Telangana",
    hi: "स्वास्थ्य, चिकित्सा एवं परिवार कल्याण विभाग (राजीव आरोग्यश्री हेल्थ केयर ट्रस्ट), तेलंगाना सरकार",
  },
  categories: ["health"],
  tags: ["health insurance", "free treatment", "hospital", "aarogyasri", "10 lakh", "surgery", "telangana"],
  benefitType: "insurance",
  isDBT: false,
  value: { amount: 1000000, period: "yearly", kind: "cover" },
  kundliHouse: "health",
  eligibility: all(
    residentOf("telangana"),
    labelled(isTrue("bpl"), { en: "Family is poor (white ration card / BPL)", hi: "परिवार ग़रीब हो (सफ़ेद राशन कार्ड / BPL)" }),
  ),

  details: {
    en: [
      "Rajiv Aarogyasri is Telangana's state health cover for poor families. It began in 2007 and has been merged with the central Ayushman Bharat PM-JAY since 2021, so it now runs as 'Ayushman Bharat PMJAY Rajiv Aarogyasri'.",
      "From December 2023 the cover was raised from ₹5 lakh to ₹10 lakh per family per year. It covers more than 1,600 treatment packages across many specialities, and the government added 163 new procedures in 2024.",
      "Treatment is cashless in government hospitals and empanelled private hospitals. The scheme is run by the Rajiv Aarogyasri Health Care Trust.",
    ],
    hi: [
      "राजीव आरोग्यश्री तेलंगाना की ग़रीब परिवारों के लिए राज्य स्वास्थ्य बीमा योजना है। यह 2007 में शुरू हुई और 2021 से केंद्र की आयुष्मान भारत PM-JAY के साथ जुड़ी है, इसलिए अब इसे 'आयुष्मान भारत PMJAY राजीव आरोग्यश्री' कहा जाता है।",
      "दिसंबर 2023 से बीमा राशि ₹5 लाख से बढ़ाकर ₹10 लाख प्रति परिवार प्रति साल कर दी गई। इसमें कई विशेषज्ञताओं के 1,600 से ज़्यादा इलाज पैकेज हैं, और 2024 में सरकार ने 163 नई प्रक्रियाएँ जोड़ीं।",
      "सरकारी अस्पतालों और सूचीबद्ध निजी अस्पतालों में इलाज कैशलेस होता है। योजना राजीव आरोग्यश्री हेल्थ केयर ट्रस्ट चलाता है।",
    ],
  },
  benefits: {
    en: [
      "Free (cashless) treatment up to ₹10 lakh per family per year.",
      "Covers surgeries and therapies in over 1,600 packages, including dialysis.",
      "Available in government and empanelled private hospitals across Telangana.",
    ],
    hi: [
      "हर परिवार को हर साल ₹10 लाख तक मुफ़्त (कैशलेस) इलाज।",
      "1,600 से ज़्यादा पैकेजों में ऑपरेशन और इलाज, डायलिसिस समेत।",
      "पूरे तेलंगाना के सरकारी और सूचीबद्ध निजी अस्पतालों में मिलता है।",
    ],
  },
  eligibilityText: {
    en: [
      "Your family lives in Telangana and is poor, usually holding a white ration card (Food Security Card).",
      "Families covered under Ayushman Bharat PM-JAY in Telangana are covered too.",
      "Treatment must be for a procedure included in the scheme's package list.",
    ],
    hi: [
      "आपका परिवार तेलंगाना में रहता है और ग़रीब है, आमतौर पर उसके पास सफ़ेद राशन कार्ड (फ़ूड सिक्योरिटी कार्ड) है।",
      "तेलंगाना में आयुष्मान भारत PM-JAY वाले परिवार भी इसमें आते हैं।",
      "इलाज योजना की पैकेज सूची में शामिल प्रक्रिया के लिए होना चाहिए।",
    ],
  },
  exclusions: {
    en: ["Families not in the poor (white ration card) category.", "Treatments outside the approved package list.", "Hospitals that are not empanelled."],
    hi: ["जो परिवार ग़रीब (सफ़ेद राशन कार्ड) श्रेणी में नहीं हैं।", "मंज़ूर पैकेज सूची के बाहर के इलाज।", "जो अस्पताल सूची में शामिल नहीं हैं।"],
  },
  applicationProcess: {
    offline: {
      en: [
        "Go to a government hospital or an Aarogyasri-empanelled private hospital with your ration card and Aadhaar.",
        "Meet the Aarogyamithra at the hospital help desk; they register you and get pre-approval for treatment.",
        "Get treated without paying. For help, call 104.",
      ],
      hi: [
        "राशन कार्ड और आधार लेकर किसी सरकारी अस्पताल या आरोग्यश्री से जुड़े निजी अस्पताल में जाएँ।",
        "अस्पताल के हेल्प डेस्क पर आरोग्यमित्र से मिलें; वे आपका रजिस्ट्रेशन करके इलाज की पहले से मंज़ूरी लेते हैं।",
        "बिना पैसे दिए इलाज कराएँ। मदद के लिए 104 पर फ़ोन करें।",
      ],
    },
    online: {
      en: ["Find empanelled hospitals by district or speciality on rajivaarogyasri.telangana.gov.in."],
      hi: ["rajivaarogyasri.telangana.gov.in पर ज़िले या विशेषज्ञता के हिसाब से सूचीबद्ध अस्पताल खोजें।"],
    },
  },
  documents: {
    en: ["White ration card (Food Security Card) or Aarogyasri health card", "Aadhaar card", "Doctor's referral and medical reports, if any"],
    hi: ["सफ़ेद राशन कार्ड (फ़ूड सिक्योरिटी कार्ड) या आरोग्यश्री हेल्थ कार्ड", "आधार कार्ड", "डॉक्टर की रेफ़रल पर्ची और मेडिकल रिपोर्ट, अगर हों"],
  },
  faqs: [
    {
      q: { en: "Is this separate from Ayushman Bharat?", hi: "क्या यह आयुष्मान भारत से अलग है?" },
      a: {
        en: "In Telangana they work together as 'Ayushman Bharat PMJAY Rajiv Aarogyasri'. Eligible families use one system and get up to ₹10 lakh a year.",
        hi: "तेलंगाना में दोनों मिलकर 'आयुष्मान भारत PMJAY राजीव आरोग्यश्री' के रूप में चलती हैं। पात्र परिवार एक ही व्यवस्था से हर साल ₹10 लाख तक इलाज पाते हैं।",
      },
    },
    {
      q: { en: "Who helps me inside the hospital?", hi: "अस्पताल में मेरी मदद कौन करेगा?" },
      a: {
        en: "Each network hospital has an Aarogyamithra at a help desk who handles registration and approvals. You can also call 104.",
        hi: "हर नेटवर्क अस्पताल में हेल्प डेस्क पर आरोग्यमित्र होते हैं, जो रजिस्ट्रेशन और मंज़ूरी का काम करते हैं। आप 104 पर भी फ़ोन कर सकते हैं।",
      },
    },
  ],

  officialUrl: "https://rajivaarogyasri.telangana.gov.in/ASRI2.0/",
  sources: [
    "https://rajivaarogyasri.telangana.gov.in/ASRI2.0/",
    "https://www.telangana.gov.in/government-initiatives/",
    "https://www.telangana.gov.in/wp-content/uploads/2024/07/Telangana-Socio-Economic-Outlook-2024.pdf",
    "https://www.telangana.gov.in/news/press-releases/2024/07/deputy-cm-presents-budget-for-the-year-2024-25/",
  ],
  lastVerified: "2026-10-06",
  launchedYear: 2007,
  status: "active",
};

export default scheme;
