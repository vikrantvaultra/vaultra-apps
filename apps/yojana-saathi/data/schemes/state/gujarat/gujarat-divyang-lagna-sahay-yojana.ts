import { all, isTrue, residentOf, when } from "@/lib/engine/build";
import type { Scheme } from "@/lib/types";

const scheme: Scheme = {
  slug: "gujarat-divyang-lagna-sahay-yojana",
  tier: "compact",
  name: { en: "Divyang Lagna Sahay Yojana (Gujarat)", hi: "दिव्यांग लग्न सहाय योजना (गुजरात)" },
  aka: ["Disability marriage assistance Gujarat", "Divyang marriage scheme"],
  shortDescription: {
    en: "A person with a disability in Gujarat gets ₹75,000 on marriage; if both partners have a disability, the couple gets ₹1.5 lakh.",
    hi: "गुजरात में दिव्यांग व्यक्ति को शादी पर ₹75,000 मिलते हैं; अगर पति-पत्नी दोनों दिव्यांग हों तो जोड़े को ₹1.5 लाख।",
  },
  level: "state",
  state: "gujarat",
  department: { en: "Social Justice and Empowerment Department (Director of Social Defence), Government of Gujarat", hi: "सामाजिक न्याय एवं अधिकारिता विभाग (समाज सुरक्षा निदेशालय), गुजरात सरकार" },
  categories: ["disability", "social-welfare"],
  tags: ["marriage", "divyang", "disability", "marriage assistance", "gujarat"],
  benefitType: "cash",
  isDBT: true,
  value: { amount: 75000, period: "one-time", kind: "cash" },
  kundliHouse: "women-family",
  eligibility: all(residentOf("gujarat"), isTrue("disabled"), when("disabilityPct", "gte", 40)),

  details: {
    en: [
      "This Gujarat scheme gives a one-time grant to people with disabilities when they marry. When two people with disabilities marry each other, each gets ₹75,000, so the couple gets ₹1,50,000. When a person with a disability marries someone without one, the disabled partner gets ₹75,000.",
      "The minimum disability depends on its type: 40% for most physical and visual disabilities, 71% for hearing impairment, and 50% for conditions such as intellectual disability, mental illness, blood disorders and multiple disabilities.",
    ],
    hi: [
      "गुजरात की यह योजना दिव्यांग लोगों को शादी पर एक बार की सहायता देती है। दो दिव्यांग आपस में शादी करें तो दोनों को ₹75,000-₹75,000, यानी जोड़े को ₹1,50,000 मिलते हैं। दिव्यांग व्यक्ति किसी गैर-दिव्यांग से शादी करे तो दिव्यांग साथी को ₹75,000 मिलते हैं।",
      "कम से कम कितनी दिव्यांगता चाहिए, यह उसके प्रकार पर निर्भर है: ज़्यादातर शारीरिक और दृष्टि दिव्यांगता में 40%, सुनने की दिव्यांगता में 71%, और बौद्धिक दिव्यांगता, मानसिक बीमारी, रक्त विकार और बहु-दिव्यांगता जैसी स्थितियों में 50%।",
    ],
  },
  benefits: {
    en: ["₹75,000 to the partner with a disability.", "₹1,50,000 in total if both partners have a disability.", "Given once per person."],
    hi: ["दिव्यांग साथी को ₹75,000।", "दोनों साथी दिव्यांग हों तो कुल ₹1,50,000।", "हर व्यक्ति को एक ही बार।"],
  },
  eligibilityText: {
    en: [
      "You live in Gujarat and have a certified disability at or above the level set for your type of disability.",
      "At marriage the bride is over 18 and the groom over 21.",
      "Apply within two years of the marriage, in the district where the couple lives.",
    ],
    hi: [
      "आप गुजरात में रहते हों और आपकी दिव्यांगता अपने प्रकार के लिए तय स्तर या उससे ज़्यादा हो, जिसका प्रमाण पत्र हो।",
      "शादी के समय दुल्हन 18 से ज़्यादा और दूल्हा 21 से ज़्यादा उम्र का हो।",
      "शादी के दो साल के अंदर, उस ज़िले में आवेदन करें जहाँ जोड़ा रहता है।",
    ],
  },
  applicationProcess: {
    online: {
      en: [
        "Apply on esamajkalyan.gujarat.gov.in, or at an e-Gram centre through Digital Gujarat (Digital Seva Setu).",
        "Upload the marriage certificate, disability certificate(s), age proofs and bank details.",
        "The District Social Defence Officer approves the application.",
      ],
      hi: [
        "esamajkalyan.gujarat.gov.in पर, या डिजिटल गुजरात (डिजिटल सेवा सेतु) के ज़रिए ई-ग्राम केंद्र पर आवेदन करें।",
        "विवाह प्रमाण पत्र, दिव्यांगता प्रमाण पत्र, उम्र के प्रमाण और बैंक विवरण अपलोड करें।",
        "ज़िला समाज सुरक्षा अधिकारी आवेदन मंज़ूर करते हैं।",
      ],
    },
  },

  officialUrl: "https://esamajkalyan.gujarat.gov.in/",
  sources: ["https://sje.gujarat.gov.in/dsd/showpage.aspx?contentid=14734", "https://dbt.gujarat.gov.in/mainpageschemelist"],
  lastVerified: "2026-10-06",
  launchedYear: 2016,
  status: "active",
};

export default scheme;
