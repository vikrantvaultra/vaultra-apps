import { all, isTrue, minAge } from "@/lib/engine/build";
import type { Scheme } from "@/lib/types";

const scheme: Scheme = {
  slug: "indira-gandhi-old-age-pension",
  name: { en: "Indira Gandhi National Old Age Pension Scheme", hi: "इंदिरा गांधी राष्ट्रीय वृद्धावस्था पेंशन योजना" },
  aka: ["IGNOAPS", "NSAP old age pension", "Vridha Pension"],
  shortDescription: {
    en: "Monthly pension for BPL senior citizens aged 60+: the Centre pays ₹200 (₹500 from age 80) and most states add their own top-up on top.",
    hi: "60 साल से ऊपर के BPL बुज़ुर्गों को मासिक पेंशन: केंद्र ₹200 देता है (80 साल से ₹500) और ज़्यादातर राज्य इसमें अपनी राशि जोड़ते हैं।",
  },
  level: "central",
  ministry: "rural-development",
  categories: ["social-welfare", "pension-insurance"],
  tags: ["old age pension", "senior citizen", "bpl", "nsap", "vridha pension", "elderly"],
  benefitType: "pension",
  isDBT: true,
  value: { amount: 200, period: "monthly", kind: "pension" },
  ageRange: { min: 60 },
  kundliHouse: "senior",
  eligibility: all(minAge(60), isTrue("bpl")),

  details: {
    en: [
      "This is the old age pension part of the National Social Assistance Programme (NSAP), run by the Ministry of Rural Development with the states. It is for older people from families below the poverty line.",
      "The central government pays ₹200 a month to people aged 60 to 79, and ₹500 a month from age 80. States are asked to add at least as much, and most add more, so the actual pension you get depends on your state (often around ₹1,000 a month or higher).",
      "You apply through your gram panchayat, block office or municipality, and the state's social welfare or rural development department sanctions it. The pension is paid into your bank or post office account.",
    ],
    hi: [
      "यह राष्ट्रीय सामाजिक सहायता कार्यक्रम (NSAP) का वृद्धावस्था पेंशन वाला हिस्सा है, जिसे ग्रामीण विकास मंत्रालय राज्यों के साथ चलाता है। यह गरीबी रेखा से नीचे के परिवारों के बुज़ुर्गों के लिए है।",
      "केंद्र सरकार 60 से 79 साल वालों को ₹200 महीना और 80 साल से ₹500 महीना देती है। राज्यों से कहा गया है कि वे कम से कम इतनी ही राशि जोड़ें, और ज़्यादातर इससे अधिक जोड़ते हैं, इसलिए असल पेंशन आपके राज्य पर निर्भर है (अक्सर लगभग ₹1,000 महीना या उससे अधिक)।",
      "आवेदन ग्राम पंचायत, ब्लॉक कार्यालय या नगर पालिका से होता है और राज्य का समाज कल्याण या ग्रामीण विकास विभाग इसे मंज़ूर करता है। पेंशन आपके बैंक या डाकघर खाते में आती है।",
    ],
  },
  benefits: {
    en: [
      "Central share of ₹200 a month for ages 60 to 79.",
      "Central share of ₹500 a month from age 80.",
      "State top-up on top of the central share; the amount varies by state.",
      "Paid regularly into your bank or post office account.",
    ],
    hi: [
      "60 से 79 साल की उम्र में केंद्र का हिस्सा ₹200 प्रति माह।",
      "80 साल से केंद्र का हिस्सा ₹500 प्रति माह।",
      "केंद्र के हिस्से के ऊपर राज्य की अतिरिक्त राशि; यह हर राज्य में अलग है।",
      "पैसा नियमित रूप से आपके बैंक या डाकघर खाते में।",
    ],
  },
  eligibilityText: {
    en: [
      "Aged 60 years or above.",
      "Belongs to a household below the poverty line (BPL), as per your state's list.",
      "Some states use their own income or other criteria for their wider old age pension; check with your local office.",
    ],
    hi: [
      "60 साल या उससे अधिक उम्र।",
      "राज्य की सूची के अनुसार गरीबी रेखा से नीचे (BPL) परिवार से हों।",
      "कुछ राज्य अपनी बड़ी वृद्धावस्था पेंशन के लिए अपनी आय या दूसरी शर्तें रखते हैं; स्थानीय कार्यालय से पूछें।",
    ],
  },
  exclusions: {
    en: [
      "People from families that are not BPL do not get the central pension (your state may have a separate scheme).",
      "People already getting another government pension may not be eligible, depending on state rules.",
    ],
    hi: [
      "जो परिवार BPL नहीं हैं, उन्हें केंद्र की पेंशन नहीं मिलती (आपके राज्य की अलग योजना हो सकती है)।",
      "राज्य के नियमों के अनुसार, जिन्हें पहले से कोई दूसरी सरकारी पेंशन मिलती है, वे शायद पात्र न हों।",
    ],
  },
  applicationProcess: {
    online: {
      en: [
        "Many states accept applications on their social welfare / pension portal or through UMANG.",
        "Fill in your details, upload age proof, BPL proof and bank details, and submit.",
        "Track your application on the state portal or the NSAP website.",
      ],
      hi: [
        "कई राज्य अपने समाज कल्याण / पेंशन पोर्टल या UMANG पर आवेदन लेते हैं।",
        "अपनी जानकारी भरें, उम्र का प्रमाण, BPL प्रमाण और बैंक विवरण अपलोड करके जमा करें।",
        "राज्य के पोर्टल या NSAP वेबसाइट पर आवेदन की स्थिति देखें।",
      ],
    },
    offline: {
      en: [
        "Get the old age pension form from your gram panchayat, block office (BDO) or municipal office, or a Common Service Centre.",
        "Fill it in and attach copies of your documents.",
        "Submit it at the same office and keep the receipt. After verification, the pension is sanctioned.",
      ],
      hi: [
        "ग्राम पंचायत, ब्लॉक कार्यालय (BDO), नगर पालिका कार्यालय या जन सेवा केंद्र से वृद्धावस्था पेंशन फ़ॉर्म लें।",
        "फ़ॉर्म भरें और दस्तावेज़ों की कॉपी लगाएँ।",
        "उसी कार्यालय में जमा करें और रसीद रखें। जाँच के बाद पेंशन मंज़ूर होती है।",
      ],
    },
  },
  documents: {
    en: ["Aadhaar card", "Age proof (birth certificate, school certificate or voter ID)", "BPL card or BPL ration card", "Bank or post office account details", "Passport-size photograph"],
    hi: ["आधार कार्ड", "उम्र का प्रमाण (जन्म प्रमाण पत्र, स्कूल प्रमाण पत्र या वोटर ID)", "BPL कार्ड या BPL राशन कार्ड", "बैंक या डाकघर खाते का विवरण", "पासपोर्ट साइज़ फ़ोटो"],
  },
  faqs: [
    {
      q: { en: "Why do I get more than ₹200?", hi: "मुझे ₹200 से ज़्यादा क्यों मिलते हैं?" },
      a: {
        en: "₹200 (or ₹500 at 80+) is only the central government's share. Your state adds its own money, so the total you receive is higher.",
        hi: "₹200 (या 80+ पर ₹500) सिर्फ़ केंद्र सरकार का हिस्सा है। आपका राज्य अपनी राशि जोड़ता है, इसलिए कुल पेंशन ज़्यादा होती है।",
      },
    },
    {
      q: { en: "Can a husband and wife both get this pension?", hi: "क्या पति-पत्नी दोनों को यह पेंशन मिल सकती है?" },
      a: {
        en: "Yes, if both are 60 or older and the household is BPL, each can apply separately.",
        hi: "हाँ, अगर दोनों 60 साल या उससे अधिक के हैं और परिवार BPL है, तो दोनों अलग-अलग आवेदन कर सकते हैं।",
      },
    },
  ],

  officialUrl: "https://nsap.dord.gov.in/",
  sources: [
    "https://nsap.dord.gov.in/",
    "https://static.pib.gov.in/WriteReadData/specificdocs/documents/2025/nov/doc2025117686801.pdf",
  ],
  lastVerified: "2026-10-06",
  launchedYear: 2007,
  status: "active",
};

export default scheme;
