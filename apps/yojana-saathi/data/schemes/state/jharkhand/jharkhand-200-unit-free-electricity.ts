import { all, residentOf } from "@/lib/engine/build";
import type { Scheme } from "@/lib/types";

const scheme: Scheme = {
  slug: "jharkhand-200-unit-free-electricity",
  tier: "compact",
  name: { en: "Jharkhand 200 Units Free Electricity Scheme", hi: "झारखंड 200 यूनिट मुफ़्त बिजली योजना" },
  aka: ["Jharkhand free bijli", "200 unit free electricity Jharkhand", "Mukhyamantri free bijli"],
  shortDescription: {
    en: "Domestic electricity consumers in Jharkhand get up to 200 units of electricity free every month.",
    hi: "झारखंड के घरेलू बिजली उपभोक्ताओं को हर महीने 200 यूनिट तक बिजली मुफ़्त मिलती है।",
  },
  level: "state",
  state: "jharkhand",
  department: { en: "Energy Department, Government of Jharkhand (through JBVNL)", hi: "ऊर्जा विभाग, झारखंड सरकार (JBVNL के ज़रिए)" },
  categories: ["energy-savings"],
  tags: ["free electricity", "bijli", "200 units", "electricity bill", "jbvnl", "jharkhand"],
  benefitType: "in-kind",
  isDBT: false,
  kundliHouse: "energy-savings",
  eligibility: all(residentOf("jharkhand")),

  details: {
    en: [
      "The Jharkhand government pays for the first 200 units of electricity used each month by domestic (household) consumers in both villages and towns. About 35 lakh consumers benefit.",
      "The state budget for 2026-27 sets aside ₹5,405 crore for this. The benefit shows up on your electricity bill from Jharkhand Bijli Vitran Nigam Ltd (JBVNL).",
    ],
    hi: [
      "झारखंड सरकार गाँव और शहर, दोनों के घरेलू बिजली उपभोक्ताओं के हर महीने के पहले 200 यूनिट का पैसा ख़ुद भरती है। लगभग 35 लाख उपभोक्ताओं को इसका लाभ मिलता है।",
      "2026-27 के राज्य बजट में इसके लिए ₹5,405 करोड़ रखे गए हैं। इसका फ़ायदा झारखंड बिजली वितरण निगम (JBVNL) के बिल में दिखता है।",
    ],
  },
  benefits: {
    en: ["Up to 200 units of electricity a month free for your home.", "No separate payment to the government: the saving appears on your bill."],
    hi: ["आपके घर के लिए हर महीने 200 यूनिट तक बिजली मुफ़्त।", "सरकार को अलग से कुछ नहीं देना: बचत सीधे आपके बिल में दिखती है।"],
  },
  eligibilityText: {
    en: [
      "Has a domestic (household) electricity connection from JBVNL in Jharkhand.",
      "Applies to the household connection, not to shops, businesses or farm pumps.",
      "Keep your connection details (consumer number, meter) up to date with JBVNL.",
    ],
    hi: [
      "झारखंड में JBVNL का घरेलू बिजली कनेक्शन हो।",
      "यह घरेलू कनेक्शन पर लागू है, दुकान, व्यवसाय या खेत के पंप पर नहीं।",
      "अपने कनेक्शन की जानकारी (उपभोक्ता नंबर, मीटर) JBVNL के पास सही रखें।",
    ],
  },
  applicationProcess: {
    offline: {
      en: [
        "You don't need to apply separately. The benefit is applied to eligible domestic bills.",
        "If your bill does not show it, contact your JBVNL section office or call 1912 / 1800-345-6570.",
      ],
      hi: [
        "अलग से आवेदन नहीं करना है। यह लाभ पात्र घरेलू बिलों में अपने-आप जुड़ता है।",
        "अगर आपके बिल में यह न दिखे, तो JBVNL के अपने सेक्शन कार्यालय से संपर्क करें या 1912 / 1800-345-6570 पर फ़ोन करें।",
      ],
    },
  },

  officialUrl: "https://jbvnl.co.in/",
  sources: [
    "https://finance.jharkhand.gov.in/pdf/Budget_2026_27/Budget_Speech.pdf",
    "https://cm.jharkhand.gov.in/node/16058",
    "https://jbvnl.co.in/",
  ],
  lastVerified: "2026-10-06",
  launchedYear: 2024,
  status: "active",
};

export default scheme;
