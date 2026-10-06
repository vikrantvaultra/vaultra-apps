import { all, ageBetween, any, female, incomeUpTo, isTrue, labelled, notGovtEmployee, notTaxPayer, residentOf } from "@/lib/engine/build";
import type { Scheme } from "@/lib/types";

const scheme: Scheme = {
  slug: "subhadra-yojana",
  overlapGroup: "women-monthly",
  name: { en: "Subhadra Yojana", hi: "सुभद्रा योजना" },
  aka: ["Subhadra", "Subhadra scheme", "Subhadra card", "Odisha women 10000"],
  shortDescription: {
    en: "Women in Odisha aged 21 to 59 get ₹10,000 a year (₹50,000 over five years, 2024-25 to 2028-29), paid as two ₹5,000 instalments into their own bank account.",
    hi: "ओडिशा की 21 से 59 साल की महिलाओं को हर साल ₹10,000 (2024-25 से 2028-29 तक पाँच साल में ₹50,000), ₹5,000 की दो किस्तों में उनके अपने बैंक खाते में।",
  },
  level: "state",
  state: "odisha",
  department: {
    en: "Department of Women and Child Development and Mission Shakti, Government of Odisha",
    hi: "महिला एवं बाल विकास और मिशन शक्ति विभाग, ओडिशा सरकार",
  },
  categories: ["women-child", "social-welfare"],
  tags: ["women", "subhadra", "cash transfer", "dbt", "rakhi", "odisha"],
  benefitType: "cash",
  isDBT: true,
  value: { amount: 10000, period: "yearly", kind: "cash" },
  ageRange: { min: 21, max: 59 },
  kundliHouse: "women-family",
  eligibility: all(
    residentOf("odisha"),
    female(),
    ...ageBetween(21, 59),
    labelled(any(isTrue("bpl"), incomeUpTo(250_000)), {
      en: "Your family has an NFSA or State Food Security ration card, or earns up to ₹2.5 lakh a year",
      hi: "आपके परिवार के पास NFSA या राज्य खाद्य सुरक्षा राशन कार्ड है, या सालाना आय ₹2.5 लाख तक है",
    }),
    labelled(notTaxPayer(), { en: "No one in the family pays income tax", hi: "परिवार में कोई आयकर न देता हो" }),
    labelled(notGovtEmployee(), {
      en: "No one in the family is a regular or contractual government/PSU employee or a government pensioner",
      hi: "परिवार में कोई नियमित या संविदा सरकारी/सरकारी उपक्रम कर्मचारी या सरकारी पेंशनभोगी न हो",
    }),
  ),

  details: {
    en: [
      "Subhadra is the Odisha government's flagship cash support scheme for women. It started in September 2024 and runs for five years, from 2024-25 to 2028-29.",
      "Each eligible woman gets ₹10,000 a year in two equal instalments of ₹5,000: one around Rakhi Purnima and one on International Women's Day (8 March). Over the five years this adds up to ₹50,000, as long as she stays eligible every year. The money goes by DBT into a single-holder bank account in her own name that is linked to Aadhaar.",
      "Beneficiaries also get a Subhadra debit card. The 2026-27 state budget set aside ₹10,145 crore for the scheme, which reaches more than 1 crore women.",
    ],
    hi: [
      "सुभद्रा ओडिशा सरकार की महिलाओं के लिए सबसे बड़ी नकद सहायता योजना है। यह सितंबर 2024 में शुरू हुई और पाँच साल, 2024-25 से 2028-29 तक चलेगी।",
      "हर पात्र महिला को साल में ₹10,000 मिलते हैं, ₹5,000 की दो बराबर किस्तों में: एक राखी पूर्णिमा के आसपास और एक अंतरराष्ट्रीय महिला दिवस (8 मार्च) पर। हर साल पात्र रहने पर पाँच साल में कुल ₹50,000 मिलते हैं। पैसा DBT से उसके अपने नाम के, आधार से जुड़े, अकेले नाम वाले बैंक खाते में आता है।",
      "लाभार्थियों को सुभद्रा डेबिट कार्ड भी मिलता है। 2026-27 के राज्य बजट में इस योजना के लिए ₹10,145 करोड़ रखे गए हैं, और इससे 1 करोड़ से ज़्यादा महिलाओं को लाभ मिल रहा है।",
    ],
  },
  benefits: {
    en: [
      "₹10,000 a year, paid as two instalments of ₹5,000.",
      "Up to ₹50,000 in total over the five years of the scheme.",
      "A Subhadra debit card in your name.",
      "Women who make the most digital payments in their panchayat or town can get an extra ₹500 reward.",
    ],
    hi: [
      "हर साल ₹10,000, ₹5,000 की दो किस्तों में।",
      "योजना के पाँच साल में कुल ₹50,000 तक।",
      "आपके नाम का सुभद्रा डेबिट कार्ड।",
      "अपनी पंचायत या शहर में सबसे ज़्यादा डिजिटल लेन-देन करने वाली महिलाओं को ₹500 का अतिरिक्त इनाम मिल सकता है।",
    ],
  },
  eligibilityText: {
    en: [
      "You are a woman living in Odisha.",
      "You are at least 21 and below 60 years old on the qualifying date (the date of birth on your Aadhaar is used).",
      "Your family has an NFSA or State Food Security Scheme ration card. If not, your family income must be ₹2.5 lakh a year or less.",
      "You have Aadhaar with your mobile number linked, and a single-holder bank account in your name that is Aadhaar- and DBT-enabled.",
    ],
    hi: [
      "आप ओडिशा में रहने वाली महिला हैं।",
      "तय तारीख पर आपकी उम्र कम से कम 21 साल और 60 साल से कम है (आधार में लिखी जन्मतिथि मानी जाती है)।",
      "आपके परिवार के पास NFSA या राज्य खाद्य सुरक्षा योजना का राशन कार्ड है। नहीं है, तो परिवार की सालाना आय ₹2.5 लाख या उससे कम हो।",
      "आपके पास मोबाइल नंबर से जुड़ा आधार है, और आपके अकेले नाम का बैंक खाता है जो आधार और DBT से जुड़ा है।",
    ],
  },
  exclusions: {
    en: [
      "You already get ₹1,500 a month (₹18,000 a year) or more as a pension, scholarship or other cash help from any government scheme.",
      "You or anyone in your family is a current or former MP or MLA, or an elected representative of a panchayat or urban body (ward members and councillors are allowed).",
      "You or anyone in your family pays income tax.",
      "You or anyone in your family is a regular or contractual government or PSU employee, or gets a government pension. Honorarium workers like ASHA and Anganwadi workers can apply.",
      "You or anyone in your family owns a four-wheeler (tractors, mini-trucks and small goods vehicles don't count).",
      "Your family owns more than 5 acres of irrigated land or 10 acres of unirrigated land.",
    ],
    hi: [
      "आपको पहले से किसी सरकारी योजना से हर महीने ₹1,500 (साल में ₹18,000) या उससे ज़्यादा पेंशन, छात्रवृत्ति या अन्य नकद सहायता मिलती है।",
      "आप या परिवार में कोई मौजूदा या पूर्व सांसद या विधायक है, या पंचायत या नगर निकाय का निर्वाचित प्रतिनिधि है (वार्ड सदस्य और पार्षद आवेदन कर सकते हैं)।",
      "आप या परिवार में कोई आयकर देता है।",
      "आप या परिवार में कोई नियमित या संविदा सरकारी या सरकारी उपक्रम कर्मचारी है, या सरकारी पेंशन लेता है। आशा और आंगनवाड़ी जैसी मानदेय पाने वाली कार्यकर्ता आवेदन कर सकती हैं।",
      "आपके या परिवार के पास चार पहिया गाड़ी है (ट्रैक्टर, मिनी-ट्रक और छोटी मालवाहक गाड़ियाँ नहीं गिनी जातीं)।",
      "परिवार के पास 5 एकड़ से ज़्यादा सिंचित या 10 एकड़ से ज़्यादा असिंचित ज़मीन है।",
    ],
  },
  applicationProcess: {
    online: {
      en: [
        "Go to subhadra.odisha.gov.in and register with your Aadhaar and mobile number.",
        "Fill in the form with your family and bank details and submit it.",
        "Complete e-KYC, preferably by face authentication on the Subhadra mobile app.",
        "Check your status on the portal. Approved women are paid on the next instalment date.",
      ],
      hi: [
        "subhadra.odisha.gov.in पर जाएँ और आधार व मोबाइल नंबर से रजिस्टर करें।",
        "परिवार और बैंक की जानकारी के साथ फ़ॉर्म भरें और जमा करें।",
        "e-KYC पूरी करें, अच्छा है कि सुभद्रा मोबाइल ऐप पर चेहरे से पहचान करके।",
        "पोर्टल पर स्थिति देखें। मंज़ूरी मिलने पर अगली किस्त की तारीख पर पैसा आता है।",
      ],
    },
    offline: {
      en: [
        "Pick up a free application form at an Anganwadi centre, block office, urban body office, Mo Seba Kendra or Common Service Centre.",
        "Fill it in and submit it at the nearest Mo Seba Kendra or Common Service Centre.",
        "Complete e-KYC there and keep the acknowledgement.",
      ],
      hi: [
        "आंगनवाड़ी केंद्र, ब्लॉक ऑफ़िस, नगर निकाय ऑफ़िस, मो सेबा केंद्र या कॉमन सर्विस सेंटर से मुफ़्त आवेदन फ़ॉर्म लें।",
        "इसे भरकर नज़दीकी मो सेबा केंद्र या कॉमन सर्विस सेंटर पर जमा करें।",
        "वहीं e-KYC पूरी करें और पावती संभाल कर रखें।",
      ],
    },
  },
  documents: {
    en: [
      "Aadhaar card with your mobile number linked",
      "NFSA or State Food Security ration card (or an income certificate if you don't have one)",
      "Passbook of a single-holder bank account in your name, linked to Aadhaar and enabled for DBT",
      "Passport-size photo",
    ],
    hi: [
      "मोबाइल नंबर से जुड़ा आधार कार्ड",
      "NFSA या राज्य खाद्य सुरक्षा राशन कार्ड (न हो तो आय प्रमाण पत्र)",
      "आपके अकेले नाम के, आधार और DBT से जुड़े बैंक खाते की पासबुक",
      "पासपोर्ट साइज़ फ़ोटो",
    ],
  },
  faqs: [
    {
      q: { en: "I turned 60 this year. Will I keep getting the money?", hi: "इस साल मेरी उम्र 60 हो गई। क्या पैसा मिलता रहेगा?" },
      a: {
        en: "No. You must be under 60 on the qualifying date each year. Once you cross 60 you stop getting instalments for the remaining years.",
        hi: "नहीं। हर साल तय तारीख पर आपकी उम्र 60 से कम होनी चाहिए। 60 पार होते ही बाकी सालों की किस्तें बंद हो जाती हैं।",
      },
    },
    {
      q: { en: "My instalment didn't come. What should I check?", hi: "मेरी किस्त नहीं आई। क्या जाँचूँ?" },
      a: {
        en: "Check that your e-KYC is complete and that your bank account is in your name only, linked to Aadhaar and enabled for DBT. Women found ineligible on re-checking (for example after buying a four-wheeler or filing income tax) are removed.",
        hi: "देखें कि आपकी e-KYC पूरी है और बैंक खाता सिर्फ़ आपके नाम पर है, आधार से जुड़ा है और DBT के लिए चालू है। दोबारा जाँच में अपात्र पाई गई महिलाओं (जैसे चार पहिया गाड़ी खरीदने या आयकर भरने पर) के नाम हटा दिए जाते हैं।",
      },
    },
    {
      q: { en: "Can I apply if I joined late?", hi: "क्या देर से आवेदन कर सकती हूँ?" },
      a: {
        en: "Yes. The scheme is open to any woman who meets the conditions, and new beneficiaries are added from time to time. Apply on the portal or at a Mo Seba Kendra and complete e-KYC; you are paid from the next instalment after approval.",
        hi: "हाँ। शर्तें पूरी करने वाली हर महिला इसमें आ सकती है, और नई लाभार्थी समय-समय पर जोड़ी जाती हैं। पोर्टल पर या मो सेबा केंद्र पर आवेदन करें और e-KYC पूरी करें; मंज़ूरी के बाद अगली किस्त से पैसा मिलता है।",
      },
    },
  ],

  officialUrl: "https://subhadra.odisha.gov.in/",
  sources: [
    "https://wcd.odisha.gov.in/sites/default/files/2025-07/1637%20Gazette%20Resolution%20ENGLISH.pdf",
    "https://wcd.odisha.gov.in/en/node/184943",
    "https://finance.odisha.gov.in/sites/default/files/2025-08/04-BUDGET_SPEECH_ENGLISH-PART-2.pdf",
  ],
  lastVerified: "2026-10-06",
  launchedYear: 2024,
  status: "active",
};

export default scheme;
