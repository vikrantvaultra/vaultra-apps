import { all, when } from "@/lib/engine/build";
import type { Scheme } from "@/lib/types";

const scheme: Scheme = {
  slug: "kisan-credit-card",
  name: { en: "Kisan Credit Card (with interest subvention)", hi: "किसान क्रेडिट कार्ड (ब्याज छूट के साथ)" },
  aka: ["KCC", "MISS", "Modified Interest Subvention Scheme"],
  shortDescription: {
    en: "Get crop and farm loans on a Kisan Credit Card at 7% interest, falling to an effective 4% if you repay on time. Open to farmers, fishers and animal-rearers.",
    hi: "किसान क्रेडिट कार्ड पर 7% ब्याज पर खेती का कर्ज़ पाएँ, समय पर चुकाने पर असल ब्याज सिर्फ़ 4%। किसान, मछुआरे और पशुपालक सभी ले सकते हैं।",
  },
  level: "central",
  ministry: "agriculture-farmers-welfare",
  categories: ["agriculture"],
  tags: ["kcc", "crop loan", "farmer loan", "fisheries", "dairy", "interest subvention"],
  benefitType: "loan",
  isDBT: false,
  kundliHouse: "farming",
  eligibility: all(
    when("occupation", "in", ["farmer", "fisher", "livestock-dairy"], {
      en: "You farm, fish or rear animals",
      hi: "आप खेती, मछली पालन या पशुपालन करते हैं",
    }),
  ),

  details: {
    en: [
      "A Kisan Credit Card (KCC) is a revolving credit limit from a bank for your crop costs, after-harvest needs, household needs and farm upkeep. You can withdraw and repay as needed, much like a credit line, and you get a RuPay debit card with it.",
      "Under the government's Modified Interest Subvention Scheme (MISS), short-term KCC loans up to ₹3 lakh come at 7% a year. If you repay on time, you get a further 3% off, so the effective rate is 4%. For animal husbandry and fisheries, the concessional loan is up to ₹2 lakh within that ₹3 lakh.",
      "The Union Budget 2025-26 raised the KCC loan limit under MISS from ₹3 lakh to ₹5 lakh. KCC is offered by public, private, regional rural and cooperative banks, guided by RBI and NABARD.",
    ],
    hi: [
      "किसान क्रेडिट कार्ड (KCC) बैंक की एक घूमती क्रेडिट सीमा है, जिससे फ़सल का खर्च, कटाई के बाद की ज़रूरतें, घर के खर्च और खेती के रखरखाव के लिए पैसा मिलता है। ज़रूरत के हिसाब से निकालें और चुकाएँ, साथ में RuPay डेबिट कार्ड भी मिलता है।",
      "सरकार की संशोधित ब्याज छूट योजना (MISS) में ₹3 लाख तक के अल्पकालिक KCC कर्ज़ पर 7% सालाना ब्याज लगता है। समय पर चुकाने पर 3% की और छूट मिलती है, यानी असल ब्याज 4%। पशुपालन और मछली पालन के लिए इसी ₹3 लाख के भीतर ₹2 लाख तक सस्ता कर्ज़ मिलता है।",
      "केंद्रीय बजट 2025-26 में MISS के तहत KCC कर्ज़ की सीमा ₹3 लाख से बढ़ाकर ₹5 लाख की गई। KCC सरकारी, निजी, क्षेत्रीय ग्रामीण और सहकारी बैंक देते हैं, RBI और NABARD के दिशानिर्देशों के अनुसार।",
    ],
  },
  benefits: {
    en: [
      "Short-term crop loans at 7% interest a year on up to ₹3 lakh.",
      "An extra 3% off for prompt repayment, bringing the effective rate to 4%.",
      "Covers fishers and animal husbandry farmers too (concessional loan up to ₹2 lakh for these).",
      "No collateral needed for agricultural loans up to ₹2 lakh.",
      "Flexible withdrawals with a RuPay card; the limit is reviewed and can be renewed every year.",
    ],
    hi: [
      "₹3 लाख तक के अल्पकालिक फ़सल कर्ज़ पर 7% सालाना ब्याज।",
      "समय पर चुकाने पर 3% अतिरिक्त छूट, यानी असल ब्याज 4%।",
      "मछुआरे और पशुपालक भी शामिल (इनके लिए ₹2 लाख तक सस्ता कर्ज़)।",
      "₹2 लाख तक के कृषि कर्ज़ पर कोई गिरवी नहीं।",
      "RuPay कार्ड से जब चाहे पैसा निकालें; सीमा हर साल जाँची और नवीनीकृत होती है।",
    ],
  },
  eligibilityText: {
    en: [
      "Farmers who own land and cultivate it, including tenant farmers, oral lessees and sharecroppers.",
      "Self-help groups and joint liability groups of farmers.",
      "Fishers and fish farmers (inland, marine and aquaculture), with a pond, boat or licence as needed.",
      "Farmers rearing cattle, buffaloes, goats, sheep, pigs or poultry.",
    ],
    hi: [
      "अपनी ज़मीन पर खेती करने वाले किसान, किराएदार किसान, मौखिक पट्टेदार और बटाईदार भी।",
      "किसानों के स्वयं सहायता समूह और संयुक्त देयता समूह।",
      "मछुआरे और मछली पालक (अंतर्देशीय, समुद्री और जलकृषि), ज़रूरत के हिसाब से तालाब, नाव या लाइसेंस के साथ।",
      "गाय, भैंस, बकरी, भेड़, सूअर या मुर्गी पालने वाले किसान।",
    ],
  },
  exclusions: {
    en: [
      "Interest above the concessional slice (beyond ₹3 lakh) is charged at the bank's normal rate.",
      "The 3% prompt-repayment benefit is lost if you repay late.",
      "Banks decide the final limit based on your land, crops and repayment record.",
    ],
    hi: [
      "₹3 लाख से ऊपर के हिस्से पर बैंक की सामान्य दर से ब्याज लगता है।",
      "देर से चुकाने पर 3% की समय पर भुगतान छूट नहीं मिलती।",
      "आख़िरी सीमा बैंक आपकी ज़मीन, फ़सल और भुगतान के रिकॉर्ड के आधार पर तय करता है।",
    ],
  },
  applicationProcess: {
    online: {
      en: [
        "Open your bank's website or app and look for 'Kisan Credit Card' under agriculture loans.",
        "Fill in your land, crop or livestock/fisheries details and upload the documents.",
        "The bank contacts you to verify and sanction the limit.",
      ],
      hi: [
        "अपने बैंक की वेबसाइट या ऐप में कृषि ऋण में 'Kisan Credit Card' खोजें।",
        "ज़मीन, फ़सल या पशुपालन/मछली पालन की जानकारी भरें और कागज़ अपलोड करें।",
        "बैंक जाँच करके सीमा मंज़ूर करने के लिए आपसे संपर्क करता है।",
      ],
    },
    offline: {
      en: [
        "Visit any commercial, regional rural or cooperative bank branch.",
        "Ask for the KCC form. PM-KISAN beneficiaries can use a simple one-page form.",
        "Submit it with ID, address and land or activity documents. The bank should decide within 14 days.",
      ],
      hi: [
        "किसी भी व्यावसायिक, क्षेत्रीय ग्रामीण या सहकारी बैंक की शाखा में जाएँ।",
        "KCC फ़ॉर्म माँगें। PM-KISAN लाभार्थी एक पन्ने का आसान फ़ॉर्म भर सकते हैं।",
        "पहचान, पता और ज़मीन या काम के कागज़ों के साथ जमा करें। बैंक को 14 दिन में फ़ैसला करना चाहिए।",
      ],
    },
  },
  documents: {
    en: ["Aadhaar card", "PAN card or other ID", "Land records or tenancy/sharecropping proof", "Details of crops, livestock or fishing activity", "Passport-size photo"],
    hi: ["आधार कार्ड", "पैन कार्ड या अन्य पहचान पत्र", "ज़मीन के कागज़ या बटाई/किराए का सबूत", "फ़सल, पशुधन या मछली पालन का विवरण", "पासपोर्ट साइज़ फ़ोटो"],
  },
  faqs: [
    {
      q: { en: "How do I get the 4% rate?", hi: "4% ब्याज दर कैसे मिलेगी?" },
      a: {
        en: "Repay your crop loan on or before the due date (within a year of drawing it). The government then pays a 3% incentive, so you effectively pay 4%.",
        hi: "फ़सल कर्ज़ नियत तारीख पर या उससे पहले (निकालने के एक साल के भीतर) चुका दें। तब सरकार 3% प्रोत्साहन देती है और आपका असल ब्याज 4% रह जाता है।",
      },
    },
    {
      q: { en: "Is crop insurance linked to KCC?", hi: "क्या KCC के साथ फ़सल बीमा जुड़ा है?" },
      a: {
        en: "Banks enrol KCC holders in PM Fasal Bima Yojana for notified crops, but it is voluntary. You can opt out in writing before the season's cut-off date.",
        hi: "बैंक KCC धारकों को अधिसूचित फ़सलों के लिए PM फ़सल बीमा योजना में जोड़ते हैं, पर यह स्वैच्छिक है। मौसम की आख़िरी तारीख से पहले लिखित में मना कर सकते हैं।",
      },
    },
  ],

  officialUrl: "https://www.myscheme.gov.in/schemes/kcc",
  sources: [
    "https://www.myscheme.gov.in/schemes/kcc",
    "https://www.pib.gov.in/PressReleasePage.aspx?PRID=2099696&reg=48&lang=2",
    "https://ddnews.gov.in/en/cabinet-approves-continuation-of-modified-interest-subvention-scheme-for-fy-2025-26/",
  ],
  lastVerified: "2026-10-06",
  launchedYear: 1998,
  status: "check-status",
};

export default scheme;
