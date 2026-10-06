import { all, female, incomeUpTo, isTrue, labelled, residentOf, when } from "@/lib/engine/build";
import type { Scheme } from "@/lib/types";

const scheme: Scheme = {
  slug: "mathru-jyothi",
  tier: "compact",
  overlapGroup: "maternity-cash",
  name: { en: "Mathru Jyothi", hi: "मातृ ज्योति" },
  aka: ["Mathrujyothi", "Mathru Jyothi scheme", "assistance for mothers with disabilities Kerala"],
  shortDescription: {
    en: "Mothers in Kerala with a disability of 60% or more (50% for some conditions) and income up to ₹1 lakh a year get financial help to care for their newborn baby.",
    hi: "केरल की वे माताएँ जिनकी दिव्यांगता 60% या उससे ज़्यादा है (कुछ स्थितियों में 50%) और सालाना आय ₹1 लाख तक है, उन्हें नवजात बच्चे की देखभाल के लिए आर्थिक मदद मिलती है।",
  },
  level: "state",
  state: "kerala",
  department: { en: "Social Justice Department, Government of Kerala", hi: "सामाजिक न्याय विभाग, केरल सरकार" },
  categories: ["disability", "women-child"],
  tags: ["mother", "disability", "newborn", "maternity", "childcare", "suneethi", "kerala"],
  benefitType: "cash",
  isDBT: true,
  kundliHouse: "women-family",
  eligibility: all(
    residentOf("kerala"),
    female(),
    isTrue("disabled"),
    labelled(when("disabilityPct", "gte", 50), { en: "Your disability is 50% or more (60% for most conditions)", hi: "आपकी दिव्यांगता 50% या उससे ज़्यादा है (ज़्यादातर स्थितियों में 60%)" }),
    labelled(isTrue("pregnantOrLactating"), { en: "You have recently given birth", hi: "आपने हाल ही में बच्चे को जन्म दिया है" }),
    incomeUpTo(100_000),
  ),

  details: {
    en: [
      "Mathru Jyothi gives financial help to mothers with disabilities after childbirth, so they can pay for a helper to look after the baby.",
      "It is run by Kerala's Social Justice Department, and applications are made online on the Suneethi portal. The official criteria page does not state the current amount, so check it when you apply.",
    ],
    hi: [
      "मातृ ज्योति दिव्यांग माताओं को प्रसव के बाद आर्थिक मदद देती है, ताकि वे बच्चे की देखभाल के लिए किसी सहायक का ख़र्च उठा सकें।",
      "इसे केरल का सामाजिक न्याय विभाग चलाता है, और आवेदन सुनीति पोर्टल पर ऑनलाइन होता है। आधिकारिक मानदंड पेज पर अभी की राशि नहीं लिखी है, इसलिए आवेदन करते समय पता कर लें।",
    ],
  },
  benefits: {
    en: ["Financial assistance to care for your newborn baby, paid into your bank account."],
    hi: ["नवजात बच्चे की देखभाल के लिए आर्थिक सहायता, सीधे आपके बैंक खाते में।"],
  },
  eligibilityText: {
    en: [
      "You are a mother with a disability of 60% or more. For muscular dystrophy, autism spectrum disorder and multiple disabilities the limit is 50%.",
      "Your annual income is up to ₹1 lakh.",
      "You have recently given birth, and a paediatrician or gynaecologist certifies that you need a helper to care for the child.",
    ],
    hi: [
      "आप ऐसी माँ हैं जिनकी दिव्यांगता 60% या उससे ज़्यादा है। मस्कुलर डिस्ट्रॉफ़ी, ऑटिज़्म स्पेक्ट्रम डिसऑर्डर और बहु-दिव्यांगता में सीमा 50% है।",
      "आपकी सालाना आय ₹1 लाख तक है।",
      "आपने हाल ही में बच्चे को जन्म दिया है, और बाल रोग या स्त्री रोग विशेषज्ञ प्रमाणित करते हैं कि बच्चे की देखभाल के लिए आपको सहायक चाहिए।",
    ],
  },
  applicationProcess: {
    online: {
      en: [
        "Register on the Suneethi portal (suneethi.sjd.kerala.gov.in).",
        "Choose Mathru Jyothi and upload the medical board certificate, hospital discharge certificate, income certificate (or BPL card), bank passbook, life certificate and the doctor's certificate.",
        "Submit and track the status on the portal.",
      ],
      hi: [
        "सुनीति पोर्टल (suneethi.sjd.kerala.gov.in) पर रजिस्टर करें।",
        "मातृ ज्योति चुनें और मेडिकल बोर्ड प्रमाण पत्र, अस्पताल का डिस्चार्ज प्रमाण पत्र, आय प्रमाण पत्र (या BPL कार्ड), बैंक पासबुक, जीवन प्रमाण पत्र और डॉक्टर का प्रमाण पत्र अपलोड करें।",
        "जमा करें और पोर्टल पर स्थिति देखें।",
      ],
    },
  },

  officialUrl: "https://suneethi.sjd.kerala.gov.in/",
  sources: ["https://suneethi.sjd.kerala.gov.in/Citizen_Platform/suneethi/criteria.php", "https://suneethi.sjd.kerala.gov.in/"],
  lastVerified: "2026-10-06",
  launchedYear: 2016,
  status: "active",
};

export default scheme;
