import { all, isTrue, labelled, residentOf } from "@/lib/engine/build";
import type { Scheme } from "@/lib/types";

const scheme: Scheme = {
  slug: "mukhyamantri-jan-arogya-abhiyan",
  tier: "full",
  overlapGroup: "health-cover",
  name: { en: "Mukhyamantri Jan Arogya Abhiyan", hi: "मुख्यमंत्री जन आरोग्य अभियान" },
  aka: ["MMJAA", "UP Ayushman", "State Health Card UP", "Mukhya Mantri Jan Arogya Yojana"],
  shortDescription: {
    en: "Poor families in Uttar Pradesh left out of Ayushman Bharat get the same free hospital treatment of up to ₹5 lakh per family per year, paid fully by the state.",
    hi: "आयुष्मान भारत से छूटे उत्तर प्रदेश के गरीब परिवारों को भी हर साल प्रति परिवार ₹5 लाख तक मुफ़्त अस्पताल इलाज मिलता है, जिसका पूरा ख़र्च राज्य उठाता है।",
  },
  level: "state",
  state: "uttar-pradesh",
  department: {
    en: "Medical Health and Family Welfare Department (SACHIS), Government of Uttar Pradesh",
    hi: "चिकित्सा स्वास्थ्य एवं परिवार कल्याण विभाग (साचीज़), उत्तर प्रदेश सरकार",
  },
  categories: ["health", "social-welfare"],
  tags: ["health insurance", "ayushman card", "free treatment", "hospital", "cashless", "uttar pradesh"],
  benefitType: "insurance",
  isDBT: false,
  value: { amount: 500_000, period: "yearly", kind: "cover" },
  kundliHouse: "health",
  eligibility: all(
    residentOf("uttar-pradesh"),
    labelled(isTrue("bpl"), {
      en: "Your family is poor and on the state's eligible list (for example an Antyodaya ration card)",
      hi: "आपका परिवार गरीब है और राज्य की पात्र सूची में है (जैसे अंत्योदय राशन कार्ड)",
    }),
  ),

  details: {
    en: [
      "Mukhyamantri Jan Arogya Abhiyan (MMJAA) is Uttar Pradesh's own health cover. It started on 1 March 2019 for poor families who meet the Ayushman Bharat conditions but were left out of the central list.",
      "Members get exactly the same benefits as Ayushman Bharat PM-JAY: cashless, paperless treatment for hospital stays and major procedures, up to ₹5 lakh per family each year, at government and empanelled private hospitals.",
      "The state pays the full cost. It is run by SACHIS, the State Health Agency, which also runs PM-JAY in the state. Over time the state has added more groups, such as Antyodaya ration card holders.",
    ],
    hi: [
      "मुख्यमंत्री जन आरोग्य अभियान (MMJAA) उत्तर प्रदेश की अपनी स्वास्थ्य सुरक्षा योजना है। यह 1 मार्च 2019 को उन गरीब परिवारों के लिए शुरू हुई जो आयुष्मान भारत की शर्तें पूरी करते हैं पर केंद्र की सूची से छूट गए थे।",
      "इसमें आयुष्मान भारत PM-JAY जैसे ही फ़ायदे मिलते हैं: अस्पताल में भर्ती और बड़े इलाज के लिए बिना पैसे और बिना काग़ज़ी झंझट के, हर साल प्रति परिवार ₹5 लाख तक, सरकारी और सूचीबद्ध निजी अस्पतालों में।",
      "पूरा ख़र्च राज्य सरकार उठाती है। इसे साचीज़ (राज्य स्वास्थ्य एजेंसी) चलाती है, जो राज्य में PM-JAY भी चलाती है। समय के साथ राज्य ने इसमें और वर्ग जोड़े हैं, जैसे अंत्योदय राशन कार्ड वाले परिवार।",
    ],
  },
  benefits: {
    en: [
      "Free treatment up to ₹5 lakh per family per year.",
      "Cashless and paperless at empanelled government and private hospitals.",
      "Covers hospital stays, surgeries and major treatments, with the same package list as Ayushman Bharat.",
      "No premium, no age limit and no limit on family size.",
    ],
    hi: [
      "हर साल प्रति परिवार ₹5 लाख तक मुफ़्त इलाज।",
      "सूचीबद्ध सरकारी और निजी अस्पतालों में बिना पैसे और बिना काग़ज़ी झंझट के।",
      "अस्पताल में भर्ती, ऑपरेशन और बड़े इलाज शामिल, आयुष्मान भारत वाली पैकेज सूची के साथ।",
      "कोई प्रीमियम नहीं, उम्र की सीमा नहीं और परिवार के आकार की सीमा नहीं।",
    ],
  },
  eligibilityText: {
    en: [
      "Family lives in Uttar Pradesh.",
      "Family is on the MMJAA list: poor families who meet the SECC 2011 conditions but are not in PM-JAY, and other groups the state has added (such as Antyodaya ration card holders).",
      "You can check your name with 'Am I Eligible' on the SACHIS website or by calling 1800 1800 4444.",
    ],
    hi: [
      "परिवार उत्तर प्रदेश में रहता हो।",
      "परिवार MMJAA सूची में हो: वे गरीब परिवार जो SECC 2011 की शर्तें पूरी करते हैं पर PM-JAY में नहीं हैं, और राज्य के जोड़े गए दूसरे वर्ग (जैसे अंत्योदय राशन कार्ड वाले)।",
      "अपना नाम SACHIS वेबसाइट पर 'Am I Eligible' से या 1800 1800 4444 पर फ़ोन करके देख सकते हैं।",
    ],
  },
  exclusions: {
    en: [
      "Families already covered under Ayushman Bharat PM-JAY (they use that card instead).",
      "Outpatient care (doctor visits and medicines without admission) is not covered.",
    ],
    hi: [
      "जो परिवार पहले से आयुष्मान भारत PM-JAY में हैं (वे उसी कार्ड का इस्तेमाल करते हैं)।",
      "बिना भर्ती के डॉक्टर को दिखाना और दवाइयाँ (OPD) इसमें शामिल नहीं हैं।",
    ],
  },
  applicationProcess: {
    online: {
      en: [
        "Open the SACHIS website (sachis.in) and use 'Am I Eligible', or use the Ayushman app, to check your family's name.",
        "If you are listed, complete e-KYC with Aadhaar OTP in the app to make your card.",
        "At an empanelled hospital, show the card or your Aadhaar at the Ayushman Mitra desk for free treatment.",
      ],
      hi: [
        "SACHIS वेबसाइट (sachis.in) पर 'Am I Eligible' से, या आयुष्मान ऐप से, अपने परिवार का नाम देखें।",
        "अगर नाम है, तो ऐप में आधार OTP से e-KYC करके कार्ड बनाएँ।",
        "सूचीबद्ध अस्पताल में आयुष्मान मित्र डेस्क पर कार्ड या आधार दिखाकर मुफ़्त इलाज पाएँ।",
      ],
    },
    offline: {
      en: [
        "Visit a Jan Seva Kendra (CSC), ration shop camp or the Ayushman Mitra at a government hospital.",
        "Carry your Aadhaar and ration card. They will check your name and make your card.",
      ],
      hi: [
        "जन सेवा केंद्र (CSC), राशन दुकान पर लगे कैंप या सरकारी अस्पताल के आयुष्मान मित्र के पास जाएँ।",
        "आधार और राशन कार्ड साथ ले जाएँ। वे आपका नाम देखकर कार्ड बना देंगे।",
      ],
    },
  },
  documents: {
    en: ["Aadhaar card of each family member", "Ration card or family ID", "Mobile number linked to Aadhaar"],
    hi: ["परिवार के हर सदस्य का आधार कार्ड", "राशन कार्ड या फ़ैमिली ID", "आधार से जुड़ा मोबाइल नंबर"],
  },
  faqs: [
    {
      q: { en: "Is the MMJAA card different from the Ayushman card?", hi: "क्या MMJAA कार्ड आयुष्मान कार्ड से अलग है?" },
      a: {
        en: "The card looks the same and works at the same hospitals. The only difference is that the state, not the centre, pays for your treatment.",
        hi: "कार्ड एक जैसा दिखता है और उन्हीं अस्पतालों में चलता है। फ़र्क़ बस इतना है कि आपके इलाज का पैसा केंद्र की जगह राज्य देता है।",
      },
    },
    {
      q: { en: "My name is not on the list. What can I do?", hi: "सूची में मेरा नाम नहीं है। क्या करूँ?" },
      a: {
        en: "Call the toll-free number 1800 1800 4444 or ask at your nearest government hospital. If you are 70 or older, you can also get a card under Ayushman Vay Vandana regardless of income.",
        hi: "टोल-फ़्री नंबर 1800 1800 4444 पर फ़ोन करें या पास के सरकारी अस्पताल में पूछें। अगर आपकी उम्र 70 साल या ज़्यादा है, तो आय कुछ भी हो, आयुष्मान वय वंदना कार्ड भी बनवा सकते हैं।",
      },
    },
  ],

  officialUrl: "https://www.sachis.in/about-mmjaa.aspx",
  sources: [
    "https://www.sachis.in/about-mmjaa.aspx",
    "https://www.sachis.in/",
    "https://navbharatlive.com/uttar-pradesh/after-the-formation-of-the-present-government-every-needy-government-schemes-are-being-given-benefits-chief-minister-yogi-adityanath-460908.html",
  ],
  lastVerified: "2026-10-06",
  launchedYear: 2019,
  status: "active",
};

export default scheme;
