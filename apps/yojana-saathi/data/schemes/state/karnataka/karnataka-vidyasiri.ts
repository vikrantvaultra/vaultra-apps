import { all, incomeUpTo, isTrue, labelled, residentOf, when } from "@/lib/engine/build";
import type { Scheme } from "@/lib/types";

const scheme: Scheme = {
  slug: "karnataka-vidyasiri",
  tier: "compact",
  overlapGroup: "scholarship",
  name: { en: "Vidyasiri Food and Accommodation Assistance", hi: "विद्यासिरी भोजन और आवास सहायता" },
  aka: ["Vidyasiri", "Vidyasiri scholarship", "BCWD Vidyasiri"],
  shortDescription: {
    en: "Backward Classes students in Karnataka who study after Class 10 and can't get a hostel seat get ₹1,500 a month for 10 months (₹15,000 a year) for food and stay.",
    hi: "कर्नाटक के पिछड़ा वर्ग के जो छात्र 10वीं के बाद पढ़ रहे हैं और जिन्हें हॉस्टल में जगह नहीं मिली, उन्हें खाने और रहने के लिए 10 महीने तक हर महीने ₹1,500 (साल में ₹15,000) मिलते हैं।",
  },
  level: "state",
  state: "karnataka",
  department: {
    en: "Backward Classes Welfare Department, Government of Karnataka",
    hi: "पिछड़ा वर्ग कल्याण विभाग, कर्नाटक सरकार",
  },
  categories: ["education", "social-welfare"],
  tags: ["vidyasiri", "obc", "backward classes", "hostel", "student", "scholarship", "karnataka"],
  benefitType: "cash",
  isDBT: true,
  value: { amount: 15000, period: "yearly", kind: "cash" },
  kundliHouse: "education",
  eligibility: all(
    residentOf("karnataka"),
    when("caste", "eq", "obc"),
    isTrue("student"),
    labelled(incomeUpTo(250_000), {
      en: "Family income up to ₹2.5 lakh a year (Category-1) or ₹1 lakh (Categories 2A, 3A, 3B)",
      hi: "परिवार की सालाना आय ₹2.5 लाख तक (श्रेणी-1) या ₹1 लाख तक (श्रेणी 2A, 3A, 3B)",
    }),
  ),

  details: {
    en: [
      "Vidyasiri helps Backward Classes students who move to a town to study after Class 10 but don't get a seat in a government hostel. Instead of a hostel place, they get a monthly allowance for food and lodging.",
      "It is run by Karnataka's Backward Classes Welfare Department. You apply on the State Scholarship Portal (SSP), and the money is paid into the student's bank account.",
    ],
    hi: [
      "विद्यासिरी उन पिछड़ा वर्ग छात्रों की मदद करती है जो 10वीं के बाद पढ़ने के लिए शहर जाते हैं पर सरकारी हॉस्टल में जगह नहीं पाते। हॉस्टल की जगह उन्हें खाने और रहने के लिए हर महीने भत्ता मिलता है।",
      "इसे कर्नाटक का पिछड़ा वर्ग कल्याण विभाग चलाता है। आवेदन राज्य छात्रवृत्ति पोर्टल (SSP) पर होता है और पैसा छात्र के बैंक खाते में आता है।",
    ],
  },
  benefits: {
    en: ["₹1,500 a month for 10 months of the academic year.", "₹15,000 a year in total, paid into the student's bank account."],
    hi: ["शैक्षणिक साल के 10 महीने तक हर महीने ₹1,500।", "साल में कुल ₹15,000, छात्र के बैंक खाते में।"],
  },
  eligibilityText: {
    en: [
      "Belongs to a Backward Class (OBC) listed by the Karnataka or central government, and is a permanent resident of Karnataka.",
      "Family income up to ₹2.5 lakh a year for Category-1, or up to ₹1 lakh for Categories 2A, 3A and 3B.",
      "Studies a post-matric course (after Class 10) at a recognised college, at least 5 km from home, coming from a rural area.",
      "Minimum marks in the last exam: 55% for Category-1, 65% for Categories 2A, 3A and 3B.",
      "At most two boys per family can get it; there is no limit for girls.",
    ],
    hi: [
      "कर्नाटक या केंद्र सरकार की सूची वाले पिछड़ा वर्ग (OBC) से हो, और कर्नाटक का स्थायी निवासी हो।",
      "परिवार की सालाना आय श्रेणी-1 के लिए ₹2.5 लाख तक, या श्रेणी 2A, 3A और 3B के लिए ₹1 लाख तक।",
      "किसी मान्य कॉलेज में 10वीं के बाद का कोर्स कर रहा हो, घर से कम से कम 5 किमी दूर, और गाँव से आता हो।",
      "पिछली परीक्षा में कम से कम अंक: श्रेणी-1 के लिए 55%, श्रेणी 2A, 3A और 3B के लिए 65%।",
      "एक परिवार के ज़्यादा से ज़्यादा दो लड़कों को मिलता है; लड़कियों के लिए कोई सीमा नहीं।",
    ],
  },
  applicationProcess: {
    online: {
      en: [
        "Go to the State Scholarship Portal (ssp.karnataka.gov.in) and log in to the post-matric section with the student's Aadhaar.",
        "Fill in the form, choosing food and accommodation assistance, with your caste and income certificate numbers and college details.",
        "Submit before the department's last date and track the status on SSP.",
      ],
      hi: [
        "राज्य छात्रवृत्ति पोर्टल (ssp.karnataka.gov.in) पर जाएँ और छात्र के आधार से पोस्ट-मैट्रिक सेक्शन में लॉग इन करें।",
        "फ़ॉर्म में भोजन और आवास सहायता चुनें, जाति और आय प्रमाण पत्र के नंबर और कॉलेज की जानकारी भरें।",
        "विभाग की आख़िरी तारीख़ से पहले जमा करें और SSP पर स्थिति देखें।",
      ],
    },
  },

  officialUrl: "https://bcwd.karnataka.gov.in/44/vidyasiri/kn",
  sources: ["https://bcwd.karnataka.gov.in/44/vidyasiri/kn", "https://ssp.karnataka.gov.in/"],
  lastVerified: "2026-10-06",
  launchedYear: 2010,
  status: "active",
};

export default scheme;
