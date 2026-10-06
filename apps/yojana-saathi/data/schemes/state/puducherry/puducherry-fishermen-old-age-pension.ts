import { all, labelled, minAge, residentOf, when } from "@/lib/engine/build";
import type { Scheme } from "@/lib/types";

const scheme: Scheme = {
  slug: "puducherry-fishermen-old-age-pension",
  tier: "compact",
  overlapGroup: "old-age-pension",
  name: { en: "Old Age Pension to Fishermen (Puducherry)", hi: "मछुआरों को वृद्धावस्था पेंशन (पुडुचेरी)" },
  aka: ["Puducherry fishermen pension"],
  shortDescription: {
    en: "Elderly fishermen in Puducherry who are members of a fishermen cooperative society get a monthly old-age pension from the Fisheries Department. Check the current amount.",
    hi: "पुडुचेरी के बुज़ुर्ग मछुआरे, जो मछुआरा सहकारी समिति के सदस्य हैं, मत्स्य विभाग से हर महीने वृद्धावस्था पेंशन पाते हैं। मौजूदा राशि पता करें।",
  },
  level: "state",
  state: "puducherry",
  department: {
    en: "Department of Fisheries and Fishermen Welfare, Government of Puducherry",
    hi: "मत्स्य पालन एवं मछुआरा कल्याण विभाग, पुडुचेरी सरकार",
  },
  categories: ["agriculture", "pension-insurance"],
  tags: ["fishermen", "fisher", "old age pension", "pension", "puducherry"],
  benefitType: "pension",
  isDBT: false,
  ageRange: { min: 50 },
  kundliHouse: "senior",
  eligibility: all(
    residentOf("puducherry"),
    labelled(when("occupation", "eq", "fisher"), { en: "You are a fisher", hi: "आप मछुआरे हैं" }),
    labelled(minAge(50), { en: "Aged 50 or above (as per the department's scheme note)", hi: "उम्र 50 साल या ज़्यादा (विभाग की योजना-सूचना के अनुसार)" }),
  ),

  details: {
    en: [
      "The Department of Fisheries and Fishermen Welfare pays a monthly old-age pension to elderly members of the fishing community as part of its welfare and relief scheme for fishermen.",
      "The 2025-26 budget added 1,000 more elderly fishermen and set aside ₹36.40 crore for the scheme. The department's scheme note gives an old pension rate and an age of 50; we could not find the current monthly amount on an official page, so none is shown here.",
    ],
    hi: [
      "मत्स्य पालन एवं मछुआरा कल्याण विभाग मछुआरों की कल्याण और राहत योजना के तहत मछुआरा समुदाय के बुज़ुर्ग सदस्यों को हर महीने वृद्धावस्था पेंशन देता है।",
      "2025-26 के बजट में 1,000 और बुज़ुर्ग मछुआरों को जोड़ा गया और योजना के लिए ₹36.40 करोड़ रखे गए। विभाग की योजना-सूचना में पुरानी पेंशन दर और 50 साल की उम्र दी गई है; मौजूदा मासिक राशि हमें किसी सरकारी पेज पर नहीं मिली, इसलिए यहाँ राशि नहीं दिखाई गई है।",
    ],
  },
  benefits: {
    en: ["A monthly old-age pension.", "Funeral assistance is given when a pensioner dies."],
    hi: ["हर महीने वृद्धावस्था पेंशन।", "पेंशनभोगी की मृत्यु पर अंतिम संस्कार के लिए सहायता दी जाती है।"],
  },
  eligibilityText: {
    en: [
      "A fisherman or fisherwoman resident in Puducherry by birth or domicile.",
      "A member of a fishermen cooperative society, actively engaged in fishing.",
      "Aged 50 or above as per the department's scheme note, with a medical certificate on health condition.",
    ],
    hi: [
      "जन्म से या अधिवास से पुडुचेरी का निवासी मछुआरा या मछुआरिन।",
      "मछुआरा सहकारी समिति का सदस्य, जो सक्रिय रूप से मछली पकड़ने का काम करता हो।",
      "विभाग की योजना-सूचना के अनुसार उम्र 50 साल या ज़्यादा, और सेहत के बारे में मेडिकल प्रमाण पत्र।",
    ],
  },
  applicationProcess: {
    offline: {
      en: [
        "Apply to the Deputy Director of Fisheries and Fishermen Welfare (Welfare), Puducherry, or the Deputy/Assistant Director of Fisheries in Karaikal, Mahe or Yanam.",
        "Attach proof of residence, your cooperative society membership, age proof and a medical certificate.",
      ],
      hi: [
        "उप निदेशक, मत्स्य पालन एवं मछुआरा कल्याण (कल्याण), पुडुचेरी, या कराईकल, माहे या यानम में मत्स्य विभाग के उप/सहायक निदेशक को आवेदन दें।",
        "निवास का सबूत, सहकारी समिति की सदस्यता, उम्र का सबूत और मेडिकल प्रमाण पत्र लगाएँ।",
      ],
    },
  },

  officialUrl: "https://fisheries.py.gov.in/state-plan-scheme",
  sources: [
    "https://fisheries.py.gov.in/sites/default/files/fisheries-state-plan-schemes.pdf",
    "https://www.py.gov.in/sites/default/files/cm-speech-2025-26-english.pdf",
    "https://www.py.gov.in/sites/default/files/cmfile2026eng.pdf",
  ],
  lastVerified: "2026-10-06",
  launchedYear: 2025,
  status: "check-status",
};

export default scheme;
