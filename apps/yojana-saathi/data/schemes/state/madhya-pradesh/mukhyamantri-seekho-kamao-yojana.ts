import { all, ageBetween, residentOf } from "@/lib/engine/build";
import type { Scheme } from "@/lib/types";

const scheme: Scheme = {
  slug: "mukhyamantri-seekho-kamao-yojana",
  tier: "compact",
  name: { en: "Mukhyamantri Seekho Kamao Yojana", hi: "मुख्यमंत्री सीखो कमाओ योजना" },
  aka: ["MMSKY", "Seekho Kamao", "Sikho Kamao"],
  shortDescription: {
    en: "Youth aged 18 to 29 in Madhya Pradesh with Class 12, ITI or higher get on-the-job training at a company with a monthly stipend, most of it paid by the state.",
    hi: "मध्य प्रदेश के 18 से 29 साल के 12वीं, ITI या उससे ज़्यादा पढ़े युवाओं को किसी कंपनी में काम सीखते हुए हर महीने स्टाइपेंड मिलता है, जिसका ज़्यादातर हिस्सा राज्य सरकार देती है।",
  },
  level: "state",
  state: "madhya-pradesh",
  department: {
    en: "Technical Education, Skill Development and Employment Department (Directorate of Skill Development), Government of Madhya Pradesh",
    hi: "तकनीकी शिक्षा, कौशल विकास एवं रोज़गार विभाग (कौशल विकास संचालनालय), मध्य प्रदेश सरकार",
  },
  categories: ["skills-employment"],
  tags: ["training", "stipend", "apprenticeship", "youth", "job", "madhya pradesh"],
  benefitType: "cash",
  isDBT: true,
  ageRange: { min: 18, max: 29 },
  kundliHouse: "career",
  eligibility: all(residentOf("madhya-pradesh"), ...ageBetween(18, 29)),

  details: {
    en: [
      "Seekho Kamao Yojana gives young people on-the-job training at registered private companies and businesses in Madhya Pradesh, usually for one year, in more than 700 courses across 46 sectors.",
      "During training you get a monthly stipend that depends on your qualification. The company pays 25% of the fixed stipend into your account, and the state then pays the other 75% by DBT. At the end you get a certificate from the state vocational training council (SCVT).",
    ],
    hi: [
      "सीखो कमाओ योजना में युवाओं को मध्य प्रदेश की पंजीकृत निजी कंपनियों और कारोबारों में काम पर ही प्रशिक्षण मिलता है, आमतौर पर एक साल का, 46 क्षेत्रों के 700 से ज़्यादा कोर्सों में।",
      "प्रशिक्षण के दौरान आपकी पढ़ाई के हिसाब से हर महीने स्टाइपेंड मिलता है। तय स्टाइपेंड का 25% कंपनी आपके खाते में डालती है, और बाकी 75% राज्य सरकार DBT से देती है। आख़िर में राज्य व्यावसायिक प्रशिक्षण परिषद (SCVT) का प्रमाण पत्र मिलता है।",
    ],
  },
  benefits: {
    en: [
      "Paid on-the-job training, usually for one year.",
      "Monthly stipend based on qualification (₹8,000 for Class 12 up to ₹10,000 for graduates under the scheme rules); 75% comes from the state by DBT.",
      "SCVT certificate after you finish, which helps you get a regular job.",
    ],
    hi: [
      "काम पर ही पैसे के साथ प्रशिक्षण, आमतौर पर एक साल।",
      "पढ़ाई के हिसाब से हर महीने स्टाइपेंड (योजना के नियमों में 12वीं के लिए ₹8,000 से स्नातक के लिए ₹10,000 तक); 75% राज्य सरकार DBT से देती है।",
      "प्रशिक्षण पूरा होने पर SCVT प्रमाण पत्र, जिससे नियमित नौकरी पाने में मदद मिलती है।",
    ],
  },
  eligibilityText: {
    en: [
      "A local resident of Madhya Pradesh.",
      "Aged 18 to 29 years.",
      "Passed Class 12 or ITI, or holds a higher qualification.",
    ],
    hi: [
      "मध्य प्रदेश के स्थानीय निवासी।",
      "उम्र 18 से 29 साल।",
      "12वीं या ITI पास, या उससे ज़्यादा पढ़ाई।",
    ],
  },
  applicationProcess: {
    online: {
      en: [
        "Register as a candidate on mmsky.mp.gov.in with your Samagra ID and complete the e-KYC.",
        "Complete your profile and apply for vacancies posted by companies.",
        "Accept the training contract the company sends you, and mark your daily attendance in the mobile app to get the stipend.",
      ],
      hi: [
        "mmsky.mp.gov.in पर समग्र ID से अभ्यर्थी के रूप में पंजीयन करें और e-KYC पूरी करें।",
        "अपनी प्रोफ़ाइल पूरी करें और कंपनियों की निकाली रिक्तियों के लिए आवेदन करें।",
        "कंपनी का भेजा प्रशिक्षण अनुबंध स्वीकार करें, और स्टाइपेंड के लिए मोबाइल ऐप में रोज़ हाज़िरी लगाएँ।",
      ],
    },
  },

  officialUrl: "https://mmsky.mp.gov.in/",
  sources: ["https://mmsky.mp.gov.in/", "https://en.vikaspedia.in/viewcontent/schemesall/state-specific-schemes/welfare-schemes-of-madhya-pradesh/mukhyamantri-seekho-kamao-yojana"],
  lastVerified: "2026-10-06",
  launchedYear: 2023,
  status: "check-status",
};

export default scheme;
