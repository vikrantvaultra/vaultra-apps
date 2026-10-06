import { all, residentOf } from "@/lib/engine/build";
import type { Scheme } from "@/lib/types";

const scheme: Scheme = {
  slug: "ap-anna-canteen",
  tier: "compact",
  name: { en: "Anna Canteen", hi: "अन्ना कैंटीन" },
  aka: ["Anna Canteens", "₹5 meal Andhra", "AP subsidised meals"],
  shortDescription: {
    en: "Anna Canteens across Andhra Pradesh serve breakfast, lunch and dinner for ₹5 a meal to anyone who walks in.",
    hi: "आंध्र प्रदेश की अन्ना कैंटीनों में कोई भी व्यक्ति नाश्ता, दोपहर और रात का खाना ₹5 प्रति भोजन में खा सकता है।",
  },
  level: "state",
  state: "andhra-pradesh",
  department: {
    en: "Municipal Administration & Urban Development Department (Anna Canteens Trust), Government of Andhra Pradesh",
    hi: "नगर प्रशासन एवं शहरी विकास विभाग (अन्ना कैंटीन ट्रस्ट), आंध्र प्रदेश सरकार",
  },
  categories: ["social-welfare"],
  tags: ["food", "meal", "anna canteen", "5 rupees", "subsidised food", "andhra pradesh"],
  benefitType: "in-kind",
  isDBT: false,
  kundliHouse: "health",
  eligibility: all(residentOf("andhra-pradesh")),

  details: {
    en: [
      "Anna Canteens were first opened in 2018, closed in 2019, and reopened from 15 August 2024. There were about 205 canteens across the state by 2025, mostly in towns and cities.",
      "Each meal costs ₹5. Breakfast is served roughly 7 to 10 am, lunch 12:30 to 3 pm and dinner in the evening. The canteens are named after N. T. Rama Rao, known as 'Anna'.",
    ],
    hi: [
      "अन्ना कैंटीनें पहली बार 2018 में खुलीं, 2019 में बंद हुईं, और 15 अगस्त 2024 से फिर खुलीं। 2025 तक राज्य भर में लगभग 205 कैंटीनें थीं, ज़्यादातर शहरों और क़स्बों में।",
      "हर भोजन ₹5 का है। नाश्ता लगभग सुबह 7 से 10 बजे, दोपहर का खाना 12:30 से 3 बजे और रात का खाना शाम को मिलता है। कैंटीनों का नाम एन. टी. रामा राव ('अन्ना') के नाम पर है।",
    ],
  },
  benefits: {
    en: ["Breakfast, lunch and dinner at ₹5 a meal.", "No card, registration or income proof needed."],
    hi: ["नाश्ता, दोपहर और रात का खाना ₹5 प्रति भोजन।", "कोई कार्ड, रजिस्ट्रेशन या आय का सबूत नहीं चाहिए।"],
  },
  eligibilityText: {
    en: ["Open to anyone who visits an Anna Canteen.", "Meals are served during fixed timings while food lasts."],
    hi: ["अन्ना कैंटीन आने वाला कोई भी व्यक्ति खा सकता है।", "खाना तय समय पर, उपलब्ध रहने तक मिलता है।"],
  },
  applicationProcess: {
    offline: {
      en: ["Find the nearest Anna Canteen in your town.", "Pay ₹5 at the counter during meal timings and collect your meal."],
      hi: ["अपने शहर की सबसे नज़दीकी अन्ना कैंटीन ढूँढें।", "खाने के समय काउंटर पर ₹5 देकर खाना लें।"],
    },
  },

  officialUrl: "https://annacanteenstrust.ap.gov.in/",
  sources: [
    "https://annacanteenstrust.ap.gov.in/",
    "https://en.wikipedia.org/wiki/Anna_Canteen",
    "https://www.thenewsminute.com/andhra-pradesh/discontinued-by-ysrcp-tdp-relaunches-anna-canteens-in-andhra",
  ],
  lastVerified: "2026-10-06",
  launchedYear: 2024,
  status: "check-status",
};

export default scheme;
