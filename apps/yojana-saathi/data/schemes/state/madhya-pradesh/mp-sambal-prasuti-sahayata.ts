import { all, female, isTrue, labelled, residentOf } from "@/lib/engine/build";
import type { Scheme } from "@/lib/types";

const scheme: Scheme = {
  slug: "mp-sambal-prasuti-sahayata",
  tier: "compact",
  overlapGroup: "maternity-cash",
  name: { en: "Prasuti Sahayata Yojana for Sambal Workers (Madhya Pradesh)", hi: "संबल प्रसूति सहायता योजना (मध्य प्रदेश)" },
  aka: ["Prasuti Sahayata", "Sambal maternity", "prasav sahayata MP"],
  shortDescription: {
    en: "Women unorganised workers registered under Sambal in Madhya Pradesh get cash help around childbirth so they can rest and eat well: ₹4,000 before and ₹12,000 after delivery.",
    hi: "मध्य प्रदेश में संबल में पंजीकृत महिला असंगठित श्रमिकों को प्रसव के समय आराम और अच्छे खान-पान के लिए नकद मदद मिलती है: प्रसव से पहले ₹4,000 और बाद में ₹12,000।",
  },
  level: "state",
  state: "madhya-pradesh",
  department: {
    en: "Public Health and Family Welfare Department, with the Labour Department (Sambal), Government of Madhya Pradesh",
    hi: "लोक स्वास्थ्य एवं परिवार कल्याण विभाग, श्रम विभाग (संबल) के साथ, मध्य प्रदेश सरकार",
  },
  categories: ["health", "women-child"],
  tags: ["maternity", "pregnancy", "delivery", "sambal", "women workers", "madhya pradesh"],
  benefitType: "cash",
  isDBT: true,
  kundliHouse: "women-family",
  eligibility: all(
    residentOf("madhya-pradesh"),
    female(),
    labelled(isTrue("pregnantOrLactating"), { en: "You are pregnant or recently gave birth", hi: "आप गर्भवती हैं या हाल ही में प्रसव हुआ है" }),
  ),

  details: {
    en: [
      "Prasuti Sahayata is one of the benefits linked to the Sambal card. Women who do daily-wage or other unorganised work often can't afford to stop working around childbirth, so the state gives them cash help to rest and eat well.",
      "The help is paid in two parts, before and after delivery, into the woman's bank account. Registration on the Sambal portal is needed first.",
    ],
    hi: [
      "प्रसूति सहायता संबल कार्ड से जुड़ा एक लाभ है। दिहाड़ी या दूसरा असंगठित काम करने वाली महिलाएँ अक्सर प्रसव के आसपास काम नहीं छोड़ पातीं, इसलिए सरकार उन्हें आराम और अच्छे खान-पान के लिए नकद मदद देती है।",
      "मदद दो हिस्सों में, प्रसव से पहले और बाद में, महिला के बैंक खाते में आती है। इसके लिए पहले संबल पोर्टल पर पंजीयन ज़रूरी है।",
    ],
  },
  benefits: {
    en: [
      "₹4,000 before delivery.",
      "₹12,000 after delivery.",
    ],
    hi: [
      "प्रसव से पहले ₹4,000।",
      "प्रसव के बाद ₹12,000।",
    ],
  },
  eligibilityText: {
    en: [
      "A woman in Madhya Pradesh registered as an unorganised worker under Sambal.",
      "Pregnant, with check-ups registered at a government health centre.",
    ],
    hi: [
      "मध्य प्रदेश की वह महिला जो संबल में असंगठित श्रमिक के रूप में पंजीकृत हो।",
      "गर्भवती हो, और सरकारी स्वास्थ्य केंद्र में जाँच का पंजीयन हो।",
    ],
  },
  applicationProcess: {
    offline: {
      en: [
        "Register under Sambal first (sambal.mp.gov.in) if you aren't already.",
        "Register your pregnancy with your ANM, ASHA worker or the nearest government health centre and show your Sambal card.",
        "The health staff enter the case, and the money is paid into your bank account in two parts.",
      ],
      hi: [
        "अगर अभी तक नहीं है, तो पहले संबल में पंजीयन कराएँ (sambal.mp.gov.in)।",
        "अपनी ANM, आशा कार्यकर्ता या पास के सरकारी स्वास्थ्य केंद्र में गर्भावस्था का पंजीयन कराएँ और संबल कार्ड दिखाएँ।",
        "स्वास्थ्य कर्मचारी मामला दर्ज करते हैं, और पैसा दो हिस्सों में आपके बैंक खाते में आता है।",
      ],
    },
  },

  officialUrl: "https://sambal.mp.gov.in/",
  sources: ["https://sambal.mp.gov.in/", "https://www.drishtiias.com/state-pcs-current-affairs/sambal-2-0-scheme"],
  lastVerified: "2026-10-06",
  launchedYear: 2018,
  status: "check-status",
};

export default scheme;
