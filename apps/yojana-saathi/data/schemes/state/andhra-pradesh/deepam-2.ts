import { all, isTrue, labelled, residentOf } from "@/lib/engine/build";
import type { Scheme } from "@/lib/types";

const scheme: Scheme = {
  slug: "deepam-2",
  name: { en: "Deepam-2 Free LPG Cylinder Scheme", hi: "दीपम-2 मुफ़्त LPG सिलेंडर योजना" },
  aka: ["Deepam 2.0", "Deepam scheme", "free gas cylinder AP", "AP free LPG"],
  shortDescription: {
    en: "Andhra Pradesh families with a rice card and an LPG connection get 3 free gas cylinders a year, one every four months. You pay at delivery and the money is refunded to your bank.",
    hi: "आंध्र प्रदेश में राइस कार्ड और LPG कनेक्शन वाले परिवारों को साल में 3 मुफ़्त गैस सिलेंडर मिलते हैं, हर चार महीने में एक। डिलीवरी पर पैसा देते हैं और वह बैंक खाते में वापस आ जाता है।",
  },
  level: "state",
  state: "andhra-pradesh",
  department: {
    en: "Consumer Affairs, Food & Civil Supplies Department, Government of Andhra Pradesh",
    hi: "उपभोक्ता मामले, खाद्य एवं नागरिक आपूर्ति विभाग, आंध्र प्रदेश सरकार",
  },
  categories: ["energy-savings", "social-welfare", "women-child"],
  tags: ["lpg", "free gas cylinder", "deepam", "cooking gas", "rice card", "andhra pradesh"],
  benefitType: "cash",
  isDBT: true,
  kundliHouse: "energy-savings",
  eligibility: all(
    residentOf("andhra-pradesh"),
    labelled(isTrue("bpl"), { en: "Your family has a rice card", hi: "आपके परिवार के पास राइस कार्ड है" }),
  ),

  details: {
    en: [
      "Deepam-2 is Andhra Pradesh's free cooking gas scheme. It was launched by the Chief Minister on 1 November 2024 and is one of the government's 'Super Six' promises.",
      "Every family with a rice card and a working LPG connection gets three refills a year free of cost, one in each four-month block. You book and pay for the cylinder as usual, and the government refunds the cost to your bank account, usually within 48 hours.",
      "The scheme is run by the Civil Supplies Department with the three oil companies (HPCL, IOCL and BPCL).",
    ],
    hi: [
      "दीपम-2 आंध्र प्रदेश की मुफ़्त रसोई गैस योजना है। मुख्यमंत्री ने इसे 1 नवंबर 2024 को शुरू किया और यह सरकार के 'सुपर सिक्स' वादों में से एक है।",
      "राइस कार्ड और चालू LPG कनेक्शन वाले हर परिवार को साल में तीन रिफ़िल मुफ़्त मिलते हैं, हर चार महीने के हिस्से में एक। आप सामान्य तरीके से सिलेंडर बुक करके पैसा देते हैं, और सरकार यह पैसा आम तौर पर 48 घंटे में आपके बैंक खाते में लौटा देती है।",
      "योजना नागरिक आपूर्ति विभाग तीनों तेल कंपनियों (HPCL, IOCL और BPCL) के साथ मिलकर चलाता है।",
    ],
  },
  benefits: {
    en: [
      "3 LPG refills a year free of cost.",
      "One free refill in each four-month period.",
      "The cylinder price you pay is refunded to your bank account, usually within 48 hours.",
    ],
    hi: [
      "साल में 3 LPG रिफ़िल मुफ़्त।",
      "हर चार महीने की अवधि में एक मुफ़्त रिफ़िल।",
      "सिलेंडर का जो दाम आप देते हैं, वह आम तौर पर 48 घंटे में बैंक खाते में लौट आता है।",
    ],
  },
  eligibilityText: {
    en: [
      "Your family lives in Andhra Pradesh and has a rice card.",
      "You have an LPG connection in your own name or a family member's name.",
      "The LPG connection is linked to your Aadhaar and mobile number, and your bank account is Aadhaar-linked.",
    ],
    hi: [
      "आपका परिवार आंध्र प्रदेश में रहता है और उसके पास राइस कार्ड है।",
      "आपके या परिवार के किसी सदस्य के नाम पर LPG कनेक्शन है।",
      "LPG कनेक्शन आधार और मोबाइल नंबर से जुड़ा है, और बैंक खाता आधार से जुड़ा है।",
    ],
  },
  exclusions: {
    en: [
      "Families without a rice card.",
      "No LPG connection, or the connection isn't linked to Aadhaar.",
      "More than one free refill in the same four-month period.",
    ],
    hi: [
      "जिन परिवारों के पास राइस कार्ड नहीं है।",
      "LPG कनेक्शन न हो, या कनेक्शन आधार से न जुड़ा हो।",
      "एक ही चार महीने की अवधि में एक से ज़्यादा मुफ़्त रिफ़िल।",
    ],
  },
  applicationProcess: {
    offline: {
      en: [
        "No separate application is needed if your rice card, Aadhaar and LPG connection are linked.",
        "Book a refill with your gas agency in the usual way and pay at delivery.",
        "The amount is refunded to your Aadhaar-linked bank account. If it doesn't come, contact your gas agency or the village/ward secretariat.",
      ],
      hi: [
        "अगर आपका राइस कार्ड, आधार और LPG कनेक्शन जुड़े हैं तो अलग आवेदन की ज़रूरत नहीं।",
        "अपनी गैस एजेंसी से सामान्य तरीके से रिफ़िल बुक करें और डिलीवरी पर पैसा दें।",
        "पैसा आपके आधार से जुड़े बैंक खाते में लौट आएगा। न आए तो गैस एजेंसी या गाँव/वार्ड सचिवालय से संपर्क करें।",
      ],
    },
  },
  documents: {
    en: ["Rice card", "Aadhaar card", "LPG consumer number", "Aadhaar-linked bank account"],
    hi: ["राइस कार्ड", "आधार कार्ड", "LPG उपभोक्ता नंबर", "आधार से जुड़ा बैंक खाता"],
  },
  faqs: [
    {
      q: { en: "Do I get the cylinder without paying?", hi: "क्या सिलेंडर बिना पैसे दिए मिलता है?" },
      a: {
        en: "No. You pay the delivery person as usual, and the government sends the same amount back to your bank account, usually within 48 hours.",
        hi: "नहीं। आप डिलीवरी वाले को सामान्य तरीके से पैसा देते हैं, और सरकार उतनी ही रकम आम तौर पर 48 घंटे में आपके बैंक खाते में भेज देती है।",
      },
    },
    {
      q: { en: "Can I take all three free cylinders at once?", hi: "क्या तीनों मुफ़्त सिलेंडर एक साथ ले सकते हैं?" },
      a: {
        en: "No. Only one free refill is allowed in each four-month period.",
        hi: "नहीं। हर चार महीने की अवधि में सिर्फ़ एक मुफ़्त रिफ़िल मिलता है।",
      },
    },
  ],

  officialUrl: "https://civilsupplies.ap.gov.in/",
  sources: [
    "https://westgodavari.ap.gov.in/?p=2792",
    "https://www.newsonair.gov.in/ap-cm-chandrababu-naidu-launches-deepam-2-0-scheme-provides-free-gas-cylinders-for-eligible-families",
    "https://thefederal.com/category/states/south/andhra-pradesh/andhra-cm-launches-free-cooking-gas-cylinder-scheme-deepam-2-153582",
  ],
  lastVerified: "2026-10-06",
  launchedYear: 2024,
  status: "active",
};

export default scheme;
