import { all, female, incomeUpTo, labelled, minAge, residentOf, when } from "@/lib/engine/build";
import type { Scheme } from "@/lib/types";

const scheme: Scheme = {
  slug: "rupashree-prakalpa",
  tier: "full",
  overlapGroup: "marriage-assistance",
  name: { en: "Rupashree Prakalpa", hi: "रूपश्री प्रकल्प" },
  aka: ["Rupashree", "Rupashree marriage grant"],
  shortDescription: {
    en: "A one-time grant of ₹25,000 for a woman in West Bengal aged 18 or more, for her first marriage, if her family earns up to ₹1.5 lakh a year.",
    hi: "पश्चिम बंगाल में 18 साल या उससे ज़्यादा उम्र की महिला को पहली शादी के लिए एक बार ₹25,000, अगर परिवार की सालाना आय ₹1.5 लाख तक है।",
  },
  level: "state",
  state: "west-bengal",
  department: {
    en: "Department of Women & Child Development and Social Welfare, Government of West Bengal",
    hi: "महिला एवं बाल विकास और समाज कल्याण विभाग, पश्चिम बंगाल सरकार",
  },
  categories: ["women-child", "social-welfare"],
  tags: ["marriage", "rupashree", "women", "one-time grant", "dbt", "west bengal"],
  benefitType: "cash",
  isDBT: true,
  value: { amount: 25000, period: "one-time", kind: "cash" },
  ageRange: { min: 18 },
  kundliHouse: "women-family",
  eligibility: all(
    residentOf("west-bengal"),
    female(),
    minAge(18),
    labelled(when("marital", "eq", "never-married"), {
      en: "You are unmarried and this will be your first marriage",
      hi: "आप अविवाहित हैं और यह आपकी पहली शादी होगी",
    }),
    incomeUpTo(150_000),
  ),

  details: {
    en: [
      "Rupashree Prakalpa helps families on low incomes with the cost of a daughter's wedding. The bride gets a one-time grant of ₹25,000 in her own bank account.",
      "It is only for a first marriage, and both the bride and groom must be of legal marriage age. You apply before the wedding, giving the proposed date, and officials check the details before the grant is sanctioned.",
      "The scheme is run by the Department of Women & Child Development and Social Welfare and continues under the new state government with a revised application form.",
    ],
    hi: [
      "रूपश्री प्रकल्प कम आय वाले परिवारों को बेटी की शादी के ख़र्च में मदद करता है। दुल्हन को उसके अपने बैंक खाते में एक बार ₹25,000 मिलते हैं।",
      "यह केवल पहली शादी के लिए है, और दूल्हा-दुल्हन दोनों की उम्र शादी की क़ानूनी उम्र से ज़्यादा होनी चाहिए। आवेदन शादी से पहले, प्रस्तावित तारीख़ बताकर किया जाता है, और अधिकारी जाँच के बाद राशि मंज़ूर करते हैं।",
      "यह योजना महिला एवं बाल विकास और समाज कल्याण विभाग चलाता है और नई राज्य सरकार में संशोधित आवेदन फ़ॉर्म के साथ जारी है।",
    ],
  },
  benefits: {
    en: [
      "A one-time grant of ₹25,000.",
      "Paid into the bride's own bank account.",
    ],
    hi: [
      "एक बार ₹25,000 की सहायता राशि।",
      "पैसा दुल्हन के अपने बैंक खाते में आता है।",
    ],
  },
  eligibilityText: {
    en: [
      "The bride is at least 18 years old.",
      "The groom is at least 21 years old.",
      "She is unmarried and this is her first marriage.",
      "Her family's income is not more than ₹1.5 lakh a year.",
      "She was born in West Bengal, or her parents are permanent residents, or she has lived in West Bengal for the last 5 years.",
      "She has an active bank account in her name alone that can receive ₹25,000 at once.",
    ],
    hi: [
      "दुल्हन की उम्र कम से कम 18 साल हो।",
      "दूल्हे की उम्र कम से कम 21 साल हो।",
      "वह अविवाहित हो और यह उसकी पहली शादी हो।",
      "परिवार की सालाना आय ₹1.5 लाख से ज़्यादा न हो।",
      "उसका जन्म पश्चिम बंगाल में हुआ हो, या माता-पिता यहाँ के स्थायी निवासी हों, या वह पिछले 5 साल से पश्चिम बंगाल में रह रही हो।",
      "उसके अकेले नाम पर चालू बैंक खाता हो, जिसमें एक साथ ₹25,000 आ सकें।",
    ],
  },
  exclusions: {
    en: [
      "Second or later marriages.",
      "Brides below 18 or grooms below 21.",
      "Families earning more than ₹1.5 lakh a year.",
      "Joint bank accounts (the account must be in the bride's name only).",
    ],
    hi: [
      "दूसरी या उसके बाद की शादी।",
      "18 साल से कम उम्र की दुल्हन या 21 साल से कम उम्र का दूल्हा।",
      "जिन परिवारों की सालाना आय ₹1.5 लाख से ज़्यादा है।",
      "संयुक्त बैंक खाता (खाता केवल दुल्हन के नाम पर होना चाहिए)।",
    ],
  },
  applicationProcess: {
    offline: {
      en: [
        "Get the Rupashree application form from your Block Development Office, municipality or municipal corporation office, or download it from rupashree.wb.gov.in.",
        "Fill it in English before the wedding, with the proposed wedding date and venue, and attach the documents listed below.",
        "Submit it at the same office. Officials will visit or call to verify the details before the grant is approved.",
      ],
      hi: [
        "रूपश्री का आवेदन फ़ॉर्म अपने ब्लॉक विकास कार्यालय, नगरपालिका या नगर निगम कार्यालय से लें, या rupashree.wb.gov.in से डाउनलोड करें।",
        "शादी से पहले फ़ॉर्म अंग्रेज़ी में भरें, प्रस्तावित शादी की तारीख़ और जगह लिखें, और नीचे दिए दस्तावेज़ लगाएँ।",
        "उसी कार्यालय में जमा करें। राशि मंज़ूर होने से पहले अधिकारी जाँच के लिए आएँगे या फ़ोन करेंगे।",
      ],
    },
    online: {
      en: [
        "Track your application on rupashree.wb.gov.in using 'Track Application'.",
      ],
      hi: [
        "rupashree.wb.gov.in पर 'Track Application' से अपने आवेदन की स्थिति देखें।",
      ],
    },
  },
  documents: {
    en: [
      "Age proof of the bride and the groom (birth certificate, voter ID, Aadhaar, PAN, school leaving certificate or Madhyamik admit card)",
      "Aadhaar number with consent for authentication",
      "Bank account page showing the bride's name, account number and bank details",
      "Proof of the proposed marriage (invitation card, marriage registration notice or self-declaration)",
      "Voter list details of the bride, or of a parent or sibling if her name is not on the roll",
      "Colour passport-size photos of the bride and the groom",
    ],
    hi: [
      "दुल्हन और दूल्हे की उम्र का सबूत (जन्म प्रमाण पत्र, वोटर ID, आधार, PAN, स्कूल छोड़ने का प्रमाण पत्र या माध्यमिक एडमिट कार्ड)",
      "आधार नंबर और उसके सत्यापन की सहमति",
      "बैंक खाते का वह पन्ना जिसमें दुल्हन का नाम, खाता नंबर और बैंक का ब्योरा हो",
      "प्रस्तावित शादी का सबूत (निमंत्रण पत्र, विवाह पंजीकरण नोटिस या स्व-घोषणा)",
      "दुल्हन का वोटर लिस्ट ब्योरा, या नाम न हो तो माता-पिता या भाई-बहन का",
      "दुल्हन और दूल्हे की रंगीन पासपोर्ट साइज़ फ़ोटो",
    ],
  },
  faqs: [
    {
      q: { en: "My name is not on the voter list yet. Can I still apply?", hi: "मेरा नाम अभी वोटर लिस्ट में नहीं है। क्या मैं आवेदन कर सकती हूँ?" },
      a: {
        en: "Yes. The form lets you give the voter details of your father, mother, brother or sister instead, or the acknowledgement number if you have just applied to be added to the roll.",
        hi: "हाँ। फ़ॉर्म में आप पिता, माता, भाई या बहन का वोटर ब्योरा दे सकती हैं, या अगर आपने अभी वोटर लिस्ट में नाम जुड़वाने का आवेदन किया है तो उसका पावती नंबर दे सकती हैं।",
      },
    },
    {
      q: { en: "Can the money go to my father's account?", hi: "क्या पैसा मेरे पिता के खाते में आ सकता है?" },
      a: {
        en: "No. The grant is paid only into an active account where the bride is the sole account holder.",
        hi: "नहीं। राशि केवल उसी चालू खाते में आती है जिसकी अकेली खाताधारक दुल्हन हो।",
      },
    },
    {
      q: { en: "Is there an age rule for the groom?", hi: "क्या दूल्हे की उम्र की भी शर्त है?" },
      a: {
        en: "Yes. The groom must be at least 21, and you must submit proof of his age with the form.",
        hi: "हाँ। दूल्हे की उम्र कम से कम 21 साल होनी चाहिए, और फ़ॉर्म के साथ उसकी उम्र का सबूत देना होता है।",
      },
    },
  ],

  officialUrl: "https://rupashree.wb.gov.in/",
  sources: [
    "https://rupashree.wb.gov.in/",
    "https://finance.wb.gov.in/writereaddata/Budget_Speech/2026_English.pdf",
  ],
  lastVerified: "2026-10-06",
  launchedYear: 2018,
  status: "active",
};

export default scheme;
