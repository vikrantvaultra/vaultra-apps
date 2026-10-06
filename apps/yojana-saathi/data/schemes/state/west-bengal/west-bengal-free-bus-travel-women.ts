import { all, female, residentOf } from "@/lib/engine/build";
import type { Scheme } from "@/lib/types";

const scheme: Scheme = {
  slug: "west-bengal-free-bus-travel-women",
  tier: "compact",
  name: { en: "Free Bus Travel for Women (West Bengal)", hi: "महिलाओं के लिए मुफ़्त बस यात्रा (पश्चिम बंगाल)" },
  aka: ["Pink Card", "free bus for women"],
  shortDescription: {
    en: "Since 1 June 2026, all women living in West Bengal can travel free on state-run government buses.",
    hi: "1 जून 2026 से पश्चिम बंगाल में रहने वाली सभी महिलाएँ राज्य सरकार की बसों में मुफ़्त सफ़र कर सकती हैं।",
  },
  level: "state",
  state: "west-bengal",
  department: { en: "Transport Department, Government of West Bengal", hi: "परिवहन विभाग, पश्चिम बंगाल सरकार" },
  categories: ["women-child", "social-welfare"],
  tags: ["free bus", "women", "transport", "pink card", "travel", "west bengal"],
  benefitType: "in-kind",
  isDBT: false,
  kundliHouse: "women-family",
  eligibility: all(residentOf("west-bengal"), female()),

  details: {
    en: [
      "The West Bengal government waived bus fares for women from 1 June 2026. Any woman living in the state can travel free on buses run by the state transport corporations.",
      "The 2026-27 budget set aside ₹550 crore for this and said a 'Pink Card' will be introduced for women passengers.",
    ],
    hi: [
      "पश्चिम बंगाल सरकार ने 1 जून 2026 से महिलाओं का बस किराया माफ़ कर दिया है। राज्य में रहने वाली कोई भी महिला राज्य परिवहन निगमों की बसों में मुफ़्त सफ़र कर सकती है।",
      "2026-27 के बजट में इसके लिए ₹550 करोड़ रखे गए हैं और बताया गया है कि महिला यात्रियों के लिए 'पिंक कार्ड' लाया जाएगा।",
    ],
  },
  benefits: {
    en: ["No fare on state-run government buses.", "No limit on the number of trips."],
    hi: ["राज्य सरकार की बसों में कोई किराया नहीं।", "सफ़र की गिनती पर कोई रोक नहीं।"],
  },
  eligibilityText: {
    en: ["Any woman living in West Bengal.", "Valid on buses run by the state transport corporations, not private buses."],
    hi: ["पश्चिम बंगाल में रहने वाली कोई भी महिला।", "राज्य परिवहन निगमों की बसों में मान्य, निजी बसों में नहीं।"],
  },
  applicationProcess: {
    offline: {
      en: [
        "No application is needed. Board a state-run bus and tell the conductor you are a woman resident of West Bengal.",
        "Carry an identity card with a West Bengal address in case you are asked.",
        "Once the Pink Card is launched, follow the Transport Department's instructions to get one.",
      ],
      hi: [
        "कोई आवेदन नहीं करना है। सरकारी बस में चढ़ें और कंडक्टर को बताएँ कि आप पश्चिम बंगाल की निवासी महिला हैं।",
        "पूछे जाने पर दिखाने के लिए पश्चिम बंगाल के पते वाला पहचान पत्र साथ रखें।",
        "पिंक कार्ड शुरू होने पर उसे बनवाने के लिए परिवहन विभाग के निर्देश मानें।",
      ],
    },
  },

  officialUrl: "https://transport.wb.gov.in/",
  sources: ["https://finance.wb.gov.in/writereaddata/Budget_Speech/2026_English.pdf"],
  lastVerified: "2026-10-06",
  launchedYear: 2026,
  status: "active",
};

export default scheme;
