import { all, ageBetween, incomeUpTo, labelled, residentOf, when } from "@/lib/engine/build";
import type { Scheme } from "@/lib/types";

const scheme: Scheme = {
  slug: "mythri-scheme",
  tier: "compact",
  name: { en: "Mythri Scheme (Transgender Pension)", hi: "मैत्री योजना (ट्रांसजेंडर पेंशन)" },
  aka: ["Mythri", "Maithri", "transgender pension Karnataka"],
  shortDescription: {
    en: "Transgender persons in Karnataka aged 25 to 64 with a yearly income below ₹32,000 get a pension of ₹800 every month.",
    hi: "कर्नाटक में 25 से 64 साल के ट्रांसजेंडर व्यक्तियों को, जिनकी सालाना आय ₹32,000 से कम है, हर महीने ₹800 पेंशन मिलती है।",
  },
  level: "state",
  state: "karnataka",
  department: {
    en: "Directorate of Social Security and Pensions, Revenue Department, Government of Karnataka",
    hi: "सामाजिक सुरक्षा और पेंशन निदेशालय, राजस्व विभाग, कर्नाटक सरकार",
  },
  categories: ["pension-insurance", "social-welfare"],
  tags: ["transgender", "pension", "mythri", "monthly support", "karnataka"],
  benefitType: "pension",
  isDBT: true,
  value: { amount: 800, period: "monthly", kind: "pension" },
  ageRange: { min: 25, max: 64 },
  kundliHouse: "women-family",
  eligibility: all(
    residentOf("karnataka"),
    when("gender", "eq", "transgender"),
    ...ageBetween(25, 64),
    labelled(incomeUpTo(32_000), { en: "Yearly income is below ₹32,000", hi: "सालाना आय ₹32,000 से कम हो" }),
  ),

  details: {
    en: [
      "Mythri is a Karnataka pension for transgender persons in hardship, including hijras, kothis, jogappas and others. It started in 2013.",
      "The Directorate of Social Security and Pensions pays it every month to those who do not get any other pension.",
    ],
    hi: [
      "मैत्री कर्नाटक की पेंशन है मुश्किल हालात में जी रहे ट्रांसजेंडर व्यक्तियों के लिए, जिनमें हिजड़ा, कोथी, जोगप्पा और दूसरे शामिल हैं। यह 2013 में शुरू हुई।",
      "सामाजिक सुरक्षा और पेंशन निदेशालय हर महीने यह पेंशन देता है, उन लोगों को जिन्हें कोई दूसरी पेंशन नहीं मिलती।",
    ],
  },
  benefits: {
    en: ["₹800 pension every month.", "Paid into your bank or post office account."],
    hi: ["हर महीने ₹800 पेंशन।", "पैसा आपके बैंक या डाकघर खाते में आता है।"],
  },
  eligibilityText: {
    en: [
      "A transgender person living in Karnataka.",
      "Aged 25 to 64 years.",
      "Yearly income below ₹32,000, in both rural and urban areas.",
      "Not getting any other government or private monthly pension.",
    ],
    hi: [
      "कर्नाटक में रहने वाले ट्रांसजेंडर व्यक्ति।",
      "उम्र 25 से 64 साल।",
      "सालाना आय ₹32,000 से कम, गाँव और शहर दोनों में।",
      "कोई दूसरी सरकारी या निजी मासिक पेंशन न मिल रही हो।",
    ],
  },
  applicationProcess: {
    offline: {
      en: [
        "Apply at the Atalji Janasnehi Kendra (Nadakacheri) at your hobli or taluk office.",
        "Attach a BPL card or income certificate, age and address proof, a membership certificate from a recognised community organisation, Aadhaar and bank details.",
        "After verification, the Tahsildar sanctions the pension.",
      ],
      hi: [
        "अपने होबली या तालुक दफ़्तर के अटलजी जनस्नेही केंद्र (नाडकचेरी) पर आवेदन करें।",
        "BPL कार्ड या आय प्रमाण पत्र, उम्र और पते का सबूत, किसी मान्य समुदाय संगठन का सदस्यता प्रमाण पत्र, आधार और बैंक विवरण लगाएँ।",
        "जाँच के बाद तहसीलदार पेंशन मंज़ूर करते हैं।",
      ],
    },
  },

  officialUrl: "https://dssp.karnataka.gov.in/dssp/mytri.aspx",
  sources: ["https://dssp.karnataka.gov.in/dssp/mytri.aspx", "https://dssp.karnataka.gov.in/dssp/home_page.aspx"],
  lastVerified: "2026-10-06",
  launchedYear: 2013,
  status: "active",
};

export default scheme;
