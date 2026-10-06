import { all, labelled, maxAge, minAge, residentOf, when } from "@/lib/engine/build";
import type { Scheme } from "@/lib/types";

const scheme: Scheme = {
  slug: "mukhyamantri-yuva-sambal-yojana",
  tier: "compact",
  overlapGroup: "unemployment-allowance",
  name: { en: "Mukhyamantri Yuva Sambal Yojana", hi: "मुख्यमंत्री युवा संबल योजना" },
  aka: ["Berojgari Bhatta Rajasthan", "Rajasthan unemployment allowance", "Yuva Sambal"],
  shortDescription: {
    en: "Unemployed graduates in Rajasthan get a monthly unemployment allowance for up to two years, with a short daily internship at a government office.",
    hi: "राजस्थान के बेरोज़गार स्नातकों को दो साल तक हर महीने बेरोज़गारी भत्ता मिलता है, साथ में किसी सरकारी दफ़्तर में रोज़ थोड़े समय की इंटर्नशिप।",
  },
  level: "state",
  state: "rajasthan",
  department: { en: "Skill, Employment and Entrepreneurship Department (Directorate of Employment), Government of Rajasthan", hi: "कौशल, रोज़गार एवं उद्यमिता विभाग (रोज़गार निदेशालय), राजस्थान सरकार" },
  categories: ["skills-employment"],
  tags: ["unemployment allowance", "berojgari bhatta", "graduate", "youth", "rajasthan"],
  benefitType: "cash",
  isDBT: true,
  ageRange: { min: 21, max: 35 },
  kundliHouse: "career",
  eligibility: all(
    residentOf("rajasthan"),
    labelled(when("employment", "eq", "unemployed"), { en: "You are currently unemployed", hi: "आप अभी बेरोज़गार हैं" }),
    minAge(21),
    labelled(maxAge(35), {
      en: "Age up to 30 (up to 35 for women, SC, ST and persons with disabilities)",
      hi: "उम्र 30 साल तक (महिलाओं, SC, ST और दिव्यांगजनों के लिए 35 साल तक)",
    }),
  ),

  details: {
    en: [
      "Mukhyamantri Yuva Sambal Yojana is Rajasthan's unemployment allowance for educated young people. It pays a monthly allowance for up to two years while you look for work.",
      "In return, beneficiaries do a short daily internship at a government office, and they are linked to skill training. The scheme is run through the employment portal of the Directorate of Employment.",
    ],
    hi: [
      "मुख्यमंत्री युवा संबल योजना राजस्थान में पढ़े-लिखे युवाओं के लिए बेरोज़गारी भत्ता है। काम ढूँढने के दौरान यह दो साल तक हर महीने भत्ता देती है।",
      "बदले में लाभार्थी रोज़ थोड़े समय किसी सरकारी दफ़्तर में इंटर्नशिप करते हैं और उन्हें कौशल प्रशिक्षण से भी जोड़ा जाता है। योजना रोज़गार निदेशालय के रोज़गार पोर्टल से चलती है।",
    ],
  },
  benefits: {
    en: [
      "A monthly unemployment allowance, with a higher rate for women, transgender persons and persons with disabilities.",
      "Paid for up to two years, or until you get a job, whichever is earlier.",
      "Work experience through a daily internship at a government office.",
    ],
    hi: [
      "हर महीने बेरोज़गारी भत्ता, महिलाओं, ट्रांसजेंडर और दिव्यांगजनों के लिए ज़्यादा दर।",
      "दो साल तक, या नौकरी मिलने तक, जो पहले हो।",
      "सरकारी दफ़्तर में रोज़ाना इंटर्नशिप से काम का अनुभव।",
    ],
  },
  eligibilityText: {
    en: [
      "You are a resident of Rajasthan and have at least a graduate degree.",
      "You are aged 21 to 30 (up to 35 for women, SC, ST and persons with disabilities).",
      "You are registered at the employment exchange, are unemployed, and are not getting another unemployment allowance.",
      "Your family income is within the limit set by the scheme.",
    ],
    hi: [
      "आप राजस्थान के निवासी हैं और कम से कम स्नातक पास हैं।",
      "आपकी उम्र 21 से 30 साल है (महिलाओं, SC, ST और दिव्यांगजनों के लिए 35 साल तक)।",
      "आप रोज़गार कार्यालय में पंजीकृत हैं, बेरोज़गार हैं और कोई दूसरा बेरोज़गारी भत्ता नहीं ले रहे।",
      "आपके परिवार की आय योजना की तय सीमा के अंदर है।",
    ],
  },
  applicationProcess: {
    online: {
      en: [
        "Log in to sso.rajasthan.gov.in and open the Employment (EEMS) app, or go to employment.livelihoods.rajasthan.gov.in.",
        "Register at the employment exchange if you have not, then apply for the unemployment allowance with your Jan Aadhaar.",
        "After approval, join the internship assigned to you so the allowance keeps coming.",
      ],
      hi: [
        "sso.rajasthan.gov.in पर लॉग इन करके रोज़गार (EEMS) ऐप खोलें, या employment.livelihoods.rajasthan.gov.in पर जाएँ।",
        "अगर नहीं किया है तो रोज़गार कार्यालय में पंजीकरण करें, फिर जन आधार से बेरोज़गारी भत्ते के लिए आवेदन करें।",
        "मंज़ूरी के बाद दी गई इंटर्नशिप में शामिल हों, ताकि भत्ता मिलता रहे।",
      ],
    },
  },

  officialUrl: "https://employment.livelihoods.rajasthan.gov.in/",
  sources: ["https://employment.livelihoods.rajasthan.gov.in/", "https://schemesinindia.in/blog/rajasthan-yuva-sambal-2026-guide"],
  lastVerified: "2026-10-06",
  launchedYear: 2019,
  status: "check-status",
};

export default scheme;
