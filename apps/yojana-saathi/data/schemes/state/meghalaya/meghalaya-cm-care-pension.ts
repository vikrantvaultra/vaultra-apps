import { all, residentOf } from "@/lib/engine/build";
import type { Scheme } from "@/lib/types";

const scheme: Scheme = {
  slug: "meghalaya-cm-care-pension",
  tier: "compact",
  name: { en: "CM CARE Pensions (Meghalaya)", hi: "सीएम केयर पेंशन (मेघालय)" },
  aka: ["CM CARE", "Meghalaya old age pension", "Meghalaya single mother pension", "Meghalaya disability pension"],
  shortDescription: {
    en: "Meghalaya's state pension programme for senior citizens, single mothers and persons with disabilities, reaching about 1.23 lakh people.",
    hi: "बुज़ुर्गों, अकेली माताओं और दिव्यांगजनों के लिए मेघालय का राज्य पेंशन कार्यक्रम, जिससे लगभग 1.23 लाख लोगों को लाभ मिलता है।",
  },
  level: "state",
  state: "meghalaya",
  department: { en: "Government of Meghalaya", hi: "मेघालय सरकार" },
  categories: ["pension-insurance", "social-welfare"],
  tags: ["pension", "old age pension", "single mother", "disability pension", "senior citizen", "meghalaya"],
  benefitType: "pension",
  isDBT: true,
  kundliHouse: "senior",
  eligibility: all(residentOf("meghalaya")),

  details: {
    en: [
      "CM CARE is the programme through which the Meghalaya government pays monthly pensions to senior citizens, single mothers and people with disabilities. The 2026-27 budget says it now benefits 1,23,000 people and allocates ₹102 crore to continue it.",
      "We could not find an official page giving the current pension amount, the age and income rules, or how to apply, so please confirm these with your Block Development Office or the District Social Welfare Office.",
    ],
    hi: [
      "सीएम केयर वह कार्यक्रम है जिसके ज़रिए मेघालय सरकार बुज़ुर्गों, अकेली माताओं और दिव्यांगजनों को मासिक पेंशन देती है। 2026-27 के बजट के अनुसार इससे अब 1,23,000 लोगों को लाभ मिलता है और इसे जारी रखने के लिए ₹102 करोड़ रखे गए हैं।",
      "हमें कोई सरकारी पेज नहीं मिला जिसमें मौजूदा पेंशन राशि, उम्र और आय के नियम या आवेदन का तरीक़ा हो, इसलिए अपने ब्लॉक विकास कार्यालय या ज़िला समाज कल्याण कार्यालय से पुष्टि करें।",
    ],
  },
  benefits: {
    en: ["A monthly pension paid to your bank account.", "The current amount is not confirmed; ask your block or district office."],
    hi: ["बैंक खाते में हर महीने पेंशन।", "मौजूदा राशि की पुष्टि नहीं हुई है; अपने ब्लॉक या ज़िला कार्यालय से पूछें।"],
  },
  eligibilityText: {
    en: [
      "A resident of Meghalaya who is a senior citizen, a single mother, or a person with a disability.",
      "Age, income and other conditions are set by the scheme rules; confirm them locally.",
    ],
    hi: [
      "मेघालय के निवासी जो बुज़ुर्ग, अकेली माँ या दिव्यांग हों।",
      "उम्र, आय और बाकी शर्तें योजना के नियमों में तय हैं; स्थानीय स्तर पर पुष्टि करें।",
    ],
  },
  applicationProcess: {
    offline: {
      en: [
        "Ask at your Block Development Office or District Social Welfare Office about CM CARE pensions.",
        "Submit the form with proof of age or status (such as a disability certificate), ID and bank details.",
        "Once sanctioned, the pension is paid to your bank account every month.",
      ],
      hi: [
        "सीएम केयर पेंशन के बारे में अपने ब्लॉक विकास कार्यालय या ज़िला समाज कल्याण कार्यालय में पूछें।",
        "उम्र या स्थिति का सबूत (जैसे दिव्यांगता प्रमाण पत्र), पहचान पत्र और बैंक की जानकारी के साथ फ़ॉर्म जमा करें।",
        "मंज़ूरी के बाद पेंशन हर महीने आपके बैंक खाते में आएगी।",
      ],
    },
  },

  officialUrl: "https://megsocialwelfare.gov.in/",
  sources: ["https://megfinance.gov.in/budget_documents/2026-2027/others/budget_speech.pdf"],
  lastVerified: "2026-10-06",
  launchedYear: 2018,
  status: "check-status",
};

export default scheme;
