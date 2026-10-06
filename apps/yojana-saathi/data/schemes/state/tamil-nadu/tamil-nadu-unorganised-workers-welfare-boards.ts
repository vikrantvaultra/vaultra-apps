import { all, labelled, residentOf, when } from "@/lib/engine/build";
import type { Scheme } from "@/lib/types";

const scheme: Scheme = {
  slug: "tamil-nadu-unorganised-workers-welfare-boards",
  tier: "compact",
  name: { en: "Tamil Nadu Unorganised Workers Welfare Boards", hi: "तमिलनाडु असंगठित कामगार कल्याण बोर्ड" },
  aka: ["TNUWWB", "Tamil Nadu Construction Workers Welfare Board", "labour welfare board card Tamil Nadu", "Manual Workers Welfare Board"],
  shortDescription: {
    en: "Construction workers, manual workers, drivers, gig workers and other unorganised workers in Tamil Nadu can register free with a welfare board for pension, accident cover, education and other help.",
    hi: "तमिलनाडु के निर्माण मज़दूर, शारीरिक श्रम करने वाले, ड्राइवर, गिग वर्कर और दूसरे असंगठित कामगार कल्याण बोर्ड में मुफ़्त पंजीकरण कराकर पेंशन, दुर्घटना मुआवज़ा, पढ़ाई और दूसरी मदद पा सकते हैं।",
  },
  level: "state",
  state: "tamil-nadu",
  department: {
    en: "Labour Welfare and Skill Development Department, Government of Tamil Nadu",
    hi: "श्रम कल्याण एवं कौशल विकास विभाग, तमिलनाडु सरकार",
  },
  categories: ["social-welfare", "pension-insurance"],
  tags: ["construction worker", "labour card", "unorganised worker", "gig worker", "welfare board", "pension"],
  benefitType: "composite",
  isDBT: true,
  kundliHouse: "insurance",
  eligibility: all(
    residentOf("tamil-nadu"),
    labelled(
      when("occupation", "in", ["construction-worker", "unorganised-worker", "domestic-worker"]),
      { en: "You do construction, manual, gig or other unorganised work", hi: "आप निर्माण, शारीरिक श्रम, गिग या दूसरा असंगठित काम करते हैं" },
    ),
  ),

  details: {
    en: [
      "Tamil Nadu has a set of welfare boards for workers outside regular jobs, such as the Construction Workers Welfare Board, the Manual Workers Social Security and Welfare Board, and the board for unorganised drivers and automobile workshop workers. Gig workers on app-based platforms can now register too.",
      "Once registered, a worker and their family can claim benefits from their board, such as pension in old age, compensation for accidents, help on natural death, and education support for children. Registration, renewal and claims are all done on one online portal.",
    ],
    hi: [
      "तमिलनाडु में नियमित नौकरी से बाहर काम करने वालों के लिए कई कल्याण बोर्ड हैं, जैसे निर्माण मज़दूर कल्याण बोर्ड, शारीरिक श्रमिक सामाजिक सुरक्षा एवं कल्याण बोर्ड, और असंगठित ड्राइवरों व मोटर वर्कशॉप कामगारों का बोर्ड। ऐप से काम करने वाले गिग वर्कर भी अब पंजीकरण करा सकते हैं।",
      "पंजीकरण के बाद कामगार और उसका परिवार अपने बोर्ड से लाभ ले सकता है, जैसे बुढ़ापे में पेंशन, दुर्घटना पर मुआवज़ा, सामान्य मृत्यु पर मदद और बच्चों की पढ़ाई में सहायता। पंजीकरण, नवीनीकरण और दावे सब एक ही ऑनलाइन पोर्टल पर होते हैं।",
    ],
  },
  benefits: {
    en: [
      "Monthly pension for registered members in old age, and family pension for construction workers.",
      "Compensation for accidental death and disability, including deaths at the worksite.",
      "Help with funeral expenses on natural death.",
      "Education assistance for members' children (including diploma courses and PhD for children of construction workers).",
      "Housing assistance, and subsidies for buying an auto-rickshaw or (for platform gig workers) an e-scooter.",
    ],
    hi: [
      "पंजीकृत सदस्यों को बुढ़ापे में मासिक पेंशन, और निर्माण मज़दूरों के परिवार को पारिवारिक पेंशन।",
      "दुर्घटना में मृत्यु और विकलांगता पर मुआवज़ा, काम की जगह पर मृत्यु भी शामिल।",
      "सामान्य मृत्यु पर अंतिम संस्कार के ख़र्च में मदद।",
      "सदस्यों के बच्चों की पढ़ाई में मदद (निर्माण मज़दूरों के बच्चों के लिए डिप्लोमा कोर्स और PhD भी)।",
      "घर के लिए सहायता, और ऑटो-रिक्शा या (प्लेटफ़ॉर्म गिग वर्कर के लिए) ई-स्कूटर ख़रीदने पर सब्सिडी।",
    ],
  },
  eligibilityText: {
    en: [
      "You live in Tamil Nadu and work in the unorganised sector: construction, manual labour, driving, domestic work, gig work on apps, or similar.",
      "You register with the welfare board for your type of work and renew your registration on time.",
      "Benefit amounts and conditions differ from board to board; check the portal for your board's list.",
    ],
    hi: [
      "आप तमिलनाडु में रहते हैं और असंगठित क्षेत्र में काम करते हैं: निर्माण, शारीरिक श्रम, ड्राइविंग, घरेलू काम, ऐप पर गिग काम या ऐसा ही कोई काम।",
      "आप अपने काम से जुड़े कल्याण बोर्ड में पंजीकरण कराते हैं और समय पर नवीनीकरण करते हैं।",
      "लाभ की राशि और शर्तें हर बोर्ड में अलग हैं; अपने बोर्ड की सूची पोर्टल पर देखें।",
    ],
  },
  applicationProcess: {
    online: {
      en: [
        "Go to tnuwwb.tn.gov.in and choose New Registration.",
        "Fill in your details, choose your board and upload your Aadhaar, photo and proof of work.",
        "After approval, log in to the same portal to renew, update details or file claims.",
      ],
      hi: [
        "tnuwwb.tn.gov.in पर जाएँ और New Registration चुनें।",
        "अपनी जानकारी भरें, अपना बोर्ड चुनें और आधार, फ़ोटो व काम का सबूत अपलोड करें।",
        "मंज़ूरी के बाद इसी पोर्टल पर लॉग इन करके नवीनीकरण, जानकारी में बदलाव या दावा करें।",
      ],
    },
    offline: {
      en: ["Visit the labour department office in your district for help with registration."],
      hi: ["पंजीकरण में मदद के लिए अपने ज़िले के श्रम विभाग कार्यालय जाएँ।"],
    },
  },

  officialUrl: "https://tnuwwb.tn.gov.in/",
  sources: ["https://tnuwwb.tn.gov.in/"],
  lastVerified: "2026-10-06",
  launchedYear: 1994,
  status: "active",
};

export default scheme;
