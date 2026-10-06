import { all, residentOf, labelled, when } from "@/lib/engine/build";
import type { Scheme } from "@/lib/types";

const scheme: Scheme = {
  slug: "focus-plus-meghalaya",
  tier: "compact",
  overlapGroup: "farmer-income",
  name: { en: "FOCUS+ (Meghalaya)", hi: "फ़ोकस प्लस (मेघालय)" },
  aka: ["FOCUS Plus", "FOCUS", "Meghalaya producer support"],
  shortDescription: {
    en: "Meghalaya's flagship support for farmers and other producers: an untied cash benefit of ₹5,000 to each enrolled producer, plus funds for producer groups.",
    hi: "किसानों और दूसरे उत्पादकों के लिए मेघालय की प्रमुख योजना: हर पंजीकृत उत्पादक को ₹5,000 की बिना शर्त नक़द मदद, और उत्पादक समूहों के लिए फ़ंड।",
  },
  level: "state",
  state: "meghalaya",
  department: { en: "Government of Meghalaya", hi: "मेघालय सरकार" },
  categories: ["agriculture", "social-welfare"],
  tags: ["farmer", "producer", "cash support", "producer group", "focus plus", "meghalaya"],
  benefitType: "cash",
  isDBT: true,
  kundliHouse: "farming",
  eligibility: all(
    residentOf("meghalaya"),
    labelled(when("occupation", "in", ["farmer", "fisher", "livestock-dairy"]), {
      en: "You are a farmer, fisher or livestock producer",
      hi: "आप किसान, मछुआरे या पशुपालक हैं",
    }),
  ),

  details: {
    en: [
      "FOCUS+ is the Meghalaya government's flagship programme for producers such as farmers. The 2026-27 budget speech calls it the state's flagship programme for producers and allocates ₹175 crore to it.",
      "Enrolled producers get an untied benefit of ₹5,000, which they can use as they choose, and producer groups get untied funds for local solutions to farming problems. In 2025-26 the state paid a backlog instalment to about 93,000 verified beneficiaries and began registering new beneficiaries under the Family ID system.",
      "We could not find an official page that sets out how often the ₹5,000 is paid, who can enrol now, or how to register, so please check with your block office before applying.",
    ],
    hi: [
      "फ़ोकस प्लस (FOCUS+) किसानों जैसे उत्पादकों के लिए मेघालय सरकार का प्रमुख कार्यक्रम है। 2026-27 के बजट भाषण में इसे राज्य का प्रमुख उत्पादक कार्यक्रम बताया गया और इसके लिए ₹175 करोड़ रखे गए।",
      "पंजीकृत उत्पादकों को ₹5,000 की बिना शर्त मदद मिलती है, जिसे वे अपनी मर्ज़ी से ख़र्च कर सकते हैं, और उत्पादक समूहों को खेती की स्थानीय समस्याओं के हल के लिए फ़ंड मिलता है। 2025-26 में राज्य ने लगभग 93,000 सत्यापित लाभार्थियों को बकाया किस्त दी और फ़ैमिली ID व्यवस्था के तहत नए लाभार्थियों का पंजीकरण शुरू किया।",
      "हमें कोई सरकारी पेज नहीं मिला जो बताए कि ₹5,000 कितने समय में मिलते हैं, अभी कौन जुड़ सकता है या पंजीकरण कैसे होता है, इसलिए आवेदन से पहले अपने ब्लॉक कार्यालय से पूछ लें।",
    ],
  },
  benefits: {
    en: [
      "An untied cash benefit of ₹5,000 to each enrolled producer, paid to the bank account.",
      "Untied funds for producer groups to solve local farming problems.",
    ],
    hi: [
      "हर पंजीकृत उत्पादक को ₹5,000 की बिना शर्त नक़द मदद, बैंक खाते में।",
      "खेती की स्थानीय समस्याओं के हल के लिए उत्पादक समूहों को बिना शर्त फ़ंड।",
    ],
  },
  eligibilityText: {
    en: [
      "A producer (such as a farmer) living in Meghalaya, enrolled with a producer group under FOCUS+.",
      "New registrations are being done under the state's Family ID framework.",
      "Exact conditions are not published on an official page we could reach; confirm with your block office.",
    ],
    hi: [
      "मेघालय में रहने वाले उत्पादक (जैसे किसान), जो FOCUS+ में किसी उत्पादक समूह के साथ पंजीकृत हों।",
      "नए पंजीकरण राज्य की फ़ैमिली ID व्यवस्था के तहत हो रहे हैं।",
      "सही शर्तें हमें किसी सरकारी पेज पर नहीं मिलीं; अपने ब्लॉक कार्यालय से पुष्टि करें।",
    ],
  },
  applicationProcess: {
    offline: {
      en: [
        "Ask at your Block Development Office or your village producer group about FOCUS+ registration.",
        "Make sure your household is registered under the state's Family ID.",
        "Keep your Aadhaar-linked bank account details ready for the payment.",
      ],
      hi: [
        "FOCUS+ पंजीकरण के बारे में अपने ब्लॉक विकास कार्यालय या गाँव के उत्पादक समूह से पूछें।",
        "पक्का करें कि आपका परिवार राज्य की फ़ैमिली ID में पंजीकृत है।",
        "भुगतान के लिए आधार से जुड़े बैंक खाते की जानकारी तैयार रखें।",
      ],
    },
  },

  officialUrl: "https://megfinance.gov.in/budget_documents/2026-2027/others/budget_speech.pdf",
  sources: ["https://megfinance.gov.in/budget_documents/2026-2027/others/budget_speech.pdf"],
  lastVerified: "2026-10-06",
  launchedYear: 2023,
  status: "check-status",
};

export default scheme;
