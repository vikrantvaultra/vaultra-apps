import { all, female, labelled, residentOf, when } from "@/lib/engine/build";
import type { Scheme } from "@/lib/types";

const scheme: Scheme = {
  slug: "chandigarh-widow-children-assistance",
  tier: "compact",
  name: {
    en: "Chandigarh Financial Assistance to Dependent Children of Widows and Destitute Women",
    hi: "चंडीगढ़ विधवा एवं बेसहारा महिलाओं के आश्रित बच्चों को आर्थिक सहायता",
  },
  aka: ["Pension to dependent children of widows Chandigarh", "Widow children allowance Chandigarh"],
  shortDescription: {
    en: "Children under 18 of widows and destitute women who get the Chandigarh widow pension receive ₹1,000 a month each, for up to two children.",
    hi: "चंडीगढ़ विधवा पेंशन पाने वाली विधवा और बेसहारा महिलाओं के 18 साल से कम उम्र के बच्चों को, दो बच्चों तक, हर बच्चे पर ₹1,000 महीना।",
  },
  level: "state",
  state: "chandigarh",
  department: {
    en: "Department of Social Welfare, Women & Child Development, Chandigarh Administration",
    hi: "समाज कल्याण, महिला एवं बाल विकास विभाग, चंडीगढ़ प्रशासन",
  },
  categories: ["women-child", "social-welfare"],
  tags: ["widow", "children", "orphan", "monthly allowance", "chandigarh"],
  benefitType: "cash",
  isDBT: true,
  value: { amount: 1000, period: "monthly", kind: "cash" },
  kundliHouse: "women-family",
  eligibility: all(
    residentOf("chandigarh"),
    female(),
    labelled(when("marital", "in", ["widowed", "divorced", "separated"]), {
      en: "You are a widow or a destitute woman",
      hi: "आप विधवा या बेसहारा महिला हैं",
    }),
  ),

  details: {
    en: [
      "This scheme helps fatherless children, and children who have lost both parents, with the cost of upkeep and schooling. It is run by the Department of Social Welfare, Women & Child Development, Chandigarh Administration.",
      "Since 1 January 2016 the rate is ₹1,000 a month per child, for up to two children in a family. The mother must already be getting the department's pension for widows and destitute women. If both parents have died, the legal guardian can apply.",
    ],
    hi: [
      "यह योजना बिना पिता वाले बच्चों और जिन बच्चों के माता-पिता दोनों नहीं रहे, उनके पालन-पोषण और पढ़ाई के ख़र्च में मदद करती है। इसे चंडीगढ़ प्रशासन का समाज कल्याण, महिला एवं बाल विकास विभाग चलाता है।",
      "1 जनवरी 2016 से हर बच्चे को ₹1,000 महीना मिलता है, एक परिवार में दो बच्चों तक। माँ को पहले से विभाग की विधवा एवं बेसहारा महिला पेंशन मिल रही होनी चाहिए। माता-पिता दोनों न हों, तो क़ानूनी अभिभावक आवेदन कर सकता है।",
    ],
  },
  benefits: {
    en: [
      "₹1,000 a month for each child.",
      "Covers up to two children in a family.",
      "Meant for the child's upkeep and education until age 18.",
    ],
    hi: [
      "हर बच्चे के लिए ₹1,000 महीना।",
      "एक परिवार में दो बच्चों तक।",
      "18 साल की उम्र तक बच्चे के पालन-पोषण और पढ़ाई के लिए।",
    ],
  },
  eligibilityText: {
    en: [
      "The child is under 18 and has lost parental support through the father's death or long absence.",
      "The mother gets the department's pension for widows and destitute women, or, if both parents have died, a legal guardian applies.",
      "The family has lived in Chandigarh for more than 3 years.",
      "The child does not get a family pension from any government and is not in institutional care run by the government or an NGO.",
    ],
    hi: [
      "बच्चा 18 साल से छोटा हो और पिता की मृत्यु या लंबे समय से घर से दूर रहने के कारण सहारा खो चुका हो।",
      "माँ को विभाग की विधवा एवं बेसहारा महिला पेंशन मिलती हो, या माता-पिता दोनों न हों तो क़ानूनी अभिभावक आवेदन करे।",
      "परिवार 3 साल से ज़्यादा समय से चंडीगढ़ में रह रहा हो।",
      "बच्चे को किसी सरकार से फ़ैमिली पेंशन न मिलती हो और वह सरकारी या NGO की संस्था में न रह रहा हो।",
    ],
  },
  applicationProcess: {
    offline: {
      en: [
        "Download the form for this scheme (English or Hindi) from chdsw.gov.in, or collect it from the department.",
        "Attach the child's birth certificate, a certificate from the school last attended and the mother's or guardian's Aadhaar.",
        "Submit it at the Department of Social Welfare, Additional Town Hall Building, Sector 17-C, Chandigarh.",
      ],
      hi: [
        "chdsw.gov.in से इस योजना का फ़ॉर्म (अंग्रेज़ी या हिंदी) डाउनलोड करें, या विभाग से लें।",
        "बच्चे का जन्म प्रमाण पत्र, आख़िरी स्कूल का प्रमाण पत्र और माँ या अभिभावक का आधार लगाएँ।",
        "इसे समाज कल्याण विभाग, एडिशनल टाउन हॉल बिल्डिंग, सेक्टर 17-C, चंडीगढ़ में जमा करें।",
      ],
    },
  },
  documents: {
    en: [
      "Child's birth certificate from the Registrar of Births & Deaths",
      "Certificate from the head of the school or institute last attended",
      "Aadhaar of the widowed mother or legal guardian",
      "Guardian's proof of 3 years' residence (if both parents have died)",
    ],
    hi: [
      "जन्म-मृत्यु रजिस्ट्रार का जारी बच्चे का जन्म प्रमाण पत्र",
      "आख़िरी स्कूल या संस्थान के प्रमुख का प्रमाण पत्र",
      "विधवा माँ या क़ानूनी अभिभावक का आधार",
      "अभिभावक के 3 साल से रहने का सबूत (माता-पिता दोनों न हों तो)",
    ],
  },

  officialUrl: "https://chdsw.gov.in/index.php/scheme/the-financial-assistance-to-dependent-children-of-widows-and-destitute-women",
  sources: [
    "https://chdsw.gov.in/index.php/scheme/the-financial-assistance-to-dependent-children-of-widows-and-destitute-women",
    "https://chdsw.gov.in/uploads/media/1626347381-June_21.pdf",
  ],
  lastVerified: "2026-10-06",
  launchedYear: 2016,
  status: "active",
};

export default scheme;
