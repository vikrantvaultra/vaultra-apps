import { all, ageBetween, female, incomeUpTo, labelled, notGovtEmployee, notTaxPayer, residentOf, when } from "@/lib/engine/build";
import type { Scheme } from "@/lib/types";

const scheme: Scheme = {
  slug: "ladli-behna-yojana",
  overlapGroup: "women-monthly",
  name: { en: "Mukhyamantri Ladli Behna Yojana", hi: "मुख्यमंत्री लाड़ली बहना योजना" },
  aka: ["Ladli Behna", "Ladli Bahna", "Ladli Behna Yojana MP"],
  shortDescription: {
    en: "Married, widowed and divorced women in Madhya Pradesh aged 21 to 60, from families earning up to ₹2.5 lakh a year, get ₹1,500 every month in their bank account.",
    hi: "मध्य प्रदेश की 21 से 60 साल की शादीशुदा, विधवा और तलाकशुदा महिलाओं को, जिनके परिवार की सालाना आय ₹2.5 लाख तक है, हर महीने ₹1,500 बैंक खाते में मिलते हैं।",
  },
  level: "state",
  state: "madhya-pradesh",
  department: {
    en: "Women and Child Development Department, Government of Madhya Pradesh",
    hi: "महिला एवं बाल विकास विभाग, मध्य प्रदेश सरकार",
  },
  categories: ["women-child", "social-welfare"],
  tags: ["women", "monthly allowance", "ladli behna", "dbt", "widow", "madhya pradesh"],
  benefitType: "cash",
  isDBT: true,
  value: { amount: 1500, period: "monthly", kind: "cash" },
  ageRange: { min: 21, max: 60 },
  kundliHouse: "women-family",
  eligibility: all(
    residentOf("madhya-pradesh"),
    female(),
    ...ageBetween(21, 60),
    labelled(when("marital", "in", ["married", "widowed", "divorced", "separated"]), {
      en: "You are married, widowed, divorced or abandoned",
      hi: "आप शादीशुदा, विधवा, तलाकशुदा या परित्यक्ता हैं",
    }),
    incomeUpTo(250_000),
    labelled(notTaxPayer(), { en: "No one in the family pays income tax", hi: "परिवार में कोई आयकर न देता हो" }),
    labelled(notGovtEmployee(), {
      en: "No one in the family is a government employee or government pensioner",
      hi: "परिवार में कोई सरकारी कर्मचारी या सरकारी पेंशनभोगी न हो",
    }),
  ),

  details: {
    en: [
      "Ladli Behna Yojana is Madhya Pradesh's monthly cash support for women. It started in June 2023 with ₹1,000 a month. The amount was later raised to ₹1,250, and since late 2025 it is ₹1,500 a month.",
      "The money is sent by DBT into the woman's own Aadhaar-linked bank account, usually around the 10th of each month. Around Raksha Bandhan the government has also paid a one-off extra amount in some years.",
      "The Women and Child Development Department runs the scheme through the cmladlibahna.mp.gov.in portal. Fresh registrations happen only in rounds announced by the government, so most current beneficiaries joined in 2023.",
    ],
    hi: [
      "लाड़ली बहना योजना मध्य प्रदेश सरकार की महिलाओं के लिए हर महीने की नकद सहायता है। यह जून 2023 में ₹1,000 महीने से शुरू हुई। बाद में राशि ₹1,250 की गई, और 2025 के आख़िर से यह ₹1,500 महीना है।",
      "पैसा DBT से महिला के अपने आधार से जुड़े बैंक खाते में आता है, आमतौर पर हर महीने की 10 तारीख के आसपास। कुछ सालों में रक्षाबंधन पर सरकार ने एक बार अलग से अतिरिक्त राशि भी दी है।",
      "यह योजना महिला एवं बाल विकास विभाग cmladlibahna.mp.gov.in पोर्टल से चलाता है। नए पंजीयन सिर्फ़ सरकार की घोषणा पर खुलने वाले चरणों में होते हैं, इसलिए ज़्यादातर मौजूदा लाभार्थी 2023 में जुड़ी थीं।",
    ],
  },
  benefits: {
    en: [
      "₹1,500 every month, paid into your own bank account.",
      "That adds up to ₹18,000 a year.",
      "The money is yours to spend as you choose.",
    ],
    hi: [
      "हर महीने ₹1,500, सीधे आपके अपने बैंक खाते में।",
      "साल भर में कुल ₹18,000।",
      "यह पैसा आप अपनी मर्ज़ी से खर्च कर सकती हैं।",
    ],
  },
  eligibilityText: {
    en: [
      "A woman who lives in Madhya Pradesh (local resident).",
      "Married, widowed, divorced or abandoned.",
      "Aged 21 to 60 years (age counted as on 1 January of the year of application).",
      "Total family income is up to ₹2.5 lakh a year.",
      "Has an Aadhaar-linked bank account in her own name with DBT enabled.",
    ],
    hi: [
      "मध्य प्रदेश की स्थानीय निवासी महिला।",
      "शादीशुदा, विधवा, तलाकशुदा या परित्यक्ता हो।",
      "उम्र 21 से 60 साल (आवेदन वाले साल की 1 जनवरी के हिसाब से)।",
      "परिवार की कुल सालाना आय ₹2.5 लाख तक हो।",
      "उसके अपने नाम पर आधार से जुड़ा और DBT चालू बैंक खाता हो।",
    ],
  },
  exclusions: {
    en: [
      "Family income above ₹2.5 lakh a year, or anyone in the family pays income tax.",
      "Anyone in the family is a regular or permanent government employee, or gets a government pension.",
      "She already gets ₹1,250 or more a month from another government scheme.",
      "Anyone in the family is a current or former MP, MLA or holds certain other elected or board posts.",
      "The family owns more than 5 acres of farmland together.",
      "The family owns a four-wheeler (tractors don't count).",
    ],
    hi: [
      "परिवार की सालाना आय ₹2.5 लाख से ज़्यादा हो, या परिवार में कोई आयकर देता हो।",
      "परिवार में कोई नियमित या स्थायी सरकारी कर्मचारी हो, या सरकारी पेंशन लेता हो।",
      "उसे पहले से किसी दूसरी सरकारी योजना से हर महीने ₹1,250 या उससे ज़्यादा मिलते हों।",
      "परिवार में कोई मौजूदा या पूर्व सांसद, विधायक हो या कुछ अन्य निर्वाचित या बोर्ड पदों पर हो।",
      "परिवार के पास कुल मिलाकर 5 एकड़ से ज़्यादा खेती की ज़मीन हो।",
      "परिवार के पास चार पहिया गाड़ी हो (ट्रैक्टर इसमें नहीं गिना जाता)।",
    ],
  },
  applicationProcess: {
    offline: {
      en: [
        "When the government opens a registration round, go to the camp at your gram panchayat or ward office.",
        "Bring your Samagra ID and Aadhaar. The camp staff fill in your form online and take a live photo and Aadhaar e-KYC.",
        "Keep the acknowledgement slip. You can check your status and payments on cmladlibahna.mp.gov.in.",
      ],
      hi: [
        "जब सरकार पंजीयन का चरण खोले, तो अपनी ग्राम पंचायत या वार्ड कार्यालय में लगे शिविर में जाएँ।",
        "समग्र ID और आधार साथ ले जाएँ। शिविर के कर्मचारी आपका फ़ॉर्म ऑनलाइन भरेंगे और लाइव फ़ोटो व आधार e-KYC करेंगे।",
        "पावती संभाल कर रखें। आवेदन की स्थिति और भुगतान cmladlibahna.mp.gov.in पर देख सकती हैं।",
      ],
    },
  },
  documents: {
    en: [
      "Samagra family and member ID",
      "Aadhaar card",
      "Bank account details (Aadhaar-linked, DBT enabled)",
      "Mobile number",
    ],
    hi: [
      "समग्र परिवार और सदस्य ID",
      "आधार कार्ड",
      "बैंक खाते का विवरण (आधार से जुड़ा, DBT चालू)",
      "मोबाइल नंबर",
    ],
  },
  faqs: [
    {
      q: { en: "Can I apply now?", hi: "क्या मैं अभी आवेदन कर सकती हूँ?" },
      a: {
        en: "Only when the government announces a new registration round. Watch for news from your gram panchayat or ward office, or the official portal.",
        hi: "सिर्फ़ तब, जब सरकार पंजीयन का नया चरण घोषित करे। अपनी ग्राम पंचायत, वार्ड कार्यालय या आधिकारिक पोर्टल की सूचना पर नज़र रखें।",
      },
    },
    {
      q: { en: "My payment did not come. What should I check?", hi: "मेरा पैसा नहीं आया। क्या देखूँ?" },
      a: {
        en: "Check that your bank account is linked to Aadhaar and DBT is enabled. Payments also stop when a woman turns 60. You can see the payment status on the portal or call the helpline 0755-2700800.",
        hi: "देखें कि आपका बैंक खाता आधार से जुड़ा है और DBT चालू है। 60 साल की उम्र पूरी होने पर भी भुगतान बंद हो जाता है। भुगतान की स्थिति पोर्टल पर देखें या हेल्पलाइन 0755-2700800 पर फ़ोन करें।",
      },
    },
  ],

  officialUrl: "https://cmladlibahna.mp.gov.in/",
  sources: [
    "https://cmladlibahna.mp.gov.in/",
    "https://www.drishtiias.com/state-pcs-current-affairs/madhya-pradesh-budget-2026-27",
  ],
  lastVerified: "2026-10-06",
  launchedYear: 2023,
  status: "active",
};

export default scheme;
