import { all, isTrue, labelled } from "@/lib/engine/build";
import type { Scheme } from "@/lib/types";

const scheme: Scheme = {
  slug: "pm-poshan",
  name: { en: "PM POSHAN (Mid-Day Meal)", hi: "पीएम पोषण (मध्याह्न भोजन)" },
  aka: ["PM POSHAN", "Mid-Day Meal", "MDM", "Pradhan Mantri Poshan Shakti Nirman"],
  shortDescription: {
    en: "Free hot cooked lunch every school day for children in Balvatika and Classes 1 to 8 at government and government-aided schools.",
    hi: "सरकारी और सरकारी सहायता प्राप्त स्कूलों में बालवाटिका और कक्षा 1 से 8 के बच्चों को हर स्कूल दिन मुफ़्त गरम पका दोपहर का खाना।",
  },
  level: "central",
  ministry: "education",
  categories: ["education", "health"],
  tags: ["mid day meal", "school meal", "children", "nutrition", "lunch", "school"],
  benefitType: "in-kind",
  isDBT: false,
  kundliHouse: "education",
  eligibility: all(
    labelled(isTrue("student"), { en: "The child is studying in school", hi: "बच्चा स्कूल में पढ़ रहा है" }),
  ),

  details: {
    en: [
      "PM POSHAN (Pradhan Mantri Poshan Shakti Nirman), earlier called the Mid-Day Meal scheme, gives one free hot cooked meal on school days to children in government and government-aided schools. It is run by the Ministry of Education with state governments.",
      "It covers children in Balvatika (pre-primary, the year before Class 1) and Classes 1 to 8. The meal is meant to improve children's nutrition and encourage them to come to school regularly.",
      "Each meal must meet set nutrition norms, with more for upper primary children. Many schools also grow school nutrition gardens, and some states add extra items like eggs, milk or fruit from their own funds.",
    ],
    hi: [
      "PM पोषण (प्रधानमंत्री पोषण शक्ति निर्माण), जिसे पहले मध्याह्न भोजन योजना कहते थे, सरकारी और सरकारी सहायता प्राप्त स्कूलों के बच्चों को स्कूल के दिनों में एक मुफ़्त गरम पका खाना देती है। इसे शिक्षा मंत्रालय राज्य सरकारों के साथ चलाता है।",
      "इसमें बालवाटिका (कक्षा 1 से पहले का प्री-प्राइमरी साल) और कक्षा 1 से 8 के बच्चे आते हैं। इस खाने का मक़सद बच्चों का पोषण सुधारना और उन्हें नियमित स्कूल आने के लिए प्रेरित करना है।",
      "हर खाने को तय पोषण मानक पूरे करने होते हैं, और उच्च प्राथमिक के बच्चों के लिए ज़्यादा। कई स्कूलों में पोषण वाटिका भी है, और कुछ राज्य अपनी ओर से अंडा, दूध या फल जैसी चीज़ें जोड़ते हैं।",
    ],
  },
  benefits: {
    en: [
      "One free hot cooked meal on every school day.",
      "Primary children (Balvatika and Classes 1–5): meal with about 450 calories and 12 g protein.",
      "Upper primary children (Classes 6–8): meal with about 700 calories and 20 g protein.",
      "Extra items like eggs, milk, fruit or millets in some states, from state funds.",
    ],
    hi: [
      "हर स्कूल दिन एक मुफ़्त गरम पका खाना।",
      "प्राथमिक बच्चे (बालवाटिका और कक्षा 1–5): लगभग 450 कैलोरी और 12 ग्राम प्रोटीन वाला खाना।",
      "उच्च प्राथमिक बच्चे (कक्षा 6–8): लगभग 700 कैलोरी और 20 ग्राम प्रोटीन वाला खाना।",
      "कुछ राज्यों में राज्य के पैसे से अंडा, दूध, फल या श्री अन्न जैसी अतिरिक्त चीज़ें।",
    ],
  },
  eligibilityText: {
    en: [
      "Child is studying in Balvatika (pre-primary) or Classes 1 to 8.",
      "School is a government, government-aided, local body school, or a covered special training / madrasa centre.",
      "There is no income or caste condition.",
    ],
    hi: [
      "बच्चा बालवाटिका (प्री-प्राइमरी) या कक्षा 1 से 8 में पढ़ रहा है।",
      "स्कूल सरकारी, सरकारी सहायता प्राप्त, स्थानीय निकाय का स्कूल, या शामिल विशेष प्रशिक्षण / मदरसा केंद्र है।",
      "कोई आय या जाति की शर्त नहीं है।",
    ],
  },
  exclusions: {
    en: [
      "Children in private unaided schools.",
      "Students in Class 9 and above (unless the state runs its own scheme).",
    ],
    hi: [
      "निजी गैर-सहायता प्राप्त स्कूलों के बच्चे।",
      "कक्षा 9 और उससे ऊपर के छात्र (जब तक राज्य अपनी योजना न चलाए)।",
    ],
  },
  applicationProcess: {
    offline: {
      en: [
        "No separate application is needed.",
        "Enrol your child in a government or government-aided school (Balvatika to Class 8).",
        "The child gets the meal at school on every working day. Raise any complaint with the head teacher or School Management Committee.",
      ],
      hi: [
        "अलग से आवेदन की ज़रूरत नहीं है।",
        "बच्चे का दाख़िला सरकारी या सरकारी सहायता प्राप्त स्कूल में (बालवाटिका से कक्षा 8) कराएँ।",
        "बच्चे को हर कामकाजी दिन स्कूल में खाना मिलता है। कोई शिकायत हो तो प्रधानाध्यापक या स्कूल प्रबंधन समिति से कहें।",
      ],
    },
  },
  documents: {
    en: ["Only the documents the school asks for at admission (such as birth certificate and Aadhaar, if available)"],
    hi: ["सिर्फ़ वही दस्तावेज़ जो स्कूल दाख़िले के समय माँगे (जैसे जन्म प्रमाण पत्र और आधार, अगर हो)"],
  },
  faqs: [
    {
      q: { en: "Does my child need to be from a poor family?", hi: "क्या बच्चे का गरीब परिवार से होना ज़रूरी है?" },
      a: {
        en: "No. Every child studying in Balvatika to Class 8 in a covered school gets the meal, whatever the family income.",
        hi: "नहीं। शामिल स्कूलों में बालवाटिका से कक्षा 8 तक पढ़ने वाले हर बच्चे को खाना मिलता है, परिवार की आय चाहे जो हो।",
      },
    },
    {
      q: { en: "What can parents do if the food quality is poor?", hi: "अगर खाने की गुणवत्ता ख़राब हो तो माता-पिता क्या करें?" },
      a: {
        en: "Tell the School Management Committee or head teacher. Parents can also taste the meal on their turn, and complaints can be taken to the block education office.",
        hi: "स्कूल प्रबंधन समिति या प्रधानाध्यापक को बताएँ। माता-पिता अपनी बारी पर खाना चख भी सकते हैं, और शिकायत ब्लॉक शिक्षा कार्यालय तक ले जा सकते हैं।",
      },
    },
  ],

  officialUrl: "https://pmposhan.education.gov.in/",
  sources: [
    "https://pmposhan.education.gov.in/",
    "https://pmposhan.education.gov.in/PAB_PM_POSHAN.html",
    "https://www.skillcouncils.com/newsw-details.php?jid=282",
  ],
  lastVerified: "2026-10-06",
  launchedYear: 2021,
  status: "check-status",
};

export default scheme;
