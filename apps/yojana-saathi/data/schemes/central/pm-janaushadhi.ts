import { everyone } from "@/lib/engine/build";
import type { Scheme } from "@/lib/types";

const scheme: Scheme = {
  slug: "pm-janaushadhi",
  name: { en: "Pradhan Mantri Bhartiya Janaushadhi Pariyojana", hi: "प्रधानमंत्री भारतीय जनऔषधि परियोजना" },
  aka: ["PMBJP", "Jan Aushadhi", "Janaushadhi Kendra"],
  shortDescription: {
    en: "Buy quality generic medicines at 50% to 80% less than branded prices at Jan Aushadhi Kendras across India. Open to everyone, no card needed.",
    hi: "पूरे भारत के जन औषधि केंद्रों पर ब्रांडेड दवाओं से 50% से 80% तक सस्ती अच्छी जेनेरिक दवाएँ ख़रीदें। सबके लिए खुला, कोई कार्ड ज़रूरी नहीं।",
  },
  level: "central",
  ministry: "chemicals-fertilizers",
  categories: ["health"],
  tags: ["medicines", "generic medicine", "cheap medicine", "jan aushadhi", "pharmacy", "sanitary pads"],
  benefitType: "in-kind",
  isDBT: false,
  kundliHouse: "health",
  eligibility: everyone(),

  details: {
    en: [
      "Under this scheme, the Department of Pharmaceuticals runs a network of Jan Aushadhi Kendras that sell generic medicines much cheaper than branded ones with the same ingredients.",
      "There are now more than 20,000 Kendras across the country, with a range of over 2,000 medicines and around 300 surgical and medical items, covering conditions like diabetes, heart disease, infections and cancer.",
      "Medicines are bought only from WHO-GMP certified makers and every batch is tested in accredited labs before it reaches the shops. Anyone can buy them; you don't need any card or registration.",
    ],
    hi: [
      "इस योजना में फ़ार्मास्युटिकल्स विभाग जन औषधि केंद्रों का नेटवर्क चलाता है, जहाँ ब्रांडेड दवाओं जैसे ही घटकों वाली जेनेरिक दवाएँ बहुत कम दाम पर मिलती हैं।",
      "अब देश भर में 20,000 से ज़्यादा केंद्र हैं, जहाँ 2,000 से ज़्यादा दवाएँ और लगभग 300 सर्जिकल व चिकित्सा सामान मिलते हैं, जो डायबिटीज़, दिल की बीमारी, संक्रमण और कैंसर जैसी बीमारियों के लिए हैं।",
      "दवाएँ सिर्फ़ WHO-GMP प्रमाणित कंपनियों से ली जाती हैं और दुकान तक पहुँचने से पहले हर बैच की मान्यता प्राप्त लैब में जाँच होती है। कोई भी ख़रीद सकता है; किसी कार्ड या पंजीकरण की ज़रूरत नहीं।",
    ],
  },
  benefits: {
    en: [
      "Generic medicines typically 50% to 80% cheaper than branded equivalents.",
      "Over 2,000 medicines and around 300 surgical items and devices.",
      "Low-cost sanitary pads (Suvidha) for women.",
      "Quality-tested medicines from WHO-GMP certified manufacturers.",
    ],
    hi: [
      "जेनेरिक दवाएँ आमतौर पर ब्रांडेड दवाओं से 50% से 80% तक सस्ती।",
      "2,000 से ज़्यादा दवाएँ और लगभग 300 सर्जिकल सामान व उपकरण।",
      "महिलाओं के लिए सस्ते सैनिटरी पैड (सुविधा)।",
      "WHO-GMP प्रमाणित कंपनियों की जाँची-परखी दवाएँ।",
    ],
  },
  eligibilityText: {
    en: ["Open to everyone. There are no income, age or other conditions.", "For prescription medicines, carry a doctor's prescription as you would at any pharmacy."],
    hi: ["सबके लिए खुला। आय, उम्र या कोई और शर्त नहीं।", "पर्चे वाली दवाओं के लिए किसी भी दवा दुकान की तरह डॉक्टर का पर्चा साथ रखें।"],
  },
  exclusions: {
    en: ["Not every medicine is available; some brand-only or rare medicines may not be in the Jan Aushadhi range.", "This is a discount at the shop, not a cash payment or insurance."],
    hi: ["हर दवा उपलब्ध नहीं होती; कुछ केवल ब्रांड वाली या दुर्लभ दवाएँ जन औषधि में नहीं मिल सकतीं।", "यह दुकान पर मिलने वाली सस्ती दवा है, कोई नकद भुगतान या बीमा नहीं।"],
  },
  applicationProcess: {
    online: {
      en: [
        "Open the Janaushadhi Sugam app or janaushadhi.gov.in.",
        "Use 'Locate Kendra' to find the nearest Jan Aushadhi Kendra.",
        "Search for your medicine to see the generic option and its price.",
      ],
      hi: [
        "जनऔषधि सुगम ऐप या janaushadhi.gov.in खोलें।",
        "'केंद्र खोजें' से नज़दीकी जन औषधि केंद्र ढूँढें।",
        "अपनी दवा खोजकर उसका जेनेरिक विकल्प और दाम देखें।",
      ],
    },
    offline: {
      en: ["Visit any Jan Aushadhi Kendra with your prescription.", "Ask for the generic version of your medicine and pay at the counter."],
      hi: ["अपने पर्चे के साथ किसी भी जन औषधि केंद्र पर जाएँ।", "अपनी दवा का जेनेरिक विकल्प माँगें और काउंटर पर भुगतान करें।"],
    },
  },
  documents: {
    en: ["Doctor's prescription (for prescription medicines)"],
    hi: ["डॉक्टर का पर्चा (पर्चे वाली दवाओं के लिए)"],
  },
  faqs: [
    {
      q: { en: "Are generic medicines as good as branded ones?", hi: "क्या जेनेरिक दवाएँ ब्रांडेड जितनी अच्छी होती हैं?" },
      a: {
        en: "They contain the same active ingredient in the same strength. Jan Aushadhi medicines are also lab-tested batch by batch. Ask your doctor if you are unsure about a switch.",
        hi: "इनमें वही सक्रिय घटक उतनी ही मात्रा में होता है। जन औषधि की दवाओं की हर बैच की लैब जाँच भी होती है। बदलने को लेकर शंका हो तो डॉक्टर से पूछें।",
      },
    },
    {
      q: { en: "Can I open a Jan Aushadhi Kendra?", hi: "क्या मैं जन औषधि केंद्र खोल सकता/सकती हूँ?" },
      a: {
        en: "Yes. Individuals, pharmacists, NGOs and others can apply online on the Janaushadhi website. Incentives are offered, with extra support for women, SC/ST and divyang entrepreneurs.",
        hi: "हाँ। लोग, फ़ार्मासिस्ट, NGO और अन्य जनऔषधि वेबसाइट पर ऑनलाइन आवेदन कर सकते हैं। प्रोत्साहन राशि मिलती है, और महिलाओं, SC/ST व दिव्यांग उद्यमियों को अतिरिक्त मदद।",
      },
    },
  ],

  officialUrl: "https://janaushadhi.gov.in/",
  sources: [
    "https://janaushadhi.gov.in/",
    "https://static.pib.gov.in/WriteReadData/specificdocs/documents/2026/mar/doc202637814101.pdf",
    "https://www.drishtiias.com/daily-updates/daily-news-analysis/jan-aushadhi-diwas-2026",
  ],
  lastVerified: "2026-10-06",
  launchedYear: 2008,
  status: "active",
};

export default scheme;
