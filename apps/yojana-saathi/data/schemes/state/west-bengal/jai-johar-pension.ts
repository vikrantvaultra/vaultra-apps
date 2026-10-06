import { all, minAge, residentOf, when } from "@/lib/engine/build";
import type { Scheme } from "@/lib/types";

const scheme: Scheme = {
  slug: "jai-johar-pension",
  tier: "compact",
  overlapGroup: "old-age-pension",
  name: { en: "Jai Johar (ST Old Age Pension)", hi: "जय जोहार (ST वृद्धावस्था पेंशन)" },
  aka: ["Jai Johar", "Joy Johar", "Jai Bangla"],
  shortDescription: {
    en: "A monthly pension for Scheduled Tribe people in West Bengal aged 60 or more who have little or no regular income, paid straight into their bank account.",
    hi: "पश्चिम बंगाल में 60 साल या उससे ज़्यादा उम्र के अनुसूचित जनजाति के लोगों को, जिनकी नियमित आय कम है या नहीं है, हर महीने सीधे बैंक खाते में पेंशन।",
  },
  level: "state",
  state: "west-bengal",
  department: { en: "Tribal Development Department, Government of West Bengal", hi: "आदिवासी विकास विभाग, पश्चिम बंगाल सरकार" },
  categories: ["pension-insurance", "social-welfare"],
  tags: ["old age pension", "st", "tribal", "adivasi", "senior citizen", "west bengal"],
  benefitType: "pension",
  isDBT: true,
  ageRange: { min: 60 },
  kundliHouse: "senior",
  eligibility: all(residentOf("west-bengal"), when("caste", "in", ["st", "pvtg"]), minAge(60)),

  details: {
    en: [
      "Jai Johar is West Bengal's monthly pension for elderly people from Scheduled Tribe communities. It is part of the state's Jai Bangla family of pension schemes and is run by the Tribal Development Department.",
      "The pension is paid by DBT. The 2026-27 state budget proposed raising pensions for the elderly by ₹500 a month; ask your block or municipality office for the current amount.",
    ],
    hi: [
      "जय जोहार अनुसूचित जनजाति के बुज़ुर्गों के लिए पश्चिम बंगाल की मासिक पेंशन है। यह राज्य की जय बांग्ला पेंशन योजनाओं का हिस्सा है और आदिवासी विकास विभाग इसे चलाता है।",
      "पेंशन DBT से मिलती है। राज्य के 2026-27 के बजट में बुज़ुर्गों की पेंशन ₹500 बढ़ाने का प्रस्ताव है; अभी कितनी राशि मिल रही है, यह अपने ब्लॉक या नगरपालिका कार्यालय से पूछें।",
    ],
  },
  benefits: {
    en: ["A pension every month for life.", "Paid directly into your bank account."],
    hi: ["जीवन भर हर महीने पेंशन।", "पैसा सीधे आपके बैंक खाते में।"],
  },
  eligibilityText: {
    en: [
      "Resident of West Bengal.",
      "Belongs to a Scheduled Tribe.",
      "Aged 60 years or more.",
      "Has limited or no stable income.",
      "Not getting a similar pension from another major government scheme.",
    ],
    hi: [
      "पश्चिम बंगाल का निवासी।",
      "अनुसूचित जनजाति से हो।",
      "उम्र 60 साल या उससे ज़्यादा।",
      "स्थायी आय कम हो या न हो।",
      "किसी दूसरी बड़ी सरकारी योजना से ऐसी ही पेंशन न ले रहा हो।",
    ],
  },
  applicationProcess: {
    offline: {
      en: [
        "Get the form from your Gram Panchayat, municipality, Block Development Office, district welfare office or a Common Service Centre.",
        "Fill it in and attach proof of age, ST caste certificate, identity proof and bank details.",
        "Submit it. After verification by local officials, the pension is sanctioned and paid monthly.",
      ],
      hi: [
        "अपनी ग्राम पंचायत, नगरपालिका, ब्लॉक विकास कार्यालय, ज़िला कल्याण कार्यालय या कॉमन सर्विस सेंटर से फ़ॉर्म लें।",
        "फ़ॉर्म भरें और उम्र का सबूत, ST जाति प्रमाण पत्र, पहचान पत्र और बैंक का ब्योरा लगाएँ।",
        "फ़ॉर्म जमा करें। स्थानीय अधिकारियों की जाँच के बाद पेंशन मंज़ूर होकर हर महीने मिलती है।",
      ],
    },
  },
  documents: {
    en: ["Proof of age", "ST caste certificate", "Identity proof", "Bank account details"],
    hi: ["उम्र का सबूत", "ST जाति प्रमाण पत्र", "पहचान पत्र", "बैंक खाते का ब्योरा"],
  },

  officialUrl: "https://wb.gov.in/government-schemes-details-jai-johar-old-age-pensionfor-st-communities.aspx",
  sources: [
    "https://wb.gov.in/government-schemes-details-jai-johar-old-age-pensionfor-st-communities.aspx",
    "https://finance.wb.gov.in/writereaddata/Budget_Speech/2026_English.pdf",
  ],
  lastVerified: "2026-10-06",
  launchedYear: 2020,
  status: "active",
};

export default scheme;
