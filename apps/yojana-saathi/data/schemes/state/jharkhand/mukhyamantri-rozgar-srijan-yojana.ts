import { all, ageBetween, any, incomeUpTo, isTrue, labelled, notGovtEmployee, residentOf, when } from "@/lib/engine/build";
import type { Scheme } from "@/lib/types";

const scheme: Scheme = {
  slug: "mukhyamantri-rozgar-srijan-yojana",
  name: { en: "Mukhyamantri Rozgar Srijan Yojana", hi: "मुख्यमंत्री रोज़गार सृजन योजना" },
  aka: ["CMEGP", "CMEGP Jharkhand", "Rojgar Srijan Yojana"],
  shortDescription: {
    en: "ST, SC, BC, minority and disabled youth in Jharkhand can get a business loan of ₹50,000 to ₹25 lakh at 6% interest, with a 40% state subsidy (up to ₹5 lakh).",
    hi: "झारखंड के ST, SC, पिछड़ा वर्ग, अल्पसंख्यक और दिव्यांग युवाओं को 6% ब्याज पर ₹50,000 से ₹25 लाख तक का व्यवसाय ऋण और 40% (अधिकतम ₹5 लाख) राज्य सब्सिडी मिलती है।",
  },
  level: "state",
  state: "jharkhand",
  department: {
    en: "Department of Scheduled Tribe, Scheduled Caste, Minority and Backward Class Welfare, Government of Jharkhand",
    hi: "अनुसूचित जनजाति, अनुसूचित जाति, अल्पसंख्यक एवं पिछड़ा वर्ग कल्याण विभाग, झारखंड सरकार",
  },
  categories: ["business", "skills-employment"],
  tags: ["business loan", "self employment", "subsidy", "cmegp", "st sc obc", "minority", "jharkhand"],
  benefitType: "loan",
  isDBT: false,
  value: { amount: 2500000, period: "one-time", kind: "loan" },
  ageRange: { min: 18, max: 50 },
  kundliHouse: "business",
  eligibility: all(
    residentOf("jharkhand"),
    ...ageBetween(18, 50),
    labelled(any(when("caste", "in", ["st", "pvtg", "sc", "obc"]), isTrue("minority"), isTrue("disabled")), {
      en: "Belongs to ST, SC, Backward Class or a minority community, or has a disability",
      hi: "ST, SC, पिछड़ा वर्ग या अल्पसंख्यक समुदाय से हों, या दिव्यांग हों",
    }),
    incomeUpTo(500_000),
    labelled(notGovtEmployee(), { en: "Not in government service", hi: "सरकारी नौकरी में न हों" }),
  ),

  details: {
    en: [
      "Mukhyamantri Rozgar Srijan Yojana (CMEGP) gives loans and a subsidy to young people from ST, SC, Backward Class, minority and disabled groups to start their own business or self-employment.",
      "Loans range from ₹50,000 to ₹25 lakh at 6% interest a year. The state gives a subsidy of 40% of the loan, up to ₹5 lakh, and interest is charged only on the amount left after the subsidy and your own share.",
      "The scheme is run by the ST, SC, Minority and BC Welfare Department through the state's tribal, SC and minority development corporations (JSTCDC, SCDC and JSMFDC). The money must be used for an income-earning activity, not for personal spending.",
    ],
    hi: [
      "मुख्यमंत्री रोज़गार सृजन योजना (CMEGP) ST, SC, पिछड़ा वर्ग, अल्पसंख्यक और दिव्यांग युवाओं को अपना व्यवसाय या स्वरोज़गार शुरू करने के लिए ऋण और सब्सिडी देती है।",
      "ऋण ₹50,000 से ₹25 लाख तक मिलता है, जिस पर सालाना 6% ब्याज है। राज्य ऋण का 40% (अधिकतम ₹5 लाख) सब्सिडी देता है, और ब्याज सिर्फ़ सब्सिडी और आपके अपने हिस्से को घटाने के बाद बची रकम पर लगता है।",
      "यह योजना ST, SC, अल्पसंख्यक एवं पिछड़ा वर्ग कल्याण विभाग राज्य के आदिवासी, SC और अल्पसंख्यक विकास निगमों (JSTCDC, SCDC और JSMFDC) के ज़रिए चलाता है। पैसा सिर्फ़ कमाई वाले काम में लगाना है, निजी ख़र्च में नहीं।",
    ],
  },
  benefits: {
    en: [
      "Loan from ₹50,000 to ₹25 lakh at 6% interest a year.",
      "State subsidy of 40% of the loan, up to ₹5 lakh.",
      "Loans up to ₹50,000: no own contribution and no guarantor needed.",
      "Loans above ₹50,000: you put in 10%, the loan covers 90%, and one guarantor (or security) is needed.",
    ],
    hi: [
      "₹50,000 से ₹25 लाख तक का ऋण, 6% सालाना ब्याज पर।",
      "ऋण का 40% राज्य सब्सिडी, अधिकतम ₹5 लाख।",
      "₹50,000 तक के ऋण पर: अपना कोई हिस्सा नहीं और गारंटर की ज़रूरत नहीं।",
      "₹50,000 से ज़्यादा के ऋण पर: 10% आपको लगाना है, 90% ऋण मिलता है, और एक गारंटर (या ज़मानत) चाहिए।",
    ],
  },
  eligibilityText: {
    en: [
      "Permanent resident of Jharkhand.",
      "Aged 18 to 50 years.",
      "Belongs to Scheduled Tribe, Scheduled Caste, Backward Class or a minority community, or is a person with a disability.",
      "Family income up to ₹5 lakh a year.",
      "Not in government service, and has not defaulted on a loan or taken a subsidy for the same purpose before.",
    ],
    hi: [
      "झारखंड के स्थायी निवासी।",
      "उम्र 18 से 50 साल।",
      "अनुसूचित जनजाति, अनुसूचित जाति, पिछड़ा वर्ग या अल्पसंख्यक समुदाय से हों, या दिव्यांग हों।",
      "परिवार की सालाना आय ₹5 लाख तक।",
      "सरकारी नौकरी में न हों, और पहले किसी ऋण में डिफ़ॉल्ट न किया हो या इसी काम के लिए सब्सिडी न ली हो।",
    ],
  },
  exclusions: {
    en: ["People in government service.", "Loan defaulters, or those who have already got a subsidy for the same purpose.", "Using the money for personal or household spending instead of a business."],
    hi: ["सरकारी नौकरी वाले लोग।", "ऋण न चुकाने वाले, या जिन्हें इसी काम के लिए पहले सब्सिडी मिल चुकी है।", "पैसे को व्यवसाय की जगह निजी या घरेलू ख़र्च में लगाना।"],
  },
  applicationProcess: {
    online: {
      en: [
        "Go to cmegp.jharkhand.gov.in, open 'Apply Online' and register.",
        "Log in with your mobile number and password, and fill in your personal and business details.",
        "Upload your documents and submit. Your district welfare office and the development corporation will process it.",
      ],
      hi: [
        "cmegp.jharkhand.gov.in पर 'Apply Online' खोलें और रजिस्टर करें।",
        "मोबाइल नंबर और पासवर्ड से लॉग इन करें, और अपनी निजी व व्यवसाय की जानकारी भरें।",
        "दस्तावेज़ अपलोड करके जमा करें। आपका ज़िला कल्याण कार्यालय और विकास निगम आगे की कार्रवाई करेंगे।",
      ],
    },
  },
  documents: {
    en: [
      "Applicant's photograph",
      "Residence, caste and income certificates (issued online)",
      "Aadhaar and PAN card",
      "First page of the bank passbook",
      "Project proposal (for loans above ₹50,000)",
      "Disability certificate (for Divyang applicants), training certificate if any, self-declaration and guarantor documents if needed",
    ],
    hi: [
      "आवेदक की फ़ोटो",
      "निवास, जाति और आय प्रमाण पत्र (ऑनलाइन जारी)",
      "आधार और पैन कार्ड",
      "बैंक पासबुक का पहला पन्ना",
      "योजना प्रस्ताव (₹50,000 से ज़्यादा के ऋण के लिए)",
      "दिव्यांगता प्रमाण पत्र (दिव्यांग आवेदकों के लिए), प्रशिक्षण प्रमाण पत्र अगर हो, स्व-घोषणा पत्र और ज़रूरत हो तो गारंटर के दस्तावेज़",
    ],
  },
  faqs: [
    {
      q: { en: "How much subsidy will I get on a ₹2 lakh loan?", hi: "₹2 लाख के ऋण पर कितनी सब्सिडी मिलेगी?" },
      a: {
        en: "40% of the loan, which is ₹80,000. The subsidy is 40% at every loan size, capped at ₹5 lakh.",
        hi: "ऋण का 40%, यानी ₹80,000। हर ऋण राशि पर सब्सिडी 40% है, अधिकतम ₹5 लाख।",
      },
    },
    {
      q: { en: "Someone called offering to get my loan approved for a fee. Is that real?", hi: "किसी ने फ़ोन करके पैसे लेकर ऋण मंज़ूर कराने की बात कही। क्या यह सही है?" },
      a: {
        en: "No. The department says it never asks for money by call, message or email. Report such calls to your district welfare office.",
        hi: "नहीं। विभाग के अनुसार फ़ोन, मैसेज या ईमेल से कभी पैसे नहीं माँगे जाते। ऐसे फ़ोन की शिकायत अपने ज़िला कल्याण कार्यालय में करें।",
      },
    },
  ],

  officialUrl: "https://cmegp.jharkhand.gov.in/",
  sources: [
    "https://cmegp.jharkhand.gov.in/index.php/WebSetup/Aboutus",
    "https://cmegp.jharkhand.gov.in/index.php/WebSetup/Howtoapply",
    "https://finance.jharkhand.gov.in/pdf/Budget_2026_27/Budget_Speech.pdf",
  ],
  lastVerified: "2026-10-06",
  launchedYear: 2021,
  status: "active",
};

export default scheme;
