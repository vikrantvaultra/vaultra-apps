import { all, minAge, residentOf } from "@/lib/engine/build";
import type { Scheme } from "@/lib/types";

const scheme: Scheme = {
  slug: "mp-mukhyamantri-tirth-darshan-yojana",
  tier: "compact",
  name: { en: "Mukhyamantri Tirth Darshan Yojana (Madhya Pradesh)", hi: "मुख्यमंत्री तीर्थ दर्शन योजना (मध्य प्रदेश)" },
  aka: ["Tirth Darshan Yojana", "Teerth Darshan MP", "free pilgrimage MP"],
  shortDescription: {
    en: "Senior citizens of Madhya Pradesh aged 60 and above who don't pay income tax can go on one free pilgrimage by special train, with food and stay included.",
    hi: "मध्य प्रदेश के 60 साल या उससे ज़्यादा उम्र के बुज़ुर्ग, जो आयकर नहीं देते, विशेष ट्रेन से एक बार मुफ़्त तीर्थ यात्रा कर सकते हैं, जिसमें खाना और ठहरना शामिल है।",
  },
  level: "state",
  state: "madhya-pradesh",
  department: {
    en: "Religious Trusts and Endowments Department, Government of Madhya Pradesh",
    hi: "धार्मिक न्यास एवं धर्मस्व विभाग, मध्य प्रदेश सरकार",
  },
  categories: ["social-welfare"],
  tags: ["pilgrimage", "senior citizen", "tirth yatra", "train", "free travel", "madhya pradesh"],
  benefitType: "in-kind",
  isDBT: false,
  ageRange: { min: 60 },
  kundliHouse: "senior",
  eligibility: all(residentOf("madhya-pradesh"), minAge(60)),

  details: {
    en: [
      "Under Tirth Darshan Yojana, the state takes elderly residents on a pilgrimage to a listed holy place outside Madhya Pradesh, once in their lifetime, free of cost. Travel is by special train arranged with IRCTC.",
      "Applications are taken at the tehsil, and the district administration selects the pilgrims for each trip. Your spouse can travel with you, and people above 65 can take one helper.",
    ],
    hi: [
      "तीर्थ दर्शन योजना में राज्य सरकार बुज़ुर्ग निवासियों को जीवन में एक बार मध्य प्रदेश के बाहर किसी तय तीर्थ स्थान की मुफ़्त यात्रा कराती है। यात्रा IRCTC के साथ मिलकर चलाई गई विशेष ट्रेन से होती है।",
      "आवेदन तहसील में लिए जाते हैं, और हर यात्रा के लिए ज़िला प्रशासन तीर्थयात्रियों का चयन करता है। पति या पत्नी साथ जा सकते हैं, और 65 साल से ज़्यादा उम्र वाले एक सहायक ले जा सकते हैं।",
    ],
  },
  benefits: {
    en: [
      "Free train travel to a listed pilgrimage site and back.",
      "Food, stay and local transport during the trip are arranged by the government.",
      "Spouse can come along; a helper is allowed for pilgrims above 65.",
    ],
    hi: [
      "तय तीर्थ स्थान तक आने-जाने की मुफ़्त ट्रेन यात्रा।",
      "यात्रा के दौरान खाना, ठहरना और स्थानीय आवागमन सरकार की ओर से।",
      "पति या पत्नी साथ जा सकते हैं; 65 साल से ज़्यादा उम्र वालों को एक सहायक की अनुमति।",
    ],
  },
  eligibilityText: {
    en: [
      "A domicile of Madhya Pradesh aged 60 or above.",
      "Not an income-tax payer.",
      "Physically and mentally fit to travel, with no infectious disease.",
      "Has not gone on a pilgrimage under this scheme before.",
    ],
    hi: [
      "मध्य प्रदेश के मूल निवासी, उम्र 60 साल या उससे ज़्यादा।",
      "आयकरदाता न हों।",
      "यात्रा के लिए शारीरिक और मानसिक रूप से ठीक हों, कोई संक्रामक बीमारी न हो।",
      "पहले इस योजना में तीर्थ यात्रा न की हो।",
    ],
  },
  applicationProcess: {
    offline: {
      en: [
        "When a trip is announced, collect the form from your tehsil or sub-tehsil office.",
        "Submit it with a photo and address proof (such as ration card, voter ID or electricity bill).",
        "If selected, you will be told the travel date and boarding station.",
      ],
      hi: [
        "यात्रा की घोषणा होने पर अपनी तहसील या उप-तहसील कार्यालय से फ़ॉर्म लें।",
        "फ़ोटो और पते के प्रमाण (जैसे राशन कार्ड, वोटर ID या बिजली बिल) के साथ जमा करें।",
        "चुने जाने पर आपको यात्रा की तारीख और ट्रेन में चढ़ने का स्टेशन बताया जाएगा।",
      ],
    },
  },

  officialUrl: "https://panna.nic.in/en/scheme/cm-tirth-darshan-scheme/",
  sources: ["https://panna.nic.in/en/scheme/cm-tirth-darshan-scheme/"],
  lastVerified: "2026-10-06",
  launchedYear: 2012,
  status: "check-status",
};

export default scheme;
