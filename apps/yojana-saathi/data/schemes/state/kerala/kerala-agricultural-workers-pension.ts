import { all, incomeUpTo, minAge, residentOf, when } from "@/lib/engine/build";
import type { Scheme } from "@/lib/types";

const scheme: Scheme = {
  slug: "kerala-agricultural-workers-pension",
  tier: "compact",
  overlapGroup: "old-age-pension",
  name: { en: "Kerala Agricultural Workers' Pension", hi: "केरल खेतिहर मज़दूर पेंशन" },
  aka: ["Karshaka thozhilali pension", "Kerala farm labourer pension"],
  shortDescription: {
    en: "Farm labourers in Kerala aged 60+ who worked on others' land for 10 years or more, from families earning up to ₹1 lakh a year, get ₹2,000 a month.",
    hi: "केरल के 60 साल से ऊपर के खेतिहर मज़दूरों को, जिन्होंने 10 साल या उससे ज़्यादा दूसरों के खेत में काम किया हो और परिवार की सालाना आय ₹1 लाख तक हो, हर महीने ₹2,000 मिलते हैं।",
  },
  level: "state",
  state: "kerala",
  department: {
    en: "Local Self Government Department, Government of Kerala (through panchayats, municipalities and corporations)",
    hi: "स्थानीय स्वशासन विभाग, केरल सरकार (पंचायत, नगरपालिका और नगर निगम के ज़रिए)",
  },
  categories: ["pension-insurance", "agriculture", "social-welfare"],
  tags: ["farm labourer", "agricultural worker", "pension", "welfare pension", "kerala"],
  benefitType: "pension",
  isDBT: true,
  value: { amount: 2000, period: "monthly", kind: "pension" },
  ageRange: { min: 60 },
  kundliHouse: "senior",
  eligibility: all(residentOf("kerala"), minAge(60), when("occupation", "in", ["agri-labourer"]), incomeUpTo(100_000)),

  details: {
    en: [
      "This is one of Kerala's social security pensions, meant for elderly farm labourers. It was earlier run by the Labour Department and is now handled by local bodies.",
      "The pension is ₹2,000 a month, the same rate as the other welfare pensions since November 2025. Only one welfare pension can be drawn at a time.",
    ],
    hi: [
      "यह केरल की सामाजिक सुरक्षा पेंशनों में से एक है, जो बुज़ुर्ग खेतिहर मज़दूरों के लिए है। पहले इसे श्रम विभाग चलाता था, अब स्थानीय निकाय चलाते हैं।",
      "पेंशन ₹2,000 महीना है, जो नवंबर 2025 से बाक़ी कल्याण पेंशनों के बराबर है। एक समय में एक ही कल्याण पेंशन मिल सकती है।",
    ],
  },
  benefits: {
    en: ["₹2,000 every month.", "Paid into your bank account, or delivered at home."],
    hi: ["हर महीने ₹2,000।", "पैसा बैंक खाते में आता है, या घर पर दिया जाता है।"],
  },
  eligibilityText: {
    en: [
      "Aged 60 years or above.",
      "Worked as a farm labourer under a landowner for 10 years or more, and is a member of the Agricultural Workers' Welfare Fund.",
      "A permanent resident of Kerala for 10 years.",
      "Total family income is up to ₹1 lakh a year, and the family owns no more than 2 acres (not applied to Scheduled Tribe applicants).",
      "Not a plantation worker, not an income-tax payer, and not getting a service or family pension (an ex-gratia or NPS pension up to ₹4,000 is allowed).",
    ],
    hi: [
      "उम्र 60 साल या उससे ज़्यादा।",
      "किसी भूस्वामी के यहाँ 10 साल या उससे ज़्यादा खेतिहर मज़दूर के रूप में काम किया हो, और खेतिहर मज़दूर कल्याण निधि का सदस्य हो।",
      "10 साल से केरल का स्थायी निवासी हो।",
      "परिवार की कुल सालाना आय ₹1 लाख तक हो, और परिवार के पास 2 एकड़ से ज़्यादा ज़मीन न हो (अनुसूचित जनजाति के आवेदकों पर लागू नहीं)।",
      "बागान मज़दूर न हो, आयकर न देता हो, और सर्विस या फ़ैमिली पेंशन न मिलती हो (₹4,000 तक की एक्स-ग्रेशिया या NPS पेंशन चल सकती है)।",
    ],
  },
  applicationProcess: {
    offline: {
      en: [
        "Get the agricultural workers' pension form from your gram panchayat, municipality or corporation.",
        "Attach proof of age, proof of farm work and welfare fund membership, income certificate, Aadhaar and bank details.",
        "Submit it to the secretary of your local body. A decision should be made within 45 days.",
      ],
      hi: [
        "अपनी ग्राम पंचायत, नगरपालिका या नगर निगम से खेतिहर मज़दूर पेंशन का फ़ॉर्म लें।",
        "उम्र का सबूत, खेतिहर काम और कल्याण निधि सदस्यता का सबूत, आय प्रमाण पत्र, आधार और बैंक विवरण लगाएँ।",
        "अपने स्थानीय निकाय के सचिव को जमा करें। 45 दिन के अंदर फ़ैसला होना चाहिए।",
      ],
    },
  },

  officialUrl: "https://welfarepension.lsgkerala.gov.in/",
  sources: ["https://welfarepension.lsgkerala.gov.in/FAQs.aspx", "https://welfarepension.lsgkerala.gov.in/Schemes.aspx"],
  lastVerified: "2026-10-06",
  launchedYear: 2025,
  status: "active",
};

export default scheme;
