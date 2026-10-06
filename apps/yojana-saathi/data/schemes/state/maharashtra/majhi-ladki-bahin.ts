import { all, ageBetween, female, incomeUpTo, labelled, notGovtEmployee, notTaxPayer, residentOf } from "@/lib/engine/build";
import type { Scheme } from "@/lib/types";

const scheme: Scheme = {
  slug: "majhi-ladki-bahin",
  name: { en: "Mukhyamantri Majhi Ladki Bahin Yojana", hi: "मुख्यमंत्री माझी लाडकी बहिण योजना" },
  aka: ["Ladki Bahin", "Ladki Bahin Yojana", "Majhi Ladki Bahin"],
  shortDescription: {
    en: "Women in Maharashtra aged 21 to 65 from families earning up to ₹2.5 lakh a year get ₹1,500 every month straight into their bank account.",
    hi: "महाराष्ट्र में 21 से 65 साल की उन महिलाओं को, जिनके परिवार की सालाना आय ₹2.5 लाख तक है, हर महीने ₹1,500 सीधे बैंक खाते में मिलते हैं।",
  },
  level: "state",
  state: "maharashtra",
  department: {
    en: "Women and Child Development Department, Government of Maharashtra",
    hi: "महिला एवं बाल विकास विभाग, महाराष्ट्र सरकार",
  },
  categories: ["women-child", "social-welfare"],
  tags: ["women", "monthly allowance", "ladki bahin", "dbt", "widow", "maharashtra"],
  benefitType: "cash",
  isDBT: true,
  value: { amount: 1500, period: "monthly", kind: "cash" },
  ageRange: { min: 21, max: 65 },
  kundliHouse: "women-family",
  eligibility: all(
    residentOf("maharashtra"),
    female(),
    ...ageBetween(21, 65),
    incomeUpTo(250_000),
    labelled(notTaxPayer(), { en: "No one in the family pays income tax", hi: "परिवार में कोई आयकर न देता हो" }),
    labelled(notGovtEmployee(), { en: "No one in the family is a regular government employee or government pensioner", hi: "परिवार में कोई नियमित सरकारी कर्मचारी या सरकारी पेंशनभोगी न हो" }),
  ),

  details: {
    en: [
      "Majhi Ladki Bahin Yojana is Maharashtra's monthly cash support scheme for women from low- and middle-income families. It started in July 2024.",
      "Eligible women get ₹1,500 a month by Direct Benefit Transfer into their own Aadhaar-linked bank account. The government has spoken about raising this to ₹2,100, but as of now the amount paid is ₹1,500.",
      "The Women and Child Development Department runs the scheme. Beneficiaries are checked from time to time, and an e-KYC on the official portal is now needed to keep getting the money.",
    ],
    hi: [
      "माझी लाडकी बहिण योजना महाराष्ट्र सरकार की मासिक नकद सहायता योजना है, जो कम और मध्यम आय वाले परिवारों की महिलाओं के लिए है। यह जुलाई 2024 में शुरू हुई।",
      "पात्र महिलाओं को हर महीने ₹1,500 DBT से उनके अपने आधार से जुड़े बैंक खाते में मिलते हैं। सरकार ने इसे ₹2,100 करने की बात कही है, पर अभी ₹1,500 ही दिए जा रहे हैं।",
      "यह योजना महिला एवं बाल विकास विभाग चलाता है। लाभार्थियों की समय-समय पर जाँच होती है, और पैसा मिलते रहने के लिए अब पोर्टल पर e-KYC करना ज़रूरी है।",
    ],
  },
  benefits: {
    en: [
      "₹1,500 every month, paid into your own bank account.",
      "That adds up to ₹18,000 a year.",
      "The money is yours to use as you need, for the household, health or savings.",
    ],
    hi: [
      "हर महीने ₹1,500, सीधे आपके अपने बैंक खाते में।",
      "साल भर में कुल ₹18,000।",
      "यह पैसा आप अपनी ज़रूरत के हिसाब से घर, सेहत या बचत में लगा सकती हैं।",
    ],
  },
  eligibilityText: {
    en: [
      "A woman living in Maharashtra (domicile), or a woman born elsewhere who is married to a man from Maharashtra.",
      "Aged 21 to 65 years.",
      "Married, widowed, divorced, abandoned or destitute women can apply. One unmarried woman per family can also apply.",
      "Total family income is up to ₹2.5 lakh a year.",
      "Has a bank account in her own name, linked to Aadhaar.",
    ],
    hi: [
      "महाराष्ट्र की निवासी (अधिवास) महिला, या बाहर जन्मी वह महिला जिसकी शादी महाराष्ट्र के पुरुष से हुई है।",
      "उम्र 21 से 65 साल।",
      "शादीशुदा, विधवा, तलाकशुदा, परित्यक्ता या निराश्रित महिलाएँ आवेदन कर सकती हैं। एक परिवार की एक अविवाहित महिला भी आवेदन कर सकती है।",
      "परिवार की कुल सालाना आय ₹2.5 लाख तक हो।",
      "उसके अपने नाम पर आधार से जुड़ा बैंक खाता हो।",
    ],
  },
  exclusions: {
    en: [
      "Family income above ₹2.5 lakh a year.",
      "Anyone in the family pays income tax.",
      "Anyone in the family is a regular or permanent government or PSU employee, or gets a government pension.",
      "The family owns a four-wheeler (tractors don't count).",
      "Anyone in the family is a current or former MP or MLA, or sits on the board of a government company or corporation.",
      "She already gets ₹1,500 or more a month from another government cash scheme.",
    ],
    hi: [
      "परिवार की सालाना आय ₹2.5 लाख से ज़्यादा हो।",
      "परिवार में कोई आयकर देता हो।",
      "परिवार में कोई नियमित या स्थायी सरकारी/सरकारी उपक्रम का कर्मचारी हो, या सरकारी पेंशन लेता हो।",
      "परिवार के पास चार पहिया गाड़ी हो (ट्रैक्टर इसमें नहीं गिना जाता)।",
      "परिवार में कोई मौजूदा या पूर्व सांसद या विधायक हो, या किसी सरकारी कंपनी/निगम के बोर्ड में हो।",
      "उसे पहले से किसी दूसरी सरकारी योजना से हर महीने ₹1,500 या उससे ज़्यादा मिलते हों।",
    ],
  },
  applicationProcess: {
    online: {
      en: [
        "Go to ladakibahin.maharashtra.gov.in and register with your mobile number.",
        "Fill in the form, upload your documents and a live photo, and submit.",
        "Existing beneficiaries: complete the e-KYC on the same portal with your Aadhaar OTP so payments keep coming.",
      ],
      hi: [
        "ladakibahin.maharashtra.gov.in पर जाएँ और मोबाइल नंबर से रजिस्टर करें।",
        "फ़ॉर्म भरें, दस्तावेज़ और लाइव फ़ोटो अपलोड करें और जमा करें।",
        "पहले से लाभ ले रही महिलाएँ: इसी पोर्टल पर आधार OTP से e-KYC पूरी करें, ताकि पैसा आता रहे।",
      ],
    },
    offline: {
      en: [
        "When registration is open, visit your Anganwadi worker, ward office or Setu Suvidha Kendra.",
        "They will fill in and upload the form for you, free of cost.",
        "Keep the application number to track your status.",
      ],
      hi: [
        "जब रजिस्ट्रेशन खुला हो, अपनी आंगनवाड़ी सेविका, वार्ड ऑफ़िस या सेतु सुविधा केंद्र पर जाएँ।",
        "वे आपका फ़ॉर्म मुफ़्त में भरकर अपलोड कर देंगे।",
        "स्थिति देखने के लिए आवेदन नंबर संभाल कर रखें।",
      ],
    },
  },
  documents: {
    en: [
      "Aadhaar card",
      "Maharashtra domicile certificate, or a yellow/orange ration card, voter ID or birth certificate as proof",
      "Income certificate (not needed if you have a yellow or orange ration card)",
      "Bank passbook of an Aadhaar-linked account in your name",
      "Ration card",
      "Marriage certificate, if you were born outside Maharashtra",
    ],
    hi: [
      "आधार कार्ड",
      "महाराष्ट्र अधिवास प्रमाण पत्र, या सबूत के तौर पर पीला/केसरी राशन कार्ड, वोटर ID या जन्म प्रमाण पत्र",
      "आय प्रमाण पत्र (पीला या केसरी राशन कार्ड हो तो ज़रूरी नहीं)",
      "आपके नाम के आधार से जुड़े बैंक खाते की पासबुक",
      "राशन कार्ड",
      "विवाह प्रमाण पत्र, अगर आपका जन्म महाराष्ट्र से बाहर हुआ है",
    ],
  },
  faqs: [
    {
      q: { en: "Has the amount been raised to ₹2,100?", hi: "क्या राशि बढ़कर ₹2,100 हो गई है?" },
      a: {
        en: "Not yet. The government has promised ₹2,100, but no order raising the amount has been issued. Payments are still ₹1,500 a month.",
        hi: "अभी नहीं। सरकार ने ₹2,100 का वादा किया है, पर इसका आदेश जारी नहीं हुआ है। अभी भी हर महीने ₹1,500 ही मिलते हैं।",
      },
    },
    {
      q: { en: "My payments stopped. What should I do?", hi: "मेरा पैसा आना बंद हो गया। क्या करूँ?" },
      a: {
        en: "First check that your e-KYC is done on the portal and your bank account is linked to Aadhaar. Payments can also stop if a check found you don't meet a condition, such as a four-wheeler or a government job in the family.",
        hi: "पहले देखें कि पोर्टल पर आपकी e-KYC पूरी है और बैंक खाता आधार से जुड़ा है। जाँच में किसी शर्त पर खरी न उतरने पर भी पैसा रुक सकता है, जैसे परिवार में चार पहिया गाड़ी या सरकारी नौकरी होना।",
      },
    },
    {
      q: { en: "Can two women from the same family get it?", hi: "क्या एक ही परिवार की दो महिलाओं को लाभ मिल सकता है?" },
      a: {
        en: "Yes, more than one married, widowed or divorced woman in a family can qualify, but only one unmarried woman per family.",
        hi: "हाँ, परिवार की एक से ज़्यादा शादीशुदा, विधवा या तलाकशुदा महिलाएँ पात्र हो सकती हैं, पर अविवाहित महिला एक परिवार से एक ही।",
      },
    },
  ],

  officialUrl: "https://ladakibahin.maharashtra.gov.in/",
  sources: [
    "https://womenchild.maharashtra.gov.in/mr/schemes/maukhayamantarai-maajhai-laadakai-bahaina-yaojanaa",
    "https://ladakibahin.maharashtra.gov.in/",
    "https://prsindia.org/budgets/states/maharashtra-budget-analysis-2026-27",
  ],
  lastVerified: "2026-10-06",
  launchedYear: 2024,
  status: "active",
};

export default scheme;
