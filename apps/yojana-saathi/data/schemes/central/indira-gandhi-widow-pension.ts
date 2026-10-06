import { all, ageBetween, female, isTrue, labelled, when } from "@/lib/engine/build";
import type { Scheme } from "@/lib/types";

const scheme: Scheme = {
  slug: "indira-gandhi-widow-pension",
  name: { en: "Indira Gandhi National Widow Pension Scheme", hi: "इंदिरा गांधी राष्ट्रीय विधवा पेंशन योजना" },
  aka: ["IGNWPS", "Widow pension", "Vidhwa pension", "NSAP"],
  shortDescription: {
    en: "BPL widows aged 40 to 79 get a monthly pension of ₹300 from the Centre, paid into their bank account, with most states adding their own top-up.",
    hi: "40 से 79 साल की BPL विधवा महिलाओं को केंद्र से हर महीने ₹300 पेंशन बैंक खाते में मिलती है, और ज़्यादातर राज्य इसमें अपनी ओर से राशि जोड़ते हैं।",
  },
  level: "central",
  ministry: "rural-development",
  categories: ["social-welfare", "women-child", "pension-insurance"],
  tags: ["widow", "pension", "vidhwa", "nsap", "bpl", "women"],
  benefitType: "pension",
  isDBT: true,
  value: { amount: 300, period: "monthly", kind: "pension" },
  ageRange: { min: 40, max: 79 },
  kundliHouse: "women-family",
  eligibility: all(
    female(),
    labelled(when("marital", "eq", "widowed"), { en: "You are a widow", hi: "आप विधवा हैं" }),
    ...ageBetween(40, 79),
    labelled(isTrue("bpl"), { en: "Your family is below the poverty line (BPL)", hi: "आपका परिवार गरीबी रेखा से नीचे (BPL) है" }),
  ),

  details: {
    en: [
      "The Indira Gandhi National Widow Pension Scheme is part of the National Social Assistance Programme (NSAP), run by the Ministry of Rural Development. It gives a small monthly pension to widows from poor families.",
      "The Centre pays ₹300 a month to each eligible widow aged 40 to 79. When she turns 80, she moves to the old age pension, where the central amount is ₹500 a month.",
      "States run the scheme on the ground and pick the beneficiaries. Most states add their own money on top, so the pension you actually get is usually higher than ₹300. Payments are made directly into a bank or post office account.",
    ],
    hi: [
      "इंदिरा गांधी राष्ट्रीय विधवा पेंशन योजना राष्ट्रीय सामाजिक सहायता कार्यक्रम (NSAP) का हिस्सा है, जिसे ग्रामीण विकास मंत्रालय चलाता है। यह गरीब परिवारों की विधवा महिलाओं को हर महीने थोड़ी पेंशन देती है।",
      "केंद्र 40 से 79 साल की हर पात्र विधवा को हर महीने ₹300 देता है। 80 साल की होने पर वह वृद्धावस्था पेंशन में चली जाती है, जहाँ केंद्र की राशि ₹500 महीना है।",
      "ज़मीनी स्तर पर योजना राज्य चलाते हैं और लाभार्थी चुनते हैं। ज़्यादातर राज्य अपनी ओर से पैसा जोड़ते हैं, इसलिए असल में मिलने वाली पेंशन आमतौर पर ₹300 से ज़्यादा होती है। भुगतान सीधे बैंक या डाकघर खाते में होता है।",
    ],
  },
  benefits: {
    en: [
      "₹300 a month from the Central Government for widows aged 40 to 79.",
      "Extra top-up from your state government in most states.",
      "From age 80, the central pension becomes ₹500 a month under the old age pension scheme.",
      "Money is paid directly into your bank or post office account.",
    ],
    hi: [
      "40 से 79 साल की विधवा महिलाओं को केंद्र सरकार से हर महीने ₹300।",
      "ज़्यादातर राज्यों में राज्य सरकार की ओर से अतिरिक्त राशि।",
      "80 साल की उम्र से वृद्धावस्था पेंशन योजना में केंद्र की पेंशन ₹500 महीना हो जाती है।",
      "पैसा सीधे आपके बैंक या डाकघर खाते में आता है।",
    ],
  },
  eligibilityText: {
    en: [
      "You are a widow aged 40 to 79 years.",
      "Your household is below the poverty line (BPL) as per the criteria of the Government of India or your state.",
      "You live in the state where you apply.",
    ],
    hi: [
      "आप 40 से 79 साल की विधवा हैं।",
      "आपका परिवार भारत सरकार या आपके राज्य के नियमों के अनुसार गरीबी रेखा से नीचे (BPL) है।",
      "आप उसी राज्य में रहती हैं जहाँ आवेदन कर रही हैं।",
    ],
  },
  exclusions: {
    en: [
      "Widows below 40 years (some states cover them under their own widow pension schemes).",
      "Widows from families that are not BPL.",
      "Widows aged 80 and above are covered under the old age pension instead.",
    ],
    hi: [
      "40 साल से कम उम्र की विधवाएँ (कुछ राज्य उन्हें अपनी विधवा पेंशन योजना में शामिल करते हैं)।",
      "जो विधवाएँ BPL परिवार से नहीं हैं।",
      "80 साल और उससे ज़्यादा उम्र की विधवाओं को इसकी जगह वृद्धावस्था पेंशन मिलती है।",
    ],
  },
  applicationProcess: {
    online: {
      en: [
        "Many states accept NSAP pension applications on their social welfare or e-district portal; check nsap.dord.gov.in for your state.",
        "Fill in the widow pension form with your details and upload your documents.",
        "Track the status online after submitting.",
      ],
      hi: [
        "कई राज्य NSAP पेंशन के आवेदन अपने समाज कल्याण या ई-डिस्ट्रिक्ट पोर्टल पर लेते हैं; अपने राज्य के लिए nsap.dord.gov.in देखें।",
        "विधवा पेंशन फ़ॉर्म में अपनी जानकारी भरें और दस्तावेज़ अपलोड करें।",
        "जमा करने के बाद स्थिति ऑनलाइन देखें।",
      ],
    },
    offline: {
      en: [
        "In a village, go to the Gram Panchayat or block office; in a town, go to the municipal office or social welfare office.",
        "Fill in the widow pension form and attach your documents.",
        "After checking and approval, the pension starts coming to your bank or post office account.",
      ],
      hi: [
        "गाँव में ग्राम पंचायत या ब्लॉक कार्यालय जाएँ; शहर में नगर पालिका या समाज कल्याण कार्यालय जाएँ।",
        "विधवा पेंशन फ़ॉर्म भरें और दस्तावेज़ लगाएँ।",
        "जाँच और मंज़ूरी के बाद पेंशन आपके बैंक या डाकघर खाते में आने लगती है।",
      ],
    },
  },
  documents: {
    en: ["Death certificate of the husband", "Age proof (birth certificate, school certificate or Aadhaar)", "BPL card or BPL certificate", "Aadhaar card", "Bank or post office account passbook", "Passport-size photo"],
    hi: ["पति का मृत्यु प्रमाण पत्र", "उम्र का सबूत (जन्म प्रमाण पत्र, स्कूल प्रमाण पत्र या आधार)", "BPL कार्ड या BPL प्रमाण पत्र", "आधार कार्ड", "बैंक या डाकघर खाते की पासबुक", "पासपोर्ट साइज़ फ़ोटो"],
  },
  faqs: [
    {
      q: { en: "Why is my pension more than ₹300?", hi: "मेरी पेंशन ₹300 से ज़्यादा क्यों है?" },
      a: {
        en: "₹300 is only the central share. Most states add their own amount, and some combine it with a state widow pension, so the total differs from state to state.",
        hi: "₹300 सिर्फ़ केंद्र का हिस्सा है। ज़्यादातर राज्य अपनी राशि जोड़ते हैं और कुछ इसे राज्य की विधवा पेंशन के साथ मिलाते हैं, इसलिए कुल राशि हर राज्य में अलग होती है।",
      },
    },
    {
      q: { en: "Will the pension stop if I remarry?", hi: "दोबारा शादी करने पर क्या पेंशन बंद हो जाएगी?" },
      a: {
        en: "This pension is for widows, so it usually stops on remarriage. Inform your pension office to avoid having to return money later.",
        hi: "यह पेंशन विधवाओं के लिए है, इसलिए दोबारा शादी पर आमतौर पर बंद हो जाती है। बाद में पैसा लौटाने से बचने के लिए पेंशन कार्यालय को बता दें।",
      },
    },
  ],

  officialUrl: "https://nsap.dord.gov.in/",
  sources: [
    "https://nsap.dord.gov.in/",
    "https://static.pib.gov.in/WriteReadData/specificdocs/documents/2025/nov/doc2025117686801.pdf",
    "https://www.pib.gov.in/PressReleasePage.aspx?PRID=2152593",
  ],
  lastVerified: "2026-10-06",
  launchedYear: 2009,
  status: "check-status",
};

export default scheme;
