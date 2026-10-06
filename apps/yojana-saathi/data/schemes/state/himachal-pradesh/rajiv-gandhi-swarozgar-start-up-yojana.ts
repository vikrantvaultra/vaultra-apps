import { all, residentOf } from "@/lib/engine/build";
import type { Scheme } from "@/lib/types";

const scheme: Scheme = {
  slug: "rajiv-gandhi-swarozgar-start-up-yojana",
  tier: "compact",
  name: { en: "Rajiv Gandhi Swarozgar Start-Up Yojana (e-Taxi)", hi: "राजीव गांधी स्वरोजगार स्टार्ट-अप योजना (ई-टैक्सी)" },
  aka: ["e-Taxi subsidy Himachal", "Rajiv Gandhi Start-up Yojana", "e-rickshaw subsidy Himachal"],
  shortDescription: {
    en: "Young people in Himachal get a 50% subsidy to buy an e-taxi under the Rajiv Gandhi Swarozgar Start-Up Yojana; the 2026-27 budget also offers 50% for e-rickshaws.",
    hi: "हिमाचल के युवाओं को राजीव गांधी स्वरोजगार स्टार्ट-अप योजना में ई-टैक्सी ख़रीदने पर 50% सब्सिडी मिलती है; 2026-27 के बजट में ई-रिक्शा पर भी 50% की घोषणा हुई है।",
  },
  level: "state",
  state: "himachal-pradesh",
  department: { en: "Transport Department, Government of Himachal Pradesh", hi: "परिवहन विभाग, हिमाचल प्रदेश सरकार" },
  categories: ["skills-employment", "business"],
  tags: ["e-taxi", "subsidy", "self employment", "youth", "e-rickshaw", "himachal"],
  benefitType: "cash",
  isDBT: true,
  kundliHouse: "career",
  eligibility: all(residentOf("himachal-pradesh")),

  details: {
    en: [
      "The Rajiv Gandhi Swarozgar Start-Up Yojana, 2023 helps young people of Himachal become self-employed. Under its e-taxi part, the state pays 50% of the cost of an electric taxi.",
      "The 2026-27 budget provides ₹50 crore to give the 50% subsidy to 500 more youths, raises the monthly payment to e-taxi beneficiaries by ₹5,000, and announces a 50% capital subsidy by DBT for e-rickshaws for 500 youths. Other parts of the scheme include a 40% subsidy for buying buses on private routes. Check the eligibility rules and the application window with the Transport Department.",
    ],
    hi: [
      "राजीव गांधी स्वरोजगार स्टार्ट-अप योजना, 2023 हिमाचल के युवाओं को स्वरोजगार दिलाने के लिए है। इसके ई-टैक्सी हिस्से में सरकार इलेक्ट्रिक टैक्सी की 50% क़ीमत देती है।",
      "2026-27 के बजट में 500 और युवाओं को 50% सब्सिडी देने के लिए ₹50 करोड़ रखे गए, ई-टैक्सी लाभार्थियों को मिलने वाला मासिक भुगतान ₹5,000 बढ़ाया गया, और 500 युवाओं को ई-रिक्शा पर DBT से 50% पूँजी सब्सिडी की घोषणा हुई। योजना के दूसरे हिस्सों में निजी रूटों पर बस ख़रीदने पर 40% सब्सिडी भी है। पात्रता के नियम और आवेदन का समय परिवहन विभाग से पता करें।",
    ],
  },
  benefits: {
    en: [
      "50% subsidy on the purchase of an e-taxi.",
      "A monthly payment to e-taxi beneficiaries (raised by ₹5,000 in 2026-27).",
      "50% capital subsidy on e-rickshaws for 500 youths, announced for 2026-27.",
    ],
    hi: [
      "ई-टैक्सी ख़रीदने पर 50% सब्सिडी।",
      "ई-टैक्सी लाभार्थियों को मासिक भुगतान (2026-27 में ₹5,000 बढ़ाया गया)।",
      "2026-27 के लिए 500 युवाओं को ई-रिक्शा पर 50% पूँजी सब्सिडी की घोषणा।",
    ],
  },
  eligibilityText: {
    en: [
      "Young bonafide residents of Himachal Pradesh who want to start their own transport business.",
      "Age limits, licence and other conditions are set in the scheme notification; confirm them with the Transport Department.",
    ],
    hi: [
      "हिमाचल प्रदेश के युवा बोनाफ़ाइड निवासी जो अपना परिवहन का काम शुरू करना चाहते हैं।",
      "उम्र सीमा, लाइसेंस और बाकी शर्तें योजना की अधिसूचना में तय हैं; इनकी पुष्टि परिवहन विभाग से करें।",
    ],
  },
  applicationProcess: {
    offline: {
      en: [
        "Watch for the Transport Department's notice inviting applications.",
        "Apply through the Regional Transport Office or the portal named in the notice, with your bonafide certificate, driving licence and bank details.",
      ],
      hi: [
        "परिवहन विभाग की आवेदन आमंत्रण वाली सूचना पर नज़र रखें।",
        "बोनाफ़ाइड प्रमाण पत्र, ड्राइविंग लाइसेंस और बैंक विवरण के साथ क्षेत्रीय परिवहन कार्यालय या सूचना में बताए पोर्टल से आवेदन करें।",
      ],
    },
  },

  officialUrl: "https://ebudget.hp.nic.in/Aspx/Anonymous/pdf/FS_Eng_2026.pdf",
  sources: ["https://ebudget.hp.nic.in/Aspx/Anonymous/pdf/FS_Eng_2026.pdf"],
  lastVerified: "2026-10-06",
  launchedYear: 2023,
  status: "check-status",
};

export default scheme;
