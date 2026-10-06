import { all, labelled, notGovtEmployee, residentOf } from "@/lib/engine/build";
import type { Scheme } from "@/lib/types";

const scheme: Scheme = {
  slug: "goa-deen-dayal-swasthya-seva-yojana",
  tier: "full",
  overlapGroup: "health-cover",
  name: { en: "Deen Dayal Swasthya Seva Yojana (DDSSY)", hi: "दीनदयाल स्वास्थ्य सेवा योजना (DDSSY)" },
  aka: ["DDSSY", "Goa health insurance", "Deen Dayal health card Goa"],
  shortDescription: {
    en: "Goa's family health insurance: cashless treatment for listed surgeries and hospital stays, with yearly cover of ₹2.5 lakh (up to 3 members) or ₹4 lakh (4 or more).",
    hi: "गोवा का पारिवारिक स्वास्थ्य बीमा: तय सर्जरी और अस्पताल में भर्ती का कैशलेस इलाज, सालाना ₹2.5 लाख (3 सदस्य तक) या ₹4 लाख (4 या ज़्यादा) तक।",
  },
  level: "state",
  state: "goa",
  department: {
    en: "Directorate of Health Services, Government of Goa",
    hi: "स्वास्थ्य सेवा निदेशालय, गोवा सरकार",
  },
  categories: ["health"],
  tags: ["health insurance", "hospital", "cashless", "surgery", "ddssy", "goa"],
  benefitType: "insurance",
  isDBT: false,
  value: { amount: 250000, period: "yearly", kind: "cover" },
  kundliHouse: "health",
  eligibility: all(
    residentOf("goa"),
    labelled(notGovtEmployee(), {
      en: "You are not a government employee (their families are also not covered)",
      hi: "आप सरकारी कर्मचारी नहीं हैं (उनके परिवार भी शामिल नहीं हैं)",
    }),
  ),

  details: {
    en: [
      "Deen Dayal Swasthya Seva Yojana is the Goa government's own health insurance for residents, notified in December 2016 and run by the Directorate of Health Services.",
      "A registered family gets cashless treatment for listed procedures at empanelled government and private hospitals. The cover is ₹2.5 lakh a year for a family of up to three and ₹4 lakh for four or more members, shared among the family.",
      "The 2026-27 budget announced higher cover slabs of ₹4 lakh and ₹6 lakh. We have not seen the order putting these into effect, so the amounts shown are the ones in the scheme document.",
    ],
    hi: [
      "दीनदयाल स्वास्थ्य सेवा योजना गोवा सरकार का अपना स्वास्थ्य बीमा है, जो दिसंबर 2016 में अधिसूचित हुआ और स्वास्थ्य सेवा निदेशालय इसे चलाता है।",
      "पंजीकृत परिवार को सूचीबद्ध सरकारी और निजी अस्पतालों में तय इलाजों का कैशलेस इलाज मिलता है। कवर तीन सदस्य तक के परिवार के लिए ₹2.5 लाख और चार या ज़्यादा सदस्यों के लिए ₹4 लाख सालाना है, जो पूरे परिवार में बँटता है।",
      "2026-27 के बजट में ₹4 लाख और ₹6 लाख के ऊँचे कवर स्लैब की घोषणा हुई। इसे लागू करने वाला आदेश हमें नहीं मिला, इसलिए यहाँ योजना दस्तावेज़ वाली राशियाँ दिखाई गई हैं।",
    ],
  },
  benefits: {
    en: [
      "Cashless treatment up to ₹2.5 lakh a year for a family of three or fewer.",
      "Cashless treatment up to ₹4 lakh a year for a family of four or more.",
      "Covers listed surgeries and hospital procedures at empanelled hospitals; one member or several can use the cover.",
      "You can buy extra cover from the insurer at your own cost.",
    ],
    hi: [
      "तीन या कम सदस्यों वाले परिवार को सालाना ₹2.5 लाख तक कैशलेस इलाज।",
      "चार या ज़्यादा सदस्यों वाले परिवार को सालाना ₹4 लाख तक कैशलेस इलाज।",
      "सूचीबद्ध अस्पतालों में तय सर्जरी और इलाज शामिल; कवर एक या कई सदस्य इस्तेमाल कर सकते हैं।",
      "आप अपने ख़र्च पर बीमा कंपनी से ज़्यादा कवर ले सकते हैं।",
    ],
  },
  eligibilityText: {
    en: [
      "Anyone who has lived in Goa for five years or more, with their family.",
      "Family means you, your spouse, unmarried children and dependent parents (or in-laws, for a woman). A family cannot be split into two cards.",
      "A small yearly registration and renewal fee applies (₹200 for a family of up to three, as per the enrolment form); SC/ST, non-creamy-layer OBC and disabled applicants get 50% off.",
    ],
    hi: [
      "जो भी पाँच साल या उससे ज़्यादा से गोवा में रह रहा है, अपने परिवार के साथ।",
      "परिवार यानी आप, जीवनसाथी, अविवाहित बच्चे और आश्रित माता-पिता (महिला के लिए सास-ससुर भी)। एक परिवार को दो कार्डों में नहीं बाँटा जा सकता।",
      "हर साल थोड़ी पंजीकरण और नवीनीकरण फ़ीस लगती है (नामांकन फ़ॉर्म के अनुसार तीन सदस्य तक के परिवार के लिए ₹200); SC/ST, नॉन-क्रीमी लेयर OBC और दिव्यांग आवेदकों को 50% छूट।",
    ],
  },
  exclusions: {
    en: [
      "Government employees and their dependants.",
      "People who have lived in Goa for less than five years.",
      "Treatments not on the scheme's list of procedures.",
    ],
    hi: [
      "सरकारी कर्मचारी और उन पर आश्रित लोग।",
      "जो पाँच साल से कम समय से गोवा में रह रहे हैं।",
      "योजना की सूची से बाहर के इलाज।",
    ],
  },
  applicationProcess: {
    offline: {
      en: [
        "Fill in the DDSSY enrolment form with the details of all family members.",
        "Register at a Goa Electronics Ltd. registration centre (head office at Shrama Shakti Bhavan, Patto Plaza, Panaji) with the documents and pay the fee.",
        "Collect your DDSSY card and renew it every year.",
        "When you need treatment, go to an empanelled hospital with the card; the DDSSY helper there seeks pre-approval for cashless treatment.",
      ],
      hi: [
        "परिवार के सभी सदस्यों के विवरण के साथ DDSSY नामांकन फ़ॉर्म भरें।",
        "दस्तावेज़ों के साथ गोवा इलेक्ट्रॉनिक्स लिमिटेड के पंजीकरण केंद्र (मुख्य दफ़्तर श्रम शक्ति भवन, पाटो प्लाज़ा, पणजी) में पंजीकरण कराएँ और फ़ीस भरें।",
        "अपना DDSSY कार्ड लें और हर साल नवीनीकरण कराएँ।",
        "इलाज की ज़रूरत हो तो कार्ड लेकर सूचीबद्ध अस्पताल जाएँ; वहाँ का DDSSY सहायक कैशलेस इलाज की पूर्व-मंज़ूरी माँगता है।",
      ],
    },
  },
  documents: {
    en: [
      "Aadhaar card (or enrolment slip) of every family member above 5 years",
      "Proof of 5 years in Goa: passport, residence certificate, voter ID or driving licence issued at least 5 years ago in Goa",
      "Ration card to show the family (or marriage and birth certificates if you don't have one)",
      "Caste certificate and income certificate, for the OBC/SC/ST fee concession",
      "Disability certificate from the medical board, for the disability fee concession",
    ],
    hi: [
      "5 साल से ऊपर के हर सदस्य का आधार कार्ड (या नामांकन पर्ची)",
      "गोवा में 5 साल का सबूत: कम से कम 5 साल पहले गोवा में बना पासपोर्ट, निवास प्रमाण पत्र, वोटर ID या ड्राइविंग लाइसेंस",
      "परिवार दिखाने के लिए राशन कार्ड (न हो तो विवाह और जन्म प्रमाण पत्र)",
      "OBC/SC/ST फ़ीस छूट के लिए जाति प्रमाण पत्र और आय प्रमाण पत्र",
      "दिव्यांग फ़ीस छूट के लिए मेडिकल बोर्ड का दिव्यांगता प्रमाण पत्र",
    ],
  },
  faqs: [
    {
      q: { en: "Is DDSSY the same as Ayushman Bharat?", hi: "क्या DDSSY और आयुष्मान भारत एक ही हैं?" },
      a: {
        en: "No. DDSSY is Goa's own scheme open to almost all long-term residents. Ayushman Bharat PM-JAY is the central scheme for eligible poorer families. Ask the DHS which card to use for a given treatment.",
        hi: "नहीं। DDSSY गोवा की अपनी योजना है जो लगभग सभी पुराने निवासियों के लिए है। आयुष्मान भारत PM-JAY पात्र गरीब परिवारों के लिए केंद्र की योजना है। किसी इलाज के लिए कौन सा कार्ड इस्तेमाल करें, यह स्वास्थ्य सेवा निदेशालय से पूछें।",
      },
    },
    {
      q: { en: "Has the cover been raised to ₹6 lakh?", hi: "क्या कवर बढ़कर ₹6 लाख हो गया है?" },
      a: {
        en: "The 2026-27 budget announced new ₹4 lakh and ₹6 lakh slabs. Check with DHS or at the registration centre whether the new slabs apply to your card yet.",
        hi: "2026-27 के बजट में ₹4 लाख और ₹6 लाख के नए स्लैब की घोषणा हुई है। आपके कार्ड पर नए स्लैब लागू हुए या नहीं, यह स्वास्थ्य सेवा निदेशालय या पंजीकरण केंद्र से पता करें।",
      },
    },
  ],

  officialUrl: "https://dhs.goa.gov.in/",
  sources: [
    "https://www.goa.gov.in/wp-content/uploads/2022/05/Deen-Dayal-Swasthya-Seva-Yojana_compressed.pdf",
    "https://www.goa.gov.in/wp-content/uploads/2020/11/Notification-Regarding-Deen-Dayal-Swasth-Seva-Yojana-Scheme.pdf",
    "https://prsindia.org/budgets/states/goa-budget-analysis-2026-27",
  ],
  lastVerified: "2026-10-06",
  launchedYear: 2016,
  status: "check-status",
};

export default scheme;
