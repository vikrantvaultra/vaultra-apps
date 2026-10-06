import { all, isTrue, labelled, residentOf } from "@/lib/engine/build";
import type { Scheme } from "@/lib/types";

const scheme: Scheme = {
  slug: "delhi-arogya-kosh",
  tier: "compact",
  name: { en: "Delhi Arogya Kosh", hi: "दिल्ली आरोग्य कोष" },
  aka: ["DAK", "Delhi Arogya Kosh financial assistance", "Arogya Kosh Delhi"],
  shortDescription: {
    en: "Needy Delhi patients with a National Food Security (ration) card can get financial help of up to ₹5 lakh for treatment of any illness in a government hospital.",
    hi: "राष्ट्रीय खाद्य सुरक्षा (राशन) कार्ड वाले ज़रूरतमंद दिल्ली के मरीज़ों को सरकारी अस्पताल में किसी भी बीमारी के इलाज के लिए ₹5 लाख तक की आर्थिक मदद मिल सकती है।",
  },
  level: "state",
  state: "delhi",
  department: { en: "Department of Health & Family Welfare, Govt. of NCT of Delhi", hi: "स्वास्थ्य एवं परिवार कल्याण विभाग, दिल्ली सरकार" },
  categories: ["health"],
  tags: ["medical help", "treatment", "surgery", "government hospital", "ration card", "delhi"],
  benefitType: "cash",
  isDBT: false,
  kundliHouse: "health",
  eligibility: all(
    residentOf("delhi"),
    labelled(isTrue("bpl"), {
      en: "Your family has a National Food Security (ration) card",
      hi: "आपके परिवार के पास राष्ट्रीय खाद्य सुरक्षा (राशन) कार्ड है",
    }),
  ),

  details: {
    en: [
      "Delhi Arogya Kosh is a registered society of the Delhi government that pays for costly treatment of needy patients. It covers any illness, treatment or procedure in a government hospital run by the Delhi government, the Central government (including AIIMS), local bodies or autonomous state institutions.",
      "The department's scheme note gives help of up to ₹5 lakh. The money is not paid to the patient: a cheque for the sanctioned amount is issued to the treating hospital after approval by the Director Health Services, the Finance Department and the Kosh's chairman.",
    ],
    hi: [
      "दिल्ली आरोग्य कोष दिल्ली सरकार की एक पंजीकृत सोसाइटी है जो ज़रूरतमंद मरीज़ों के महंगे इलाज का ख़र्च देती है। इसमें दिल्ली सरकार, केंद्र सरकार (AIIMS समेत), स्थानीय निकायों या राज्य के स्वायत्त संस्थानों के सरकारी अस्पताल में किसी भी बीमारी, इलाज या प्रक्रिया का ख़र्च आता है।",
      "विभाग की योजना जानकारी के अनुसार ₹5 लाख तक की मदद मिलती है। पैसा मरीज़ को नहीं मिलता: स्वास्थ्य सेवा निदेशक, वित्त विभाग और कोष के अध्यक्ष की मंज़ूरी के बाद मंज़ूर राशि का चेक इलाज करने वाले अस्पताल के नाम जारी होता है।",
    ],
  },
  benefits: {
    en: [
      "Financial help of up to ₹5 lakh for treatment in a government hospital.",
      "Covers any illness or procedure the hospital says you need, as per its cost estimate.",
      "Paid directly to the hospital, so you don't need to arrange the money first.",
    ],
    hi: [
      "सरकारी अस्पताल में इलाज के लिए ₹5 लाख तक की आर्थिक मदद।",
      "अस्पताल के ख़र्च अनुमान के हिसाब से कोई भी ज़रूरी इलाज या प्रक्रिया शामिल।",
      "पैसा सीधे अस्पताल को जाता है, इसलिए पहले से इंतज़ाम नहीं करना पड़ता।",
    ],
  },
  eligibilityText: {
    en: [
      "Patient's family has a National Food Security (NFS) card.",
      "Patient has lived in Delhi for at least 3 years before applying.",
      "Patient needs treatment in a government hospital run by the Delhi or Central government, AIIMS, a local body or an autonomous state institution.",
    ],
    hi: [
      "मरीज़ के परिवार के पास राष्ट्रीय खाद्य सुरक्षा (NFS) कार्ड हो।",
      "मरीज़ आवेदन से पहले कम से कम 3 साल से दिल्ली में रह रहा हो।",
      "मरीज़ को दिल्ली या केंद्र सरकार, AIIMS, स्थानीय निकाय या राज्य के स्वायत्त संस्थान के सरकारी अस्पताल में इलाज चाहिए।",
    ],
  },
  applicationProcess: {
    offline: {
      en: [
        "Get a cost estimate from your treating doctor, certified by the hospital's Medical Superintendent.",
        "Fill in the application form and attach a copy of the NFS card, Delhi residence proof, treatment records and two photos attested by the doctor.",
        "Submit it in person at the Patient Welfare Cell, Directorate of Health Services, F-17 Karkardooma, Delhi (phone 011-22306851).",
      ],
      hi: [
        "इलाज करने वाले डॉक्टर से ख़र्च का अनुमान लें, जिस पर अस्पताल के चिकित्सा अधीक्षक का प्रमाण हो।",
        "आवेदन फ़ॉर्म भरें और NFS कार्ड की कॉपी, दिल्ली निवास का प्रमाण, इलाज के काग़ज़ और डॉक्टर से सत्यापित दो फ़ोटो लगाएँ।",
        "इसे ख़ुद जाकर रोगी कल्याण प्रकोष्ठ, स्वास्थ्य सेवा निदेशालय, F-17 कड़कड़डूमा, दिल्ली (फ़ोन 011-22306851) में जमा करें।",
      ],
    },
  },

  officialUrl: "https://health.delhi.gov.in/health/delhi-arogya-kosh",
  sources: ["https://health.delhi.gov.in/health/delhi-arogya-kosh", "https://health.delhi.gov.in/sites/default/files/Health/generic_multiple_files/dak.pdf"],
  lastVerified: "2026-10-06",
  launchedYear: 2011,
  status: "check-status",
};

export default scheme;
