import { all, residentOf } from "@/lib/engine/build";
import type { Scheme } from "@/lib/types";

const scheme: Scheme = {
  slug: "shri-ramlala-darshan-yojana",
  tier: "compact",
  name: { en: "Shri Ramlala Darshan (Ayodhya Dham) Yojana", hi: "श्री रामलला दर्शन (अयोध्या धाम) योजना" },
  aka: ["Ramlala Darshan Yojana", "Ayodhya darshan Chhattisgarh", "free Ayodhya trip CG"],
  shortDescription: {
    en: "Residents of Chhattisgarh selected by their district can travel free by special train to Ayodhya for Ram Lalla darshan, with a visit to Kashi Vishwanath. People aged 55+ get priority.",
    hi: "ज़िले से चुने गए छत्तीसगढ़ के निवासी विशेष ट्रेन से मुफ़्त अयोध्या जाकर रामलला के दर्शन कर सकते हैं, साथ में काशी विश्वनाथ भी। 55 साल से ज़्यादा उम्र वालों को प्राथमिकता।",
  },
  level: "state",
  state: "chhattisgarh",
  department: {
    en: "Tourism and Culture Department, Government of Chhattisgarh",
    hi: "पर्यटन एवं संस्कृति विभाग, छत्तीसगढ़ सरकार",
  },
  categories: ["social-welfare"],
  tags: ["ayodhya", "pilgrimage", "ram lalla", "train", "senior citizen", "chhattisgarh"],
  benefitType: "in-kind",
  isDBT: false,
  kundliHouse: "senior",
  eligibility: all(residentOf("chhattisgarh")),

  details: {
    en: [
      "Under Shri Ramlala Darshan Yojana, the state runs special trains that take residents of Chhattisgarh to Ayodhya Dham for darshan of Ram Lalla. Trips also include Kashi Vishwanath in Varanasi.",
      "A committee led by the district collector selects the pilgrims for each district's quota and keeps a waiting list. Over 47,000 people had travelled by early 2026.",
    ],
    hi: [
      "श्री रामलला दर्शन योजना में राज्य सरकार विशेष ट्रेनें चलाती है, जो छत्तीसगढ़ के निवासियों को रामलला के दर्शन के लिए अयोध्या धाम ले जाती हैं। यात्रा में वाराणसी के काशी विश्वनाथ के दर्शन भी शामिल हैं।",
      "कलेक्टर की अध्यक्षता वाली ज़िला समिति हर ज़िले के कोटे के लिए यात्रियों का चयन करती है और प्रतीक्षा सूची बनाती है। 2026 की शुरुआत तक 47,000 से ज़्यादा लोग यात्रा कर चुके थे।",
    ],
  },
  benefits: {
    en: [
      "Free special-train trip to Ayodhya and Varanasi and back.",
      "People above 65 travelling alone can take a helper, as per the rules.",
    ],
    hi: [
      "अयोध्या और वाराणसी तक आने-जाने की मुफ़्त विशेष ट्रेन यात्रा।",
      "अकेले यात्रा करने वाले 65 साल से ज़्यादा उम्र के लोग नियम के अनुसार एक सहायक साथ ले जा सकते हैं।",
    ],
  },
  eligibilityText: {
    en: [
      "A resident of Chhattisgarh.",
      "Applicants aged 55 or above get priority.",
      "A health check-up is done before the trip.",
    ],
    hi: [
      "छत्तीसगढ़ का निवासी।",
      "55 साल या उससे ज़्यादा उम्र के आवेदकों को प्राथमिकता।",
      "यात्रा से पहले स्वास्थ्य जाँच होती है।",
    ],
  },
  applicationProcess: {
    offline: {
      en: [
        "Get the form from your gram panchayat, janpad panchayat, urban body or the collector's office when your district announces a trip.",
        "Submit it with a recent colour photo, identity and residence proof, and contact details of two people for emergencies.",
        "If selected, attend the health check and report at the station on the given date.",
      ],
      hi: [
        "जब ज़िला यात्रा की घोषणा करे, ग्राम पंचायत, जनपद पंचायत, नगरीय निकाय या कलेक्टर कार्यालय से फ़ॉर्म लें।",
        "हाल की रंगीन फ़ोटो, पहचान और निवास प्रमाण, और आपात स्थिति के लिए दो लोगों के संपर्क के साथ जमा करें।",
        "चयन होने पर स्वास्थ्य जाँच कराएँ और बताई गई तारीख़ पर स्टेशन पहुँचें।",
      ],
    },
  },
  officialUrl: "https://dprcg.gov.in/post/1789836710/%E0%A4%A7%E0%A4%AE%E0%A4%A4%E0%A4%B0%E0%A5%80-%E0%A4%B6%E0%A5%8D%E0%A4%B0%E0%A5%80%E0%A4%B0%E0%A4%BE%E0%A4%AE%E0%A4%B2%E0%A4%B2%E0%A4%BE-%E0%A4%A6%E0%A4%B0%E0%A5%8D%E0%A4%B6%E0%A4%A8-%E0%A4%AF%E0%A5%8B%E0%A4%9C%E0%A4%A8%E0%A4%BE-%E0%A4%86%E0%A4%B8%E0%A5%8D%E0%A4%A5%E0%A4%BE-%E0%A4%B8%E0%A5%87-%E0%A4%85%E0%A4%B5%E0%A4%B8%E0%A4%B0-%E0%A4%A4%E0%A4%95-%E0%A4%A7%E0%A4%AE%E0%A4%A4%E0%A4%B0%E0%A5%80-%E0%A4%95%E0%A5%87-2000-%E0%A4%B8%E0%A5%87-%E0%A4%85%E0%A4%A7%E0%A4%BF%E0%A4%95-%E0%A4%B6%E0%A5%8D%E0%A4%B0%E0%A4%A6%E0%A5%8D%E0%A4%A7%E0%A4%BE%E0%A4%B2%E0%A5%81%E0%A4%93%E0%A4%82-%E0%A4%A8%E0%A5%87-%E0%A4%95%E0%A4%BF%E0%A4%8F-%E0%A4%AA%E0%A5%8D%E0%A4%B0%E0%A4%AD%E0%A5%81-%E0%A4%B6%E0%A5%8D%E0%A4%B0%E0%A5%80%E0%A4%B0%E0%A4%BE%E0%A4%AE%E0%A4%B2%E0%A4%B2%E0%A4%BE-%E0%A4%95%E0%A5%87-%E0%A4%A6%E0%A4%B0%E0%A5%8D%E0%A4%B6%E0%A4%A8",
  sources: [
    "https://dprcg.gov.in/post/1789836710/%E0%A4%A7%E0%A4%AE%E0%A4%A4%E0%A4%B0%E0%A5%80-%E0%A4%B6%E0%A5%8D%E0%A4%B0%E0%A5%80%E0%A4%B0%E0%A4%BE%E0%A4%AE%E0%A4%B2%E0%A4%B2%E0%A4%BE-%E0%A4%A6%E0%A4%B0%E0%A5%8D%E0%A4%B6%E0%A4%A8-%E0%A4%AF%E0%A5%8B%E0%A4%9C%E0%A4%A8%E0%A4%BE-%E0%A4%86%E0%A4%B8%E0%A5%8D%E0%A4%A5%E0%A4%BE-%E0%A4%B8%E0%A5%87-%E0%A4%85%E0%A4%B5%E0%A4%B8%E0%A4%B0-%E0%A4%A4%E0%A4%95-%E0%A4%A7%E0%A4%AE%E0%A4%A4%E0%A4%B0%E0%A5%80-%E0%A4%95%E0%A5%87-2000-%E0%A4%B8%E0%A5%87-%E0%A4%85%E0%A4%A7%E0%A4%BF%E0%A4%95-%E0%A4%B6%E0%A5%8D%E0%A4%B0%E0%A4%A6%E0%A5%8D%E0%A4%A7%E0%A4%BE%E0%A4%B2%E0%A5%81%E0%A4%93%E0%A4%82-%E0%A4%A8%E0%A5%87-%E0%A4%95%E0%A4%BF%E0%A4%8F-%E0%A4%AA%E0%A5%8D%E0%A4%B0%E0%A4%AD%E0%A5%81-%E0%A4%B6%E0%A5%8D%E0%A4%B0%E0%A5%80%E0%A4%B0%E0%A4%BE%E0%A4%AE%E0%A4%B2%E0%A4%B2%E0%A4%BE-%E0%A4%95%E0%A5%87-%E0%A4%A6%E0%A4%B0%E0%A5%8D%E0%A4%B6%E0%A4%A8",
  ],
  lastVerified: "2026-10-06",
  launchedYear: 2024,
  status: "active",
};

export default scheme;
