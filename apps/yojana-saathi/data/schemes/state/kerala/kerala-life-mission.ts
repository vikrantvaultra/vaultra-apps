import { all, isFalse, labelled, residentOf } from "@/lib/engine/build";
import type { Scheme } from "@/lib/types";

const scheme: Scheme = {
  slug: "kerala-life-mission",
  tier: "compact",
  name: { en: "LIFE Mission Housing (Kerala)", hi: "लाइफ़ मिशन आवास (केरल)" },
  aka: ["LIFE Mission", "Livelihood Inclusion and Financial Empowerment", "Kerala housing scheme", "LIFE housing"],
  shortDescription: {
    en: "Kerala's housing mission gives homeless families, families with unfinished or unlivable houses, and landless families help to get a safe house of their own.",
    hi: "केरल का आवास मिशन बेघर परिवारों, अधूरे या रहने लायक न रहे मकान वाले परिवारों, और भूमिहीन परिवारों को अपना सुरक्षित घर पाने में मदद करता है।",
  },
  level: "state",
  state: "kerala",
  department: {
    en: "LIFE Mission, Local Self Government Department, Government of Kerala",
    hi: "लाइफ़ मिशन, स्थानीय स्वशासन विभाग, केरल सरकार",
  },
  categories: ["housing", "social-welfare"],
  tags: ["housing", "house construction", "homeless", "landless", "life mission", "kerala"],
  benefitType: "composite",
  isDBT: true,
  kundliHouse: "home",
  eligibility: all(
    residentOf("kerala"),
    labelled(isFalse("pucca"), { en: "Your family does not own a pucca (permanent) house", hi: "आपके परिवार के पास पक्का मकान नहीं है" }),
  ),

  details: {
    en: [
      "LIFE Mission is Kerala's comprehensive housing programme, run under the Local Self Government Department. Central schemes like PMAY (Urban and Gramin) are combined with state money under it, and by early 2026 it had completed close to 5 lakh houses.",
      "Families with land get money in stages to build a house. Landless and homeless families are given houses in housing complexes or helped to buy land. Beneficiaries were found through surveys by Kudumbashree workers, checked by local officials, and the lists are kept by local bodies.",
      "The new government's 2026-27 revised budget announces a new housing scheme for SC/ST families and a special housing scheme for fishers. Whether LIFE continues in its present form, and when new names will be added, is not yet clear.",
    ],
    hi: [
      "लाइफ़ मिशन केरल का व्यापक आवास कार्यक्रम है, जो स्थानीय स्वशासन विभाग के तहत चलता है। इसमें PMAY (शहरी और ग्रामीण) जैसी केंद्रीय योजनाओं को राज्य के पैसे के साथ जोड़ा गया है, और 2026 की शुरुआत तक लगभग 5 लाख घर पूरे हो चुके थे।",
      "जिन परिवारों के पास ज़मीन है, उन्हें घर बनाने के लिए किस्तों में पैसा मिलता है। भूमिहीन और बेघर परिवारों को आवास परिसरों में घर दिए जाते हैं या ज़मीन ख़रीदने में मदद मिलती है। लाभार्थियों को कुटुंबश्री कार्यकर्ताओं के सर्वे से चुना गया, स्थानीय अधिकारियों ने जाँच की, और सूचियाँ स्थानीय निकायों के पास हैं।",
      "नई सरकार के 2026-27 के संशोधित बजट में SC/ST परिवारों के लिए नई आवास योजना और मछुआरों के लिए विशेष आवास योजना की घोषणा है। लाइफ़ अपने मौजूदा रूप में जारी रहेगा या नहीं, और नए नाम कब जोड़े जाएँगे, यह अभी साफ़ नहीं है।",
    ],
  },
  benefits: {
    en: [
      "Money in instalments to build a house on your own land, or to finish an incomplete house.",
      "A flat in a LIFE housing complex, or help to buy land, for landless and homeless families.",
      "Priority for people with mental or physical disabilities, the destitute, transgender persons, people with serious illness, unmarried mothers and widows.",
    ],
    hi: [
      "अपनी ज़मीन पर घर बनाने या अधूरा घर पूरा करने के लिए किस्तों में पैसा।",
      "भूमिहीन और बेघर परिवारों के लिए लाइफ़ आवास परिसर में फ़्लैट, या ज़मीन ख़रीदने में मदद।",
      "मानसिक या शारीरिक दिव्यांग, बेसहारा, ट्रांसजेंडर, गंभीर बीमारी वाले लोग, अविवाहित माताएँ और विधवाओं को प्राथमिकता।",
    ],
  },
  eligibilityText: {
    en: [
      "Homeless families who own land.",
      "Families who could not finish building their house, or whose house is not fit to live in.",
      "Families living in temporary shelters on poramboke (government) land, the coast or plantations.",
      "Landless and homeless families.",
      "Your name must be on the LIFE beneficiary list prepared by your local body.",
    ],
    hi: [
      "ज़मीन वाले बेघर परिवार।",
      "जो परिवार अपना घर पूरा नहीं बना सके, या जिनका घर रहने लायक नहीं है।",
      "पुरम्बोक्कु (सरकारी) ज़मीन, समुद्र तट या बागान में अस्थायी घरों में रहने वाले परिवार।",
      "भूमिहीन और बेघर परिवार।",
      "आपका नाम स्थानीय निकाय की बनाई लाइफ़ लाभार्थी सूची में होना चाहिए।",
    ],
  },
  applicationProcess: {
    offline: {
      en: [
        "Ask at your gram panchayat, municipality or corporation whether your family is on the LIFE beneficiary list.",
        "If you were left out, the local body secretary can hear complaints and add eligible homeless families when lists are revised.",
        "Watch for new rounds or a replacement scheme announced by the government.",
      ],
      hi: [
        "अपनी ग्राम पंचायत, नगरपालिका या नगर निगम में पूछें कि आपका परिवार लाइफ़ लाभार्थी सूची में है या नहीं।",
        "अगर नाम छूट गया है, तो सूची में बदलाव के समय स्थानीय निकाय के सचिव शिकायत सुनकर पात्र बेघर परिवारों को जोड़ सकते हैं।",
        "सरकार के नए दौर या नई योजना की घोषणा पर नज़र रखें।",
      ],
    },
  },

  officialUrl: "https://lifemission.kerala.gov.in/",
  sources: [
    "https://lifemission.kerala.gov.in/faq",
    "https://budget.kerala.gov.in/build/budget_speech/2026/2026Eng.pdf",
    "https://budget.kerala.gov.in/build/budget_speech/2026rev/2026Eng.pdf",
  ],
  lastVerified: "2026-10-06",
  launchedYear: 2016,
  status: "check-status",
};

export default scheme;
