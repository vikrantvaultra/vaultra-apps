import { all, ageBetween, any, incomeUpTo, labelled, residentOf, when } from "@/lib/engine/build";
import type { Scheme } from "@/lib/types";

const scheme: Scheme = {
  slug: "swavalambi-sarathi",
  tier: "compact",
  name: { en: "Swavalambi Sarathi", hi: "स्वावलंबी सारथी योजना" },
  aka: ["Savalambi Sarathi", "taxi subsidy Karnataka", "goods vehicle subsidy SC"],
  shortDescription: {
    en: "SC youth in Karnataka get a subsidy of 75% (up to ₹4 lakh) to buy a taxi or goods vehicle, or 70% (up to ₹2 lakh) for another self-employment unit, with a bank loan.",
    hi: "कर्नाटक के SC युवाओं को टैक्सी या माल ढोने वाली गाड़ी ख़रीदने पर 75% (₹4 लाख तक) या किसी दूसरे स्वरोज़गार के लिए 70% (₹2 लाख तक) सब्सिडी मिलती है, साथ में बैंक लोन।",
  },
  level: "state",
  state: "karnataka",
  department: {
    en: "Dr. B.R. Ambedkar Development Corporation, Social Welfare Department, Government of Karnataka",
    hi: "डॉ. बी.आर. आंबेडकर विकास निगम, समाज कल्याण विभाग, कर्नाटक सरकार",
  },
  categories: ["business", "skills-employment"],
  tags: ["taxi", "vehicle subsidy", "self employment", "sc", "loan", "karnataka"],
  benefitType: "composite",
  isDBT: false,
  ageRange: { min: 21, max: 56 },
  kundliHouse: "business",
  eligibility: all(
    residentOf("karnataka"),
    when("caste", "eq", "sc"),
    ...ageBetween(21, 56),
    labelled(
      any(all(when("area", "eq", "rural"), incomeUpTo(150_000)), all(when("area", "eq", "urban"), incomeUpTo(200_000))),
      { en: "Family income up to ₹1.5 lakh a year (rural) or ₹2 lakh (urban)", hi: "परिवार की सालाना आय ₹1.5 लाख तक (गाँव) या ₹2 लाख तक (शहर)" },
    ),
  ),

  details: {
    en: [
      "Swavalambi Sarathi helps Scheduled Caste youth become their own boss by owning a taxi, goods carrier or other small business. The Dr. B.R. Ambedkar Development Corporation gives a large subsidy, and a bank lends the rest.",
      "Similar versions are run by other Karnataka corporations for ST, backward class and minority applicants, with their own rules.",
    ],
    hi: [
      "स्वावलंबी सारथी अनुसूचित जाति के युवाओं को टैक्सी, माल ढोने वाली गाड़ी या कोई छोटा कारोबार ख़रीदकर अपना मालिक बनने में मदद करती है। डॉ. बी.आर. आंबेडकर विकास निगम बड़ी सब्सिडी देता है और बाक़ी पैसा बैंक लोन के रूप में देता है।",
      "कर्नाटक के दूसरे निगम ST, पिछड़ा वर्ग और अल्पसंख्यक आवेदकों के लिए अपने नियमों के साथ ऐसी ही योजनाएँ चलाते हैं।",
    ],
  },
  benefits: {
    en: [
      "Taxi or goods vehicle (yellow board): subsidy of 75% of the cost, up to ₹4 lakh.",
      "Other self-employment units: subsidy of 70% of the cost, up to ₹2 lakh.",
      "The rest of the cost comes as a bank loan.",
    ],
    hi: [
      "टैक्सी या माल ढोने वाली गाड़ी (पीली नंबर प्लेट): लागत का 75%, ₹4 लाख तक सब्सिडी।",
      "दूसरे स्वरोज़गार: लागत का 70%, ₹2 लाख तक सब्सिडी।",
      "बाक़ी लागत बैंक लोन से मिलती है।",
    ],
  },
  eligibilityText: {
    en: [
      "Belongs to a Scheduled Caste and lives in Karnataka.",
      "Aged 21 to 56 years.",
      "Family income up to ₹1.5 lakh a year in rural areas or ₹2 lakh in urban areas.",
      "Has a valid driving licence (for a vehicle) or space to set up the unit.",
    ],
    hi: [
      "अनुसूचित जाति से हो और कर्नाटक में रहता हो।",
      "उम्र 21 से 56 साल।",
      "परिवार की सालाना आय गाँव में ₹1.5 लाख तक या शहर में ₹2 लाख तक।",
      "गाड़ी के लिए वैध ड्राइविंग लाइसेंस हो, या इकाई लगाने के लिए जगह हो।",
    ],
  },
  applicationProcess: {
    online: {
      en: [
        "When the corporation opens applications, apply online through its website or Seva Sindhu.",
        "Upload your caste and income certificates, Aadhaar, driving licence and bank details.",
        "After selection, the bank sanctions the loan and the corporation releases the subsidy to the bank.",
      ],
      hi: [
        "जब निगम आवेदन खोले, उसकी वेबसाइट या सेवा सिंधु से ऑनलाइन आवेदन करें।",
        "जाति और आय प्रमाण पत्र, आधार, ड्राइविंग लाइसेंस और बैंक विवरण अपलोड करें।",
        "चयन के बाद बैंक लोन मंज़ूर करता है और निगम सब्सिडी बैंक को भेजता है।",
      ],
    },
  },

  officialUrl: "https://adcl.karnataka.gov.in/32/savalambi-sarathi/kn",
  sources: ["https://adcl.karnataka.gov.in/32/savalambi-sarathi/kn", "https://adcl.karnataka.gov.in/"],
  lastVerified: "2026-10-06",
  launchedYear: 2023,
  status: "check-status",
};

export default scheme;
