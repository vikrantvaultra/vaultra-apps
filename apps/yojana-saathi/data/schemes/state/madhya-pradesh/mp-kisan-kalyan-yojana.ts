import { all, labelled, residentOf, when } from "@/lib/engine/build";
import type { Scheme } from "@/lib/types";

const scheme: Scheme = {
  slug: "mp-kisan-kalyan-yojana",
  overlapGroup: "farmer-income",
  name: { en: "Mukhyamantri Kisan Kalyan Yojana (Madhya Pradesh)", hi: "मुख्यमंत्री किसान कल्याण योजना (मध्य प्रदेश)" },
  aka: ["Kisan Kalyan Yojana", "CM Kisan Kalyan", "MP Kisan Kalyan"],
  shortDescription: {
    en: "Farmers in Madhya Pradesh who get PM-KISAN receive another ₹4,000 a year from the state, in two instalments of ₹2,000.",
    hi: "मध्य प्रदेश के जिन किसानों को PM-KISAN मिलता है, उन्हें राज्य सरकार से हर साल ₹4,000 और मिलते हैं, ₹2,000 की दो किस्तों में।",
  },
  level: "state",
  state: "madhya-pradesh",
  department: {
    en: "Farmer Welfare and Agriculture Development Department, Government of Madhya Pradesh",
    hi: "किसान कल्याण तथा कृषि विकास विभाग, मध्य प्रदेश सरकार",
  },
  categories: ["agriculture"],
  tags: ["farmer", "kisan", "income support", "pm kisan", "dbt", "madhya pradesh"],
  benefitType: "cash",
  isDBT: true,
  kundliHouse: "farming",
  eligibility: all(
    residentOf("madhya-pradesh"),
    labelled(when("occupation", "eq", "farmer"), { en: "You are a farmer with land in your name", hi: "आप किसान हैं और ज़मीन आपके नाम है" }),
  ),

  details: {
    en: [
      "Mukhyamantri Kisan Kalyan Yojana is Madhya Pradesh's top-up to the central PM-KISAN scheme. It started in 2020.",
      "Every farmer family in the state that is getting PM-KISAN also gets ₹4,000 a year from the state government, in two instalments of ₹2,000. Together with PM-KISAN's ₹6,000, that makes ₹10,000 a year.",
      "There is no separate form. Beneficiaries are taken from the PM-KISAN list, and the Revenue Department's SAARA portal (saara.mp.gov.in) shows payment status.",
    ],
    hi: [
      "मुख्यमंत्री किसान कल्याण योजना केंद्र की PM-KISAN योजना के ऊपर मध्य प्रदेश सरकार की अतिरिक्त राशि है। यह 2020 में शुरू हुई।",
      "राज्य के जिस किसान परिवार को PM-KISAN मिल रहा है, उसे राज्य सरकार से हर साल ₹4,000 और मिलते हैं, ₹2,000 की दो किस्तों में। PM-KISAN के ₹6,000 मिलाकर साल में कुल ₹10,000 हो जाते हैं।",
      "इसके लिए अलग फ़ॉर्म नहीं भरना होता। लाभार्थी PM-KISAN की सूची से लिए जाते हैं, और भुगतान की स्थिति राजस्व विभाग के SAARA पोर्टल (saara.mp.gov.in) पर दिखती है।",
    ],
  },
  benefits: {
    en: [
      "₹4,000 a year from the state, in two instalments of ₹2,000.",
      "Paid straight into the same Aadhaar-linked bank account as PM-KISAN.",
      "Together with PM-KISAN, ₹10,000 a year in total.",
    ],
    hi: [
      "राज्य सरकार से हर साल ₹4,000, ₹2,000 की दो किस्तों में।",
      "पैसा उसी आधार से जुड़े बैंक खाते में आता है जिसमें PM-KISAN आता है।",
      "PM-KISAN के साथ मिलाकर साल में कुल ₹10,000।",
    ],
  },
  eligibilityText: {
    en: [
      "A farmer family in Madhya Pradesh with farmland in its name.",
      "Already registered and getting money under PM-KISAN.",
      "e-KYC and Aadhaar seeding of the bank account are complete.",
    ],
    hi: [
      "मध्य प्रदेश का किसान परिवार, जिसके नाम खेती की ज़मीन हो।",
      "PM-KISAN में पंजीकृत हो और उसका पैसा मिल रहा हो।",
      "e-KYC और बैंक खाते की आधार सीडिंग पूरी हो।",
    ],
  },
  exclusions: {
    en: [
      "Farmers left out of PM-KISAN are also left out here, for example income-tax payers, government employees, and people holding constitutional posts.",
      "Farmers whose PM-KISAN payment is stopped because of pending e-KYC or land record problems.",
    ],
    hi: [
      "जो किसान PM-KISAN से बाहर हैं, वे यहाँ भी बाहर हैं, जैसे आयकरदाता, सरकारी कर्मचारी और संवैधानिक पदों पर बैठे लोग।",
      "जिन किसानों का PM-KISAN का पैसा e-KYC या ज़मीन के रिकॉर्ड की दिक्कत से रुका हुआ है।",
    ],
  },
  applicationProcess: {
    online: {
      en: [
        "If you are not in PM-KISAN yet, register on pmkisan.gov.in or through your patwari or a CSC centre.",
        "Complete the e-KYC with your Aadhaar OTP and make sure your bank account is Aadhaar-seeded.",
        "Check your Kisan Kalyan payment status on saara.mp.gov.in.",
      ],
      hi: [
        "अगर आप अभी PM-KISAN में नहीं हैं, तो pmkisan.gov.in पर, या पटवारी या CSC केंद्र की मदद से पंजीयन कराएँ।",
        "आधार OTP से e-KYC पूरी करें और देखें कि बैंक खाता आधार से जुड़ा हो।",
        "किसान कल्याण योजना के भुगतान की स्थिति saara.mp.gov.in पर देखें।",
      ],
    },
  },
  documents: {
    en: ["Aadhaar card", "Land records (khasra / B-1) in your name", "Aadhaar-seeded bank account", "Mobile number"],
    hi: ["आधार कार्ड", "आपके नाम के ज़मीन के कागज़ (खसरा / बी-1)", "आधार से जुड़ा बैंक खाता", "मोबाइल नंबर"],
  },
  faqs: [
    {
      q: { en: "Do I need to apply separately?", hi: "क्या अलग से आवेदन करना होगा?" },
      a: {
        en: "No. If you get PM-KISAN and your e-KYC is done, the state money comes on its own.",
        hi: "नहीं। अगर आपको PM-KISAN मिलता है और e-KYC हो चुकी है, तो राज्य का पैसा अपने-आप आता है।",
      },
    },
    {
      q: { en: "My PM-KISAN comes but Kisan Kalyan doesn't. Why?", hi: "PM-KISAN आता है पर किसान कल्याण का पैसा नहीं। क्यों?" },
      a: {
        en: "Check your status on saara.mp.gov.in. Often the land record or Aadhaar details don't match. Contact your patwari or tehsil office to fix them.",
        hi: "saara.mp.gov.in पर स्थिति देखें। अक्सर ज़मीन के रिकॉर्ड या आधार की जानकारी मेल नहीं खाती। इसे ठीक कराने के लिए पटवारी या तहसील कार्यालय से संपर्क करें।",
      },
    },
  ],

  officialUrl: "https://saara.mp.gov.in/",
  sources: [
    "https://saara.mp.gov.in/",
    "https://www.drishtiias.com/state-pcs-current-affairs/madhya-pradesh-budget-2026-27",
  ],
  lastVerified: "2026-10-06",
  launchedYear: 2020,
  status: "check-status",
};

export default scheme;
