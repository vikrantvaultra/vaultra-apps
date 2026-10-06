import { all, female, residentOf } from "@/lib/engine/build";
import type { Scheme } from "@/lib/types";

const scheme: Scheme = {
  slug: "mahila-udyamita-abhiyaan",
  tier: "compact",
  name: { en: "Mukhya Mantri Mahila Udyamita Abhiyaan", hi: "मुख्यमंत्री महिला उद्यमिता अभियान" },
  aka: ["MMUA", "Lakhpati Baideu", "Mahila Udyamita Abhiyan"],
  shortDescription: {
    en: "Women self-help group members in rural Assam get an enterprise fund of ₹10,000 to start a small business and become 'Lakhpati Baideus'.",
    hi: "ग्रामीण असम में स्वयं सहायता समूह की महिलाओं को छोटा कारोबार शुरू करने और 'लखपति बाइदेउ' बनने के लिए ₹10,000 का उद्यम कोष मिलता है।",
  },
  level: "state",
  state: "assam",
  department: { en: "Panchayat & Rural Development Department, Government of Assam (Assam State Rural Livelihoods Mission)", hi: "पंचायत एवं ग्रामीण विकास विभाग, असम सरकार (असम राज्य ग्रामीण आजीविका मिशन)" },
  categories: ["women-child", "business"],
  tags: ["women", "self help group", "shg", "lakhpati didi", "business", "assam"],
  benefitType: "cash",
  isDBT: true,
  kundliHouse: "business",
  eligibility: all(residentOf("assam"), female()),

  details: {
    en: [
      "Mukhya Mantri Mahila Udyamita Abhiyaan helps rural women in self-help groups grow small businesses so that each earns at least ₹1 lakh a year. Around 30 lakh women have received an enterprise fund of ₹10,000 each, and the state says 9.05 lakh have become 'Lakhpati Baideus'.",
      "It is run through the Assam State Rural Livelihoods Mission. The 2026-27 budget also announced help for individual SHG members to get collateral-free bank loans and a stamp duty waiver on SHG loans up to ₹10 lakh.",
    ],
    hi: [
      "मुख्यमंत्री महिला उद्यमिता अभियान स्वयं सहायता समूह की ग्रामीण महिलाओं को छोटे कारोबार बढ़ाने में मदद करता है, ताकि हर महिला साल में कम से कम ₹1 लाख कमाए। करीब 30 लाख महिलाओं को ₹10,000 का उद्यम कोष मिला है, और राज्य के अनुसार 9.05 लाख महिलाएँ 'लखपति बाइदेउ' बन चुकी हैं।",
      "इसे असम राज्य ग्रामीण आजीविका मिशन चलाता है। 2026-27 के बजट में SHG सदस्यों को बिना गारंटी बैंक ऋण दिलाने और ₹10 लाख तक के SHG ऋण पर स्टांप ड्यूटी माफ़ करने की भी घोषणा हुई।",
    ],
  },
  benefits: {
    en: [
      "An enterprise fund of ₹10,000 to start or expand a small business.",
      "Support to get collateral-free bank loans (guidelines awaited).",
      "No stamp duty on individual SHG loan agreements up to ₹10 lakh (as proposed in the budget).",
    ],
    hi: [
      "छोटा कारोबार शुरू करने या बढ़ाने के लिए ₹10,000 का उद्यम कोष।",
      "बिना गारंटी बैंक ऋण दिलाने में मदद (दिशानिर्देश आने बाकी)।",
      "₹10 लाख तक के व्यक्तिगत SHG ऋण समझौतों पर स्टांप ड्यूटी नहीं (बजट के प्रस्ताव के अनुसार)।",
    ],
  },
  eligibilityText: {
    en: [
      "A woman member of a self-help group under the Assam State Rural Livelihoods Mission.",
      "Lives in rural Assam.",
      "Other conditions are set in the scheme guidelines; ask your SHG or block mission office.",
    ],
    hi: [
      "असम राज्य ग्रामीण आजीविका मिशन के स्वयं सहायता समूह की महिला सदस्य।",
      "ग्रामीण असम में रहती हो।",
      "बाकी शर्तें योजना के दिशानिर्देशों में हैं; अपने SHG या ब्लॉक मिशन कार्यालय से पूछें।",
    ],
  },
  applicationProcess: {
    offline: {
      en: [
        "Join or stay active in an ASRLM self-help group in your village.",
        "Ask your SHG leader, Cluster Level Federation or block mission office about the next disbursement or loan support.",
        "Submit your business plan and bank details as they guide you.",
      ],
      hi: [
        "अपने गाँव के ASRLM स्वयं सहायता समूह से जुड़ें या उसमें सक्रिय रहें।",
        "अगली किस्त या ऋण सहायता के बारे में SHG प्रमुख, क्लस्टर स्तरीय संघ या ब्लॉक मिशन कार्यालय से पूछें।",
        "उनके बताए अनुसार अपनी कारोबार योजना और बैंक की जानकारी जमा करें।",
      ],
    },
  },

  officialUrl: "https://asrlms.assam.gov.in/",
  sources: ["https://aladigitallibrary.in/handle/123456789/4238", "https://asrlms.assam.gov.in/"],
  lastVerified: "2026-10-06",
  launchedYear: 2023,
  status: "check-status",
};

export default scheme;
