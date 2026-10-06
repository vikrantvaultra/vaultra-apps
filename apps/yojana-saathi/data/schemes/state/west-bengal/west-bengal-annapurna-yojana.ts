import { all, ageBetween, female, labelled, notGovtEmployee, residentOf } from "@/lib/engine/build";
import type { Scheme } from "@/lib/types";

const scheme: Scheme = {
  slug: "west-bengal-annapurna-yojana",
  tier: "full",
  overlapGroup: "women-monthly",
  name: { en: "Annapurna Yojana (West Bengal)", hi: "अन्नपूर्णा योजना (पश्चिम बंगाल)" },
  aka: ["Annapurna Bhandar", "Annapurna Yojana", "Lakshmir Bhandar"],
  shortDescription: {
    en: "Women in West Bengal aged 25 to 60 get ₹3,000 every month straight into their Aadhaar-linked bank account. It replaced Lakshmir Bhandar in June 2026.",
    hi: "पश्चिम बंगाल में 25 से 60 साल की महिलाओं को हर महीने ₹3,000 सीधे उनके आधार से जुड़े बैंक खाते में मिलते हैं। जून 2026 से इसने लक्ष्मीर भंडार की जगह ली है।",
  },
  level: "state",
  state: "west-bengal",
  department: {
    en: "Department of Women & Child Development and Social Welfare, Government of West Bengal",
    hi: "महिला एवं बाल विकास और समाज कल्याण विभाग, पश्चिम बंगाल सरकार",
  },
  categories: ["women-child", "social-welfare"],
  tags: ["women", "monthly allowance", "annapurna", "lakshmir bhandar", "dbt", "west bengal"],
  benefitType: "cash",
  isDBT: true,
  value: { amount: 3000, period: "monthly", kind: "cash" },
  ageRange: { min: 25, max: 60 },
  kundliHouse: "women-family",
  eligibility: all(
    residentOf("west-bengal"),
    female(),
    ...ageBetween(25, 60),
    labelled(notGovtEmployee(), {
      en: "You are not a permanent government employee and don't draw a regular government salary or pension",
      hi: "आप स्थायी सरकारी कर्मचारी नहीं हैं और सरकार से नियमित वेतन या पेंशन नहीं लेतीं",
    }),
  ),

  details: {
    en: [
      "Annapurna Yojana is West Bengal's monthly cash support scheme for women. The new state government announced it in May 2026 and started payments from June 2026. It replaced the earlier Lakshmir Bhandar scheme.",
      "Every eligible woman gets ₹3,000 a month by Direct Benefit Transfer into her own Aadhaar-linked bank account. The 2026-27 state budget set aside ₹36,000 crore for it.",
      "Women who were getting Lakshmir Bhandar are being moved to Annapurna after a verification check, so most of them don't need to apply again. The scheme is run by the Department of Women & Child Development and Social Welfare.",
    ],
    hi: [
      "अन्नपूर्णा योजना पश्चिम बंगाल की महिलाओं के लिए हर महीने नकद मदद की योजना है। नई राज्य सरकार ने मई 2026 में इसकी घोषणा की और जून 2026 से भुगतान शुरू किया। इसने पुरानी लक्ष्मीर भंडार योजना की जगह ली है।",
      "हर पात्र महिला को हर महीने ₹3,000 DBT से उसके अपने आधार से जुड़े बैंक खाते में मिलते हैं। राज्य के 2026-27 के बजट में इसके लिए ₹36,000 करोड़ रखे गए हैं।",
      "जिन महिलाओं को लक्ष्मीर भंडार मिल रहा था, उन्हें जाँच के बाद अन्नपूर्णा में जोड़ा जा रहा है, इसलिए ज़्यादातर को दोबारा आवेदन नहीं करना पड़ता। यह योजना महिला एवं बाल विकास और समाज कल्याण विभाग चलाता है।",
    ],
  },
  benefits: {
    en: [
      "₹3,000 every month, paid into your own bank account.",
      "That adds up to ₹36,000 a year.",
      "The money is yours to spend as you choose.",
    ],
    hi: [
      "हर महीने ₹3,000, सीधे आपके अपने बैंक खाते में।",
      "साल भर में कुल ₹36,000।",
      "यह पैसा आप अपनी मर्ज़ी से ख़र्च कर सकती हैं।",
    ],
  },
  eligibilityText: {
    en: [
      "A woman who is a permanent resident of West Bengal and an Indian citizen.",
      "Aged 25 to 60 years.",
      "Not a permanent government employee, and not drawing a regular salary or pension from the government.",
      "Does not pay income tax.",
      "Has an Aadhaar-linked bank account in her own name.",
    ],
    hi: [
      "पश्चिम बंगाल की स्थायी निवासी महिला, जो भारतीय नागरिक हो।",
      "उम्र 25 से 60 साल।",
      "स्थायी सरकारी कर्मचारी न हो, और सरकार से नियमित वेतन या पेंशन न लेती हो।",
      "आयकर न देती हो।",
      "उसके अपने नाम पर आधार से जुड़ा बैंक खाता हो।",
    ],
  },
  exclusions: {
    en: [
      "Women below 25 or above 60 years.",
      "Permanent government employees, and women who get a regular salary or pension from the government.",
      "Women who pay income tax.",
      "Anyone who is not an Indian citizen.",
    ],
    hi: [
      "25 साल से कम या 60 साल से ज़्यादा उम्र की महिलाएँ।",
      "स्थायी सरकारी कर्मचारी, और वे महिलाएँ जिन्हें सरकार से नियमित वेतन या पेंशन मिलती है।",
      "आयकर देने वाली महिलाएँ।",
      "जो भारतीय नागरिक नहीं है।",
    ],
  },
  applicationProcess: {
    online: {
      en: [
        "Go to socialregistry.wb.gov.in, the state's Family Level Data Collection portal.",
        "Log in with your mobile number and OTP, fill in the Annapurna form and submit it.",
        "Use the same citizen login later to check your application status or raise a complaint.",
      ],
      hi: [
        "राज्य के फ़ैमिली लेवल डेटा कलेक्शन पोर्टल socialregistry.wb.gov.in पर जाएँ।",
        "मोबाइल नंबर और OTP से लॉग इन करें, अन्नपूर्णा का फ़ॉर्म भरें और जमा करें।",
        "बाद में इसी लॉग इन से अपने आवेदन की स्थिति देखें या शिकायत दर्ज करें।",
      ],
    },
    offline: {
      en: [
        "Collect the Annapurna Yojana form at your Block Development Office (BDO), Sub-Divisional Office (SDO), or ward office if you live in the Kolkata Municipal Corporation area.",
        "Fill it in and submit it there with copies of your voter ID and Aadhaar.",
        "Keep the receipt to track your application.",
      ],
      hi: [
        "अन्नपूर्णा योजना का फ़ॉर्म अपने ब्लॉक विकास कार्यालय (BDO), अनुमंडल कार्यालय (SDO), या कोलकाता नगर निगम क्षेत्र में हों तो वार्ड ऑफ़िस से लें।",
        "फ़ॉर्म भरकर वोटर ID और आधार की कॉपी के साथ वहीं जमा करें।",
        "आवेदन की स्थिति जानने के लिए रसीद संभाल कर रखें।",
      ],
    },
  },
  documents: {
    en: [
      "Voter ID card (EPIC)",
      "Aadhaar card",
      "An active mobile number",
      "Details of a bank account in your name, linked to Aadhaar",
    ],
    hi: [
      "वोटर ID कार्ड (EPIC)",
      "आधार कार्ड",
      "चालू मोबाइल नंबर",
      "आपके नाम के आधार से जुड़े बैंक खाते का ब्योरा",
    ],
  },
  faqs: [
    {
      q: { en: "I was getting Lakshmir Bhandar. Do I need to apply again?", hi: "मुझे लक्ष्मीर भंडार मिल रहा था। क्या मुझे दोबारा आवेदन करना होगा?" },
      a: {
        en: "Usually not. Lakshmir Bhandar beneficiaries are being moved to Annapurna after verification. If your payment has not started, check your status on socialregistry.wb.gov.in or ask at your BDO or ward office.",
        hi: "आमतौर पर नहीं। लक्ष्मीर भंडार की लाभार्थियों को जाँच के बाद अन्नपूर्णा में जोड़ा जा रहा है। अगर आपका पैसा शुरू नहीं हुआ है, तो socialregistry.wb.gov.in पर स्थिति देखें या BDO या वार्ड ऑफ़िस में पूछें।",
      },
    },
    {
      q: { en: "How much will I get?", hi: "मुझे कितना पैसा मिलेगा?" },
      a: {
        en: "₹3,000 a month for every eligible woman. Lakshmir Bhandar paid ₹1,500 (₹1,700 for SC/ST women), so the amount is higher now.",
        hi: "हर पात्र महिला को हर महीने ₹3,000। लक्ष्मीर भंडार में ₹1,500 (SC/ST महिलाओं को ₹1,700) मिलते थे, यानी अब राशि ज़्यादा है।",
      },
    },
    {
      q: { en: "I turned 60. What happens now?", hi: "मेरी उम्र 60 साल हो गई। अब क्या होगा?" },
      a: {
        en: "The scheme covers women up to 60. After that you can look at the state's old age pension schemes, such as the West Bengal old age pension, Taposili Bandhu (SC) or Jai Johar (ST).",
        hi: "यह योजना 60 साल तक की महिलाओं के लिए है। उसके बाद आप राज्य की बुज़ुर्ग पेंशन योजनाएँ देख सकती हैं, जैसे पश्चिम बंगाल वृद्धावस्था पेंशन, तपसिली बंधु (SC) या जय जोहार (ST)।",
      },
    },
  ],

  officialUrl: "https://wb.gov.in/government-schemes-details-annaapurna-yojana.aspx",
  sources: [
    "https://wb.gov.in/government-schemes-details-annaapurna-yojana.aspx",
    "https://finance.wb.gov.in/writereaddata/Budget_Speech/2026_English.pdf",
    "https://socialregistry.wb.gov.in/",
    "https://www.businesstoday.in/personal-finance/news/story/annapurna-bhandar-vs-lakshmir-bhandar-what-changes-for-women-beneficiaries-in-west-bengal-533003-2026-05-24",
  ],
  lastVerified: "2026-10-06",
  launchedYear: 2026,
  status: "active",
};

export default scheme;
