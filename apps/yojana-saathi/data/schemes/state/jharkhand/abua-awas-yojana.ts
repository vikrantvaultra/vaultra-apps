import { all, isFalse, residentOf, when } from "@/lib/engine/build";
import type { Scheme } from "@/lib/types";

const scheme: Scheme = {
  slug: "abua-awas-yojana",
  name: { en: "Abua Awas Yojana", hi: "अबुआ आवास योजना" },
  aka: ["AAY", "Abua Awas", "Jharkhand housing scheme"],
  shortDescription: {
    en: "Poor rural families in Jharkhand who were left out of PM Awas Yojana-Gramin get ₹2 lakh in five instalments to build a pucca house.",
    hi: "झारखंड के जो ग़रीब ग्रामीण परिवार प्रधानमंत्री आवास योजना-ग्रामीण से छूट गए, उन्हें पक्का घर बनाने के लिए पाँच किस्तों में ₹2 लाख मिलते हैं।",
  },
  level: "state",
  state: "jharkhand",
  department: { en: "Rural Development Department, Government of Jharkhand", hi: "ग्रामीण विकास विभाग, झारखंड सरकार" },
  categories: ["housing", "social-welfare"],
  tags: ["housing", "pucca house", "awas", "rural", "kutcha house", "jharkhand"],
  benefitType: "cash",
  isDBT: true,
  value: { amount: 200000, period: "one-time", kind: "cash" },
  kundliHouse: "home",
  eligibility: all(residentOf("jharkhand"), when("area", "eq", "rural"), isFalse("pucca")),

  details: {
    en: [
      "Abua Awas Yojana is Jharkhand's own housing scheme for poor rural families. It was started for families who are homeless or live in kutcha or broken-down houses but did not get a house under PM Awas Yojana-Gramin.",
      "Each selected family gets ₹2 lakh, paid in five instalments as the house is built. The Rural Development Department runs it and tracks each house with geo-tagged photos.",
      "Against a target of 6.5 lakh houses up to 2024-25, about 6.33 lakh had been sanctioned and about 1.89 lakh finished by early 2026. The 2026-27 budget sets aside ₹4,100 crore mainly to complete the houses already sanctioned.",
    ],
    hi: [
      "अबुआ आवास योजना ग़रीब ग्रामीण परिवारों के लिए झारखंड सरकार की अपनी आवास योजना है। यह उन परिवारों के लिए शुरू हुई जो बेघर हैं या कच्चे या टूटे-फूटे घर में रहते हैं, पर जिन्हें प्रधानमंत्री आवास योजना-ग्रामीण में घर नहीं मिला।",
      "हर चुने गए परिवार को ₹2 लाख मिलते हैं, जो घर बनने के साथ पाँच किस्तों में दिए जाते हैं। यह योजना ग्रामीण विकास विभाग चलाता है और हर घर की निगरानी जियो-टैग फ़ोटो से होती है।",
      "2024-25 तक 6.5 लाख घरों के लक्ष्य में से 2026 की शुरुआत तक लगभग 6.33 लाख घर स्वीकृत और लगभग 1.89 लाख पूरे हो चुके थे। 2026-27 के बजट में ₹4,100 करोड़ रखे गए हैं, मुख्य रूप से पहले से स्वीकृत घर पूरे कराने के लिए।",
    ],
  },
  benefits: {
    en: ["₹2 lakh to build a pucca house.", "Paid in five instalments into your bank account as construction moves ahead."],
    hi: ["पक्का घर बनाने के लिए ₹2 लाख।", "निर्माण आगे बढ़ने के साथ पाँच किस्तों में पैसा आपके बैंक खाते में आता है।"],
  },
  eligibilityText: {
    en: [
      "A poor family living in a village in Jharkhand.",
      "Homeless, or living in a kutcha or broken-down house.",
      "Has not got a house under PM Awas Yojana-Gramin or another government housing scheme.",
      "Selection is through the gram sabha and the list approved by the Rural Development Department.",
    ],
    hi: [
      "झारखंड के गाँव में रहने वाला ग़रीब परिवार।",
      "बेघर हो, या कच्चे या टूटे-फूटे घर में रहता हो।",
      "प्रधानमंत्री आवास योजना-ग्रामीण या किसी दूसरी सरकारी आवास योजना में घर न मिला हो।",
      "चयन ग्राम सभा और ग्रामीण विकास विभाग की स्वीकृत सूची से होता है।",
    ],
  },
  exclusions: {
    en: ["Families that already own a pucca house.", "Families that have already got a house under PMAY-G or another government housing scheme.", "Urban families (towns have separate housing schemes)."],
    hi: ["जिन परिवारों के पास पहले से पक्का घर है।", "जिन्हें PMAY-G या किसी दूसरी सरकारी आवास योजना में पहले ही घर मिल चुका है।", "शहरी परिवार (शहरों के लिए अलग आवास योजनाएँ हैं)।"],
  },
  applicationProcess: {
    offline: {
      en: [
        "Ask your panchayat secretary, Mukhiya or the Block Development Office whether new names are being added to the Abua Awas list.",
        "Get your name proposed and approved in the gram sabha.",
        "Once sanctioned, build in stages. Each instalment is released after the stage is checked and geo-tagged.",
      ],
      hi: [
        "अपने पंचायत सचिव, मुखिया या प्रखंड विकास कार्यालय से पूछें कि अबुआ आवास सूची में नए नाम जोड़े जा रहे हैं या नहीं।",
        "ग्राम सभा में अपना नाम प्रस्तावित और स्वीकृत करवाएँ।",
        "स्वीकृति के बाद घर चरणों में बनाएँ। हर चरण की जाँच और जियो-टैगिंग के बाद अगली किस्त जारी होती है।",
      ],
    },
  },
  documents: {
    en: ["Aadhaar card", "Bank passbook", "Ration card", "Job card (MGNREGA), if you have one", "Proof of land for the house"],
    hi: ["आधार कार्ड", "बैंक पासबुक", "राशन कार्ड", "मनरेगा जॉब कार्ड, अगर हो", "घर की ज़मीन का सबूत"],
  },
  faqs: [
    {
      q: { en: "Can I still apply for Abua Awas?", hi: "क्या अब भी अबुआ आवास के लिए आवेदन हो सकता है?" },
      a: {
        en: "The 2026-27 budget mainly funds houses already sanctioned. Ask your block office whether a new list is being prepared before you apply.",
        hi: "2026-27 का बजट मुख्य रूप से पहले से स्वीकृत घरों के लिए है। आवेदन से पहले अपने प्रखंड कार्यालय से पूछें कि नई सूची बन रही है या नहीं।",
      },
    },
    {
      q: { en: "I am on the PMAY-G waiting list. Can I get Abua Awas?", hi: "मैं PMAY-G की प्रतीक्षा सूची में हूँ। क्या मुझे अबुआ आवास मिल सकता है?" },
      a: {
        en: "Abua Awas is for families not covered by PMAY-G. You can get a house under only one of the two schemes.",
        hi: "अबुआ आवास उन परिवारों के लिए है जो PMAY-G में नहीं आते। दोनों में से सिर्फ़ एक ही योजना में घर मिल सकता है।",
      },
    },
  ],

  officialUrl: "https://aay.jharkhand.gov.in/",
  sources: ["https://aay.jharkhand.gov.in/", "https://finance.jharkhand.gov.in/pdf/Budget_2026_27/Budget_Speech.pdf"],
  lastVerified: "2026-10-06",
  launchedYear: 2023,
  status: "check-status",
};

export default scheme;
