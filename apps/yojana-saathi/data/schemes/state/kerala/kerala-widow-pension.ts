import { all, female, incomeUpTo, labelled, residentOf, when } from "@/lib/engine/build";
import type { Scheme } from "@/lib/types";

const scheme: Scheme = {
  slug: "kerala-widow-pension",
  overlapGroup: "widow-pension",
  name: { en: "Kerala Widow Pension (Social Security Pension)", hi: "केरल विधवा पेंशन (सामाजिक सुरक्षा पेंशन)" },
  aka: ["Kerala widow welfare pension", "vidhava pension", "Sevana widow pension"],
  shortDescription: {
    en: "Widows in Kerala, and women deserted by their husbands for 7+ years, from families earning up to ₹1 lakh a year get ₹2,000 a month.",
    hi: "केरल की विधवाओं, और 7 साल से ज़्यादा समय से पति द्वारा छोड़ी गई महिलाओं को, जिनके परिवार की सालाना आय ₹1 लाख तक है, हर महीने ₹2,000 मिलते हैं।",
  },
  level: "state",
  state: "kerala",
  department: {
    en: "Local Self Government Department, Government of Kerala (through panchayats, municipalities and corporations)",
    hi: "स्थानीय स्वशासन विभाग, केरल सरकार (पंचायत, नगरपालिका और नगर निगम के ज़रिए)",
  },
  categories: ["women-child", "pension-insurance", "social-welfare"],
  tags: ["widow pension", "welfare pension", "women", "deserted women", "sevana", "kerala"],
  benefitType: "pension",
  isDBT: true,
  value: { amount: 2000, period: "monthly", kind: "pension" },
  kundliHouse: "women-family",
  eligibility: all(
    residentOf("kerala"),
    female(),
    labelled(when("marital", "in", ["widowed", "separated"]), {
      en: "You are a widow, or your husband has deserted you or been missing for over 7 years",
      hi: "आप विधवा हैं, या आपके पति ने 7 साल से ज़्यादा समय से आपको छोड़ रखा है या लापता हैं",
    }),
    incomeUpTo(100_000),
  ),

  details: {
    en: [
      "This is Kerala's monthly social security pension for widows and deserted women from low-income families. It is part of the welfare pensions that reach about 62 lakh people in the state.",
      "The pension is ₹2,000 a month, the rate in force since November 2025. Where the central widow pension (IGNWPS) applies, its share is included in this amount and the state pays the rest.",
      "You apply at your own gram panchayat, municipality or corporation. The pension is paid into your bank account or delivered at home.",
    ],
    hi: [
      "यह कम आय वाले परिवारों की विधवाओं और पति द्वारा छोड़ी गई महिलाओं के लिए केरल की मासिक सामाजिक सुरक्षा पेंशन है। यह उन कल्याण पेंशनों का हिस्सा है जो राज्य में लगभग 62 लाख लोगों को मिलती हैं।",
      "पेंशन ₹2,000 महीना है, जो नवंबर 2025 से लागू है। जहाँ केंद्र की विधवा पेंशन (IGNWPS) लागू होती है, उसका हिस्सा इसी राशि में शामिल है और बाक़ी राज्य देता है।",
      "आवेदन अपनी ग्राम पंचायत, नगरपालिका या नगर निगम में करना होता है। पेंशन बैंक खाते में या घर पर दी जाती है।",
    ],
  },
  benefits: {
    en: ["₹2,000 every month.", "Paid into your bank account, or delivered at home.", "That adds up to ₹24,000 a year."],
    hi: ["हर महीने ₹2,000।", "पैसा बैंक खाते में आता है, या घर पर दिया जाता है।", "साल भर में कुल ₹24,000।"],
  },
  eligibilityText: {
    en: [
      "You are a widow, or your husband has been missing for over 7 years, or he deserted you over 7 years ago, and you have not remarried.",
      "Total family income is up to ₹1 lakh a year.",
      "Living in Kerala continuously for at least 2 years, and applying in the local body where you live.",
      "There is no age limit.",
      "You don't get a service or family pension from a government or public sector job (an ex-gratia or NPS pension up to ₹4,000 is allowed), and you don't pay income tax.",
    ],
    hi: [
      "आप विधवा हैं, या आपके पति 7 साल से ज़्यादा समय से लापता हैं, या 7 साल से ज़्यादा पहले उन्होंने आपको छोड़ दिया था, और आपने दोबारा शादी नहीं की है।",
      "परिवार की कुल सालाना आय ₹1 लाख तक।",
      "कम से कम 2 साल से लगातार केरल में रह रही हों, और जहाँ रहती हैं उसी स्थानीय निकाय में आवेदन करें।",
      "उम्र की कोई सीमा नहीं है।",
      "आपको किसी सरकारी या सरकारी उपक्रम की नौकरी से सर्विस या फ़ैमिली पेंशन नहीं मिलती (₹4,000 तक की एक्स-ग्रेशिया या NPS पेंशन चल सकती है), और आप आयकर नहीं देतीं।",
    ],
  },
  exclusions: {
    en: [
      "You have remarried.",
      "You or your family own more than 2 acres of land (not applied to Scheduled Tribe applicants).",
      "Anyone in the family owns a non-taxi four-wheeler with an engine above 1,000 cc, or you live in a modern-floored concrete house above 2,000 sq ft.",
      "You already get another social security pension.",
      "You live in a care home (agathi mandiram).",
    ],
    hi: [
      "आपने दोबारा शादी कर ली है।",
      "आपके या परिवार के नाम पर 2 एकड़ से ज़्यादा ज़मीन है (अनुसूचित जनजाति के आवेदकों पर लागू नहीं)।",
      "परिवार में किसी के पास 1,000 cc से ज़्यादा इंजन वाली, टैक्सी के अलावा कोई चार पहिया गाड़ी है, या आप 2,000 वर्ग फ़ुट से बड़े आधुनिक फ़र्श वाले कंक्रीट मकान में रहती हैं।",
      "आपको पहले से कोई दूसरी सामाजिक सुरक्षा पेंशन मिलती है।",
      "आप किसी आश्रय गृह (अगति मंदिरम) में रहती हैं।",
    ],
  },
  applicationProcess: {
    offline: {
      en: [
        "Get the widow pension form from your gram panchayat, municipality or corporation office.",
        "Fill it in and attach your husband's death certificate (or proof that he is missing or has deserted you), income certificate, Aadhaar and bank details.",
        "Submit it to the secretary of your local body. A decision should be made within 45 days.",
        "Once sanctioned, give a yearly declaration that you have not remarried when the local body asks for it.",
      ],
      hi: [
        "अपनी ग्राम पंचायत, नगरपालिका या नगर निगम कार्यालय से विधवा पेंशन फ़ॉर्म लें।",
        "फ़ॉर्म भरें और पति का मृत्यु प्रमाण पत्र (या उनके लापता होने / छोड़ देने का सबूत), आय प्रमाण पत्र, आधार और बैंक विवरण लगाएँ।",
        "अपने स्थानीय निकाय के सचिव को जमा करें। 45 दिन के अंदर फ़ैसला होना चाहिए।",
        "पेंशन मंज़ूर होने के बाद, जब स्थानीय निकाय माँगे तब दोबारा शादी न करने का घोषणा पत्र दें।",
      ],
    },
  },
  documents: {
    en: [
      "Husband's death certificate, or a certificate showing he has been missing / has deserted you for over 7 years",
      "Income certificate from the Village Officer",
      "Aadhaar card",
      "Bank passbook",
      "Ration card",
    ],
    hi: [
      "पति का मृत्यु प्रमाण पत्र, या 7 साल से ज़्यादा समय से उनके लापता होने / छोड़ देने का प्रमाण पत्र",
      "विलेज ऑफ़िसर से आय प्रमाण पत्र",
      "आधार कार्ड",
      "बैंक पासबुक",
      "राशन कार्ड",
    ],
  },
  faqs: [
    {
      q: { en: "Is there a minimum age?", hi: "क्या कोई न्यूनतम उम्र है?" },
      a: {
        en: "No. The official criteria say there is no age limit for the widow pension. Only the income and other conditions must be met.",
        hi: "नहीं। आधिकारिक नियमों के अनुसार विधवा पेंशन के लिए उम्र की कोई सीमा नहीं है। सिर्फ़ आय और बाक़ी शर्तें पूरी होनी चाहिए।",
      },
    },
    {
      q: { en: "Can I get both the widow pension and a disability pension?", hi: "क्या विधवा पेंशन और दिव्यांग पेंशन दोनों मिल सकती हैं?" },
      a: {
        en: "Usually only one welfare pension is allowed, but persons with disabilities are an exception. Ask your local body, because a person can get at most two pensions in total, counting EPF.",
        hi: "आम तौर पर एक ही कल्याण पेंशन मिलती है, पर दिव्यांगों के लिए छूट है। अपने स्थानीय निकाय से पूछें, क्योंकि EPF मिलाकर कुल दो से ज़्यादा पेंशन नहीं मिल सकतीं।",
      },
    },
  ],

  officialUrl: "https://welfarepension.lsgkerala.gov.in/",
  sources: [
    "https://welfarepension.lsgkerala.gov.in/FAQs.aspx",
    "https://welfarepension.lsgkerala.gov.in/",
    "https://budget.kerala.gov.in/build/budget_speech/2026/2026Eng.pdf",
  ],
  lastVerified: "2026-10-06",
  launchedYear: 2025,
  status: "active",
};

export default scheme;
