import { all, ageBetween, female, incomeUpTo, labelled, residentOf, when } from "@/lib/engine/build";
import type { Scheme } from "@/lib/types";

const scheme: Scheme = {
  slug: "manaswini-scheme",
  tier: "compact",
  name: { en: "Manaswini Scheme", hi: "मनस्विनी योजना" },
  aka: ["Manaswini", "Manasvini pension"],
  shortDescription: {
    en: "Unmarried and divorced women in Karnataka aged 40 to 64 with a yearly income below ₹32,000 get a pension of ₹800 a month.",
    hi: "कर्नाटक में 40 से 64 साल की अविवाहित और तलाक़शुदा महिलाओं को, जिनकी सालाना आय ₹32,000 से कम है, हर महीने ₹800 पेंशन मिलती है।",
  },
  level: "state",
  state: "karnataka",
  department: {
    en: "Directorate of Social Security and Pensions, Revenue Department, Government of Karnataka",
    hi: "सामाजिक सुरक्षा और पेंशन निदेशालय, राजस्व विभाग, कर्नाटक सरकार",
  },
  categories: ["pension-insurance", "women-child"],
  tags: ["unmarried women", "divorced", "single women", "pension", "karnataka"],
  benefitType: "pension",
  isDBT: true,
  value: { amount: 800, period: "monthly", kind: "pension" },
  ageRange: { min: 40, max: 64 },
  kundliHouse: "women-family",
  eligibility: all(
    residentOf("karnataka"),
    female(),
    when("marital", "in", ["never-married", "divorced"]),
    ...ageBetween(40, 64),
    labelled(incomeUpTo(32_000), { en: "Yearly income is below ₹32,000", hi: "सालाना आय ₹32,000 से कम हो" }),
  ),

  details: {
    en: [
      "Manaswini is a Karnataka pension for single women who have no husband to depend on: women who never married and divorced women. It started in 2013.",
      "It is paid every month by the Directorate of Social Security and Pensions, for women who do not get any other government pension.",
    ],
    hi: [
      "मनस्विनी कर्नाटक की पेंशन है उन अकेली महिलाओं के लिए जिनके पास सहारे के लिए पति नहीं है: जिन्होंने कभी शादी नहीं की और तलाक़शुदा महिलाएँ। यह 2013 में शुरू हुई।",
      "सामाजिक सुरक्षा और पेंशन निदेशालय इसका हर महीने भुगतान करता है, उन महिलाओं को जिन्हें कोई दूसरी सरकारी पेंशन नहीं मिलती।",
    ],
  },
  benefits: {
    en: ["₹800 pension every month.", "Paid into your bank or post office account."],
    hi: ["हर महीने ₹800 पेंशन।", "पैसा आपके बैंक या डाकघर खाते में आता है।"],
  },
  eligibilityText: {
    en: [
      "An unmarried or divorced woman living in Karnataka.",
      "Aged 40 to 64 years.",
      "Yearly income below ₹32,000, in both rural and urban areas.",
      "Not getting an old age, widow, Sandhya Suraksha, Devadasi or disability pension.",
    ],
    hi: [
      "कर्नाटक में रहने वाली अविवाहित या तलाक़शुदा महिला।",
      "उम्र 40 से 64 साल।",
      "सालाना आय ₹32,000 से कम, गाँव और शहर दोनों में।",
      "वृद्धावस्था, विधवा, संध्या सुरक्षा, देवदासी या दिव्यांग पेंशन न मिल रही हो।",
    ],
  },
  applicationProcess: {
    offline: {
      en: [
        "Apply at the Atalji Janasnehi Kendra (Nadakacheri) at your hobli or taluk office.",
        "Attach a BPL card or income certificate, age and address proof, a self-declaration that you are unmarried or divorced, Aadhaar and bank details.",
        "After verification, the Tahsildar sanctions the pension.",
      ],
      hi: [
        "अपने होबली या तालुक दफ़्तर के अटलजी जनस्नेही केंद्र (नाडकचेरी) पर आवेदन करें।",
        "BPL कार्ड या आय प्रमाण पत्र, उम्र और पते का सबूत, अविवाहित या तलाक़शुदा होने का स्व-घोषणा पत्र, आधार और बैंक विवरण लगाएँ।",
        "जाँच के बाद तहसीलदार पेंशन मंज़ूर करते हैं।",
      ],
    },
  },
  documents: {
    en: [
      "BPL card or income certificate",
      "Voter ID or other age and address proof",
      "Self-declaration of being unmarried or divorced",
      "Aadhaar card",
      "Bank or post office account details",
    ],
    hi: [
      "BPL कार्ड या आय प्रमाण पत्र",
      "वोटर ID या उम्र और पते का कोई दूसरा सबूत",
      "अविवाहित या तलाक़शुदा होने का स्व-घोषणा पत्र",
      "आधार कार्ड",
      "बैंक या डाकघर खाते का विवरण",
    ],
  },

  officialUrl: "https://dssp.karnataka.gov.in/dssp/Manaswini.aspx",
  sources: ["https://dssp.karnataka.gov.in/dssp/Manaswini.aspx", "https://dssp.karnataka.gov.in/dssp/home_page.aspx"],
  lastVerified: "2026-10-06",
  launchedYear: 2013,
  status: "active",
};

export default scheme;
