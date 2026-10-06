import { all, minAge } from "@/lib/engine/build";
import type { Scheme } from "@/lib/types";

const scheme: Scheme = {
  slug: "pm-jan-dhan-yojana",
  name: { en: "Pradhan Mantri Jan Dhan Yojana", hi: "प्रधानमंत्री जन धन योजना" },
  aka: ["PMJDY", "Jan Dhan account", "zero balance account"],
  shortDescription: {
    en: "Open a zero-balance bank account with a free RuPay debit card that carries ₹2 lakh accident insurance, plus an overdraft of up to ₹10,000.",
    hi: "बिना न्यूनतम बैलेंस वाला बैंक खाता खोलें, साथ में मुफ़्त RuPay डेबिट कार्ड जिस पर ₹2 लाख का दुर्घटना बीमा है, और ₹10,000 तक ओवरड्राफ़्ट।",
  },
  level: "central",
  ministry: "finance",
  categories: ["energy-savings"],
  tags: ["bank account", "zero balance", "jan dhan", "rupay card", "overdraft", "accident insurance"],
  benefitType: "composite",
  isDBT: false,
  value: { amount: 200000, period: "one-time", kind: "cover" },
  ageRange: { min: 10 },
  kundliHouse: "energy-savings",
  eligibility: all(minAge(10)),

  details: {
    en: [
      "Pradhan Mantri Jan Dhan Yojana makes sure every Indian can have a basic bank account. It is run by the Department of Financial Services, Ministry of Finance, through all banks and their business correspondents (bank mitras).",
      "A Jan Dhan account needs no minimum balance. You get a RuPay debit card, mobile banking, and the account can receive government benefits like PM-KISAN money, LPG subsidy and pensions directly.",
      "The RuPay card comes with free accident insurance, and after you use the account well, the bank can give you a small overdraft. The account is also the gateway to low-cost insurance and pension schemes such as PMJJBY, PMSBY and Atal Pension Yojana.",
    ],
    hi: [
      "प्रधानमंत्री जन धन योजना यह पक्का करती है कि हर भारतीय का एक बुनियादी बैंक खाता हो। वित्त मंत्रालय का वित्तीय सेवा विभाग इसे सभी बैंकों और उनके बैंक मित्रों के ज़रिए चलाता है।",
      "जन धन खाते में न्यूनतम बैलेंस की ज़रूरत नहीं। RuPay डेबिट कार्ड और मोबाइल बैंकिंग मिलती है, और PM-KISAN का पैसा, LPG सब्सिडी और पेंशन जैसे सरकारी लाभ सीधे इसी खाते में आ सकते हैं।",
      "RuPay कार्ड के साथ मुफ़्त दुर्घटना बीमा मिलता है, और खाता ठीक से चलाने पर बैंक छोटा ओवरड्राफ़्ट दे सकता है। यह खाता PMJJBY, PMSBY और अटल पेंशन योजना जैसी सस्ती बीमा और पेंशन योजनाओं से जुड़ने का रास्ता भी है।",
    ],
  },
  benefits: {
    en: [
      "Zero-balance savings account with interest on deposits.",
      "Free RuPay debit card.",
      "Accident insurance of ₹2 lakh on the RuPay card for accounts opened after 28 August 2018 (₹1 lakh for older accounts), with no premium.",
      "Overdraft of up to ₹10,000 for eligible account holders aged 18–65 (up to ₹2,000 without conditions).",
      "Direct receipt of government benefits (DBT) into the account.",
    ],
    hi: [
      "बिना न्यूनतम बैलेंस वाला बचत खाता, जमा पर ब्याज के साथ।",
      "मुफ़्त RuPay डेबिट कार्ड।",
      "28 अगस्त 2018 के बाद खुले खातों के RuPay कार्ड पर ₹2 लाख का दुर्घटना बीमा (पुराने खातों पर ₹1 लाख), बिना प्रीमियम।",
      "18–65 साल के पात्र खाताधारकों को ₹10,000 तक ओवरड्राफ़्ट (₹2,000 तक बिना किसी शर्त के)।",
      "सरकारी लाभ (DBT) सीधे खाते में।",
    ],
  },
  eligibilityText: {
    en: [
      "Any Indian citizen aged 10 or above (minors aged 10+ can open an account, usually operated with a guardian).",
      "Valid KYC document, preferably Aadhaar. If you have no documents, a 'small account' can be opened on self-attested photo and signature.",
    ],
    hi: [
      "10 साल या उससे अधिक उम्र का कोई भी भारतीय नागरिक (10 साल से ऊपर के नाबालिग भी खाता खोल सकते हैं, आमतौर पर अभिभावक के साथ)।",
      "मान्य KYC दस्तावेज़, बेहतर है आधार। कोई दस्तावेज़ न हो तो स्व-सत्यापित फ़ोटो और हस्ताक्षर पर 'छोटा खाता' खुल सकता है।",
    ],
  },
  exclusions: {
    en: [
      "The accident insurance is paid only if the RuPay card was used at least once in the 90 days before the accident.",
      "Only one overdraft per household, preferably to the woman of the house.",
      "A 'small account' has limits on balance and transactions until full KYC is done.",
    ],
    hi: [
      "दुर्घटना बीमा तभी मिलता है जब दुर्घटना से पहले के 90 दिनों में RuPay कार्ड कम से कम एक बार इस्तेमाल हुआ हो।",
      "एक परिवार में सिर्फ़ एक ओवरड्राफ़्ट, बेहतर है घर की महिला को।",
      "पूरा KYC होने तक 'छोटे खाते' में बैलेंस और लेनदेन की सीमा रहती है।",
    ],
  },
  applicationProcess: {
    offline: {
      en: [
        "Visit any bank branch or a Bank Mitra (business correspondent) in your area.",
        "Fill in the Jan Dhan account opening form and give your Aadhaar or other KYC document.",
        "Collect your passbook and RuPay card. Use the card regularly to keep the insurance active.",
      ],
      hi: [
        "अपने इलाके की किसी भी बैंक शाखा या बैंक मित्र के पास जाएँ।",
        "जन धन खाता खोलने का फ़ॉर्म भरें और आधार या दूसरा KYC दस्तावेज़ दें।",
        "पासबुक और RuPay कार्ड लें। बीमा चालू रखने के लिए कार्ड नियमित इस्तेमाल करें।",
      ],
    },
  },
  documents: {
    en: ["Aadhaar card (preferred)", "Or another officially valid document: voter ID, PAN, passport, driving licence or NREGA job card", "Passport-size photo"],
    hi: ["आधार कार्ड (प्राथमिकता)", "या कोई अन्य मान्य दस्तावेज़: वोटर ID, पैन, पासपोर्ट, ड्राइविंग लाइसेंस या नरेगा जॉब कार्ड", "पासपोर्ट साइज़ फ़ोटो"],
  },
  faqs: [
    {
      q: { en: "Is there any charge for opening the account?", hi: "क्या खाता खोलने का कोई शुल्क है?" },
      a: {
        en: "No. Opening a Jan Dhan account is free and you don't need to keep any minimum balance.",
        hi: "नहीं। जन धन खाता खोलना मुफ़्त है और कोई न्यूनतम बैलेंस नहीं रखना पड़ता।",
      },
    },
    {
      q: { en: "My Jan Dhan account has become inactive. What should I do?", hi: "मेरा जन धन खाता बंद (निष्क्रिय) हो गया है। क्या करूँ?" },
      a: {
        en: "Visit your bank branch or Bank Mitra and complete re-KYC with your Aadhaar. Then make a transaction to reactivate the account.",
        hi: "अपनी बैंक शाखा या बैंक मित्र के पास जाकर आधार से दोबारा KYC कराएँ। फिर एक लेनदेन करके खाता फिर से चालू करें।",
      },
    },
  ],

  officialUrl: "https://pmjdy.gov.in/",
  sources: [
    "https://pmjdy.gov.in/",
    "https://sbi.bank.in/web/faq-s/faq-pradhan-mantri-jan-dhan-yojana-pmjdy",
    "https://static.pib.gov.in/WriteReadData/specificdocs/documents/2026/aug/doc_9716_20260827_14055201.pdf",
  ],
  lastVerified: "2026-10-06",
  launchedYear: 2014,
  status: "active",
};

export default scheme;
