import { all, labelled, incomeUpTo, minAge, residentOf } from "@/lib/engine/build";
import type { Scheme } from "@/lib/types";

const scheme: Scheme = {
  slug: "ntr-bharosa-old-age-pension",
  overlapGroup: "old-age-pension",
  name: { en: "NTR Bharosa Pension (Old Age)", hi: "NTR भरोसा पेंशन (वृद्धावस्था)" },
  aka: ["NTR Bharosa", "AP old age pension", "pension Andhra Pradesh", "YSR Pension Kanuka"],
  shortDescription: {
    en: "Poor elderly people in Andhra Pradesh aged 60 or more get a pension of ₹4,000 every month under the state's NTR Bharosa pension scheme.",
    hi: "आंध्र प्रदेश में 60 साल या उससे ज़्यादा उम्र के गरीब बुज़ुर्गों को NTR भरोसा योजना के तहत हर महीने ₹4,000 पेंशन मिलती है।",
  },
  level: "state",
  state: "andhra-pradesh",
  department: {
    en: "Panchayat Raj & Rural Development Department (SERP), Government of Andhra Pradesh",
    hi: "पंचायत राज एवं ग्रामीण विकास विभाग (SERP), आंध्र प्रदेश सरकार",
  },
  categories: ["pension-insurance", "social-welfare"],
  tags: ["old age pension", "senior citizen", "ntr bharosa", "pension", "4000", "andhra pradesh"],
  benefitType: "pension",
  isDBT: false,
  value: { amount: 4000, period: "monthly", kind: "pension" },
  ageRange: { min: 60 },
  kundliHouse: "senior",
  eligibility: all(
    residentOf("andhra-pradesh"),
    minAge(60),
    labelled(incomeUpTo(144_000), {
      en: "Family income up to ₹10,000 a month in villages or ₹12,000 a month in towns",
      hi: "परिवार की आय गाँव में ₹10,000 और शहर में ₹12,000 महीना तक हो",
    }),
  ),

  details: {
    en: [
      "NTR Bharosa is Andhra Pradesh's social security pension scheme. It took over from the earlier YSR Pension Kanuka in 2024, and the old age pension was raised to ₹4,000 a month from July 2024.",
      "The pension is run by the Panchayat Raj & Rural Development Department through SERP. Staff of the village or ward secretariat (now called Swarna Grama and Swarna Wardu) hand over the money at the pensioner's home at the start of each month.",
      "New applications are taken only when the government opens a window. The latest one ran from 7 to 16 September 2026.",
    ],
    hi: [
      "NTR भरोसा आंध्र प्रदेश की सामाजिक सुरक्षा पेंशन योजना है। 2024 में इसने पुरानी YSR पेंशन कानुका की जगह ली, और जुलाई 2024 से वृद्धावस्था पेंशन बढ़कर ₹4,000 महीना हो गई।",
      "यह पेंशन पंचायत राज एवं ग्रामीण विकास विभाग SERP के ज़रिए चलाता है। गाँव या वार्ड सचिवालय (अब स्वर्ण ग्राम और स्वर्ण वार्ड) के कर्मचारी हर महीने की शुरुआत में पैसा पेंशनभोगी के घर जाकर देते हैं।",
      "नए आवेदन तभी लिए जाते हैं जब सरकार इसके लिए समय खोलती है। पिछली बार यह 7 से 16 सितंबर 2026 तक खुला था।",
    ],
  },
  benefits: {
    en: [
      "₹4,000 every month.",
      "The money is usually handed over at your home by secretariat staff.",
      "That adds up to ₹48,000 a year.",
    ],
    hi: [
      "हर महीने ₹4,000।",
      "पैसा आम तौर पर सचिवालय के कर्मचारी आपके घर आकर देते हैं।",
      "साल भर में कुल ₹48,000।",
    ],
  },
  eligibilityText: {
    en: [
      "You live in Andhra Pradesh.",
      "You are 60 years old or more (Aadhaar is used as age proof).",
      "Your family income is up to ₹10,000 a month in a village or ₹12,000 a month in a town.",
      "Your family also meets the other common welfare checks (such as land, electricity use and property) that the secretariat verifies.",
    ],
    hi: [
      "आप आंध्र प्रदेश में रहते हैं।",
      "आपकी उम्र 60 साल या उससे ज़्यादा है (उम्र के सबूत के लिए आधार लिया जाता है)।",
      "आपके परिवार की आय गाँव में ₹10,000 और शहर में ₹12,000 महीना तक है।",
      "आपका परिवार बाकी सामान्य कल्याण शर्तें (जैसे ज़मीन, बिजली खपत और संपत्ति) भी पूरी करता है, जिनकी जाँच सचिवालय करता है।",
    ],
  },
  exclusions: {
    en: [
      "You already get another NTR Bharosa pension (one pension per person).",
      "Your family is above the income limit.",
      "Your family fails the common welfare checks on land, electricity use or property.",
    ],
    hi: [
      "आपको पहले से NTR भरोसा की कोई दूसरी पेंशन मिल रही है (एक व्यक्ति को एक ही पेंशन)।",
      "आपके परिवार की आय सीमा से ज़्यादा है।",
      "आपका परिवार ज़मीन, बिजली खपत या संपत्ति की सामान्य कल्याण शर्तें पूरी नहीं करता।",
    ],
  },
  applicationProcess: {
    offline: {
      en: [
        "When the government opens a new pension window, go to your Swarna Grama or Swarna Wardu (village or ward secretariat) office.",
        "Fill in the new pension form and give your Aadhaar and rice card or income certificate. The digital assistant registers it online and gives you an acknowledgement.",
        "Secretariat staff will visit your home to check your details and take your eKYC.",
        "The MPDO or Municipal Commissioner recommends eligible cases and SERP gives the final sanction. The pension starts from the month it is sanctioned.",
      ],
      hi: [
        "जब सरकार नई पेंशन के आवेदन खोले, अपने स्वर्ण ग्राम या स्वर्ण वार्ड (गाँव या वार्ड सचिवालय) दफ़्तर जाएँ।",
        "नई पेंशन का फ़ॉर्म भरें और आधार व राशन (राइस) कार्ड या आय प्रमाण पत्र दें। डिजिटल असिस्टेंट इसे ऑनलाइन दर्ज करके आपको पावती देगा।",
        "सचिवालय के कर्मचारी आपके घर आकर जानकारी जाँचेंगे और eKYC करेंगे।",
        "MPDO या नगर आयुक्त पात्र मामलों की सिफ़ारिश करते हैं और SERP अंतिम मंज़ूरी देता है। पेंशन मंज़ूरी वाले महीने से शुरू होती है।",
      ],
    },
  },
  documents: {
    en: ["Aadhaar card (also used as age proof)", "Rice card or income certificate", "Filled-in new pension application form"],
    hi: ["आधार कार्ड (उम्र का सबूत भी यही)", "राइस कार्ड या आय प्रमाण पत्र", "भरा हुआ नई पेंशन आवेदन फ़ॉर्म"],
  },
  faqs: [
    {
      q: { en: "Can I apply at any time?", hi: "क्या मैं कभी भी आवेदन कर सकता हूँ?" },
      a: {
        en: "No. New applications are accepted only during windows the government announces. The last one was 7 to 16 September 2026. Ask your secretariat about the next one.",
        hi: "नहीं। नए आवेदन सिर्फ़ सरकार की घोषित अवधि में लिए जाते हैं। पिछली बार यह 7 से 16 सितंबर 2026 तक थी। अगली बार के बारे में अपने सचिवालय से पूछें।",
      },
    },
    {
      q: { en: "Will I get arrears from the date I applied?", hi: "क्या आवेदन की तारीख़ से बकाया पैसा मिलेगा?" },
      a: {
        en: "No. The pension is paid from the month SERP sanctions it, not from the date you applied or became eligible.",
        hi: "नहीं। पेंशन उसी महीने से मिलती है जब SERP उसे मंज़ूर करता है, आवेदन या पात्र होने की तारीख़ से नहीं।",
      },
    },
  ],

  officialUrl: "https://sspensions.ap.gov.in/SSP",
  sources: [
    "https://sspensions.ap.gov.in/SSP",
    "https://sspensions.ap.gov.in/SSP/Downloads/Memo%20No.%203407491_New%20pension%20sanction%20guidelines_Signed.pdf",
    "https://www.deccanchronicle.com/amp/southern-states/andhra-pradesh/pensions-festival-expanded-new-opportunity-for-social-security-1985383",
    "https://www.outlookmoney.com/retirement/pension/ntr-bharosa-pension-scheme-what-is-it-eligibility-and-documents-required",
  ],
  lastVerified: "2026-10-06",
  launchedYear: 2024,
  status: "check-status",
};

export default scheme;
