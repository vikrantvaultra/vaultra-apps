import { all, female, residentOf } from "@/lib/engine/build";
import type { Scheme } from "@/lib/types";

const scheme: Scheme = {
  slug: "deen-dayal-bunkar-yojana",
  tier: "compact",
  name: { en: "Deen Dayal Bunkar Yojana (Arunachal Pradesh)", hi: "दीनदयाल बुनकर योजना (अरुणाचल प्रदेश)" },
  aka: ["Bunkar Yojana Arunachal", "Weaver loan Arunachal"],
  shortDescription: {
    en: "Women weavers and artisan SHGs in Arunachal Pradesh can get cheap or interest-free working capital loans from banks to run their weaving.",
    hi: "अरुणाचल प्रदेश की महिला बुनकरों और कारीगर SHG को बुनाई का काम चलाने के लिए बैंक से सस्ता या बिना ब्याज का कार्यशील पूंजी लोन मिल सकता है।",
  },
  level: "state",
  state: "arunachal-pradesh",
  department: {
    en: "Department of Textile & Handicrafts, Government of Arunachal Pradesh",
    hi: "वस्त्र एवं हस्तशिल्प विभाग, अरुणाचल प्रदेश सरकार",
  },
  categories: ["business", "women-child"],
  tags: ["weaver", "handloom", "women", "working capital", "loan", "artisan", "arunachal"],
  benefitType: "loan",
  isDBT: false,
  kundliHouse: "business",
  eligibility: all(residentOf("arunachal-pradesh"), female()),

  details: {
    en: [
      "Deen Dayal Bunkar Yojana helps women weavers in Arunachal Pradesh get working capital from banks on easy terms, so they can buy yarn and keep their looms running.",
      "District pages describe the loans as interest-free or concessional, up to ₹2 lakh. We could not find the scheme guidelines, so check the current terms with your district Textile & Handicrafts office.",
    ],
    hi: [
      "दीनदयाल बुनकर योजना अरुणाचल प्रदेश की महिला बुनकरों को आसान शर्तों पर बैंक से कार्यशील पूंजी दिलाती है, ताकि वे धागा ख़रीद सकें और करघा चलता रहे।",
      "ज़िला पेजों पर इन लोन को बिना ब्याज या रियायती, ₹2 लाख तक बताया गया है। योजना के दिशानिर्देश हमें नहीं मिले, इसलिए मौजूदा शर्तें अपने ज़िला वस्त्र एवं हस्तशिल्प दफ़्तर से पता करें।",
    ],
  },
  benefits: {
    en: [
      "Working capital bank loan for weaving on interest-free or concessional terms.",
      "Available to individual women weavers and artisan Self-Help Groups.",
    ],
    hi: [
      "बुनाई के लिए बिना ब्याज या रियायती शर्तों पर बैंक से कार्यशील पूंजी लोन।",
      "अकेली महिला बुनकरों और कारीगर स्वयं सहायता समूहों के लिए।",
    ],
  },
  eligibilityText: {
    en: [
      "A woman weaver in Arunachal Pradesh, or an artisan Self-Help Group.",
      "A Weaver Certificate from the district Department of Textile & Handicrafts.",
    ],
    hi: [
      "अरुणाचल प्रदेश की महिला बुनकर, या कारीगर स्वयं सहायता समूह।",
      "ज़िले के वस्त्र एवं हस्तशिल्प विभाग का बुनकर प्रमाण पत्र।",
    ],
  },
  applicationProcess: {
    offline: {
      en: [
        "Get a Weaver Certificate from your district Textile & Handicrafts office.",
        "Submit it with the loan application form at the bank branch the office tells you.",
      ],
      hi: [
        "अपने ज़िला वस्त्र एवं हस्तशिल्प दफ़्तर से बुनकर प्रमाण पत्र बनवाएँ।",
        "दफ़्तर जिस बैंक शाखा का नाम बताए, वहाँ इसे लोन आवेदन फ़ॉर्म के साथ जमा करें।",
      ],
    },
  },

  officialUrl: "https://tawang.nic.in/scheme/deen-dayal-bunkar-yojana/",
  sources: ["https://tawang.nic.in/scheme/deen-dayal-bunkar-yojana/"],
  lastVerified: "2026-10-06",
  launchedYear: 2018,
  status: "check-status",
};

export default scheme;
