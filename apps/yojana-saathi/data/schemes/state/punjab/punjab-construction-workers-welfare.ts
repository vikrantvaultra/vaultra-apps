import { all, ageBetween, residentOf, when } from "@/lib/engine/build";
import type { Scheme } from "@/lib/types";

const scheme: Scheme = {
  slug: "punjab-construction-workers-welfare",
  tier: "compact",
  name: { en: "Punjab Construction Workers Welfare Board Schemes", hi: "पंजाब निर्माण श्रमिक कल्याण बोर्ड की योजनाएँ" },
  aka: ["Punjab BOCW", "Punjab labour card", "construction worker Shagun Punjab", "Balri birth gift"],
  shortDescription: {
    en: "Registered construction workers in Punjab get ₹31,000 Shagun for a daughter's marriage, ₹21,000 maternity help, a ₹51,000 deposit on a daughter's birth, a ₹2,000 monthly pension and more.",
    hi: "पंजाब के पंजीकृत निर्माण श्रमिकों को बेटी की शादी पर ₹31,000 शगुन, ₹21,000 मातृत्व सहायता, बेटी के जन्म पर ₹51,000 की FD, ₹2,000 मासिक पेंशन और दूसरे लाभ मिलते हैं।",
  },
  level: "state",
  state: "punjab",
  department: {
    en: "Punjab Building and Other Construction Workers Welfare Board, Labour Department, Government of Punjab",
    hi: "पंजाब भवन एवं अन्य निर्माण श्रमिक कल्याण बोर्ड, श्रम विभाग, पंजाब सरकार",
  },
  categories: ["social-welfare", "skills-employment"],
  tags: ["construction worker", "labour card", "bocw", "shagun", "maternity", "punjab"],
  benefitType: "composite",
  isDBT: true,
  ageRange: { min: 18, max: 60 },
  kundliHouse: "career",
  eligibility: all(residentOf("punjab"), when("occupation", "eq", "construction-worker"), ...ageBetween(18, 60)),

  details: {
    en: [
      "The Punjab Building and Other Construction Workers Welfare Board registers construction workers and pays them benefits under about 20 welfare schemes, directly into their bank accounts. Nearly two lakh workers are registered.",
      "Any construction worker aged 18 to 60 who has worked at least 90 days in Punjab in the past year can register. The government has cut processing steps and benefit waiting times in recent years.",
    ],
    hi: [
      "पंजाब भवन एवं अन्य निर्माण श्रमिक कल्याण बोर्ड निर्माण श्रमिकों का पंजीकरण करता है और लगभग 20 कल्याण योजनाओं के लाभ सीधे उनके बैंक खाते में देता है। लगभग दो लाख श्रमिक पंजीकृत हैं।",
      "18 से 60 साल का कोई भी निर्माण श्रमिक, जिसने पिछले साल पंजाब में कम से कम 90 दिन काम किया हो, पंजीकरण करा सकता है। सरकार ने हाल के सालों में आवेदन के चरण और लाभ मिलने का इंतज़ार घटाया है।",
    ],
  },
  benefits: {
    en: [
      "Shagun: ₹31,000 for the marriage of each of two daughters (or for a registered woman worker's own marriage).",
      "Maternity: ₹21,000 per delivery for women workers and ₹5,000 for a male worker's wife, up to two deliveries.",
      "Balri birth gift: a ₹51,000 fixed deposit on the birth of a daughter (up to two), paid out at her marriage.",
      "Pension: ₹2,000 a month after age 60 with 3 years of membership; family pension of ₹1,000 a month.",
      "Other schemes include stipends for children's education, funeral help, free bicycles and medical help.",
    ],
    hi: [
      "शगुन: दो बेटियों में से हर एक की शादी पर ₹31,000 (या पंजीकृत महिला श्रमिक की अपनी शादी पर)।",
      "मातृत्व: महिला श्रमिकों को हर प्रसव पर ₹21,000 और पुरुष श्रमिक की पत्नी के लिए ₹5,000, दो प्रसव तक।",
      "बालड़ी जन्म तोहफ़ा: बेटी के जन्म पर ₹51,000 की FD (दो बेटियों तक), जो उसकी शादी पर मिलती है।",
      "पेंशन: 60 साल के बाद और 3 साल की सदस्यता पर हर महीने ₹2,000; पारिवारिक पेंशन ₹1,000 महीना।",
      "बाक़ी योजनाओं में बच्चों की पढ़ाई के लिए वज़ीफ़ा, अंतिम संस्कार सहायता, मुफ़्त साइकिल और इलाज में मदद शामिल है।",
    ],
  },
  eligibilityText: {
    en: [
      "A building or construction worker aged 18 to 60.",
      "Has worked at least 90 days in Punjab in the preceding year.",
      "Is registered with the Board (each benefit has its own membership conditions).",
    ],
    hi: [
      "18 से 60 साल का भवन या निर्माण श्रमिक।",
      "पिछले साल पंजाब में कम से कम 90 दिन काम किया हो।",
      "बोर्ड में पंजीकृत हो (हर लाभ की सदस्यता से जुड़ी अपनी शर्तें हैं)।",
    ],
  },
  applicationProcess: {
    offline: {
      en: [
        "Visit your nearest Sewa Kendra, or the Assistant Labour Commissioner, Labour-cum-Conciliation Officer or Labour Inspector of your area, to register.",
        "After registration, apply for each benefit through the Sewa Kendra.",
        "Track your application status on bocw.punjab.gov.in.",
      ],
      hi: [
        "पंजीकरण के लिए नज़दीकी सेवा केंद्र, या अपने इलाक़े के सहायक श्रम आयुक्त, श्रम-सह-समझौता अधिकारी या श्रम निरीक्षक के पास जाएँ।",
        "पंजीकरण के बाद हर लाभ के लिए सेवा केंद्र से आवेदन करें।",
        "आवेदन की स्थिति bocw.punjab.gov.in पर देखें।",
      ],
    },
  },

  officialUrl: "https://bocw.punjab.gov.in/",
  sources: [
    "https://bocw.punjab.gov.in/index.aspx?id=Welfare%20Schemes&Data=38",
    "https://finance.punjab.gov.in/uploads/9abf7814-c6c6-4933-963a-bcb650c10a3e_Economic%20Survey%202025-26.pdf",
    "https://ipr.punjab.gov.in/en/press-releases/hq-press-releases/bocw-board-organizes-camps-at-labour-chowks-across-19-districts-in-punjab/",
  ],
  lastVerified: "2026-10-06",
  launchedYear: 2009,
  status: "active",
};

export default scheme;
