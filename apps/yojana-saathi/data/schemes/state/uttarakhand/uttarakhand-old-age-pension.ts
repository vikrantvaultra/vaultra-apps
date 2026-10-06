import { all, any, incomeUpTo, isTrue, labelled, minAge, residentOf } from "@/lib/engine/build";
import type { Scheme } from "@/lib/types";

const scheme: Scheme = {
  slug: "uttarakhand-old-age-pension",
  overlapGroup: "old-age-pension",
  name: { en: "Uttarakhand Old Age Pension Scheme", hi: "उत्तराखंड वृद्धावस्था पेंशन योजना" },
  aka: ["Vridhavastha Pension Uttarakhand", "Old age pension Uttarakhand"],
  shortDescription: {
    en: "People in Uttarakhand aged 60 or more who are BPL or earn up to ₹4,000 a month get a pension of ₹1,500 every month. Husband and wife can both get it.",
    hi: "उत्तराखंड में 60 साल या उससे ज़्यादा उम्र के लोगों को, जो BPL हैं या जिनकी आय ₹4,000 महीने तक है, हर महीने ₹1,500 पेंशन मिलती है। पति-पत्नी दोनों को मिल सकती है।",
  },
  level: "state",
  state: "uttarakhand",
  department: { en: "Social Welfare Department, Government of Uttarakhand", hi: "समाज कल्याण विभाग, उत्तराखंड सरकार" },
  categories: ["pension-insurance", "social-welfare"],
  tags: ["old age pension", "senior citizen", "pension", "elderly", "vridhavastha", "uttarakhand"],
  benefitType: "pension",
  isDBT: true,
  value: { amount: 1500, period: "monthly", kind: "pension" },
  ageRange: { min: 60 },
  kundliHouse: "senior",
  eligibility: all(
    residentOf("uttarakhand"),
    minAge(60),
    labelled(any(isTrue("bpl"), incomeUpTo(48_000)), {
      en: "BPL card holder, or income from all sources up to ₹4,000 a month",
      hi: "BPL कार्ड धारक हों, या सभी स्रोतों से आय ₹4,000 महीने तक हो",
    }),
  ),

  details: {
    en: [
      "The Old Age Pension Scheme gives a monthly pension to poor senior citizens in Uttarakhand so they can meet basic needs. Both husband and wife can get it if each is eligible.",
      "The pension is ₹1,500 a month. This rate was set in April 2022 and includes the central government's share under the national old age pension scheme.",
      "The Social Welfare Department runs it through the eSPAN pension portal. Names are proposed in an open meeting of the Gram Sabha (or by the ward councillor in towns), and the pension is paid into a bank account linked to Aadhaar.",
    ],
    hi: [
      "वृद्धावस्था पेंशन योजना उत्तराखंड के ग़रीब बुज़ुर्गों को हर महीने पेंशन देती है, ताकि उनकी बुनियादी ज़रूरतें पूरी हो सकें। अगर पति और पत्नी दोनों पात्र हैं, तो दोनों को पेंशन मिल सकती है।",
      "पेंशन ₹1,500 महीना है। यह दर अप्रैल 2022 में तय हुई थी और इसमें राष्ट्रीय वृद्धावस्था पेंशन योजना का केंद्र सरकार वाला हिस्सा भी शामिल है।",
      "समाज कल्याण विभाग इसे eSPAN पेंशन पोर्टल से चलाता है। नाम ग्राम सभा की खुली बैठक में (शहरों में वार्ड पार्षद के ज़रिए) प्रस्तावित होते हैं, और पेंशन आधार से जुड़े बैंक खाते में आती है।",
    ],
  },
  benefits: {
    en: [
      "₹1,500 a month for life, paid into your bank account.",
      "That is ₹18,000 a year.",
      "Husband and wife can each get the pension.",
    ],
    hi: [
      "जीवन भर हर महीने ₹1,500, सीधे बैंक खाते में।",
      "साल भर में ₹18,000।",
      "पति और पत्नी दोनों को अलग-अलग पेंशन मिल सकती है।",
    ],
  },
  eligibilityText: {
    en: [
      "Aged 60 years or more and living in Uttarakhand.",
      "Holds a BPL card, or has an income of up to ₹4,000 a month from all sources.",
      "If you have a son or grandson above 20 years of age, you are still eligible if the family lives below the poverty line or the family's total monthly income is up to ₹4,000.",
      "Selected in an open meeting of the Gram Sabha (villages) or proposed by the councillor (towns).",
    ],
    hi: [
      "उम्र 60 साल या उससे ज़्यादा हो और उत्तराखंड में रहते हों।",
      "BPL कार्ड हो, या सभी स्रोतों से आय ₹4,000 महीने तक हो।",
      "अगर आपका 20 साल से बड़ा बेटा या पोता है, तब भी आप पात्र हैं, बशर्ते परिवार ग़रीबी रेखा से नीचे हो या परिवार की कुल मासिक आय ₹4,000 तक हो।",
      "गाँव में ग्राम सभा की खुली बैठक में चयन हुआ हो, या शहर में पार्षद ने प्रस्ताव दिया हो।",
    ],
  },
  exclusions: {
    en: [
      "Applicants below 60 years of age.",
      "Income above ₹4,000 a month without a BPL card.",
      "Not selected or proposed by the Gram Sabha or ward councillor.",
    ],
    hi: [
      "60 साल से कम उम्र के आवेदक।",
      "BPL कार्ड न हो और आय ₹4,000 महीने से ज़्यादा हो।",
      "ग्राम सभा या वार्ड पार्षद ने चयन या प्रस्ताव न किया हो।",
    ],
  },
  applicationProcess: {
    online: {
      en: [
        "Apply on the pension portal ssp.uk.gov.in, the Umang app or the Apni Sarkar portal (eservices.uk.gov.in).",
        "Fill in the old age pension form and upload the documents listed below.",
        "Track the status with your application number on ssp.uk.gov.in.",
      ],
      hi: [
        "पेंशन पोर्टल ssp.uk.gov.in, उमंग ऐप या अपनी सरकार पोर्टल (eservices.uk.gov.in) पर आवेदन करें।",
        "वृद्धावस्था पेंशन का फ़ॉर्म भरें और नीचे दिए दस्तावेज़ अपलोड करें।",
        "ssp.uk.gov.in पर आवेदन नंबर से स्थिति देखें।",
      ],
    },
    offline: {
      en: [
        "Get your name proposed in the Gram Sabha's open meeting, or through your ward councillor in towns.",
        "Contact the block or tehsil social welfare office for help with the application.",
      ],
      hi: [
        "गाँव में ग्राम सभा की खुली बैठक में, या शहर में अपने वार्ड पार्षद के ज़रिए अपना नाम प्रस्तावित कराएँ।",
        "आवेदन में मदद के लिए ब्लॉक या तहसील के समाज कल्याण कार्यालय से संपर्क करें।",
      ],
    },
  },
  documents: {
    en: [
      "Family register copy from the VPDO (villages) or ration card (towns)",
      "Online income certificate (up to ₹4,000 a month) or BPL card",
      "Proposal from the Gram Panchayat open meeting or councillor",
      "Photo attested by the Pradhan, VPDO, ward member or councillor",
      "CBS bank account passbook",
      "Aadhaar card",
    ],
    hi: [
      "ग्राम पंचायत विकास अधिकारी (VPDO) से परिवार रजिस्टर की नकल (गाँव) या राशन कार्ड (शहर)",
      "ऑनलाइन बना आय प्रमाण पत्र (₹4,000 महीने तक) या BPL कार्ड",
      "ग्राम पंचायत की खुली बैठक या पार्षद का प्रस्ताव",
      "प्रधान, VPDO, सभासद या पार्षद से प्रमाणित फ़ोटो",
      "CBS बैंक खाते की पासबुक",
      "आधार कार्ड",
    ],
  },
  faqs: [
    {
      q: { en: "Is the ₹1,500 in addition to the central old age pension?", hi: "क्या ₹1,500 केंद्र की वृद्धावस्था पेंशन के अलावा है?" },
      a: {
        en: "No. The ₹1,500 already includes the central government's share, so you get one combined pension.",
        hi: "नहीं। ₹1,500 में केंद्र सरकार का हिस्सा पहले से शामिल है, इसलिए आपको एक ही मिली-जुली पेंशन मिलती है।",
      },
    },
    {
      q: { en: "How can I check if my pension has been paid?", hi: "मेरी पेंशन आई या नहीं, कैसे देखूँ?" },
      a: {
        en: "Use the 'pension status' or 'know pension amount' options on ssp.uk.gov.in, or call the Social Welfare helpline 1800-180-4236.",
        hi: "ssp.uk.gov.in पर 'पेंशन की स्थिति' या 'पेंशन राशि जानें' विकल्प देखें, या समाज कल्याण हेल्पलाइन 1800-180-4236 पर फ़ोन करें।",
      },
    },
  ],

  officialUrl: "https://ssp.uk.gov.in/",
  sources: [
    "https://socialwelfare.uk.gov.in/service/old-age-pension/",
    "https://cdnbbsr.s3waas.gov.in/s357bafb2c2dfeefba931bb03a835b1fa9/uploads/2025/02/202502041827311603.pdf",
    "https://cdnbbsr.s3waas.gov.in/s357bafb2c2dfeefba931bb03a835b1fa9/uploads/2025/02/20250204221689152.pdf",
  ],
  lastVerified: "2026-10-06",
  launchedYear: 2001,
  status: "active",
};

export default scheme;
