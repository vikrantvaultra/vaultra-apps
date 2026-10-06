import { all, incomeUpTo, labelled, minAge, residentOf } from "@/lib/engine/build";
import type { Scheme } from "@/lib/types";

const scheme: Scheme = {
  slug: "sandhya-suraksha-yojana",
  tier: "full",
  overlapGroup: "old-age-pension",
  name: { en: "Sandhya Suraksha Yojana", hi: "संध्या सुरक्षा योजना" },
  aka: ["Sandhya Suraksha", "Karnataka old age pension", "SSY Karnataka"],
  shortDescription: {
    en: "Poor elderly people in Karnataka aged 65 and above, such as small farmers, farm labourers, weavers and fishers, get a pension of ₹1,200 every month.",
    hi: "कर्नाटक में 65 साल या उससे ज़्यादा उम्र के ग़रीब बुज़ुर्गों, जैसे छोटे किसान, खेतिहर मज़दूर, बुनकर और मछुआरे, को हर महीने ₹1,200 पेंशन मिलती है।",
  },
  level: "state",
  state: "karnataka",
  department: {
    en: "Directorate of Social Security and Pensions, Revenue Department, Government of Karnataka",
    hi: "सामाजिक सुरक्षा और पेंशन निदेशालय, राजस्व विभाग, कर्नाटक सरकार",
  },
  categories: ["pension-insurance", "social-welfare"],
  tags: ["old age pension", "senior citizen", "pension", "farmer", "weaver", "karnataka"],
  benefitType: "pension",
  isDBT: true,
  value: { amount: 1200, period: "monthly", kind: "pension" },
  ageRange: { min: 65 },
  kundliHouse: "senior",
  eligibility: all(
    residentOf("karnataka"),
    minAge(65),
    labelled(incomeUpTo(32_000), {
      en: "Combined yearly income of husband and wife is below ₹32,000",
      hi: "पति-पत्नी की कुल सालाना आय ₹32,000 से कम हो",
    }),
  ),

  details: {
    en: [
      "Sandhya Suraksha Yojana is Karnataka's own monthly pension for poor elderly people who worked in farming or other unorganised jobs. It started in 2007.",
      "It is meant for people aged 65 or more, such as small and marginal farmers, farm labourers, weavers, fishers and other unorganised-sector workers, whose household income is very low.",
      "The Directorate of Social Security and Pensions runs it through the taluk offices. The pension is paid every month into your bank or post office account.",
    ],
    hi: [
      "संध्या सुरक्षा योजना कर्नाटक सरकार की अपनी मासिक पेंशन है, उन ग़रीब बुज़ुर्गों के लिए जिन्होंने खेती या दूसरे असंगठित कामों में ज़िंदगी बिताई। यह 2007 में शुरू हुई।",
      "यह 65 साल या उससे ज़्यादा उम्र के लोगों के लिए है, जैसे छोटे और सीमांत किसान, खेतिहर मज़दूर, बुनकर, मछुआरे और दूसरे असंगठित क्षेत्र के कामगार, जिनके घर की आमदनी बहुत कम है।",
      "इसे सामाजिक सुरक्षा और पेंशन निदेशालय तालुक दफ़्तरों के ज़रिए चलाता है। पेंशन हर महीने आपके बैंक या डाकघर खाते में आती है।",
    ],
  },
  benefits: {
    en: [
      "₹1,200 pension every month.",
      "That adds up to ₹14,400 a year.",
      "Paid for life, straight into your bank or post office account.",
    ],
    hi: [
      "हर महीने ₹1,200 पेंशन।",
      "साल भर में कुल ₹14,400।",
      "जीवन भर, सीधे आपके बैंक या डाकघर खाते में।",
    ],
  },
  eligibilityText: {
    en: [
      "Resident of Karnataka, aged 65 years or more.",
      "A small or marginal farmer, farm labourer, weaver, fisher or other unorganised-sector worker (registered construction workers are covered by their own board instead).",
      "Combined yearly income of husband and wife is below ₹32,000.",
      "Combined bank and post office savings of husband and wife are not more than ₹10,000.",
      "You can still apply if you have grown-up sons, as long as they are not supporting you.",
    ],
    hi: [
      "कर्नाटक के निवासी, उम्र 65 साल या उससे ज़्यादा।",
      "छोटे या सीमांत किसान, खेतिहर मज़दूर, बुनकर, मछुआरे या दूसरे असंगठित क्षेत्र के कामगार (पंजीकृत निर्माण मज़दूरों के लिए उनका अपना बोर्ड है)।",
      "पति-पत्नी की कुल सालाना आय ₹32,000 से कम हो।",
      "पति-पत्नी की बैंक और डाकघर में कुल जमा ₹10,000 से ज़्यादा न हो।",
      "बड़े बेटे होने पर भी आवेदन कर सकते हैं, अगर वे आपका ख़र्च नहीं उठाते।",
    ],
  },
  exclusions: {
    en: [
      "People who already get any other pension, from the government or a private source.",
      "Households with income or savings above the limits.",
      "Registered construction workers (they get a pension from the construction workers' welfare board).",
    ],
    hi: [
      "जिन्हें पहले से सरकार या किसी निजी स्रोत से कोई दूसरी पेंशन मिलती है।",
      "जिनके घर की आय या बचत तय सीमा से ज़्यादा है।",
      "पंजीकृत निर्माण मज़दूर (उन्हें निर्माण मज़दूर कल्याण बोर्ड से पेंशन मिलती है)।",
    ],
  },
  applicationProcess: {
    offline: {
      en: [
        "Go to the Atalji Janasnehi Kendra (Nadakacheri) at your hobli or taluk office.",
        "Fill in the pension form and attach your age proof, residence proof, Aadhaar and bank or post office details.",
        "The village accountant and revenue inspector check your details, and the Tahsildar approves the pension.",
        "Keep the acknowledgement. You can track the status on the DSSP website.",
      ],
      hi: [
        "अपने होबली या तालुक दफ़्तर के अटलजी जनस्नेही केंद्र (नाडकचेरी) पर जाएँ।",
        "पेंशन फ़ॉर्म भरें और उम्र का सबूत, निवास का सबूत, आधार और बैंक या डाकघर खाते का विवरण लगाएँ।",
        "ग्राम लेखाकार और राजस्व निरीक्षक आपकी जानकारी जाँचते हैं, फिर तहसीलदार पेंशन मंज़ूर करते हैं।",
        "पावती संभाल कर रखें। स्थिति DSSP वेबसाइट पर देख सकते हैं।",
      ],
    },
  },
  documents: {
    en: ["Residence certificate", "Age proof", "Aadhaar card", "Bank or post office account details", "Ration card number"],
    hi: ["निवास प्रमाण पत्र", "उम्र का सबूत", "आधार कार्ड", "बैंक या डाकघर खाते का विवरण", "राशन कार्ड नंबर"],
  },
  faqs: [
    {
      q: { en: "Can I get this along with the central old age pension (IGNOAPS)?", hi: "क्या यह केंद्र की वृद्धावस्था पेंशन (IGNOAPS) के साथ मिल सकती है?" },
      a: {
        en: "No. Sandhya Suraksha is for people who get no other pension. If you qualify for the old age pension for BPL families, you get that one instead.",
        hi: "नहीं। संध्या सुरक्षा उन्हीं के लिए है जिन्हें कोई दूसरी पेंशन नहीं मिलती। अगर आप BPL परिवारों की वृद्धावस्था पेंशन के हक़दार हैं, तो आपको वही मिलेगी।",
      },
    },
    {
      q: { en: "My pension has stopped. What should I do?", hi: "मेरी पेंशन आनी बंद हो गई है। क्या करूँ?" },
      a: {
        en: "Check that your Aadhaar is linked to your bank account and that your details match. You can check the payment status on the DSSP website or ask at the taluk office.",
        hi: "देखें कि आपका आधार बैंक खाते से जुड़ा है और जानकारी सही है। भुगतान की स्थिति DSSP वेबसाइट पर देख सकते हैं या तालुक दफ़्तर में पूछ सकते हैं।",
      },
    },
  ],

  officialUrl: "https://dssp.karnataka.gov.in/dssp/Sandhya_Suraksha.aspx",
  sources: [
    "https://dssp.karnataka.gov.in/dssp/Sandhya_Suraksha.aspx",
    "https://dssp.karnataka.gov.in/dssp/home_page.aspx",
  ],
  lastVerified: "2026-10-06",
  launchedYear: 2007,
  status: "active",
};

export default scheme;
