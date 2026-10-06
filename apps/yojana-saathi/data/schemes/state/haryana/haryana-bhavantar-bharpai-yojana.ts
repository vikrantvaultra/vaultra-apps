import { all, labelled, residentOf, when } from "@/lib/engine/build";
import type { Scheme } from "@/lib/types";

const scheme: Scheme = {
  slug: "haryana-bhavantar-bharpai-yojana",
  tier: "compact",
  name: { en: "Bhavantar Bharpai Yojana (Haryana)", hi: "भावांतर भरपाई योजना (हरियाणा)" },
  aka: ["BBY", "Bhavantar Bharpayee Yojana"],
  shortDescription: {
    en: "If registered Haryana vegetable and fruit growers sell below the government's protected price, the state pays them the difference, up to a fixed yield per acre.",
    hi: "हरियाणा के पंजीकृत सब्ज़ी और फल उत्पादक अगर सरकार के तय संरक्षित मूल्य से कम दाम पर बेचते हैं, तो सरकार प्रति एकड़ तय उपज तक भाव का अंतर भरती है।",
  },
  level: "state",
  state: "haryana",
  department: {
    en: "Horticulture Department and Haryana State Agricultural Marketing Board",
    hi: "बागवानी विभाग और हरियाणा राज्य कृषि विपणन बोर्ड",
  },
  categories: ["agriculture"],
  tags: ["vegetables", "horticulture", "price support", "bhavantar", "farmer", "haryana"],
  benefitType: "cash",
  isDBT: true,
  kundliHouse: "farming",
  eligibility: all(
    residentOf("haryana"),
    labelled(when("occupation", "eq", "farmer"), { en: "You are a farmer", hi: "आप किसान हैं" }),
  ),

  details: {
    en: [
      "Bhavantar Bharpai Yojana protects vegetable and fruit growers when market prices crash at harvest. The government fixes a protected price and an expected yield per acre for each covered crop.",
      "If you sell in a regulated mandi during the set sale period and the price is below the protected price, the difference is paid to you. The payment is the price gap multiplied by your sold quantity or the fixed yield per acre, whichever is lower. The scheme started with tomato, onion, potato and cauliflower.",
    ],
    hi: [
      "भावांतर भरपाई योजना फ़सल कटाई के समय बाज़ार भाव गिरने पर सब्ज़ी और फल उत्पादकों को बचाती है। सरकार हर शामिल फ़सल के लिए संरक्षित मूल्य और प्रति एकड़ अनुमानित उपज तय करती है।",
      "अगर आप तय बिक्री अवधि में मंडी में बेचते हैं और भाव संरक्षित मूल्य से कम है, तो अंतर की भरपाई होती है। भुगतान = भाव का अंतर × बेची गई मात्रा या प्रति एकड़ तय उपज, जो कम हो। योजना टमाटर, प्याज, आलू और फूलगोभी से शुरू हुई थी।",
    ],
  },
  benefits: {
    en: [
      "The gap between the protected price and your mandi sale price is paid to you.",
      "Paid on the quantity sold on J-form or the fixed yield per acre, whichever is less.",
    ],
    hi: ["संरक्षित मूल्य और मंडी में मिले दाम के बीच का अंतर आपको मिलता है।", "J-फ़ॉर्म पर बेची गई मात्रा या प्रति एकड़ तय उपज, जो कम हो, उस पर भुगतान।"],
  },
  eligibilityText: {
    en: [
      "A vegetable or fruit grower in Haryana: land owner, lease holder or tenant.",
      "Registered on the BBY portal during the sowing-period window for that crop.",
      "Area verified by the Horticulture Department, and the crop sold in a mandi during the set sale period with a J-form.",
    ],
    hi: [
      "हरियाणा का सब्ज़ी या फल उत्पादक: ज़मीन का मालिक, पट्टेदार या काश्तकार।",
      "उस फ़सल की बिजाई के समय BBY पोर्टल पर पंजीकरण किया हो।",
      "बागवानी विभाग ने रकबे की पुष्टि की हो, और फ़सल तय बिक्री अवधि में मंडी में J-फ़ॉर्म पर बेची गई हो।",
    ],
  },
  applicationProcess: {
    online: {
      en: [
        "Register for free on the Bhavantar Bharpai portal (via ekharid.in or hsamb.org.in) during the sowing window, with land, crop and bank details.",
        "After area verification, sell your crop in a mandi during the sale period; the sale is uploaded from the J-form.",
        "If the price was below the protected price, the difference is paid into your bank account.",
      ],
      hi: [
        "बिजाई के समय भावांतर भरपाई पोर्टल (ekharid.in या hsamb.org.in से) पर ज़मीन, फ़सल और बैंक विवरण के साथ मुफ़्त पंजीकरण करें।",
        "रकबे की पुष्टि के बाद बिक्री अवधि में मंडी में फ़सल बेचें; बिक्री J-फ़ॉर्म से अपलोड होती है।",
        "अगर भाव संरक्षित मूल्य से कम रहा, तो अंतर की राशि आपके बैंक खाते में आती है।",
      ],
    },
  },

  officialUrl: "https://ekharid.in/Home/BhavantarBharpaiiYojana",
  sources: ["https://ekharid.in/Home/BhavantarBharpaiiYojana", "https://hsamb.org.in/farmers-welfare-scheme/financial-assistance"],
  lastVerified: "2026-10-06",
  launchedYear: 2018,
  status: "check-status",
};

export default scheme;
