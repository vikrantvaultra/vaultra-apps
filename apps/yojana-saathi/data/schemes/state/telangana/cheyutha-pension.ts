import { all, any, isTrue, labelled, minAge, residentOf, when } from "@/lib/engine/build";
import type { Scheme } from "@/lib/types";

const scheme: Scheme = {
  slug: "cheyutha-pension",
  overlapGroup: "old-age-pension",
  name: { en: "Cheyutha Pensions (Telangana)", hi: "चेयूता पेंशन (तेलंगाना)" },
  aka: ["Cheyutha", "Aasara pension", "Asara pension", "Telangana old age pension", "Telangana widow pension", "Telangana disability pension"],
  shortDescription: {
    en: "Telangana's monthly social security pension for poor older people, widows, single women, persons with disabilities, weavers, toddy tappers, beedi workers and some patients.",
    hi: "तेलंगाना की मासिक सामाजिक सुरक्षा पेंशन, ग़रीब बुज़ुर्गों, विधवाओं, अकेली महिलाओं, दिव्यांगजनों, बुनकरों, ताड़ी निकालने वालों, बीड़ी मज़दूरों और कुछ मरीज़ों के लिए।",
  },
  level: "state",
  state: "telangana",
  department: {
    en: "Society for Elimination of Rural Poverty (SERP), Panchayat Raj and Rural Development Department, Government of Telangana",
    hi: "ग्रामीण ग़रीबी उन्मूलन सोसाइटी (SERP), पंचायत राज एवं ग्रामीण विकास विभाग, तेलंगाना सरकार",
  },
  categories: ["pension-insurance", "social-welfare", "disability"],
  tags: ["pension", "old age pension", "widow pension", "disability pension", "aasara", "single women", "telangana"],
  benefitType: "pension",
  isDBT: true,
  ageRange: { min: 57 },
  kundliHouse: "senior",
  eligibility: all(
    residentOf("telangana"),
    labelled(any(minAge(57), when("marital", "eq", "widowed"), isTrue("disabled")), {
      en: "Aged 57 or more, or a widow, or a person with a disability (other groups listed below)",
      hi: "उम्र 57 साल या ज़्यादा हो, या विधवा हों, या दिव्यांग हों (बाक़ी समूह नीचे दिए हैं)",
    }),
    labelled(isTrue("bpl"), { en: "Family is poor (white ration card / BPL)", hi: "परिवार ग़रीब हो (सफ़ेद राशन कार्ड / BPL)" }),
  ),

  details: {
    en: [
      "Cheyutha is the new name for Telangana's social security pensions, earlier called Aasara. It is part of the government's six guarantees and is run by SERP in the Rural Development Department.",
      "It pays a monthly pension to several groups: older people, widows, persons with disabilities, single women, incapacitated weavers and toddy tappers, beedi workers, people living with HIV, filaria patients and people on dialysis. In 2026 the government also ordered pensions for thalassemia and sickle cell patients.",
      "About 43 lakh people get the pension, and the 2026-27 budget set aside ₹14,861 crore for it and planned two lakh new pensions. The monthly amount depends on the category.",
    ],
    hi: [
      "चेयूता तेलंगाना की सामाजिक सुरक्षा पेंशन का नया नाम है, जिसे पहले आसरा कहा जाता था। यह सरकार की छह गारंटियों का हिस्सा है और ग्रामीण विकास विभाग का SERP इसे चलाता है।",
      "इसमें कई समूहों को हर महीने पेंशन मिलती है: बुज़ुर्ग, विधवाएँ, दिव्यांगजन, अकेली महिलाएँ, काम करने में असमर्थ बुनकर और ताड़ी निकालने वाले, बीड़ी मज़दूर, HIV के साथ जी रहे लोग, फ़ाइलेरिया के मरीज़ और डायलिसिस वाले मरीज़। 2026 में सरकार ने थैलेसीमिया और सिकल सेल के मरीज़ों को भी पेंशन देने का आदेश दिया।",
      "लगभग 43 लाख लोगों को यह पेंशन मिलती है। 2026-27 के बजट में इसके लिए ₹14,861 करोड़ रखे गए और दो लाख नई पेंशन जोड़ने की योजना है। मासिक राशि श्रेणी के हिसाब से अलग होती है।",
    ],
  },
  benefits: {
    en: [
      "A pension every month, paid into your bank or post office account.",
      "The amount depends on your category; persons with disabilities get a higher amount than other groups.",
      "When a disabled pensioner dies, the government has told officials to sanction a pension to the spouse quickly.",
    ],
    hi: [
      "हर महीने पेंशन, सीधे आपके बैंक या डाकघर खाते में।",
      "राशि आपकी श्रेणी पर निर्भर है; दिव्यांगजनों को बाक़ी समूहों से ज़्यादा राशि मिलती है।",
      "दिव्यांग पेंशनभोगी की मृत्यु होने पर सरकार ने अधिकारियों को जीवनसाथी की पेंशन जल्दी मंज़ूर करने को कहा है।",
    ],
  },
  eligibilityText: {
    en: [
      "You live in Telangana and your family is poor (usually a white ration card family).",
      "You belong to one of the covered groups: older person, widow, person with a disability, single woman, incapacitated weaver or toddy tapper, beedi worker, person living with HIV, filaria patient or dialysis patient.",
      "Older people qualify from age 57.",
      "Persons with disabilities need a SADAREM disability certificate.",
    ],
    hi: [
      "आप तेलंगाना में रहते हैं और आपका परिवार ग़रीब है (आमतौर पर सफ़ेद राशन कार्ड वाला परिवार)।",
      "आप इनमें से किसी समूह में आते हैं: बुज़ुर्ग, विधवा, दिव्यांग, अकेली महिला, काम करने में असमर्थ बुनकर या ताड़ी निकालने वाले, बीड़ी मज़दूर, HIV के साथ जी रहे व्यक्ति, फ़ाइलेरिया या डायलिसिस के मरीज़।",
      "बुज़ुर्ग 57 साल की उम्र से पात्र हैं।",
      "दिव्यांगजनों के पास SADAREM दिव्यांगता प्रमाण पत्र होना चाहिए।",
    ],
  },
  exclusions: {
    en: [
      "People who already get a government or service pension.",
      "Families that are not poor (no white ration card).",
      "Only one pension per person, even if you fit more than one group.",
    ],
    hi: [
      "जिन्हें पहले से सरकारी या सेवा पेंशन मिलती है।",
      "जो परिवार ग़रीब श्रेणी में नहीं हैं (सफ़ेद राशन कार्ड नहीं है)।",
      "एक व्यक्ति को एक ही पेंशन मिलती है, भले वह एक से ज़्यादा समूह में आता हो।",
    ],
  },
  applicationProcess: {
    offline: {
      en: [
        "Get the Cheyutha application form from the Cheyutha portal, your Gram Panchayat, MPDO office or municipal office.",
        "Fill it in and submit it with your documents at the MPDO office (rural) or municipal office (urban), or when new applications are called through Praja Palana.",
        "Track your application on the Cheyutha portal using 'New Sanctions Applicants Search'.",
      ],
      hi: [
        "चेयूता आवेदन फ़ॉर्म चेयूता पोर्टल, अपनी ग्राम पंचायत, MPDO दफ़्तर या नगरपालिका दफ़्तर से लें।",
        "फ़ॉर्म भरकर दस्तावेज़ों के साथ MPDO दफ़्तर (गाँव) या नगरपालिका दफ़्तर (शहर) में जमा करें, या जब प्रजा पालना में नए आवेदन लिए जाएँ तब दें।",
        "चेयूता पोर्टल पर 'New Sanctions Applicants Search' से अपने आवेदन की स्थिति देखें।",
      ],
    },
  },
  documents: {
    en: [
      "Aadhaar card",
      "White ration card (Food Security Card)",
      "Age proof (for old age pension)",
      "Husband's death certificate (for widow pension)",
      "SADAREM disability certificate (for disability pension)",
      "Bank or post office passbook",
    ],
    hi: [
      "आधार कार्ड",
      "सफ़ेद राशन कार्ड (फ़ूड सिक्योरिटी कार्ड)",
      "उम्र का सबूत (बुढ़ापा पेंशन के लिए)",
      "पति का मृत्यु प्रमाण पत्र (विधवा पेंशन के लिए)",
      "SADAREM दिव्यांगता प्रमाण पत्र (दिव्यांग पेंशन के लिए)",
      "बैंक या डाकघर पासबुक",
    ],
  },
  faqs: [
    {
      q: { en: "Is Cheyutha the same as Aasara pension?", hi: "क्या चेयूता और आसरा पेंशन एक ही हैं?" },
      a: {
        en: "Yes. The Aasara pensions now run under the name Cheyutha. Existing Aasara pensioners keep getting their pension.",
        hi: "हाँ। आसरा पेंशन अब चेयूता नाम से चलती है। आसरा के पुराने पेंशनभोगियों को पेंशन मिलती रहती है।",
      },
    },
    {
      q: { en: "Has the pension been raised to ₹4,000?", hi: "क्या पेंशन बढ़कर ₹4,000 हो गई है?" },
      a: {
        en: "₹4,000 a month was promised under the Cheyutha guarantee. Check the current amount for your category at your MPDO office or on the Cheyutha portal before relying on it.",
        hi: "चेयूता गारंटी में ₹4,000 महीने का वादा किया गया था। अपनी श्रेणी की मौजूदा राशि MPDO दफ़्तर या चेयूता पोर्टल पर पक्की कर लें।",
      },
    },
  ],

  officialUrl: "https://www.cheyutha.telangana.gov.in/SSPTG/userinterface/portal/loginpage.aspx",
  sources: [
    "https://www.cheyutha.telangana.gov.in/SSPTG/userinterface/portal/loginpage.aspx",
    "https://www.telangana.gov.in/wp-content/uploads/2024/07/Telangana-Socio-Economic-Outlook-2024.pdf",
    "https://prsindia.org/files/budget/budget_state/telangana/2026/Budget_Analysis_2026-27-TS.pdf",
    "https://www.telangana.gov.in/news/press-releases/2026/09/honble-cm-sri-a-revanth-reddy-participated-in-telangana-praja-palana-dinotsavam-2026-celebrations-at-public-gardens-hyderabad/",
  ],
  lastVerified: "2026-10-06",
  launchedYear: 2014,
  status: "check-status",
};

export default scheme;
