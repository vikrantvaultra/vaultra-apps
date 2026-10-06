import { all, any, female, minAge, when, labelled } from "@/lib/engine/build";
import type { Scheme } from "@/lib/types";

const scheme: Scheme = {
  slug: "stand-up-india",
  name: { en: "Stand-Up India", hi: "स्टैंड-अप इंडिया" },
  aka: ["Stand Up India Scheme"],
  shortDescription: {
    en: "Bank loans of ₹10 lakh to ₹1 crore for SC, ST and women entrepreneurs setting up their first business. A revamped version has been announced.",
    hi: "SC, ST और महिला उद्यमियों को पहला कारोबार शुरू करने के लिए ₹10 लाख से ₹1 करोड़ तक का बैंक लोन। इसका नया रूप घोषित हुआ है।",
  },
  level: "central",
  ministry: "finance",
  categories: ["business", "women-child", "social-welfare"],
  tags: ["loan", "business loan", "women entrepreneur", "sc st", "startup", "new business"],
  benefitType: "loan",
  isDBT: false,
  ageRange: { min: 18 },
  kundliHouse: "business",
  eligibility: all(
    labelled(any(female(), when("caste", "in", ["sc", "st", "pvtg"])), {
      en: "Is a woman, or belongs to a Scheduled Caste or Scheduled Tribe",
      hi: "महिला हों, या अनुसूचित जाति या अनुसूचित जनजाति से हों",
    }),
    minAge(18),
  ),

  details: {
    en: [
      "Stand-Up India helps women and people from Scheduled Castes and Scheduled Tribes start their first business with a bank loan between ₹10 lakh and ₹1 crore. Each bank branch was asked to give such a loan to at least one SC or ST borrower and at least one woman borrower.",
      "The loan is only for a new (greenfield) business in manufacturing, services, trading or farm-allied activities. It can cover both the setting-up cost and working capital, and is repaid over up to 7 years with a break of up to 18 months at the start.",
      "The scheme is run by the Department of Financial Services, Ministry of Finance, through scheduled commercial banks, with SIDBI running the Stand-Up Mitra portal. The original lending period ended in March 2025. In March 2026 the Finance Minister announced a revamped Stand-Up India, so check with your bank whether new loans are open before applying.",
    ],
    hi: [
      "स्टैंड-अप इंडिया महिलाओं और अनुसूचित जाति व जनजाति के लोगों को पहला कारोबार शुरू करने के लिए ₹10 लाख से ₹1 करोड़ तक का बैंक लोन दिलाती है। हर बैंक शाखा से कहा गया था कि वह कम से कम एक SC या ST और कम से कम एक महिला को ऐसा लोन दे।",
      "लोन सिर्फ़ नए (ग्रीनफ़ील्ड) कारोबार के लिए है, चाहे वह निर्माण, सेवा, व्यापार या खेती से जुड़ा काम हो। इसमें काम शुरू करने का खर्च और वर्किंग कैपिटल दोनों शामिल हो सकते हैं, और इसे 7 साल तक में चुकाना होता है, शुरुआत में 18 महीने तक की छूट के साथ।",
      "यह योजना वित्त मंत्रालय का वित्तीय सेवा विभाग अनुसूचित वाणिज्यिक बैंकों के ज़रिए चलाता है, और SIDBI स्टैंड-अप मित्र पोर्टल चलाता है। पहले वाली लोन अवधि मार्च 2025 में ख़त्म हो गई थी। मार्च 2026 में वित्त मंत्री ने स्टैंड-अप इंडिया के नए रूप की घोषणा की, इसलिए आवेदन से पहले बैंक से पूछ लें कि नए लोन खुले हैं या नहीं।",
    ],
  },
  benefits: {
    en: [
      "Composite bank loan (term loan plus working capital) of ₹10 lakh to ₹1 crore.",
      "Covers up to 75% of the project cost (the borrower brings at least 10%).",
      "Repayment over up to 7 years, with a moratorium of up to 18 months.",
      "Working capital up to ₹10 lakh can be drawn as an overdraft, and a RuPay debit card is given for it.",
      "Hand-holding help through the Stand-Up Mitra portal for training, project reports and finding support agencies.",
    ],
    hi: [
      "₹10 लाख से ₹1 करोड़ तक का बैंक लोन (टर्म लोन और वर्किंग कैपिटल मिलाकर)।",
      "प्रोजेक्ट की लागत का 75% तक लोन (कम से कम 10% पैसा आपको ख़ुद लगाना होगा)।",
      "7 साल तक में चुकाने की सुविधा और 18 महीने तक की शुरुआती छूट।",
      "₹10 लाख तक का वर्किंग कैपिटल ओवरड्राफ़्ट के रूप में, इसके लिए RuPay डेबिट कार्ड मिलता है।",
      "स्टैंड-अप मित्र पोर्टल से प्रशिक्षण, प्रोजेक्ट रिपोर्ट और मदद करने वाली संस्थाएँ ढूँढने में सहायता।",
    ],
  },
  eligibilityText: {
    en: [
      "A woman, or a person from a Scheduled Caste or Scheduled Tribe, aged 18 or above.",
      "The loan must be for a first-time (greenfield) business in manufacturing, services, trading or farm-allied activities.",
      "If the business is a company or partnership, at least 51% of the shares and control must be held by an SC/ST person or a woman.",
      "You must not be a defaulter with any bank or financial institution.",
    ],
    hi: [
      "18 साल या उससे अधिक उम्र की महिला, या अनुसूचित जाति या अनुसूचित जनजाति का व्यक्ति।",
      "लोन पहली बार शुरू हो रहे (ग्रीनफ़ील्ड) निर्माण, सेवा, व्यापार या खेती से जुड़े कारोबार के लिए हो।",
      "अगर कारोबार कंपनी या साझेदारी है, तो कम से कम 51% हिस्सा और नियंत्रण SC/ST व्यक्ति या महिला के पास हो।",
      "आप किसी बैंक या वित्तीय संस्था के डिफ़ॉल्टर न हों।",
    ],
  },
  exclusions: {
    en: [
      "Expanding or buying an existing business is not covered: the loan is only for a new venture.",
      "Bank loan defaulters are not eligible.",
      "Men from outside SC/ST communities cannot apply in their own name.",
    ],
    hi: [
      "पहले से चल रहे कारोबार को बढ़ाने या ख़रीदने के लिए लोन नहीं मिलता: यह सिर्फ़ नए काम के लिए है।",
      "बैंक लोन के डिफ़ॉल्टर पात्र नहीं हैं।",
      "SC/ST समुदाय से बाहर के पुरुष अपने नाम से आवेदन नहीं कर सकते।",
    ],
  },
  applicationProcess: {
    online: {
      en: [
        "Go to the Stand-Up Mitra portal (standupmitra.in) and register as a borrower.",
        "Answer the questions about your business idea, location and the loan you need.",
        "Choose a bank branch. Your application goes to that bank, which will contact you for documents.",
      ],
      hi: [
        "स्टैंड-अप मित्र पोर्टल (standupmitra.in) पर जाकर उधारकर्ता के रूप में पंजीकरण करें।",
        "अपने कारोबार के विचार, जगह और ज़रूरी लोन से जुड़े सवालों के जवाब दें।",
        "बैंक शाखा चुनें। आवेदन उस बैंक को चला जाएगा, जो दस्तावेज़ों के लिए आपसे संपर्क करेगा।",
      ],
    },
    offline: {
      en: [
        "Visit a branch of any scheduled commercial bank with your project idea.",
        "Ask for a Stand-Up India loan and fill in the application form.",
        "Submit your documents and project report. The bank appraises the project and decides on the loan.",
      ],
      hi: [
        "अपने प्रोजेक्ट के विचार के साथ किसी भी अनुसूचित वाणिज्यिक बैंक की शाखा में जाएँ।",
        "स्टैंड-अप इंडिया लोन माँगें और आवेदन फ़ॉर्म भरें।",
        "दस्तावेज़ और प्रोजेक्ट रिपोर्ट जमा करें। बैंक प्रोजेक्ट की जाँच करके लोन पर फ़ैसला करेगा।",
      ],
    },
  },
  documents: {
    en: [
      "Aadhaar and PAN card",
      "Caste certificate (for SC/ST applicants)",
      "Address proof",
      "Project report with cost estimates",
      "Quotations for machinery and equipment",
      "Proof of premises (rent agreement or ownership papers)",
    ],
    hi: [
      "आधार और पैन कार्ड",
      "जाति प्रमाण पत्र (SC/ST आवेदकों के लिए)",
      "पते का प्रमाण",
      "लागत के अनुमान के साथ प्रोजेक्ट रिपोर्ट",
      "मशीन और उपकरणों का कोटेशन",
      "जगह का प्रमाण (किरायानामा या मालिकाना काग़ज़)",
    ],
  },
  faqs: [
    {
      q: { en: "Is Stand-Up India open right now?", hi: "क्या स्टैंड-अप इंडिया अभी खुली है?" },
      a: {
        en: "The original lending period ended in March 2025, and the government announced a revamped version in March 2026. Ask your bank branch or check standupmitra.in for the latest position before you prepare your application.",
        hi: "पहले वाली लोन अवधि मार्च 2025 में ख़त्म हो गई थी, और सरकार ने मार्च 2026 में इसके नए रूप की घोषणा की। आवेदन तैयार करने से पहले अपनी बैंक शाखा से पूछें या standupmitra.in पर ताज़ा जानकारी देखें।",
      },
    },
    {
      q: { en: "I already run a shop. Can I get this loan to expand it?", hi: "मेरी पहले से दुकान है। क्या उसे बढ़ाने के लिए यह लोन मिलेगा?" },
      a: {
        en: "No. Stand-Up India is only for a first-time venture. For an existing business, look at a MUDRA loan instead.",
        hi: "नहीं। स्टैंड-अप इंडिया सिर्फ़ पहली बार के कारोबार के लिए है। चल रहे कारोबार के लिए मुद्रा लोन देखें।",
      },
    },
  ],

  officialUrl: "https://www.standupmitra.in/",
  sources: [
    "https://www.standupmitra.in/",
    "https://www.newsonair.gov.in/fm-nirmala-sitharaman-announces-revamped-stand-up-india-scheme-for-sc-st-and-women-entrepreneurs",
    "https://www.pib.gov.in/PressReleaseIframePage.aspx?PRID=1913705",
  ],
  lastVerified: "2026-10-06",
  launchedYear: 2016,
  status: "check-status",
};

export default scheme;
