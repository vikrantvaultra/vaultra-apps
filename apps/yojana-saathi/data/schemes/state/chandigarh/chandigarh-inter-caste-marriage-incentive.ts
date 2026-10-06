import { all, minAge, residentOf } from "@/lib/engine/build";
import type { Scheme } from "@/lib/types";

const scheme: Scheme = {
  slug: "chandigarh-inter-caste-marriage-incentive",
  tier: "compact",
  name: { en: "Chandigarh Inter-Caste Marriage Incentive", hi: "चंडीगढ़ अंतरजातीय विवाह प्रोत्साहन योजना" },
  aka: ["Inter caste marriage scheme Chandigarh", "Antarjatiya vivah Chandigarh"],
  shortDescription: {
    en: "Couples in Chandigarh where one spouse is from a Scheduled Caste family get ₹2.5 lakh as a fixed deposit for their first marriage.",
    hi: "चंडीगढ़ के उन जोड़ों को, जिनमें पति या पत्नी में से एक अनुसूचित जाति परिवार से है, पहली शादी पर ₹2.5 लाख फ़िक्स्ड डिपॉज़िट के रूप में।",
  },
  level: "state",
  state: "chandigarh",
  department: {
    en: "Department of Social Welfare, Women & Child Development, Chandigarh Administration",
    hi: "समाज कल्याण, महिला एवं बाल विकास विभाग, चंडीगढ़ प्रशासन",
  },
  categories: ["social-welfare"],
  tags: ["inter caste marriage", "scheduled caste", "sc", "marriage incentive", "chandigarh"],
  benefitType: "cash",
  isDBT: false,
  value: { amount: 250000, period: "one-time", kind: "cash" },
  ageRange: { min: 18 },
  kundliHouse: "women-family",
  eligibility: all(residentOf("chandigarh"), minAge(18)),

  details: {
    en: [
      "To fight caste prejudice, the Chandigarh Administration rewards couples who marry across caste lines when one of them belongs to a Scheduled Caste family. The incentive is ₹2.5 lakh, given as a fixed deposit.",
      "It is run by the Department of Social Welfare, Women & Child Development. It is only for a first marriage, and the couple must be permanent residents of Chandigarh.",
    ],
    hi: [
      "जाति के भेदभाव को कम करने के लिए चंडीगढ़ प्रशासन उन जोड़ों को इनाम देता है जो जाति से बाहर शादी करते हैं और जिनमें से एक अनुसूचित जाति परिवार से है। प्रोत्साहन राशि ₹2.5 लाख है, जो फ़िक्स्ड डिपॉज़िट के रूप में दी जाती है।",
      "इसे समाज कल्याण, महिला एवं बाल विकास विभाग चलाता है। यह सिर्फ़ पहली शादी के लिए है, और जोड़े को चंडीगढ़ का स्थायी निवासी होना चाहिए।",
    ],
  },
  benefits: {
    en: ["₹2,50,000 incentive, given as a fixed deposit.", "One-time benefit for the couple."],
    hi: ["₹2,50,000 की प्रोत्साहन राशि, फ़िक्स्ड डिपॉज़िट के रूप में।", "जोड़े को एक बार मिलने वाला लाभ।"],
  },
  eligibilityText: {
    en: [
      "One of the spouses belongs to a Scheduled Caste family.",
      "Both are Indian citizens and permanent residents of Chandigarh.",
      "The marriage meets the legal age: at least 18 for the bride and 21 for the groom.",
      "It is the first marriage for the couple, and the marriage is registered.",
      "The couple has not received this incentive before.",
    ],
    hi: [
      "पति या पत्नी में से एक अनुसूचित जाति परिवार से हो।",
      "दोनों भारतीय नागरिक और चंडीगढ़ के स्थायी निवासी हों।",
      "शादी क़ानूनी उम्र में हुई हो: दुल्हन कम से कम 18 और दूल्हा कम से कम 21 साल का।",
      "यह जोड़े की पहली शादी हो और शादी पंजीकृत हो।",
      "जोड़े ने यह प्रोत्साहन पहले न लिया हो।",
    ],
  },
  applicationProcess: {
    offline: {
      en: [
        "Download the inter-caste marriage form and the affidavit format from chdsw.gov.in.",
        "Fill in the form, prepare the affidavit and attach self-attested copies of the documents.",
        "Submit it at the Department of Social Welfare, Additional Town Hall Building, Sector 17-C, Chandigarh.",
      ],
      hi: [
        "chdsw.gov.in से अंतरजातीय विवाह का फ़ॉर्म और शपथ पत्र का प्रारूप डाउनलोड करें।",
        "फ़ॉर्म भरें, शपथ पत्र बनवाएँ और दस्तावेज़ों की स्व-प्रमाणित कॉपी लगाएँ।",
        "इसे समाज कल्याण विभाग, एडिशनल टाउन हॉल बिल्डिंग, सेक्टर 17-C, चंडीगढ़ में जमा करें।",
      ],
    },
  },
  documents: {
    en: [
      "Scheduled Caste certificate",
      "Marriage registration certificate",
      "Proof of 3 years' residence (voter card, ration card or similar)",
      "Aadhaar card",
      "Date of birth proof of husband and wife",
      "Postcard-size photo of the marriage",
      "Affidavit on residence, age, caste, first marriage and no earlier incentive",
    ],
    hi: [
      "अनुसूचित जाति प्रमाण पत्र",
      "विवाह पंजीकरण प्रमाण पत्र",
      "3 साल से रहने का सबूत (वोटर कार्ड, राशन कार्ड या ऐसा कोई कागज़)",
      "आधार कार्ड",
      "पति और पत्नी दोनों की जन्मतिथि का सबूत",
      "शादी की पोस्टकार्ड साइज़ फ़ोटो",
      "रहने, उम्र, जाति, पहली शादी और पहले प्रोत्साहन न लेने के बारे में शपथ पत्र",
    ],
  },

  officialUrl: "https://chdsw.gov.in/index.php/scheme/inter-caste-marriage",
  sources: [
    "https://chdsw.gov.in/index.php/scheme/inter-caste-marriage",
    "https://chdsw.gov.in/uploads/media/1768816158-ICM_for_and_affidavit_proforma.pdf",
  ],
  lastVerified: "2026-10-06",
  launchedYear: 2017,
  status: "active",
};

export default scheme;
