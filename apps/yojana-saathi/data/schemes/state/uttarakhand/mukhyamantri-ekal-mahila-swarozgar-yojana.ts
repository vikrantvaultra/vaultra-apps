import { all, female, labelled, residentOf, when } from "@/lib/engine/build";
import type { Scheme } from "@/lib/types";

const scheme: Scheme = {
  slug: "mukhyamantri-ekal-mahila-swarozgar-yojana",
  tier: "compact",
  name: { en: "Mukhyamantri Ekal Mahila Swarozgar Yojana", hi: "मुख्यमंत्री एकल महिला स्वरोजगार योजना" },
  aka: ["Ekal Mahila Swarozgar Yojana", "Single women self-employment Uttarakhand"],
  shortDescription: {
    en: "Financial help for single, widowed, abandoned or destitute women of Uttarakhand to start their own business or self-employment near their home.",
    hi: "उत्तराखंड की एकल, विधवा, परित्यक्ता या निराश्रित महिलाओं को अपने घर-गाँव के पास ही अपना काम या स्वरोजगार शुरू करने के लिए आर्थिक मदद।",
  },
  level: "state",
  state: "uttarakhand",
  department: {
    en: "Women Empowerment and Child Development Department, Government of Uttarakhand",
    hi: "महिला सशक्तिकरण एवं बाल विकास विभाग, उत्तराखंड सरकार",
  },
  categories: ["business", "women-child"],
  tags: ["single women", "widow", "self employment", "ekal mahila", "business", "uttarakhand"],
  benefitType: "cash",
  isDBT: false,
  kundliHouse: "business",
  eligibility: all(
    residentOf("uttarakhand"),
    female(),
    labelled(when("marital", "in", ["widowed", "divorced", "separated", "never-married"]), {
      en: "You are a single, widowed, abandoned or destitute woman",
      hi: "आप एकल, विधवा, परित्यक्ता या निराश्रित महिला हों",
    }),
  ),

  details: {
    en: [
      "Mukhyamantri Ekal Mahila Swarozgar Yojana helps single women in Uttarakhand earn a living in their own village or area. Eligible women can propose any kind of self-employment or small business based on their need, and the department gives financial assistance to set it up.",
      "The 2026-27 round was announced on 3 July 2026, with applications accepted until 14 August 2026 by registered post at the District Programme Officer's office. The detailed rules and the application form are on wecd.uk.gov.in; check there or at the CDPO/DPO office for the assistance amount and the next round.",
    ],
    hi: [
      "मुख्यमंत्री एकल महिला स्वरोजगार योजना उत्तराखंड की एकल महिलाओं को अपने ही गाँव या क्षेत्र में कमाई का ज़रिया बनाने में मदद करती है। पात्र महिलाएँ अपनी ज़रूरत के हिसाब से किसी भी तरह का स्वरोजगार या छोटा काम प्रस्तावित कर सकती हैं, और विभाग उसे शुरू करने के लिए आर्थिक सहायता देता है।",
      "2026-27 के लिए आवेदन 3 जुलाई 2026 को मांगे गए थे और 14 अगस्त 2026 तक रजिस्टर्ड डाक से ज़िला कार्यक्रम अधिकारी कार्यालय में लिए गए। विस्तृत नियम और आवेदन फ़ॉर्म wecd.uk.gov.in पर हैं; सहायता की राशि और अगले दौर की जानकारी वहीं या CDPO/DPO कार्यालय से लें।",
    ],
  },
  benefits: {
    en: [
      "Financial assistance to start self-employment or a business in any sector of your choice.",
      "Work close to home, in your own village or area.",
    ],
    hi: [
      "अपनी पसंद के किसी भी क्षेत्र में स्वरोजगार या काम शुरू करने के लिए आर्थिक सहायता।",
      "अपने ही गाँव या इलाक़े में, घर के पास काम।",
    ],
  },
  eligibilityText: {
    en: [
      "A native or permanent resident of Uttarakhand.",
      "A single woman: destitute (niraashrit), abandoned (parityakta) or widowed.",
      "Other conditions are given in the scheme guidelines on wecd.uk.gov.in.",
    ],
    hi: [
      "उत्तराखंड की मूल या स्थायी निवासी।",
      "एकल महिला: निराश्रित, परित्यक्ता या विधवा।",
      "बाकी शर्तें wecd.uk.gov.in पर दिए योजना दिशा-निर्देशों में हैं।",
    ],
  },
  applicationProcess: {
    offline: {
      en: [
        "Download the guidelines and application form from wecd.uk.gov.in when applications are open.",
        "Fill in the form with your business proposal and attach the documents asked for.",
        "Send it by registered post to the District Programme Officer, Women Empowerment and Child Development, before the last date.",
      ],
      hi: [
        "आवेदन खुलने पर wecd.uk.gov.in से दिशा-निर्देश और आवेदन फ़ॉर्म डाउनलोड करें।",
        "अपने काम के प्रस्ताव के साथ फ़ॉर्म भरें और मांगे गए दस्तावेज़ लगाएँ।",
        "आख़िरी तारीख़ से पहले रजिस्टर्ड डाक से ज़िला कार्यक्रम अधिकारी, महिला सशक्तिकरण एवं बाल विकास को भेजें।",
      ],
    },
  },

  officialUrl: "https://wecd.uk.gov.in/",
  sources: ["https://cdnbbsr.s3waas.gov.in/s38a20a8621978632d76c43dfd28b67767/uploads/2026/07/202607041520179524.pdf"],
  lastVerified: "2026-10-06",
  launchedYear: 2024,
  status: "check-status",
};

export default scheme;
