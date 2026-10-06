import { all, ageBetween, incomeUpTo, residentOf } from "@/lib/engine/build";
import type { Scheme } from "@/lib/types";

const scheme: Scheme = {
  slug: "ladakh-rewa-upsc-coaching",
  tier: "compact",
  name: { en: "REWA 2.0: Coaching Support for UPSC Civil Services Aspirants (Ladakh)", hi: "रेवा 2.0: UPSC सिविल सेवा उम्मीदवारों के लिए कोचिंग सहायता (लद्दाख)" },
  aka: ["REWA 2.0", "REWA UPSC coaching Ladakh"],
  shortDescription: {
    en: "Graduates from Ladakh aged 21 to 36 with family income up to ₹8 lakh can take a screening test to win government-funded coaching for the UPSC Civil Services Prelims.",
    hi: "लद्दाख के 21 से 36 साल के स्नातक, जिनके परिवार की आय ₹8 लाख तक है, एक स्क्रीनिंग टेस्ट देकर UPSC सिविल सेवा प्रारंभिक परीक्षा की कोचिंग के लिए सरकारी आर्थिक मदद पा सकते हैं।",
  },
  level: "state",
  state: "ladakh",
  department: { en: "Higher Education Department, UT Administration of Ladakh", hi: "उच्च शिक्षा विभाग, केंद्र शासित प्रदेश लद्दाख प्रशासन" },
  categories: ["education", "skills-employment"],
  tags: ["upsc", "civil services", "coaching", "rewa", "competitive exam", "ladakh"],
  benefitType: "cash",
  isDBT: false,
  ageRange: { min: 21, max: 36 },
  kundliHouse: "career",
  eligibility: all(residentOf("ladakh"), ...ageBetween(21, 36), incomeUpTo(800_000)),

  details: {
    en: [
      "REWA 2.0 is run by Ladakh's Higher Education Department to help local graduates prepare for the UPSC Civil Services Examination. Candidates take an OMR-based screening test that follows the pattern of the UPSC Prelims, and those selected on merit get financial help for Prelims coaching.",
      "The scheme ran in 2025 (test held on 16 November 2025) and applications for the 2026 round were open from 29 September to 15 October 2026, with the screening test planned for 25 October 2026.",
    ],
    hi: [
      "रेवा 2.0 लद्दाख का उच्च शिक्षा विभाग चलाता है, ताकि स्थानीय स्नातक UPSC सिविल सेवा परीक्षा की तैयारी कर सकें। उम्मीदवार UPSC प्रारंभिक परीक्षा के पैटर्न पर OMR आधारित स्क्रीनिंग टेस्ट देते हैं, और मेरिट से चुने गए लोगों को प्रारंभिक परीक्षा की कोचिंग के लिए आर्थिक मदद मिलती है।",
      "यह योजना 2025 में चली (टेस्ट 16 नवंबर 2025 को हुआ) और 2026 के दौर के लिए आवेदन 29 सितंबर से 15 अक्टूबर 2026 तक खुले थे, स्क्रीनिंग टेस्ट 25 अक्टूबर 2026 को प्रस्तावित था।",
    ],
  },
  benefits: {
    en: [
      "Financial assistance towards coaching for the UPSC Civil Services Preliminary Examination, for candidates selected through the screening test.",
    ],
    hi: ["स्क्रीनिंग टेस्ट से चुने गए उम्मीदवारों को UPSC सिविल सेवा प्रारंभिक परीक्षा की कोचिंग के लिए आर्थिक सहायता।"],
  },
  eligibilityText: {
    en: [
      "Holds a domicile or resident certificate of the UT of Ladakh.",
      "A graduate.",
      "Aged 21 to 36 years.",
      "Family income up to ₹8 lakh a year (Tehsildar's income certificate).",
      "Selected on merit in the screening test, followed by document verification.",
    ],
    hi: [
      "केंद्र शासित प्रदेश लद्दाख का डोमिसाइल या निवासी प्रमाण पत्र हो।",
      "स्नातक हों।",
      "उम्र 21 से 36 साल।",
      "परिवार की सालाना आय ₹8 लाख तक हो (तहसीलदार का आय प्रमाण पत्र)।",
      "स्क्रीनिंग टेस्ट में मेरिट से चयन, फिर दस्तावेज़ों की जाँच।",
    ],
  },
  applicationProcess: {
    online: {
      en: [
        "When applications open, fill in the REWA 2.0 form at highereducation.ladakh.gov.in/rewaform and pay the ₹200 fee online.",
        "Upload your domicile certificate, graduation degree and marksheet, date-of-birth proof, income certificate and, if relevant, SC/ST, PwBD or ex-serviceman certificate.",
        "Download the admit card, take the screening test and, if shortlisted, attend document verification with the originals.",
      ],
      hi: [
        "आवेदन खुलने पर highereducation.ladakh.gov.in/rewaform पर रेवा 2.0 फ़ॉर्म भरें और ₹200 फ़ीस ऑनलाइन दें।",
        "डोमिसाइल प्रमाण पत्र, स्नातक डिग्री और मार्कशीट, जन्म तारीख़ का सबूत, आय प्रमाण पत्र और ज़रूरत हो तो SC/ST, दिव्यांग या पूर्व सैनिक प्रमाण पत्र अपलोड करें।",
        "एडमिट कार्ड डाउनलोड करें, स्क्रीनिंग टेस्ट दें और शॉर्टलिस्ट होने पर मूल दस्तावेज़ों के साथ जाँच के लिए जाएँ।",
      ],
    },
  },

  officialUrl: "https://highereducation.ladakh.gov.in/rewaform",
  sources: [
    "https://cdnbbsr.s3waas.gov.in/s395192c98732387165bf8e396c0f2dad2/uploads/2026/09/20260930428646131.pdf",
    "https://highereducation.ladakh.gov.in/uploadsadmin/results-notices/additionalLink1_6f8dc0d75dcf64f0aa4ef624a66952f1.pdf",
    "https://ladakh.gov.in/notice/notification-submission-of-online-applications-under-the-rewa-2-0-scheme-of-the-ut-ladakh/",
  ],
  lastVerified: "2026-10-06",
  launchedYear: 2025,
  status: "active",
};

export default scheme;
