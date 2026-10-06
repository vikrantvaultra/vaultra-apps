import { all, labelled, notGovtEmployee, residentOf } from "@/lib/engine/build";
import type { Scheme } from "@/lib/types";

const scheme: Scheme = {
  slug: "himcare",
  overlapGroup: "health-cover",
  name: { en: "Mukhya Mantri Himachal Health Care Scheme (HIMCARE)", hi: "मुख्यमंत्री हिमाचल हेल्थ केयर योजना (हिमकेयर)" },
  aka: ["HIMCARE", "Him Care", "Himcare card"],
  shortDescription: {
    en: "Himachal families not covered by Ayushman Bharat get cashless treatment up to ₹5 lakh a year per family. Premium is free, ₹365 or ₹1,000 a year depending on your category.",
    hi: "हिमाचल के जो परिवार आयुष्मान भारत में नहीं आते, उन्हें हर परिवार को सालाना ₹5 लाख तक कैशलेस इलाज मिलता है। आपकी श्रेणी के हिसाब से प्रीमियम मुफ़्त, ₹365 या ₹1,000 सालाना है।",
  },
  level: "state",
  state: "himachal-pradesh",
  department: {
    en: "Himachal Pradesh Swasthya Bima Yojana Society, Health and Family Welfare Department",
    hi: "हिमाचल प्रदेश स्वास्थ्य बीमा योजना सोसाइटी, स्वास्थ्य एवं परिवार कल्याण विभाग",
  },
  categories: ["health", "pension-insurance"],
  tags: ["health insurance", "himcare", "free treatment", "hospital", "cashless", "himachal"],
  benefitType: "insurance",
  isDBT: false,
  value: { amount: 500000, period: "yearly", kind: "cover" },
  kundliHouse: "health",
  eligibility: all(
    residentOf("himachal-pradesh"),
    labelled(notGovtEmployee(), {
      en: "You are not a government employee or pensioner (or their dependant)",
      hi: "आप सरकारी कर्मचारी या पेंशनभोगी (या उनके आश्रित) न हों",
    }),
  ),

  details: {
    en: [
      "HIMCARE was started on 1 January 2019 to give families left out of Ayushman Bharat PM-JAY the same kind of cashless hospital cover. It is run by the HP Swasthya Bima Yojana Society.",
      "Each family gets cover of up to ₹5 lakh a year. A family unit is up to five members; extra members are enrolled as a separate unit.",
      "The scheme works on co-payment: you pay a yearly premium based on your category, from nothing for BPL families to ₹1,000 for others. The e-card is renewed online.",
    ],
    hi: [
      "हिमकेयर 1 जनवरी 2019 को शुरू हुई, ताकि आयुष्मान भारत PM-JAY से छूटे परिवारों को भी वैसा ही कैशलेस अस्पताल कवर मिले। इसे हिमाचल प्रदेश स्वास्थ्य बीमा योजना सोसाइटी चलाती है।",
      "हर परिवार को सालाना ₹5 लाख तक का कवर मिलता है। एक परिवार इकाई में पाँच सदस्य तक होते हैं; ज़्यादा सदस्यों को अलग इकाई के रूप में जोड़ा जाता है।",
      "योजना सह-भुगतान पर चलती है: आपकी श्रेणी के हिसाब से सालाना प्रीमियम देना होता है, BPL परिवारों के लिए शून्य से लेकर बाकी के लिए ₹1,000 तक। ई-कार्ड का नवीनीकरण ऑनलाइन होता है।",
    ],
  },
  benefits: {
    en: [
      "Cashless treatment up to ₹5 lakh per family per year in empanelled hospitals.",
      "Hospitals empanelled under Ayushman Bharat in the state also treat HIMCARE patients.",
      "Treatment is also available at PGIMER Chandigarh and GMCH Sector 32, Chandigarh.",
    ],
    hi: [
      "सूचीबद्ध अस्पतालों में हर परिवार को सालाना ₹5 लाख तक कैशलेस इलाज।",
      "राज्य में आयुष्मान भारत के सूचीबद्ध अस्पताल हिमकेयर वालों का भी इलाज करते हैं।",
      "PGIMER चंडीगढ़ और GMCH सेक्टर 32, चंडीगढ़ में भी इलाज मिलता है।",
    ],
  },
  eligibilityText: {
    en: [
      "Families of Himachal Pradesh not covered under Ayushman Bharat PM-JAY.",
      "Category I (no premium): BPL families, registered street vendors, MGNREGA workers with at least 50 days' work in the current or previous year, and children in orphanages.",
      "Category II (₹365 a year): single women (ekal nari), people with over 40% disability, mid-day meal workers, and daily-wage, part-time, contract and outsourced workers of state bodies.",
      "Category III (₹1,000 a year): everyone else who is not a government employee or pensioner or their dependant.",
    ],
    hi: [
      "हिमाचल प्रदेश के वे परिवार जो आयुष्मान भारत PM-JAY में नहीं हैं।",
      "श्रेणी I (कोई प्रीमियम नहीं): BPL परिवार, पंजीकृत रेहड़ी-पटरी वाले, मौजूदा या पिछले साल कम से कम 50 दिन काम करने वाले मनरेगा मज़दूर, और अनाथालयों में रहने वाले बच्चे।",
      "श्रेणी II (₹365 सालाना): एकल नारी, 40% से ज़्यादा दिव्यांगता वाले, मिड-डे मील वर्कर, और राज्य संस्थाओं के दैनिक वेतन, अंशकालिक, अनुबंध और आउटसोर्स कर्मचारी।",
      "श्रेणी III (₹1,000 सालाना): बाकी सभी, जो सरकारी कर्मचारी या पेंशनभोगी या उनके आश्रित नहीं हैं।",
    ],
  },
  exclusions: {
    en: [
      "Government employees, government pensioners and their dependent family members.",
      "Families already covered under Ayushman Bharat PM-JAY (they use that scheme instead).",
      "Premiums paid under the wrong category are not refunded.",
    ],
    hi: [
      "सरकारी कर्मचारी, सरकारी पेंशनभोगी और उनके आश्रित परिवार सदस्य।",
      "जो परिवार पहले से आयुष्मान भारत PM-JAY में हैं (वे उसी योजना का लाभ लेते हैं)।",
      "ग़लत श्रेणी में भरा गया प्रीमियम वापस नहीं होता।",
    ],
  },
  applicationProcess: {
    online: {
      en: [
        "Apply at hpsbys.in, choosing the correct category and uploading the required certificate.",
        "Pay the premium for your category online.",
        "Download your HIMCARE e-card and renew it on the same portal when it expires.",
      ],
      hi: [
        "hpsbys.in पर आवेदन करें, सही श्रेणी चुनें और ज़रूरी प्रमाण पत्र अपलोड करें।",
        "अपनी श्रेणी का प्रीमियम ऑनलाइन भरें।",
        "हिमकेयर ई-कार्ड डाउनलोड करें और समय पूरा होने पर उसी पोर्टल पर नवीनीकरण करें।",
      ],
    },
    offline: {
      en: [
        "Visit a Lok Mitra Kendra or Common Service Centre.",
        "They will enrol your family and upload your documents for a fee of ₹50 per family unit, plus the premium.",
      ],
      hi: [
        "नज़दीकी लोक मित्र केंद्र या जन सेवा केंद्र (CSC) पर जाएँ।",
        "वे हर परिवार इकाई के ₹50 शुल्क और प्रीमियम लेकर आपका नामांकन करेंगे और दस्तावेज़ अपलोड करेंगे।",
      ],
    },
  },
  documents: {
    en: [
      "BPL certificate attested by the Panchayat Secretary within the last month (BPL)",
      "Street vendor registration certificate attested by the MC/NP executive officer (street vendors)",
      "MGNREGA job card and MIS report showing 50 days' work (MGNREGA workers)",
      "CDPO certificate (single women) or permanent disability certificate (persons with disabilities)",
      "Certificate from the Block Elementary Education Officer (mid-day meal workers) or from the department (contract, daily-wage, part-time or outsourced workers)",
    ],
    hi: [
      "पिछले एक महीने के भीतर पंचायत सचिव से प्रमाणित BPL प्रमाण पत्र (BPL)",
      "नगर निगम/नगर पंचायत के अधिशासी अधिकारी से प्रमाणित पंजीकरण प्रमाण पत्र (रेहड़ी-पटरी वाले)",
      "मनरेगा जॉब कार्ड और 50 दिन काम दिखाने वाली MIS रिपोर्ट (मनरेगा मज़दूर)",
      "CDPO का प्रमाण पत्र (एकल नारी) या स्थायी दिव्यांगता प्रमाण पत्र (दिव्यांगजन)",
      "खंड प्रारंभिक शिक्षा अधिकारी का प्रमाण पत्र (मिड-डे मील वर्कर) या विभाग का प्रमाण पत्र (अनुबंध, दैनिक वेतन, अंशकालिक या आउटसोर्स कर्मचारी)",
    ],
  },
  faqs: [
    {
      q: { en: "Who counts as an 'ekal nari' for the ₹365 premium?", hi: "₹365 प्रीमियम के लिए 'एकल नारी' कौन है?" },
      a: {
        en: "Widows, divorced or legally separated women, and unmarried women over 40, certified by the CDPO of your area.",
        hi: "विधवा, तलाकशुदा या क़ानूनी रूप से अलग रह रही महिलाएँ, और 40 साल से ज़्यादा उम्र की अविवाहित महिलाएँ, जिनका प्रमाण पत्र आपके क्षेत्र के CDPO ने दिया हो।",
      },
    },
    {
      q: { en: "My family has seven members. Is the cover shared?", hi: "मेरे परिवार में सात सदस्य हैं। क्या कवर साझा होगा?" },
      a: {
        en: "A unit covers up to five members. The other members are enrolled as a separate unit, which gets its own cover and premium.",
        hi: "एक इकाई में पाँच सदस्य तक आते हैं। बाकी सदस्य अलग इकाई के रूप में जुड़ते हैं, जिसका अपना कवर और प्रीमियम होता है।",
      },
    },
  ],

  officialUrl: "https://hpsbys.in/content/mmmn",
  sources: ["https://hpsbys.in/content/mmmn", "https://hpsbys.in/"],
  lastVerified: "2026-10-06",
  launchedYear: 2019,
  status: "active",
};

export default scheme;
