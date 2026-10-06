import { all, residentOf } from "@/lib/engine/build";
import type { Scheme } from "@/lib/types";

const scheme: Scheme = {
  slug: "cm-elevate-meghalaya",
  tier: "compact",
  name: { en: "CM-ELEVATE (Meghalaya)", hi: "सीएम-एलिवेट (मेघालय)" },
  aka: ["CM ELEVATE", "Chief Minister ELEVATE", "Meghalaya business subsidy"],
  shortDescription: {
    en: "Meghalaya pays 35% to 75% of the project cost, linked to a bank loan, to help local people start or grow a business in farming, livestock, tourism, transport and more.",
    hi: "मेघालय सरकार खेती, पशुपालन, पर्यटन, परिवहन जैसे कामों में अपना कारोबार शुरू करने या बढ़ाने के लिए बैंक लोन से जुड़ी परियोजना लागत का 35% से 75% तक देती है।",
  },
  level: "state",
  state: "meghalaya",
  department: {
    en: "Government of Meghalaya (implemented through PRIME Meghalaya)",
    hi: "मेघालय सरकार (PRIME मेघालय के ज़रिए लागू)",
  },
  categories: ["business", "skills-employment", "agriculture"],
  tags: ["business subsidy", "entrepreneur", "self employment", "loan", "startup", "piggery", "tourism", "meghalaya"],
  benefitType: "composite",
  isDBT: false,
  kundliHouse: "business",
  eligibility: all(residentOf("meghalaya")),

  details: {
    en: [
      "CM-ELEVATE is the Meghalaya Chief Minister's flagship programme for entrepreneurs. It follows on from the state's PRIME start-up programme and aims to support 20,000 entrepreneurs over five years.",
      "Selected applicants get a subsidy of 35% to 75% of the project cost, linked to a bank loan, plus training and handholding. It covers sectors such as piggery, poultry, goat farming, dairy, polyhouses, warehouses, tourism vehicles, homestays, sericulture and weaving, sports and wellness, cinema halls, and an 'any business venture' window.",
      "The 2026-27 state budget continues CM-ELEVATE for agriculture, livestock, sericulture and mobility businesses. It adds six new schemes (green taxi, adventure tourism, polyhouses, agriculture collection centres, cold storage and fish ponds) with subsidies of 50% to 75%, and a ₹50,000 subsidy for over 2,000 small businesses such as shops and SHGs.",
    ],
    hi: [
      "सीएम-एलिवेट मेघालय के मुख्यमंत्री का उद्यमियों के लिए प्रमुख कार्यक्रम है। यह राज्य के PRIME स्टार्ट-अप कार्यक्रम का अगला कदम है और पाँच साल में 20,000 उद्यमियों की मदद का लक्ष्य रखता है।",
      "चुने गए आवेदकों को बैंक लोन से जुड़ी परियोजना लागत का 35% से 75% तक अनुदान, साथ में प्रशिक्षण और मार्गदर्शन मिलता है। इसमें सूअर पालन, मुर्गी पालन, बकरी पालन, डेयरी, पॉलीहाउस, गोदाम, पर्यटन वाहन, होमस्टे, रेशम पालन और बुनाई, खेल और वेलनेस, सिनेमा हॉल जैसे क्षेत्र और 'कोई भी कारोबार' वाली श्रेणी शामिल है।",
      "2026-27 के राज्य बजट में सीएम-एलिवेट खेती, पशुपालन, रेशम और परिवहन कारोबारों के लिए जारी है। इसमें छह नई योजनाएँ (ग्रीन टैक्सी, एडवेंचर टूरिज़्म, पॉलीहाउस, कृषि संग्रह केंद्र, कोल्ड स्टोरेज और मछली तालाब) 50% से 75% अनुदान के साथ जोड़ी गई हैं, और दुकानों व SHG जैसे 2,000 से ज़्यादा छोटे कारोबारों को ₹50,000 का अनुदान मिलेगा।",
    ],
  },
  benefits: {
    en: [
      "Subsidy of 35% to 75% of the project cost, depending on the scheme.",
      "Help to get a bank loan for the rest of the project cost.",
      "Training, capacity building and handholding for your business.",
      "In 2026-27: a ₹50,000 subsidy for over 2,000 existing small businesses, shops and SHGs.",
    ],
    hi: [
      "योजना के हिसाब से परियोजना लागत का 35% से 75% तक अनुदान।",
      "बाकी लागत के लिए बैंक लोन दिलाने में मदद।",
      "आपके कारोबार के लिए प्रशिक्षण, क्षमता निर्माण और मार्गदर्शन।",
      "2026-27 में: 2,000 से ज़्यादा मौजूदा छोटे कारोबारों, दुकानों और SHG को ₹50,000 का अनुदान।",
    ],
  },
  eligibilityText: {
    en: [
      "Resident of Meghalaya: individuals and registered or unregistered groups and entities can apply.",
      "A business plan in one of the covered sectors, or under the 'any business venture' window.",
      "Each sector scheme has its own rules on project size, your own contribution and the bank loan; check them on the portal.",
    ],
    hi: [
      "मेघालय के निवासी: व्यक्ति और पंजीकृत या अपंजीकृत समूह व संस्थाएँ आवेदन कर सकते हैं।",
      "शामिल किसी क्षेत्र में, या 'कोई भी कारोबार' श्रेणी में, कारोबार की योजना हो।",
      "हर क्षेत्र की योजना के परियोजना आकार, अपने हिस्से की रक़म और बैंक लोन के अपने नियम हैं; पोर्टल पर देखें।",
    ],
  },
  exclusions: {
    en: [
      "A subsidy is not guaranteed: applications are selected, and most schemes need a bank to sanction your loan.",
      "Businesses outside Meghalaya are not covered.",
    ],
    hi: [
      "अनुदान पक्का नहीं है: आवेदनों का चयन होता है, और ज़्यादातर योजनाओं में बैंक से लोन मंज़ूर होना ज़रूरी है।",
      "मेघालय के बाहर के कारोबार शामिल नहीं हैं।",
    ],
  },
  applicationProcess: {
    online: {
      en: [
        "Go to the MeghalayaOne portal (meghalayaone.gov.in) and register.",
        "Choose the CM-ELEVATE scheme for your sector and fill in the application with your project details.",
        "Upload the documents asked for and submit. Selected applicants are linked to a bank for the loan and released the subsidy as per the scheme rules.",
      ],
      hi: [
        "MeghalayaOne पोर्टल (meghalayaone.gov.in) पर जाएँ और रजिस्टर करें।",
        "अपने क्षेत्र की सीएम-एलिवेट योजना चुनें और परियोजना की जानकारी के साथ आवेदन भरें।",
        "माँगे गए दस्तावेज़ अपलोड करके जमा करें। चुने गए आवेदकों को लोन के लिए बैंक से जोड़ा जाता है और नियमों के अनुसार अनुदान दिया जाता है।",
      ],
    },
  },
  faqs: [
    {
      q: { en: "Is CM-ELEVATE a loan or a grant?", hi: "क्या सीएम-एलिवेट लोन है या अनुदान?" },
      a: {
        en: "It is a subsidy (grant) that covers part of your project cost. For most schemes, the rest comes from your own money and a bank loan that the programme helps you get.",
        hi: "यह अनुदान है जो आपकी परियोजना लागत का एक हिस्सा देता है। ज़्यादातर योजनाओं में बाकी रक़म आपकी अपनी और बैंक लोन से आती है, जिसे दिलाने में कार्यक्रम मदद करता है।",
      },
    },
    {
      q: { en: "What new schemes were added in 2026-27?", hi: "2026-27 में कौन-सी नई योजनाएँ जुड़ीं?" },
      a: {
        en: "The budget added green taxi, adventure tourism, polyhouses, agriculture collection centres, cold storage and fish ponds, with subsidies of 50% to 75%. Fish farmers are also covered from 2026-27.",
        hi: "बजट में ग्रीन टैक्सी, एडवेंचर टूरिज़्म, पॉलीहाउस, कृषि संग्रह केंद्र, कोल्ड स्टोरेज और मछली तालाब जोड़े गए, जिनमें 50% से 75% अनुदान है। 2026-27 से मछली पालकों को भी इसमें शामिल किया गया है।",
      },
    },
  ],

  officialUrl: "https://primemeghalaya.com/cm-elevate",
  sources: [
    "https://primemeghalaya.com/cm-elevate",
    "https://megfinance.gov.in/budget_documents/2026-2027/others/budget_speech.pdf",
  ],
  lastVerified: "2026-10-06",
  launchedYear: 2023,
  status: "active",
};

export default scheme;
