import { all, labelled, minAge, notGovtEmployee, residentOf } from "@/lib/engine/build";
import type { Scheme } from "@/lib/types";

const scheme: Scheme = {
  slug: "bana-kaih-handholding-scheme",
  name: { en: "Mizoram Bana Kaih (Handholding) Scheme", hi: "मिज़ोरम बाना काइह (हैंडहोल्डिंग) योजना" },
  aka: ["Bana Kaih", "Handholding Scheme", "Mizoram Handholding", "Progress Partner"],
  shortDescription: {
    en: "Mizoram's flagship livelihood scheme: selected 'Progress Partners' get collateral-free bank loans with the full interest paid by the state on loans up to ₹50 lakh, plus training.",
    hi: "मिज़ोरम की मुख्य आजीविका योजना: चुने गए 'प्रोग्रेस पार्टनर' को बिना गारंटी बैंक लोन मिलता है, ₹50 लाख तक के लोन का पूरा ब्याज राज्य सरकार भरती है, साथ में प्रशिक्षण भी।",
  },
  level: "state",
  state: "mizoram",
  department: {
    en: "Planning & Programme Implementation Department, Government of Mizoram",
    hi: "योजना एवं कार्यक्रम क्रियान्वयन विभाग, मिज़ोरम सरकार",
  },
  categories: ["business", "agriculture", "skills-employment"],
  tags: ["business loan", "interest free loan", "collateral free", "self employment", "farmer", "startup", "mizoram"],
  benefitType: "composite",
  isDBT: false,
  value: { amount: 5_000_000, period: "one-time", kind: "loan" },
  ageRange: { min: 18 },
  kundliHouse: "business",
  eligibility: all(
    residentOf("mizoram"),
    minAge(18),
    labelled(notGovtEmployee(), {
      en: "You are not a full-time Central or State government employee",
      hi: "आप केंद्र या राज्य सरकार के पूर्णकालिक कर्मचारी नहीं हैं",
    }),
  ),

  details: {
    en: [
      "Bana Kaih ('holding hands') is the Mizoram government's main scheme for livelihoods and entrepreneurship. It was notified in September 2024 and runs for an initial five years from 19 September 2024, under the Planning & Programme Implementation Department.",
      "Individuals and groups with a strong livelihood or business plan are selected as 'Progress Partners'. Implementing departments (agriculture, horticulture, animal husbandry, fisheries, industries and others) find candidates, and the final selection is made by the State Policy Coordination Committee chaired by the Chief Minister.",
      "Selected Progress Partners get bank loans through central schemes such as PMEGP, MUDRA, Stand-Up India and KCC. The state makes these loans collateral-free and, for prompt repayment, pays back 100% of the interest on loans up to ₹50 lakh. Training, technical help and market support are also given.",
    ],
    hi: [
      "बाना काइह ('हाथ थामना') मिज़ोरम सरकार की आजीविका और उद्यमिता की मुख्य योजना है। इसकी अधिसूचना सितंबर 2024 में जारी हुई और यह 19 सितंबर 2024 से शुरुआती पाँच साल के लिए योजना एवं कार्यक्रम क्रियान्वयन विभाग के तहत चल रही है।",
      "जिन लोगों और समूहों के पास मज़बूत आजीविका या कारोबार की योजना है, उन्हें 'प्रोग्रेस पार्टनर' चुना जाता है। संबंधित विभाग (कृषि, बागवानी, पशुपालन, मत्स्य, उद्योग आदि) उम्मीदवार खोजते हैं, और आख़िरी चयन मुख्यमंत्री की अध्यक्षता वाली राज्य नीति समन्वय समिति करती है।",
      "चुने गए प्रोग्रेस पार्टनर को PMEGP, मुद्रा, स्टैंड-अप इंडिया और KCC जैसी केंद्रीय योजनाओं से बैंक लोन मिलता है। राज्य सरकार इन लोन को बिना गारंटी बनाती है और समय पर चुकाने पर ₹50 लाख तक के लोन का 100% ब्याज लौटा देती है। प्रशिक्षण, तकनीकी मदद और बाज़ार से जोड़ने में भी मदद मिलती है।",
    ],
  },
  benefits: {
    en: [
      "Full (100%) interest subvention on bank loans up to ₹50 lakh, for prompt repayment.",
      "Collateral-free loans: the state pays into the CGTMSE guarantee fund for MSME loans and covers the guarantee fee for farm and allied loans.",
      "A Chief Minister's Special Package grant in exceptional cases where a loan isn't possible but a small grant can make the project work.",
      "Mandatory orientation and technical training, and help with marketing.",
    ],
    hi: [
      "समय पर चुकाने पर ₹50 लाख तक के बैंक लोन पर पूरा (100%) ब्याज माफ़।",
      "बिना गारंटी लोन: MSME लोन के लिए राज्य सरकार CGTMSE गारंटी फ़ंड में पैसा देती है और खेती व उससे जुड़े लोन की गारंटी फ़ीस भरती है।",
      "ख़ास मामलों में मुख्यमंत्री विशेष पैकेज अनुदान, जहाँ लोन मुमकिन न हो पर छोटी मदद से परियोजना चल सके।",
      "ज़रूरी ओरिएंटेशन और तकनीकी प्रशिक्षण, और बाज़ार से जोड़ने में मदद।",
    ],
  },
  eligibilityText: {
    en: [
      "An Indian citizen and permanent resident of Mizoram, aged 18 or above.",
      "Not a full-time employee of the Central or State government or their agencies.",
      "A full-time, workable livelihood project or business plan that will be your main source of income and can create jobs.",
      "Groups such as cooperatives, SHGs, FPOs, societies, firms and companies can also apply if most owners meet these conditions.",
    ],
    hi: [
      "भारतीय नागरिक और मिज़ोरम के स्थायी निवासी, उम्र 18 साल या ज़्यादा।",
      "केंद्र या राज्य सरकार या उनकी एजेंसियों के पूर्णकालिक कर्मचारी न हों।",
      "पूरे समय की, व्यावहारिक आजीविका परियोजना या कारोबारी योजना, जो आपकी आय का मुख्य स्रोत बने और रोज़गार दे सके।",
      "सहकारी समितियाँ, SHG, FPO, सोसाइटी, फ़र्म और कंपनियाँ भी आवेदन कर सकती हैं, अगर ज़्यादातर मालिक ये शर्तें पूरी करते हों।",
    ],
  },
  exclusions: {
    en: [
      "'General' Progress Partners who are not specifically selected by the apex committee can get converged central-scheme loans but not the 100% interest subvention, guarantee or CM's grant.",
      "Someone who receives the CM's Special Package grant cannot take the other incentives until that project is complete.",
      "Grant receivers who keep failing to perform may have to return the money.",
    ],
    hi: [
      "जो 'सामान्य' प्रोग्रेस पार्टनर शीर्ष समिति ने ख़ास तौर पर नहीं चुने, उन्हें केंद्रीय योजनाओं का लोन तो मिल सकता है, पर 100% ब्याज छूट, गारंटी या मुख्यमंत्री अनुदान नहीं।",
      "जिसे मुख्यमंत्री विशेष पैकेज अनुदान मिला है, वह परियोजना पूरी होने तक दूसरे लाभ नहीं ले सकता।",
      "अनुदान लेकर लगातार काम न करने वालों को पैसा लौटाना पड़ सकता है।",
    ],
  },
  applicationProcess: {
    online: {
      en: [
        "Register on the Handholding portal (handholding.mizoram.gov.in) and submit your project idea (concept note).",
        "The concerned department's search team reviews it, and the apex committee makes the final selection.",
        "Once selected, complete the orientation training; your loan is then processed by the bank under the matching central scheme.",
      ],
      hi: [
        "हैंडहोल्डिंग पोर्टल (handholding.mizoram.gov.in) पर रजिस्टर करें और अपनी परियोजना का विचार (कॉन्सेप्ट नोट) जमा करें।",
        "संबंधित विभाग की सर्च टीम उसे देखती है, और शीर्ष समिति आख़िरी चयन करती है।",
        "चुने जाने के बाद ओरिएंटेशन प्रशिक्षण पूरा करें; फिर बैंक संबंधित केंद्रीय योजना के तहत आपका लोन आगे बढ़ाता है।",
      ],
    },
    offline: {
      en: [
        "You can also get help from your district or block offices of the implementing departments to prepare and submit the proposal.",
      ],
      hi: [
        "प्रस्ताव तैयार करने और जमा करने में संबंधित विभागों के ज़िला या ब्लॉक दफ़्तरों से भी मदद ले सकते हैं।",
      ],
    },
  },
  documents: {
    en: [
      "Aadhaar card",
      "Proof of permanent residence in Mizoram",
      "Concept note or detailed project report",
      "Bank account details, and registration papers for groups or firms",
    ],
    hi: [
      "आधार कार्ड",
      "मिज़ोरम के स्थायी निवास का सबूत",
      "कॉन्सेप्ट नोट या विस्तृत परियोजना रिपोर्ट",
      "बैंक खाते का विवरण, और समूह या फ़र्म के लिए पंजीकरण के काग़ज़",
    ],
  },
  faqs: [
    {
      q: { en: "Is the loan itself free money?", hi: "क्या लोन का पैसा मुफ़्त है?" },
      a: {
        en: "No. You must repay the loan amount. What the state pays is the interest, and only if you repay on time.",
        hi: "नहीं। लोन की रकम आपको चुकानी होगी। राज्य सरकार ब्याज भरती है, और वह भी तभी जब आप समय पर चुकाएँ।",
      },
    },
    {
      q: { en: "Do I need to put up property as security?", hi: "क्या गारंटी के लिए संपत्ति गिरवी रखनी होगी?" },
      a: {
        en: "Not if you are a selected Progress Partner: the state covers the credit guarantee so the bank loan is collateral-free.",
        hi: "अगर आप चुने गए प्रोग्रेस पार्टनर हैं तो नहीं: राज्य सरकार क्रेडिट गारंटी देती है, इसलिए बैंक लोन बिना गारंटी के मिलता है।",
      },
    },
    {
      q: { en: "Can I apply while working in a government job?", hi: "क्या सरकारी नौकरी करते हुए आवेदन कर सकते हैं?" },
      a: {
        en: "No. Full-time Central or State government employees are not eligible; the project must be your main livelihood.",
        hi: "नहीं। केंद्र या राज्य सरकार के पूर्णकालिक कर्मचारी पात्र नहीं हैं; परियोजना आपकी मुख्य आजीविका होनी चाहिए।",
      },
    },
  ],

  officialUrl: "https://handholding.mizoram.gov.in/",
  sources: [
    "https://planning.mizoram.gov.in/uploads/attachments/2024/09/d66aa4e601bec2d4312325459af3b907/ex-610-scheme-the-mizoram-bana-kaih-handholding-scheme-2024.pdf",
    "https://planning.mizoram.gov.in/uploads/attachments/2025/03/8fb61b5abf8a6bbc52fa9580e49412fd/notification-on-guidelines-for-handholding-support-to-progress-partners-under-component-1-of-bana-kaih-scheme.pdf",
    "https://planning.mizoram.gov.in/",
  ],
  lastVerified: "2026-10-06",
  launchedYear: 2024,
  status: "active",
};

export default scheme;
