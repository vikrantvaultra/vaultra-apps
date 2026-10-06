import { all, residentOf } from "@/lib/engine/build";
import type { Scheme } from "@/lib/types";

const scheme: Scheme = {
  slug: "gruha-jyothi",
  name: { en: "Gruha Jyothi", hi: "गृह ज्योति योजना" },
  aka: ["Gruha Jyoti", "Griha Jyothi", "free electricity Karnataka"],
  shortDescription: {
    en: "Free household electricity in Karnataka up to your usual monthly use plus a small buffer, as long as you stay within 200 units a month.",
    hi: "कर्नाटक में घर की बिजली मुफ़्त: आपकी औसत मासिक खपत और थोड़ी अतिरिक्त छूट तक, बशर्ते महीने में 200 यूनिट से ज़्यादा न हो।",
  },
  level: "state",
  state: "karnataka",
  department: { en: "Energy Department, Government of Karnataka", hi: "ऊर्जा विभाग, कर्नाटक सरकार" },
  categories: ["energy-savings", "social-welfare"],
  tags: ["free electricity", "electricity bill", "200 units", "guarantee scheme", "bescom", "power"],
  benefitType: "in-kind",
  isDBT: false,
  kundliHouse: "energy-savings",
  eligibility: all(residentOf("karnataka")),

  details: {
    en: [
      "Gruha Jyothi is one of Karnataka's five guarantee schemes. It waives the electricity bill of home connections, up to a limit worked out from each household's own past use.",
      "Your free limit is your average monthly consumption (based on 2022–23 use) plus a buffer. Since early 2024 the buffer is a flat 10 extra units, which helps homes that use little power. The total can never go above 200 units a month.",
      "If your use stays within your limit you get a zero bill. If you go over the limit you pay for the extra units; if you go over 200 units you pay the full bill. You register once on the Seva Sindhu portal by linking your electricity account to Aadhaar.",
    ],
    hi: [
      "गृह ज्योति कर्नाटक की पाँच गारंटी योजनाओं में से एक है। इसमें घरेलू बिजली कनेक्शन का बिल माफ़ होता है, एक सीमा तक जो हर घर की अपनी पिछली खपत से तय होती है।",
      "आपकी मुफ़्त सीमा = आपकी औसत मासिक खपत (2022–23 के आधार पर) + थोड़ी अतिरिक्त छूट। 2024 की शुरुआत से यह छूट सीधे 10 यूनिट है, जिससे कम बिजली इस्तेमाल करने वाले घरों को फ़ायदा होता है। कुल सीमा कभी भी 200 यूनिट प्रति माह से ज़्यादा नहीं होती।",
      "खपत सीमा के अंदर रही तो बिल शून्य आता है। सीमा से ज़्यादा हुई तो अतिरिक्त यूनिट का पैसा देना होता है; 200 यूनिट से ज़्यादा होने पर पूरा बिल भरना होता है। सेवा सिंधु पोर्टल पर बिजली खाते को आधार से जोड़कर एक बार पंजीकरण करना होता है।",
    ],
  },
  benefits: {
    en: [
      "Zero electricity bill when your monthly use stays within your eligible units.",
      "Eligible units = your average monthly use plus 10 extra units, capped at 200 units.",
      "If you use a little more than your limit, you pay only for the extra units, not the whole bill.",
    ],
    hi: [
      "महीने की खपत तय यूनिट के अंदर रहे तो बिजली बिल शून्य।",
      "तय यूनिट = आपकी औसत मासिक खपत + 10 अतिरिक्त यूनिट, अधिकतम 200 यूनिट।",
      "सीमा से थोड़ा ज़्यादा इस्तेमाल होने पर सिर्फ़ अतिरिक्त यूनिट का पैसा देना होता है, पूरा बिल नहीं।",
    ],
  },
  eligibilityText: {
    en: [
      "You have a domestic (household) electricity connection in Karnataka.",
      "Your electricity account (connection ID) is linked to your Aadhaar through the scheme registration.",
      "Your monthly use stays at or below 200 units.",
      "Only one connection in your name gets the benefit.",
    ],
    hi: [
      "कर्नाटक में आपका घरेलू बिजली कनेक्शन है।",
      "योजना में पंजीकरण के ज़रिए आपका बिजली खाता (कनेक्शन ID) आधार से जुड़ा है।",
      "आपकी मासिक खपत 200 यूनिट या उससे कम रहती है।",
      "आपके नाम के सिर्फ़ एक कनेक्शन पर लाभ मिलता है।",
    ],
  },
  exclusions: {
    en: [
      "Connections used for commercial purposes are not covered.",
      "In any month you use more than 200 units, you pay the full bill for that month.",
      "Unpaid electricity dues from before July 2023 had to be cleared; connections can be cut for unpaid dues.",
    ],
    hi: [
      "व्यावसायिक इस्तेमाल वाले कनेक्शन इसमें शामिल नहीं हैं।",
      "जिस महीने खपत 200 यूनिट से ज़्यादा हो, उस महीने पूरा बिल भरना होगा।",
      "जुलाई 2023 से पहले का बकाया बिल चुकाना ज़रूरी था; बकाया न चुकाने पर कनेक्शन कट सकता है।",
    ],
  },
  applicationProcess: {
    online: {
      en: [
        "Open the Karnataka guarantee schemes portal (sevasindhugs.karnataka.gov.in) and choose Gruha Jyothi.",
        "Enter your electricity account ID / connection ID from your bill and your Aadhaar number.",
        "Say whether you are the owner or tenant, verify with the OTP and submit. Your next bills will show the free units.",
      ],
      hi: [
        "कर्नाटक गारंटी योजना पोर्टल (sevasindhugs.karnataka.gov.in) खोलें और गृह ज्योति चुनें।",
        "बिल पर लिखा बिजली खाता ID / कनेक्शन ID और अपना आधार नंबर डालें।",
        "बताएँ कि आप मालिक हैं या किरायेदार, OTP से पुष्टि करें और जमा करें। अगले बिलों में मुफ़्त यूनिट दिखेंगी।",
      ],
    },
    offline: {
      en: [
        "Visit a Grama One, Karnataka One, Bangalore One centre or your electricity supply company (ESCOM) office.",
        "Take your latest electricity bill and Aadhaar; the operator registers you.",
      ],
      hi: [
        "ग्राम वन, कर्नाटक वन, बैंगलोर वन केंद्र या अपनी बिजली कंपनी (ESCOM) के दफ़्तर जाएँ।",
        "ताज़ा बिजली बिल और आधार साथ ले जाएँ; ऑपरेटर आपका पंजीकरण कर देगा।",
      ],
    },
  },
  documents: {
    en: ["Latest electricity bill (for the account / connection ID)", "Aadhaar card", "Mobile number linked to Aadhaar", "Rent agreement or address proof (for tenants)"],
    hi: ["ताज़ा बिजली बिल (खाता / कनेक्शन ID के लिए)", "आधार कार्ड", "आधार से जुड़ा मोबाइल नंबर", "किराया समझौता या पते का प्रमाण (किरायेदारों के लिए)"],
  },
  faqs: [
    {
      q: { en: "I am a tenant. Can I get free electricity?", hi: "मैं किरायेदार हूँ। क्या मुझे मुफ़्त बिजली मिलेगी?" },
      a: {
        en: "Yes. Tenants can register the connection they use with their own Aadhaar. When you move house, you can de-link your Aadhaar on the portal and link it to the new connection.",
        hi: "हाँ। किरायेदार जिस कनेक्शन का इस्तेमाल करते हैं, उसे अपने आधार से पंजीकृत कर सकते हैं। घर बदलने पर पोर्टल पर आधार डी-लिंक करके नए कनेक्शन से जोड़ सकते हैं।",
      },
    },
    {
      q: { en: "Why did I get a bill even though I registered?", hi: "पंजीकरण के बाद भी मुझे बिल क्यों आया?" },
      a: {
        en: "Your free limit is based on your own average use plus 10 units. If you used more than that in a month, you pay for the extra units. Above 200 units the whole bill is payable.",
        hi: "आपकी मुफ़्त सीमा आपकी औसत खपत + 10 यूनिट है। किसी महीने इससे ज़्यादा इस्तेमाल हुआ तो अतिरिक्त यूनिट का पैसा देना होता है। 200 यूनिट से ऊपर पूरा बिल देना होता है।",
      },
    },
  ],

  officialUrl: "https://sevasindhugs.karnataka.gov.in/",
  sources: [
    "https://sevasindhugs.karnataka.gov.in/",
    "https://sevasindhugs.karnataka.gov.in/PDF/Gruha_Jyothi_Kannada.pdf",
    "https://thesouthfirst.com/karnataka/karnataka-cabinet-tweaks-gruha-jyothi-scheme-scraps-10-norm-approves-10-additional-units-instead/",
  ],
  lastVerified: "2026-10-06",
  launchedYear: 2023,
  status: "active",
};

export default scheme;
