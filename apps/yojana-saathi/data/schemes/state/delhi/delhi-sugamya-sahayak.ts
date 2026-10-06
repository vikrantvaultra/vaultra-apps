import { all, incomeUpTo, isTrue, labelled, residentOf, when } from "@/lib/engine/build";
import type { Scheme } from "@/lib/types";

const scheme: Scheme = {
  slug: "delhi-sugamya-sahayak",
  tier: "compact",
  name: { en: "Sugamya Sahayak Scheme (Free Assistive Devices, Delhi)", hi: "सुगम्य सहायक योजना (मुफ़्त सहायक उपकरण, दिल्ली)" },
  aka: ["Sugamya Sahayak", "Delhi free wheelchair", "Delhi motorised tricycle", "Delhi hearing aid scheme"],
  shortDescription: {
    en: "Delhi residents with 40% or more disability and family income up to ₹8 lakh a year get assistive devices free, such as wheelchairs, hearing aids, crutches, motorised tricycles and smartphones for the visually impaired.",
    hi: "40% या ज़्यादा दिव्यांगता वाले दिल्ली निवासियों को, जिनके परिवार की सालाना आय ₹8 लाख तक है, व्हीलचेयर, कान की मशीन, बैसाखी, मोटर वाली ट्राइसाइकिल और दृष्टिबाधितों के लिए स्मार्टफ़ोन जैसे उपकरण मुफ़्त मिलते हैं।",
  },
  level: "state",
  state: "delhi",
  department: { en: "Department of Social Welfare, Govt. of NCT of Delhi", hi: "समाज कल्याण विभाग, दिल्ली सरकार" },
  categories: ["disability"],
  tags: ["assistive devices", "wheelchair", "hearing aid", "motorised tricycle", "divyang", "delhi"],
  benefitType: "in-kind",
  isDBT: false,
  kundliHouse: "health",
  eligibility: all(
    residentOf("delhi"),
    isTrue("disabled"),
    when("disabilityPct", "gte", 40),
    labelled(incomeUpTo(800_000), { en: "Family income up to ₹8 lakh a year", hi: "परिवार की सालाना आय ₹8 लाख तक" }),
  ),

  details: {
    en: [
      "Under the Sugamya Sahayak Scheme, Delhi's Department of Social Welfare gives good-quality, standard assistive devices free of cost to persons with benchmark disabilities (40% or more).",
      "Devices include motorised tricycles, wheelchairs, hearing aids, crutches, callipers, walkers and smartphones for people with visual impairment. Motorised tricycles are only for people with 80% or more disability who are 16 or older.",
    ],
    hi: [
      "सुगम्य सहायक योजना के तहत दिल्ली का समाज कल्याण विभाग बेंचमार्क दिव्यांगता (40% या ज़्यादा) वाले लोगों को अच्छी गुणवत्ता के मानक सहायक उपकरण मुफ़्त देता है।",
      "उपकरणों में मोटर वाली ट्राइसाइकिल, व्हीलचेयर, कान की मशीन, बैसाखी, कैलिपर, वॉकर और दृष्टिबाधित लोगों के लिए स्मार्टफ़ोन शामिल हैं। मोटर वाली ट्राइसाइकिल सिर्फ़ 80% या ज़्यादा दिव्यांगता वाले और 16 साल या उससे बड़े लोगों के लिए है।",
    ],
  },
  benefits: {
    en: [
      "Free assistive devices: wheelchair, hearing aid, crutches, callipers, walker and similar aids.",
      "Free motorised tricycle for eligible people with severe disability.",
      "Free smartphone for people with visual impairment.",
    ],
    hi: [
      "मुफ़्त सहायक उपकरण: व्हीलचेयर, कान की मशीन, बैसाखी, कैलिपर, वॉकर और ऐसे दूसरे उपकरण।",
      "गंभीर दिव्यांगता वाले पात्र लोगों को मुफ़्त मोटर वाली ट्राइसाइकिल।",
      "दृष्टिबाधित लोगों को मुफ़्त स्मार्टफ़ोन।",
    ],
  },
  eligibilityText: {
    en: [
      "Person with benchmark disability (40% or more) as per the disability certificate or UDID card.",
      "Resident of Delhi with Aadhaar.",
      "Family income from all sources up to ₹8 lakh a year.",
      "Has not received the same item from any government scheme in the last 3 years (no limit for fabricated aids for children under 12).",
      "Motorised tricycle: 80% or more disability, aged 16 or above; not for people with severe mental impairment.",
    ],
    hi: [
      "दिव्यांगता प्रमाण पत्र या UDID कार्ड के अनुसार बेंचमार्क दिव्यांगता (40% या ज़्यादा)।",
      "आधार के साथ दिल्ली का निवासी।",
      "सभी स्रोतों से परिवार की सालाना आय ₹8 लाख तक।",
      "पिछले 3 साल में किसी सरकारी योजना से वही उपकरण न लिया हो (12 साल से कम उम्र के बच्चों के लिए बनवाए जाने वाले उपकरणों पर यह सीमा नहीं)।",
      "मोटर वाली ट्राइसाइकिल: 80% या ज़्यादा दिव्यांगता, उम्र 16 साल या ज़्यादा; गंभीर मानसिक दिव्यांगता वाले लोगों के लिए नहीं।",
    ],
  },
  applicationProcess: {
    offline: {
      en: [
        "Contact your District Social Welfare Office or the department's disability branch.",
        "Submit the application with proof of Delhi residence, Aadhaar, two passport-size photos and your disability certificate or UDID card.",
        "After checks, you are told when and where to collect the device.",
      ],
      hi: [
        "अपने ज़िला समाज कल्याण कार्यालय या विभाग की दिव्यांगजन शाखा से संपर्क करें।",
        "दिल्ली निवास का प्रमाण, आधार, दो पासपोर्ट साइज़ फ़ोटो और दिव्यांगता प्रमाण पत्र या UDID कार्ड के साथ आवेदन जमा करें।",
        "जाँच के बाद बताया जाता है कि उपकरण कब और कहाँ से लेना है।",
      ],
    },
  },
  documents: {
    en: ["Proof of residence in Delhi", "Aadhaar card", "Two passport-size photographs", "Disability certificate or UDID card"],
    hi: ["दिल्ली में निवास का प्रमाण", "आधार कार्ड", "दो पासपोर्ट साइज़ फ़ोटो", "दिव्यांगता प्रमाण पत्र या UDID कार्ड"],
  },

  officialUrl: "https://socialwelfare.delhi.gov.in/social/financial-assistance-schemes",
  sources: ["https://socialwelfare.delhi.gov.in/social/financial-assistance-schemes"],
  lastVerified: "2026-10-06",
  launchedYear: 2025,
  status: "active",
};

export default scheme;
