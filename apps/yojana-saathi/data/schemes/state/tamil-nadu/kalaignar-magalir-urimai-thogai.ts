import { all, incomeUpTo, labelled, minAge, notGovtEmployee, notTaxPayer, residentOf, when } from "@/lib/engine/build";
import type { Scheme } from "@/lib/types";

const scheme: Scheme = {
  slug: "kalaignar-magalir-urimai-thogai",
  name: { en: "Kalaignar Magalir Urimai Thogai", hi: "कलैञर मगलिर उरिमै तोगै (महिला अधिकार राशि)" },
  aka: ["KMUT", "Magalir Urimai Thogai", "Madhippumigu Magalir Thittam", "₹1000 women scheme Tamil Nadu"],
  shortDescription: {
    en: "₹1,000 every month into the bank account of the woman head of an eligible Tamil Nadu family with income below ₹2.5 lakh a year.",
    hi: "तमिलनाडु के पात्र परिवार (सालाना आय ₹2.5 लाख से कम) की महिला मुखिया के बैंक खाते में हर महीने ₹1,000।",
  },
  level: "state",
  state: "tamil-nadu",
  department: {
    en: "Revenue and Disaster Management Department, Government of Tamil Nadu",
    hi: "राजस्व एवं आपदा प्रबंधन विभाग, तमिलनाडु सरकार",
  },
  categories: ["women-child", "social-welfare"],
  tags: ["women", "monthly income", "head of family", "1000 rupees", "dbt", "ration card"],
  benefitType: "cash",
  isDBT: true,
  value: { amount: 1000, period: "monthly", kind: "cash" },
  ageRange: { min: 21 },
  kundliHouse: "women-family",
  eligibility: all(
    residentOf("tamil-nadu"),
    labelled(when("gender", "in", ["female", "transgender"]), {
      en: "You are a woman (or a transgender person heading the family)",
      hi: "आप महिला हैं (या परिवार की मुखिया ट्रांसजेंडर व्यक्ति हैं)",
    }),
    minAge(21),
    incomeUpTo(250_000),
    labelled(notTaxPayer(), { en: "No one in the family pays income tax", hi: "परिवार में कोई आयकर न देता हो" }),
    labelled(notGovtEmployee(), { en: "You are not a government or PSU employee or pensioner", hi: "आप सरकारी या सार्वजनिक उपक्रम के कर्मचारी या पेंशनभोगी नहीं हैं" }),
  ),

  details: {
    en: [
      "Kalaignar Magalir Urimai Thogai pays ₹1,000 a month (₹12,000 a year) to the woman head of eligible families in Tamil Nadu. It is meant as recognition of the unpaid work women do for the family, so it is called a 'right' (urimai) amount, not aid. About 1.3 crore women receive it.",
      "Everyone on one ration card counts as one family. The woman named as head on the card, or the wife of the male head, is the head of family for this scheme. Single women, widows and transgender persons who head a family can also apply.",
      "The family must earn under ₹2.5 lakh a year, own less than 5 acres of wet land or 10 acres of dry land, and use under 3,600 units of household electricity a year. The government elected in 2026 has kept the payment going and has announced it will restructure the scheme and raise the amount; until a new order is issued, ₹1,000 a month continues.",
    ],
    hi: [
      "कलैञर मगलिर उरिमै तोगै में तमिलनाडु के पात्र परिवारों की महिला मुखिया को हर महीने ₹1,000 (साल में ₹12,000) दिए जाते हैं। यह परिवार के लिए महिलाओं के बिना वेतन वाले काम की पहचान है, इसलिए इसे मदद नहीं, 'अधिकार' (उरिमै) राशि कहा जाता है। लगभग 1.3 करोड़ महिलाओं को यह मिलता है।",
      "एक राशन कार्ड पर दर्ज सभी लोग एक परिवार माने जाते हैं। कार्ड पर मुखिया के रूप में दर्ज महिला, या पुरुष मुखिया की पत्नी, इस योजना में परिवार की मुखिया मानी जाती है। परिवार चलाने वाली अकेली महिलाएँ, विधवाएँ और ट्रांसजेंडर व्यक्ति भी आवेदन कर सकते हैं।",
      "परिवार की सालाना आय ₹2.5 लाख से कम हो, 5 एकड़ से कम सिंचित या 10 एकड़ से कम असिंचित ज़मीन हो, और घर में साल में 3,600 यूनिट से कम बिजली ख़र्च हो। 2026 में चुनी गई सरकार ने भुगतान जारी रखा है और योजना में बदलाव कर राशि बढ़ाने की घोषणा की है; नया आदेश आने तक हर महीने ₹1,000 मिलते रहेंगे।",
    ],
  },
  benefits: {
    en: [
      "₹1,000 every month (₹12,000 a year) to the woman head of the family.",
      "Paid by DBT into her Aadhaar-linked bank account, including co-operative and private bank accounts.",
      "No need to attach income certificates or land papers when applying; details are checked from government records.",
    ],
    hi: [
      "परिवार की महिला मुखिया को हर महीने ₹1,000 (साल में ₹12,000)।",
      "DBT से उसके आधार से जुड़े बैंक खाते में, सहकारी और निजी बैंक खाते भी शामिल।",
      "आवेदन के साथ आय प्रमाण पत्र या ज़मीन के काग़ज़ लगाने की ज़रूरत नहीं; जानकारी सरकारी रिकॉर्ड से जाँची जाती है।",
    ],
  },
  eligibilityText: {
    en: [
      "You are the woman head of a family in Tamil Nadu (as defined on the ration card), aged at least 21.",
      "Family income is below ₹2.5 lakh a year.",
      "The family owns less than 5 acres of wet land or less than 10 acres of dry land.",
      "Household electricity use is below 3,600 units a year.",
      "You have a ration card, Aadhaar and an Aadhaar-linked bank account.",
    ],
    hi: [
      "आप तमिलनाडु में किसी परिवार की महिला मुखिया हैं (राशन कार्ड के अनुसार) और आपकी उम्र कम से कम 21 साल है।",
      "परिवार की सालाना आय ₹2.5 लाख से कम है।",
      "परिवार के पास 5 एकड़ से कम सिंचित या 10 एकड़ से कम असिंचित ज़मीन है।",
      "घर में सालाना बिजली खपत 3,600 यूनिट से कम है।",
      "आपके पास राशन कार्ड, आधार और आधार से जुड़ा बैंक खाता है।",
    ],
  },
  exclusions: {
    en: [
      "Families where anyone pays income tax or professional tax on income above ₹2.5 lakh a year.",
      "Families with a central or state government, PSU, bank, local body or co-operative employee or pensioner.",
      "Families with an elected representative (MP, MLA, local body heads and members; panchayat ward members are allowed).",
      "Families that own a car, jeep, tractor or other four-wheeler for their own use.",
      "Business owners paying GST with an annual turnover above ₹50 lakh.",
      "Families already getting old age, widow or other regular social security pensions from the government (pensions for persons with disabilities are allowed).",
    ],
    hi: [
      "जिन परिवारों में कोई ₹2.5 लाख से ज़्यादा सालाना आय पर आयकर या व्यवसाय कर देता है।",
      "जिन परिवारों में केंद्र या राज्य सरकार, सार्वजनिक उपक्रम, बैंक, स्थानीय निकाय या सहकारी संस्था का कर्मचारी या पेंशनभोगी है।",
      "जिन परिवारों में कोई निर्वाचित प्रतिनिधि है (सांसद, विधायक, स्थानीय निकाय के अध्यक्ष और सदस्य; पंचायत वार्ड सदस्य को छूट है)।",
      "जिन परिवारों के पास निजी इस्तेमाल के लिए कार, जीप, ट्रैक्टर या कोई चार-पहिया वाहन है।",
      "₹50 लाख से ज़्यादा सालाना कारोबार वाले GST देने वाले व्यापारी।",
      "जिन परिवारों को पहले से वृद्धावस्था, विधवा या कोई दूसरी नियमित सामाजिक सुरक्षा पेंशन मिलती है (दिव्यांगजन पेंशन वालों को छूट है)।",
    ],
  },
  applicationProcess: {
    offline: {
      en: [
        "Apply at an e-Sevai centre or at the special camps held when the government reopens applications.",
        "Give your ration card, Aadhaar and bank details; the application is registered with your Aadhaar.",
        "You get an SMS on the decision. If rejected, you can appeal to the Revenue Divisional Officer through an e-Sevai centre within 30 days of the SMS.",
      ],
      hi: [
        "ई-सेवई केंद्र पर या सरकार के आवेदन दोबारा खोलने पर लगने वाले विशेष शिविरों में आवेदन करें।",
        "राशन कार्ड, आधार और बैंक की जानकारी दें; आवेदन आपके आधार से दर्ज होता है।",
        "फ़ैसले की सूचना SMS से मिलती है। अस्वीकार होने पर SMS के 30 दिन के अंदर ई-सेवई केंद्र के ज़रिए राजस्व मंडल अधिकारी के पास अपील कर सकते हैं।",
      ],
    },
    online: {
      en: [
        "Check your application status on kmut.tn.gov.in using your Aadhaar number.",
        "Update your mobile number or bank details through the KMUT app or website if needed.",
      ],
      hi: [
        "kmut.tn.gov.in पर अपने आधार नंबर से आवेदन की स्थिति देखें।",
        "ज़रूरत हो तो KMUT ऐप या वेबसाइट से मोबाइल नंबर या बैंक की जानकारी बदलें।",
      ],
    },
  },
  documents: {
    en: ["Ration card (family card)", "Aadhaar card", "Aadhaar-linked bank account details", "Mobile number"],
    hi: ["राशन कार्ड (परिवार कार्ड)", "आधार कार्ड", "आधार से जुड़े बैंक खाते का विवरण", "मोबाइल नंबर"],
  },
  faqs: [
    {
      q: { en: "Is the amount being raised under the new government?", hi: "क्या नई सरकार में राशि बढ़ने वाली है?" },
      a: {
        en: "The government elected in 2026 has announced a restructured scheme with a higher amount, but as of October 2026 the payment is still ₹1,000 a month. Watch for the official order before relying on a new amount.",
        hi: "2026 में चुनी गई सरकार ने बढ़ी हुई राशि के साथ नई व्यवस्था की घोषणा की है, लेकिन अक्टूबर 2026 तक भुगतान ₹1,000 प्रति माह ही है। नई राशि पर भरोसा करने से पहले सरकारी आदेश का इंतज़ार करें।",
      },
    },
    {
      q: { en: "There are two women over 21 in my family. Who applies?", hi: "मेरे परिवार में 21 साल से ऊपर की दो महिलाएँ हैं। आवेदन कौन करे?" },
      a: {
        en: "Only one woman per family can receive it. The family decides among themselves which one applies.",
        hi: "एक परिवार में सिर्फ़ एक महिला को यह मिलता है। परिवार आपस में तय करता है कि कौन आवेदन करे।",
      },
    },
  ],

  officialUrl: "https://kmut.tn.gov.in/",
  sources: [
    "https://kmut.tn.gov.in/faq.html",
    "https://kmut.tn.gov.in/",
    "https://www.impriindia.com/insights/decoding-tamil-nadus-2026-scheme-landscape-department-wise-updates-and-outcomes/",
  ],
  lastVerified: "2026-10-06",
  launchedYear: 2023,
  status: "check-status",
};

export default scheme;
