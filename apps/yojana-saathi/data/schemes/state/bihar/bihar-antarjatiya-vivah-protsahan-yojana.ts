import { all, residentOf } from "@/lib/engine/build";
import type { Scheme } from "@/lib/types";

const scheme: Scheme = {
  slug: "bihar-antarjatiya-vivah-protsahan-yojana",
  tier: "compact",
  name: { en: "Mukhyamantri Antarjatiya Vivah Protsahan Anudan Yojana", hi: "मुख्यमंत्री अंतरजातीय विवाह प्रोत्साहन अनुदान योजना" },
  aka: ["Inter-caste marriage scheme Bihar", "AVPAY"],
  shortDescription: {
    en: "Couples in Bihar who marry across castes can get a one-time incentive from the state to encourage social equality.",
    hi: "बिहार में अंतरजातीय विवाह करने वाले जोड़ों को सामाजिक बराबरी बढ़ाने के लिए राज्य सरकार से एक बार प्रोत्साहन राशि मिल सकती है।",
  },
  level: "state",
  state: "bihar",
  department: { en: "Social Welfare Department, Government of Bihar", hi: "समाज कल्याण विभाग, बिहार सरकार" },
  categories: ["social-welfare"],
  tags: ["inter caste marriage", "marriage incentive", "couple", "social equality", "bihar"],
  benefitType: "cash",
  isDBT: true,
  kundliHouse: "women-family",
  eligibility: all(residentOf("bihar")),

  details: {
    en: [
      "The Mukhyamantri Antarjatiya Vivah Protsahan Anudan Yojana gives a one-time grant to couples who have an inter-caste marriage, to support them and to help break down caste barriers.",
      "The Social Welfare Department runs it. The grant is released in the wife's name after the marriage and documents are verified at the district level.",
    ],
    hi: [
      "मुख्यमंत्री अंतरजातीय विवाह प्रोत्साहन अनुदान योजना अंतरजातीय विवाह करने वाले जोड़ों को एक बार अनुदान देती है, ताकि उन्हें सहारा मिले और जाति की दीवारें टूटें।",
      "समाज कल्याण विभाग इसे चलाता है। ज़िला स्तर पर शादी और दस्तावेज़ों की जाँच के बाद अनुदान पत्नी के नाम पर जारी होता है।",
    ],
  },
  benefits: {
    en: ["A one-time incentive grant for the couple, released in the wife's name.", "Recent reports put the amount at ₹1 lakh; confirm with your district office."],
    hi: ["जोड़े के लिए एक बार की प्रोत्साहन राशि, जो पत्नी के नाम पर जारी होती है।", "हाल की जानकारी के अनुसार राशि ₹1 लाख है; अपने ज़िला कार्यालय से पुष्टि करें।"],
  },
  eligibilityText: {
    en: [
      "The couple are residents of Bihar.",
      "It is an inter-caste marriage as defined by the scheme.",
      "The bride was at least 18 and the groom at least 21 at marriage.",
      "The marriage is legally registered.",
    ],
    hi: [
      "जोड़ा बिहार का निवासी हो।",
      "योजना की परिभाषा के अनुसार अंतरजातीय विवाह हो।",
      "शादी के समय दुल्हन कम से कम 18 और दूल्हा कम से कम 21 साल का हो।",
      "शादी कानूनी रूप से पंजीकृत हो।",
    ],
  },
  applicationProcess: {
    offline: {
      en: [
        "Register your marriage.",
        "Apply at the RTPS counter of your block or at the district social welfare office with caste certificates of both partners and the marriage certificate.",
        "After district-level approval, the grant is paid.",
      ],
      hi: [
        "अपनी शादी का पंजीकरण कराएँ।",
        "दोनों के जाति प्रमाण पत्र और विवाह प्रमाण पत्र के साथ प्रखंड के RTPS काउंटर या ज़िला समाज कल्याण कार्यालय में आवेदन करें।",
        "ज़िला स्तर पर मंज़ूरी के बाद अनुदान दिया जाता है।",
      ],
    },
  },

  officialUrl: "https://betastate.bihar.gov.in/SocialWelfare/",
  sources: ["https://www.myscheme.gov.in/schemes/avpay", "https://betastate.bihar.gov.in/SocialWelfare/"],
  lastVerified: "2026-10-06",
  launchedYear: 2008,
  status: "check-status",
};

export default scheme;
