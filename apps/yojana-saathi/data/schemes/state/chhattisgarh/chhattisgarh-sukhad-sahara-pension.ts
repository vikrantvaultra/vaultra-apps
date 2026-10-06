import { all, female, labelled, residentOf, when } from "@/lib/engine/build";
import type { Scheme } from "@/lib/types";

const scheme: Scheme = {
  slug: "chhattisgarh-sukhad-sahara-pension",
  tier: "compact",
  overlapGroup: "widow-pension",
  name: { en: "Sukhad Sahara Pension Yojana (Chhattisgarh)", hi: "सुखद सहारा पेंशन योजना (छत्तीसगढ़)" },
  aka: ["Sukhad Sahara Yojana", "widow pension Chhattisgarh", "abandoned women pension CG"],
  shortDescription: {
    en: "A Chhattisgarh state pension for needy widows and abandoned women, paid every month into the bank account by the Social Welfare Department.",
    hi: "ज़रूरतमंद विधवा और परित्यक्ता महिलाओं के लिए छत्तीसगढ़ सरकार की पेंशन, जो समाज कल्याण विभाग हर महीने बैंक खाते में देता है।",
  },
  level: "state",
  state: "chhattisgarh",
  department: {
    en: "Social Welfare Department, Government of Chhattisgarh",
    hi: "समाज कल्याण विभाग, छत्तीसगढ़ सरकार",
  },
  categories: ["social-welfare", "women-child"],
  tags: ["widow pension", "abandoned women", "pension", "monthly", "dbt", "chhattisgarh"],
  benefitType: "pension",
  isDBT: true,
  kundliHouse: "women-family",
  eligibility: all(
    residentOf("chhattisgarh"),
    female(),
    labelled(when("marital", "in", ["widowed", "separated", "divorced"]), {
      en: "Widowed or abandoned",
      hi: "विधवा या परित्यक्ता हों",
    }),
  ),

  details: {
    en: [
      "Sukhad Sahara is one of the three pension schemes funded by the Chhattisgarh government (with the Social Security Pension and the Mukhyamantri Pension Yojana). It supports widows and abandoned women who have no steady income.",
      "The pension is paid monthly by DBT. State pension payments were up to date until March 2026. The exact monthly amount and age limits should be confirmed with the Social Welfare Department.",
    ],
    hi: [
      "सुखद सहारा छत्तीसगढ़ सरकार की अपनी तीन पेंशन योजनाओं में से एक है (बाक़ी दो: सामाजिक सुरक्षा पेंशन और मुख्यमंत्री पेंशन योजना)। यह उन विधवा और परित्यक्ता महिलाओं की मदद करती है जिनकी कोई पक्की आमदनी नहीं है।",
      "पेंशन हर महीने DBT से मिलती है। मार्च 2026 तक राज्य पेंशन का भुगतान पूरा हो चुका था। मासिक राशि और उम्र की सीमा समाज कल्याण विभाग से पक्की कर लें।",
    ],
  },
  benefits: {
    en: ["A monthly pension paid into your bank account.", "District social welfare offices report state pensions in the range of ₹500 to ₹650 a month."],
    hi: ["हर महीने बैंक खाते में पेंशन।", "ज़िला समाज कल्याण कार्यालयों के अनुसार राज्य की पेंशन ₹500 से ₹650 महीने के बीच है।"],
  },
  eligibilityText: {
    en: [
      "A widow or abandoned woman living in Chhattisgarh.",
      "From a needy family without a regular income.",
      "Not already getting the central widow pension (IGNWPS).",
    ],
    hi: [
      "छत्तीसगढ़ में रहने वाली विधवा या परित्यक्ता महिला।",
      "ऐसे ज़रूरतमंद परिवार से जिसकी नियमित आमदनी न हो।",
      "पहले से केंद्र की विधवा पेंशन (IGNWPS) न मिल रही हो।",
    ],
  },
  applicationProcess: {
    offline: {
      en: [
        "Apply at your gram panchayat or janpad panchayat (villages) or the pension branch of your urban body (towns).",
        "Attach Aadhaar, bank passbook, proof of residence and the husband's death certificate or proof of abandonment.",
        "After approval, the pension is paid monthly by DBT. Keep your bank account linked to Aadhaar and your mobile number.",
      ],
      hi: [
        "गाँव में ग्राम पंचायत या जनपद पंचायत में, और शहर में नगरीय निकाय की पेंशन शाखा में आवेदन करें।",
        "आधार, बैंक पासबुक, निवास प्रमाण और पति का मृत्यु प्रमाण पत्र या परित्यक्ता होने का प्रमाण लगाएँ।",
        "मंज़ूरी के बाद पेंशन हर महीने DBT से मिलती है। बैंक खाते को आधार और मोबाइल नंबर से जोड़कर रखें।",
      ],
    },
  },
  officialUrl: "https://dprcg.gov.in/post/1777459415/Social-Security-Pension-Schemes-have-become-a-strong-link-of-trust-a-major-step-towards-timely-payment-and-transparency",
  sources: [
    "https://dprcg.gov.in/post/1777459415/Social-Security-Pension-Schemes-have-become-a-strong-link-of-trust-a-major-step-towards-timely-payment-and-transparency",
    "https://dprcg.gov.in/post/1790084899/Raipur-A-Story-of-Service-%E2%80%93-Over-96-000-pensioners-in-the-district-are-receiving-monthly-pension-payments-totaling-more-than-%E2%82%B94-83-crore",
    "https://dprcg.gov.in/post/1762161496/%E0%A4%97%E0%A5%8C%E0%A4%B0%E0%A5%87%E0%A4%B2%E0%A4%BE-%E0%A4%AA%E0%A5%87%E0%A4%82%E0%A4%A1%E0%A5%8D%E0%A4%B0%E0%A4%BE-%E0%A4%AE%E0%A4%B0%E0%A4%B5%E0%A4%BE%E0%A4%B9%E0%A5%80-%E0%A4%B8%E0%A4%AE%E0%A4%BE%E0%A4%9C-%E0%A4%95%E0%A4%B2%E0%A5%8D%E0%A4%AF%E0%A4%BE%E0%A4%A3-%E0%A4%B5%E0%A4%BF%E0%A4%AD%E0%A4%BE%E0%A4%97-%E0%A4%95%E0%A5%80-%E0%A4%B5%E0%A4%BF%E0%A4%AD%E0%A4%BF%E0%A4%A8%E0%A5%8D%E0%A4%A8-%E0%A4%AA%E0%A5%87%E0%A4%82%E0%A4%B6%E0%A4%A8-%E0%A4%AF%E0%A5%8B%E0%A4%9C%E0%A4%A8%E0%A4%BE%E0%A4%93%E0%A4%82-%E0%A4%B8%E0%A5%87-%E0%A4%B9%E0%A4%B0-%E0%A4%AE%E0%A4%B9%E0%A5%80%E0%A4%A8%E0%A5%87-%E0%A4%B2%E0%A4%97%E0%A4%AD%E0%A4%97-34-%E0%A4%B9%E0%A4%9C%E0%A4%BE%E0%A4%B0-%E0%A4%B9%E0%A4%BF%E0%A4%A4%E0%A4%97%E0%A5%8D%E0%A4%B0%E0%A4%BE%E0%A4%B9%E0%A5%80-%E0%A4%B9%E0%A5%8B-%E0%A4%B0%E0%A4%B9%E0%A5%87-%E0%A4%B9%E0%A5%88%E0%A4%82-%E0%A4%B2%E0%A4%BE%E0%A4%AD%E0%A4%BE%E0%A4%A8%E0%A5%8D%E0%A4%B5%E0%A4%BF%E0%A4%A4",
  ],
  lastVerified: "2026-10-06",
  launchedYear: 2003,
  status: "check-status",
};

export default scheme;
