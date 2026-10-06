import { all, labelled, residentOf, when } from "@/lib/engine/build";
import type { Scheme } from "@/lib/types";

const scheme: Scheme = {
  slug: "vidiyal-payanam",
  name: { en: "Magalir Vettri Payanam (formerly Vidiyal Payanam)", hi: "मगलिर वेट्री पयणम (पहले विडियल पयणम)" },
  aka: ["Vettri Payanam", "Vetri Payanam", "Vidiyal Payanam", "Kalaignar Magalir Vidiyal Payanam", "free bus Tamil Nadu"],
  shortDescription: {
    en: "Women and transgender persons travel free in Tamil Nadu government buses. From 2 October 2026 this covers town buses plus many Express, LSS, Deluxe and ordinary mofussil buses.",
    hi: "तमिलनाडु की सरकारी बसों में महिलाएँ और ट्रांसजेंडर व्यक्ति मुफ़्त सफ़र करते हैं। 2 अक्टूबर 2026 से इसमें टाउन बसों के साथ कई एक्सप्रेस, LSS, डीलक्स और साधारण मोफ़ुसिल बसें भी शामिल हैं।",
  },
  level: "state",
  state: "tamil-nadu",
  department: { en: "Transport Department, Government of Tamil Nadu", hi: "परिवहन विभाग, तमिलनाडु सरकार" },
  categories: ["women-child", "social-welfare"],
  tags: ["free bus", "women", "transgender", "transport", "town bus", "mtc"],
  benefitType: "in-kind",
  isDBT: false,
  kundliHouse: "women-family",
  eligibility: all(
    residentOf("tamil-nadu"),
    labelled(when("gender", "in", ["female", "transgender"]), {
      en: "You are a woman or a transgender person",
      hi: "आप महिला या ट्रांसजेंडर व्यक्ति हैं",
    }),
  ),

  details: {
    en: [
      "Tamil Nadu started free travel for women in ordinary government town buses in 2021 under the name Vidiyal Payanam. It was also open to transgender persons, and persons with disabilities have a separate free-travel facility.",
      "On 2 October 2026 the new government renamed it Magalir Vettri Payanam and widened it. Free travel now also covers Express, LSS and Deluxe buses in city and urban areas, ordinary mofussil buses between districts, and ordinary buses on hill routes over 40 km, across about 12,700 buses of seven state transport corporations.",
      "There is no income limit and no limit on trips. You get a zero-fare ticket from the conductor.",
    ],
    hi: [
      "तमिलनाडु ने 2021 में 'विडियल पयणम' नाम से सरकारी साधारण टाउन बसों में महिलाओं के लिए मुफ़्त सफ़र शुरू किया था। ट्रांसजेंडर व्यक्ति भी इसमें शामिल थे, और दिव्यांगजनों के लिए मुफ़्त सफ़र की अलग सुविधा है।",
      "2 अक्टूबर 2026 को नई सरकार ने इसका नाम बदलकर 'मगलिर वेट्री पयणम' कर दिया और इसे बढ़ाया। अब शहरों और नगरों की एक्सप्रेस, LSS और डीलक्स बसें, ज़िलों के बीच चलने वाली साधारण मोफ़ुसिल बसें, और 40 किलोमीटर से लंबे पहाड़ी रूट की साधारण बसें भी मुफ़्त हैं। सात सरकारी परिवहन निगमों की लगभग 12,700 बसें इसमें आती हैं।",
      "कोई आय सीमा नहीं है और सफ़र की संख्या पर कोई रोक नहीं। कंडक्टर से शून्य किराए वाला टिकट मिलता है।",
    ],
  },
  benefits: {
    en: [
      "Free travel in ordinary town buses of Tamil Nadu's state transport corporations, including MTC in Chennai.",
      "From 2 October 2026: also free in Express, LSS and Deluxe buses in city and urban areas, ordinary mofussil buses and ordinary buses on hill routes beyond 40 km.",
      "No income limit and no cap on the number of trips.",
    ],
    hi: [
      "तमिलनाडु के सरकारी परिवहन निगमों की साधारण टाउन बसों में मुफ़्त सफ़र, चेन्नई की MTC बसें भी शामिल।",
      "2 अक्टूबर 2026 से: शहरों और नगरों की एक्सप्रेस, LSS और डीलक्स बसें, साधारण मोफ़ुसिल बसें और 40 किलोमीटर से लंबे पहाड़ी रूट की साधारण बसें भी मुफ़्त।",
      "कोई आय सीमा नहीं और सफ़र की संख्या पर कोई रोक नहीं।",
    ],
  },
  eligibilityText: {
    en: [
      "You are a woman or a transgender person.",
      "You travel on a covered Tamil Nadu government bus service.",
    ],
    hi: [
      "आप महिला या ट्रांसजेंडर व्यक्ति हैं।",
      "आप तमिलनाडु की किसी शामिल सरकारी बस सेवा में सफ़र करते हैं।",
    ],
  },
  exclusions: {
    en: [
      "Only the bus types listed above are free. Other services, such as AC buses, are not part of the scheme as announced.",
      "Private buses are not covered.",
      "Free travel for persons with disabilities runs under separate rules (UDID card, ordinary buses and set routes); the announced extension to Express, LSS and Deluxe buses for them was not yet in force at our last check.",
    ],
    hi: [
      "सिर्फ़ ऊपर बताई गई बसें मुफ़्त हैं। AC बसों जैसी दूसरी सेवाएँ घोषित योजना में शामिल नहीं हैं।",
      "निजी बसें शामिल नहीं हैं।",
      "दिव्यांगजनों का मुफ़्त सफ़र अलग नियमों से चलता है (UDID कार्ड, साधारण बसें और तय रूट); उनके लिए एक्सप्रेस, LSS और डीलक्स बसों में विस्तार की घोषणा हमारी पिछली जाँच तक लागू नहीं हुई थी।",
    ],
  },
  applicationProcess: {
    offline: {
      en: [
        "Board a covered Tamil Nadu government bus.",
        "Ask the conductor for the free (zero-fare) ticket. Transgender passengers may be asked for their Transgender Welfare Board ID.",
        "Keep the ticket with you for the whole journey.",
      ],
      hi: [
        "तमिलनाडु की किसी शामिल सरकारी बस में चढ़ें।",
        "कंडक्टर से मुफ़्त (शून्य किराए वाला) टिकट माँगें। ट्रांसजेंडर यात्रियों से ट्रांसजेंडर कल्याण बोर्ड का पहचान पत्र माँगा जा सकता है।",
        "पूरे सफ़र में टिकट अपने पास रखें।",
      ],
    },
  },
  documents: {
    en: ["No document needed for women in most cases", "Transgender Welfare Board ID card (for transgender passengers)"],
    hi: ["महिलाओं के लिए ज़्यादातर कोई काग़ज़ ज़रूरी नहीं", "ट्रांसजेंडर कल्याण बोर्ड पहचान पत्र (ट्रांसजेंडर यात्रियों के लिए)"],
  },
  faqs: [
    {
      q: { en: "Is Vettri Payanam a new scheme?", hi: "क्या वेट्री पयणम नई योजना है?" },
      a: {
        en: "It is the renamed and expanded version of Vidiyal Payanam. The free town-bus travel continues, and more bus types were added from 2 October 2026.",
        hi: "यह विडियल पयणम का नया नाम और बढ़ाया हुआ रूप है। टाउन बसों में मुफ़्त सफ़र जारी है, और 2 अक्टूबर 2026 से और तरह की बसें जोड़ी गई हैं।",
      },
    },
    {
      q: { en: "How do I know if a bus is free?", hi: "कैसे पता चले कि बस मुफ़्त है?" },
      a: {
        en: "If unsure, ask the conductor before boarding; AC buses are not free.",
        hi: "शक हो तो चढ़ने से पहले कंडक्टर से पूछ लें; AC बसें मुफ़्त नहीं हैं।",
      },
    },
  ],

  officialUrl: "https://www.tnsta.gov.in/",
  sources: [
    "https://www.tnsta.gov.in/",
    "https://thesouthfirst.com/tamilnadu/vettri-payanam-cm-vijay-launches-the-expanded-free-bus-travel-scheme/",
    "https://www.dtnext.in/news/tamilnadu/what-about-us-ask-pwds-on-vettri-payanam-scheme-expansion",
  ],
  lastVerified: "2026-10-06",
  launchedYear: 2021,
  status: "check-status",
};

export default scheme;
