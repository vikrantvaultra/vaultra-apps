import { all, any, female, incomeUpTo, labelled, minAge, residentOf, when } from "@/lib/engine/build";
import type { Scheme } from "@/lib/types";

const scheme: Scheme = {
  slug: "ganga-swaroopa-arthik-sahay-yojana",
  overlapGroup: "widow-pension",
  name: { en: "Ganga Swaroopa Arthik Sahay Yojana", hi: "गंगा स्वरूपा आर्थिक सहाय योजना" },
  aka: ["Ganga Swarupa", "Gujarat widow pension", "Vidhva sahay Gujarat"],
  shortDescription: {
    en: "Widows aged 18 or more in Gujarat with family income up to ₹1.2 lakh (village) or ₹1.5 lakh (city) get ₹1,250 every month by DBT.",
    hi: "गुजरात में 18 साल या ज़्यादा उम्र की विधवाओं को, जिनके परिवार की आय गाँव में ₹1.2 लाख और शहर में ₹1.5 लाख तक है, हर महीने ₹1,250 DBT से मिलते हैं।",
  },
  level: "state",
  state: "gujarat",
  department: { en: "Women and Child Development Department, Government of Gujarat", hi: "महिला एवं बाल विकास विभाग, गुजरात सरकार" },
  categories: ["pension-insurance", "women-child", "social-welfare"],
  tags: ["widow pension", "widow", "ganga swaroopa", "pension", "women", "gujarat"],
  benefitType: "pension",
  isDBT: true,
  value: { amount: 1250, period: "monthly", kind: "pension" },
  ageRange: { min: 18 },
  kundliHouse: "women-family",
  eligibility: all(
    residentOf("gujarat"),
    female(),
    when("marital", "eq", "widowed"),
    minAge(18),
    labelled(
      any(all(when("area", "eq", "rural"), incomeUpTo(120_000)), all(when("area", "eq", "urban"), incomeUpTo(150_000))),
      { en: "Family income up to ₹1.2 lakh a year in a village or ₹1.5 lakh in a city", hi: "परिवार की सालाना आय गाँव में ₹1.2 लाख और शहर में ₹1.5 लाख तक हो" },
    ),
  ),

  details: {
    en: [
      "Ganga Swaroopa Arthik Sahay Yojana is Gujarat's monthly pension for widows. The state calls widows 'Ganga Swaroopa' as a mark of respect, and renamed the old widow pension this way in 2019.",
      "Every eligible widow gets ₹1,250 a month straight into her post office or bank account. The earlier rule that stopped the pension once a son turned 21 has been removed, so the support now continues for life.",
      "The Women and Child Development Department runs the scheme and the Taluka Mamlatdar approves applications. The 2026-27 budget set aside ₹2,848 crore for it, and more than 16 lakh widows were being paid in 2025.",
    ],
    hi: [
      "गंगा स्वरूपा आर्थिक सहाय योजना गुजरात की विधवा महिलाओं के लिए मासिक पेंशन है। राज्य सम्मान के तौर पर विधवाओं को 'गंगा स्वरूपा' कहता है, और 2019 में पुरानी विधवा पेंशन का नाम यही रखा गया।",
      "हर पात्र विधवा को हर महीने ₹1,250 सीधे उसके डाकघर या बैंक खाते में मिलते हैं। पहले बेटे के 21 साल का होने पर पेंशन बंद हो जाती थी, यह नियम अब हटा दिया गया है, इसलिए मदद अब जीवन भर मिलती है।",
      "यह योजना महिला एवं बाल विकास विभाग चलाता है और तालुका मामलतदार आवेदन मंज़ूर करते हैं। 2026-27 के बजट में इसके लिए ₹2,848 करोड़ रखे गए हैं, और 2025 में 16 लाख से ज़्यादा विधवाओं को पेंशन मिल रही थी।",
    ],
  },
  benefits: {
    en: [
      "₹1,250 every month for life.",
      "Paid by DBT into your post office or bank account.",
      "Widows aged 18 to 50 can also get free skill training with a toolkit under a linked rehabilitation scheme.",
    ],
    hi: [
      "जीवन भर हर महीने ₹1,250।",
      "पैसा DBT से आपके डाकघर या बैंक खाते में आता है।",
      "18 से 50 साल की विधवाओं को एक जुड़ी पुनर्वास योजना के तहत मुफ़्त कौशल प्रशिक्षण और औज़ार किट भी मिल सकती है।",
    ],
  },
  eligibilityText: {
    en: [
      "A widow aged 18 or older who lives in Gujarat.",
      "Family income up to ₹1,20,000 a year in rural areas or ₹1,50,000 a year in urban areas.",
      "She has not remarried.",
    ],
    hi: [
      "गुजरात में रहने वाली 18 साल या उससे ज़्यादा उम्र की विधवा।",
      "परिवार की सालाना आय गाँव में ₹1,20,000 और शहर में ₹1,50,000 तक हो।",
      "उसने दोबारा शादी न की हो।",
    ],
  },
  exclusions: {
    en: ["Family income above the rural or urban limit.", "Widows who have remarried (they can apply for the Ganga Swaroopa remarriage assistance instead)."],
    hi: ["परिवार की आय गाँव या शहर की सीमा से ज़्यादा हो।", "दोबारा शादी कर चुकी विधवाएँ (वे गंगा स्वरूपा पुनर्विवाह सहायता के लिए आवेदन कर सकती हैं)।"],
  },
  applicationProcess: {
    online: {
      en: [
        "Apply through the Digital Gujarat portal (digitalgujarat.gov.in), or ask the VCE at your gram panchayat or a Jan Seva Kendra to apply for you.",
        "Upload the documents listed below.",
        "The Taluka Mamlatdar checks the application and approves the pension.",
      ],
      hi: [
        "डिजिटल गुजरात पोर्टल (digitalgujarat.gov.in) से आवेदन करें, या ग्राम पंचायत के VCE या जन सेवा केंद्र से आवेदन करवाएँ।",
        "नीचे दिए दस्तावेज़ अपलोड करें।",
        "तालुका मामलतदार आवेदन की जाँच करके पेंशन मंज़ूर करते हैं।",
      ],
    },
    offline: {
      en: [
        "Get the form free of cost from the Mamlatdar office.",
        "Fill it in, attach the documents and submit it to the Taluka Mamlatdar.",
      ],
      hi: [
        "मामलतदार कार्यालय से फ़ॉर्म मुफ़्त में लें।",
        "फ़ॉर्म भरें, दस्तावेज़ लगाएँ और तालुका मामलतदार को जमा करें।",
      ],
    },
  },
  documents: {
    en: ["Husband's death certificate", "Certificate that you are a widow (not remarried)", "Income certificate", "Aadhaar card or voter ID", "Ration card", "Age proof (birth certificate or school leaving certificate)", "Electricity bill or other address proof", "Photograph", "Post office or bank passbook"],
    hi: ["पति का मृत्यु प्रमाण पत्र", "विधवा होने (दोबारा शादी न करने) का प्रमाण पत्र", "आय प्रमाण पत्र", "आधार कार्ड या वोटर ID", "राशन कार्ड", "उम्र का प्रमाण (जन्म प्रमाण पत्र या स्कूल छोड़ने का प्रमाण पत्र)", "बिजली बिल या पते का दूसरा प्रमाण", "फ़ोटो", "डाकघर या बैंक पासबुक"],
  },
  faqs: [
    {
      q: { en: "My son is over 21. Can I still get the pension?", hi: "मेरा बेटा 21 साल से बड़ा है। क्या मुझे पेंशन मिलेगी?" },
      a: {
        en: "Yes. Gujarat removed the rule that stopped the pension when a son turned 21. The income limit still applies.",
        hi: "हाँ। गुजरात ने बेटे के 21 साल होने पर पेंशन बंद करने वाला नियम हटा दिया है। आय सीमा अब भी लागू है।",
      },
    },
    {
      q: { en: "Can I also get the central widow pension?", hi: "क्या मुझे केंद्र की विधवा पेंशन भी मिलेगी?" },
      a: {
        en: "Not as a second pension. Ganga Swaroopa is the state's widow pension; you get one monthly amount.",
        hi: "दूसरी पेंशन के रूप में नहीं। गंगा स्वरूपा ही राज्य की विधवा पेंशन है; आपको एक ही मासिक राशि मिलती है।",
      },
    },
  ],

  officialUrl: "https://wcd.gujarat.gov.in/initiativedetails?id=231",
  sources: [
    "https://wcd.gujarat.gov.in/initiativedetails?id=231",
    "https://cmogujarat.gov.in/sites/default/files/2026-02/gujarat-budget-2026-27.pdf",
    "https://newsarenaindia.com/nation/gujarat-raises-widow-welfare-budget-to-3-015-cr/39089",
  ],
  lastVerified: "2026-10-06",
  launchedYear: 2019,
  status: "active",
};

export default scheme;
