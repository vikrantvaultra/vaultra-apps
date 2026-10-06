import { all, residentOf, when } from "@/lib/engine/build";
import type { Scheme } from "@/lib/types";

const scheme: Scheme = {
  slug: "deendayal-upadhyay-sahkarita-kisan-kalyan-yojana",
  tier: "compact",
  name: { en: "Deendayal Upadhyay Sahkarita Kisan Kalyan Yojana", hi: "दीनदयाल उपाध्याय सहकारिता किसान कल्याण योजना" },
  aka: ["Interest free loan farmers Uttarakhand", "DDU Sahkarita Kisan Kalyan"],
  shortDescription: {
    en: "Interest-free loans through cooperative societies for Uttarakhand's small, marginal and BPL farmers: up to ₹3 lakh for individuals and ₹5 lakh for self-help groups.",
    hi: "उत्तराखंड के छोटे, सीमांत और BPL किसानों को सहकारी समितियों से बिना ब्याज लोन: एक व्यक्ति को ₹3 लाख तक और स्वयं सहायता समूह को ₹5 लाख तक।",
  },
  level: "state",
  state: "uttarakhand",
  department: { en: "Cooperative Department, Government of Uttarakhand", hi: "सहकारिता विभाग, उत्तराखंड सरकार" },
  categories: ["agriculture", "business"],
  tags: ["interest free loan", "farmer", "cooperative", "kisan", "shg", "uttarakhand"],
  benefitType: "loan",
  isDBT: false,
  kundliHouse: "farming",
  eligibility: all(residentOf("uttarakhand"), when("occupation", "in", ["farmer", "livestock-dairy", "fisher"])),

  details: {
    en: [
      "Under this state scheme, farmers who are members of cooperative societies can take interest-free loans for farming and allied work. The aim is to create self-employment in villages and slow down migration from rural areas.",
      "Loans are given through the Primary Agricultural Credit Society (PACS) or the District Cooperative Bank branch after selection by a block-level committee.",
    ],
    hi: [
      "इस राज्य योजना में सहकारी समितियों के सदस्य किसान खेती और उससे जुड़े कामों के लिए बिना ब्याज लोन ले सकते हैं। मकसद गाँवों में स्वरोजगार बढ़ाना और पलायन कम करना है।",
      "ब्लॉक स्तर की समिति के चयन के बाद लोन प्राथमिक कृषि ऋण समिति (PACS) या ज़िला सहकारी बैंक की शाखा से मिलता है।",
    ],
  },
  benefits: {
    en: ["Interest-free loan of up to ₹3 lakh for an individual farmer.", "Interest-free loan of up to ₹5 lakh for a self-help group."],
    hi: ["एक किसान को ₹3 लाख तक का बिना ब्याज लोन।", "स्वयं सहायता समूह को ₹5 लाख तक का बिना ब्याज लोन।"],
  },
  eligibilityText: {
    en: [
      "BPL, small or marginal farmers who are members of a cooperative society in Uttarakhand.",
      "Self-help groups of such farmers can also apply.",
    ],
    hi: [
      "उत्तराखंड की किसी सहकारी समिति के सदस्य BPL, छोटे या सीमांत किसान।",
      "ऐसे किसानों के स्वयं सहायता समूह भी आवेदन कर सकते हैं।",
    ],
  },
  applicationProcess: {
    offline: {
      en: [
        "Apply at your cooperative society (PACS) or the District Cooperative Bank branch.",
        "A block-level committee selects the beneficiaries.",
        "The loan is given through the PACS or the bank branch.",
      ],
      hi: [
        "अपनी सहकारी समिति (PACS) या ज़िला सहकारी बैंक की शाखा में आवेदन करें।",
        "ब्लॉक स्तर की समिति लाभार्थियों का चयन करती है।",
        "लोन PACS या बैंक शाखा से मिलता है।",
      ],
    },
  },

  officialUrl: "https://cooperative.uk.gov.in/scheme/deendayal-upadhay-sahkarita-kisan-kalyan-yojana/",
  sources: ["https://cooperative.uk.gov.in/scheme/deendayal-upadhay-sahkarita-kisan-kalyan-yojana/"],
  lastVerified: "2026-10-06",
  launchedYear: 2017,
  status: "check-status",
};

export default scheme;
