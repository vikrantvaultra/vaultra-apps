import type { Localized } from "@/lib/types";
import { CASH_UNTIL, PENSION_FROM } from "./compute";

/** Every assumption behind the Kundli numbers, shown in "How we calculated this" */
export const ASSUMPTIONS: Localized[] = [
  {
    en: "We replay each scheme's eligibility rules at every age from today to 80, using your answers. Your age comes from your year of birth.",
    hi: "हम आपके जवाबों के साथ हर योजना के पात्रता नियम आज से 80 साल की उम्र तक हर साल पर दोबारा जाँचते हैं। आपकी उम्र जन्म के वर्ष से निकाली जाती है।",
  },
  {
    en: `Lifetime cash benefits add up money paid to you from today until age ${CASH_UNTIL}: monthly amounts × 12 and yearly amounts for every year you qualify, and one-time amounts once.`,
    hi: `ज़िंदगी भर के नकद लाभ में आज से ${CASH_UNTIL} साल की उम्र तक मिलने वाला पैसा जुड़ता है: हर पात्र साल के लिए मासिक राशि × 12 और सालाना राशि, और एक बार मिलने वाली राशि सिर्फ़ एक बार।`,
  },
  {
    en: `Pensions are counted from age ${PENSION_FROM} to ${CASH_UNTIL}. For contributory pensions (like Atal Pension Yojana) we assume you join while you still can and use the smallest guaranteed pension.`,
    hi: `पेंशन ${PENSION_FROM} से ${CASH_UNTIL} साल तक गिनी जाती है। अंशदान वाली पेंशन (जैसे अटल पेंशन योजना) में हम मानते हैं कि आप समय रहते जुड़ जाएँगे, और सबसे कम गारंटीड पेंशन लेते हैं।`,
  },
  {
    en: "Where a benefit is a range, we use the lowest amount. Fixed-length benefits (like stipends) stop once their months are used up.",
    hi: "जहाँ लाभ एक सीमा में है, वहाँ हम सबसे कम राशि लेते हैं। तय समय वाले लाभ (जैसे स्टाइपेंड) उनके महीने पूरे होते ही रुक जाते हैं।",
  },
  {
    en: "Schemes you can't take together are not double-counted: each year we count only the largest one of a kind (one old-age pension, one scholarship, one state health scheme, and so on).",
    hi: "जो योजनाएँ एक साथ नहीं मिलतीं, उन्हें दो बार नहीं गिना जाता: हर साल हम एक तरह की सिर्फ़ सबसे बड़ी योजना गिनते हैं (एक वृद्धावस्था पेंशन, एक छात्रवृत्ति, एक राज्य स्वास्थ्य योजना, आदि)।",
  },
  {
    en: "Health and insurance cover, and loans, are shown separately and never added to the cash total. Loans have to be repaid.",
    hi: "स्वास्थ्य और बीमा कवर, और ऋण, अलग दिखाए जाते हैं और नकद कुल में कभी नहीं जुड़ते। ऋण चुकाना होता है।",
  },
  {
    en: "Studying is assumed to continue until 25 (or three more years if you're older). Pregnancy and having a daughter under 10 only count for this year.",
    hi: "पढ़ाई 25 साल तक (या उससे बड़े हों तो तीन और साल) चलती मानी गई है। गर्भावस्था और 10 साल से कम की बेटी सिर्फ़ इस साल के लिए गिनी जाती है।",
  },
  {
    en: "Everything else you told us (state, family income, category and so on) is assumed to stay the same. Amounts use today's rules, not inflation or future changes.",
    hi: "आपकी बाकी सारी जानकारी (राज्य, परिवार की आय, वर्ग आदि) वैसी ही मानी गई है। राशियाँ आज के नियमों पर हैं, महँगाई या भविष्य के बदलावों पर नहीं।",
  },
  {
    en: "Business and home schemes only count if you said you're planning a business or a house. Benefits triggered by hardship, like support after a breadwinner's death, are listed but never counted.",
    hi: "व्यवसाय और घर की योजनाएँ तभी गिनी जाती हैं जब आपने कहा हो कि आप व्यवसाय या घर की योजना बना रहे हैं। मुश्किल हालात में मिलने वाले लाभ, जैसे कमाने वाले की मृत्यु पर सहायता, दिखाए जाते हैं पर गिने नहीं जाते।",
  },
  {
    en: "If your income range sits right on a scheme's limit, or a condition can't be checked from your answers, we leave that scheme out. Some schemes (like PM-JAY) also depend on official beneficiary lists.",
    hi: "अगर आपकी आय की सीमा किसी योजना की सीमा पर ही पड़ती है, या कोई शर्त आपके जवाबों से जाँची नहीं जा सकती, तो हम वह योजना नहीं गिनते। कुछ योजनाएँ (जैसे PM-JAY) आधिकारिक लाभार्थी सूची पर भी निर्भर करती हैं।",
  },
  {
    en: "Your Saathi Score is the share of schemes you qualify for today that you've ticked as 'Already receiving'.",
    hi: "आपका साथी स्कोर बताता है कि आज आप जिन योजनाओं के पात्र हैं, उनमें से कितनी पर आपने 'पहले से मिल रहा है' चुना है।",
  },
];
