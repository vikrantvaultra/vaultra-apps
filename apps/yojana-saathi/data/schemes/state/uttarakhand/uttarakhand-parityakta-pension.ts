import { all, ageBetween, any, incomeUpTo, isTrue, labelled, residentOf } from "@/lib/engine/build";
import type { Scheme } from "@/lib/types";

const scheme: Scheme = {
  slug: "uttarakhand-parityakta-pension",
  tier: "compact",
  name: { en: "Uttarakhand Parityakta (Destitute) Pension Scheme", hi: "उत्तराखंड परित्यक्ता पेंशन योजना" },
  aka: ["Parityakta Pension", "Abandoned women pension Uttarakhand"],
  shortDescription: {
    en: "Monthly pension in Uttarakhand for abandoned or destitute women aged 18 to 60, destitute unmarried women aged 40 to 60, and spouses with a serious mental illness, if BPL or earning up to ₹4,000 a month.",
    hi: "उत्तराखंड में 18 से 60 साल की परित्यक्ता या निराश्रित महिलाओं, 40 से 60 साल की निराश्रित अविवाहित महिलाओं और गंभीर मानसिक रोग वाले पति/पत्नी के लिए मासिक पेंशन, अगर BPL हों या आय ₹4,000 महीने तक हो।",
  },
  level: "state",
  state: "uttarakhand",
  department: { en: "Social Welfare Department, Government of Uttarakhand", hi: "समाज कल्याण विभाग, उत्तराखंड सरकार" },
  categories: ["social-welfare", "women-child", "pension-insurance"],
  tags: ["parityakta", "abandoned women", "destitute", "pension", "single women", "uttarakhand"],
  benefitType: "pension",
  isDBT: true,
  ageRange: { min: 18, max: 60 },
  kundliHouse: "women-family",
  eligibility: all(
    residentOf("uttarakhand"),
    ...ageBetween(18, 60),
    labelled(any(isTrue("bpl"), incomeUpTo(48_000)), {
      en: "BPL card holder, or income up to ₹4,000 a month",
      hi: "BPL कार्ड धारक हों, या आय ₹4,000 महीने तक हो",
    }),
  ),

  details: {
    en: [
      "The Parityakta Pension Scheme supports women abandoned by their husbands or whose husbands have been missing for over a year, destitute unmarried women, and husbands or wives who cannot earn because of a serious mental illness.",
      "The Social Welfare Department runs it through the eSPAN portal. The department's scheme page does not state the monthly amount, so check it on ssp.uk.gov.in ('know pension amount') or at the social welfare office.",
    ],
    hi: [
      "परित्यक्ता पेंशन योजना उन महिलाओं के लिए है जिन्हें पति ने छोड़ दिया है या जिनके पति एक साल से ज़्यादा समय से लापता हैं, निराश्रित अविवाहित महिलाओं के लिए, और उन पति या पत्नी के लिए जो गंभीर मानसिक रोग के कारण कमा नहीं सकते।",
      "समाज कल्याण विभाग इसे eSPAN पोर्टल से चलाता है। विभाग के योजना पेज पर मासिक राशि नहीं लिखी है, इसलिए ssp.uk.gov.in ('पेंशन राशि जानें') पर या समाज कल्याण कार्यालय से पता करें।",
    ],
  },
  benefits: {
    en: ["A monthly pension paid into your bank account (check the current amount with the department)."],
    hi: ["हर महीने पेंशन, सीधे बैंक खाते में (मौजूदा राशि विभाग से पता करें)।"],
  },
  eligibilityText: {
    en: [
      "An abandoned or destitute woman, or a spouse with a mental illness who cannot earn, aged between 18 and 60; or a woman whose husband has been missing or has left her for more than one year.",
      "Destitute unmarried women aged 40 to 60 can also apply.",
      "Holds a BPL card, or has an income of up to ₹4,000 a month.",
    ],
    hi: [
      "18 से 60 साल के बीच की परित्यक्ता या निराश्रित महिला, या मानसिक रोग के कारण कमाने में असमर्थ पति/पत्नी; या वह महिला जिसके पति एक साल से ज़्यादा समय से लापता हैं या उसे छोड़ चुके हैं।",
      "40 से 60 साल की निराश्रित अविवाहित महिलाएँ भी आवेदन कर सकती हैं।",
      "BPL कार्ड हो, या आय ₹4,000 महीने तक हो।",
    ],
  },
  applicationProcess: {
    online: {
      en: [
        "Apply on ssp.uk.gov.in using the Parityakta pension online form.",
        "Upload the self-declaration certified by the village head or ward member (or the government medical officer's certificate for mental illness), income certificate or BPL card, age proof, attested photo, bank passbook and Aadhaar.",
      ],
      hi: [
        "ssp.uk.gov.in पर परित्यक्ता पेंशन का ऑनलाइन फ़ॉर्म भरें।",
        "ग्राम प्रधान या वार्ड सदस्य से प्रमाणित स्व-घोषणा पत्र (मानसिक रोग के मामले में सरकारी चिकित्सा अधिकारी का प्रमाण पत्र), आय प्रमाण पत्र या BPL कार्ड, उम्र का प्रमाण, प्रमाणित फ़ोटो, बैंक पासबुक और आधार अपलोड करें।",
      ],
    },
  },

  officialUrl: "https://ssp.uk.gov.in/OnlineRegistration/FrmOnlineRegisApplicationDistitute.aspx",
  sources: ["https://socialwelfare.uk.gov.in/service/destitute-pension/"],
  lastVerified: "2026-10-06",
  launchedYear: 2001,
  status: "check-status",
};

export default scheme;
