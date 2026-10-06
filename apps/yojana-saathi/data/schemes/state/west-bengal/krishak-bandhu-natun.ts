import { all, residentOf, when } from "@/lib/engine/build";
import type { Scheme } from "@/lib/types";

const scheme: Scheme = {
  slug: "krishak-bandhu-natun",
  tier: "compact",
  overlapGroup: "farmer-income",
  name: { en: "Krishak Bandhu (Natun)", hi: "कृषक बंधु (नतुन)" },
  aka: ["Krishak Bandhu", "KB(N)", "Krishak Bondhu"],
  shortDescription: {
    en: "Yearly cash help for farmers in West Bengal based on their cultivable land, paid in two instalments. All beneficiaries are being re-verified in 2026.",
    hi: "पश्चिम बंगाल के किसानों को उनकी खेती लायक ज़मीन के हिसाब से हर साल दो किस्तों में नकद मदद। 2026 में सभी लाभार्थियों की दोबारा जाँच हो रही है।",
  },
  level: "state",
  state: "west-bengal",
  department: { en: "Department of Agriculture, Government of West Bengal", hi: "कृषि विभाग, पश्चिम बंगाल सरकार" },
  categories: ["agriculture"],
  tags: ["farmer", "krishak bandhu", "income support", "dbt", "agriculture", "west bengal"],
  benefitType: "cash",
  isDBT: true,
  kundliHouse: "farming",
  eligibility: all(residentOf("west-bengal"), when("occupation", "in", ["farmer"])),

  details: {
    en: [
      "Krishak Bandhu (Natun) is West Bengal's own income support scheme for farmers. Under the rules in force until early 2026, a farmer with one acre or more of cultivable land got ₹10,000 a year, and smaller holdings got a proportionate amount with a minimum of ₹4,000, paid in two equal instalments.",
      "In July 2026 the new state government started checking every beneficiary: matching records with PM-KISAN, checking land records and Aadhaar, and removing government employees, pensioners and income-tax payers. The amount after this exercise has not yet been announced.",
    ],
    hi: [
      "कृषक बंधु (नतुन) किसानों के लिए पश्चिम बंगाल की अपनी आय सहायता योजना है। 2026 की शुरुआत तक लागू नियमों में एक एकड़ या ज़्यादा खेती लायक ज़मीन वाले किसान को सालाना ₹10,000 मिलते थे, और कम ज़मीन पर उसी अनुपात में, कम से कम ₹4,000, दो बराबर किस्तों में।",
      "जुलाई 2026 में नई राज्य सरकार ने हर लाभार्थी की जाँच शुरू की: PM-KISAN से रिकॉर्ड मिलाना, ज़मीन के रिकॉर्ड और आधार की जाँच, और सरकारी कर्मचारी, पेंशनभोगी व आयकर देने वालों को हटाना। इस जाँच के बाद कितनी राशि मिलेगी, यह अभी घोषित नहीं हुआ है।",
    ],
  },
  benefits: {
    en: [
      "Yearly cash help based on how much cultivable land you have, paid in two instalments (₹10,000 for one acre or more, minimum ₹4,000, under the rules before July 2026).",
      "Money is paid into your bank account.",
    ],
    hi: [
      "आपकी खेती लायक ज़मीन के हिसाब से सालाना नकद मदद, दो किस्तों में (जुलाई 2026 से पहले के नियमों में एक एकड़ या ज़्यादा पर ₹10,000, कम से कम ₹4,000)।",
      "पैसा आपके बैंक खाते में आता है।",
    ],
  },
  eligibilityText: {
    en: [
      "A farmer in West Bengal with cultivable land recorded in their name.",
      "Not a permanent employee drawing a regular salary or pension from the central or state government, a panchayat, municipality, government undertaking or government-aided institution.",
      "Not an income-tax payer.",
      "Has Aadhaar, a voter ID and a bank account.",
    ],
    hi: [
      "पश्चिम बंगाल का किसान, जिसके नाम पर खेती लायक ज़मीन दर्ज हो।",
      "केंद्र या राज्य सरकार, पंचायत, नगरपालिका, सरकारी उपक्रम या सरकारी सहायता प्राप्त संस्था से नियमित वेतन या पेंशन लेने वाला स्थायी कर्मचारी न हो।",
      "आयकर न देता हो।",
      "आधार, वोटर ID और बैंक खाता हो।",
    ],
  },
  applicationProcess: {
    offline: {
      en: [
        "Contact the Assistant Director of Agriculture (ADA) at your block office or your Krishi Prasar Sahayak.",
        "Existing beneficiaries: fill in the verification form (Annexure-I) and submit it with copies of Aadhaar and voter ID of yourself and your spouse, your land record (RoR) and bank passbook.",
        "Keep the serial number you are given as your acknowledgement.",
      ],
      hi: [
        "अपने ब्लॉक कार्यालय में सहायक कृषि निदेशक (ADA) या कृषि प्रसार सहायक से संपर्क करें।",
        "पुराने लाभार्थी: सत्यापन फ़ॉर्म (Annexure-I) भरें और अपने व जीवनसाथी के आधार और वोटर ID, ज़मीन का रिकॉर्ड (RoR) और बैंक पासबुक की कॉपी के साथ जमा करें।",
        "पावती के रूप में मिला सीरियल नंबर संभाल कर रखें।",
      ],
    },
  },

  officialUrl: "https://krishakbandhu.wb.gov.in/",
  sources: [
    "https://krishakbandhu.wb.gov.in/",
    "https://finance.wb.gov.in/writereaddata/Budget_Speech/2026-2027_English_I.pdf",
    "https://finance.wb.gov.in/writereaddata/Budget_Speech/2026_English.pdf",
  ],
  lastVerified: "2026-10-06",
  launchedYear: 2021,
  status: "check-status",
};

export default scheme;
