import { all, female, labelled, minAge, notGovtEmployee, notTaxPayer, residentOf, when } from "@/lib/engine/build";
import type { Scheme } from "@/lib/types";

const scheme: Scheme = {
  slug: "mahtari-vandan-yojana",
  overlapGroup: "women-monthly",
  name: { en: "Mahtari Vandan Yojana", hi: "महतारी वंदन योजना" },
  aka: ["Mahatari Vandan", "Mahtari Vandan Yojana Chhattisgarh", "MVY"],
  shortDescription: {
    en: "Married, widowed, divorced and abandoned women in Chhattisgarh aged 21 or more get ₹1,000 every month in their own Aadhaar-linked bank account.",
    hi: "छत्तीसगढ़ की 21 साल या उससे ज़्यादा उम्र की शादीशुदा, विधवा, तलाकशुदा और परित्यक्ता महिलाओं को हर महीने ₹1,000 उनके अपने आधार से जुड़े बैंक खाते में मिलते हैं।",
  },
  level: "state",
  state: "chhattisgarh",
  department: {
    en: "Women and Child Development Department, Government of Chhattisgarh",
    hi: "महिला एवं बाल विकास विभाग, छत्तीसगढ़ सरकार",
  },
  categories: ["women-child", "social-welfare"],
  tags: ["women", "monthly allowance", "mahtari vandan", "dbt", "widow", "chhattisgarh"],
  benefitType: "cash",
  isDBT: true,
  value: { amount: 1000, period: "monthly", kind: "cash" },
  ageRange: { min: 21 },
  kundliHouse: "women-family",
  eligibility: all(
    residentOf("chhattisgarh"),
    female(),
    minAge(21),
    labelled(when("marital", "in", ["married", "widowed", "divorced", "separated"]), {
      en: "Married, widowed, divorced or abandoned",
      hi: "शादीशुदा, विधवा, तलाकशुदा या परित्यक्ता हों",
    }),
    labelled(notTaxPayer(), { en: "No one in the family pays income tax", hi: "परिवार में कोई आयकर न देता हो" }),
    labelled(notGovtEmployee(), {
      en: "No one in the family works in a government job (permanent, temporary or contract)",
      hi: "परिवार में कोई सरकारी नौकरी (स्थायी, अस्थायी या संविदा) में न हो",
    }),
  ),

  details: {
    en: [
      "Mahtari Vandan Yojana is Chhattisgarh's monthly cash support for women. It started on 1 March 2024 and is run by the Women and Child Development Department.",
      "Every eligible woman gets ₹1,000 a month by Direct Benefit Transfer into her own Aadhaar-linked bank account. Joint accounts are not accepted.",
      "If a woman already gets a Social Welfare Department pension of less than ₹1,000 a month, the scheme pays the difference so that she gets ₹1,000 in total.",
    ],
    hi: [
      "महतारी वंदन योजना छत्तीसगढ़ सरकार की महिलाओं के लिए मासिक नकद सहायता है। यह 1 मार्च 2024 से शुरू हुई और महिला एवं बाल विकास विभाग इसे चलाता है।",
      "हर पात्र महिला को हर महीने ₹1,000 DBT से उसके अपने आधार से जुड़े बैंक खाते में मिलते हैं। संयुक्त (जॉइंट) खाता मान्य नहीं है।",
      "अगर किसी महिला को समाज कल्याण विभाग से ₹1,000 से कम की पेंशन मिल रही है, तो योजना बाक़ी अंतर की राशि देती है, ताकि उसे कुल ₹1,000 मिलें।",
    ],
  },
  benefits: {
    en: [
      "₹1,000 every month in your own bank account.",
      "That adds up to ₹12,000 a year.",
      "Women getting a smaller state pension get a top-up so their total reaches ₹1,000 a month.",
    ],
    hi: [
      "हर महीने ₹1,000 आपके अपने बैंक खाते में।",
      "साल भर में कुल ₹12,000।",
      "कम राशि की राज्य पेंशन पाने वाली महिलाओं को ऊपर से इतनी राशि मिलती है कि कुल ₹1,000 महीना हो जाए।",
    ],
  },
  eligibilityText: {
    en: [
      "A woman living in Chhattisgarh.",
      "Married, widowed, divorced or abandoned.",
      "At least 21 years old on 1 January of the year she applies.",
      "Has her own bank account (not joint) linked to Aadhaar with DBT turned on.",
    ],
    hi: [
      "छत्तीसगढ़ में रहने वाली महिला।",
      "शादीशुदा, विधवा, तलाकशुदा या परित्यक्ता हो।",
      "आवेदन वाले साल की 1 जनवरी को उम्र कम से कम 21 साल हो।",
      "उसका अपना बैंक खाता (जॉइंट नहीं) हो, जो आधार से जुड़ा हो और जिसमें DBT चालू हो।",
    ],
  },
  exclusions: {
    en: [
      "Anyone in her family (husband, wife and dependent children) pays income tax.",
      "Anyone in the family works as an officer or employee (Class 1, 2 or 3) of a central or state government department, PSU, board or local body, whether permanent, temporary or on contract.",
      "Anyone in the family is a current or former MP or MLA.",
      "Anyone in the family is a current or former chairperson or vice-chairperson of a central or state board, corporation or commission.",
    ],
    hi: [
      "परिवार (पति, पत्नी और आश्रित बच्चे) में कोई आयकर देता हो।",
      "परिवार में कोई केंद्र या राज्य सरकार के विभाग, उपक्रम, मंडल या स्थानीय निकाय में प्रथम, द्वितीय या तृतीय वर्ग का अधिकारी या कर्मचारी हो, चाहे स्थायी, अस्थायी या संविदा पर।",
      "परिवार में कोई मौजूदा या पूर्व सांसद या विधायक हो।",
      "परिवार में कोई केंद्र या राज्य सरकार के बोर्ड, निगम या मंडल का मौजूदा या पूर्व अध्यक्ष या उपाध्यक्ष हो।",
    ],
  },
  applicationProcess: {
    online: {
      en: [
        "When a registration round is open, apply on mahtarivandan.cgstate.gov.in or the Mahtari Vandan mobile app using your mobile number and OTP.",
        "Choose your nearest Anganwadi centre, fill in the form and upload your photo and documents.",
        "Later, use the same portal to check your application and payment status or to file a complaint.",
      ],
      hi: [
        "जब पंजीयन खुला हो, mahtarivandan.cgstate.gov.in या महतारी वंदन मोबाइल ऐप पर मोबाइल नंबर और OTP से आवेदन करें।",
        "अपना नज़दीकी आंगनवाड़ी केंद्र चुनें, फ़ॉर्म भरें और फ़ोटो व दस्तावेज़ अपलोड करें।",
        "बाद में इसी पोर्टल पर आवेदन और भुगतान की स्थिति देखें या शिकायत दर्ज करें।",
      ],
    },
    offline: {
      en: [
        "Visit your Anganwadi centre, gram panchayat secretary or ward in-charge during a registration round.",
        "They fill in the form online for you, free of cost.",
        "Sign the affidavit (shapath patra) and keep the acknowledgement.",
      ],
      hi: [
        "पंजीयन के समय अपने आंगनवाड़ी केंद्र, ग्राम पंचायत सचिव या वार्ड प्रभारी के पास जाएँ।",
        "वे मुफ़्त में आपका फ़ॉर्म ऑनलाइन भर देंगे।",
        "शपथ पत्र पर हस्ताक्षर करें और पावती संभाल कर रखें।",
      ],
    },
  },
  documents: {
    en: [
      "Aadhaar card",
      "A photo identity card (such as ration card, voter ID or PAN card)",
      "Mobile number registered with your bank account",
      "Details of an Aadhaar-linked bank account in your own name",
      "Signed affidavit (shapath patra) in the official format",
    ],
    hi: [
      "आधार कार्ड",
      "फ़ोटो पहचान पत्र (जैसे राशन कार्ड, वोटर ID या पैन कार्ड)",
      "बैंक खाते में दर्ज मोबाइल नंबर",
      "आपके अपने नाम के आधार से जुड़े बैंक खाते का विवरण",
      "तय प्रारूप में हस्ताक्षर किया हुआ शपथ पत्र",
    ],
  },
  faqs: [
    {
      q: { en: "Can I apply now?", hi: "क्या मैं अभी आवेदन कर सकती हूँ?" },
      a: {
        en: "New applications are taken only when the department opens a registration round. Ask your Anganwadi worker or check mahtarivandan.cgstate.gov.in for the latest notice.",
        hi: "नए आवेदन तभी लिए जाते हैं जब विभाग पंजीयन खोलता है। ताज़ा सूचना के लिए अपनी आंगनवाड़ी कार्यकर्ता से पूछें या mahtarivandan.cgstate.gov.in देखें।",
      },
    },
    {
      q: { en: "My payment did not come this month. What should I check?", hi: "इस महीने पैसा नहीं आया। क्या देखूँ?" },
      a: {
        en: "Check that your bank account is in your own name, linked to Aadhaar and has DBT turned on. The portal lists common reasons for failed payments, and you can file a complaint there or call the help desk at 0771-2220006.",
        hi: "देखें कि बैंक खाता आपके अपने नाम पर है, आधार से जुड़ा है और उसमें DBT चालू है। पोर्टल पर भुगतान रुकने के आम कारण दिए गए हैं, वहीं शिकायत दर्ज कर सकती हैं या हेल्प डेस्क 0771-2220006 पर फ़ोन कर सकती हैं।",
      },
    },
    {
      q: { en: "Is there an upper age limit?", hi: "क्या अधिकतम उम्र की कोई सीमा है?" },
      a: {
        en: "The scheme order sets only a minimum age of 21. It does not set an upper limit.",
        hi: "योजना के आदेश में सिर्फ़ न्यूनतम उम्र 21 साल तय है। कोई अधिकतम सीमा नहीं दी गई है।",
      },
    },
  ],

  officialUrl: "https://mahtarivandan.cgstate.gov.in/",
  sources: [
    "https://mahtarivandan.cgstate.gov.in/public_doc/aadesh.pdf",
    "https://mahtarivandan.cgstate.gov.in/",
    "https://prsindia.org/budgets/states/chhattisgarh-budget-analysis-2026-27",
  ],
  lastVerified: "2026-10-06",
  launchedYear: 2024,
  status: "active",
};

export default scheme;
