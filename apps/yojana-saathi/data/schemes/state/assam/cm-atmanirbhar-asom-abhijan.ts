import { all, residentOf } from "@/lib/engine/build";
import type { Scheme } from "@/lib/types";

const scheme: Scheme = {
  slug: "cm-atmanirbhar-asom-abhijan",
  tier: "compact",
  name: { en: "Chief Minister's Atmanirbhar Asom Abhijan", hi: "मुख्यमंत्री आत्मनिर्भर असम अभियान" },
  aka: ["CMAAA", "Atmanirbhar Asom", "CMAAA 3.0"],
  shortDescription: {
    en: "Young people in Assam can get state financial help to start or grow their own business. A new round for 50,000 youth was announced in the 2026-27 budget.",
    hi: "असम के युवाओं को अपना कारोबार शुरू करने या बढ़ाने के लिए राज्य सरकार से आर्थिक मदद मिल सकती है। 2026-27 के बजट में 50,000 युवाओं के नए दौर की घोषणा हुई।",
  },
  level: "state",
  state: "assam",
  department: { en: "Government of Assam", hi: "असम सरकार" },
  categories: ["business", "skills-employment"],
  tags: ["self employment", "business", "youth", "startup", "entrepreneur", "assam"],
  benefitType: "composite",
  isDBT: true,
  kundliHouse: "business",
  eligibility: all(residentOf("assam")),

  details: {
    en: [
      "CMAAA helps young people of Assam become entrepreneurs. Nearly one lakh people have been supported in two rounds: under CMAAA 1.0 some got an interest-free loan of ₹1 lakh, and under CMAAA 2.0 about 75,000 got ₹75,000 as a first instalment, with ₹25,000 more after an entrepreneurship training course.",
      "The 2026-27 budget announced that selection of 50,000 new youth will start this financial year, with ₹500 crore set aside. The rules for this new round have not been published yet.",
    ],
    hi: [
      "CMAAA असम के युवाओं को उद्यमी बनने में मदद करता है। दो दौर में करीब एक लाख लोगों को मदद मिली: CMAAA 1.0 में कुछ को ₹1 लाख का बिना ब्याज ऋण मिला, और CMAAA 2.0 में करीब 75,000 को पहली किस्त में ₹75,000, और उद्यमिता प्रशिक्षण के बाद ₹25,000 और।",
      "2026-27 के बजट में घोषणा हुई कि इस वित्त वर्ष में 50,000 नए युवाओं का चयन शुरू होगा, जिसके लिए ₹500 करोड़ रखे गए हैं। नए दौर के नियम अभी जारी नहीं हुए हैं।",
    ],
  },
  benefits: {
    en: [
      "Financial assistance to set up or expand a small business.",
      "An entrepreneurship development programme (training).",
      "In the last round, total help was ₹1 lakh per person in two instalments; the amount for the new round is not yet announced.",
    ],
    hi: [
      "छोटा कारोबार शुरू करने या बढ़ाने के लिए आर्थिक मदद।",
      "उद्यमिता विकास कार्यक्रम (प्रशिक्षण)।",
      "पिछले दौर में दो किस्तों में प्रति व्यक्ति कुल ₹1 लाख मिले थे; नए दौर की राशि अभी घोषित नहीं हुई है।",
    ],
  },
  eligibilityText: {
    en: [
      "Permanent resident of Assam.",
      "In the last round (2.0): aged 28 to 45, Class 10 pass (relaxed for SC/ST/OBC), registered at an Employment Exchange, with no loan defaults, and one person per family.",
      "Previous CMAAA beneficiaries could not apply again.",
      "Check the conditions for the new round when it opens.",
    ],
    hi: [
      "असम का स्थायी निवासी।",
      "पिछले दौर (2.0) में: उम्र 28 से 45 साल, 10वीं पास (SC/ST/OBC के लिए छूट), रोज़गार कार्यालय में पंजीकरण, कोई ऋण बकाया न हो, और एक परिवार से एक व्यक्ति।",
      "पहले CMAAA का लाभ ले चुके लोग दोबारा आवेदन नहीं कर सकते थे।",
      "नया दौर खुलने पर उसकी शर्तें ज़रूर देखें।",
    ],
  },
  applicationProcess: {
    online: {
      en: [
        "Watch cmaaa.assam.gov.in for the new round's announcement.",
        "Register with your mobile number or email and fill in the application with your project plan.",
        "Upload your documents and track your application with the reference number.",
      ],
      hi: [
        "नए दौर की घोषणा के लिए cmaaa.assam.gov.in देखते रहें।",
        "मोबाइल नंबर या ईमेल से पंजीकरण करें और अपनी प्रोजेक्ट योजना के साथ आवेदन भरें।",
        "दस्तावेज़ अपलोड करें और रेफ़रेंस नंबर से आवेदन की स्थिति देखें।",
      ],
    },
  },

  officialUrl: "https://cmaaa.assam.gov.in/",
  sources: ["https://cmaaa.assam.gov.in/", "https://aladigitallibrary.in/handle/123456789/4238"],
  lastVerified: "2026-10-06",
  launchedYear: 2023,
  status: "check-status",
};

export default scheme;
