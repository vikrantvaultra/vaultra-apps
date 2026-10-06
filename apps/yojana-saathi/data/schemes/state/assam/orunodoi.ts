import { all, female, labelled, residentOf } from "@/lib/engine/build";
import type { Scheme } from "@/lib/types";

const scheme: Scheme = {
  slug: "orunodoi",
  overlapGroup: "women-monthly",
  name: { en: "Orunodoi 3.0", hi: "ओरुणोदोई 3.0" },
  aka: ["Orunodoi", "Orunodoi Scheme", "Arunodoi", "Orunodoi 3.0"],
  shortDescription: {
    en: "Women heads of poor families in Assam get ₹1,250 every month by DBT into their own bank account to help with household needs.",
    hi: "असम के गरीब परिवारों की मुखिया महिलाओं को घर के खर्च के लिए हर महीने ₹1,250 सीधे उनके अपने बैंक खाते में मिलते हैं।",
  },
  level: "state",
  state: "assam",
  department: { en: "Finance Department, Government of Assam", hi: "वित्त विभाग, असम सरकार" },
  categories: ["women-child", "social-welfare"],
  tags: ["orunodoi", "women", "monthly allowance", "dbt", "widow", "assam"],
  benefitType: "cash",
  isDBT: true,
  value: { amount: 1250, period: "monthly", kind: "cash" },
  kundliHouse: "women-family",
  eligibility: all(
    residentOf("assam"),
    labelled(female(), { en: "Paid to a woman of the family", hi: "पैसा परिवार की महिला को मिलता है" }),
  ),

  details: {
    en: [
      "Orunodoi is Assam's largest cash support scheme. It pays a fixed amount every month to a woman of each selected poor family, so that the household can buy food, medicines and other basics.",
      "The scheme started in October 2020. The current version, Orunodoi 3.0, began in September 2024 and pays ₹1,250 a month, which includes ₹250 meant for the electricity bill. About 37 lakh women received the first payment of 2026-27 in August 2026.",
      "Beneficiaries are chosen at the district level. Payments now go only through Aadhaar-based transfer into an Aadhaar-linked bank account, to weed out duplicate names.",
    ],
    hi: [
      "ओरुणोदोई असम की सबसे बड़ी नकद सहायता योजना है। इसमें चुने गए हर गरीब परिवार की एक महिला को हर महीने तय रकम मिलती है, ताकि घर का राशन, दवाई और ज़रूरी सामान खरीदा जा सके।",
      "यह योजना अक्टूबर 2020 में शुरू हुई। इसका मौजूदा रूप, ओरुणोदोई 3.0, सितंबर 2024 से चल रहा है और इसमें हर महीने ₹1,250 मिलते हैं, जिसमें ₹250 बिजली बिल के लिए हैं। अगस्त 2026 में करीब 37 लाख महिलाओं को 2026-27 की पहली किस्त मिली।",
      "लाभार्थियों का चुनाव ज़िला स्तर पर होता है। अब पैसा सिर्फ़ आधार आधारित भुगतान से आधार से जुड़े बैंक खाते में जाता है, ताकि दोहरे नाम हटाए जा सकें।",
    ],
  },
  benefits: {
    en: [
      "₹1,250 every month in the bank account of the woman named for the family.",
      "This includes ₹250 a month to help pay the electricity bill.",
      "The money comes by Direct Benefit Transfer, with no middleman.",
    ],
    hi: [
      "परिवार की नामित महिला के बैंक खाते में हर महीने ₹1,250।",
      "इसमें बिजली बिल भरने के लिए हर महीने ₹250 शामिल हैं।",
      "पैसा DBT से सीधे आता है, बीच में कोई नहीं।",
    ],
  },
  eligibilityText: {
    en: [
      "The family lives in Assam and is economically weak.",
      "The benefit is paid to a woman of the family, who must have an Aadhaar-linked bank account.",
      "Priority groups include widows, divorced women, families with an unmarried daughter over 45, families with a person with disability or a transgender person, and families affected by AIDS, thalassemia or leprosy.",
      "Selection is done by the District Level Monitoring Committee.",
    ],
    hi: [
      "परिवार असम में रहता हो और आर्थिक रूप से कमज़ोर हो।",
      "पैसा परिवार की एक महिला को मिलता है, जिसका आधार से जुड़ा बैंक खाता होना ज़रूरी है।",
      "विधवा, तलाकशुदा महिलाएँ, 45 साल से ऊपर की अविवाहित बेटी वाले परिवार, दिव्यांग या ट्रांसजेंडर सदस्य वाले परिवार, और एड्स, थैलेसीमिया या कुष्ठ रोग से प्रभावित परिवारों को प्राथमिकता मिलती है।",
      "चयन ज़िला स्तरीय निगरानी समिति (DLMC) करती है।",
    ],
  },
  exclusions: {
    en: [
      "Families that are not economically weak, as checked by the district committee.",
      "Anyone without a valid Aadhaar number and an Aadhaar-linked bank account.",
      "Duplicate or ineligible names found during the regular review of the list.",
    ],
    hi: [
      "जो परिवार ज़िला समिति की जाँच में आर्थिक रूप से कमज़ोर न पाए जाएँ।",
      "जिनके पास मान्य आधार नंबर और आधार से जुड़ा बैंक खाता न हो।",
      "सूची की नियमित जाँच में दोहरे या अपात्र पाए गए नाम।",
    ],
  },
  applicationProcess: {
    online: {
      en: [
        "When the government opens new applications, fill in the form on the Orunodoi portal (orunodoi.in) or the link announced by the district.",
        "Upload or attach your Aadhaar, ration card and bank details.",
        "Track whether you were selected through your Gaon Panchayat, ward office or district administration.",
      ],
      hi: [
        "जब सरकार नए आवेदन खोले, तब ओरुणोदोई पोर्टल (orunodoi.in) या ज़िले द्वारा बताए गए लिंक पर फ़ॉर्म भरें।",
        "अपना आधार, राशन कार्ड और बैंक की जानकारी अपलोड करें या साथ लगाएँ।",
        "चयन हुआ या नहीं, यह अपनी गाँव पंचायत, वार्ड कार्यालय या ज़िला प्रशासन से पता करें।",
      ],
    },
    offline: {
      en: [
        "Collect the form from your Gaon Panchayat, VCDC or urban local body office when applications are open.",
        "Submit it with the undertaking and documents.",
        "Your name is checked at the local level and approved by the district committee.",
      ],
      hi: [
        "आवेदन खुलने पर अपनी गाँव पंचायत, VCDC या नगर निकाय कार्यालय से फ़ॉर्म लें।",
        "घोषणा पत्र और दस्तावेज़ों के साथ जमा करें।",
        "स्थानीय स्तर पर नाम की जाँच होती है और ज़िला समिति मंज़ूरी देती है।",
      ],
    },
  },
  documents: {
    en: ["Aadhaar card of the woman", "Ration card", "Passbook of an Aadhaar-linked bank account in her name", "Signed undertaking on eligibility"],
    hi: ["महिला का आधार कार्ड", "राशन कार्ड", "उसके नाम के आधार से जुड़े बैंक खाते की पासबुक", "पात्रता के बारे में हस्ताक्षरित घोषणा पत्र"],
  },
  faqs: [
    {
      q: { en: "Payments stopped before the 2026 election. Have they restarted?", hi: "2026 चुनाव से पहले पैसा रुक गया था। क्या फिर शुरू हुआ?" },
      a: {
        en: "Yes. The 2026-27 budget said payments would resume from August, and the first instalment of 2026-27 was paid on 1 August 2026.",
        hi: "हाँ। 2026-27 के बजट में अगस्त से भुगतान फिर शुरू करने की बात कही गई थी, और 1 अगस्त 2026 को 2026-27 की पहली किस्त भेजी गई।",
      },
    },
    {
      q: { en: "Why is my payment not coming even though I am selected?", hi: "चयन होने के बाद भी पैसा क्यों नहीं आ रहा?" },
      a: {
        en: "Payments now go only through the Aadhaar-based system. Check that your bank account is linked to Aadhaar and active. If it still doesn't come, contact your block or circle office.",
        hi: "अब पैसा सिर्फ़ आधार आधारित सिस्टम से जाता है। देखें कि आपका बैंक खाता आधार से जुड़ा और चालू है। फिर भी न आए तो अपने ब्लॉक या सर्कल कार्यालय से संपर्क करें।",
      },
    },
    {
      q: { en: "Are there new rules on who can get welfare benefits?", hi: "क्या कल्याण योजनाओं के लिए कोई नए नियम आए हैं?" },
      a: {
        en: "The 2026-27 budget proposed that men who practise polygamy and people convicted of a criminal offence will not be eligible for notified welfare schemes. Watch for the official order on how this applies to Orunodoi.",
        hi: "2026-27 के बजट में प्रस्ताव है कि बहुविवाह करने वाले पुरुष और किसी आपराधिक मामले में दोषी लोग अधिसूचित कल्याण योजनाओं के पात्र नहीं होंगे। ओरुणोदोई पर यह कैसे लागू होगा, इसका सरकारी आदेश देखें।",
      },
    },
  ],

  officialUrl: "https://it.assam.gov.in/scheme-page/assam-orunodoi-scheme",
  sources: [
    "https://it.assam.gov.in/scheme-page/assam-orunodoi-scheme",
    "https://newsonair.gov.in/assam-cm-dr-himanta-biswa-sarma-launches-orunodoi-3-0-disbursement/",
    "https://aladigitallibrary.in/handle/123456789/4238",
  ],
  lastVerified: "2026-10-06",
  launchedYear: 2024,
  status: "active",
};

export default scheme;
