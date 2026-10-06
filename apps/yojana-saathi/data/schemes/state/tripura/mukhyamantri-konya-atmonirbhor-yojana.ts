import { all, female, incomeUpTo, isTrue, residentOf } from "@/lib/engine/build";
import type { Scheme } from "@/lib/types";

const scheme: Scheme = {
  slug: "mukhyamantri-konya-atmonirbhor-yojana",
  tier: "compact",
  name: { en: "Mukhyamantri Konya Atmonirbhor Yojana (Tripura)", hi: "मुख्यमंत्री कन्या आत्मनिर्भर योजना (त्रिपुरा)" },
  aka: ["MKAY", "Mukhyamantri Kanya Atmanirbhar Yojana", "Tripura free scooty"],
  shortDescription: {
    en: "A free scooty, with insurance and registration, for 140 top-scoring girls a year who join the first semester at a government degree college in Tripura.",
    hi: "त्रिपुरा के सरकारी डिग्री कॉलेज के पहले सेमेस्टर में दाख़िला लेने वाली सबसे ज़्यादा अंक पाने वाली हर साल 140 छात्राओं को बीमा और रजिस्ट्रेशन के साथ मुफ़्त स्कूटी।",
  },
  level: "state",
  state: "tripura",
  department: {
    en: "Education (Higher) Department, Government of Tripura",
    hi: "शिक्षा (उच्च) विभाग, त्रिपुरा सरकार",
  },
  categories: ["education", "women-child"],
  tags: ["scooty", "girls", "college", "merit", "free scooter", "tripura"],
  benefitType: "in-kind",
  isDBT: false,
  kundliHouse: "education",
  eligibility: all(residentOf("tripura"), female(), isTrue("student"), incomeUpTo(800_000)),

  details: {
    en: [
      "Mukhyamantri Konya Atmonirbhor Yojana (MKAY) was approved by the Tripura cabinet in March 2025. Each year it gives a scooty to 140 meritorious girls who start an undergraduate course at a government general degree college: 100 who passed Class 12 from the TBSE board and 40 from CBSE.",
      "Girls are picked strictly on their Class 12 marks, with separate merit lists for TBSE and CBSE and the state's reservation rules applied. The scooty is handed over registered in the student's name, with insurance.",
    ],
    hi: [
      "मुख्यमंत्री कन्या आत्मनिर्भर योजना (MKAY) को मार्च 2025 में त्रिपुरा कैबिनेट ने मंज़ूरी दी। इसमें हर साल सरकारी सामान्य डिग्री कॉलेज में स्नातक की पढ़ाई शुरू करने वाली 140 मेधावी छात्राओं को स्कूटी मिलती है: 100 TBSE बोर्ड से 12वीं पास और 40 CBSE से।",
      "छात्राओं का चयन सिर्फ़ 12वीं के अंकों पर होता है। TBSE और CBSE की अलग मेरिट सूची बनती है और राज्य के आरक्षण नियम लागू होते हैं। स्कूटी छात्रा के नाम पर रजिस्टर होकर, बीमे के साथ दी जाती है।",
    ],
  },
  benefits: {
    en: [
      "One free scooty, with insurance and registration, for each selected student.",
      "140 scooties a year: 100 for TBSE students and 40 for CBSE students.",
    ],
    hi: [
      "हर चुनी गई छात्रा को बीमा और रजिस्ट्रेशन के साथ एक मुफ़्त स्कूटी।",
      "हर साल 140 स्कूटी: 100 TBSE छात्राओं और 40 CBSE छात्राओं के लिए।",
    ],
  },
  eligibilityText: {
    en: [
      "Girl student in the first semester of an undergraduate course at a government general degree college under Tripura's Higher Education Department.",
      "Passed Class 12 in the latest board exam from a government or government-aided TBSE/CBSE school in Tripura, or a central government CBSE school.",
      "At least 80% marks in Class 12 (the department may change this cut-off each year), with no gap year before college.",
      "Annual family income of ₹8 lakh or less, and a Permanent Resident of Tripura Certificate (PRTC).",
    ],
    hi: [
      "त्रिपुरा के उच्च शिक्षा विभाग के सरकारी सामान्य डिग्री कॉलेज में स्नातक के पहले सेमेस्टर की छात्रा।",
      "ताज़ा बोर्ड परीक्षा में त्रिपुरा के सरकारी या सरकारी सहायता प्राप्त TBSE/CBSE स्कूल, या केंद्र सरकार के CBSE स्कूल से 12वीं पास।",
      "12वीं में कम से कम 80% अंक (विभाग हर साल यह सीमा बदल सकता है), और कॉलेज से पहले कोई गैप ईयर न हो।",
      "परिवार की सालाना आय ₹8 लाख या उससे कम, और त्रिपुरा स्थायी निवासी प्रमाण पत्र (PRTC)।",
    ],
  },
  applicationProcess: {
    online: {
      en: [
        "Watch for the notice on highereducation.tripura.gov.in and at your college; applications are invited once a year.",
        "Apply on the Beneficiary Management System (BMS) portal when it opens, uploading your mark sheets, PRTC, income certificate, college bonafide, ration card, Aadhaar, photo and bank passbook.",
        "Your college verifies the form, then the Directorate checks it and publishes the merit lists. Until the BMS portal is ready, the process may be done offline through your college.",
      ],
      hi: [
        "highereducation.tripura.gov.in और अपने कॉलेज में सूचना पर नज़र रखें; आवेदन साल में एक बार माँगे जाते हैं।",
        "पोर्टल खुलने पर बेनिफ़िशियरी मैनेजमेंट सिस्टम (BMS) पोर्टल पर आवेदन करें और अंक पत्र, PRTC, आय प्रमाण पत्र, कॉलेज का बोनाफ़ाइड, राशन कार्ड, आधार, फ़ोटो और बैंक पासबुक अपलोड करें।",
        "आपका कॉलेज फ़ॉर्म की जाँच करता है, फिर निदेशालय जाँच कर मेरिट सूची जारी करता है। BMS पोर्टल तैयार होने तक प्रक्रिया कॉलेज के ज़रिए ऑफ़लाइन भी हो सकती है।",
      ],
    },
  },

  officialUrl: "https://highereducation.tripura.gov.in/",
  sources: [
    "https://highereducation.tripura.gov.in/sites/default/files/MKAY%20Guideline%20%28ocr%29.pdf",
    "https://www.newsonair.gov.in/union-minister-jp-nadda-announces-two-welfare-schemes-for-girls-in-tripura/",
  ],
  lastVerified: "2026-10-06",
  launchedYear: 2025,
  status: "active",
};

export default scheme;
