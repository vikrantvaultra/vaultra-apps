import { all, any, isTrue, labelled, minAge, residentOf, when } from "@/lib/engine/build";
import type { Scheme } from "@/lib/types";

const scheme: Scheme = {
  slug: "chhattisgarh-mukhyamantri-tirth-darshan-yojana",
  tier: "compact",
  name: { en: "Mukhyamantri Tirth Darshan Yojana (Chhattisgarh)", hi: "मुख्यमंत्री तीर्थ दर्शन योजना (छत्तीसगढ़)" },
  aka: ["Tirth Darshan Yojana CG", "Teerth Yatra Chhattisgarh", "free pilgrimage Chhattisgarh"],
  shortDescription: {
    en: "Senior citizens aged 60+, widows, abandoned women and persons with disabilities in Chhattisgarh can go on a free pilgrimage by special train, chosen through their panchayat or urban body.",
    hi: "छत्तीसगढ़ के 60 साल से ज़्यादा उम्र के बुज़ुर्ग, विधवा, परित्यक्ता महिलाएँ और दिव्यांगजन विशेष ट्रेन से मुफ़्त तीर्थ यात्रा कर सकते हैं, चयन पंचायत या नगरीय निकाय से होता है।",
  },
  level: "state",
  state: "chhattisgarh",
  department: {
    en: "Social Welfare Department, Government of Chhattisgarh",
    hi: "समाज कल्याण विभाग, छत्तीसगढ़ सरकार",
  },
  categories: ["social-welfare"],
  tags: ["pilgrimage", "senior citizen", "tirth yatra", "train", "widow", "chhattisgarh"],
  benefitType: "in-kind",
  isDBT: false,
  ageRange: { min: 60 },
  kundliHouse: "senior",
  eligibility: all(
    residentOf("chhattisgarh"),
    labelled(any(minAge(60), when("marital", "in", ["widowed", "separated", "divorced"]), isTrue("disabled")), {
      en: "Aged 60 or more, or a widow or abandoned woman, or a person with disability",
      hi: "उम्र 60 साल या उससे ज़्यादा हो, या विधवा/परित्यक्ता महिला हों, या दिव्यांग हों",
    }),
  ),

  details: {
    en: [
      "Under this scheme the Social Welfare Department takes groups of pilgrims from every district to major religious places outside the state, free of cost, by special train.",
      "Each district gets a quota for each trip, split between rural areas (75%) and urban areas (25%). Recent trips have gone to Mathura-Vrindavan, Puri-Konark, Gangasagar-Kolkata, Amritsar-Vaishno Devi and Bodh Gaya-Sarnath.",
    ],
    hi: [
      "इस योजना में समाज कल्याण विभाग हर ज़िले से तीर्थयात्रियों के दल को विशेष ट्रेन से राज्य के बाहर बड़े धार्मिक स्थलों की मुफ़्त यात्रा कराता है।",
      "हर यात्रा के लिए हर ज़िले का कोटा तय होता है, जिसमें 75% ग्रामीण और 25% शहरी हितग्राही होते हैं। हाल की यात्राएँ मथुरा-वृंदावन, पुरी-कोणार्क, गंगासागर-कोलकाता, अमृतसर-वैष्णो देवी और बोधगया-सारनाथ गई हैं।",
    ],
  },
  benefits: {
    en: [
      "Free train journey to a pilgrimage site and back.",
      "The trip is arranged by the government, with officials and a medical officer travelling with the group.",
    ],
    hi: [
      "तीर्थ स्थल तक आने-जाने की मुफ़्त ट्रेन यात्रा।",
      "यात्रा का इंतज़ाम सरकार करती है, और दल के साथ अधिकारी और चिकित्सा अधिकारी जाते हैं।",
    ],
  },
  eligibilityText: {
    en: [
      "A resident of Chhattisgarh aged 60 or above, or a widow or abandoned woman, or a person with disability.",
      "Physically and mentally fit to travel, as certified by a doctor.",
      "Selected within your panchayat's or urban body's quota for the trip.",
    ],
    hi: [
      "छत्तीसगढ़ का निवासी जिसकी उम्र 60 साल या उससे ज़्यादा हो, या विधवा या परित्यक्ता महिला, या दिव्यांग व्यक्ति।",
      "डॉक्टर के प्रमाण पत्र के अनुसार यात्रा के लिए शारीरिक और मानसिक रूप से सक्षम हो।",
      "यात्रा के लिए अपनी पंचायत या नगरीय निकाय के कोटे में चयन हुआ हो।",
    ],
  },
  applicationProcess: {
    offline: {
      en: [
        "When your district announces a trip, get the form from your janpad panchayat, gram panchayat or urban body.",
        "Submit it by the last date with 2 passport-size photos, a copy of an ID (Aadhaar, ration card, voter ID, PAN or licence) and a doctor's fitness certificate.",
        "Selected pilgrims and a waiting list are prepared; you are told 24 hours before departure.",
      ],
      hi: [
        "जब ज़िला यात्रा की घोषणा करे, अपनी जनपद पंचायत, ग्राम पंचायत या नगरीय निकाय से फ़ॉर्म लें।",
        "आख़िरी तारीख़ तक 2 पासपोर्ट साइज़ फ़ोटो, पहचान पत्र (आधार, राशन कार्ड, वोटर ID, पैन या लाइसेंस) की कॉपी और डॉक्टर के फ़िटनेस प्रमाण पत्र के साथ जमा करें।",
        "चुने गए यात्रियों और प्रतीक्षा सूची की सूची बनती है; रवानगी से 24 घंटे पहले सूचना दी जाती है।",
      ],
    },
  },
  officialUrl: "https://dprcg.gov.in/post/1785946680/%E0%A4%95%E0%A5%8B%E0%A4%B0%E0%A4%AC%E0%A4%BE-%E0%A4%AE%E0%A5%81%E0%A4%96%E0%A5%8D%E0%A4%AF%E0%A4%AE%E0%A4%82%E0%A4%A4%E0%A5%8D%E0%A4%B0%E0%A5%80-%E0%A4%A4%E0%A5%80%E0%A4%B0%E0%A5%8D%E0%A4%A5-%E0%A4%A6%E0%A4%B0%E0%A5%8D%E0%A4%B6%E0%A4%A8-%E0%A4%AF%E0%A5%8B%E0%A4%9C%E0%A4%A8%E0%A4%BE%E0%A4%82%E0%A4%A4%E0%A4%B0%E0%A5%8D%E0%A4%97%E0%A4%A4-%E0%A4%A6%E0%A4%BF%E0%A4%B6%E0%A4%BE-%E0%A4%A8%E0%A4%BF%E0%A4%B0%E0%A5%8D%E0%A4%A6%E0%A5%87%E0%A4%B6-%E0%A4%9C%E0%A4%BE%E0%A4%B0%E0%A5%80",
  sources: [
    "https://dprcg.gov.in/post/1785946680/%E0%A4%95%E0%A5%8B%E0%A4%B0%E0%A4%AC%E0%A4%BE-%E0%A4%AE%E0%A5%81%E0%A4%96%E0%A5%8D%E0%A4%AF%E0%A4%AE%E0%A4%82%E0%A4%A4%E0%A5%8D%E0%A4%B0%E0%A5%80-%E0%A4%A4%E0%A5%80%E0%A4%B0%E0%A5%8D%E0%A4%A5-%E0%A4%A6%E0%A4%B0%E0%A5%8D%E0%A4%B6%E0%A4%A8-%E0%A4%AF%E0%A5%8B%E0%A4%9C%E0%A4%A8%E0%A4%BE%E0%A4%82%E0%A4%A4%E0%A4%B0%E0%A5%8D%E0%A4%97%E0%A4%A4-%E0%A4%A6%E0%A4%BF%E0%A4%B6%E0%A4%BE-%E0%A4%A8%E0%A4%BF%E0%A4%B0%E0%A5%8D%E0%A4%A6%E0%A5%87%E0%A4%B6-%E0%A4%9C%E0%A4%BE%E0%A4%B0%E0%A5%80",
    "https://dprcg.gov.in/post/1788970228/%E0%A4%AC%E0%A4%BF%E0%A4%B2%E0%A4%BE%E0%A4%B8%E0%A4%AA%E0%A5%81%E0%A4%B0-%E0%A4%AE%E0%A5%81%E0%A4%96%E0%A5%8D%E0%A4%AF%E0%A4%AE%E0%A4%82%E0%A4%A4%E0%A5%8D%E0%A4%B0%E0%A5%80-%E0%A4%A4%E0%A5%80%E0%A4%B0%E0%A5%8D%E0%A4%A5-%E0%A4%A6%E0%A4%B0%E0%A5%8D%E0%A4%B6%E0%A4%A8-%E0%A4%AF%E0%A5%8B%E0%A4%9C%E0%A4%A8%E0%A4%BE-%E0%A4%9C%E0%A4%BF%E0%A4%B2%E0%A5%87-%E0%A4%95%E0%A5%87-386-%E0%A4%B6%E0%A5%8D%E0%A4%B0%E0%A4%A6%E0%A5%8D%E0%A4%A7%E0%A4%BE%E0%A4%B2%E0%A5%81-%E0%A4%95%E0%A4%B0%E0%A5%87%E0%A4%82%E0%A4%97%E0%A5%87-%E0%A4%A4%E0%A5%80%E0%A4%B0%E0%A5%8D%E0%A4%A5%E0%A4%A6%E0%A4%B0%E0%A5%8D%E0%A4%B6%E0%A4%A8",
    "https://dprcg.gov.in/post/1789993479/%E0%A4%9C%E0%A4%97%E0%A4%A6%E0%A4%B2%E0%A4%AA%E0%A5%81%E0%A4%B0-%E0%A4%AC%E0%A4%B8%E0%A5%8D%E0%A4%A4%E0%A4%B0-%E0%A4%95%E0%A5%87-%E0%A4%B5%E0%A4%B0%E0%A4%BF%E0%A4%B7%E0%A5%8D%E0%A4%A0-%E0%A4%A8%E0%A4%BE%E0%A4%97%E0%A4%B0%E0%A4%BF%E0%A4%95%E0%A5%8B%E0%A4%82-%E0%A4%94%E0%A4%B0-%E0%A4%AE%E0%A4%B9%E0%A4%BF%E0%A4%B2%E0%A4%BE%E0%A4%93%E0%A4%82-%E0%A4%95%E0%A5%8B-%E0%A4%A4%E0%A5%80%E0%A4%B0%E0%A5%8D%E0%A4%A5-%E0%A4%A6%E0%A4%B0%E0%A5%8D%E0%A4%B6%E0%A4%A8-%E0%A4%95%E0%A5%80-%E0%A4%B8%E0%A5%8C%E0%A4%97%E0%A4%BE%E0%A4%A4",
  ],
  lastVerified: "2026-10-06",
  launchedYear: 2012,
  status: "active",
};

export default scheme;
