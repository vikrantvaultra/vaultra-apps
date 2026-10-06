import { all, any, female, incomeUpTo, isTrue, labelled, minAge, residentOf, when } from "@/lib/engine/build";
import type { Scheme } from "@/lib/types";

const scheme: Scheme = {
  slug: "uttarakhand-widow-pension",
  tier: "compact",
  overlapGroup: "widow-pension",
  name: { en: "Uttarakhand Widow Pension Scheme", hi: "उत्तराखंड विधवा पेंशन योजना" },
  aka: ["Vidhwa Pension Uttarakhand", "Niraashrit Vidhwa Bharan Poshan Anudan"],
  shortDescription: {
    en: "Widows in Uttarakhand aged 18 or more who are BPL or earn up to ₹4,000 a month get ₹1,500 every month.",
    hi: "उत्तराखंड की 18 साल या उससे ज़्यादा उम्र की विधवा महिलाओं को, जो BPL हैं या जिनकी आय ₹4,000 महीने तक है, हर महीने ₹1,500 मिलते हैं।",
  },
  level: "state",
  state: "uttarakhand",
  department: { en: "Social Welfare Department, Government of Uttarakhand", hi: "समाज कल्याण विभाग, उत्तराखंड सरकार" },
  categories: ["social-welfare", "women-child", "pension-insurance"],
  tags: ["widow pension", "widow", "vidhwa", "pension", "women", "uttarakhand"],
  benefitType: "pension",
  isDBT: true,
  value: { amount: 1500, period: "monthly", kind: "pension" },
  ageRange: { min: 18 },
  kundliHouse: "women-family",
  eligibility: all(
    residentOf("uttarakhand"),
    female(),
    when("marital", "eq", "widowed"),
    minAge(18),
    labelled(any(isTrue("bpl"), incomeUpTo(48_000)), {
      en: "BPL card holder, or income up to ₹4,000 a month",
      hi: "BPL कार्ड धारक हों, या आय ₹4,000 महीने तक हो",
    }),
  ),

  details: {
    en: [
      "Uttarakhand's widow pension (officially the 'destitute widow maintenance grant') gives poor widows a fixed monthly amount. Since April 2022 it is ₹1,500 a month, which includes the central share under the national widow pension scheme.",
      "The Social Welfare Department runs it through the eSPAN pension portal, and the money goes to an Aadhaar-linked bank account.",
    ],
    hi: [
      "उत्तराखंड की विधवा पेंशन (सरकारी नाम 'निराश्रित विधवा भरण पोषण अनुदान') ग़रीब विधवा महिलाओं को हर महीने तय रकम देती है। अप्रैल 2022 से यह ₹1,500 महीना है, जिसमें राष्ट्रीय विधवा पेंशन योजना का केंद्र वाला हिस्सा शामिल है।",
      "समाज कल्याण विभाग इसे eSPAN पेंशन पोर्टल से चलाता है, और पैसा आधार से जुड़े बैंक खाते में आता है।",
    ],
  },
  benefits: {
    en: ["₹1,500 every month, paid into your bank account.", "That is ₹18,000 a year."],
    hi: ["हर महीने ₹1,500, सीधे बैंक खाते में।", "साल भर में ₹18,000।"],
  },
  eligibilityText: {
    en: [
      "A widow living in Uttarakhand, aged 18 years or more.",
      "Holds a BPL card, or has an income of up to ₹4,000 a month.",
      "Selected in an open meeting of the Gram Sabha (villages) or proposed by the councillor (towns).",
      "Has her husband's death certificate.",
    ],
    hi: [
      "उत्तराखंड में रहने वाली विधवा महिला, जिसकी उम्र 18 साल या उससे ज़्यादा हो।",
      "BPL कार्ड हो, या आय ₹4,000 महीने तक हो।",
      "गाँव में ग्राम सभा की खुली बैठक में चयन हुआ हो, या शहर में पार्षद ने प्रस्ताव दिया हो।",
      "पति का मृत्यु प्रमाण पत्र हो।",
    ],
  },
  applicationProcess: {
    online: {
      en: [
        "Apply on ssp.uk.gov.in using the widow pension online form.",
        "Upload the documents: income certificate or BPL card, family register or ration card, husband's death certificate, Gram Sabha/councillor proposal, attested photo, bank passbook and Aadhaar.",
        "Track the status on ssp.uk.gov.in with your application number.",
      ],
      hi: [
        "ssp.uk.gov.in पर विधवा पेंशन का ऑनलाइन फ़ॉर्म भरें।",
        "दस्तावेज़ अपलोड करें: आय प्रमाण पत्र या BPL कार्ड, परिवार रजिस्टर या राशन कार्ड, पति का मृत्यु प्रमाण पत्र, ग्राम सभा/पार्षद का प्रस्ताव, प्रमाणित फ़ोटो, बैंक पासबुक और आधार।",
        "ssp.uk.gov.in पर आवेदन नंबर से स्थिति देखें।",
      ],
    },
  },
  documents: {
    en: [
      "Online income certificate (up to ₹4,000 a month) or BPL card",
      "Family register copy (villages) or ration card (towns)",
      "Husband's death certificate",
      "Gram Panchayat or councillor proposal",
      "Photo attested by the Pradhan, VPDO, ward member or councillor",
      "CBS bank passbook and Aadhaar card",
    ],
    hi: [
      "ऑनलाइन बना आय प्रमाण पत्र (₹4,000 महीने तक) या BPL कार्ड",
      "परिवार रजिस्टर की नकल (गाँव) या राशन कार्ड (शहर)",
      "पति का मृत्यु प्रमाण पत्र",
      "ग्राम पंचायत या पार्षद का प्रस्ताव",
      "प्रधान, VPDO, सभासद या पार्षद से प्रमाणित फ़ोटो",
      "CBS बैंक पासबुक और आधार कार्ड",
    ],
  },

  officialUrl: "https://ssp.uk.gov.in/OnlineRegistration/FrmWidowOnlineApplicationForm.aspx",
  sources: [
    "https://socialwelfare.uk.gov.in/service/widow-pension/",
    "https://cdnbbsr.s3waas.gov.in/s357bafb2c2dfeefba931bb03a835b1fa9/uploads/2025/02/202502041827311603.pdf",
  ],
  lastVerified: "2026-10-06",
  launchedYear: 2001,
  status: "active",
};

export default scheme;
