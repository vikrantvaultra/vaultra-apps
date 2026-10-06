import { all, labelled, residentOf, when } from "@/lib/engine/build";
import type { Scheme } from "@/lib/types";

const scheme: Scheme = {
  slug: "up-bocw-kanya-vivah-sahayata",
  tier: "compact",
  overlapGroup: "marriage-assistance",
  name: { en: "Kanya Vivah Sahayata Yojana (UP Construction Workers)", hi: "कन्या विवाह सहायता योजना (उत्तर प्रदेश निर्माण श्रमिक)" },
  aka: ["UP BOCW marriage", "Shramik kanya vivah", "upbocw kanya vivah"],
  shortDescription: {
    en: "Registered construction workers in Uttar Pradesh get ₹65,000 for a daughter's marriage (₹75,000 for inter-caste marriage, ₹85,000 in a mass marriage).",
    hi: "उत्तर प्रदेश के पंजीकृत निर्माण श्रमिकों को बेटी की शादी के लिए ₹65,000 (अंतरजातीय विवाह पर ₹75,000, सामूहिक विवाह में ₹85,000) मिलते हैं।",
  },
  level: "state",
  state: "uttar-pradesh",
  department: {
    en: "UP Building and Other Construction Workers Welfare Board, Labour Department, Government of Uttar Pradesh",
    hi: "उत्तर प्रदेश भवन एवं अन्य सन्निर्माण कर्मकार कल्याण बोर्ड, श्रम विभाग, उत्तर प्रदेश सरकार",
  },
  categories: ["social-welfare", "women-child"],
  tags: ["construction worker", "marriage", "daughter", "bocw", "labour card", "uttar pradesh"],
  benefitType: "cash",
  isDBT: true,
  value: { amount: 65_000, period: "one-time", kind: "cash" },
  kundliHouse: "women-family",
  eligibility: all(
    residentOf("uttar-pradesh"),
    labelled(when("occupation", "in", ["construction-worker"]), {
      en: "Registered construction worker with the UP BOCW Board for at least one year",
      hi: "UP निर्माण श्रमिक बोर्ड में कम से कम एक साल से पंजीकृत निर्माण श्रमिक",
    }),
  ),

  details: {
    en: [
      "The UP Building and Other Construction Workers Welfare Board helps its registered workers with the cost of a daughter's marriage. A registered woman worker can also claim it for her own marriage.",
      "The amount is paid into the bank account after the application is checked. It is available for up to two children per worker.",
    ],
    hi: [
      "उत्तर प्रदेश भवन एवं अन्य सन्निर्माण कर्मकार कल्याण बोर्ड अपने पंजीकृत श्रमिकों को बेटी की शादी के ख़र्च में मदद करता है। पंजीकृत महिला श्रमिक अपनी शादी के लिए भी इसे ले सकती है।",
      "आवेदन की जाँच के बाद पैसा बैंक खाते में आता है। एक श्रमिक के अधिकतम दो बच्चों के लिए यह मिलता है।",
    ],
  },
  benefits: {
    en: [
      "₹65,000 for the marriage of a daughter or of a registered woman worker.",
      "₹75,000 if it is an inter-caste marriage.",
      "₹85,000 if the marriage happens in a mass marriage of at least 11 couples.",
    ],
    hi: [
      "बेटी की या पंजीकृत महिला श्रमिक की शादी पर ₹65,000।",
      "अंतरजातीय विवाह होने पर ₹75,000।",
      "कम से कम 11 जोड़ों के सामूहिक विवाह में शादी होने पर ₹85,000।",
    ],
  },
  eligibilityText: {
    en: [
      "Registered with the UP BOCW Board for at least 365 days, with registration up to date.",
      "Bride is at least 18 and groom at least 21.",
      "Benefit for at most two children.",
      "Apply within one year after the marriage (for mass marriages, up to 15 days before).",
      "Has not taken a similar marriage benefit from another state or central scheme.",
    ],
    hi: [
      "UP निर्माण श्रमिक बोर्ड में कम से कम 365 दिन से पंजीकृत हों और पंजीकरण चालू हो।",
      "दुल्हन की उम्र कम से कम 18 और दूल्हे की कम से कम 21 साल हो।",
      "अधिकतम दो बच्चों के लिए लाभ।",
      "शादी के एक साल के अंदर आवेदन करें (सामूहिक विवाह में 15 दिन पहले तक)।",
      "किसी दूसरी राज्य या केंद्र योजना से शादी की ऐसी मदद न ली हो।",
    ],
  },
  applicationProcess: {
    online: {
      en: [
        "Log in on upbocw.in with your registration details.",
        "Choose Kanya Vivah Sahayata Yojana, fill in the bride and groom details and upload the documents.",
        "Submit and track the status on the portal. The district labour office verifies the claim.",
      ],
      hi: [
        "upbocw.in पर अपने पंजीकरण की जानकारी से लॉग इन करें।",
        "कन्या विवाह सहायता योजना चुनें, दुल्हन और दूल्हे की जानकारी भरें और दस्तावेज़ अपलोड करें।",
        "फ़ॉर्म जमा करें और पोर्टल पर स्थिति देखें। ज़िला श्रम कार्यालय दावे की जाँच करता है।",
      ],
    },
  },
  documents: {
    en: [
      "Age proof of bride and groom (birth certificate, school certificate or family register)",
      "Wedding card verified by the Gram Pradhan, Tehsildar or ward councillor",
      "Wedding photo of the couple",
      "Family register or ration card",
      "Certificate of 90 days of construction work in the last 12 months",
      "Self-declaration that no similar benefit was taken",
    ],
    hi: [
      "दुल्हन और दूल्हे की उम्र का सबूत (जन्म प्रमाण पत्र, स्कूल प्रमाण पत्र या परिवार रजिस्टर)",
      "ग्राम प्रधान, तहसीलदार या पार्षद से सत्यापित शादी का कार्ड",
      "दूल्हा-दुल्हन की शादी की फ़ोटो",
      "परिवार रजिस्टर या राशन कार्ड",
      "पिछले 12 महीनों में 90 दिन निर्माण कार्य का प्रमाण पत्र",
      "ऐसी कोई और मदद न लेने का स्व-घोषणा पत्र",
    ],
  },

  officialUrl: "https://website.upbocw.in/schemes",
  sources: ["https://website.upbocw.in/schemes", "https://upbocw.in/"],
  lastVerified: "2026-10-06",
  launchedYear: 2009,
  status: "active",
};

export default scheme;
