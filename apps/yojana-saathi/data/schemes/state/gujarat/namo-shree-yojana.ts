import { all, female, isTrue, residentOf } from "@/lib/engine/build";
import type { Scheme } from "@/lib/types";

const scheme: Scheme = {
  slug: "namo-shree-yojana",
  tier: "compact",
  overlapGroup: "maternity-cash",
  name: { en: "Namo Shree Yojana", hi: "नमो श्री योजना" },
  aka: ["Namo Shri", "Namo Shree maternity scheme"],
  shortDescription: {
    en: "Pregnant women and new mothers in Gujarat from SC, ST, BPL, NFSA, PMJAY, e-Shram and similar families get ₹12,000 in instalments if they deliver in a hospital.",
    hi: "गुजरात में SC, ST, BPL, NFSA, PMJAY, ई-श्रम जैसे परिवारों की गर्भवती महिलाओं और नई माताओं को अस्पताल में प्रसव होने पर किस्तों में ₹12,000 मिलते हैं।",
  },
  level: "state",
  state: "gujarat",
  department: { en: "Women and Child Development Department, Government of Gujarat", hi: "महिला एवं बाल विकास विभाग, गुजरात सरकार" },
  categories: ["women-child", "health"],
  tags: ["pregnant women", "maternity", "delivery", "mother", "namo shree", "gujarat"],
  benefitType: "cash",
  isDBT: true,
  kundliHouse: "women-family",
  eligibility: all(residentOf("gujarat"), female(), isTrue("pregnantOrLactating")),

  details: {
    en: [
      "Namo Shree Yojana was announced in Gujarat's 2024-25 budget to support the nutrition of pregnant women and new mothers and to encourage hospital deliveries. It is meant to run alongside the central PM Matru Vandana Yojana and Janani Suraksha Yojana.",
      "The announced benefit is ₹12,000 in instalments from pregnancy to delivery, for women from listed groups. We could not confirm the current instalment rules or that payments are still being made, so check with your ASHA or Anganwadi worker.",
    ],
    hi: [
      "नमो श्री योजना की घोषणा गुजरात के 2024-25 के बजट में गर्भवती महिलाओं और नई माताओं के पोषण और अस्पताल में प्रसव को बढ़ावा देने के लिए हुई थी। यह केंद्र की प्रधानमंत्री मातृ वंदना योजना और जननी सुरक्षा योजना के साथ चलने के लिए है।",
      "घोषित लाभ सूचीबद्ध वर्गों की महिलाओं के लिए गर्भावस्था से प्रसव तक किस्तों में ₹12,000 है। मौजूदा किस्तों के नियम और भुगतान अब भी जारी है या नहीं, यह हम पक्का नहीं कर सके, इसलिए अपनी आशा या आंगनवाड़ी कार्यकर्ता से पूछें।",
    ],
  },
  benefits: {
    en: ["₹12,000 in instalments from pregnancy to delivery, paid into your bank account.", "Can be taken along with PM Matru Vandana Yojana and Janani Suraksha Yojana."],
    hi: ["गर्भावस्था से प्रसव तक किस्तों में ₹12,000, आपके बैंक खाते में।", "प्रधानमंत्री मातृ वंदना योजना और जननी सुरक्षा योजना के साथ भी मिल सकता है।"],
  },
  eligibilityText: {
    en: [
      "A pregnant woman or new mother living in Gujarat.",
      "From one of these groups: SC, ST, NFSA ration card, PMJAY card, BPL, e-Shram card, women farmers, MGNREGA workers, or families earning up to ₹8 lakh a year.",
      "The baby must be delivered in a government or private hospital.",
    ],
    hi: [
      "गुजरात में रहने वाली गर्भवती महिला या नई माँ।",
      "इनमें से किसी वर्ग की हो: SC, ST, NFSA राशन कार्ड, PMJAY कार्ड, BPL, ई-श्रम कार्ड, महिला किसान, मनरेगा मज़दूर, या ₹8 लाख तक सालाना आय वाले परिवार।",
      "प्रसव सरकारी या निजी अस्पताल में होना चाहिए।",
    ],
  },
  applicationProcess: {
    offline: {
      en: ["At your first antenatal check-up, ask the ASHA or ANM to register you for Namo Shree.", "Keep your MAMTA card, Aadhaar and bank details ready; the last instalment needs the hospital delivery certificate."],
      hi: ["पहली प्रसव-पूर्व जाँच पर आशा या ANM से नमो श्री में नाम दर्ज करवाएँ।", "ममता कार्ड, आधार और बैंक विवरण तैयार रखें; आख़िरी किस्त के लिए अस्पताल का प्रसव प्रमाण पत्र चाहिए।"],
    },
  },

  officialUrl: "https://wcd.gujarat.gov.in/",
  sources: ["https://en.vikaspedia.in/viewcontent/schemesall/state-specific-schemes/welfare-schemes-of-gujarat/namo-shree-yojana?lgn=en", "https://wcd.gujarat.gov.in/"],
  lastVerified: "2026-10-06",
  launchedYear: 2024,
  status: "check-status",
};

export default scheme;
