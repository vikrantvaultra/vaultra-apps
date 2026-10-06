import { all, incomeUpTo, isTrue, labelled, when } from "@/lib/engine/build";
import type { Scheme } from "@/lib/types";

const scheme: Scheme = {
  slug: "adip-scheme",
  name: { en: "ADIP Scheme (Aids and Assistive Devices for Persons with Disabilities)", hi: "ADIP योजना (दिव्यांगजनों के लिए सहायक उपकरण)" },
  aka: ["ADIP", "Assistance to Disabled Persons", "free wheelchair", "ALIMCO camp"],
  shortDescription: {
    en: "Free or half-cost wheelchairs, tricycles, hearing aids, artificial limbs and other aids for persons with 40%+ disability whose family earns up to ₹30,000 a month.",
    hi: "40% या ज़्यादा दिव्यांगता वाले लोगों को, जिनके परिवार की आय ₹30,000 महीने तक है, मुफ़्त या आधी क़ीमत पर व्हीलचेयर, ट्राइसाइकिल, कान की मशीन, कृत्रिम अंग और दूसरे उपकरण।",
  },
  level: "central",
  ministry: "empowerment-persons-disabilities",
  categories: ["disability", "health"],
  tags: ["wheelchair", "hearing aid", "tricycle", "artificial limb", "divyang", "assistive devices"],
  benefitType: "in-kind",
  isDBT: false,
  kundliHouse: "health",
  eligibility: all(
    labelled(isTrue("disabled"), { en: "You have a disability", hi: "आप दिव्यांग हैं" }),
    labelled(when("disabilityPct", "gte", 40), { en: "Disability of 40% or more", hi: "40% या उससे ज़्यादा दिव्यांगता" }),
    labelled(incomeUpTo(360_000), { en: "Income up to ₹30,000 a month (₹3.6 lakh a year)", hi: "आय ₹30,000 महीना (₹3.6 लाख सालाना) तक" }),
  ),

  details: {
    en: [
      "Under the ADIP scheme, the Department of Empowerment of Persons with Disabilities gives durable, modern aids and assistive devices to persons with disabilities so they can move, study and work more independently.",
      "Devices are given mainly at assessment and distribution camps run by ALIMCO, National Institutes, Composite Regional Centres and approved NGOs. There is no age limit.",
      "If your monthly income is up to ₹22,500 you get the device free; between ₹22,501 and ₹30,000 you get 50% of the cost. The current rules apply from 1 April 2024.",
    ],
    hi: [
      "ADIP योजना के तहत दिव्यांगजन सशक्तिकरण विभाग दिव्यांग लोगों को टिकाऊ और आधुनिक सहायक उपकरण देता है, ताकि वे आसानी से चल-फिर, पढ़ और काम कर सकें।",
      "उपकरण ज़्यादातर ALIMCO, राष्ट्रीय संस्थानों, समेकित क्षेत्रीय केंद्रों और मान्य NGO के जाँच व वितरण शिविरों में मिलते हैं। उम्र की कोई सीमा नहीं है।",
      "मासिक आय ₹22,500 तक हो तो उपकरण मुफ़्त मिलता है; ₹22,501 से ₹30,000 तक हो तो क़ीमत का 50% मिलता है। मौजूदा नियम 1 अप्रैल 2024 से लागू हैं।",
    ],
  },
  benefits: {
    en: [
      "Full cost of the aid if monthly income is up to ₹22,500; 50% of the cost if it is ₹22,501 to ₹30,000.",
      "Aids costing up to ₹15,000 are fully covered; for those costing ₹15,001 to ₹30,000, up to ₹15,000 is given.",
      "Motorised tricycle or wheelchair (subsidy up to ₹50,000) for people aged 16+ with 80% or more disability, once in five years.",
      "Cochlear implant for children with hearing loss: up to ₹7 lakh (ages 1–5) or ₹6 lakh (ages 5–18).",
      "Travel fare up to ₹250 each for you and one escort, plus ₹100 a day for stay (up to 15 days) if income is up to ₹22,500.",
    ],
    hi: [
      "मासिक आय ₹22,500 तक हो तो उपकरण की पूरी क़ीमत; ₹22,501 से ₹30,000 हो तो क़ीमत का 50%।",
      "₹15,000 तक के उपकरण पूरी तरह मुफ़्त; ₹15,001 से ₹30,000 के उपकरण पर ₹15,000 तक की मदद।",
      "80% या ज़्यादा दिव्यांगता वाले 16+ साल के लोगों को मोटर वाली ट्राइसाइकिल या व्हीलचेयर (₹50,000 तक सब्सिडी), पाँच साल में एक बार।",
      "सुनने में अक्षम बच्चों के लिए कॉक्लियर इम्प्लांट: ₹7 लाख तक (1–5 साल) या ₹6 लाख तक (5–18 साल)।",
      "आपको और एक साथी को ₹250 तक किराया, और आय ₹22,500 तक हो तो रुकने के लिए ₹100 रोज़ (15 दिन तक)।",
    ],
  },
  eligibilityText: {
    en: [
      "Indian citizen of any age.",
      "Has a UDID card (or its enrolment number) with a disability certificate showing at least 40% disability.",
      "Own monthly income, or parents'/guardian's income for dependants, is not more than ₹30,000.",
      "Has not received an aid for the same purpose in the last 3 years (1 year for children under 12).",
    ],
    hi: [
      "किसी भी उम्र के भारतीय नागरिक।",
      "UDID कार्ड (या उसका नामांकन नंबर) और कम से कम 40% दिव्यांगता वाला प्रमाणपत्र हो।",
      "अपनी मासिक आय, या आश्रितों के लिए माता-पिता / अभिभावक की आय, ₹30,000 से ज़्यादा न हो।",
      "पिछले 3 साल में उसी काम के लिए कोई उपकरण न मिला हो (12 साल से छोटे बच्चों के लिए 1 साल)।",
    ],
  },
  exclusions: {
    en: [
      "Monthly income above ₹30,000.",
      "Motorised tricycles and wheelchairs need 80% or more disability, and are not given to people with severe mental impairment for safety reasons.",
    ],
    hi: [
      "मासिक आय ₹30,000 से ज़्यादा हो।",
      "मोटर वाली ट्राइसाइकिल और व्हीलचेयर के लिए 80% या ज़्यादा दिव्यांगता चाहिए, और सुरक्षा कारणों से गंभीर मानसिक अक्षमता वाले लोगों को नहीं दी जाती।",
    ],
  },
  applicationProcess: {
    offline: {
      en: [
        "Find an upcoming ADIP assessment camp through your district social welfare office, ALIMCO, or the nearest Composite Regional Centre.",
        "Attend the camp with your documents. Experts assess you and decide the right device.",
        "Collect the device at the distribution camp, or at the centre where you were assessed.",
      ],
      hi: [
        "ज़िला समाज कल्याण कार्यालय, ALIMCO या पास के समेकित क्षेत्रीय केंद्र से आने वाले ADIP जाँच शिविर की जानकारी लें।",
        "दस्तावेज़ों के साथ शिविर में जाएँ। विशेषज्ञ जाँच करके सही उपकरण तय करते हैं।",
        "वितरण शिविर में या जिस केंद्र में जाँच हुई, वहाँ से उपकरण लें।",
      ],
    },
  },
  documents: {
    en: ["UDID card or enrolment number with disability certificate", "Aadhaar", "Income certificate, BPL card, MGNREGA card or disability pension card", "Passport-size photo"],
    hi: ["UDID कार्ड या नामांकन नंबर और दिव्यांगता प्रमाणपत्र", "आधार", "आय प्रमाणपत्र, BPL कार्ड, मनरेगा कार्ड या दिव्यांग पेंशन कार्ड", "पासपोर्ट साइज़ फ़ोटो"],
  },
  faqs: [
    {
      q: { en: "I don't have an income certificate. What else works?", hi: "मेरे पास आय प्रमाणपत्र नहीं है। और क्या चलेगा?" },
      a: {
        en: "A BPL card, MGNREGA card, disability pension card, or a certificate from your MP, MLA, councillor or gram pradhan is accepted. As a last option, the implementing agency may accept a notarised affidavit.",
        hi: "BPL कार्ड, मनरेगा कार्ड, दिव्यांग पेंशन कार्ड, या सांसद, विधायक, पार्षद या ग्राम प्रधान का प्रमाणपत्र चलता है। आख़िरी विकल्प के रूप में संस्था नोटरी से सत्यापित शपथपत्र भी ले सकती है।",
      },
    },
    {
      q: { en: "Can my child get a device?", hi: "क्या मेरे बच्चे को उपकरण मिल सकता है?" },
      a: {
        en: "Yes. There is no age limit, and children under 12 can get a new device after one year instead of three, since they outgrow them.",
        hi: "हाँ। उम्र की कोई सीमा नहीं है, और 12 साल से छोटे बच्चों को तीन की जगह एक साल बाद नया उपकरण मिल सकता है, क्योंकि वे जल्दी बड़े होते हैं।",
      },
    },
  ],

  officialUrl: "https://adip.depwd.gov.in/",
  sources: [
    "https://adip.depwd.gov.in/files/ADIP_English.pdf",
    "https://adip.depwd.gov.in/",
    "https://dmeo.gov.in/sites/default/files/2026-05/Final%20OOMF%20%282026-27%29_%20DEPwD%20English.pdf",
  ],
  lastVerified: "2026-10-06",
  launchedYear: 1981,
  status: "active",
};

export default scheme;
