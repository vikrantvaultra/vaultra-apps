import { all, labelled, residentOf, when } from "@/lib/engine/build";
import type { Scheme } from "@/lib/types";

const scheme: Scheme = {
  slug: "ap-weavers-free-power",
  tier: "compact",
  name: { en: "Free Power for Handloom Weavers and Powerloom Units", hi: "हथकरघा बुनकरों और पावरलूम इकाइयों के लिए मुफ़्त बिजली" },
  aka: ["weavers free electricity AP", "handloom free power 200 units", "powerloom 500 units"],
  shortDescription: {
    en: "Since 1 April 2026, handloom weaver households in Andhra Pradesh get up to 200 units of free electricity a month, and powerloom units up to 500 units.",
    hi: "1 अप्रैल 2026 से आंध्र प्रदेश में हथकरघा बुनकर परिवारों को हर महीने 200 यूनिट तक और पावरलूम इकाइयों को 500 यूनिट तक बिजली मुफ़्त मिलती है।",
  },
  level: "state",
  state: "andhra-pradesh",
  department: {
    en: "Handlooms & Textiles Department, with the Energy Department, Government of Andhra Pradesh",
    hi: "हथकरघा एवं वस्त्र विभाग, ऊर्जा विभाग के साथ, आंध्र प्रदेश सरकार",
  },
  categories: ["energy-savings", "business"],
  tags: ["weaver", "handloom", "powerloom", "free electricity", "200 units", "andhra pradesh"],
  benefitType: "in-kind",
  isDBT: false,
  kundliHouse: "energy-savings",
  eligibility: all(
    residentOf("andhra-pradesh"),
    labelled(when("occupation", "eq", "artisan"), {
      en: "You are a handloom weaver or run a powerloom unit",
      hi: "आप हथकरघा बुनकर हैं या पावरलूम इकाई चलाते हैं",
    }),
  ),

  details: {
    en: [
      "The Andhra Pradesh government ordered free power for weavers through G.O.Ms.No.44 of 26 March 2025, and the scheme came into force from 1 April 2026. It was also announced in the 2026-27 state budget.",
      "Handloom weaver households get up to 200 units of electricity a month free, and powerloom units get up to 500 units a month free. The Energy Department pays the power companies for this.",
    ],
    hi: [
      "आंध्र प्रदेश सरकार ने 26 मार्च 2025 के G.O.Ms.No.44 से बुनकरों को मुफ़्त बिजली का आदेश दिया, और योजना 1 अप्रैल 2026 से लागू हुई। 2026-27 के राज्य बजट में भी इसकी घोषणा हुई।",
      "हथकरघा बुनकर परिवारों को हर महीने 200 यूनिट तक बिजली मुफ़्त मिलती है, और पावरलूम इकाइयों को हर महीने 500 यूनिट तक। इसका पैसा ऊर्जा विभाग बिजली कंपनियों को देता है।",
    ],
  },
  benefits: {
    en: [
      "Up to 200 units of free electricity a month for handloom weaver households.",
      "Up to 500 units of free electricity a month for powerloom units.",
    ],
    hi: [
      "हथकरघा बुनकर परिवारों को हर महीने 200 यूनिट तक मुफ़्त बिजली।",
      "पावरलूम इकाइयों को हर महीने 500 यूनिट तक मुफ़्त बिजली।",
    ],
  },
  eligibilityText: {
    en: [
      "A handloom weaver household, or a powerloom unit, in Andhra Pradesh.",
      "Identified and verified by the Handlooms & Textiles Department.",
      "Electricity connection linked under the scheme's procedures (SOPs) with the power distribution company.",
    ],
    hi: [
      "आंध्र प्रदेश का हथकरघा बुनकर परिवार, या पावरलूम इकाई।",
      "हथकरघा एवं वस्त्र विभाग द्वारा पहचाना और सत्यापित।",
      "बिजली कनेक्शन योजना के नियमों (SOP) के तहत बिजली वितरण कंपनी से जुड़ा हो।",
    ],
  },
  applicationProcess: {
    offline: {
      en: [
        "Contact the Assistant Director of Handlooms & Textiles in your district, or your village/ward secretariat.",
        "Get your weaver household or powerloom unit verified and give your electricity service number.",
        "Once linked, the free units are applied to your monthly bill.",
      ],
      hi: [
        "अपने ज़िले के हथकरघा एवं वस्त्र सहायक निदेशक या गाँव/वार्ड सचिवालय से संपर्क करें।",
        "अपने बुनकर परिवार या पावरलूम इकाई की जाँच कराएँ और बिजली सर्विस नंबर दें।",
        "जुड़ने के बाद मुफ़्त यूनिट आपके मासिक बिल में घट जाएँगी।",
      ],
    },
  },

  officialUrl: "https://handlooms.ap.gov.in/stateschemes.html",
  sources: ["https://handlooms.ap.gov.in/stateschemes.html", "https://prsindia.org/budgets/states/andhra-pradesh-budget-analysis-2026-27"],
  lastVerified: "2026-10-06",
  launchedYear: 2026,
  status: "active",
};

export default scheme;
