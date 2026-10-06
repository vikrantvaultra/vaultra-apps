import { all, minAge, residentOf, when } from "@/lib/engine/build";
import type { Scheme } from "@/lib/types";

const scheme: Scheme = {
  slug: "delhi-bocw-welfare",
  name: { en: "Delhi Building & Other Construction Workers' Welfare Schemes", hi: "दिल्ली भवन एवं अन्य निर्माण श्रमिक कल्याण योजनाएँ" },
  aka: ["DBOCWWB", "Delhi labour card", "Delhi construction workers board", "Delhi BOCW"],
  shortDescription: {
    en: "Construction workers registered with the Delhi board get ₹30,000 at childbirth, ₹3,000 monthly pension after 60, monthly study help for children, marriage aid of up to ₹51,000 and death benefits.",
    hi: "दिल्ली बोर्ड में पंजीकृत निर्माण मज़दूरों को बच्चे के जन्म पर ₹30,000, 60 के बाद ₹3,000 मासिक पेंशन, बच्चों की पढ़ाई के लिए हर महीने मदद, ₹51,000 तक विवाह सहायता और मृत्यु लाभ मिलते हैं।",
  },
  level: "state",
  state: "delhi",
  department: {
    en: "Labour Department, Govt. of NCT of Delhi (Delhi Building & Other Construction Workers Welfare Board)",
    hi: "श्रम विभाग, दिल्ली सरकार (दिल्ली भवन एवं अन्य निर्माण श्रमिक कल्याण बोर्ड)",
  },
  categories: ["social-welfare", "pension-insurance"],
  tags: ["construction worker", "labour card", "bocw", "mazdoor", "maternity", "pension", "delhi"],
  benefitType: "composite",
  isDBT: true,
  ageRange: { min: 18 },
  kundliHouse: "career",
  eligibility: all(residentOf("delhi"), when("occupation", "eq", "construction-worker"), minAge(18)),

  details: {
    en: [
      "The Delhi Building and Other Construction Workers Welfare Board looks after people who work on building sites, roads and other construction in Delhi. It is funded by a cess paid by builders, not by the workers.",
      "Once you register with the Board and keep your membership active, you and your family can claim cash help at childbirth, for your children's studies and marriages, in illness, in old age and after a death in the family.",
      "Registration and claims are made on the Board's portal (dbocwwb.delhi.gov.in) or at its kiosks, and money is sent to your Aadhaar-linked bank account.",
    ],
    hi: [
      "दिल्ली भवन एवं अन्य निर्माण श्रमिक कल्याण बोर्ड दिल्ली में इमारत, सड़क और दूसरे निर्माण काम करने वाले मज़दूरों के लिए है। इसका पैसा बिल्डरों से लिए जाने वाले सेस से आता है, मज़दूरों से नहीं।",
      "बोर्ड में पंजीकरण कराने और सदस्यता चालू रखने पर आप और आपका परिवार बच्चे के जन्म, बच्चों की पढ़ाई और शादी, बीमारी, बुढ़ापे और परिवार में मृत्यु होने पर आर्थिक मदद ले सकते हैं।",
      "पंजीकरण और दावे बोर्ड के पोर्टल (dbocwwb.delhi.gov.in) या उसके कियोस्क पर होते हैं, और पैसा आधार से जुड़े बैंक खाते में आता है।",
    ],
  },
  benefits: {
    en: [
      "Maternity benefit of ₹30,000 per birth, for up to two births (male workers can claim for their wife).",
      "Pension of ₹3,000 a month after age 60, with a yearly increase of ₹300; family pension for the surviving spouse.",
      "Education help for up to two children: ₹500 a month (Class 1–8) up to ₹10,000 a month (engineering, medical, MBA).",
      "Marriage help of ₹51,000 (woman worker or daughter) or ₹35,000 (man worker or son).",
      "Death benefit of ₹1 lakh (₹2 lakh for accidental death at work) plus ₹10,000 for funeral costs.",
      "Medical help of ₹300 a day of hospital stay (up to ₹10,000), and up to ₹2 lakh for major illnesses.",
      "Disability pension of ₹3,000 a month, ₹5,000 tool kit grant once in 5 years, and a repayable house advance of ₹3–5 lakh.",
    ],
    hi: [
      "हर जन्म पर ₹30,000 मातृत्व लाभ, दो बार तक (पुरुष मज़दूर अपनी पत्नी के लिए दावा कर सकते हैं)।",
      "60 साल के बाद ₹3,000 महीना पेंशन, हर साल ₹300 की बढ़ोतरी; पति/पत्नी के लिए पारिवारिक पेंशन।",
      "दो बच्चों तक की पढ़ाई में मदद: ₹500 महीना (कक्षा 1–8) से ₹10,000 महीना (इंजीनियरिंग, मेडिकल, MBA) तक।",
      "शादी के लिए ₹51,000 (महिला मज़दूर या बेटी) या ₹35,000 (पुरुष मज़दूर या बेटा)।",
      "मृत्यु पर ₹1 लाख (काम के दौरान दुर्घटना में मृत्यु पर ₹2 लाख) और अंतिम संस्कार के लिए ₹10,000।",
      "अस्पताल में भर्ती रहने पर ₹300 रोज़ (₹10,000 तक), और बड़ी बीमारियों में ₹2 लाख तक की मदद।",
      "₹3,000 महीना दिव्यांगता पेंशन, हर 5 साल में एक बार ₹5,000 का औज़ार अनुदान, और ₹3–5 लाख का लौटाने वाला मकान अग्रिम।",
    ],
  },
  eligibilityText: {
    en: [
      "A building or construction worker in Delhi aged 18 to 60 at the time of registration.",
      "Has done at least 90 days of construction work in the last 12 months.",
      "Registered with the Delhi BOCW Welfare Board, with membership kept active (renewed).",
      "Some benefits need a minimum period of membership; pension needs continuous membership before 60.",
    ],
    hi: [
      "पंजीकरण के समय 18 से 60 साल की उम्र का दिल्ली का भवन या निर्माण मज़दूर।",
      "पिछले 12 महीनों में कम से कम 90 दिन निर्माण काम किया हो।",
      "दिल्ली BOCW कल्याण बोर्ड में पंजीकृत हो और सदस्यता चालू (नवीनीकृत) रखी हो।",
      "कुछ लाभों के लिए न्यूनतम सदस्यता अवधि चाहिए; पेंशन के लिए 60 से पहले लगातार सदस्यता ज़रूरी है।",
    ],
  },
  exclusions: {
    en: [
      "Workers whose membership has lapsed cannot claim most benefits until it is renewed.",
      "Workers who are members of another statutory welfare fund for the same work.",
      "Pension is not given if you already get a pension from another welfare board or government source.",
    ],
    hi: [
      "जिनकी सदस्यता ख़त्म हो गई है, वे नवीनीकरण तक ज़्यादातर लाभ नहीं ले सकते।",
      "जो मज़दूर इसी काम के लिए किसी दूसरे वैधानिक कल्याण कोष के सदस्य हैं।",
      "अगर आपको पहले से किसी दूसरे कल्याण बोर्ड या सरकारी स्रोत से पेंशन मिलती है, तो यह पेंशन नहीं मिलती।",
    ],
  },
  applicationProcess: {
    online: {
      en: [
        "Go to dbocwwb.delhi.gov.in and register as a construction worker with your Aadhaar, bank details and 90-days work certificate.",
        "After verification you get a registration (labour) card. Renew it on time.",
        "To claim a benefit, log in, pick the scheme, upload the documents asked for and submit. Track the status on the portal.",
      ],
      hi: [
        "dbocwwb.delhi.gov.in पर जाएँ और आधार, बैंक विवरण और 90 दिन काम के प्रमाण पत्र के साथ निर्माण मज़दूर के रूप में पंजीकरण करें।",
        "जाँच के बाद आपको पंजीकरण (लेबर) कार्ड मिलता है। इसे समय पर नवीनीकृत कराएँ।",
        "लाभ के लिए लॉग इन करें, योजना चुनें, माँगे गए दस्तावेज़ अपलोड करके जमा करें। स्थिति पोर्टल पर देखें।",
      ],
    },
    offline: {
      en: [
        "Visit a Board kiosk or your district labour office for help with registration and claims.",
        "A Labour Inspector verifies the claim before the money is paid to your bank account.",
      ],
      hi: [
        "पंजीकरण और दावों में मदद के लिए बोर्ड के कियोस्क या अपने ज़िला श्रम कार्यालय जाएँ।",
        "पैसा बैंक खाते में आने से पहले श्रम निरीक्षक दावे की जाँच करते हैं।",
      ],
    },
  },
  documents: {
    en: [
      "Aadhaar card",
      "Certificate of 90 days of construction work in the last 12 months",
      "Bank passbook of an Aadhaar-seeded account",
      "Passport-size photo",
      "Benefit-specific papers, such as a birth certificate, marriage proof, fee receipt or hospital discharge summary",
    ],
    hi: [
      "आधार कार्ड",
      "पिछले 12 महीनों में 90 दिन निर्माण काम का प्रमाण पत्र",
      "आधार से जुड़े बैंक खाते की पासबुक",
      "पासपोर्ट साइज़ फ़ोटो",
      "लाभ के हिसाब से काग़ज़, जैसे जन्म प्रमाण पत्र, शादी का प्रमाण, फ़ीस रसीद या अस्पताल की डिस्चार्ज समरी",
    ],
  },
  faqs: [
    {
      q: { en: "Do I need to live in Delhi to register?", hi: "क्या पंजीकरण के लिए दिल्ली में रहना ज़रूरी है?" },
      a: {
        en: "The Board registers workers doing construction work in Delhi. You will need a Delhi address and proof of 90 days of construction work in the last year.",
        hi: "बोर्ड दिल्ली में निर्माण काम करने वाले मज़दूरों का पंजीकरण करता है। आपको दिल्ली का पता और पिछले साल 90 दिन निर्माण काम का प्रमाण देना होगा।",
      },
    },
    {
      q: { en: "What happens if I forget to renew my membership?", hi: "अगर मैं सदस्यता का नवीनीकरण भूल जाऊँ तो क्या होगा?" },
      a: {
        en: "Most benefits need active membership on the date of the event (birth, marriage, illness or death). Renew on the portal or at a kiosk as soon as possible to avoid losing benefits.",
        hi: "ज़्यादातर लाभों के लिए घटना (जन्म, शादी, बीमारी या मृत्यु) की तारीख पर सदस्यता चालू होनी चाहिए। लाभ न छूटें, इसलिए जल्द से जल्द पोर्टल या कियोस्क पर नवीनीकरण कराएँ।",
      },
    },
  ],

  officialUrl: "https://dbocwwb.delhi.gov.in/",
  sources: [
    "https://dbocwwb.delhi.gov.in/",
    "https://labour.delhi.gov.in/labour/delhi-building-and-other-construction-workers-welfare-board",
  ],
  lastVerified: "2026-10-06",
  launchedYear: 2002,
  status: "active",
};

export default scheme;
