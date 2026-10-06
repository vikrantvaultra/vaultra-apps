import { all, residentOf, when } from "@/lib/engine/build";
import type { Scheme } from "@/lib/types";

const scheme: Scheme = {
  slug: "mukhyamantri-pashudhan-vikas-yojana",
  tier: "compact",
  name: { en: "Mukhyamantri Pashudhan Vikas Yojana", hi: "मुख्यमंत्री पशुधन विकास योजना" },
  aka: ["Pashudhan Yojana Jharkhand", "Mukhyamantri Pashudhan Yojana"],
  shortDescription: {
    en: "Jharkhand farmers and livestock keepers can get goats, pigs, poultry, ducks, sheep or milch cows on subsidy to start or grow animal farming.",
    hi: "झारखंड के किसान और पशुपालक बकरी, सूअर, मुर्गी, बत्तख, भेड़ या दुधारू गाय सब्सिडी पर लेकर पशुपालन शुरू कर सकते हैं या बढ़ा सकते हैं।",
  },
  level: "state",
  state: "jharkhand",
  department: {
    en: "Department of Agriculture, Animal Husbandry and Co-operative (Animal Husbandry Directorate), Government of Jharkhand",
    hi: "कृषि, पशुपालन एवं सहकारिता विभाग (पशुपालन निदेशालय), झारखंड सरकार",
  },
  categories: ["agriculture"],
  tags: ["livestock", "goat", "dairy cow", "poultry", "piggery", "subsidy", "jharkhand"],
  benefitType: "in-kind",
  isDBT: false,
  kundliHouse: "farming",
  eligibility: all(residentOf("jharkhand"), when("occupation", "in", ["farmer", "agri-labourer", "livestock-dairy"])),

  details: {
    en: [
      "Mukhyamantri Pashudhan Vikas Yojana is Jharkhand's umbrella scheme for animal farming. It groups several schemes: goat, pig, backyard poultry, broiler and duck rearing, sheep rearing, milch cow distribution, Kamdhenu dairy farming, support for livestock entrepreneurs, and help with inputs and milk collection.",
      "Animals and units are given on subsidy, with the share depending on the component and your category. The 2026-27 budget provides about ₹481 crore for it.",
    ],
    hi: [
      "मुख्यमंत्री पशुधन विकास योजना झारखंड की पशुपालन से जुड़ी बड़ी योजना है। इसमें कई योजनाएँ शामिल हैं: बकरी, सूअर, बैकयार्ड मुर्गी, ब्रॉयलर और बत्तख पालन, भेड़ पालन, दुधारू गाय वितरण, कामधेनु डेयरी फ़ार्मिंग, उद्यमी पशुपालकों की मदद, और तकनीकी सामान व दूध संग्रह में सहायता।",
      "पशु और यूनिट सब्सिडी पर दिए जाते हैं, और सब्सिडी का हिस्सा योजना के घटक और आपकी श्रेणी पर निर्भर करता है। 2026-27 के बजट में इसके लिए लगभग ₹481 करोड़ रखे गए हैं।",
    ],
  },
  benefits: {
    en: [
      "Goats, pigs, sheep, poultry birds, ducklings or milch cows on subsidy.",
      "Support for dairy units (Kamdhenu), livestock entrepreneurs, and inputs like feed and equipment.",
      "Help with milk collection, processing and marketing through the dairy network.",
    ],
    hi: [
      "बकरी, सूअर, भेड़, मुर्गी, बत्तख के चूज़े या दुधारू गाय सब्सिडी पर।",
      "डेयरी यूनिट (कामधेनु), उद्यमी पशुपालकों और चारा व उपकरण जैसे सामान के लिए मदद।",
      "डेयरी नेटवर्क के ज़रिए दूध संग्रह, प्रोसेसिंग और बिक्री में सहायता।",
    ],
  },
  eligibilityText: {
    en: [
      "Resident of Jharkhand.",
      "A farmer, landless farm worker or livestock keeper who can house and look after the animals.",
      "Subsidy share, unit size and selection rules differ by component and category. Check them at your district animal husbandry office.",
    ],
    hi: [
      "झारखंड के निवासी।",
      "किसान, भूमिहीन खेतिहर मज़दूर या पशुपालक, जो पशुओं को रखने और देखभाल करने में सक्षम हों।",
      "सब्सिडी का हिस्सा, यूनिट का आकार और चयन के नियम हर घटक और श्रेणी के हिसाब से अलग हैं। इन्हें ज़िला पशुपालन कार्यालय से पता करें।",
    ],
  },
  applicationProcess: {
    offline: {
      en: [
        "Contact your District Animal Husbandry Officer or the block livestock officer when applications are invited.",
        "Fill in the form for the component you want and attach your documents.",
        "Selected beneficiaries pay their share (if any) and receive the animals or unit.",
      ],
      hi: [
        "आवेदन माँगे जाने पर अपने ज़िला पशुपालन पदाधिकारी या प्रखंड पशुपालन पदाधिकारी से संपर्क करें।",
        "जिस घटक का लाभ चाहिए उसका फ़ॉर्म भरें और दस्तावेज़ लगाएँ।",
        "चुने गए लाभार्थी अपना हिस्सा (अगर हो) जमा करते हैं और उन्हें पशु या यूनिट मिलती है।",
      ],
    },
  },

  officialUrl: "https://finance.jharkhand.gov.in/pdf/Budget_2026_27/Budget_Speech.pdf",
  sources: ["https://finance.jharkhand.gov.in/pdf/Budget_2026_27/Budget_Speech.pdf", "https://cm.jharkhand.gov.in/node/13786"],
  lastVerified: "2026-10-06",
  launchedYear: 2021,
  status: "check-status",
};

export default scheme;
