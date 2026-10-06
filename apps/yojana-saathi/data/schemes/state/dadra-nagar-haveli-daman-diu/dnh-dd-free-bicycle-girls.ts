import { all, female, isTrue, residentOf } from "@/lib/engine/build";
import type { Scheme } from "@/lib/types";

const scheme: Scheme = {
  slug: "dnh-dd-free-bicycle-girls",
  tier: "compact",
  name: {
    en: "Saraswati Vidya Yojana: Free Bicycles for Class 8 Girls (DNH & DD)",
    hi: "सरस्वती विद्या योजना: कक्षा 8 की छात्राओं को मुफ़्त साइकिल (दानह और दमण-दीव)",
  },
  aka: ["Saraswati Vidya Yojana cycle", "Daman free cycle girls", "DNH free bicycle"],
  shortDescription: {
    en: "Every girl in class 8 at a government school in Dadra & Nagar Haveli and Daman & Diu gets a free bicycle to ride to school.",
    hi: "दादरा-नगर हवेली और दमण-दीव के सरकारी स्कूलों में कक्षा 8 की हर छात्रा को स्कूल आने-जाने के लिए मुफ़्त साइकिल।",
  },
  level: "state",
  state: "dadra-nagar-haveli-daman-diu",
  department: {
    en: "Directorate of Education, UT Administration of Dadra & Nagar Haveli and Daman & Diu",
    hi: "शिक्षा निदेशालय, संघ प्रदेश दादरा और नगर हवेली और दमण और दीव प्रशासन",
  },
  categories: ["education", "women-child"],
  tags: ["free bicycle", "cycle", "girls", "school", "class 8", "daman", "silvassa"],
  benefitType: "in-kind",
  isDBT: false,
  kundliHouse: "education",
  eligibility: all(residentOf("dadra-nagar-haveli-daman-diu"), female(), isTrue("student")),

  details: {
    en: [
      "This is the first part of the UT's Saraswati Vidya Yojana, revised on 23 April 2026. Its aim is to keep girls in school through the secondary and higher secondary years and cut drop-outs.",
      "Girls enrolled in class 8 in government schools of the UT receive a bicycle at the start of the new academic year. The school head handles the list and the distribution, so there is no separate application.",
    ],
    hi: [
      "यह संघ प्रदेश की सरस्वती विद्या योजना का पहला हिस्सा है, जिसे 23 अप्रैल 2026 को संशोधित किया गया। इसका मक़सद लड़कियों को माध्यमिक और उच्च माध्यमिक कक्षाओं तक स्कूल में बनाए रखना और पढ़ाई छोड़ने की दर घटाना है।",
      "संघ प्रदेश के सरकारी स्कूलों में कक्षा 8 में पढ़ रही छात्राओं को नए शैक्षणिक वर्ष की शुरुआत में साइकिल मिलती है। सूची और वितरण स्कूल प्रमुख संभालते हैं, इसलिए अलग से आवेदन नहीं करना होता।",
    ],
  },
  benefits: {
    en: [
      "A free bicycle for travelling to school.",
      "Given once; a girl who has received one does not get another in later years.",
    ],
    hi: [
      "स्कूल आने-जाने के लिए मुफ़्त साइकिल।",
      "एक ही बार; जिसे एक बार मिल चुकी है उसे बाद के सालों में दोबारा नहीं मिलती।",
    ],
  },
  eligibilityText: {
    en: [
      "A girl studying in class 8 in a government school of Dadra & Nagar Haveli, Daman or Diu.",
      "The bicycle must not be sold; it can be taken back if the girl leaves school before finishing higher secondary.",
    ],
    hi: [
      "दादरा और नगर हवेली, दमण या दीव के किसी सरकारी स्कूल में कक्षा 8 में पढ़ रही छात्रा।",
      "साइकिल बेची नहीं जा सकती; अगर छात्रा उच्च माध्यमिक पूरा करने से पहले स्कूल छोड़ दे तो साइकिल वापस ली जा सकती है।",
    ],
  },
  applicationProcess: {
    offline: {
      en: [
        "No application is needed. Your school head sends the class 8 girls' enrolment list to the District Education Office.",
        "Bicycles are handed out at school at the start of the academic year. If you were missed, ask your school head or the District Education Office.",
      ],
      hi: [
        "आवेदन की ज़रूरत नहीं। आपके स्कूल प्रमुख कक्षा 8 की छात्राओं की सूची ज़िला शिक्षा कार्यालय को भेजते हैं।",
        "शैक्षणिक वर्ष की शुरुआत में स्कूल में साइकिलें बाँटी जाती हैं। अगर आपका नाम छूट गया हो तो स्कूल प्रमुख या ज़िला शिक्षा कार्यालय से पूछें।",
      ],
    },
  },

  officialUrl: "https://ddd.gov.in/directorate-of-education/",
  sources: [
    "https://cdnbbsr.s3waas.gov.in/s371e09b16e21f7b6919bbfc43f6a5b2f0/uploads/2026/06/202606101204175196.pdf",
  ],
  lastVerified: "2026-10-06",
  launchedYear: 2026,
  status: "active",
};

export default scheme;
