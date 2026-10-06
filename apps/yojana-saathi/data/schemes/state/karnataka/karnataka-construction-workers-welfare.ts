import { all, residentOf, when } from "@/lib/engine/build";
import type { Scheme } from "@/lib/types";

const scheme: Scheme = {
  slug: "karnataka-construction-workers-welfare",
  tier: "compact",
  name: {
    en: "Karnataka Construction Workers Welfare Board Benefits (Labour Card)",
    hi: "कर्नाटक निर्माण मज़दूर कल्याण बोर्ड लाभ (लेबर कार्ड)",
  },
  aka: ["Karnataka labour card", "KBOCWWB", "construction worker card Karnataka"],
  shortDescription: {
    en: "Registered construction workers in Karnataka can get a ₹3,000 monthly pension at 60, ₹50,000 for delivery, ₹60,000 for marriage, education help for children, and medical and accident cover.",
    hi: "कर्नाटक के पंजीकृत निर्माण मज़दूरों को 60 साल पर हर महीने ₹3,000 पेंशन, प्रसव पर ₹50,000, शादी पर ₹60,000, बच्चों की पढ़ाई में मदद, और इलाज व दुर्घटना की सहायता मिल सकती है।",
  },
  level: "state",
  state: "karnataka",
  department: {
    en: "Karnataka Building and Other Construction Workers' Welfare Board, Labour Department",
    hi: "कर्नाटक भवन एवं अन्य निर्माण मज़दूर कल्याण बोर्ड, श्रम विभाग",
  },
  categories: ["social-welfare", "pension-insurance", "education"],
  tags: ["construction worker", "labour card", "bocw", "pension", "marriage", "maternity", "karnataka"],
  benefitType: "composite",
  isDBT: true,
  kundliHouse: "career",
  eligibility: all(residentOf("karnataka"), when("occupation", "eq", "construction-worker")),

  details: {
    en: [
      "The Karnataka Building and Other Construction Workers' Welfare Board registers people who work on building sites, such as masons, labourers, carpenters, plumbers, electricians and painters, and gives them and their families a set of welfare benefits.",
      "Registration is free. You must have worked at least 90 days in construction in the past year and keep your membership active to claim benefits. Each benefit must be claimed within its time limit.",
    ],
    hi: [
      "कर्नाटक भवन एवं अन्य निर्माण मज़दूर कल्याण बोर्ड निर्माण स्थलों पर काम करने वालों, जैसे राजमिस्त्री, मज़दूर, बढ़ई, प्लंबर, इलेक्ट्रीशियन और पेंटर, का पंजीकरण करता है और उन्हें व उनके परिवार को कई कल्याण लाभ देता है।",
      "पंजीकरण मुफ़्त है। पिछले साल में कम से कम 90 दिन निर्माण का काम किया हो और लाभ पाने के लिए सदस्यता चालू रखनी होती है। हर लाभ का दावा उसकी समय सीमा के अंदर करना होता है।",
    ],
  },
  benefits: {
    en: [
      "Pension of ₹3,000 a month from age 60, after at least 3 years of membership; family pension for the spouse after the pensioner's death.",
      "₹50,000 for delivery (first two children) for women workers.",
      "₹60,000 marriage assistance for the worker's own first marriage or for two dependent children.",
      "Yearly education assistance for two children, by class.",
      "Medical help of up to ₹20,000 for hospital stays and up to ₹2 lakh for major illnesses such as heart disease, cancer and kidney disease.",
      "Compensation for death or permanent disability in an accident at work, and help for funeral expenses.",
    ],
    hi: [
      "कम से कम 3 साल की सदस्यता के बाद 60 साल से हर महीने ₹3,000 पेंशन; पेंशनधारी की मृत्यु के बाद जीवनसाथी को पारिवारिक पेंशन।",
      "महिला मज़दूरों को प्रसव पर ₹50,000 (पहले दो बच्चों के लिए)।",
      "मज़दूर की अपनी पहली शादी या दो आश्रित बच्चों की शादी के लिए ₹60,000।",
      "दो बच्चों की पढ़ाई के लिए कक्षा के हिसाब से हर साल मदद।",
      "अस्पताल में भर्ती होने पर ₹20,000 तक और दिल, कैंसर, किडनी जैसी गंभीर बीमारियों के लिए ₹2 लाख तक इलाज की मदद।",
      "काम पर दुर्घटना में मृत्यु या स्थायी दिव्यांगता पर मुआवज़ा, और अंतिम संस्कार के ख़र्च में मदद।",
    ],
  },
  eligibilityText: {
    en: [
      "Works as a building or construction worker in Karnataka.",
      "Has worked at least 90 days in construction in the last 12 months.",
      "Aged 18 to 60 at registration, as set by the Building and Other Construction Workers Act.",
      "Registered with the Board, with membership kept up to date.",
    ],
    hi: [
      "कर्नाटक में भवन या निर्माण मज़दूर के रूप में काम करता हो।",
      "पिछले 12 महीनों में कम से कम 90 दिन निर्माण का काम किया हो।",
      "पंजीकरण के समय उम्र 18 से 60 साल, जैसा भवन एवं अन्य निर्माण मज़दूर क़ानून में तय है।",
      "बोर्ड में पंजीकृत हो और सदस्यता चालू हो।",
    ],
  },
  applicationProcess: {
    online: {
      en: [
        "Register on the Board's portal (karbwwb.karnataka.gov.in) or through Seva Sindhu, Grama One or Karnataka One.",
        "Upload your Aadhaar, photo, bank details and a 90-day work certificate from an employer, union or labour officer.",
        "Once registered, apply for each benefit online with its documents within the time limit.",
      ],
      hi: [
        "बोर्ड के पोर्टल (karbwwb.karnataka.gov.in) पर या सेवा सिंधु, ग्राम वन या कर्नाटक वन से पंजीकरण करें।",
        "आधार, फ़ोटो, बैंक विवरण और मालिक, यूनियन या श्रम अधिकारी से 90 दिन काम का प्रमाण पत्र अपलोड करें।",
        "पंजीकरण के बाद हर लाभ के लिए उसके दस्तावेज़ों के साथ समय सीमा के अंदर ऑनलाइन आवेदन करें।",
      ],
    },
  },

  officialUrl: "https://karbwwb.karnataka.gov.in/",
  sources: ["https://karbwwb.karnataka.gov.in/42/schemes/kn", "https://karbwwb.karnataka.gov.in/"],
  lastVerified: "2026-10-06",
  launchedYear: 2007,
  status: "active",
};

export default scheme;
