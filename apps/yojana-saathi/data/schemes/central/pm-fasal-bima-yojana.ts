import { all, when } from "@/lib/engine/build";
import type { Scheme } from "@/lib/types";

const scheme: Scheme = {
  slug: "pm-fasal-bima-yojana",
  name: { en: "Pradhan Mantri Fasal Bima Yojana", hi: "प्रधानमंत्री फ़सल बीमा योजना" },
  aka: ["PMFBY", "Fasal Bima", "Crop Insurance"],
  shortDescription: {
    en: "Insure your crop against drought, flood, pests and other losses by paying just 2% of the sum insured for kharif, 1.5% for rabi and 5% for cash crops.",
    hi: "सूखा, बाढ़, कीट और दूसरे नुकसान से अपनी फ़सल का बीमा कराएँ, ख़रीफ़ के लिए बीमा राशि का सिर्फ़ 2%, रबी के लिए 1.5% और नकदी फ़सलों के लिए 5% देकर।",
  },
  level: "central",
  ministry: "agriculture-farmers-welfare",
  categories: ["agriculture", "pension-insurance"],
  tags: ["crop insurance", "fasal bima", "farmer", "drought", "flood", "kisan"],
  benefitType: "insurance",
  isDBT: false,
  kundliHouse: "farming",
  eligibility: all(
    when("occupation", "in", ["farmer"], { en: "You grow crops (owner, tenant or sharecropper)", hi: "आप खेती करते हैं (मालिक, किराएदार या बटाईदार)" }),
  ),

  details: {
    en: [
      "PMFBY is the government's crop insurance scheme. If your crop is damaged by a natural calamity, pests or disease, the insurance company pays you a claim based on the loss.",
      "You pay only a small, fixed share of the premium. The rest is paid by the Central and State governments (50:50 in most states, 90:10 in the North-Eastern and Himalayan states).",
      "It covers the whole crop cycle: when sowing is prevented by bad weather, losses while the crop is standing, localised disasters like hailstorm, landslide or flooding, and damage to harvested crop left drying in the field. From Kharif 2026, states can also add cover for crop damage by wild animals. Joining is voluntary for all farmers, including those with crop loans.",
    ],
    hi: [
      "PMFBY सरकार की फ़सल बीमा योजना है। अगर प्राकृतिक आपदा, कीट या बीमारी से फ़सल ख़राब होती है, तो बीमा कंपनी नुकसान के हिसाब से दावा देती है।",
      "आपको प्रीमियम का सिर्फ़ एक छोटा, तय हिस्सा देना होता है। बाकी केंद्र और राज्य सरकार देती हैं (ज़्यादातर राज्यों में 50:50, पूर्वोत्तर और हिमालयी राज्यों में 90:10)।",
      "यह पूरी फ़सल अवधि को कवर करती है: ख़राब मौसम से बुवाई न हो पाना, खड़ी फ़सल का नुकसान, ओले, भूस्खलन या जलभराव जैसी स्थानीय आपदा, और कटाई के बाद खेत में सूख रही फ़सल का नुकसान। ख़रीफ़ 2026 से राज्य जंगली जानवरों से फ़सल नुकसान का कवर भी जोड़ सकते हैं। सभी किसानों के लिए, फ़सल ऋण वालों के लिए भी, इसमें जुड़ना अपनी मर्ज़ी पर है।",
    ],
  },
  benefits: {
    en: [
      "Farmer's premium is capped at 2% of the sum insured for kharif food and oilseed crops.",
      "1.5% for rabi food and oilseed crops.",
      "5% for annual commercial and horticultural crops.",
      "Claim money is paid into your bank account when losses are assessed.",
      "Covers prevented sowing, standing-crop loss, localised calamities and post-harvest loss up to 14 days.",
    ],
    hi: [
      "ख़रीफ़ की अनाज और तिलहन फ़सलों के लिए किसान का प्रीमियम बीमा राशि का अधिकतम 2%।",
      "रबी की अनाज और तिलहन फ़सलों के लिए 1.5%।",
      "सालाना व्यावसायिक और बागवानी फ़सलों के लिए 5%।",
      "नुकसान का आकलन होने पर दावे का पैसा आपके बैंक खाते में आता है।",
      "बुवाई न हो पाना, खड़ी फ़सल का नुकसान, स्थानीय आपदा और कटाई के बाद 14 दिन तक का नुकसान कवर।",
    ],
  },
  eligibilityText: {
    en: [
      "Any farmer, including tenants and sharecroppers, growing a notified crop in a notified area.",
      "You must have an insurable interest in the crop (land records, or a tenancy/sowing document as your state requires).",
      "You must enrol before your state's cut-off date for that season.",
    ],
    hi: [
      "अधिसूचित क्षेत्र में अधिसूचित फ़सल उगाने वाला कोई भी किसान, किराएदार और बटाईदार भी।",
      "फ़सल पर आपका बीमा योग्य हित होना चाहिए (ज़मीन के कागज़, या राज्य के नियम के मुताबिक बटाई/बुवाई का दस्तावेज़)।",
      "उस मौसम के लिए राज्य की आख़िरी तारीख से पहले नामांकन कराना ज़रूरी है।",
    ],
  },
  exclusions: {
    en: [
      "Crops or areas not notified by your state for that season are not covered.",
      "Losses from war, nuclear risk, malicious damage and other avoidable causes are not paid.",
      "Late enrolment after the cut-off date is not accepted.",
    ],
    hi: [
      "जिस फ़सल या क्षेत्र को राज्य ने उस मौसम के लिए अधिसूचित नहीं किया, वह कवर नहीं होता।",
      "युद्ध, परमाणु ख़तरे, जानबूझकर किए गए नुकसान और दूसरे टाले जा सकने वाले कारणों से हुआ नुकसान नहीं मिलता।",
      "आख़िरी तारीख के बाद नामांकन स्वीकार नहीं होता।",
    ],
  },
  applicationProcess: {
    online: {
      en: [
        "Go to pmfby.gov.in or open the Crop Insurance app and choose 'Farmer Corner'.",
        "Register with your mobile number, then fill in your bank, land and crop details.",
        "Pay your share of the premium online and save the policy receipt.",
        "If a localised loss happens, report it within 72 hours on the app or by calling the helpline 14447.",
      ],
      hi: [
        "pmfby.gov.in पर जाएँ या Crop Insurance ऐप खोलें और 'Farmer Corner' चुनें।",
        "मोबाइल नंबर से पंजीकरण करें, फिर बैंक, ज़मीन और फ़सल की जानकारी भरें।",
        "अपने हिस्से का प्रीमियम ऑनलाइन भरें और पॉलिसी रसीद संभाल कर रखें।",
        "स्थानीय नुकसान होने पर 72 घंटे के भीतर ऐप पर या हेल्पलाइन 14447 पर सूचना दें।",
      ],
    },
    offline: {
      en: [
        "Visit your bank branch, cooperative society, Common Service Centre (CSC) or the insurance company's agent.",
        "Fill in the proposal form with land, crop and bank details.",
        "Pay your premium share and keep the receipt. If you have a crop loan, the bank enrols you unless you opt out in writing.",
      ],
      hi: [
        "अपनी बैंक शाखा, सहकारी समिति, जन सेवा केंद्र (CSC) या बीमा कंपनी के एजेंट के पास जाएँ।",
        "ज़मीन, फ़सल और बैंक की जानकारी के साथ प्रस्ताव फ़ॉर्म भरें।",
        "अपने हिस्से का प्रीमियम भरें और रसीद रखें। फ़सल ऋण है तो बैंक आपको अपने-आप जोड़ देता है, जब तक आप लिखित में मना न करें।",
      ],
    },
  },
  documents: {
    en: ["Aadhaar card", "Bank passbook", "Land records (khasra/khatauni) or tenancy agreement", "Sowing certificate or crop declaration, if your state asks"],
    hi: ["आधार कार्ड", "बैंक पासबुक", "ज़मीन के कागज़ (खसरा/खतौनी) या बटाई का अनुबंध", "राज्य माँगे तो बुवाई प्रमाणपत्र या फ़सल घोषणा"],
  },
  faqs: [
    {
      q: { en: "Is crop insurance compulsory if I have a Kisan Credit Card loan?", hi: "क्या KCC ऋण लेने पर फ़सल बीमा ज़रूरी है?" },
      a: {
        en: "No. Since 2020 it is voluntary for all farmers. Banks enrol loanee farmers automatically, but you can opt out by giving a written request before the cut-off date.",
        hi: "नहीं। 2020 से यह सभी किसानों के लिए स्वैच्छिक है। बैंक ऋण वाले किसानों को अपने-आप जोड़ देते हैं, लेकिन आख़िरी तारीख से पहले लिखित अनुरोध देकर आप बाहर हो सकते हैं।",
      },
    },
    {
      q: { en: "How do I report crop damage?", hi: "फ़सल नुकसान की सूचना कैसे दूँ?" },
      a: {
        en: "For localised losses (hailstorm, flooding, landslide, post-harvest rain), inform the insurer within 72 hours through the Crop Insurance app, helpline 14447, your bank or the agriculture office.",
        hi: "स्थानीय नुकसान (ओले, जलभराव, भूस्खलन, कटाई के बाद बारिश) होने पर 72 घंटे के भीतर Crop Insurance ऐप, हेल्पलाइन 14447, बैंक या कृषि कार्यालय से बीमा कंपनी को बताएँ।",
      },
    },
  ],

  officialUrl: "https://pmfby.gov.in/",
  sources: [
    "https://pmfby.gov.in/",
    "https://static.pib.gov.in/WriteReadData/specificdocs/documents/2026/aug/doc_9735_20260829_18493301.pdf",
    "https://www.myscheme.gov.in/schemes/pmfby",
    "https://www.drishtiias.com/daily-updates/daily-news-analysis/pmfby-expansion-to-cover-wildlife-damage-and-paddy-inundation",
  ],
  lastVerified: "2026-10-06",
  launchedYear: 2016,
  status: "active",
};

export default scheme;
