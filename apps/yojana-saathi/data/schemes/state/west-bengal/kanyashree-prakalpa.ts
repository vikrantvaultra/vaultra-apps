import { all, ageBetween, female, isTrue, labelled, residentOf, when } from "@/lib/engine/build";
import type { Scheme } from "@/lib/types";

const scheme: Scheme = {
  slug: "kanyashree-prakalpa",
  tier: "full",
  name: { en: "Kanyashree Prakalpa", hi: "कन्याश्री प्रकल्प" },
  aka: ["Kanyashree", "K1", "K2"],
  shortDescription: {
    en: "Unmarried girls in West Bengal who stay in school get ₹1,000 a year from age 13 to 18, and a one-time ₹25,000 at 18 if they are still studying and unmarried.",
    hi: "पश्चिम बंगाल में पढ़ाई जारी रखने वाली अविवाहित लड़कियों को 13 से 18 साल तक हर साल ₹1,000, और 18 साल पर पढ़ाई जारी व अविवाहित रहने पर एक बार ₹25,000 मिलते हैं।",
  },
  level: "state",
  state: "west-bengal",
  department: {
    en: "Department of Women & Child Development and Social Welfare, Government of West Bengal",
    hi: "महिला एवं बाल विकास और समाज कल्याण विभाग, पश्चिम बंगाल सरकार",
  },
  categories: ["women-child", "education"],
  tags: ["girl child", "kanyashree", "scholarship", "child marriage", "student", "west bengal"],
  benefitType: "cash",
  isDBT: true,
  value: { amount: 1000, period: "yearly", kind: "cash" },
  ageRange: { min: 13, max: 19 },
  kundliHouse: "daughter",
  eligibility: all(
    residentOf("west-bengal"),
    female(),
    ...ageBetween(13, 19),
    isTrue("student"),
    labelled(when("marital", "eq", "never-married"), { en: "You are unmarried", hi: "आप अविवाहित हैं" }),
  ),

  details: {
    en: [
      "Kanyashree Prakalpa is West Bengal's scheme to keep girls in education and stop child marriage. It pays money directly into the girl's own bank account, as long as she stays unmarried and keeps studying.",
      "There are two parts. K1 is an annual scholarship of ₹1,000 for girls aged 13 to 18. K2 is a one-time grant of ₹25,000 for girls aged 18 to 19 who are still in education or training.",
      "The scheme started in 2013 and is run by the Department of Women & Child Development and Social Welfare. Applications go through the girl's school, college or training institute.",
    ],
    hi: [
      "कन्याश्री प्रकल्प पश्चिम बंगाल की योजना है, जिसका मक़सद लड़कियों की पढ़ाई जारी रखना और बाल विवाह रोकना है। जब तक लड़की अविवाहित है और पढ़ रही है, पैसा सीधे उसके अपने बैंक खाते में आता है।",
      "इसके दो हिस्से हैं। K1 में 13 से 18 साल की लड़कियों को हर साल ₹1,000 की छात्रवृत्ति मिलती है। K2 में 18 से 19 साल की उन लड़कियों को एक बार ₹25,000 मिलते हैं जो अभी भी पढ़ाई या प्रशिक्षण कर रही हैं।",
      "यह योजना 2013 में शुरू हुई और महिला एवं बाल विकास और समाज कल्याण विभाग इसे चलाता है। आवेदन लड़की के स्कूल, कॉलेज या प्रशिक्षण संस्थान से होता है।",
    ],
  },
  benefits: {
    en: [
      "K1: ₹1,000 every year while you are 13 to 18 and studying.",
      "K2: a one-time grant of ₹25,000 when you are 18 to 19, unmarried and still studying or in training.",
      "Money goes into a bank account in your own name.",
    ],
    hi: [
      "K1: 13 से 18 साल की उम्र में पढ़ाई के दौरान हर साल ₹1,000।",
      "K2: 18 से 19 साल की उम्र में, अविवाहित रहने और पढ़ाई या प्रशिक्षण जारी रखने पर एक बार ₹25,000।",
      "पैसा आपके अपने नाम के बैंक खाते में आता है।",
    ],
  },
  eligibilityText: {
    en: [
      "A girl who lives in West Bengal.",
      "Unmarried.",
      "K1: aged 13 to 18 and studying in Class VIII or above (or an equivalent course).",
      "K2: aged 18 to 19 and enrolled in a school, college, open course, vocational or technical training centre, or sports training institute.",
      "Girls with a disability of 40% or more do not need to be in Class VIII to get K1.",
      "Your school or college will tell you about any family income rule that applies.",
    ],
    hi: [
      "पश्चिम बंगाल में रहने वाली लड़की।",
      "अविवाहित हो।",
      "K1: उम्र 13 से 18 साल और कक्षा 8 या उससे ऊपर (या बराबर कोर्स) में पढ़ रही हो।",
      "K2: उम्र 18 से 19 साल और किसी स्कूल, कॉलेज, ओपन कोर्स, व्यावसायिक या तकनीकी प्रशिक्षण केंद्र, या खेल प्रशिक्षण संस्थान में नाम लिखा हो।",
      "40% या उससे ज़्यादा दिव्यांगता वाली लड़कियों के लिए K1 में कक्षा 8 की शर्त नहीं है।",
      "परिवार की आय से जुड़ा कोई नियम लागू है तो आपका स्कूल या कॉलेज बताएगा।",
    ],
  },
  exclusions: {
    en: [
      "Girls who are married.",
      "Girls who have left school or college and are not in any course or training.",
      "Girls below Class VIII (unless they have a disability of 40% or more).",
    ],
    hi: [
      "शादीशुदा लड़कियाँ।",
      "जिन लड़कियों ने स्कूल या कॉलेज छोड़ दिया है और किसी कोर्स या प्रशिक्षण में नहीं हैं।",
      "कक्षा 8 से नीचे की लड़कियाँ (40% या ज़्यादा दिव्यांगता होने पर छूट है)।",
    ],
  },
  applicationProcess: {
    offline: {
      en: [
        "Ask the head of your school, college or institute for the Kanyashree form (K1 or K2).",
        "Fill it in and hand it back with your documents. The institute checks it and uploads it to the Kanyashree portal.",
        "Each year, the institute renews your K1 scholarship. When you turn 18, ask them to upgrade you from K1 to K2.",
      ],
      hi: [
        "अपने स्कूल, कॉलेज या संस्थान के प्रधान से कन्याश्री का फ़ॉर्म (K1 या K2) माँगें।",
        "फ़ॉर्म भरकर दस्तावेज़ों के साथ वापस दें। संस्थान इसे जाँचकर कन्याश्री पोर्टल पर अपलोड करता है।",
        "हर साल संस्थान आपकी K1 छात्रवृत्ति का नवीनीकरण करता है। 18 साल की होने पर K1 से K2 में बदलने के लिए उनसे कहें।",
      ],
    },
    online: {
      en: [
        "Go to kanyashree.wb.gov.in and open 'Track Application'.",
        "Enter your application details to see where your payment stands.",
      ],
      hi: [
        "kanyashree.wb.gov.in पर जाएँ और 'Track Application' खोलें।",
        "अपने आवेदन का ब्योरा डालकर देखें कि भुगतान कहाँ तक पहुँचा है।",
      ],
    },
  },
  documents: {
    en: [
      "Birth certificate (if you don't have one, your age can be taken from school records)",
      "Proof that you live in West Bengal",
      "Certificate of enrolment from the head of your institution",
      "Bank account passbook in your own name",
      "Declaration that you are unmarried",
      "Disability certificate, if applicable",
    ],
    hi: [
      "जन्म प्रमाण पत्र (न हो तो उम्र स्कूल के रिकॉर्ड से ली जा सकती है)",
      "पश्चिम बंगाल में रहने का सबूत",
      "संस्थान के प्रधान से दाख़िले का प्रमाण पत्र",
      "आपके अपने नाम के बैंक खाते की पासबुक",
      "अविवाहित होने की घोषणा",
      "दिव्यांगता प्रमाण पत्र, अगर लागू हो",
    ],
  },
  faqs: [
    {
      q: { en: "Do I have to apply every year for K1?", hi: "क्या K1 के लिए हर साल आवेदन करना होगा?" },
      a: {
        en: "No fresh application is needed. Your institute renews it each year. At renewal you don't need to give your birth or income certificate again, but your marital status is checked.",
        hi: "नया आवेदन नहीं करना पड़ता। आपका संस्थान हर साल नवीनीकरण करता है। नवीनीकरण के समय जन्म या आय प्रमाण पत्र दोबारा नहीं देना होता, पर आपकी शादी की स्थिति जाँची जाती है।",
      },
    },
    {
      q: { en: "Can I get K2 if I'm doing an ITI or vocational course after school?", hi: "क्या स्कूल के बाद ITI या व्यावसायिक कोर्स करने पर K2 मिलेगा?" },
      a: {
        en: "Yes. K2 is open to girls enrolled in a vocational, technical or industrial training centre, an open course or a sports training institute, not only colleges.",
        hi: "हाँ। K2 सिर्फ़ कॉलेज के लिए नहीं है। व्यावसायिक, तकनीकी या औद्योगिक प्रशिक्षण केंद्र, ओपन कोर्स या खेल प्रशिक्षण संस्थान में पढ़ रही लड़कियाँ भी इसे पा सकती हैं।",
      },
    },
    {
      q: { en: "What happens if I get married before 18?", hi: "अगर 18 साल से पहले शादी हो जाए तो?" },
      a: {
        en: "You stop being eligible. The scheme only pays girls who stay unmarried, because its aim is to end child marriage.",
        hi: "तब आप पात्र नहीं रहतीं। यह योजना केवल अविवाहित लड़कियों को पैसा देती है, क्योंकि इसका मक़सद बाल विवाह ख़त्म करना है।",
      },
    },
  ],

  officialUrl: "https://kanyashree.wb.gov.in/",
  sources: [
    "https://kanyashree.wb.gov.in/faq",
    "https://kanyashree.wb.gov.in/download_kp_guide1",
    "https://finance.wb.gov.in/writereaddata/Budget_Speech/2026_English.pdf",
  ],
  lastVerified: "2026-10-06",
  launchedYear: 2013,
  status: "active",
};

export default scheme;
