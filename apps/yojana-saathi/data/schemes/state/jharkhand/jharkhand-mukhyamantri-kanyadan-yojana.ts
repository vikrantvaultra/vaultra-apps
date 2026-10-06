import { all, female, labelled, notGovtEmployee, notTaxPayer, residentOf } from "@/lib/engine/build";
import type { Scheme } from "@/lib/types";

const scheme: Scheme = {
  slug: "jharkhand-mukhyamantri-kanyadan-yojana",
  tier: "compact",
  overlapGroup: "marriage-assistance",
  name: { en: "Mukhyamantri Kanyadan Yojana (Jharkhand)", hi: "मुख्यमंत्री कन्यादान योजना (झारखंड)" },
  aka: ["Kanyadan Yojana Jharkhand", "Jharkhand marriage assistance"],
  shortDescription: {
    en: "Daughters of poor ration-card families in Jharkhand get a one-time marriage grant into their own bank account; the 2019 rules set it at ₹30,000.",
    hi: "झारखंड के ग़रीब राशन कार्ड वाले परिवारों की बेटियों को शादी पर एक बार की सहायता उनके अपने बैंक खाते में मिलती है; 2019 के नियमों में यह ₹30,000 तय है।",
  },
  level: "state",
  state: "jharkhand",
  department: {
    en: "Department of Women, Child Development and Social Security, Government of Jharkhand",
    hi: "महिला, बाल विकास एवं सामाजिक सुरक्षा विभाग, झारखंड सरकार",
  },
  categories: ["women-child", "social-welfare"],
  tags: ["marriage", "kanyadan", "daughter", "shaadi", "ration card", "jharkhand"],
  benefitType: "cash",
  isDBT: true,
  kundliHouse: "daughter",
  eligibility: all(
    residentOf("jharkhand"),
    female(),
    labelled(notTaxPayer(), { en: "No one in the family pays income tax", hi: "परिवार में कोई आयकर न देता हो" }),
    labelled(notGovtEmployee(), { en: "No one in the family is a government employee", hi: "परिवार में कोई सरकारी कर्मचारी न हो" }),
  ),

  details: {
    en: [
      "Mukhyamantri Kanyadan Yojana gives a one-time grant at the time of a daughter's marriage to poor families in Jharkhand. Its aims are to support women and end child marriage.",
      "Under the guidelines approved in 2019, a young woman from an Antyodaya (yellow), priority household (pink) or K-Oil (white) ration-card family gets ₹30,000 in her own savings account. The guidelines are still published on the state portal, but we could not confirm the current amount, so check with your Child Development Project Officer.",
    ],
    hi: [
      "मुख्यमंत्री कन्यादान योजना झारखंड के ग़रीब परिवारों को बेटी की शादी के समय एक बार की सहायता देती है। इसका मक़सद महिलाओं को सहारा देना और बाल विवाह रोकना है।",
      "2019 में मंज़ूर दिशा-निर्देशों के अनुसार अंत्योदय (पीला), प्राथमिकता वाला गृहस्थ (गुलाबी) या K-Oil (सफ़ेद) राशन कार्ड वाले परिवार की युवती को ₹30,000 उसके अपने बचत खाते में मिलते हैं। ये दिशा-निर्देश अब भी राज्य पोर्टल पर हैं, पर अभी की राशि की पुष्टि हम नहीं कर सके, इसलिए बाल विकास परियोजना पदाधिकारी से पता करें।",
    ],
  },
  benefits: {
    en: ["One-time marriage grant paid into the bride's own bank account (₹30,000 under the 2019 rules).", "Widow remarriage is also covered."],
    hi: ["शादी पर एक बार की सहायता, दुल्हन के अपने बैंक खाते में (2019 के नियमों में ₹30,000)।", "विधवा पुनर्विवाह भी शामिल है।"],
  },
  eligibilityText: {
    en: [
      "The bride's family holds a Jharkhand Antyodaya (yellow), priority household (pink) or K-Oil (white) ration card.",
      "The bride has an Aadhaar card, is on the Jharkhand voter list, and has a marriage registration certificate.",
      "Not a remarriage, except widow remarriage.",
      "Apply within one year of the marriage.",
      "The family must not meet any of the 14 exclusion criteria, such as owning a motor vehicle, paying income tax, having a government employee, or a member earning over ₹10,000 a month.",
    ],
    hi: [
      "दुल्हन के परिवार के पास झारखंड का अंत्योदय (पीला), प्राथमिकता वाला गृहस्थ (गुलाबी) या K-Oil (सफ़ेद) राशन कार्ड हो।",
      "दुल्हन का आधार कार्ड हो, नाम झारखंड की मतदाता सूची में हो, और विवाह पंजीकरण प्रमाण पत्र हो।",
      "पुनर्विवाह न हो, सिवाय विधवा पुनर्विवाह के।",
      "शादी के एक साल के अंदर आवेदन करें।",
      "परिवार 14 बहिष्कार शर्तों में से किसी में न आता हो, जैसे मोटर गाड़ी होना, आयकर देना, कोई सरकारी कर्मचारी होना, या किसी सदस्य की कमाई ₹10,000 महीने से ज़्यादा होना।",
    ],
  },
  applicationProcess: {
    offline: {
      en: [
        "Get the form from the Child Development Project Office (CDPO) of your block.",
        "Submit it with self-attested copies of your ration card, voter ID, marriage certificate, Aadhaar, bank passbook and a no-dowry declaration.",
        "After a field check by the Mahila Supervisor, the District Social Welfare Officer approves it and the money is sent to your bank account.",
      ],
      hi: [
        "अपने प्रखंड के बाल विकास परियोजना कार्यालय (CDPO) से फ़ॉर्म लें।",
        "राशन कार्ड, वोटर ID, विवाह प्रमाण पत्र, आधार, बैंक पासबुक की स्व-अभिप्रमाणित कॉपी और दहेज न देने का घोषणा पत्र लगाकर जमा करें।",
        "महिला पर्यवेक्षिका की जाँच के बाद ज़िला समाज कल्याण पदाधिकारी मंज़ूरी देते हैं और पैसा आपके बैंक खाते में भेजा जाता है।",
      ],
    },
  },

  officialUrl: "https://www.jharkhand.gov.in/PDepartment/ViewDoc?id=D031DO003SD00311072025113902531",
  sources: ["https://www.jharkhand.gov.in/PDepartment/ViewDoc?id=D031DO003SD00311072025113902531"],
  lastVerified: "2026-10-06",
  launchedYear: 2019,
  status: "check-status",
};

export default scheme;
