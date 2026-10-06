import { all, incomeUpTo, labelled, maxAge, residentOf } from "@/lib/engine/build";
import type { Scheme } from "@/lib/types";

const scheme: Scheme = {
  slug: "punjab-dependent-children-assistance",
  tier: "compact",
  name: { en: "Punjab Financial Assistance to Dependent Children", hi: "पंजाब आश्रित बच्चों को वित्तीय सहायता" },
  aka: ["Punjab orphan pension", "Dependent children pension Punjab"],
  shortDescription: {
    en: "₹1,500 a month for children under 21 in Punjab who have lost a parent, whose parents are absent, or whose parents can't look after them, if family income is up to ₹60,000.",
    hi: "पंजाब के 21 साल से कम उम्र के उन बच्चों को हर महीने ₹1,500, जिनके माता या पिता नहीं रहे, घर से ग़ायब रहते हैं या देखभाल नहीं कर सकते, अगर परिवार की आय ₹60,000 तक है।",
  },
  level: "state",
  state: "punjab",
  department: {
    en: "Department of Social Security and Women & Child Development, Government of Punjab",
    hi: "सामाजिक सुरक्षा और महिला एवं बाल विकास विभाग, पंजाब सरकार",
  },
  categories: ["women-child", "social-welfare"],
  tags: ["orphan", "dependent children", "child pension", "single parent", "punjab"],
  benefitType: "cash",
  isDBT: true,
  value: { amount: 1500, period: "monthly", kind: "cash" },
  ageRange: { max: 20 },
  kundliHouse: "women-family",
  eligibility: all(
    residentOf("punjab"),
    labelled(maxAge(20), { en: "The child is below 21 years of age", hi: "बच्चे की उम्र 21 साल से कम हो" }),
    labelled(incomeUpTo(60_000), { en: "Yearly income up to ₹60,000", hi: "सालाना आय ₹60,000 तक" }),
  ),

  details: {
    en: [
      "Punjab gives ₹1,500 a month to children who have lost one or both parents, or whose parents stay away from home or are physically or mentally unable to look after the family. About 2.3 lakh children receive it.",
      "If the parent or guardian receiving the money dies, the SDM names a close relative as the new guardian and the payments continue without a fresh application.",
    ],
    hi: [
      "पंजाब उन बच्चों को हर महीने ₹1,500 देता है जिनके माता-पिता में से एक या दोनों नहीं रहे, या जिनके माता-पिता घर से दूर रहते हैं या शारीरिक या मानसिक रूप से परिवार की देखभाल नहीं कर सकते। लगभग 2.3 लाख बच्चों को यह मिलता है।",
      "अगर पैसा पाने वाले माता-पिता या अभिभावक की मृत्यु हो जाए, तो SDM किसी नज़दीकी रिश्तेदार को नया अभिभावक बनाता है और नया आवेदन किए बिना पैसा मिलता रहता है।",
    ],
  },
  benefits: {
    en: ["₹1,500 a month until the child turns 21.", "Payments continue through a new guardian if the current guardian dies."],
    hi: ["बच्चे के 21 साल का होने तक हर महीने ₹1,500।", "मौजूदा अभिभावक की मृत्यु होने पर नए अभिभावक के ज़रिए पैसा मिलता रहता है।"],
  },
  eligibilityText: {
    en: [
      "A child below 21 years of age living in Punjab.",
      "The mother, father or both have died, or are regularly absent from home, or are physically or mentally unable to look after the family.",
      "Total yearly income up to ₹60,000, including business, rent or interest income.",
    ],
    hi: [
      "पंजाब में रहने वाला 21 साल से कम उम्र का बच्चा।",
      "माँ, पिता या दोनों की मृत्यु हो गई हो, या वे लगातार घर से बाहर रहते हों, या शारीरिक या मानसिक रूप से परिवार की देखभाल न कर सकते हों।",
      "कारोबार, किराए या ब्याज समेत कुल सालाना आय ₹60,000 तक।",
    ],
  },
  applicationProcess: {
    offline: {
      en: [
        "Get the form from a Sewa Kendra, Anganwadi centre, CDPO office or District Social Security Office.",
        "Fill it in for the child, attach the child's age proof and sign the self-declaration.",
        "Submit it. The CDPO verifies it and the District Social Security Officer sanctions the assistance.",
      ],
      hi: [
        "फ़ॉर्म सेवा केंद्र, आंगनवाड़ी केंद्र, CDPO दफ़्तर या ज़िला सामाजिक सुरक्षा दफ़्तर से लें।",
        "बच्चे के लिए फ़ॉर्म भरें, बच्चे की उम्र का सबूत लगाएँ और स्व-घोषणा पर दस्तख़त करें।",
        "फ़ॉर्म जमा करें। CDPO जाँच करता है और ज़िला सामाजिक सुरक्षा अधिकारी सहायता मंज़ूर करता है।",
      ],
    },
  },

  officialUrl: "https://sswcd.punjab.gov.in/en/social-security/pensionsfinancial-assistance",
  sources: [
    "https://sswcd.punjab.gov.in/en/social-security/pensionsfinancial-assistance",
    "https://finance.punjab.gov.in/uploads/acdc31d7-1fc6-4290-823e-d5e5bea4c16a_Gender%20Budget%202026-27.pdf",
    "https://ipr.punjab.gov.in/en/press-releases/hq-press-releases/punjab-government-releases-over-242-crore-financial-aid-to-orphaned-and-dependent-children-dr-baljit-kaur/",
  ],
  lastVerified: "2026-10-06",
  launchedYear: 2021,
  status: "active",
};

export default scheme;
