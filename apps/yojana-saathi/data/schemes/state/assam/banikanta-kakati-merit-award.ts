import { all, isTrue, residentOf } from "@/lib/engine/build";
import type { Scheme } from "@/lib/types";

const scheme: Scheme = {
  slug: "banikanta-kakati-merit-award",
  tier: "compact",
  name: { en: "Dr. Banikanta Kakati Merit Award (Scooter)", hi: "डॉ. बाणीकांत काकती मेधा पुरस्कार (स्कूटर)" },
  aka: ["Assam free scooty", "Pragyan Bharati scooter", "Banikanta Kakati Award"],
  shortDescription: {
    en: "Students in Assam who scored 80% or more in the 2026 Class 12 exam get a free scooter with registration, insurance and a helmet. 2026 is the last round.",
    hi: "2026 की 12वीं परीक्षा में 80% या उससे ज़्यादा अंक लाने वाले असम के छात्रों को रजिस्ट्रेशन, बीमा और हेलमेट के साथ मुफ़्त स्कूटर मिलता है। 2026 आखिरी दौर है।",
  },
  level: "state",
  state: "assam",
  department: { en: "Higher Education Department, Government of Assam", hi: "उच्च शिक्षा विभाग, असम सरकार" },
  categories: ["education"],
  tags: ["free scooty", "scooter", "merit award", "class 12", "toppers", "assam"],
  benefitType: "in-kind",
  isDBT: false,
  kundliHouse: "education",
  eligibility: all(residentOf("assam"), isTrue("student")),

  details: {
    en: [
      "Under the Pragyan Bharati scheme, the Assam government gives scooters to girls and boys who score 80% or more in the Higher Secondary final exam conducted by the Assam State School Education Board. About 18,000 students are expected to qualify in 2026.",
      "The 2026-27 budget says scooter distribution will stop from the next academic year, and the money will go to Nijut Moina and Nijut Babu instead. So the 2026 round is the last one.",
    ],
    hi: [
      "प्रज्ञान भारती योजना के तहत असम सरकार असम राज्य स्कूल शिक्षा बोर्ड की हायर सेकेंडरी फ़ाइनल परीक्षा में 80% या उससे ज़्यादा अंक लाने वाले छात्र-छात्राओं को स्कूटर देती है। 2026 में करीब 18,000 छात्र पात्र होने की उम्मीद है।",
      "2026-27 के बजट के अनुसार अगले शैक्षणिक साल से स्कूटर बाँटना बंद होगा, और यह पैसा निजुत मोइना और निजुत बाबू में लगेगा। इसलिए 2026 का दौर आखिरी है।",
    ],
  },
  benefits: {
    en: ["A free scooter.", "Registration and insurance paid by the government.", "A free helmet with the scooter."],
    hi: ["मुफ़्त स्कूटर।", "रजिस्ट्रेशन और बीमा का खर्च सरकार देती है।", "स्कूटर के साथ मुफ़्त हेलमेट।"],
  },
  eligibilityText: {
    en: [
      "Scored 80% or more in the 2026 Higher Secondary final exam of the Assam State School Education Board.",
      "Resident of Assam (students studying outside Assam can apply with a valid Assam PRC).",
      "Students in the betterment or reappearance category are not eligible.",
      "Students who take the scooter cannot get Nijut Moina or Nijut Babu at UG level.",
    ],
    hi: [
      "असम राज्य स्कूल शिक्षा बोर्ड की 2026 हायर सेकेंडरी फ़ाइनल परीक्षा में 80% या उससे ज़्यादा अंक।",
      "असम का निवासी (असम से बाहर पढ़ रहे छात्र मान्य असम PRC के साथ आवेदन कर सकते हैं)।",
      "बेटरमेंट या दोबारा परीक्षा देने वाले छात्र पात्र नहीं हैं।",
      "स्कूटर लेने वाले छात्रों को UG स्तर पर निजुत मोइना या निजुत बाबू नहीं मिलेगा।",
    ],
  },
  applicationProcess: {
    online: {
      en: [
        "Check your name in the list of eligible students published by the Directorate of Higher Education.",
        "Fill in the online application on banikantakakatiaward.org (only online forms are accepted).",
        "Collect the appreciation certificate from your nodal principal and hand it to the allotted dealer to get the scooter.",
      ],
      hi: [
        "उच्च शिक्षा निदेशालय की पात्र छात्रों की सूची में अपना नाम देखें।",
        "banikantakakatiaward.org पर ऑनलाइन आवेदन भरें (सिर्फ़ ऑनलाइन फ़ॉर्म मान्य हैं)।",
        "अपने नोडल प्रिंसिपल से प्रशंसा प्रमाण पत्र लें और तय डीलर को देकर स्कूटर लें।",
      ],
    },
  },

  officialUrl: "https://directorateofhighereducation.assam.gov.in/documents-detail/guideline-for-distribution-of-scooters-to-girl-and-boy-students-securing-80-or-more",
  sources: [
    "https://directorateofhighereducation.assam.gov.in/documents-detail/guideline-for-distribution-of-scooters-to-girl-and-boy-students-securing-80-or-more",
    "https://directorateofhighereducation.assam.gov.in/documents-detail/public-notice-regarding-online-application-for-dr-bani-kanta-kakati-merit-award",
    "https://aladigitallibrary.in/handle/123456789/4238",
  ],
  lastVerified: "2026-10-06",
  launchedYear: 2018,
  status: "active",
};

export default scheme;
