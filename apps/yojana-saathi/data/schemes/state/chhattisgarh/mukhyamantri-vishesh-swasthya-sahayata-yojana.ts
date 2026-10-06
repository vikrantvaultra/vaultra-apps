import { all, isTrue, labelled, residentOf } from "@/lib/engine/build";
import type { Scheme } from "@/lib/types";

const scheme: Scheme = {
  slug: "mukhyamantri-vishesh-swasthya-sahayata-yojana",
  tier: "compact",
  name: { en: "Mukhyamantri Vishesh Swasthya Sahayata Yojana", hi: "मुख्यमंत्री विशेष स्वास्थ्य सहायता योजना" },
  aka: ["Vishesh Swasthya Sahayata", "CM special health assistance Chhattisgarh", "rare disease help CG"],
  shortDescription: {
    en: "Priority and Antyodaya ration-card families in Chhattisgarh can get up to ₹25 lakh for treating serious and rare diseases such as organ transplants, cancers and heart disease.",
    hi: "छत्तीसगढ़ के प्राथमिकता और अंत्योदय राशन कार्ड वाले परिवारों को अंग प्रत्यारोपण, कैंसर और हृदय रोग जैसी गंभीर व दुर्लभ बीमारियों के इलाज के लिए ₹25 लाख तक की मदद।",
  },
  level: "state",
  state: "chhattisgarh",
  department: {
    en: "Public Health and Family Welfare Department, Government of Chhattisgarh",
    hi: "लोक स्वास्थ्य एवं परिवार कल्याण विभाग, छत्तीसगढ़ सरकार",
  },
  categories: ["health"],
  tags: ["serious illness", "rare disease", "cancer", "transplant", "treatment help", "chhattisgarh"],
  benefitType: "insurance",
  isDBT: false,
  value: { amount: 2_500_000, period: "one-time", kind: "cover" },
  kundliHouse: "health",
  eligibility: all(
    residentOf("chhattisgarh"),
    labelled(isTrue("bpl"), {
      en: "Your family has a priority or Antyodaya ration card",
      hi: "परिवार के पास प्राथमिकता या अंत्योदय राशन कार्ड हो",
    }),
  ),

  details: {
    en: [
      "This scheme pays for costly treatment of listed serious and rare diseases when normal Ayushman cover is not enough. It gives up to ₹25 lakh per family.",
      "Treatment can be taken at government hospitals in or outside the state, at registered private hospitals, or at CGHS-linked hospitals.",
    ],
    hi: [
      "यह योजना चुनी हुई गंभीर और दुर्लभ बीमारियों के महँगे इलाज का ख़र्च उठाती है, जब आयुष्मान का सामान्य कवर काफ़ी न हो। इसमें प्रति परिवार ₹25 लाख तक की मदद मिलती है।",
      "इलाज राज्य के अंदर या बाहर के सरकारी अस्पतालों, पंजीकृत निजी अस्पतालों या CGHS से जुड़े अस्पतालों में हो सकता है।",
    ],
  },
  benefits: {
    en: [
      "Up to ₹25 lakh per family for treatment.",
      "Covers liver, kidney, heart and lung transplants, serious heart disease, haemophilia, blood cancer, brain tumour, breast cancer, aplastic anaemia, cochlear implants, acid-attack treatment and other listed rare diseases.",
    ],
    hi: [
      "इलाज के लिए प्रति परिवार ₹25 लाख तक।",
      "लिवर, किडनी, हृदय और फेफड़ों का प्रत्यारोपण, गंभीर हृदय रोग, हीमोफ़ीलिया, ब्लड कैंसर, ब्रेन ट्यूमर, ब्रेस्ट कैंसर, एप्लास्टिक एनीमिया, कॉक्लियर इम्प्लांट, एसिड अटैक पीड़ितों का इलाज और अन्य चुनी हुई दुर्लभ बीमारियाँ।",
    ],
  },
  eligibilityText: {
    en: [
      "A family living in Chhattisgarh with a priority or Antyodaya ration card.",
      "The patient has one of the serious or rare diseases on the scheme's list.",
    ],
    hi: [
      "छत्तीसगढ़ में रहने वाला परिवार, जिसके पास प्राथमिकता या अंत्योदय राशन कार्ड हो।",
      "मरीज़ को योजना की सूची वाली कोई गंभीर या दुर्लभ बीमारी हो।",
    ],
  },
  applicationProcess: {
    offline: {
      en: [
        "Get the treating hospital's estimate and diagnosis papers.",
        "Apply at the Ayushman branch of your district's Chief Medical and Health Officer (CMHO) office, or ask at the district hospital, with the ration card, Aadhaar and medical papers.",
        "Once the case is approved, the money is paid to the hospital for your treatment.",
      ],
      hi: [
        "इलाज करने वाले अस्पताल से ख़र्च का अनुमान और जाँच के काग़ज़ लें।",
        "राशन कार्ड, आधार और मेडिकल काग़ज़ों के साथ अपने ज़िले के मुख्य चिकित्सा एवं स्वास्थ्य अधिकारी (CMHO) कार्यालय की आयुष्मान शाखा में आवेदन करें, या ज़िला अस्पताल में पूछें।",
        "मामला मंज़ूर होने पर इलाज का पैसा अस्पताल को दिया जाता है।",
      ],
    },
  },
  officialUrl: "https://cghealth.nic.in/",
  sources: [
    "https://dprcg.gov.in/post/1783079258/%E0%A4%AE%E0%A5%8B%E0%A4%B9%E0%A4%B2%E0%A4%BE-%E0%A4%AE%E0%A5%81%E0%A4%96%E0%A5%8D%E0%A4%AF%E0%A4%AE%E0%A4%82%E0%A4%A4%E0%A5%8D%E0%A4%B0%E0%A5%80-%E0%A4%B5%E0%A4%BF%E0%A4%B6%E0%A5%87%E0%A4%B7-%E0%A4%B8%E0%A5%8D%E0%A4%B5%E0%A4%BE%E0%A4%B8%E0%A5%8D%E0%A4%A5%E0%A5%8D%E0%A4%AF-%E0%A4%B8%E0%A4%B9%E0%A4%BE%E0%A4%AF%E0%A4%A4%E0%A4%BE-%E0%A4%AF%E0%A5%8B%E0%A4%9C%E0%A4%A8%E0%A4%BE-%E0%A4%B8%E0%A5%87-%E0%A4%97%E0%A4%82%E0%A4%AD%E0%A5%80%E0%A4%B0-%E0%A4%AC%E0%A5%80%E0%A4%AE%E0%A4%BE%E0%A4%B0%E0%A4%BF%E0%A4%AF%E0%A5%8B%E0%A4%82-%E0%A4%95%E0%A5%87-%E0%A4%89%E0%A4%AA%E0%A4%9A%E0%A4%BE%E0%A4%B0-%E0%A4%AE%E0%A5%87%E0%A4%82-%E0%A4%AE%E0%A4%BF%E0%A4%B2-%E0%A4%B0%E0%A4%B9%E0%A5%80-%E0%A4%86%E0%A4%B0%E0%A5%8D%E0%A4%A5%E0%A4%BF%E0%A4%95-%E0%A4%B8%E0%A4%B9%E0%A4%BE%E0%A4%AF%E0%A4%A4%E0%A4%BE",
    "https://dprcg.gov.in/post/1784129316/%E0%A4%B8%E0%A5%82%E0%A4%B0%E0%A4%9C%E0%A4%AA%E0%A5%81%E0%A4%B0-%E0%A4%B8%E0%A5%82%E0%A4%B0%E0%A4%9C%E0%A4%AA%E0%A5%81%E0%A4%B0-%E0%A4%9C%E0%A4%BF%E0%A4%B2%E0%A5%87-%E0%A4%AE%E0%A5%87%E0%A4%82-%E0%A4%9A%E0%A4%B2%E0%A5%87%E0%A4%97%E0%A4%BE-%E0%A4%86%E0%A4%AF%E0%A5%81%E0%A4%B7%E0%A5%8D%E0%A4%AE%E0%A4%BE%E0%A4%A8-%E0%A4%95%E0%A4%BE%E0%A4%B0%E0%A5%8D%E0%A4%A1-%E0%A4%AE%E0%A4%B9%E0%A4%BE-%E0%A4%85%E0%A4%AD%E0%A4%BF%E0%A4%AF%E0%A4%BE%E0%A4%A8",
  ],
  lastVerified: "2026-10-06",
  launchedYear: 2024,
  status: "active",
};

export default scheme;
