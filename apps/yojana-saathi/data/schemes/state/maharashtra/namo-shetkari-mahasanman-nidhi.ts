import { all, labelled, notTaxPayer, residentOf, when } from "@/lib/engine/build";
import type { Scheme } from "@/lib/types";

const scheme: Scheme = {
  slug: "namo-shetkari-mahasanman-nidhi",
  name: { en: "Namo Shetkari Mahasanman Nidhi Yojana", hi: "नमो शेतकरी महासम्मान निधि योजना" },
  aka: ["NSMNY", "Namo Shetkari", "Namo Kisan"],
  shortDescription: {
    en: "Maharashtra farmers who get PM-KISAN receive an extra ₹6,000 a year from the state, in three instalments of ₹2,000, with no separate application.",
    hi: "PM-KISAN पाने वाले महाराष्ट्र के किसानों को राज्य सरकार से हर साल ₹6,000 अलग से मिलते हैं, ₹2,000 की तीन किस्तों में, अलग आवेदन के बिना।",
  },
  level: "state",
  state: "maharashtra",
  department: {
    en: "Agriculture Department, Government of Maharashtra",
    hi: "कृषि विभाग, महाराष्ट्र सरकार",
  },
  categories: ["agriculture"],
  tags: ["farmer", "kisan", "pm kisan", "income support", "dbt", "maharashtra"],
  benefitType: "cash",
  isDBT: true,
  value: { amount: 6000, period: "yearly", kind: "cash" },
  kundliHouse: "farming",
  eligibility: all(
    residentOf("maharashtra"),
    when("occupation", "in", ["farmer"]),
    labelled(notTaxPayer(), { en: "No one in the family paid income tax last year", hi: "परिवार में किसी ने पिछले साल आयकर न भरा हो" }),
  ),

  details: {
    en: [
      "Namo Shetkari Mahasanman Nidhi is Maharashtra's top-up to the central PM-KISAN scheme. It began in 2023.",
      "Every farmer family that is an active PM-KISAN beneficiary in Maharashtra gets another ₹6,000 a year from the state, paid in three instalments of ₹2,000. Together with PM-KISAN, that makes ₹12,000 a year.",
      "The Agriculture Department pays the money by Direct Benefit Transfer into the same Aadhaar-linked bank account used for PM-KISAN. The state has announced plans to raise its share to ₹9,000, but instalments so far have stayed at ₹2,000.",
    ],
    hi: [
      "नमो शेतकरी महासम्मान निधि, केंद्र की PM-KISAN योजना के ऊपर महाराष्ट्र सरकार की अतिरिक्त मदद है। यह 2023 में शुरू हुई।",
      "महाराष्ट्र में PM-KISAN का लाभ ले रहे हर किसान परिवार को राज्य से साल में ₹6,000 और मिलते हैं, ₹2,000 की तीन किस्तों में। PM-KISAN मिलाकर यह ₹12,000 सालाना हो जाता है।",
      "कृषि विभाग यह पैसा DBT से उसी आधार से जुड़े बैंक खाते में भेजता है जिसमें PM-KISAN आता है। राज्य ने अपना हिस्सा ₹9,000 करने की घोषणा की है, पर अब तक किस्तें ₹2,000 की ही आई हैं।",
    ],
  },
  benefits: {
    en: [
      "₹6,000 a year from the state government.",
      "Paid in three instalments of ₹2,000 each.",
      "Comes on top of PM-KISAN's ₹6,000, so ₹12,000 a year in total.",
    ],
    hi: [
      "राज्य सरकार से हर साल ₹6,000।",
      "₹2,000 की तीन किस्तों में भुगतान।",
      "यह PM-KISAN के ₹6,000 के अलावा है, यानी कुल ₹12,000 सालाना।",
    ],
  },
  eligibilityText: {
    en: [
      "A farmer family in Maharashtra that is an active PM-KISAN beneficiary.",
      "Land records are updated and the land is in the farmer's name in Maharashtra.",
      "PM-KISAN e-KYC is done and the bank account is linked to Aadhaar.",
    ],
    hi: [
      "महाराष्ट्र का वह किसान परिवार जो PM-KISAN का सक्रिय लाभार्थी है।",
      "ज़मीन के रिकॉर्ड अपडेट हों और ज़मीन महाराष्ट्र में किसान के नाम पर हो।",
      "PM-KISAN की e-KYC पूरी हो और बैंक खाता आधार से जुड़ा हो।",
    ],
  },
  exclusions: {
    en: [
      "Anyone left out of PM-KISAN is left out here too: income-tax payers, serving or retired government employees (except Group D / multi-tasking staff), and pensioners getting ₹10,000 or more a month.",
      "Current or former holders of constitutional posts, ministers, MPs, MLAs and similar elected office holders, and their families.",
      "Professionals such as doctors, engineers, lawyers and chartered accountants who are registered and practising.",
      "Farmers whose PM-KISAN payment is on hold because e-KYC, land seeding or Aadhaar bank linking is pending.",
    ],
    hi: [
      "जो PM-KISAN से बाहर हैं वे इससे भी बाहर हैं: आयकरदाता, मौजूदा या सेवानिवृत्त सरकारी कर्मचारी (ग्रुप D / मल्टी-टास्किंग स्टाफ़ को छोड़कर), और ₹10,000 या उससे ज़्यादा मासिक पेंशन पाने वाले।",
      "संवैधानिक पदों पर रहे या मौजूदा लोग, मंत्री, सांसद, विधायक जैसे निर्वाचित पदाधिकारी और उनके परिवार।",
      "डॉक्टर, इंजीनियर, वकील, चार्टर्ड अकाउंटेंट जैसे पंजीकृत और प्रैक्टिस करने वाले पेशेवर।",
      "वे किसान जिनकी PM-KISAN किस्त e-KYC, ज़मीन की सीडिंग या आधार-बैंक लिंक बाकी होने से रुकी है।",
    ],
  },
  applicationProcess: {
    online: {
      en: [
        "There is no separate form. If you are not yet in PM-KISAN, register at pmkisan.gov.in or through your Talathi / agriculture office.",
        "Complete PM-KISAN e-KYC and make sure your bank account is Aadhaar-linked.",
        "Check your Namo Shetkari payment status at nsmny.mahait.org using your registration number or mobile number.",
      ],
      hi: [
        "अलग फ़ॉर्म नहीं है। अगर आप अभी PM-KISAN में नहीं हैं, तो pmkisan.gov.in पर या तलाठी / कृषि कार्यालय से रजिस्टर करें।",
        "PM-KISAN की e-KYC पूरी करें और पक्का करें कि बैंक खाता आधार से जुड़ा है।",
        "nsmny.mahait.org पर रजिस्ट्रेशन नंबर या मोबाइल नंबर से नमो शेतकरी की भुगतान स्थिति देखें।",
      ],
    },
  },
  documents: {
    en: ["PM-KISAN registration number", "Aadhaar card", "Aadhaar-linked bank account", "Land record (7/12 extract)"],
    hi: ["PM-KISAN रजिस्ट्रेशन नंबर", "आधार कार्ड", "आधार से जुड़ा बैंक खाता", "ज़मीन का रिकॉर्ड (7/12 उतारा)"],
  },
  faqs: [
    {
      q: { en: "Do I need to apply separately for Namo Shetkari?", hi: "क्या नमो शेतकरी के लिए अलग से आवेदन करना होगा?" },
      a: {
        en: "No. If you are an active PM-KISAN beneficiary in Maharashtra, you are included automatically.",
        hi: "नहीं। अगर आप महाराष्ट्र में PM-KISAN के सक्रिय लाभार्थी हैं, तो आप अपने-आप इसमें शामिल हैं।",
      },
    },
    {
      q: { en: "I get PM-KISAN but not Namo Shetkari. Why?", hi: "मुझे PM-KISAN मिलता है पर नमो शेतकरी नहीं। क्यों?" },
      a: {
        en: "Usually because e-KYC, land seeding or Aadhaar linking of the bank account is incomplete. Contact your Taluka agriculture office or check the status on the portal.",
        hi: "अक्सर इसकी वजह e-KYC, ज़मीन की सीडिंग या बैंक खाते का आधार से न जुड़ना होता है। तालुका कृषि कार्यालय से संपर्क करें या पोर्टल पर स्थिति देखें।",
      },
    },
  ],

  officialUrl: "https://nsmny.mahait.org/",
  sources: [
    "https://nsmny.mahait.org/",
    "https://static.pib.gov.in/WriteReadData/specificdocs/documents/2023/aug/doc2023822242401.pdf",
    "https://www.thehitavada.com/Encyc/2025/2/25/Farmers-to-get-Rs-3-000-more-under-NSMNY-CM.html",
  ],
  lastVerified: "2026-10-06",
  launchedYear: 2023,
  status: "active",
};

export default scheme;
