import { all, labelled, residentOf, when } from "@/lib/engine/build";
import type { Scheme } from "@/lib/types";

const scheme: Scheme = {
  slug: "up-bocw-matritva-shishu-balika-madad",
  tier: "compact",
  overlapGroup: "maternity-cash",
  name: { en: "Matritva, Shishu evam Balika Madad Yojana (UP Construction Workers)", hi: "मातृत्व, शिशु एवं बालिका मदद योजना (उत्तर प्रदेश निर्माण श्रमिक)" },
  aka: ["UP BOCW maternity", "Matritva Shishu Balika Madad", "MSBMY"],
  shortDescription: {
    en: "Registered construction workers in Uttar Pradesh get cash on childbirth: ₹20,000 for a son and ₹25,000 for a daughter, plus maternity pay for women workers and an FD for daughters.",
    hi: "उत्तर प्रदेश के पंजीकृत निर्माण श्रमिकों को बच्चे के जन्म पर पैसा: बेटे पर ₹20,000 और बेटी पर ₹25,000, साथ में महिला श्रमिकों को मातृत्व भत्ता और बेटियों के लिए FD।",
  },
  level: "state",
  state: "uttar-pradesh",
  department: {
    en: "UP Building and Other Construction Workers Welfare Board, Labour Department, Government of Uttar Pradesh",
    hi: "उत्तर प्रदेश भवन एवं अन्य सन्निर्माण कर्मकार कल्याण बोर्ड, श्रम विभाग, उत्तर प्रदेश सरकार",
  },
  categories: ["women-child", "health", "social-welfare"],
  tags: ["construction worker", "maternity", "childbirth", "girl child", "bocw", "uttar pradesh"],
  benefitType: "composite",
  isDBT: true,
  kundliHouse: "women-family",
  eligibility: all(
    residentOf("uttar-pradesh"),
    labelled(when("occupation", "in", ["construction-worker"]), {
      en: "You or your spouse is a construction worker registered with the UP BOCW Board for at least one year",
      hi: "आप या आपके जीवनसाथी UP निर्माण श्रमिक बोर्ड में कम से कम एक साल से पंजीकृत निर्माण श्रमिक हों",
    }),
  ),

  details: {
    en: [
      "This scheme of the UP Building and Other Construction Workers Welfare Board supports registered workers when a child is born. It covers the mother's wages, a lump sum for the newborn and extra savings for daughters.",
      "Benefits are given for the first two deliveries. Maternity pay for women workers is given only for delivery in a hospital or health centre.",
    ],
    hi: [
      "उत्तर प्रदेश भवन एवं अन्य सन्निर्माण कर्मकार कल्याण बोर्ड की यह योजना बच्चे के जन्म पर पंजीकृत श्रमिकों की मदद करती है। इसमें माँ की मज़दूरी, नवजात के लिए एकमुश्त राशि और बेटियों के लिए अलग बचत शामिल है।",
      "पहले दो प्रसव तक लाभ मिलता है। महिला श्रमिक को मातृत्व भत्ता सिर्फ़ अस्पताल या स्वास्थ्य केंद्र में प्रसव होने पर मिलता है।",
    ],
  },
  benefits: {
    en: [
      "₹20,000 for the birth of a son and ₹25,000 for a daughter, as a lump sum.",
      "Woman worker: three months of minimum wage plus a ₹1,000 medical bonus for a hospital delivery.",
      "Male worker: a lump sum of ₹6,000 as maternity help.",
      "First or second daughter (or a legally adopted girl): a ₹25,000 fixed deposit, or ₹50,000 if she has a disability from birth, paid at 18 if she is unmarried.",
    ],
    hi: [
      "बेटे के जन्म पर ₹20,000 और बेटी पर ₹25,000, एकमुश्त।",
      "महिला श्रमिक: अस्पताल में प्रसव पर तीन महीने की न्यूनतम मज़दूरी और ₹1,000 चिकित्सा बोनस।",
      "पुरुष श्रमिक: मातृत्व मदद के रूप में ₹6,000 एकमुश्त।",
      "पहली या दूसरी बेटी (या क़ानूनी रूप से गोद ली गई बेटी): ₹25,000 की FD, या जन्म से दिव्यांग होने पर ₹50,000, जो 18 साल पर अविवाहित रहने पर मिलती है।",
    ],
  },
  eligibilityText: {
    en: [
      "Registered with the UP BOCW Board for at least 365 days, with registration up to date.",
      "Benefit for the first two deliveries only.",
      "Maternity pay for women workers needs an institutional (hospital) delivery.",
      "The daughter's FD is for the first daughter, and the second child too if she is a girl.",
    ],
    hi: [
      "UP निर्माण श्रमिक बोर्ड में कम से कम 365 दिन से पंजीकृत हों और पंजीकरण चालू हो।",
      "सिर्फ़ पहले दो प्रसव के लिए लाभ।",
      "महिला श्रमिक को मातृत्व भत्ते के लिए अस्पताल में प्रसव ज़रूरी।",
      "बेटी की FD पहली बेटी के लिए है, और दूसरा बच्चा भी बेटी हो तो उसके लिए भी।",
    ],
  },
  applicationProcess: {
    online: {
      en: [
        "Log in on upbocw.in with your registration details.",
        "Choose Matritva, Shishu evam Balika Madad Yojana and fill in the birth details.",
        "Upload the hospital delivery certificate, birth certificate and other documents, then submit.",
      ],
      hi: [
        "upbocw.in पर अपने पंजीकरण की जानकारी से लॉग इन करें।",
        "मातृत्व, शिशु एवं बालिका मदद योजना चुनें और जन्म की जानकारी भरें।",
        "अस्पताल का प्रसव प्रमाण पत्र, जन्म प्रमाण पत्र और दूसरे दस्तावेज़ अपलोड करके जमा करें।",
      ],
    },
  },
  documents: {
    en: ["Up-to-date BOCW registration", "Institutional delivery certificate from a government hospital", "Online birth certificate", "Adoption deed, if the child is adopted", "Family register, Aadhaar and bank passbook"],
    hi: ["चालू BOCW पंजीकरण", "सरकारी अस्पताल का संस्थागत प्रसव प्रमाण पत्र", "ऑनलाइन जन्म प्रमाण पत्र", "गोद लेने का दस्तावेज़, अगर बच्चा गोद लिया है", "परिवार रजिस्टर, आधार और बैंक पासबुक"],
  },

  officialUrl: "https://website.upbocw.in/schemes",
  sources: ["https://website.upbocw.in/schemes", "https://www.myscheme.gov.in/schemes/mesy"],
  lastVerified: "2026-10-06",
  launchedYear: 2009,
  status: "active",
};

export default scheme;
