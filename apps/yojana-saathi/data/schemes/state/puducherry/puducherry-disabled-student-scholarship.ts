import { all, incomeUpTo, isTrue, labelled, residentOf, when } from "@/lib/engine/build";
import type { Scheme } from "@/lib/types";

const scheme: Scheme = {
  slug: "puducherry-disabled-student-scholarship",
  tier: "compact",
  overlapGroup: "scholarship",
  name: { en: "Scholarship to Differently Abled Students (Puducherry)", hi: "दिव्यांग छात्रों को छात्रवृत्ति (पुडुचेरी)" },
  aka: ["Puducherry disability scholarship"],
  shortDescription: {
    en: "Students with 40% or more disability in Puducherry get a monthly scholarship from ₹400 (Class 1) up to ₹1,540 (professional and PG hostellers).",
    hi: "पुडुचेरी में 40% या ज़्यादा दिव्यांगता वाले छात्रों को हर महीने छात्रवृत्ति मिलती है, ₹400 (कक्षा 1) से लेकर ₹1,540 (प्रोफ़ेशनल और PG हॉस्टल वाले) तक।",
  },
  level: "state",
  state: "puducherry",
  department: {
    en: "Directorate of Social Welfare, Government of Puducherry",
    hi: "समाज कल्याण निदेशालय, पुडुचेरी सरकार",
  },
  categories: ["education", "disability"],
  tags: ["scholarship", "disability", "differently abled", "student", "monthly stipend", "puducherry"],
  benefitType: "cash",
  isDBT: false,
  value: { amount: 400, period: "monthly", kind: "cash" },
  kundliHouse: "education",
  eligibility: all(
    residentOf("puducherry"),
    labelled(isTrue("student"), { en: "You are a student", hi: "आप छात्र हैं" }),
    labelled(isTrue("disabled"), { en: "You have a disability", hi: "आप दिव्यांग हैं" }),
    labelled(when("disabilityPct", "gte", 40), { en: "Disability of 40% or more", hi: "दिव्यांगता 40% या उससे ज़्यादा" }),
    labelled(incomeUpTo(75_000), { en: "Annual income up to ₹75,000", hi: "सालाना आय ₹75,000 तक" }),
  ),

  details: {
    en: [
      "The Directorate of Social Welfare, Puducherry gives a monthly scholarship to students with disabilities, from primary school up to postgraduate and professional courses. The rate depends on the class or course and is higher for students living in a hostel.",
    ],
    hi: [
      "समाज कल्याण निदेशालय, पुडुचेरी दिव्यांग छात्रों को प्राथमिक स्कूल से लेकर स्नातकोत्तर और प्रोफ़ेशनल कोर्स तक हर महीने छात्रवृत्ति देता है। राशि कक्षा या कोर्स पर निर्भर करती है और हॉस्टल में रहने वाले छात्रों को ज़्यादा मिलती है।",
    ],
  },
  benefits: {
    en: [
      "Day scholars: ₹400 a month (Classes 1–5), ₹500 (6–8), ₹640 (9–12), ₹800 (arts and science degrees), ₹980 (professional, engineering and PG).",
      "Hostellers: ₹800 a month (Classes 1–5), ₹1,000 (6–8), ₹1,080 (9–12), ₹1,240 (arts and science degrees), ₹1,540 (professional, engineering and PG).",
    ],
    hi: [
      "डे-स्कॉलर: ₹400 महीना (कक्षा 1–5), ₹500 (6–8), ₹640 (9–12), ₹800 (आर्ट्स और साइंस डिग्री), ₹980 (प्रोफ़ेशनल, इंजीनियरिंग और PG)।",
      "हॉस्टल वाले: ₹800 महीना (कक्षा 1–5), ₹1,000 (6–8), ₹1,080 (9–12), ₹1,240 (आर्ट्स और साइंस डिग्री), ₹1,540 (प्रोफ़ेशनल, इंजीनियरिंग और PG)।",
    ],
  },
  eligibilityText: {
    en: [
      "A student with a disability of 40% or more, aged at least 5 years.",
      "Annual family income up to ₹75,000.",
      "Has lived in Puducherry for at least five years.",
    ],
    hi: [
      "40% या ज़्यादा दिव्यांगता वाला छात्र, जिसकी उम्र कम से कम 5 साल हो।",
      "परिवार की सालाना आय ₹75,000 तक।",
      "कम से कम पाँच साल से पुडुचेरी में रह रहा हो।",
    ],
  },
  applicationProcess: {
    offline: {
      en: [
        "Get the application form from the Social Welfare Department website ('Differently Abled Persons - Download Forms') or its office.",
        "Submit it through your school or college with the disability, income and residence certificates.",
      ],
      hi: [
        "समाज कल्याण विभाग की वेबसाइट ('Differently Abled Persons - Download Forms') या उसके दफ़्तर से आवेदन फ़ॉर्म लें।",
        "दिव्यांगता, आय और निवास प्रमाण पत्र के साथ अपने स्कूल या कॉलेज के ज़रिए जमा करें।",
      ],
    },
  },

  officialUrl: "https://socwelfare.py.gov.in/award-scholarship-differently-abled-person-students",
  sources: ["https://socwelfare.py.gov.in/award-scholarship-differently-abled-person-students", "https://socwelfare.py.gov.in/differently-abled-schemes"],
  lastVerified: "2026-10-06",
  launchedYear: 2025,
  status: "active",
};

export default scheme;
