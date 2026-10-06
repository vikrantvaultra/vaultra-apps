import { all, any, incomeUpTo, isTrue, labelled, minAge, residentOf, when } from "@/lib/engine/build";
import type { Scheme } from "@/lib/types";

const scheme: Scheme = {
  slug: "uttarakhand-divyang-pension",
  tier: "compact",
  overlapGroup: "disability-pension",
  name: { en: "Uttarakhand Divyang Pension Scheme", hi: "उत्तराखंड दिव्यांग पेंशन योजना" },
  aka: ["Viklang Pension Uttarakhand", "Disability pension Uttarakhand"],
  shortDescription: {
    en: "People in Uttarakhand aged 18 or more with 40% or more disability, who are BPL or earn up to ₹4,000 a month, get ₹1,500 every month.",
    hi: "उत्तराखंड में 18 साल या उससे ज़्यादा उम्र के 40% या उससे ज़्यादा दिव्यांगता वाले लोगों को, जो BPL हैं या जिनकी आय ₹4,000 महीने तक है, हर महीने ₹1,500 मिलते हैं।",
  },
  level: "state",
  state: "uttarakhand",
  department: { en: "Social Welfare Department, Government of Uttarakhand", hi: "समाज कल्याण विभाग, उत्तराखंड सरकार" },
  categories: ["disability", "pension-insurance"],
  tags: ["disability pension", "divyang", "viklang", "pension", "uttarakhand"],
  benefitType: "pension",
  isDBT: true,
  value: { amount: 1500, period: "monthly", kind: "pension" },
  ageRange: { min: 18 },
  kundliHouse: "health",
  eligibility: all(
    residentOf("uttarakhand"),
    isTrue("disabled"),
    when("disabilityPct", "gte", 40),
    minAge(18),
    labelled(any(isTrue("bpl"), incomeUpTo(48_000)), {
      en: "BPL card holder, or your (or your guardian's) income is up to ₹4,000 a month",
      hi: "BPL कार्ड धारक हों, या आपकी (या अभिभावक की) आय ₹4,000 महीने तक हो",
    }),
  ),

  details: {
    en: [
      "The Divyang Pension Scheme gives a monthly pension to adults with a disability of 40% or more from poor families in Uttarakhand.",
      "The amount has been ₹1,500 a month since April 2022 and includes the central share under the national disability pension scheme. The Social Welfare Department pays it through the eSPAN portal.",
    ],
    hi: [
      "दिव्यांग पेंशन योजना उत्तराखंड के ग़रीब परिवारों के उन वयस्कों को हर महीने पेंशन देती है जिनकी दिव्यांगता 40% या उससे ज़्यादा है।",
      "अप्रैल 2022 से यह राशि ₹1,500 महीना है, जिसमें राष्ट्रीय दिव्यांग पेंशन योजना का केंद्र वाला हिस्सा शामिल है। समाज कल्याण विभाग इसे eSPAN पोर्टल से देता है।",
    ],
  },
  benefits: {
    en: ["₹1,500 every month, paid into your bank account.", "That is ₹18,000 a year."],
    hi: ["हर महीने ₹1,500, सीधे बैंक खाते में।", "साल भर में ₹18,000।"],
  },
  eligibilityText: {
    en: [
      "Lives in Uttarakhand and is 18 years or older.",
      "Has a disability of at least 40%, certified by the Chief Medical Officer.",
      "Holds a BPL card, or the applicant's or guardian's income is up to ₹4,000 a month from all sources.",
      "Proposed in the Gram Panchayat open meeting or by the councillor.",
    ],
    hi: [
      "उत्तराखंड में रहते हों और उम्र 18 साल या उससे ज़्यादा हो।",
      "मुख्य चिकित्सा अधिकारी से प्रमाणित कम से कम 40% दिव्यांगता हो।",
      "BPL कार्ड हो, या आवेदक या अभिभावक की सभी स्रोतों से आय ₹4,000 महीने तक हो।",
      "ग्राम पंचायत की खुली बैठक में या पार्षद द्वारा प्रस्ताव हुआ हो।",
    ],
  },
  applicationProcess: {
    online: {
      en: [
        "Apply on ssp.uk.gov.in, the Umang app or the Apni Sarkar portal.",
        "Upload the disability certificate, income certificate or BPL card, family register or ration card, proposal, attested photo, bank passbook and Aadhaar.",
        "Track the status on ssp.uk.gov.in.",
      ],
      hi: [
        "ssp.uk.gov.in, उमंग ऐप या अपनी सरकार पोर्टल पर आवेदन करें।",
        "दिव्यांगता प्रमाण पत्र, आय प्रमाण पत्र या BPL कार्ड, परिवार रजिस्टर या राशन कार्ड, प्रस्ताव, प्रमाणित फ़ोटो, बैंक पासबुक और आधार अपलोड करें।",
        "ssp.uk.gov.in पर स्थिति देखें।",
      ],
    },
  },

  officialUrl: "https://ssp.uk.gov.in/",
  sources: [
    "https://socialwelfare.uk.gov.in/service/%e0%a4%a6%e0%a4%bf%e0%a4%b5%e0%a5%8d%e0%a4%af%e0%a4%be%e0%a4%82%e0%a4%97-%e0%a4%aa%e0%a5%87%e0%a4%82%e0%a4%b6%e0%a4%a8/",
    "https://cdnbbsr.s3waas.gov.in/s357bafb2c2dfeefba931bb03a835b1fa9/uploads/2025/02/202502041827311603.pdf",
  ],
  lastVerified: "2026-10-06",
  launchedYear: 2001,
  status: "active",
};

export default scheme;
