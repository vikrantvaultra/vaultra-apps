import { all, labelled, notGovtEmployee, notTaxPayer, residentOf, when } from "@/lib/engine/build";
import type { Scheme } from "@/lib/types";

const scheme: Scheme = {
  slug: "annadata-sukhibhava",
  overlapGroup: "farmer-income",
  name: { en: "Annadata Sukhibhava", hi: "अन्नदाता सुखीभव" },
  aka: ["PM-KISAN Annadata Sukhibhava", "Annadatha Sukhibhava", "AP farmer 20000"],
  shortDescription: {
    en: "Farmer families in Andhra Pradesh get ₹20,000 a year in three instalments: ₹14,000 from the state plus ₹6,000 from PM-KISAN, paid into their bank account.",
    hi: "आंध्र प्रदेश के किसान परिवारों को साल में ₹20,000 तीन किस्तों में मिलते हैं: ₹14,000 राज्य से और ₹6,000 PM-KISAN से, सीधे बैंक खाते में।",
  },
  level: "state",
  state: "andhra-pradesh",
  department: {
    en: "Agriculture Department, Government of Andhra Pradesh",
    hi: "कृषि विभाग, आंध्र प्रदेश सरकार",
  },
  categories: ["agriculture"],
  tags: ["farmer", "kisan", "annadata", "20000", "pm kisan", "tenant farmer", "andhra pradesh"],
  benefitType: "cash",
  isDBT: true,
  value: { amount: 14000, period: "yearly", kind: "cash" },
  kundliHouse: "farming",
  eligibility: all(
    residentOf("andhra-pradesh"),
    when("occupation", "eq", "farmer"),
    labelled(notTaxPayer(), { en: "No one in the family paid income tax last year", hi: "परिवार में किसी ने पिछले साल आयकर न दिया हो" }),
    labelled(notGovtEmployee(), { en: "No one in the family is a government employee", hi: "परिवार में कोई सरकारी कर्मचारी न हो" }),
  ),

  details: {
    en: [
      "Annadata Sukhibhava is Andhra Pradesh's income support scheme for farmers, started in 2025. Each eligible farmer family gets ₹20,000 a year. Of this, ₹6,000 is the central PM-KISAN money and ₹14,000 is added by the state.",
      "The money comes in three instalments by DBT. For example, the first instalment for the 2026 kharif season, ₹7,000 per farmer, was paid on 20 June 2026 to about 46.85 lakh farmers.",
      "Land-owning farmers and families farming forest land under Recognition of Forest Rights (RoFR) pattas are covered. The government has also said tenant farmers with a valid crop cultivator card can be included.",
    ],
    hi: [
      "अन्नदाता सुखीभव आंध्र प्रदेश की किसानों के लिए आय सहायता योजना है, जो 2025 में शुरू हुई। हर पात्र किसान परिवार को साल में ₹20,000 मिलते हैं। इसमें ₹6,000 केंद्र की PM-KISAN योजना से और ₹14,000 राज्य सरकार जोड़ती है।",
      "पैसा तीन किस्तों में DBT से आता है। जैसे, 2026 ख़रीफ़ सीज़न की पहली किस्त, हर किसान को ₹7,000, 20 जून 2026 को लगभग 46.85 लाख किसानों को दी गई।",
      "ज़मीन के मालिक किसान और वन अधिकार (RoFR) पट्टे वाली ज़मीन पर खेती करने वाले परिवार इसमें शामिल हैं। सरकार ने कहा है कि वैध फ़सल कृषक कार्ड (CCRC) वाले बटाईदार किसान भी शामिल हो सकते हैं।",
    ],
  },
  benefits: {
    en: [
      "₹20,000 a year in total for each eligible farmer family.",
      "₹14,000 of this comes from the state, on top of ₹6,000 from PM-KISAN.",
      "Paid in three instalments straight into your Aadhaar-linked bank account.",
    ],
    hi: [
      "हर पात्र किसान परिवार को साल में कुल ₹20,000।",
      "इसमें ₹14,000 राज्य देता है, PM-KISAN के ₹6,000 के ऊपर।",
      "पैसा तीन किस्तों में सीधे आपके आधार से जुड़े बैंक खाते में आता है।",
    ],
  },
  eligibilityText: {
    en: [
      "A farmer family in Andhra Pradesh that owns farm land, or farms land under an RoFR (forest rights) patta.",
      "Tenant farmers holding a valid CCRC (crop cultivator rights card) may also be covered.",
      "Land records and bank account must be linked to Aadhaar and verified by the village agriculture assistant.",
    ],
    hi: [
      "आंध्र प्रदेश का किसान परिवार जिसके पास खेती की ज़मीन है, या जो RoFR (वन अधिकार) पट्टे वाली ज़मीन पर खेती करता है।",
      "वैध CCRC (फ़सल कृषक अधिकार कार्ड) वाले बटाईदार किसान भी शामिल हो सकते हैं।",
      "ज़मीन के रिकॉर्ड और बैंक खाता आधार से जुड़े हों और गाँव के कृषि सहायक ने इनकी जाँच की हो।",
    ],
  },
  exclusions: {
    en: [
      "Anyone in the family paid income tax in the last year.",
      "Anyone in the family is a government employee or holds a constitutional post.",
      "Working professionals such as doctors and lawyers.",
      "Well-off families that the rules leave out.",
    ],
    hi: [
      "परिवार में किसी ने पिछले साल आयकर दिया हो।",
      "परिवार में कोई सरकारी कर्मचारी हो या संवैधानिक पद पर हो।",
      "डॉक्टर और वकील जैसे पेशेवर।",
      "नियमों के तहत बाहर रखे गए संपन्न परिवार।",
    ],
  },
  applicationProcess: {
    online: {
      en: [
        "Go to annadathasukhibhava.ap.gov.in.",
        "Use 'Know Your Status' and enter your Aadhaar number to see if you are on the list and whether payments have been made.",
      ],
      hi: [
        "annadathasukhibhava.ap.gov.in पर जाएँ।",
        "'Know Your Status' में अपना आधार नंबर डालकर देखें कि आपका नाम सूची में है या नहीं और पैसा आया या नहीं।",
      ],
    },
    offline: {
      en: [
        "Visit your village Rythu Seva Kendram (farmer service centre) or the Swarna Grama secretariat.",
        "Give your Aadhaar, land documents (or CCRC / RoFR patta) and bank details to the agriculture assistant to be added to the list.",
        "Make sure your bank account is linked to Aadhaar and NPCI so the money can reach you.",
      ],
      hi: [
        "अपने गाँव के रैतु सेवा केंद्र (किसान सेवा केंद्र) या स्वर्ण ग्राम सचिवालय जाएँ।",
        "सूची में नाम जुड़वाने के लिए कृषि सहायक को आधार, ज़मीन के काग़ज़ (या CCRC / RoFR पट्टा) और बैंक की जानकारी दें।",
        "ध्यान रखें कि आपका बैंक खाता आधार और NPCI से जुड़ा हो, ताकि पैसा पहुँच सके।",
      ],
    },
  },
  documents: {
    en: ["Aadhaar card", "Land documents (pattadar passbook), RoFR patta or CCRC card", "Aadhaar-linked bank account details"],
    hi: ["आधार कार्ड", "ज़मीन के काग़ज़ (पट्टादार पासबुक), RoFR पट्टा या CCRC कार्ड", "आधार से जुड़े बैंक खाते की जानकारी"],
  },
  faqs: [
    {
      q: { en: "Do I need to apply for PM-KISAN separately?", hi: "क्या PM-KISAN के लिए अलग से आवेदन करना होगा?" },
      a: {
        en: "If you are a land-owning farmer, you should be registered on PM-KISAN to get the central ₹6,000. The state's ₹14,000 is paid through Annadata Sukhibhava. Ask your agriculture assistant to check both.",
        hi: "अगर आप ज़मीन के मालिक किसान हैं, तो केंद्र के ₹6,000 के लिए PM-KISAN में पंजीकरण होना चाहिए। राज्य के ₹14,000 अन्नदाता सुखीभव से मिलते हैं। अपने कृषि सहायक से दोनों की जाँच कराएँ।",
      },
    },
    {
      q: { en: "I'm a tenant farmer. Can I get it?", hi: "मैं बटाईदार किसान हूँ। क्या मुझे मिलेगा?" },
      a: {
        en: "The government has said tenant farmers with a valid CCRC card can be covered. Get your CCRC card from the village secretariat and ask the agriculture assistant to add you.",
        hi: "सरकार ने कहा है कि वैध CCRC कार्ड वाले बटाईदार किसान शामिल हो सकते हैं। गाँव सचिवालय से CCRC कार्ड बनवाएँ और कृषि सहायक से नाम जुड़वाएँ।",
      },
    },
  ],

  officialUrl: "https://annadathasukhibhava.ap.gov.in/",
  sources: [
    "https://annadathasukhibhava.ap.gov.in/",
    "https://newsonair.gov.in/andhra-pradesh-3125-crore-rupees-credited-to-46-85-lakh-farmers-under-pm-kisan-annadata-sukhibhava-scheme/",
    "https://prsindia.org/budgets/states/andhra-pradesh-budget-analysis-2026-27",
    "https://www.ap7am.com/en/100227/ap-government-announces-good-news-for-farmers-and-tenant-farmers",
  ],
  lastVerified: "2026-10-06",
  launchedYear: 2025,
  status: "active",
};

export default scheme;
