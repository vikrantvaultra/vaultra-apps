import { all, residentOf, when } from "@/lib/engine/build";
import type { Scheme } from "@/lib/types";

const scheme: Scheme = {
  slug: "gujarat-bocw-construction-workers-welfare",
  tier: "compact",
  name: { en: "Gujarat Construction Workers Welfare Board benefits", hi: "गुजरात निर्माण श्रमिक कल्याण बोर्ड के लाभ" },
  aka: ["Gujarat BOCW", "e-Nirman card", "Bandhkam shramik yojana", "GBOCWWB"],
  shortDescription: {
    en: "Construction workers registered with Gujarat's welfare board (e-Nirman card) get maternity help of up to ₹37,500, housing top-ups, PMJAY-MA health cover, cheap meals and more.",
    hi: "गुजरात के कल्याण बोर्ड में पंजीकृत निर्माण श्रमिकों (ई-निर्माण कार्ड) को ₹37,500 तक की प्रसूति सहायता, आवास में अतिरिक्त मदद, PMJAY-मा स्वास्थ्य कवर, सस्ता भोजन और बहुत कुछ मिलता है।",
  },
  level: "state",
  state: "gujarat",
  department: { en: "Gujarat Building and Other Construction Workers Welfare Board, Labour, Skill Development and Employment Department", hi: "गुजरात भवन एवं अन्य निर्माण श्रमिक कल्याण बोर्ड, श्रम, कौशल विकास एवं रोज़गार विभाग" },
  categories: ["social-welfare", "skills-employment", "women-child"],
  tags: ["construction worker", "bocw", "e-nirman", "labour card", "maternity", "shramik", "gujarat"],
  benefitType: "composite",
  isDBT: true,
  kundliHouse: "insurance",
  eligibility: all(residentOf("gujarat"), when("occupation", "eq", "construction-worker")),

  details: {
    en: [
      "Gujarat's Building and Other Construction Workers Welfare Board runs a set of benefits for construction workers who register with it and get an e-Nirman card. Registration and most applications are done on the e-Nirman and Sanman portals.",
      "Benefits include maternity support, extra money towards a house allotted under government housing, health cover under PMJAY-MA, help for occupational diseases, funeral help, education help for children and cheap nutritious meals at Shramik Annapurna centres. From 2026-27 the accident death help is being turned into a group accident insurance with ₹5 lakh cover for registered and unregistered workers.",
    ],
    hi: [
      "गुजरात भवन एवं अन्य निर्माण श्रमिक कल्याण बोर्ड उन निर्माण श्रमिकों को कई लाभ देता है जो उसमें पंजीकरण कराकर ई-निर्माण कार्ड लेते हैं। पंजीकरण और ज़्यादातर आवेदन ई-निर्माण और सन्मान पोर्टल पर होते हैं।",
      "लाभों में प्रसूति सहायता, सरकारी आवास योजना में मिले घर के लिए अतिरिक्त पैसा, PMJAY-मा के तहत स्वास्थ्य कवर, व्यावसायिक बीमारियों में मदद, अंत्येष्टि सहायता, बच्चों की पढ़ाई में मदद और श्रमिक अन्नपूर्णा केंद्रों पर सस्ता पौष्टिक भोजन शामिल हैं। 2026-27 से दुर्घटना मृत्यु सहायता को ₹5 लाख कवर वाले सामूहिक दुर्घटना बीमा में बदला जा रहा है, जो पंजीकृत और गैर-पंजीकृत दोनों श्रमिकों के लिए है।",
    ],
  },
  benefits: {
    en: [
      "Registered women workers: ₹5,000 for delivery, ₹2,500 for nutrition and ₹5,000 a month for 6 months to make up lost wages (₹37,500 in all), for the first two deliveries.",
      "Wives of registered male workers: ₹6,000 for each of the first two deliveries.",
      "Shri Nanaji Deshmukh Awas: ₹1,60,000 extra towards an EWS/LIG/MIG house allotted under state or central housing, paid to the housing authority.",
      "Free treatment under PMJAY-MA for registered workers.",
      "Occupational disease or serious injury: up to ₹3 lakh, with monthly help of ₹1,500 or ₹3,000 depending on disability.",
      "₹10,000 funeral help to the family if a registered worker dies.",
      "Education help and tablets for workers' children, and low-cost meals at Shramik Annapurna centres.",
    ],
    hi: [
      "पंजीकृत महिला श्रमिक: पहले दो प्रसव पर प्रसव के लिए ₹5,000, पोषण के लिए ₹2,500 और मज़दूरी के नुकसान की भरपाई के लिए 6 महीने तक ₹5,000 महीना (कुल ₹37,500)।",
      "पंजीकृत पुरुष श्रमिक की पत्नी: पहले दो प्रसव पर हर बार ₹6,000।",
      "श्री नानाजी देशमुख आवास: राज्य या केंद्र की आवास योजना में मिले EWS/LIG/MIG घर के लिए ₹1,60,000 अतिरिक्त, जो आवास प्राधिकरण को दिए जाते हैं।",
      "पंजीकृत श्रमिकों के लिए PMJAY-मा में मुफ़्त इलाज।",
      "व्यावसायिक बीमारी या गंभीर चोट: ₹3 लाख तक, और अशक्तता के हिसाब से हर महीने ₹1,500 या ₹3,000।",
      "पंजीकृत श्रमिक की मृत्यु पर परिवार को ₹10,000 अंत्येष्टि सहायता।",
      "श्रमिकों के बच्चों के लिए शिक्षा सहायता और टैबलेट, और श्रमिक अन्नपूर्णा केंद्रों पर कम क़ीमत पर भोजन।",
    ],
  },
  eligibilityText: {
    en: [
      "You work in building or other construction work in Gujarat.",
      "You are registered with the board (aged 18 to 60, with at least 90 days of construction work in the past year) and your registration is current.",
      "Each benefit has its own conditions and time limits, such as applying within 12 months of a delivery.",
    ],
    hi: [
      "आप गुजरात में भवन या अन्य निर्माण का काम करते हों।",
      "आप बोर्ड में पंजीकृत हों (18 से 60 साल, पिछले साल में कम से कम 90 दिन निर्माण का काम) और आपका पंजीकरण चालू हो।",
      "हर लाभ की अपनी शर्तें और समय सीमा हैं, जैसे प्रसव के 12 महीने के अंदर आवेदन करना।",
    ],
  },
  applicationProcess: {
    online: {
      en: [
        "Register as a construction worker on enirmanbocw.gujarat.gov.in to get your e-Nirman card.",
        "Log in on sanman.gujarat.gov.in and apply for the benefit you need, uploading the documents asked for.",
        "Help is also available at the board's district offices.",
      ],
      hi: [
        "ई-निर्माण कार्ड के लिए enirmanbocw.gujarat.gov.in पर निर्माण श्रमिक के रूप में पंजीकरण करें।",
        "sanman.gujarat.gov.in पर लॉगिन करके ज़रूरी लाभ के लिए आवेदन करें और माँगे गए दस्तावेज़ अपलोड करें।",
        "बोर्ड के ज़िला कार्यालयों से भी मदद मिलती है।",
      ],
    },
  },

  officialUrl: "https://sanman.gujarat.gov.in/",
  sources: [
    "https://sanman.gujarat.gov.in/",
    "https://bocwwb.gujarat.gov.in/gr.htm",
    "https://cmogujarat.gov.in/sites/default/files/2026-02/gujarat-budget-2026-27.pdf",
  ],
  lastVerified: "2026-10-06",
  launchedYear: 2004,
  status: "active",
};

export default scheme;
