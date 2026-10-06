import { all, isTrue, labelled, residentOf } from "@/lib/engine/build";
import type { Scheme } from "@/lib/types";

const scheme: Scheme = {
  slug: "kerala-women-headed-family-education-assistance",
  tier: "compact",
  overlapGroup: "scholarship",
  name: { en: "Educational Assistance to Children of Women-Headed Families (Kerala)", hi: "महिला-प्रधान परिवारों के बच्चों को शिक्षा सहायता (केरल)" },
  aka: ["women headed family scholarship Kerala", "WCD educational assistance"],
  shortDescription: {
    en: "Children of poor women-headed families in Kerala get ₹3,000 to ₹10,000 a year for their studies, from pre-school to degree and above.",
    hi: "केरल के ग़रीब महिला-प्रधान परिवारों के बच्चों को पढ़ाई के लिए हर साल ₹3,000 से ₹10,000 मिलते हैं, प्री-स्कूल से डिग्री और उससे आगे तक।",
  },
  level: "state",
  state: "kerala",
  department: { en: "Women and Child Development Department, Government of Kerala", hi: "महिला एवं बाल विकास विभाग, केरल सरकार" },
  categories: ["education", "women-child"],
  tags: ["scholarship", "single mother", "women headed family", "widow children", "education assistance", "kerala"],
  benefitType: "cash",
  isDBT: true,
  value: { amount: 3000, period: "yearly", kind: "cash" },
  kundliHouse: "education",
  eligibility: all(
    residentOf("kerala"),
    labelled(isTrue("bpl"), { en: "Your family is BPL / priority category", hi: "आपका परिवार BPL / प्राथमिकता श्रेणी में है" }),
  ),

  details: {
    en: [
      "Many families in Kerala are headed by women and struggle to pay for their children's education. This Women and Child Development Department scheme gives a yearly grant for the studies of up to two children in such families.",
      "Families where the husband is bedridden after a stroke or spinal injury and cannot earn are also covered.",
    ],
    hi: [
      "केरल में कई परिवारों की मुखिया महिलाएँ हैं, जिन्हें बच्चों की पढ़ाई का ख़र्च उठाने में मुश्किल होती है। महिला एवं बाल विकास विभाग की यह योजना ऐसे परिवारों के दो बच्चों तक की पढ़ाई के लिए हर साल सहायता देती है।",
      "जिन परिवारों में पति स्ट्रोक या रीढ़ की चोट के बाद बिस्तर पर हैं और कमा नहीं सकते, वे भी इसमें शामिल हैं।",
    ],
  },
  benefits: {
    en: [
      "Children below 5 years and Classes 1 to 5: ₹3,000 a year.",
      "Classes 6 to 10: ₹5,000 a year.",
      "Plus One and Plus Two: ₹7,500 a year.",
      "Degree and above: ₹10,000 a year.",
    ],
    hi: [
      "5 साल से छोटे बच्चे और कक्षा 1 से 5: ₹3,000 साल।",
      "कक्षा 6 से 10: ₹5,000 साल।",
      "प्लस वन और प्लस टू: ₹7,500 साल।",
      "डिग्री और उससे आगे: ₹10,000 साल।",
    ],
  },
  eligibilityText: {
    en: [
      "The family is headed by a woman, or the husband is bedridden after a stroke or spinal injury (with a government doctor's certificate).",
      "The family is BPL / priority category. Children of people affected by HIV/AIDS and of socially discriminated people qualify whatever their BPL status.",
      "The child studies in a government or government-aided school or college.",
      "At most two children per family, and the child must not be getting any other scholarship.",
    ],
    hi: [
      "परिवार की मुखिया महिला है, या पति स्ट्रोक या रीढ़ की चोट के बाद बिस्तर पर हैं (सरकारी डॉक्टर के प्रमाण पत्र के साथ)।",
      "परिवार BPL / प्राथमिकता श्रेणी में है। HIV/AIDS से प्रभावित और सामाजिक भेदभाव झेलने वाले लोगों के बच्चे BPL स्थिति के बिना भी पात्र हैं।",
      "बच्चा सरकारी या सरकारी सहायता प्राप्त स्कूल या कॉलेज में पढ़ता है।",
      "एक परिवार से ज़्यादा से ज़्यादा दो बच्चे, और बच्चे को कोई दूसरी छात्रवृत्ति न मिल रही हो।",
    ],
  },
  applicationProcess: {
    offline: {
      en: [
        "Get the application form from the WCD department website or your ICDS office.",
        "Attach the BPL / priority ration card, proof that the family is woman-headed, and a certificate from the head of the institution that the child gets no other scholarship.",
        "Submit it to the Child Development Project Officer of your area.",
      ],
      hi: [
        "WCD विभाग की वेबसाइट या अपने ICDS कार्यालय से आवेदन फ़ॉर्म लें।",
        "BPL / प्राथमिकता राशन कार्ड, परिवार के महिला-प्रधान होने का सबूत, और संस्थान प्रधान का प्रमाण पत्र लगाएँ कि बच्चे को कोई दूसरी छात्रवृत्ति नहीं मिलती।",
        "इसे अपने क्षेत्र के बाल विकास परियोजना अधिकारी को जमा करें।",
      ],
    },
  },

  officialUrl: "https://wcd.kerala.gov.in/scheme-info.php?id=NA==",
  sources: ["https://wcd.kerala.gov.in/scheme-info.php?id=NA==", "https://wcd.kerala.gov.in/schemes.php"],
  lastVerified: "2026-10-06",
  launchedYear: 2016,
  status: "check-status",
};

export default scheme;
