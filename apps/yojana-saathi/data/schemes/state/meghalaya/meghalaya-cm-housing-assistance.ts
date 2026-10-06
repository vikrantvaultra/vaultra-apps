import { all, residentOf } from "@/lib/engine/build";
import type { Scheme } from "@/lib/types";

const scheme: Scheme = {
  slug: "meghalaya-cm-housing-assistance",
  tier: "compact",
  name: { en: "Chief Minister's Housing Assistance Programme (Meghalaya)", hi: "मुख्यमंत्री आवास सहायता कार्यक्रम (मेघालय)" },
  aka: ["CMHAP", "CM Housing Assistance Meghalaya", "roofing sheets scheme Meghalaya"],
  shortDescription: {
    en: "Roofing materials for poor (EWS) families to repair their homes, and new houses for low-income (LIG) families in Meghalaya.",
    hi: "मेघालय में गरीब (EWS) परिवारों को घर सुधारने के लिए छत की सामग्री, और कम आय (LIG) वाले परिवारों को नए घर।",
  },
  level: "state",
  state: "meghalaya",
  department: { en: "Housing Department, Government of Meghalaya", hi: "आवास विभाग, मेघालय सरकार" },
  categories: ["housing"],
  tags: ["housing", "roofing", "cgi sheets", "house", "ews", "meghalaya"],
  benefitType: "in-kind",
  isDBT: false,
  kundliHouse: "home",
  eligibility: all(residentOf("meghalaya")),

  details: {
    en: [
      "The Chief Minister's Housing Assistance Programme replaced Meghalaya's old Rural Housing Scheme. Under it, families from the Economically Weaker Section (EWS) get three bundles of durable roofing material to improve their existing house, and Low Income Group (LIG) families get help with a dwelling house. It covers both rural and urban areas.",
      "The 2026-27 budget allocates ₹70 crore to the programme. We could not find current official rules on income limits, selection or how to apply, so please check with your district housing office or block office.",
    ],
    hi: [
      "मुख्यमंत्री आवास सहायता कार्यक्रम ने मेघालय की पुरानी ग्रामीण आवास योजना की जगह ली है। इसमें आर्थिक रूप से कमज़ोर वर्ग (EWS) के परिवारों को अपना मौजूदा घर सुधारने के लिए टिकाऊ छत सामग्री के तीन बंडल मिलते हैं, और कम आय वर्ग (LIG) के परिवारों को रहने के लिए घर में मदद मिलती है। यह गाँव और शहर दोनों में लागू है।",
      "2026-27 के बजट में इस कार्यक्रम के लिए ₹70 करोड़ रखे गए हैं। आय सीमा, चयन या आवेदन के मौजूदा सरकारी नियम हमें नहीं मिले, इसलिए अपने ज़िला आवास कार्यालय या ब्लॉक कार्यालय से पूछें।",
    ],
  },
  benefits: {
    en: [
      "EWS families: three bundles of roofing material to improve an existing house.",
      "LIG families: support for a dwelling house.",
    ],
    hi: [
      "EWS परिवार: मौजूदा घर सुधारने के लिए छत सामग्री के तीन बंडल।",
      "LIG परिवार: रहने के लिए घर में मदद।",
    ],
  },
  eligibilityText: {
    en: [
      "A family living in Meghalaya from the Economically Weaker Section (EWS) or Low Income Group (LIG).",
      "Income limits and selection rules are not confirmed; ask your district or block office.",
    ],
    hi: [
      "मेघालय में रहने वाला आर्थिक रूप से कमज़ोर वर्ग (EWS) या कम आय वर्ग (LIG) का परिवार।",
      "आय सीमा और चयन के नियमों की पुष्टि नहीं हुई है; अपने ज़िला या ब्लॉक कार्यालय से पूछें।",
    ],
  },
  applicationProcess: {
    offline: {
      en: [
        "Ask at your Block Development Office or the district housing office when beneficiaries are being selected.",
        "Submit the application with proof of residence, income and your current house condition.",
        "Selected families receive the roofing material or housing support.",
      ],
      hi: [
        "जब लाभार्थियों का चयन हो रहा हो, अपने ब्लॉक विकास कार्यालय या ज़िला आवास कार्यालय में पूछें।",
        "निवास, आय और मौजूदा घर की हालत के सबूत के साथ आवेदन जमा करें।",
        "चुने गए परिवारों को छत सामग्री या आवास सहायता मिलती है।",
      ],
    },
  },

  officialUrl: "https://meghousing.gov.in/schemes.html",
  sources: [
    "https://meghousing.gov.in/schemes.html",
    "https://meghalaya.gov.in/schemes/content/37229",
    "https://megfinance.gov.in/budget_documents/2026-2027/others/budget_speech.pdf",
  ],
  lastVerified: "2026-10-06",
  launchedYear: 2016,
  status: "check-status",
};

export default scheme;
