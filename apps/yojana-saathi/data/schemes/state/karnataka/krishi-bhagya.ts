import { all, residentOf, when } from "@/lib/engine/build";
import type { Scheme } from "@/lib/types";

const scheme: Scheme = {
  slug: "krishi-bhagya",
  tier: "compact",
  name: { en: "Krishi Bhagya", hi: "कृषि भाग्य योजना" },
  aka: ["Krishi Bhagya Yojana", "Krishi Honda", "farm pond scheme Karnataka"],
  shortDescription: {
    en: "Karnataka farmers in rain-fed areas get 80% subsidy (90% for SC/ST) to dig a farm pond, plus help for a lining sheet, pump set, sprinkler and shade net.",
    hi: "कर्नाटक के बारिश पर निर्भर इलाक़ों के किसानों को खेत तालाब बनाने पर 80% सब्सिडी (SC/ST को 90%) मिलती है, साथ में लाइनिंग शीट, पंप सेट, स्प्रिंकलर और शेड नेट के लिए मदद।",
  },
  level: "state",
  state: "karnataka",
  department: {
    en: "Department of Agriculture, Government of Karnataka",
    hi: "कृषि विभाग, कर्नाटक सरकार",
  },
  categories: ["agriculture"],
  tags: ["farm pond", "krishi honda", "subsidy", "rainwater", "irrigation", "farmer", "karnataka"],
  benefitType: "in-kind",
  isDBT: false,
  kundliHouse: "farming",
  eligibility: all(residentOf("karnataka"), when("occupation", "eq", "farmer")),

  details: {
    en: [
      "Krishi Bhagya helps dryland farmers store rainwater on their own land so that crops survive dry spells. The main support is for digging a farm pond (Krishi Honda) of a standard size.",
      "The scheme was restarted in 2023–24 and, from May 2024, extended to all taluks of all districts. Farmers apply at the Raitha Samparka Kendra, and the work is checked before the subsidy is released.",
    ],
    hi: [
      "कृषि भाग्य सूखी ज़मीन वाले किसानों को अपनी ही ज़मीन पर बारिश का पानी जमा करने में मदद करती है, ताकि सूखे दिनों में फ़सल बची रहे। मुख्य मदद तय आकार का खेत तालाब (कृषि होंडा) खोदने के लिए है।",
      "योजना 2023–24 में दोबारा शुरू हुई और मई 2024 से सभी ज़िलों के सभी तालुकों में लागू है। किसान रैता संपर्क केंद्र पर आवेदन करते हैं, और काम की जाँच के बाद सब्सिडी दी जाती है।",
    ],
  },
  benefits: {
    en: [
      "Farm pond: 80% subsidy for general farmers (up to ₹70,000) and 90% for SC/ST farmers (up to ₹80,000).",
      "Help for a polythene/HDPE lining sheet to stop water seeping away.",
      "Support for a diesel or solar pump set (up to 10 HP) and sprinkler irrigation, at 90% subsidy for some parts.",
      "Shade net support as per the year's guidelines.",
    ],
    hi: [
      "खेत तालाब: सामान्य किसानों को 80% सब्सिडी (₹70,000 तक) और SC/ST किसानों को 90% (₹80,000 तक)।",
      "पानी रिसने से रोकने के लिए पॉलीथीन/HDPE लाइनिंग शीट में मदद।",
      "डीज़ल या सोलर पंप सेट (10 HP तक) और स्प्रिंकलर सिंचाई के लिए मदद, कुछ हिस्सों पर 90% सब्सिडी।",
      "साल के दिशा-निर्देशों के हिसाब से शेड नेट के लिए मदद।",
    ],
  },
  eligibilityText: {
    en: [
      "A farmer who owns farmland in Karnataka, registered in the FRUITS farmer database.",
      "Land in a rain-fed (dryland) area.",
      "Farmers who already got a farm pond under this scheme in earlier years usually can't get another one.",
    ],
    hi: [
      "कर्नाटक में खेती की ज़मीन वाले किसान, जो FRUITS किसान डेटाबेस में दर्ज हों।",
      "ज़मीन बारिश पर निर्भर (सूखी खेती वाले) इलाक़े में हो।",
      "जिन्हें पिछले सालों में इस योजना से खेत तालाब मिल चुका है, उन्हें आमतौर पर दोबारा नहीं मिलता।",
    ],
  },
  applicationProcess: {
    offline: {
      en: [
        "Visit your hobli's Raitha Samparka Kendra (RSK) with your land records (RTC), Aadhaar and bank details.",
        "Fill in the Krishi Bhagya application; officials visit the field to mark the pond.",
        "Dig the pond as per the approved size; after inspection, the subsidy is released.",
      ],
      hi: [
        "अपने होबली के रैता संपर्क केंद्र (RSK) पर ज़मीन के काग़ज़ (RTC), आधार और बैंक विवरण लेकर जाएँ।",
        "कृषि भाग्य का आवेदन भरें; अधिकारी खेत पर आकर तालाब की जगह तय करते हैं।",
        "मंज़ूर आकार में तालाब खोदें; जाँच के बाद सब्सिडी दी जाती है।",
      ],
    },
  },

  officialUrl: "https://raitamitra.karnataka.gov.in/52/krishi-bhagya-scheme/kn",
  sources: [
    "https://raitamitra.karnataka.gov.in/52/krishi-bhagya-scheme/kn",
    "https://raitamitra.karnataka.gov.in/storage/pdf-files/FINALSignedKBYGuidelines2024-25.pdf",
  ],
  lastVerified: "2026-10-06",
  launchedYear: 2023,
  status: "active",
};

export default scheme;
