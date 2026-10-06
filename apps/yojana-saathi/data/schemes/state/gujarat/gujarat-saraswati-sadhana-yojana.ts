import { all, female, incomeUpTo, isTrue, labelled, residentOf, when } from "@/lib/engine/build";
import type { Scheme } from "@/lib/types";

const scheme: Scheme = {
  slug: "gujarat-saraswati-sadhana-yojana",
  tier: "compact",
  name: { en: "Saraswati Sadhana Yojana (free bicycle for Class 9 girls)", hi: "सरस्वती साधना योजना (कक्षा 9 की छात्राओं को मुफ़्त साइकिल)" },
  aka: ["Saraswati Sadhana", "free cycle Gujarat", "bicycle scheme Gujarat girls"],
  shortDescription: {
    en: "SC, SEBC (OBC) and EWS girls in Class 9 in Gujarat from families earning up to ₹6 lakh a year get a free bicycle to get to school.",
    hi: "गुजरात में कक्षा 9 में पढ़ने वाली SC, SEBC (OBC) और EWS छात्राओं को, जिनके परिवार की सालाना आय ₹6 लाख तक है, स्कूल जाने के लिए मुफ़्त साइकिल मिलती है।",
  },
  level: "state",
  state: "gujarat",
  department: { en: "Social Justice and Empowerment Department, Government of Gujarat", hi: "सामाजिक न्याय एवं अधिकारिता विभाग, गुजरात सरकार" },
  categories: ["education", "women-child"],
  tags: ["free bicycle", "cycle", "girls", "class 9", "saraswati sadhana", "gujarat"],
  benefitType: "in-kind",
  isDBT: false,
  kundliHouse: "education",
  eligibility: all(
    residentOf("gujarat"),
    female(),
    labelled(isTrue("student"), { en: "Studying in Class 9", hi: "कक्षा 9 में पढ़ रही हो" }),
    when("caste", "in", ["sc", "obc", "general"]),
    incomeUpTo(600_000),
  ),

  details: {
    en: [
      "Saraswati Sadhana Yojana gives a free bicycle to girls in Class 9 so that distance does not stop them from going to secondary school. It covers Scheduled Caste, SEBC (OBC) and Economically Weaker Section girls; Scheduled Tribe girls get bicycles under a separate Tribal Development scheme.",
      "Schools apply for their eligible students; the girl does not apply herself. The 2026-27 budget provided ₹73 crore for about 1.59 lakh bicycles.",
    ],
    hi: [
      "सरस्वती साधना योजना कक्षा 9 की छात्राओं को मुफ़्त साइकिल देती है, ताकि दूरी की वजह से उनकी माध्यमिक पढ़ाई न छूटे। इसमें अनुसूचित जाति, SEBC (OBC) और आर्थिक रूप से कमज़ोर वर्ग की छात्राएँ आती हैं; अनुसूचित जनजाति की छात्राओं को आदिजाति विकास विभाग की अलग योजना से साइकिल मिलती है।",
      "स्कूल अपनी पात्र छात्राओं के लिए आवेदन करते हैं; छात्रा को खुद आवेदन नहीं करना होता। 2026-27 के बजट में करीब 1.59 लाख साइकिलों के लिए ₹73 करोड़ रखे गए हैं।",
    ],
  },
  benefits: {
    en: ["A free bicycle in Class 9.", "Given whatever the distance between home and school."],
    hi: ["कक्षा 9 में मुफ़्त साइकिल।", "घर से स्कूल की दूरी चाहे जितनी हो, साइकिल मिलती है।"],
  },
  eligibilityText: {
    en: [
      "A girl studying in Class 9 in Gujarat.",
      "She belongs to a Scheduled Caste, SEBC (OBC) or the EWS category.",
      "Family income up to ₹6 lakh a year.",
    ],
    hi: [
      "गुजरात में कक्षा 9 में पढ़ने वाली छात्रा।",
      "वह अनुसूचित जाति, SEBC (OBC) या EWS वर्ग की हो।",
      "परिवार की सालाना आय ₹6 लाख तक हो।",
    ],
  },
  applicationProcess: {
    offline: {
      en: [
        "Give your caste (or EWS) and income certificates to your school.",
        "The principal submits the proposal online on the Digital Gujarat portal.",
        "Bicycles are handed out through the school or the district welfare office.",
      ],
      hi: [
        "अपना जाति (या EWS) और आय प्रमाण पत्र स्कूल को दें।",
        "प्रिंसिपल डिजिटल गुजरात पोर्टल पर ऑनलाइन प्रस्ताव भेजते हैं।",
        "साइकिल स्कूल या ज़िला कल्याण कार्यालय के ज़रिए दी जाती है।",
      ],
    },
  },

  officialUrl: "https://sje.gujarat.gov.in/dscw/showpage.aspx?contentid=1762",
  sources: [
    "https://sje.gujarat.gov.in/dscw/showpage.aspx?contentid=1762",
    "https://sje.gujarat.gov.in/ddcw/showpage.aspx?contentid=1516",
    "https://cmogujarat.gov.in/sites/default/files/2026-02/gujarat-budget-2026-27.pdf",
  ],
  lastVerified: "2026-10-06",
  launchedYear: 2016,
  status: "active",
};

export default scheme;
