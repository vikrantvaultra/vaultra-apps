import { all, isTrue, residentOf, labelled } from "@/lib/engine/build";
import type { Scheme } from "@/lib/types";

const scheme: Scheme = {
  slug: "mukhyamantri-antyodaya-shradhanjali-yojana",
  tier: "compact",
  name: { en: "Mukhyamantri Antyodaya Shradhanjali Yojana (Tripura)", hi: "मुख्यमंत्री अंत्योदय श्रद्धांजलि योजना (त्रिपुरा)" },
  aka: ["MASY", "Tripura funeral assistance", "Antyodaya death assistance"],
  shortDescription: {
    en: "₹10,000 one-time help to an Antyodaya family in Tripura when a family member dies, to cover last rites and cremation or burial costs.",
    hi: "त्रिपुरा के अंत्योदय परिवार में किसी सदस्य की मृत्यु पर अंतिम संस्कार और दाह-संस्कार या दफ़न के ख़र्च के लिए ₹10,000 की एकमुश्त मदद।",
  },
  level: "state",
  state: "tripura",
  department: {
    en: "Social Welfare & Social Education Department, Government of Tripura",
    hi: "समाज कल्याण एवं समाज शिक्षा विभाग, त्रिपुरा सरकार",
  },
  categories: ["social-welfare"],
  tags: ["funeral", "death", "cremation", "antyodaya", "last rites", "tripura"],
  benefitType: "cash",
  isDBT: false,
  value: { amount: 10000, period: "one-time", kind: "cash" },
  kundliHouse: "women-family",
  eligibility: all(
    residentOf("tripura"),
    labelled(isTrue("bpl"), { en: "Your family has an Antyodaya ration card", hi: "आपके परिवार के पास अंत्योदय राशन कार्ड है" }),
  ),

  details: {
    en: [
      "Under Mukhyamantri Antyodaya Shradhanjali Yojana, the Tripura government gives a one-time grant when a member of an Antyodaya family dies, so the family can perform the last rites and meet cremation or burial costs.",
      "The scheme started in 2021. From 30 August 2025 the grant was raised to ₹10,000.",
    ],
    hi: [
      "मुख्यमंत्री अंत्योदय श्रद्धांजलि योजना में अंत्योदय परिवार के किसी सदस्य की मृत्यु पर त्रिपुरा सरकार एकमुश्त मदद देती है, ताकि परिवार अंतिम संस्कार कर सके और दाह-संस्कार या दफ़न का ख़र्च उठा सके।",
      "यह योजना 2021 में शुरू हुई। 30 अगस्त 2025 से यह राशि बढ़ाकर ₹10,000 कर दी गई।",
    ],
  },
  benefits: {
    en: ["₹10,000 one-time grant on the death of a member of an Antyodaya family."],
    hi: ["अंत्योदय परिवार के किसी सदस्य की मृत्यु पर ₹10,000 की एकमुश्त मदद।"],
  },
  eligibilityText: {
    en: [
      "The person who died was a resident of Tripura and their name is on an Antyodaya (AAY) ration card.",
      "The next of kin applies; if there is none, the nearest family member can apply.",
    ],
    hi: [
      "मृत व्यक्ति त्रिपुरा का निवासी था और उसका नाम अंत्योदय (AAY) राशन कार्ड में दर्ज है।",
      "निकटतम परिजन आवेदन करें; अगर कोई न हो तो परिवार का सबसे नज़दीकी सदस्य आवेदन कर सकता है।",
    ],
  },
  applicationProcess: {
    offline: {
      en: [
        "Write an application on plain paper and attach a copy of the Antyodaya ration card showing the deceased person's name.",
        "Get it certified by the Gaon Pradhan (rural areas), the Ward member (urban areas) or the Village Committee chairperson (TTAADC areas).",
        "Give it to the nearest Anganwadi centre. The grant is meant to reach the family at the time of the funeral, through the Anganwadi worker and the CDPO.",
      ],
      hi: [
        "सादे काग़ज़ पर आवेदन लिखें और अंत्योदय राशन कार्ड की कॉपी लगाएँ, जिसमें मृत व्यक्ति का नाम हो।",
        "इसे गाँव प्रधान (ग्रामीण इलाक़े), वार्ड सदस्य (शहरी इलाक़े) या ग्राम समिति अध्यक्ष (TTAADC इलाक़े) से प्रमाणित कराएँ।",
        "नज़दीकी आंगनवाड़ी केंद्र में जमा करें। यह मदद आंगनवाड़ी कार्यकर्ता और CDPO के ज़रिए अंतिम संस्कार के समय ही परिवार तक पहुँचाने के लिए है।",
      ],
    },
  },

  officialUrl: "https://socialwelfare.tripura.gov.in/mukhyamantri-antyodaya-shradhanjali-yajana-amendment-2",
  sources: [
    "https://socialwelfare.tripura.gov.in/sites/default/files/Revised%20Notification%20MASY%20%28Rs.10000%29.pdf",
    "https://socialwelfare.tripura.gov.in/sites/default/files/Mukhyamantri%20Antyodaya%20Shradhanjali%20%20Yojana%27.pdf",
  ],
  lastVerified: "2026-10-06",
  launchedYear: 2021,
  status: "active",
};

export default scheme;
