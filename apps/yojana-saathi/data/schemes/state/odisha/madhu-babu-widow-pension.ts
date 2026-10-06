import { all, female, labelled, notGovtEmployee, notTaxPayer, residentOf, when } from "@/lib/engine/build";
import type { Scheme } from "@/lib/types";

const scheme: Scheme = {
  slug: "madhu-babu-widow-pension",
  tier: "compact",
  overlapGroup: "widow-pension",
  name: { en: "Madhu Babu Pension for Widows and Deserted Women", hi: "मधु बाबू पेंशन (विधवा और परित्यक्त महिलाएँ)" },
  aka: ["MBPY widow pension", "Odisha widow pension", "Madhubabu widow pension"],
  shortDescription: {
    en: "Widows, and deserted or divorced women, of any age in Odisha get a monthly state pension if no one in the family pays income tax or works for the government.",
    hi: "ओडिशा में किसी भी उम्र की विधवाओं और परित्यक्त या तलाकशुदा महिलाओं को हर महीने राज्य पेंशन, अगर परिवार में कोई आयकर नहीं देता और सरकारी नौकरी में नहीं है।",
  },
  level: "state",
  state: "odisha",
  department: {
    en: "Department of Social Security and Empowerment of Persons with Disabilities (SSEPD), Government of Odisha",
    hi: "सामाजिक सुरक्षा एवं दिव्यांगजन सशक्तिकरण विभाग (SSEPD), ओडिशा सरकार",
  },
  categories: ["pension-insurance", "women-child", "social-welfare"],
  tags: ["widow pension", "deserted women", "divorced", "pension", "madhu babu", "odisha"],
  benefitType: "pension",
  isDBT: false,
  kundliHouse: "women-family",
  eligibility: all(
    residentOf("odisha"),
    female(),
    when("marital", "in", ["widowed", "divorced", "separated"]),
    labelled(notTaxPayer(), { en: "No one in the family pays income tax", hi: "परिवार में कोई आयकर न देता हो" }),
    labelled(notGovtEmployee(), {
      en: "No one in the family is a serving or retired government employee",
      hi: "परिवार में कोई मौजूदा या रिटायर सरकारी कर्मचारी न हो",
    }),
  ),

  details: {
    en: [
      "Under Odisha's Madhu Babu Pension Yojana, widows of any age, and women who have been deserted or divorced, can get a monthly pension from the state. Widows of people who died of COVID and widows of HIV-positive persons are also covered.",
      "For these women there is no family income ceiling, as long as no one in the family pays income tax or is a serving or retired government servant. Status is accepted on self-declaration, checked by the local extension officer; a death or divorce certificate is not required.",
    ],
    hi: [
      "ओडिशा की मधु बाबू पेंशन योजना में किसी भी उम्र की विधवाएँ, और जिन महिलाओं को छोड़ दिया गया है या जिनका तलाक हो गया है, राज्य से हर महीने पेंशन पा सकती हैं। कोविड से मरे लोगों की विधवाएँ और HIV पॉज़िटिव व्यक्तियों की विधवाएँ भी इसमें शामिल हैं।",
      "इन महिलाओं के लिए परिवार की आय की कोई सीमा नहीं है, बशर्ते परिवार में कोई आयकर न देता हो और कोई मौजूदा या रिटायर सरकारी कर्मचारी न हो। स्थिति खुद के घोषणा पत्र पर मानी जाती है, जिसकी जाँच स्थानीय एक्सटेंशन अधिकारी करते हैं; मृत्यु या तलाक प्रमाण पत्र ज़रूरी नहीं है।",
    ],
  },
  benefits: {
    en: ["A monthly pension at the rate set by the state government.", "Paid for as long as you remain eligible."],
    hi: ["राज्य सरकार की तय दर पर हर महीने पेंशन।", "जब तक आप पात्र रहें, तब तक मिलती है।"],
  },
  eligibilityText: {
    en: [
      "You live in Odisha and are a widow, or a deserted or divorced woman (no age limit).",
      "No one in your family pays income tax or is a serving or retired government servant.",
      "You don't already get another social security pension.",
    ],
    hi: [
      "आप ओडिशा में रहती हैं और विधवा हैं, या परित्यक्त या तलाकशुदा हैं (उम्र की कोई सीमा नहीं)।",
      "परिवार में कोई आयकर नहीं देता और कोई मौजूदा या रिटायर सरकारी कर्मचारी नहीं है।",
      "आपको पहले से कोई दूसरी सामाजिक सुरक्षा पेंशन नहीं मिलती।",
    ],
  },
  applicationProcess: {
    online: {
      en: ["Apply on the SSEPD portal (ssepd.gov.in) under 'Application for Beneficiary'.", "Upload your Aadhaar, photo and bank details with a self-declaration of your status."],
      hi: ["SSEPD पोर्टल (ssepd.gov.in) पर 'Application for Beneficiary' में आवेदन करें।", "अपनी स्थिति के स्व-घोषणा पत्र के साथ आधार, फ़ोटो और बैंक की जानकारी अपलोड करें।"],
    },
    offline: {
      en: ["Get the MBPY form free from the block office (villages) or municipality / NAC office (towns).", "Submit it with your documents and keep the acknowledgement."],
      hi: ["MBPY फ़ॉर्म ब्लॉक कार्यालय (गाँव) या नगरपालिका / NAC कार्यालय (शहर) से मुफ़्त लें।", "दस्तावेज़ों के साथ जमा करें और पावती संभाल कर रखें।"],
    },
  },
  documents: {
    en: ["Aadhaar card", "Self-declaration of widowhood, desertion or divorce", "Bank account details", "Passport-size photos"],
    hi: ["आधार कार्ड", "विधवा, परित्यक्त या तलाकशुदा होने का स्व-घोषणा पत्र", "बैंक खाते की जानकारी", "पासपोर्ट साइज़ फ़ोटो"],
  },

  officialUrl: "https://ssepd.odisha.gov.in/en/schemes-programmes/schemes/madhu-babu-pension-yojna-mbpy",
  sources: [
    "https://ssepd.odisha.gov.in/sites/default/files/2026-08/GUIDELINES%20ON%20MADHU%20BABU%20PENSION%20YOJANA%20%28MBPY%29_1.pdf",
    "https://finance.odisha.gov.in/sites/default/files/2025-08/04-BUDGET_SPEECH_ENGLISH-PART-2.pdf",
  ],
  lastVerified: "2026-10-06",
  launchedYear: 2008,
  status: "active",
};

export default scheme;
