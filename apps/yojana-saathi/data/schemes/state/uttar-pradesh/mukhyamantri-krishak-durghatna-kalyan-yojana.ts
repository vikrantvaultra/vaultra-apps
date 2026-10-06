import { all, ageBetween, labelled, residentOf, when } from "@/lib/engine/build";
import type { Scheme } from "@/lib/types";

const scheme: Scheme = {
  slug: "mukhyamantri-krishak-durghatna-kalyan-yojana",
  tier: "full",
  name: { en: "Mukhyamantri Krishak Durghatna Kalyan Yojana", hi: "मुख्यमंत्री कृषक दुर्घटना कल्याण योजना" },
  aka: ["MKDKY", "Kisan Durghatna Yojana", "UP farmer accident scheme"],
  shortDescription: {
    en: "If a farmer or farm family member in Uttar Pradesh dies in an accident, the family gets up to ₹5 lakh. Accidental disability is also covered. No premium is charged.",
    hi: "उत्तर प्रदेश में किसान या उसके परिवार के सदस्य की दुर्घटना में मौत पर परिवार को ₹5 लाख तक मिलते हैं। दुर्घटना में दिव्यांगता भी कवर है। कोई प्रीमियम नहीं।",
  },
  level: "state",
  state: "uttar-pradesh",
  department: {
    en: "Revenue Department, Government of Uttar Pradesh",
    hi: "राजस्व विभाग, उत्तर प्रदेश सरकार",
  },
  categories: ["agriculture", "pension-insurance"],
  tags: ["farmer", "accident", "death", "kisan", "insurance", "disability", "uttar pradesh"],
  benefitType: "insurance",
  isDBT: true,
  value: { amount: 500_000, period: "one-time", kind: "cover" },
  ageRange: { min: 18, max: 70 },
  kundliHouse: "farming",
  eligibility: all(
    residentOf("uttar-pradesh"),
    ...ageBetween(18, 70),
    labelled(when("occupation", "in", ["farmer", "agri-labourer"]), {
      en: "You farm land (as owner, co-owner or sharecropper) or belong to a farming family",
      hi: "आप खेती करते हों (मालिक, सह-खातेदार या बटाईदार) या किसान परिवार से हों",
    }),
  ),

  details: {
    en: [
      "Mukhyamantri Krishak Durghatna Kalyan Yojana is Uttar Pradesh's accident relief for farming families. It began on 14 September 2019.",
      "If a farmer or a member of the farmer's family dies or is disabled in an accident, the family gets money from the state. Farmers do not need to enrol or pay any premium. The family applies after the accident.",
      "The Revenue Department runs it through the district administration. The state set aside ₹1,150 crore for it in the 2026-27 budget.",
    ],
    hi: [
      "मुख्यमंत्री कृषक दुर्घटना कल्याण योजना उत्तर प्रदेश में किसान परिवारों के लिए दुर्घटना राहत योजना है। यह 14 सितंबर 2019 से शुरू हुई।",
      "अगर किसान या उसके परिवार के किसी सदस्य की दुर्घटना में मौत हो जाए या वह दिव्यांग हो जाए, तो परिवार को राज्य से पैसा मिलता है। किसान को न नाम लिखवाना है, न कोई प्रीमियम देना है। दुर्घटना के बाद परिवार आवेदन करता है।",
      "राजस्व विभाग इसे ज़िला प्रशासन के ज़रिए चलाता है। 2026-27 के बजट में इसके लिए ₹1,150 करोड़ रखे गए हैं।",
    ],
  },
  benefits: {
    en: [
      "₹5 lakh to the family if the farmer or family member dies in an accident.",
      "₹5 lakh for 100% disability, such as losing both hands, both feet or both eyes.",
      "₹2.5 lakh for losing one hand, one foot or one eye, or for permanent disability above 50%.",
      "₹1.75 lakh for permanent disability between 25% and 50%.",
    ],
    hi: [
      "दुर्घटना में किसान या परिवार के सदस्य की मौत पर परिवार को ₹5 लाख।",
      "100% दिव्यांगता पर ₹5 लाख, जैसे दोनों हाथ, दोनों पैर या दोनों आँखें खोना।",
      "एक हाथ, एक पैर या एक आँख खोने पर, या 50% से ज़्यादा स्थायी दिव्यांगता पर ₹2.5 लाख।",
      "25% से 50% तक स्थायी दिव्यांगता पर ₹1.75 लाख।",
    ],
  },
  eligibilityText: {
    en: [
      "The person was aged 18 to 70 years at the time of the accident.",
      "Is a farmer whose name is in the land records (khatauni) as owner or co-owner, or a member of that farmer's family.",
      "Sharecroppers and people who farm leased land are also covered.",
      "The death or disability was caused by an accident, not by illness.",
    ],
    hi: [
      "दुर्घटना के समय व्यक्ति की उम्र 18 से 70 साल हो।",
      "किसान जिसका नाम खतौनी में मालिक या सह-खातेदार के रूप में हो, या उस किसान के परिवार का सदस्य।",
      "बटाईदार और पट्टे पर खेती करने वाले भी शामिल हैं।",
      "मौत या दिव्यांगता किसी दुर्घटना से हुई हो, बीमारी से नहीं।",
    ],
  },
  exclusions: {
    en: [
      "Suicide, or injury caused on purpose.",
      "Deaths from illness, not an accident.",
    ],
    hi: [
      "आत्महत्या, या जानबूझकर पहुँचाई गई चोट।",
      "बीमारी से हुई मौत, जो दुर्घटना नहीं है।",
    ],
  },
  applicationProcess: {
    offline: {
      en: [
        "The family should apply at the tehsil office (SDM) as soon as possible after the accident, and within the time limit the district gives.",
        "Fill in the claim form and attach the post-mortem report, FIR or panchnama, death certificate and land records.",
        "The Lekhpal and tehsil verify the claim, and the District Magistrate approves it. The money is sent to the heir's bank account.",
      ],
      hi: [
        "परिवार दुर्घटना के बाद जल्द से जल्द, ज़िले की बताई समय-सीमा के अंदर, तहसील (SDM) कार्यालय में आवेदन करे।",
        "दावा फ़ॉर्म भरें और पोस्टमार्टम रिपोर्ट, FIR या पंचनामा, मृत्यु प्रमाण पत्र और खतौनी साथ लगाएँ।",
        "लेखपाल और तहसील दावे की जाँच करते हैं, और ज़िलाधिकारी मंज़ूरी देते हैं। पैसा वारिस के बैंक खाते में भेजा जाता है।",
      ],
    },
  },
  documents: {
    en: [
      "Claim form",
      "Khatauni (land record) or proof of farming as a sharecropper",
      "Death certificate and post-mortem report (in case of death)",
      "FIR or panchnama of the accident",
      "Disability certificate from the CMO (in case of disability)",
      "Aadhaar and bank passbook of the heir or injured person",
    ],
    hi: [
      "दावा फ़ॉर्म",
      "खतौनी या बटाईदार के रूप में खेती का सबूत",
      "मृत्यु प्रमाण पत्र और पोस्टमार्टम रिपोर्ट (मौत होने पर)",
      "दुर्घटना की FIR या पंचनामा",
      "CMO का दिव्यांगता प्रमाण पत्र (दिव्यांगता होने पर)",
      "वारिस या घायल व्यक्ति का आधार और बैंक पासबुक",
    ],
  },
  faqs: [
    {
      q: { en: "Do we need to register before an accident?", hi: "क्या दुर्घटना से पहले रजिस्ट्रेशन कराना होगा?" },
      a: {
        en: "No. Every eligible farming family is covered automatically. You apply only after an accident happens.",
        hi: "नहीं। हर पात्र किसान परिवार अपने-आप कवर है। आवेदन सिर्फ़ दुर्घटना होने के बाद करना है।",
      },
    },
    {
      q: { en: "Who in the family gets the money?", hi: "परिवार में पैसा किसे मिलता है?" },
      a: {
        en: "In case of death, the money goes to the legal heir, as verified by the tehsil. In case of disability, it goes to the injured person.",
        hi: "मौत होने पर पैसा क़ानूनी वारिस को मिलता है, जिसकी जाँच तहसील करती है। दिव्यांगता होने पर पैसा घायल व्यक्ति को मिलता है।",
      },
    },
  ],

  officialUrl: "https://jhansi.nic.in/dsc-manual-for-mukhyamantri-krishak-durghatna-kalyan-yojana/",
  sources: [
    "https://kasganj.nic.in/document/mukhmantri-krishak-durghatna-kalyan-yojana-mkdky-form-g-o/",
    "https://jhansi.nic.in/dsc-manual-for-mukhyamantri-krishak-durghatna-kalyan-yojana/",
    "https://thecsrjournal.in/cm-yogi-kisan-durghatna-kalyan-yojana-budget-1150-crore-hindi",
    "https://www.deccanherald.com/national/north-and-central/up-cabinet-nod-to-scheme-to-give-financial-help-to-kin-of-farmers-who-die-working-in-fields-796939.html",
  ],
  lastVerified: "2026-10-06",
  launchedYear: 2019,
  status: "active",
};

export default scheme;
