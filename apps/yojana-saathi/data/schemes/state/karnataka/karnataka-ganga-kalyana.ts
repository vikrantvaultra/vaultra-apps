import { all, any, isTrue, labelled, residentOf, when } from "@/lib/engine/build";
import type { Scheme } from "@/lib/types";

const scheme: Scheme = {
  slug: "karnataka-ganga-kalyana",
  tier: "compact",
  name: { en: "Ganga Kalyana Irrigation Scheme", hi: "गंगा कल्याण सिंचाई योजना" },
  aka: ["Ganga Kalyana", "free borewell scheme Karnataka", "GKS"],
  shortDescription: {
    en: "Small and marginal farmers from SC, ST, backward class and minority communities in Karnataka get a borewell with pump and power connection, mostly as a grant.",
    hi: "कर्नाटक के SC, ST, पिछड़ा वर्ग और अल्पसंख्यक समुदाय के छोटे और सीमांत किसानों को पंप और बिजली कनेक्शन के साथ बोरवेल मिलता है, ज़्यादातर अनुदान के रूप में।",
  },
  level: "state",
  state: "karnataka",
  department: {
    en: "Dr. B.R. Ambedkar Development Corporation and other community development corporations, Government of Karnataka",
    hi: "डॉ. बी.आर. आंबेडकर विकास निगम और दूसरे समुदाय विकास निगम, कर्नाटक सरकार",
  },
  categories: ["agriculture", "social-welfare"],
  tags: ["borewell", "irrigation", "ganga kalyana", "sc st farmer", "pump set", "karnataka"],
  benefitType: "composite",
  isDBT: false,
  kundliHouse: "farming",
  eligibility: all(
    residentOf("karnataka"),
    when("occupation", "eq", "farmer"),
    labelled(any(when("caste", "in", ["sc", "st", "pvtg", "obc"]), isTrue("minority")), {
      en: "You are SC, ST, from a backward class or from a minority community",
      hi: "आप SC, ST, पिछड़ा वर्ग या अल्पसंख्यक समुदाय से हों",
    }),
  ),

  details: {
    en: [
      "Ganga Kalyana has run since 1997 to bring irrigation to the dry land of small farmers from weaker communities. Each community's development corporation runs its own version: Dr. B.R. Ambedkar Development Corporation for SC farmers, Maharshi Valmiki Corporation for ST farmers, and the backward classes and minorities corporations for their communities.",
      "The individual scheme drills a borewell, fits a pump and gets the power connection. There are also group lift-irrigation units for neighbouring farmers along rivers and streams. The unit cost differs by district and corporation.",
    ],
    hi: [
      "गंगा कल्याण 1997 से चल रही है, ताकि कमज़ोर समुदायों के छोटे किसानों की सूखी ज़मीन तक सिंचाई पहुँचे। हर समुदाय का विकास निगम अपना अलग रूप चलाता है: SC किसानों के लिए डॉ. बी.आर. आंबेडकर विकास निगम, ST किसानों के लिए महर्षि वाल्मीकि निगम, और पिछड़ा वर्ग और अल्पसंख्यक निगम अपने-अपने समुदायों के लिए।",
      "व्यक्तिगत योजना में बोरवेल खोदा जाता है, पंप लगाया जाता है और बिजली कनेक्शन दिलाया जाता है। नदी-नालों के पास के किसानों के लिए समूह लिफ़्ट सिंचाई इकाइयाँ भी हैं। इकाई की लागत ज़िले और निगम के हिसाब से अलग होती है।",
    ],
  },
  benefits: {
    en: [
      "Borewell drilling, pump set and electricity connection on your land.",
      "Under the SC corporation's individual scheme, the unit is ₹4.5 lakh in Bengaluru, Kolar and Chikkaballapur districts (₹4 lakh grant + ₹50,000 loan) and ₹3.5 lakh elsewhere (₹3 lakh grant + ₹50,000 loan).",
      "Group lift-irrigation units with pipelines and a pump for 3 or more neighbouring farmers.",
    ],
    hi: [
      "आपकी ज़मीन पर बोरवेल खुदाई, पंप सेट और बिजली कनेक्शन।",
      "SC निगम की व्यक्तिगत योजना में इकाई बेंगलुरु, कोलार और चिक्कबल्लापुर ज़िलों में ₹4.5 लाख (₹4 लाख अनुदान + ₹50,000 क़र्ज़) और बाक़ी जगह ₹3.5 लाख (₹3 लाख अनुदान + ₹50,000 क़र्ज़) की है।",
      "3 या ज़्यादा पड़ोसी किसानों के लिए पाइपलाइन और पंप वाली समूह लिफ़्ट सिंचाई इकाइयाँ।",
    ],
  },
  eligibilityText: {
    en: [
      "Small or marginal farmer from an SC, ST, backward class or minority community, living in Karnataka.",
      "Owns about 1.5 to 5 acres of land for an individual borewell (1 acre is enough in hilly districts).",
      "Applies to the development corporation for their own community, within the income limit that corporation sets.",
    ],
    hi: [
      "कर्नाटक में रहने वाला SC, ST, पिछड़ा वर्ग या अल्पसंख्यक समुदाय का छोटा या सीमांत किसान।",
      "व्यक्तिगत बोरवेल के लिए लगभग 1.5 से 5 एकड़ ज़मीन हो (पहाड़ी ज़िलों में 1 एकड़ काफ़ी है)।",
      "अपने समुदाय के विकास निगम में, उस निगम की तय आय सीमा के अंदर आवेदन करे।",
    ],
  },
  applicationProcess: {
    online: {
      en: [
        "When the corporation invites applications, apply online on its website or through Seva Sindhu / Grama One.",
        "Upload your caste and income certificates, land records (RTC), Aadhaar and bank details.",
        "Beneficiaries are selected locally; after selection, the corporation arranges drilling and the pump.",
      ],
      hi: [
        "जब निगम आवेदन माँगे, उसकी वेबसाइट या सेवा सिंधु / ग्राम वन से ऑनलाइन आवेदन करें।",
        "जाति और आय प्रमाण पत्र, ज़मीन के काग़ज़ (RTC), आधार और बैंक विवरण अपलोड करें।",
        "लाभार्थियों का चयन स्थानीय स्तर पर होता है; चयन के बाद निगम खुदाई और पंप का इंतज़ाम करता है।",
      ],
    },
  },

  officialUrl: "https://adcl.karnataka.gov.in/27/ganga-kalyana-scheme/kn",
  sources: [
    "https://adcl.karnataka.gov.in/27/ganga-kalyana-scheme/kn",
    "https://kmdc.karnataka.gov.in/31/ganga-kalyana-schmeme/kn",
    "https://tumkur.nic.in/en/scheme/ganga-kalyana-scheme-g-k-s",
  ],
  lastVerified: "2026-10-06",
  launchedYear: 1997,
  status: "active",
};

export default scheme;
