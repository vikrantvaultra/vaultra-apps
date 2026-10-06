import { all, isTrue, labelled, residentOf } from "@/lib/engine/build";
import type { Scheme } from "@/lib/types";

const scheme: Scheme = {
  slug: "punjab-meri-rasoi-yojana",
  tier: "compact",
  name: { en: "Meri Rasoi Yojana (Punjab)", hi: "मेरी रसोई योजना (पंजाब)" },
  aka: ["Meri Rasoi", "Punjab free ration kit"],
  shortDescription: {
    en: "About 40 lakh NFSA ration card families in Punjab are to get a free quarterly kit of dal, sugar, mustard oil, turmeric and salt, on top of their wheat.",
    hi: "पंजाब के लगभग 40 लाख NFSA राशन कार्ड वाले परिवारों को गेहूँ के अलावा हर तीन महीने में दाल, चीनी, सरसों का तेल, हल्दी और नमक की मुफ़्त किट मिलनी है।",
  },
  level: "state",
  state: "punjab",
  department: {
    en: "Department of Food, Civil Supplies and Consumer Affairs, Government of Punjab (Markfed as nodal agency)",
    hi: "खाद्य, नागरिक आपूर्ति और उपभोक्ता मामले विभाग, पंजाब सरकार (मार्कफ़ेड नोडल एजेंसी)",
  },
  categories: ["social-welfare"],
  tags: ["free ration", "ration kit", "dal", "food", "nfsa", "punjab"],
  benefitType: "in-kind",
  isDBT: false,
  kundliHouse: "home",
  eligibility: all(
    residentOf("punjab"),
    labelled(isTrue("bpl"), { en: "Family has an NFSA / Smart Ration Card", hi: "परिवार के पास NFSA / स्मार्ट राशन कार्ड हो" }),
  ),

  details: {
    en: [
      "Meri Rasoi Yojana was announced by the Chief Minister in early 2026 and included in the 2026-27 budget with ₹900 crore. Kits were due to start from April 2026.",
      "Each kit is meant to contain 2 kg chana dal, 2 kg sugar, 1 litre mustard oil, 200 g turmeric and 1 kg salt, given free every quarter through ration depots in addition to the wheat families already get under the National Food Security Act.",
    ],
    hi: [
      "मेरी रसोई योजना की घोषणा मुख्यमंत्री ने 2026 की शुरुआत में की और 2026-27 के बजट में इसके लिए ₹900 करोड़ रखे गए। किट अप्रैल 2026 से मिलनी शुरू होनी थीं।",
      "हर किट में 2 किलो चना दाल, 2 किलो चीनी, 1 लीटर सरसों का तेल, 200 ग्राम हल्दी और 1 किलो नमक होना है, जो हर तीन महीने में राशन डिपो से मुफ़्त मिलेगी। यह राष्ट्रीय खाद्य सुरक्षा क़ानून के तहत मिलने वाले गेहूँ के अलावा है।",
    ],
  },
  benefits: {
    en: [
      "A free food kit every three months: dal, sugar, mustard oil, turmeric and salt.",
      "Given in addition to your regular wheat under NFSA.",
    ],
    hi: [
      "हर तीन महीने में मुफ़्त खाने की किट: दाल, चीनी, सरसों का तेल, हल्दी और नमक।",
      "NFSA के तहत मिलने वाले गेहूँ के अलावा।",
    ],
  },
  eligibilityText: {
    en: ["A family in Punjab covered under the NFSA / Smart Ration Card scheme."],
    hi: ["पंजाब का वह परिवार जो NFSA / स्मार्ट राशन कार्ड योजना में शामिल है।"],
  },
  applicationProcess: {
    offline: {
      en: [
        "No separate application is needed if you already have an NFSA / Smart Ration Card.",
        "Ask at your ration depot (fair price shop) when the kit is being distributed and collect it with your ration card.",
      ],
      hi: [
        "अगर आपके पास पहले से NFSA / स्मार्ट राशन कार्ड है, तो अलग आवेदन की ज़रूरत नहीं।",
        "अपने राशन डिपो पर पूछें कि किट कब बँट रही है, और राशन कार्ड दिखाकर ले लें।",
      ],
    },
  },

  officialUrl:
    "https://ipr.punjab.gov.in/en/press-releases/hq-press-releases/historic-announcement-by-cm-bhagwant-singh-mann-40-lakh-families-to-receive-free-ration-under-meri-rasoi-yojna/",
  sources: [
    "https://ipr.punjab.gov.in/en/press-releases/hq-press-releases/historic-announcement-by-cm-bhagwant-singh-mann-40-lakh-families-to-receive-free-ration-under-meri-rasoi-yojna/",
    "https://finance.punjab.gov.in/uploads/d7212a72-2d72-4506-9a47-064ff8f76b7c_Budget_Speech_English%202026-27.pdf",
  ],
  lastVerified: "2026-10-06",
  launchedYear: 2026,
  status: "check-status",
};

export default scheme;
