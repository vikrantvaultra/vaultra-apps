import { all, residentOf } from "@/lib/engine/build";
import type { Scheme } from "@/lib/types";

const scheme: Scheme = {
  slug: "cm-hakshelgi-tengbang",
  overlapGroup: "health-cover",
  name: { en: "Chief Minister-gi Hakshelgi Tengbang (CMHT)", hi: "चीफ़ मिनिस्टर-गी हकशेलगी तेंगबांग (CMHT)" },
  aka: ["CMHT", "CMHT Manipur", "Hakshelgi Tengbang", "Manipur health card"],
  shortDescription: {
    en: "Poor and needy families in Manipur who are not covered by PM-JAY get free hospital treatment worth up to ₹5 lakh a year with a CMHT health card.",
    hi: "मणिपुर के गरीब और ज़रूरतमंद परिवारों को, जो PM-JAY में नहीं आते, CMHT हेल्थ कार्ड से हर साल ₹5 लाख तक का मुफ़्त अस्पताल इलाज मिलता है।",
  },
  level: "state",
  state: "manipur",
  department: {
    en: "Health and Family Welfare Department (State Health Agency), Government of Manipur",
    hi: "स्वास्थ्य एवं परिवार कल्याण विभाग (राज्य स्वास्थ्य एजेंसी), मणिपुर सरकार",
  },
  categories: ["health", "social-welfare"],
  tags: ["health insurance", "free treatment", "hospital", "cmht", "widow", "disabled", "manipur"],
  benefitType: "insurance",
  isDBT: false,
  value: { amount: 500000, period: "yearly", kind: "cover" },
  kundliHouse: "health",
  eligibility: all(residentOf("manipur")),

  details: {
    en: [
      "Chief Minister-gi Hakshelgi Tengbang (CMHT) is the Government of Manipur's own health assurance scheme. It was launched on 21 January 2018 for poor families who are left out of the central PM-JAY scheme.",
      "An enrolled family gets cashless treatment of up to ₹5 lakh a year, shared among all members, for hospital stays and operations at empanelled hospitals. These include district hospitals, RIMS, JNIMS, some community health centres and private hospitals in Manipur, and a few hospitals in Guwahati and Kolkata.",
      "The scheme is run by the State Health Agency under the Health Department, with Medi Assist as the implementing support agency. About 4 lakh people had been enrolled by November 2025.",
    ],
    hi: [
      "चीफ़ मिनिस्टर-गी हकशेलगी तेंगबांग (CMHT) मणिपुर सरकार की अपनी स्वास्थ्य योजना है। यह 21 जनवरी 2018 को उन गरीब परिवारों के लिए शुरू हुई जो केंद्र की PM-JAY योजना से बाहर रह गए थे।",
      "जुड़े हुए परिवार को सूचीबद्ध अस्पतालों में भर्ती और ऑपरेशन के लिए हर साल ₹5 लाख तक का कैशलेस इलाज मिलता है, जो परिवार के सभी सदस्यों में साझा होता है। इनमें ज़िला अस्पताल, RIMS, JNIMS, कुछ सामुदायिक स्वास्थ्य केंद्र और मणिपुर के निजी अस्पताल, और गुवाहाटी व कोलकाता के कुछ अस्पताल शामिल हैं।",
      "यह योजना स्वास्थ्य विभाग के तहत राज्य स्वास्थ्य एजेंसी चलाती है, और Medi Assist इसकी सहायक एजेंसी है। नवंबर 2025 तक करीब 4 लाख लोग इससे जुड़ चुके थे।",
    ],
  },
  benefits: {
    en: [
      "Cashless treatment up to ₹5 lakh per family per year for hospital admission (secondary and tertiary care).",
      "No payment at the empanelled hospital: show your CMHT health card.",
      "Travel allowance of ₹300 per visit within Manipur, up to ₹3,000 a year.",
      "For treatment outside Manipur: cheapest airfare for the patient and one attendant (up to ₹30,000 a year) and ₹1,000 a day (up to ₹10,000).",
    ],
    hi: [
      "अस्पताल में भर्ती (सेकेंडरी और टर्शियरी इलाज) के लिए हर परिवार को हर साल ₹5 लाख तक का कैशलेस इलाज।",
      "सूचीबद्ध अस्पताल में कोई पैसा नहीं देना: बस अपना CMHT हेल्थ कार्ड दिखाएँ।",
      "मणिपुर के अंदर हर बार ₹300 का यात्रा भत्ता, साल में ₹3,000 तक।",
      "मणिपुर से बाहर इलाज के लिए: मरीज़ और एक साथी का सबसे सस्ता हवाई किराया (साल में ₹30,000 तक) और हर दिन ₹1,000 (₹10,000 तक)।",
    ],
  },
  eligibilityText: {
    en: [
      "You are a bona fide resident of Manipur.",
      "Your family is in one of these groups: Antyodaya (AAY) card holders, widows, persons with disabilities, ASHA workers, Anganwadi workers and helpers, Ima Market women vendors, local media persons and newspaper hawkers, or internally displaced persons.",
      "Other poor families not in these groups can apply and are added after verification by the Deputy Commissioner.",
      "All amounts are shared by the family; travel allowances count within the ₹5 lakh limit.",
    ],
    hi: [
      "आप मणिपुर के वास्तविक निवासी हैं।",
      "आपका परिवार इनमें से किसी समूह में है: अंत्योदय (AAY) कार्ड धारक, विधवा, दिव्यांगजन, आशा कार्यकर्ता, आंगनवाड़ी कार्यकर्ता और सहायिका, इमा मार्केट की महिला विक्रेता, स्थानीय मीडियाकर्मी और अख़बार विक्रेता, या आंतरिक रूप से विस्थापित लोग।",
      "इन समूहों से बाहर के दूसरे गरीब परिवार भी आवेदन कर सकते हैं, और डिप्टी कमिश्नर की जाँच के बाद जोड़े जाते हैं।",
      "सारी राशि पूरे परिवार की साझा है; यात्रा भत्ते भी ₹5 लाख की सीमा में ही गिने जाते हैं।",
    ],
  },
  exclusions: {
    en: [
      "Families who are not residents of Manipur.",
      "Treatment that does not need hospital admission, such as ordinary OPD visits: the cover is for hospitalisation only.",
      "Anyone in government service: you must sign a declaration that you are not a government employee before the card is made.",
    ],
    hi: [
      "जो परिवार मणिपुर के निवासी नहीं हैं।",
      "ऐसा इलाज जिसमें भर्ती की ज़रूरत न हो, जैसे आम OPD दिखाना: यह कवर सिर्फ़ अस्पताल में भर्ती के लिए है।",
      "सरकारी नौकरी वाले: कार्ड बनने से पहले आपको लिखकर देना होता है कि आप सरकारी कर्मचारी नहीं हैं।",
    ],
  },
  applicationProcess: {
    offline: {
      en: [
        "Go to an enrolment kiosk at RIMS, JNIMS, a district hospital or the Deputy Commissioner's office, or attend an enrolment camp.",
        "Show your original Aadhaar and the proof of your group (AAY card, disability certificate, husband's death certificate, or membership letter).",
        "Fill in the declaration that you are not in government service; your photo is taken and the CMHT health card is printed.",
        "If you are poor but not in a listed group, apply for Deputy Commissioner verification first.",
      ],
      hi: [
        "RIMS, JNIMS, ज़िला अस्पताल या डिप्टी कमिश्नर कार्यालय के नामांकन काउंटर पर जाएँ, या नामांकन शिविर में पहुँचें।",
        "अपना मूल आधार और अपने समूह का सबूत दिखाएँ (AAY कार्ड, दिव्यांगता प्रमाण पत्र, पति का मृत्यु प्रमाण पत्र या सदस्यता पत्र)।",
        "सरकारी नौकरी में न होने का घोषणा पत्र भरें; आपकी फ़ोटो ली जाती है और CMHT हेल्थ कार्ड छपता है।",
        "अगर आप गरीब हैं पर किसी सूचीबद्ध समूह में नहीं, तो पहले डिप्टी कमिश्नर से जाँच के लिए आवेदन करें।",
      ],
    },
  },
  documents: {
    en: [
      "Aadhaar card of the applicant and family members",
      "Ration card (for AAY families)",
      "Disability certificate (for persons with disabilities)",
      "Husband's death certificate (for widows)",
      "Membership letter from the department or association (ASHA, Anganwadi, Ima Market vendor, media, newspaper hawker)",
      "IDP certificate from the Deputy Commissioner (for internally displaced persons)",
    ],
    hi: [
      "आवेदक और परिवार के सदस्यों का आधार कार्ड",
      "राशन कार्ड (AAY परिवारों के लिए)",
      "दिव्यांगता प्रमाण पत्र (दिव्यांगजनों के लिए)",
      "पति का मृत्यु प्रमाण पत्र (विधवाओं के लिए)",
      "विभाग या संगठन का सदस्यता पत्र (आशा, आंगनवाड़ी, इमा मार्केट विक्रेता, मीडिया, अख़बार विक्रेता)",
      "डिप्टी कमिश्नर का IDP प्रमाण पत्र (विस्थापित लोगों के लिए)",
    ],
  },
  faqs: [
    {
      q: { en: "My family already has a PM-JAY (Ayushman) card. Do we need CMHT?", hi: "मेरे परिवार के पास पहले से PM-JAY (आयुष्मान) कार्ड है। क्या CMHT भी चाहिए?" },
      a: {
        en: "No. CMHT is for poor families who are not covered by PM-JAY. Both give up to ₹5 lakh a year, so you use the card you have.",
        hi: "नहीं। CMHT उन गरीब परिवारों के लिए है जो PM-JAY में नहीं आते। दोनों में हर साल ₹5 लाख तक मिलता है, इसलिए जो कार्ड आपके पास है उसी का इस्तेमाल करें।",
      },
    },
    {
      q: { en: "Can I get treatment outside Manipur?", hi: "क्या मणिपुर से बाहर इलाज हो सकता है?" },
      a: {
        en: "Yes, at the empanelled hospitals in Guwahati and Kolkata. You also get airfare for yourself and one attendant and a daily allowance, within the yearly limits.",
        hi: "हाँ, गुवाहाटी और कोलकाता के सूचीबद्ध अस्पतालों में। आपको और एक साथी को हवाई किराया और रोज़ का भत्ता भी मिलता है, सालाना सीमा के अंदर।",
      },
    },
    {
      q: { en: "Whom do I call for help?", hi: "मदद के लिए किसे फ़ोन करें?" },
      a: {
        en: "Call the 24x7 toll-free CMHT helpline 1800 103 2015.",
        hi: "CMHT की 24x7 टोल-फ़्री हेल्पलाइन 1800 103 2015 पर फ़ोन करें।",
      },
    },
  ],

  officialUrl: "https://cmhtmanipur.gov.in/cmht/index.html",
  sources: [
    "https://cmhtmanipur.gov.in/cmht/scheme-details.html",
    "https://cmhtmanipur.gov.in/cmht/how-to-enrol.html",
    "https://cmhtmanipur.gov.in/cmht/index.html",
  ],
  lastVerified: "2026-10-06",
  launchedYear: 2018,
  status: "active",
};

export default scheme;
