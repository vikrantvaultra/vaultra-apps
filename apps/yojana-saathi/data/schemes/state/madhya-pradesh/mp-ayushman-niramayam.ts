import { all, residentOf } from "@/lib/engine/build";
import type { Scheme } from "@/lib/types";

const scheme: Scheme = {
  slug: "mp-ayushman-niramayam",
  overlapGroup: "health-cover",
  name: { en: "Ayushman Bharat Niramayam (Madhya Pradesh)", hi: "आयुष्मान भारत निरामयम् (मध्य प्रदेश)" },
  aka: ["Niramayam", "Ayushman Card MP", "Ayushman Bharat Niramayam"],
  shortDescription: {
    en: "Free hospital treatment up to ₹5 lakh a year per family in Madhya Pradesh, for families with a food-ration slip, Sambal card or construction-worker card as well as the central Ayushman list.",
    hi: "मध्य प्रदेश में हर परिवार को साल में ₹5 लाख तक का मुफ़्त अस्पताल इलाज, केंद्र की आयुष्मान सूची के साथ-साथ खाद्यान्न पर्ची, संबल कार्ड या निर्माण श्रमिक कार्ड वाले परिवारों के लिए भी।",
  },
  level: "state",
  state: "madhya-pradesh",
  department: {
    en: "Public Health and Family Welfare Department (State Health Agency – Deendayal Swasthya Suraksha Parishad), Government of Madhya Pradesh",
    hi: "लोक स्वास्थ्य एवं परिवार कल्याण विभाग (राज्य स्वास्थ्य एजेंसी – दीनदयाल स्वास्थ्य सुरक्षा परिषद), मध्य प्रदेश सरकार",
  },
  categories: ["health"],
  tags: ["ayushman card", "health insurance", "free treatment", "hospital", "5 lakh", "madhya pradesh"],
  benefitType: "insurance",
  isDBT: false,
  value: { amount: 500000, period: "yearly", kind: "cover" },
  kundliHouse: "health",
  eligibility: all(residentOf("madhya-pradesh")),

  details: {
    en: [
      "In Madhya Pradesh, the Ayushman Bharat health scheme (PM-JAY) runs under the name 'Niramayam'. It gives eligible families free treatment up to ₹5 lakh a year in empanelled government and private hospitals.",
      "Madhya Pradesh has added many more families than the central list. Families with a food-grain eligibility slip (NFSA), Sambal card holders, registered construction workers and several other groups are covered, and the state pays the full cost for these extra families.",
      "You need an Ayushman card to use it. Cards are made free of cost, and treatment is cashless: the hospital is paid directly by the scheme.",
    ],
    hi: [
      "मध्य प्रदेश में आयुष्मान भारत स्वास्थ्य योजना (PM-JAY) 'निरामयम्' नाम से चलती है। इसमें पात्र परिवारों को चुने हुए सरकारी और निजी अस्पतालों में साल में ₹5 लाख तक मुफ़्त इलाज मिलता है।",
      "मध्य प्रदेश सरकार ने केंद्र की सूची से कहीं ज़्यादा परिवारों को जोड़ा है। खाद्यान्न पात्रता पर्ची (NFSA) वाले परिवार, संबल कार्ड धारक, पंजीकृत निर्माण श्रमिक और कई दूसरे वर्ग इसमें शामिल हैं, और इन अतिरिक्त परिवारों का पूरा खर्च राज्य सरकार उठाती है।",
      "इसका लाभ लेने के लिए आयुष्मान कार्ड चाहिए। कार्ड मुफ़्त बनता है और इलाज कैशलेस होता है: अस्पताल को पैसा सीधे योजना से मिलता है।",
    ],
  },
  benefits: {
    en: [
      "Free treatment up to ₹5 lakh per family per year.",
      "Cashless care in empanelled government and private hospitals.",
      "Covers hospital stay, surgery, medicines and tests linked to the treatment.",
      "Senior citizens aged 70+ can get an extra ₹5 lakh of cover under Ayushman Vay Vandana.",
    ],
    hi: [
      "हर परिवार को साल में ₹5 लाख तक मुफ़्त इलाज।",
      "चुने हुए सरकारी और निजी अस्पतालों में कैशलेस इलाज।",
      "अस्पताल में भर्ती, ऑपरेशन, और इलाज से जुड़ी दवाइयाँ व जाँचें शामिल।",
      "70 साल से ज़्यादा उम्र के बुज़ुर्गों को आयुष्मान वय वंदना में ₹5 लाख का अतिरिक्त कवर मिल सकता है।",
    ],
  },
  eligibilityText: {
    en: [
      "Families with an NFSA food-grain eligibility slip (khadyann parchi).",
      "Families in the central SECC Ayushman list.",
      "Sambal card holders and workers registered with the Building and Other Construction Workers Welfare Board.",
      "Other notified groups, such as PVTG tribal families, Bhopal gas tragedy victims, ASHA and Anganwadi workers and helpers.",
      "All residents aged 70 and above (Ayushman Vay Vandana).",
    ],
    hi: [
      "NFSA खाद्यान्न पात्रता पर्ची वाले परिवार।",
      "केंद्र की SECC आयुष्मान सूची में शामिल परिवार।",
      "संबल कार्ड धारक और भवन एवं अन्य संनिर्माण कर्मकार कल्याण मंडल में पंजीकृत श्रमिक।",
      "दूसरे अधिसूचित वर्ग, जैसे विशेष पिछड़ी जनजाति (PVTG) परिवार, भोपाल गैस त्रासदी पीड़ित, आशा और आंगनवाड़ी कार्यकर्ता व सहायिका।",
      "70 साल और उससे ज़्यादा उम्र के सभी निवासी (आयुष्मान वय वंदना)।",
    ],
  },
  exclusions: {
    en: [
      "Families that are in none of the listed groups.",
      "Treatment in hospitals that are not empanelled under the scheme.",
      "Outpatient (OPD) visits that don't lead to a covered treatment.",
    ],
    hi: [
      "जो परिवार किसी भी सूचीबद्ध वर्ग में नहीं आते।",
      "योजना से न जुड़े अस्पतालों में इलाज।",
      "OPD में दिखाना, जिससे कोई शामिल इलाज न जुड़ा हो।",
    ],
  },
  applicationProcess: {
    online: {
      en: [
        "Check if you are eligible on beneficiary.nha.gov.in or the Ayushman app using your Aadhaar or ration details.",
        "If eligible, complete Aadhaar e-KYC in the app to make your Ayushman card yourself.",
        "Download the card, and show it with your Aadhaar at any empanelled hospital.",
      ],
      hi: [
        "beneficiary.nha.gov.in या आयुष्मान ऐप पर आधार या राशन की जानकारी से अपनी पात्रता देखें।",
        "पात्र हों तो ऐप में आधार e-KYC करके खुद अपना आयुष्मान कार्ड बनाएँ।",
        "कार्ड डाउनलोड करें और किसी भी जुड़े अस्पताल में आधार के साथ दिखाएँ।",
      ],
    },
    offline: {
      en: [
        "Visit a government hospital, a CSC centre, your gram panchayat or the Ayushman Mitra at an empanelled hospital.",
        "They will check your name and make your card for free after Aadhaar e-KYC.",
        "For help, call the state helpline 14555.",
      ],
      hi: [
        "किसी सरकारी अस्पताल, CSC केंद्र, ग्राम पंचायत या जुड़े अस्पताल के आयुष्मान मित्र के पास जाएँ।",
        "वे आपका नाम जाँचकर आधार e-KYC के बाद मुफ़्त में कार्ड बना देंगे।",
        "मदद के लिए राज्य हेल्पलाइन 14555 पर फ़ोन करें।",
      ],
    },
  },
  documents: {
    en: ["Aadhaar card", "Samagra ID or ration (food-grain eligibility) slip", "Sambal or construction-worker card, if that is how you qualify", "Mobile number"],
    hi: ["आधार कार्ड", "समग्र ID या खाद्यान्न पात्रता पर्ची", "संबल या निर्माण श्रमिक कार्ड, अगर उसी से पात्र हैं", "मोबाइल नंबर"],
  },
  faqs: [
    {
      q: { en: "Do I have to pay anything at the hospital?", hi: "क्या अस्पताल में कुछ पैसा देना होगा?" },
      a: {
        en: "No, treatment covered by the scheme is cashless at empanelled hospitals. If a hospital asks for money for a covered treatment, call 14555.",
        hi: "नहीं, जुड़े अस्पतालों में योजना में शामिल इलाज कैशलेस है। अगर अस्पताल शामिल इलाज के लिए पैसा माँगे, तो 14555 पर फ़ोन करें।",
      },
    },
    {
      q: { en: "Is the ₹5 lakh for each person?", hi: "क्या ₹5 लाख हर व्यक्ति के लिए है?" },
      a: {
        en: "No, ₹5 lakh is for the whole family together each year. Members aged 70 and above get their own extra ₹5 lakh.",
        hi: "नहीं, ₹5 लाख पूरे परिवार के लिए साल भर का है। 70 साल और उससे ज़्यादा उम्र के सदस्यों को अलग से ₹5 लाख का अतिरिक्त कवर मिलता है।",
      },
    },
  ],

  officialUrl: "https://ayushmanbharat.mp.gov.in/",
  sources: [
    "https://ayushmanbharat.mp.gov.in/about-us",
    "https://ayushmanbharat.mp.gov.in/",
  ],
  lastVerified: "2026-10-06",
  launchedYear: 2018,
  status: "active",
};

export default scheme;
