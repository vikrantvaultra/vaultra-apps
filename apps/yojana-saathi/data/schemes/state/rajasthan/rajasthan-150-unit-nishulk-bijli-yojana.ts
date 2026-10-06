import { all, residentOf } from "@/lib/engine/build";
import type { Scheme } from "@/lib/types";

const scheme: Scheme = {
  slug: "rajasthan-150-unit-nishulk-bijli-yojana",
  tier: "compact",
  name: { en: "Mukhyamantri 150 Unit Nishulk Bijli Yojana", hi: "मुख्यमंत्री 150 यूनिट निःशुल्क बिजली योजना" },
  aka: ["Free electricity Rajasthan", "150 unit free bijli", "Mukhyamantri Nishulk Bijli Yojana"],
  shortDescription: {
    en: "Rajasthan households in the free electricity scheme get up to 150 units free every month when they put up a rooftop solar plant, with an extra state subsidy on top of PM Surya Ghar.",
    hi: "राजस्थान में मुफ़्त बिजली योजना से जुड़े घरों को छत पर सोलर प्लांट लगाने पर हर महीने 150 यूनिट तक बिजली मुफ़्त मिलती है, साथ में PM सूर्य घर के ऊपर राज्य की अतिरिक्त सब्सिडी।",
  },
  level: "state",
  state: "rajasthan",
  department: { en: "Energy Department (Rajasthan DISCOMs), Government of Rajasthan", hi: "ऊर्जा विभाग (राजस्थान डिस्कॉम), राजस्थान सरकार" },
  categories: ["energy-savings"],
  tags: ["free electricity", "bijli", "solar", "rooftop solar", "surya ghar", "rajasthan"],
  benefitType: "composite",
  isDBT: false,
  kundliHouse: "energy-savings",
  eligibility: all(residentOf("rajasthan")),

  details: {
    en: [
      "In 2025 Rajasthan revamped its free electricity scheme for domestic consumers. Instead of 100 free units from the grid, households now get up to 150 units free each month by generating power from a rooftop solar plant.",
      "Consumers registered under the Mukhyamantri free electricity scheme can install a rooftop plant of about 1.1 kW under the central PM Surya Ghar Muft Bijli Yojana. The state adds its own subsidy on top of the central one, so the plant costs the household little or nothing.",
    ],
    hi: [
      "2025 में राजस्थान ने घरेलू उपभोक्ताओं की मुफ़्त बिजली योजना को नया रूप दिया। ग्रिड से 100 यूनिट मुफ़्त की जगह, अब घर छत पर लगे सोलर प्लांट से बिजली बनाकर हर महीने 150 यूनिट तक मुफ़्त पाते हैं।",
      "मुख्यमंत्री मुफ़्त बिजली योजना में पंजीकृत उपभोक्ता केंद्र की PM सूर्य घर मुफ़्त बिजली योजना के तहत लगभग 1.1 kW का रूफ़टॉप प्लांट लगा सकते हैं। राज्य केंद्र की सब्सिडी के ऊपर अपनी सब्सिडी जोड़ता है, जिससे घर का ख़र्च बहुत कम या शून्य रहता है।",
    ],
  },
  benefits: {
    en: [
      "Up to 150 units of electricity free every month.",
      "An extra state subsidy for the rooftop solar plant, on top of the central PM Surya Ghar subsidy.",
      "Lower or zero electricity bills for years after installation.",
    ],
    hi: [
      "हर महीने 150 यूनिट तक बिजली मुफ़्त।",
      "रूफ़टॉप सोलर प्लांट के लिए केंद्र की PM सूर्य घर सब्सिडी के ऊपर राज्य की अतिरिक्त सब्सिडी।",
      "प्लांट लगने के बाद सालों तक बिजली का बिल बहुत कम या शून्य।",
    ],
  },
  eligibilityText: {
    en: [
      "You are a domestic electricity consumer of a Rajasthan DISCOM.",
      "You are registered under the Mukhyamantri free electricity scheme.",
      "You install a rooftop solar plant (about 1.1 kW or more) under PM Surya Ghar.",
    ],
    hi: [
      "आप राजस्थान डिस्कॉम के घरेलू बिजली उपभोक्ता हैं।",
      "आप मुख्यमंत्री मुफ़्त बिजली योजना में पंजीकृत हैं।",
      "आप PM सूर्य घर के तहत छत पर सोलर प्लांट (लगभग 1.1 kW या ज़्यादा) लगाते हैं।",
    ],
  },
  applicationProcess: {
    online: {
      en: [
        "Register on pmsuryaghar.gov.in with your electricity account number and choose Rajasthan and your DISCOM.",
        "Pick an empanelled vendor, get the rooftop plant installed and the net meter fitted.",
        "Submit the installation details on the portal to receive the central and state subsidy.",
      ],
      hi: [
        "pmsuryaghar.gov.in पर अपने बिजली खाता नंबर से पंजीकरण करें और राजस्थान व अपना डिस्कॉम चुनें।",
        "सूचीबद्ध वेंडर चुनें, छत पर प्लांट लगवाएँ और नेट मीटर लगवाएँ।",
        "केंद्र और राज्य की सब्सिडी पाने के लिए पोर्टल पर प्लांट का विवरण जमा करें।",
      ],
    },
  },

  officialUrl: "https://pmsuryaghar.gov.in/",
  sources: [
    "https://energy.rajasthan.gov.in/",
    "https://en.vikaspedia.in/viewcontent/schemesall/state-specific-schemes/welfare-schemes-of-rajasthan/150-unit-nishulk-bijli-yojana",
    "https://www.business-standard.com/india-news/rajasthan-steps-up-rooftop-solar-rollout-amid-push-for-clean-energy-126011200923_1.html",
  ],
  lastVerified: "2026-10-06",
  launchedYear: 2025,
  status: "active",
};

export default scheme;
