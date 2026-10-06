import { all, ageBetween, incomeUpTo, notGovtEmployee, when, labelled } from "@/lib/engine/build";
import type { Scheme } from "@/lib/types";

const scheme: Scheme = {
  slug: "pm-internship-scheme",
  name: { en: "PM Internship Scheme", hi: "प्रधानमंत्री इंटर्नशिप योजना" },
  aka: ["PMIS", "Prime Minister Internship Scheme"],
  shortDescription: {
    en: "Paid internships in India's top companies for youth aged 18 to 25, with at least ₹9,000 a month and a one-time grant of ₹6,000.",
    hi: "18 से 25 साल के युवाओं के लिए देश की बड़ी कंपनियों में पेड इंटर्नशिप, कम से कम ₹9,000 महीना और ₹6,000 का एकमुश्त अनुदान।",
  },
  level: "central",
  ministry: "corporate-affairs",
  categories: ["skills-employment", "education"],
  tags: ["internship", "stipend", "youth", "job", "graduate", "pmis"],
  benefitType: "cash",
  isDBT: true,
  value: { amount: 9000, period: "monthly", kind: "cash" },
  ageRange: { min: 18, max: 25 },
  kundliHouse: "career",
  eligibility: all(
    ...ageBetween(18, 25),
    incomeUpTo(800_000),
    labelled(when("employment", "neq", "employed"), {
      en: "Not in a full-time job",
      hi: "पूरे समय की नौकरी में न हों",
    }),
    notGovtEmployee(),
  ),

  details: {
    en: [
      "The PM Internship Scheme gives young people real work experience in leading companies across India. You apply online, choose internships by location and sector, and companies pick candidates from the shortlist.",
      "During the internship you get at least ₹9,000 a month. Most of it is paid by the government through Direct Benefit Transfer and a small part by the company. You also get a one-time grant of ₹6,000 and insurance cover while you intern.",
      "It is run by the Ministry of Corporate Affairs and is still in its pilot phase, which began in October 2024. In 2026 the rules were widened: the age band became 18 to 25, and final-year undergraduate and postgraduate students can now apply.",
    ],
    hi: [
      "प्रधानमंत्री इंटर्नशिप योजना युवाओं को देश की बड़ी कंपनियों में असली काम का अनुभव देती है। आप ऑनलाइन आवेदन करते हैं, जगह और क्षेत्र के हिसाब से इंटर्नशिप चुनते हैं, और कंपनियाँ शॉर्टलिस्ट से उम्मीदवार चुनती हैं।",
      "इंटर्नशिप के दौरान आपको हर महीने कम से कम ₹9,000 मिलते हैं। इसका ज़्यादातर हिस्सा सरकार डायरेक्ट बेनिफ़िट ट्रांसफ़र से और थोड़ा हिस्सा कंपनी देती है। साथ में ₹6,000 का एकमुश्त अनुदान और इंटर्नशिप के दौरान बीमा भी मिलता है।",
      "इसे कॉरपोरेट कार्य मंत्रालय चलाता है और यह अभी पायलट चरण में है, जो अक्टूबर 2024 में शुरू हुआ था। 2026 में नियम बढ़ाए गए: उम्र सीमा 18 से 25 साल हो गई, और ग्रेजुएशन व पोस्ट-ग्रेजुएशन के अंतिम वर्ष के छात्र भी अब आवेदन कर सकते हैं।",
    ],
  },
  benefits: {
    en: [
      "Monthly financial assistance of at least ₹9,000, mostly paid by the government into your Aadhaar-linked bank account.",
      "One-time grant of ₹6,000.",
      "Life and accident insurance cover during the internship, with premiums paid by the government.",
      "A certificate and hands-on experience in a leading company.",
    ],
    hi: [
      "हर महीने कम से कम ₹9,000 की आर्थिक मदद, ज़्यादातर सरकार आधार से जुड़े आपके बैंक खाते में देती है।",
      "₹6,000 का एकमुश्त अनुदान।",
      "इंटर्नशिप के दौरान जीवन और दुर्घटना बीमा, जिसका प्रीमियम सरकार भरती है।",
      "किसी बड़ी कंपनी में काम का अनुभव और प्रमाण पत्र।",
    ],
  },
  eligibilityText: {
    en: [
      "Indian citizen aged 18 to 25 years.",
      "Has passed at least Class 10; ITI, diploma and graduate (BA, BSc, BCom, BBA, BCA, BPharma and similar) candidates can apply.",
      "Not in a full-time job and not in full-time education, except final-year UG/PG students with a no-objection certificate from their institution.",
      "Annual family income is not more than ₹8 lakh.",
    ],
    hi: [
      "18 से 25 साल के भारतीय नागरिक।",
      "कम से कम 10वीं पास; ITI, डिप्लोमा और ग्रेजुएट (BA, BSc, BCom, BBA, BCA, BPharma आदि) आवेदन कर सकते हैं।",
      "पूरे समय की नौकरी या पढ़ाई में न हों, सिवाय UG/PG के अंतिम वर्ष के छात्रों के जिनके पास संस्थान का अनापत्ति प्रमाण पत्र हो।",
      "परिवार की सालाना आय ₹8 लाख से ज़्यादा न हो।",
    ],
  },
  exclusions: {
    en: [
      "Graduates of IITs, IIMs, IISERs, NLUs and similar top institutions.",
      "People who have already completed CA, CMA, CS, MBBS, MBA or another professional or master's degree.",
      "Anyone whose family member is a permanent or regular government employee.",
      "Anyone whose family income is above ₹8 lakh a year.",
    ],
    hi: [
      "IIT, IIM, IISER, NLU जैसे शीर्ष संस्थानों से पढ़े लोग।",
      "जो CA, CMA, CS, MBBS, MBA या कोई और पेशेवर या मास्टर डिग्री पूरी कर चुके हैं।",
      "जिनके परिवार का कोई सदस्य स्थायी या नियमित सरकारी कर्मचारी हो।",
      "जिनके परिवार की आय ₹8 लाख सालाना से ज़्यादा हो।",
    ],
  },
  applicationProcess: {
    online: {
      en: [
        "Go to pminternship.mca.gov.in or download the PM Internship app, and register with your mobile number and Aadhaar.",
        "Complete your profile with education details and generate your resume on the portal.",
        "Apply for up to the allowed number of internships by location, sector and role.",
        "If a company selects you, accept the offer on the portal and join on the given date.",
      ],
      hi: [
        "pminternship.mca.gov.in पर जाएँ या PM Internship ऐप डाउनलोड करें, और मोबाइल नंबर व आधार से पंजीकरण करें।",
        "पढ़ाई की जानकारी के साथ प्रोफ़ाइल पूरी करें और पोर्टल पर अपना रिज़्यूमे बनाएँ।",
        "जगह, क्षेत्र और काम के हिसाब से तय संख्या तक इंटर्नशिप के लिए आवेदन करें।",
        "कंपनी आपको चुने तो पोर्टल पर ऑफ़र स्वीकार करें और तय तारीख़ पर जॉइन करें।",
      ],
    },
  },
  documents: {
    en: ["Aadhaar card", "Mobile number linked to Aadhaar", "Class 10 and highest qualification certificates", "Aadhaar-seeded bank account", "No-objection certificate from your institution (final-year students)"],
    hi: ["आधार कार्ड", "आधार से जुड़ा मोबाइल नंबर", "10वीं और सबसे ऊँची पढ़ाई के प्रमाण पत्र", "आधार से जुड़ा बैंक खाता", "संस्थान का अनापत्ति प्रमाण पत्र (अंतिम वर्ष के छात्रों के लिए)"],
  },
  faqs: [
    {
      q: { en: "Is there any application fee?", hi: "क्या आवेदन की कोई फ़ीस है?" },
      a: {
        en: "No. Applying is free. Only use the official portal or app; ignore anyone who asks for money to get you an internship.",
        hi: "नहीं। आवेदन मुफ़्त है। सिर्फ़ आधिकारिक पोर्टल या ऐप का इस्तेमाल करें; इंटर्नशिप दिलाने के नाम पर पैसे माँगने वालों पर ध्यान न दें।",
      },
    },
    {
      q: { en: "Will the company hire me after the internship?", hi: "क्या इंटर्नशिप के बाद कंपनी नौकरी देगी?" },
      a: {
        en: "Not necessarily. The internship gives you experience and a certificate. Some companies may offer jobs, but it is not guaranteed.",
        hi: "ज़रूरी नहीं। इंटर्नशिप से अनुभव और प्रमाण पत्र मिलता है। कुछ कंपनियाँ नौकरी दे सकती हैं, पर इसकी गारंटी नहीं है।",
      },
    },
  ],

  officialUrl: "https://pminternship.mca.gov.in/",
  sources: [
    "https://pminternship.mca.gov.in/",
    "https://www.pib.gov.in/PressReleasePage.aspx?PRID=2254498&reg=3&lang=1",
    "https://www.businesstoday.in/latest/economy/story/eligibility-expanded-in-pm-internship-scheme-read-all-about-new-criteria-526943-2026-04-22",
  ],
  lastVerified: "2026-10-06",
  launchedYear: 2024,
  status: "pilot",
};

export default scheme;
