import { all, isTrue, labelled, residentOf } from "@/lib/engine/build";
import type { Scheme } from "@/lib/types";

const scheme: Scheme = {
  slug: "telangana-mahalakshmi-lpg-subsidy",
  tier: "compact",
  name: { en: "Mahalakshmi ₹500 Gas Cylinder", hi: "महालक्ष्मी ₹500 गैस सिलेंडर" },
  aka: ["Mahalakshmi LPG", "Rs 500 gas cylinder Telangana", "LPG subsidy Telangana"],
  shortDescription: {
    en: "Eligible Telangana families get their domestic LPG cooking gas cylinder for ₹500, with the state paying the rest, under the Mahalakshmi scheme.",
    hi: "महालक्ष्मी योजना में तेलंगाना के पात्र परिवारों को घरेलू LPG रसोई गैस सिलेंडर ₹500 में मिलता है, बाक़ी पैसा राज्य सरकार देती है।",
  },
  level: "state",
  state: "telangana",
  department: {
    en: "Consumer Affairs, Food and Civil Supplies Department, Government of Telangana",
    hi: "उपभोक्ता मामले, खाद्य एवं नागरिक आपूर्ति विभाग, तेलंगाना सरकार",
  },
  categories: ["energy-savings", "women-child"],
  tags: ["lpg", "gas cylinder", "500 rupees", "cooking gas", "mahalakshmi", "telangana"],
  benefitType: "in-kind",
  isDBT: false,
  kundliHouse: "energy-savings",
  eligibility: all(
    residentOf("telangana"),
    labelled(isTrue("bpl"), { en: "Family has a white ration card (Food Security Card)", hi: "परिवार के पास सफ़ेद राशन कार्ड (फ़ूड सिक्योरिटी कार्ड) हो" }),
  ),

  details: {
    en: [
      "This is the cooking gas part of the Mahalakshmi guarantee. It started on 27 February 2024 under G.O.Ms.No.2 of the Civil Supplies Department.",
      "Eligible families pay ₹500 for a domestic LPG refill and the state covers the difference. In September 2026 the government said 43 lakh families were getting cylinders at ₹500.",
    ],
    hi: [
      "यह महालक्ष्मी गारंटी का रसोई गैस वाला हिस्सा है। यह नागरिक आपूर्ति विभाग के G.O.Ms.No.2 के तहत 27 फ़रवरी 2024 को शुरू हुआ।",
      "पात्र परिवार घरेलू LPG रीफ़िल के लिए ₹500 देते हैं और बाक़ी अंतर राज्य सरकार भरती है। सितंबर 2026 में सरकार के अनुसार 43 लाख परिवारों को ₹500 में सिलेंडर मिल रहा था।",
    ],
  },
  benefits: {
    en: ["Domestic LPG cylinder refill for ₹500.", "The state pays the rest of the cylinder price."],
    hi: ["घरेलू LPG सिलेंडर रीफ़िल ₹500 में।", "सिलेंडर की बाक़ी क़ीमत राज्य सरकार देती है।"],
  },
  eligibilityText: {
    en: [
      "Your family lives in Telangana and has a white ration card (Food Security Card).",
      "You have an active domestic LPG connection.",
      "You applied for the scheme during Praja Palana or later at a Praja Palana Seva Kendra.",
    ],
    hi: [
      "आपका परिवार तेलंगाना में रहता है और उसके पास सफ़ेद राशन कार्ड (फ़ूड सिक्योरिटी कार्ड) है।",
      "आपके पास चालू घरेलू LPG कनेक्शन है।",
      "आपने प्रजा पालना के दौरान या बाद में प्रजा पालना सेवा केंद्र पर इस योजना के लिए आवेदन किया है।",
    ],
  },
  applicationProcess: {
    offline: {
      en: [
        "Apply at the Praja Palana Seva Kendra in your MPDO, municipal or GHMC circle office if you have not applied yet.",
        "Give your ration card number and LPG consumer number correctly.",
        "Book refills from your gas agency as usual.",
      ],
      hi: [
        "अगर अभी तक आवेदन नहीं किया है, तो अपने MPDO, नगरपालिका या GHMC सर्कल दफ़्तर के प्रजा पालना सेवा केंद्र में आवेदन करें।",
        "राशन कार्ड नंबर और LPG कंज़्यूमर नंबर सही-सही दें।",
        "रीफ़िल हमेशा की तरह अपनी गैस एजेंसी से बुक करें।",
      ],
    },
  },

  officialUrl: "https://www.telangana.gov.in/government-initiatives/",
  sources: [
    "https://www.telangana.gov.in/news/press-releases/2024/02/state-government-ready-to-implement-two-more-guarantees/",
    "https://www.telangana.gov.in/wp-content/uploads/2024/07/Telangana-Socio-Economic-Outlook-2024.pdf",
    "https://www.telangana.gov.in/news/press-releases/2026/09/honble-cm-sri-a-revanth-reddy-participated-in-telangana-praja-palana-dinotsavam-2026-celebrations-at-public-gardens-hyderabad/",
    "https://www.telangana.gov.in/wp-content/uploads/2026/05/Budget-in-Brief.pdf",
  ],
  lastVerified: "2026-10-06",
  launchedYear: 2024,
  status: "active",
};

export default scheme;
