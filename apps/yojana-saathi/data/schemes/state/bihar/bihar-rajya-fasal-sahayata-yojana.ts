import { all, residentOf, when } from "@/lib/engine/build";
import type { Scheme } from "@/lib/types";

const scheme: Scheme = {
  slug: "bihar-rajya-fasal-sahayata-yojana",
  tier: "compact",
  name: { en: "Bihar Rajya Fasal Sahayata Yojana", hi: "बिहार राज्य फसल सहायता योजना" },
  aka: ["BRFSY", "Fasal Sahayata", "Bihar crop loss help"],
  shortDescription: {
    en: "Bihar farmers whose crop yield falls because of flood, drought or other disasters get ₹7,500 to ₹10,000 per hectare, for up to 2 hectares, with no premium to pay.",
    hi: "बाढ़, सूखा या दूसरी आपदा से फ़सल की पैदावार घटने पर बिहार के किसानों को 2 हेक्टेयर तक, प्रति हेक्टेयर ₹7,500 से ₹10,000 मिलते हैं, कोई प्रीमियम नहीं देना होता।",
  },
  level: "state",
  state: "bihar",
  department: { en: "Cooperative Department, Government of Bihar", hi: "सहकारिता विभाग, बिहार सरकार" },
  categories: ["agriculture"],
  tags: ["crop loss", "farmer", "flood", "drought", "crop insurance", "fasal sahayata", "bihar"],
  benefitType: "cash",
  isDBT: true,
  kundliHouse: "farming",
  eligibility: all(residentOf("bihar"), when("occupation", "eq", "farmer")),

  details: {
    en: [
      "Bihar Rajya Fasal Sahayata Yojana is the state's own crop-loss support, used in Bihar in place of a premium-based crop insurance. Farmers register for each Kharif and Rabi season on the Cooperative Department's e-Sahkari portal.",
      "If the yield measured in crop-cutting surveys for your area falls below the threshold, you get money per hectare by DBT. Both landowners and tenant farmers can register.",
    ],
    hi: [
      "बिहार राज्य फसल सहायता योजना राज्य सरकार की अपनी फ़सल-नुकसान सहायता है, जो बिहार में प्रीमियम वाले फ़सल बीमा की जगह चलती है। किसान हर खरीफ़ और रबी मौसम के लिए सहकारिता विभाग के ई-सहकारी पोर्टल पर रजिस्टर करते हैं।",
      "अगर आपके इलाके में फ़सल कटाई प्रयोग से मापी गई पैदावार तय सीमा से कम रहती है, तो आपको प्रति हेक्टेयर पैसा DBT से मिलता है। ज़मीन मालिक और बटाईदार दोनों रजिस्टर कर सकते हैं।",
    ],
  },
  benefits: {
    en: [
      "₹7,500 per hectare if the yield loss is up to 20%.",
      "₹10,000 per hectare if the yield loss is more than 20%.",
      "Covers up to 2 hectares per farmer.",
      "No premium to pay.",
    ],
    hi: [
      "पैदावार में 20% तक कमी पर प्रति हेक्टेयर ₹7,500।",
      "पैदावार में 20% से ज़्यादा कमी पर प्रति हेक्टेयर ₹10,000।",
      "हर किसान के लिए 2 हेक्टेयर तक।",
      "कोई प्रीमियम नहीं देना।",
    ],
  },
  eligibilityText: {
    en: [
      "Farmer (landowner or tenant) cultivating in Bihar.",
      "Registered on the Agriculture Department's DBT portal.",
      "Registered for the season's crop on the e-Sahkari portal before the last date.",
    ],
    hi: [
      "बिहार में खेती करने वाले किसान (ज़मीन मालिक या बटाईदार)।",
      "कृषि विभाग के DBT पोर्टल पर रजिस्टर हों।",
      "आख़िरी तारीख से पहले ई-सहकारी पोर्टल पर उस मौसम की फ़सल के लिए रजिस्टर हों।",
    ],
  },
  applicationProcess: {
    online: {
      en: [
        "If not done already, register as a farmer on dbtagriculture.bihar.gov.in.",
        "Each season, apply on esahkari.bihar.gov.in with your crop, area sown and land details, and the self-declaration form.",
        "Payment, if your area qualifies, comes by DBT. Check the status on the same portal.",
      ],
      hi: [
        "अगर पहले नहीं किया है, तो dbtagriculture.bihar.gov.in पर किसान के रूप में रजिस्टर करें।",
        "हर मौसम में esahkari.bihar.gov.in पर अपनी फ़सल, बोए गए रकबे और ज़मीन के विवरण व स्व-घोषणा पत्र के साथ आवेदन करें।",
        "अगर आपका इलाका पात्र होता है, तो पैसा DBT से आता है। स्थिति उसी पोर्टल पर देखें।",
      ],
    },
  },

  officialUrl: "https://esahkari.bihar.gov.in/",
  sources: ["https://esahkari.bihar.gov.in/", "https://betastate.bihar.gov.in/cooperative/"],
  lastVerified: "2026-10-06",
  launchedYear: 2018,
  status: "active",
};

export default scheme;
