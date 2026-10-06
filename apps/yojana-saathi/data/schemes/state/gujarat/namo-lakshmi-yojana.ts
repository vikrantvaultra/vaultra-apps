import { all, female, incomeUpTo, isTrue, labelled, residentOf } from "@/lib/engine/build";
import type { Scheme } from "@/lib/types";

const scheme: Scheme = {
  slug: "namo-lakshmi-yojana",
  name: { en: "Namo Lakshmi Yojana", hi: "नमो लक्ष्मी योजना" },
  aka: ["Namo Laxmi", "Namo Lakshmi scholarship", "Namo Laxmi Yojana Gujarat"],
  shortDescription: {
    en: "Girls in Classes 9 to 12 in Gujarat from families earning up to ₹6 lakh a year get ₹50,000 over four years, paid monthly and as a lump sum after the Class 10 and 12 boards.",
    hi: "गुजरात में कक्षा 9 से 12 में पढ़ने वाली, ₹6 लाख तक सालाना आय वाले परिवारों की छात्राओं को चार साल में कुल ₹50,000 मिलते हैं, हर महीने और 10वीं-12वीं बोर्ड पास करने पर एकमुश्त।",
  },
  level: "state",
  state: "gujarat",
  department: { en: "Education Department, Government of Gujarat", hi: "शिक्षा विभाग, गुजरात सरकार" },
  categories: ["education", "women-child"],
  tags: ["girls", "scholarship", "class 9", "class 12", "namo lakshmi", "gujarat"],
  benefitType: "cash",
  isDBT: true,
  kundliHouse: "daughter",
  eligibility: all(
    residentOf("gujarat"),
    female(),
    labelled(isTrue("student"), { en: "Studying in Class 9, 10, 11 or 12", hi: "कक्षा 9, 10, 11 या 12 में पढ़ रही हो" }),
    incomeUpTo(600_000),
  ),

  details: {
    en: [
      "Namo Lakshmi Yojana is the Gujarat government's scholarship for girls in secondary and higher secondary school. It started in 2024 to cut dropouts after Class 8 and to help girls eat and study better.",
      "A girl gets ₹500 a month in Classes 9 and 10 and ₹750 a month in Classes 11 and 12, for 10 months each year. She also gets ₹10,000 after passing the Class 10 board exam and ₹15,000 after passing the Class 12 board exam. Over four years this adds up to ₹50,000.",
      "The Education Department runs the scheme through schools. The state budget for 2026-27 set aside ₹1,250 crore for it, and more than 12 lakh girls were covered in 2025-26.",
    ],
    hi: [
      "नमो लक्ष्मी योजना गुजरात सरकार की छात्रवृत्ति है, जो माध्यमिक और उच्च माध्यमिक स्कूल में पढ़ने वाली लड़कियों के लिए है। यह 2024 में शुरू हुई, ताकि 8वीं के बाद लड़कियाँ पढ़ाई न छोड़ें और उनका खान-पान और पढ़ाई बेहतर हो।",
      "कक्षा 9 और 10 में हर महीने ₹500 और कक्षा 11 और 12 में हर महीने ₹750 मिलते हैं, साल में 10 महीने। 10वीं बोर्ड पास करने पर ₹10,000 और 12वीं बोर्ड पास करने पर ₹15,000 अलग से मिलते हैं। चार साल में कुल ₹50,000 बनते हैं।",
      "शिक्षा विभाग यह योजना स्कूलों के ज़रिए चलाता है। 2026-27 के राज्य बजट में इसके लिए ₹1,250 करोड़ रखे गए हैं, और 2025-26 में 12 लाख से ज़्यादा लड़कियों को इसका लाभ मिला।",
    ],
  },
  benefits: {
    en: [
      "Classes 9 and 10: ₹500 a month for 10 months each year (₹5,000 a year).",
      "₹10,000 more after passing the Class 10 board exam.",
      "Classes 11 and 12: ₹750 a month for 10 months each year (₹7,500 a year).",
      "₹15,000 more after passing the Class 12 board exam.",
      "Total of ₹50,000 over four years, paid into the girl's bank account.",
    ],
    hi: [
      "कक्षा 9 और 10: हर साल 10 महीने तक ₹500 महीना (₹5,000 सालाना)।",
      "10वीं बोर्ड पास करने पर ₹10,000 अलग से।",
      "कक्षा 11 और 12: हर साल 10 महीने तक ₹750 महीना (₹7,500 सालाना)।",
      "12वीं बोर्ड पास करने पर ₹15,000 अलग से।",
      "चार साल में कुल ₹50,000, छात्रा के बैंक खाते में।",
    ],
  },
  eligibilityText: {
    en: [
      "A girl studying in Class 9, 10, 11 or 12 in a government, grant-in-aid or private school in Gujarat.",
      "The school must be recognised by the Gujarat board (GSHSEB) or CBSE.",
      "There are conditions on where she studied up to Class 8 (such as a government or aided school, or an RTE seat in a private school). Your school can confirm.",
      "Family income is up to ₹6 lakh a year.",
      "Monthly payments depend on regular attendance.",
    ],
    hi: [
      "गुजरात के सरकारी, अनुदानित या निजी स्कूल में कक्षा 9, 10, 11 या 12 में पढ़ने वाली छात्रा।",
      "स्कूल गुजरात बोर्ड (GSHSEB) या CBSE से मान्यता प्राप्त हो।",
      "8वीं तक की पढ़ाई कहाँ हुई, इस पर भी शर्तें हैं (जैसे सरकारी या अनुदानित स्कूल, या निजी स्कूल में RTE की सीट)। आपका स्कूल यह बता देगा।",
      "परिवार की सालाना आय ₹6 लाख तक हो।",
      "हर महीने का पैसा नियमित हाज़िरी पर निर्भर है।",
    ],
  },
  exclusions: {
    en: [
      "Family income above ₹6 lakh a year.",
      "Boys (see Namo Saraswati Vigyan Sadhana Yojana for science students).",
      "Months with poor attendance are not paid.",
    ],
    hi: [
      "परिवार की सालाना आय ₹6 लाख से ज़्यादा हो।",
      "लड़के (विज्ञान के छात्रों के लिए नमो सरस्वती विज्ञान साधना योजना देखें)।",
      "जिन महीनों में हाज़िरी कम हो, उनका पैसा नहीं मिलता।",
    ],
  },
  applicationProcess: {
    offline: {
      en: [
        "Tell your school that you want to join Namo Lakshmi Yojana. Each school has a nodal teacher for the scheme.",
        "Give the school your Aadhaar, a parent's Aadhaar, your bank account details and a mobile number.",
        "The school fills in and submits the form online for you. The money then comes into your bank account.",
      ],
      hi: [
        "अपने स्कूल को बताएँ कि आप नमो लक्ष्मी योजना में नाम लिखवाना चाहती हैं। हर स्कूल में इस योजना के लिए एक नोडल शिक्षक होता है।",
        "स्कूल को अपना आधार, माता या पिता का आधार, बैंक खाते का विवरण और मोबाइल नंबर दें।",
        "स्कूल आपका फ़ॉर्म ऑनलाइन भरकर जमा करता है। फिर पैसा आपके बैंक खाते में आता है।",
      ],
    },
  },
  documents: {
    en: ["Student's Aadhaar card", "Parent's Aadhaar card", "Bank account details (Aadhaar-linked)", "Family income certificate or self-declaration", "Mobile number"],
    hi: ["छात्रा का आधार कार्ड", "माता या पिता का आधार कार्ड", "बैंक खाते का विवरण (आधार से जुड़ा)", "परिवार का आय प्रमाण पत्र या स्व-घोषणा", "मोबाइल नंबर"],
  },
  faqs: [
    {
      q: { en: "Can I get Namo Lakshmi along with another scholarship?", hi: "क्या दूसरी छात्रवृत्ति के साथ नमो लक्ष्मी मिल सकती है?" },
      a: {
        en: "Yes. The state has said girls who already get other government scholarships can still get Namo Lakshmi.",
        hi: "हाँ। राज्य ने कहा है कि जिन लड़कियों को पहले से दूसरी सरकारी छात्रवृत्ति मिल रही है, उन्हें भी नमो लक्ष्मी मिल सकती है।",
      },
    },
    {
      q: { en: "Do I need to apply online myself?", hi: "क्या मुझे खुद ऑनलाइन आवेदन करना होगा?" },
      a: {
        en: "No. Your school's nodal teacher registers you. Just make sure your Aadhaar and bank details are correct.",
        hi: "नहीं। आपके स्कूल के नोडल शिक्षक आपका नाम दर्ज करते हैं। बस ध्यान रखें कि आधार और बैंक विवरण सही हों।",
      },
    },
  ],

  officialUrl: "https://cmogujarat.gov.in/en/gujarat-budget-2026-2027",
  sources: [
    "https://cmogujarat.gov.in/sites/default/files/2026-02/gujarat-budget-2026-27.pdf",
    "https://en.vikaspedia.in/viewcontent/schemesall/state-specific-schemes/welfare-schemes-of-gujarat/namo-lakshmi-yojana?lgn=en",
    "https://ianslive.in/gujarat-to-provide-rs-1250-cr-aid-to-over-12-l-girls-under-namo-laxmi-scheme--20260127143208",
  ],
  lastVerified: "2026-10-06",
  launchedYear: 2024,
  status: "check-status",
};

export default scheme;
