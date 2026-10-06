import { all, labelled, residentOf, when } from "@/lib/engine/build";
import type { Scheme } from "@/lib/types";

const scheme: Scheme = {
  slug: "up-free-tubewell-electricity",
  tier: "compact",
  name: { en: "Free Electricity for Private Tubewells (Uttar Pradesh)", hi: "निजी नलकूपों के लिए मुफ़्त बिजली (उत्तर प्रदेश)" },
  aka: ["UP free tubewell bijli", "Kisan muft bijli UP", "tubewell bill maafi"],
  shortDescription: {
    en: "Farmers in Uttar Pradesh with a metered private tubewell connection pay no electricity bill for irrigation. The state pays the full bill from April 2023.",
    hi: "उत्तर प्रदेश में मीटर लगे निजी नलकूप कनेक्शन वाले किसानों को सिंचाई की बिजली का बिल नहीं देना पड़ता। अप्रैल 2023 से पूरा बिल राज्य सरकार भरती है।",
  },
  level: "state",
  state: "uttar-pradesh",
  department: {
    en: "Energy Department (UP Power Corporation Ltd), Government of Uttar Pradesh",
    hi: "ऊर्जा विभाग (उत्तर प्रदेश पावर कॉर्पोरेशन लि.), उत्तर प्रदेश सरकार",
  },
  categories: ["agriculture", "energy-savings"],
  tags: ["free electricity", "tubewell", "irrigation", "farmer", "bijli", "uttar pradesh"],
  benefitType: "in-kind",
  isDBT: false,
  kundliHouse: "farming",
  eligibility: all(
    residentOf("uttar-pradesh"),
    labelled(when("occupation", "in", ["farmer"]), {
      en: "Farmer with a private tubewell electricity connection",
      hi: "निजी नलकूप बिजली कनेक्शन वाले किसान",
    }),
  ),

  details: {
    en: [
      "Uttar Pradesh gives a 100% waiver of the electricity bill on private tubewell connections used by farmers for irrigation, with effect from 1 April 2023. About 1.5 crore farmers were expected to benefit.",
      "The state pays the power company on the farmer's behalf. To get the benefit, the tubewell connection must have a meter and old dues up to 31 March 2023 must be cleared, for which an instalment option without interest was offered.",
    ],
    hi: [
      "उत्तर प्रदेश में किसानों के सिंचाई वाले निजी नलकूप कनेक्शन का बिजली बिल 1 अप्रैल 2023 से 100% माफ़ है। लगभग 1.5 करोड़ किसानों को इसका फ़ायदा मिलना था।",
      "राज्य सरकार किसान की ओर से बिजली कंपनी को भुगतान करती है। फ़ायदा पाने के लिए नलकूप कनेक्शन पर मीटर लगा होना और 31 मार्च 2023 तक का पुराना बकाया चुका होना ज़रूरी है, जिसके लिए बिना ब्याज किस्तों का विकल्प दिया गया।",
    ],
  },
  benefits: {
    en: ["No electricity bill for your private tubewell used for irrigation.", "Old dues before April 2023 can be paid in instalments without interest."],
    hi: ["सिंचाई वाले निजी नलकूप का कोई बिजली बिल नहीं।", "अप्रैल 2023 से पहले का बकाया बिना ब्याज किस्तों में चुकाया जा सकता है।"],
  },
  eligibilityText: {
    en: [
      "Farmer in Uttar Pradesh with a private tubewell electricity connection for irrigation.",
      "The connection has an energy meter installed.",
      "Dues up to 31 March 2023 on that connection are cleared.",
    ],
    hi: [
      "उत्तर प्रदेश के किसान जिनके पास सिंचाई के लिए निजी नलकूप बिजली कनेक्शन हो।",
      "कनेक्शन पर बिजली का मीटर लगा हो।",
      "उस कनेक्शन पर 31 मार्च 2023 तक का बकाया चुका हो।",
    ],
  },
  applicationProcess: {
    offline: {
      en: [
        "Visit your local electricity sub-division office (UPPCL).",
        "Get a meter installed on your tubewell connection if it does not have one.",
        "Clear or settle old dues in instalments. After that, bills on the connection are waived.",
      ],
      hi: [
        "अपने बिजली उपखंड कार्यालय (UPPCL) जाएँ।",
        "नलकूप कनेक्शन पर मीटर न हो तो लगवाएँ।",
        "पुराना बकाया चुकाएँ या किस्तों में निपटाएँ। उसके बाद कनेक्शन का बिल माफ़ हो जाता है।",
      ],
    },
  },

  officialUrl: "https://www.uppcl.org/",
  sources: [
    "https://www.dailypioneer.com/2024/state-editions/govt-to-wave-power-bills-of--farmers-with-pvt-tube-wells.html",
    "https://www.uppcl.org/",
  ],
  lastVerified: "2026-10-06",
  launchedYear: 2023,
  status: "check-status",
};

export default scheme;
