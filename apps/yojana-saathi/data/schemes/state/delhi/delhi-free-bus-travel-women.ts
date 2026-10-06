import { all, labelled, residentOf, when } from "@/lib/engine/build";
import type { Scheme } from "@/lib/types";

const scheme: Scheme = {
  slug: "delhi-free-bus-travel-women",
  name: { en: "Free Bus Travel for Women (Pink Saheli Smart Card)", hi: "महिलाओं के लिए मुफ़्त बस यात्रा (पिंक सहेली स्मार्ट कार्ड)" },
  aka: ["Pink Saheli card", "Saheli smart card", "Pink ticket", "DTC free bus women"],
  shortDescription: {
    en: "Women and transgender residents of Delhi travel free on DTC and cluster buses by tapping a Pink Saheli Smart Card, which has replaced the old paper pink ticket.",
    hi: "दिल्ली की महिलाएँ और ट्रांसजेंडर निवासी पिंक सहेली स्मार्ट कार्ड टैप करके DTC और क्लस्टर बसों में मुफ़्त सफ़र करती हैं; इस कार्ड ने पुराने काग़ज़ी पिंक टिकट की जगह ली है।",
  },
  level: "state",
  state: "delhi",
  department: { en: "Transport Department, Govt. of NCT of Delhi (through Delhi Transport Corporation)", hi: "परिवहन विभाग, दिल्ली सरकार (दिल्ली परिवहन निगम के ज़रिए)" },
  categories: ["women-child", "social-welfare"],
  tags: ["free bus", "women", "dtc", "pink ticket", "saheli card", "transgender", "delhi"],
  benefitType: "in-kind",
  isDBT: false,
  kundliHouse: "women-family",
  eligibility: all(
    residentOf("delhi"),
    labelled(when("gender", "in", ["female", "transgender"]), { en: "You are a woman or a transgender person", hi: "आप महिला या ट्रांसजेंडर व्यक्ति हैं" }),
  ),

  details: {
    en: [
      "Delhi has offered free bus travel to women on DTC and cluster buses since 2019. Under the present government it moved from paper 'pink tickets' to the Pink Saheli Smart Card, a personalised NCMC card with your name and photo, launched in March 2026.",
      "Card distribution started at authorised centres across Delhi, and more than 18 lakh cards had been issued by mid-2026. DTC has now made the card compulsory for free travel; without it you must buy a regular ticket.",
      "The card is a National Common Mobility Card, so you can also top it up and use it on the Metro and other transport, but only DTC and cluster bus rides are free.",
    ],
    hi: [
      "दिल्ली में 2019 से DTC और क्लस्टर बसों में महिलाओं के लिए मुफ़्त सफ़र है। मौजूदा सरकार ने काग़ज़ी 'पिंक टिकट' की जगह पिंक सहेली स्मार्ट कार्ड शुरू किया, जो आपके नाम और फ़ोटो वाला NCMC कार्ड है और मार्च 2026 में शुरू हुआ।",
      "दिल्ली भर में अधिकृत केंद्रों पर कार्ड बँटने शुरू हुए और 2026 के मध्य तक 18 लाख से ज़्यादा कार्ड जारी हो चुके थे। DTC ने अब मुफ़्त सफ़र के लिए कार्ड ज़रूरी कर दिया है; कार्ड न हो तो सामान्य टिकट लेना होगा।",
      "यह नेशनल कॉमन मोबिलिटी कार्ड है, इसलिए इसे रिचार्ज करके मेट्रो और दूसरे साधनों में भी इस्तेमाल कर सकते हैं, पर मुफ़्त सफ़र सिर्फ़ DTC और क्लस्टर बसों में है।",
    ],
  },
  benefits: {
    en: [
      "Unlimited free travel on DTC and cluster buses within Delhi.",
      "Just tap the card on the bus reader; no ticket needed.",
      "The same card can be recharged for paid travel on the Metro and other systems.",
    ],
    hi: [
      "दिल्ली के अंदर DTC और क्लस्टर बसों में असीमित मुफ़्त सफ़र।",
      "बस में रीडर पर कार्ड टैप करें; टिकट की ज़रूरत नहीं।",
      "उसी कार्ड को रिचार्ज करके मेट्रो और दूसरे साधनों में पैसे देकर सफ़र कर सकते हैं।",
    ],
  },
  eligibilityText: {
    en: [
      "A woman, girl or transgender person.",
      "A resident of Delhi with valid proof of address.",
      "Holds a Pink Saheli Smart Card issued in her own name.",
    ],
    hi: [
      "महिला, लड़की या ट्रांसजेंडर व्यक्ति।",
      "पते के मान्य प्रमाण के साथ दिल्ली के निवासी।",
      "अपने नाम पर जारी पिंक सहेली स्मार्ट कार्ड हो।",
    ],
  },
  exclusions: {
    en: [
      "Visitors and residents of other states (such as NCR towns) are not covered.",
      "Free travel does not apply to the Metro, autos or buses run by other states.",
      "Paper pink tickets are no longer accepted once the card became compulsory.",
    ],
    hi: [
      "दूसरे राज्यों (जैसे NCR के शहरों) के निवासी और बाहर से आने वाले लोग शामिल नहीं हैं।",
      "मेट्रो, ऑटो या दूसरे राज्यों की बसों में मुफ़्त सफ़र नहीं है।",
      "कार्ड ज़रूरी होने के बाद काग़ज़ी पिंक टिकट नहीं चलते।",
    ],
  },
  applicationProcess: {
    offline: {
      en: [
        "Find your nearest Pink Card distribution centre in the list on dtc.delhi.gov.in.",
        "Visit with your Aadhaar and Delhi address proof and your mobile phone for OTP verification.",
        "Collect the personalised card and start tapping it on DTC and cluster buses.",
      ],
      hi: [
        "dtc.delhi.gov.in पर दी गई सूची में अपना नज़दीकी पिंक कार्ड वितरण केंद्र ढूँढें।",
        "आधार, दिल्ली के पते का प्रमाण और OTP सत्यापन के लिए मोबाइल फ़ोन साथ ले जाएँ।",
        "अपने नाम का कार्ड लें और DTC व क्लस्टर बसों में टैप करना शुरू करें।",
      ],
    },
  },
  documents: {
    en: ["Aadhaar with a Delhi address (or other Delhi address proof)", "Mobile number linked to Aadhaar", "Passport-size photo, if asked"],
    hi: ["दिल्ली के पते वाला आधार (या दिल्ली के पते का कोई और प्रमाण)", "आधार से जुड़ा मोबाइल नंबर", "पासपोर्ट साइज़ फ़ोटो, अगर माँगी जाए"],
  },
  faqs: [
    {
      q: { en: "Do I have to pay for the card?", hi: "क्या कार्ड के लिए पैसे देने होंगे?" },
      a: {
        en: "The free travel itself costs nothing. Ask at the distribution centre whether any card issue fee applies, since cards are issued through partner banks.",
        hi: "मुफ़्त सफ़र का कोई पैसा नहीं लगता। कार्ड साझेदार बैंकों के ज़रिए बनते हैं, इसलिए वितरण केंद्र पर पूछ लें कि कोई कार्ड शुल्क है या नहीं।",
      },
    },
    {
      q: { en: "What if I lose the card?", hi: "कार्ड खो जाए तो क्या करें?" },
      a: {
        en: "Report it to the issuing bank or the distribution centre and ask for a replacement. Until then you will need to buy a ticket.",
        hi: "कार्ड जारी करने वाले बैंक या वितरण केंद्र को बताएँ और नया कार्ड माँगें। तब तक टिकट लेना होगा।",
      },
    },
  ],

  officialUrl: "https://dtc.delhi.gov.in/",
  sources: [
    "https://dtc.delhi.gov.in/sites/default/files/DTC/important-news/extension_circular_2_pink_pass.pdf",
    "https://dtc.delhi.gov.in/sites/default/files/DTC/important-news/ncmc_pink_card_50_locations.pdf",
    "https://newsonair.gov.in/delhi-government-extends-paper-based-pink-ticket-facility-for-women-in-dtc-buses-till-august-31/",
  ],
  lastVerified: "2026-10-06",
  launchedYear: 2026,
  status: "active",
};

export default scheme;
