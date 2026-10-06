import { all, female, labelled, residentOf, when } from "@/lib/engine/build";
import type { Scheme } from "@/lib/types";

const scheme: Scheme = {
  slug: "chandigarh-sc-widow-daughter-marriage",
  tier: "compact",
  overlapGroup: "marriage-assistance",
  name: {
    en: "Chandigarh Marriage Assistance for Daughters of SC Widows and Destitute Women",
    hi: "चंडीगढ़ अनुसूचित जाति विधवा एवं बेसहारा महिलाओं की बेटियों के विवाह हेतु सहायता",
  },
  aka: ["SC widow daughter marriage Chandigarh", "Shagun Chandigarh SC widow"],
  shortDescription: {
    en: "Scheduled Caste widows and destitute women in Chandigarh get a one-time ₹20,000 for the marriage of each of up to two daughters.",
    hi: "चंडीगढ़ की अनुसूचित जाति की विधवा और बेसहारा महिलाओं को दो बेटियों तक, हर बेटी की शादी के लिए एक बार ₹20,000।",
  },
  level: "state",
  state: "chandigarh",
  department: {
    en: "Department of Social Welfare, Women & Child Development, Chandigarh Administration",
    hi: "समाज कल्याण, महिला एवं बाल विकास विभाग, चंडीगढ़ प्रशासन",
  },
  categories: ["women-child", "social-welfare"],
  tags: ["daughter marriage", "widow", "scheduled caste", "sc", "marriage assistance", "chandigarh"],
  benefitType: "cash",
  isDBT: false,
  value: { amount: 20000, period: "one-time", kind: "cash" },
  kundliHouse: "daughter",
  eligibility: all(
    residentOf("chandigarh"),
    female(),
    labelled(when("marital", "in", ["widowed", "divorced", "separated"]), {
      en: "You are a widow or a destitute woman",
      hi: "आप विधवा या बेसहारा महिला हैं",
    }),
    when("caste", "in", ["sc"]),
  ),

  details: {
    en: [
      "This scheme helps poor Scheduled Caste widows and destitute women in Chandigarh with the cost of their daughters' weddings. It pays a one-time ₹20,000 per daughter, for up to two daughters, and only for a first marriage.",
      "It is run by the Department of Social Welfare, Women & Child Development. If both parents of the bride have died, her legal guardian can apply. The income limit on the department's page is very low (₹2,000 a month, checked by the Tehsildar), so confirm the current limit with the department before applying.",
    ],
    hi: [
      "यह योजना चंडीगढ़ की गरीब अनुसूचित जाति की विधवा और बेसहारा महिलाओं को बेटियों की शादी के ख़र्च में मदद करती है। हर बेटी के लिए एक बार ₹20,000 मिलते हैं, दो बेटियों तक, और सिर्फ़ पहली शादी के लिए।",
      "इसे समाज कल्याण, महिला एवं बाल विकास विभाग चलाता है। दुल्हन के माता-पिता दोनों न हों, तो उसका क़ानूनी अभिभावक आवेदन कर सकता है। विभाग के पेज पर आय सीमा बहुत कम (₹2,000 महीना, तहसीलदार से जाँची हुई) लिखी है, इसलिए आवेदन से पहले विभाग से मौजूदा सीमा पक्की कर लें।",
    ],
  },
  benefits: {
    en: ["₹20,000 one-time help for a daughter's marriage.", "Available for up to two daughters in a family."],
    hi: ["बेटी की शादी के लिए एक बार ₹20,000 की मदद।", "एक परिवार में दो बेटियों तक।"],
  },
  eligibilityText: {
    en: [
      "The bride's mother is a widow or destitute woman from the Scheduled Caste community.",
      "The bride is at least 18 on the date of marriage, and it is her first marriage.",
      "The family has lived in Chandigarh for more than 3 years.",
      "Family income is within the limit set by the department (listed as ₹2,000 a month, verified by the Tehsildar).",
      "If both parents have died, the legal guardian can apply.",
    ],
    hi: [
      "दुल्हन की माँ अनुसूचित जाति की विधवा या बेसहारा महिला हो।",
      "शादी के दिन दुल्हन कम से कम 18 साल की हो, और यह उसकी पहली शादी हो।",
      "परिवार 3 साल से ज़्यादा समय से चंडीगढ़ में रह रहा हो।",
      "परिवार की आय विभाग की तय सीमा में हो (₹2,000 महीना लिखी है, तहसीलदार से जाँची हुई)।",
      "माता-पिता दोनों न हों, तो क़ानूनी अभिभावक आवेदन कर सकता है।",
    ],
  },
  applicationProcess: {
    offline: {
      en: [
        "Get the form for this scheme from the department or via the 'Apply' link on its scheme page at chdsw.gov.in.",
        "Attach self-attested copies of the documents.",
        "Submit it at the Department of Social Welfare, Additional Town Hall Building, Sector 17-C, Chandigarh.",
      ],
      hi: [
        "इस योजना का फ़ॉर्म विभाग से या chdsw.gov.in पर योजना पेज के 'Apply' लिंक से लें।",
        "दस्तावेज़ों की स्व-प्रमाणित कॉपी लगाएँ।",
        "इसे समाज कल्याण विभाग, एडिशनल टाउन हॉल बिल्डिंग, सेक्टर 17-C, चंडीगढ़ में जमा करें।",
      ],
    },
  },
  documents: {
    en: [
      "Death certificate of the bride's father",
      "Caste certificate",
      "Bride's age proof",
      "Aadhaar card",
      "Proof of 3 years' residence (voter card, ration card, electricity or water bill)",
      "Legal guardian certificate, if both parents have died",
    ],
    hi: [
      "दुल्हन के पिता का मृत्यु प्रमाण पत्र",
      "जाति प्रमाण पत्र",
      "दुल्हन की उम्र का सबूत",
      "आधार कार्ड",
      "3 साल से रहने का सबूत (वोटर कार्ड, राशन कार्ड, बिजली या पानी का बिल)",
      "क़ानूनी अभिभावक प्रमाण पत्र, अगर माता-पिता दोनों न हों",
    ],
  },

  officialUrl: "https://chdsw.gov.in/index.php/scheme/financial-assistance-for-the-marriage-of-daughter-of-widows-destitute-women-belonging-to-schedule-caste",
  sources: [
    "https://chdsw.gov.in/index.php/scheme/financial-assistance-for-the-marriage-of-daughter-of-widows-destitute-women-belonging-to-schedule-caste",
  ],
  lastVerified: "2026-10-06",
  launchedYear: 2017,
  status: "check-status",
};

export default scheme;
