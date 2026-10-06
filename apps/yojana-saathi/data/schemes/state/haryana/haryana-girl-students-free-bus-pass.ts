import { all, female, isTrue, residentOf } from "@/lib/engine/build";
import type { Scheme } from "@/lib/types";

const scheme: Scheme = {
  slug: "haryana-girl-students-free-bus-pass",
  tier: "compact",
  name: { en: "Free Bus Pass for Girl Students (Haryana Roadways)", hi: "छात्राओं के लिए मुफ़्त बस पास (हरियाणा रोडवेज़)" },
  aka: ["Haryana girls free bus pass", "Free travel girl students Haryana"],
  shortDescription: {
    en: "Girl students of schools, colleges and institutions in Haryana travel free in Haryana Roadways buses to their place of study, for distances up to 150 km.",
    hi: "हरियाणा के स्कूल, कॉलेज और संस्थानों की छात्राएँ अपनी पढ़ाई की जगह तक 150 किलोमीटर तक हरियाणा रोडवेज़ की बसों में मुफ़्त सफ़र करती हैं।",
  },
  level: "state",
  state: "haryana",
  department: { en: "Transport Department, Haryana (Haryana Roadways)", hi: "परिवहन विभाग, हरियाणा (हरियाणा रोडवेज़)" },
  categories: ["education", "women-child"],
  tags: ["free bus", "girl students", "bus pass", "travel", "haryana roadways"],
  benefitType: "in-kind",
  isDBT: false,
  kundliHouse: "education",
  eligibility: all(residentOf("haryana"), female(), isTrue("student")),

  details: {
    en: [
      "Haryana Roadways gives free student bus passes to girls studying in schools, colleges and institutions in Haryana. In July 2017 the distance limit was raised from 60 km to 150 km.",
      "The pass is issued by the Haryana Roadways depot on the basis of a certificate from the student's school or college. The 2026-27 budget also plans to raise the number of buses only for women and girl students from 273 to 500.",
    ],
    hi: [
      "हरियाणा रोडवेज़ हरियाणा के स्कूल, कॉलेज और संस्थानों में पढ़ने वाली छात्राओं को मुफ़्त स्टूडेंट बस पास देती है। जुलाई 2017 में दूरी की सीमा 60 किलोमीटर से बढ़ाकर 150 किलोमीटर की गई।",
      "पास हरियाणा रोडवेज़ डिपो से, स्कूल या कॉलेज के प्रमाण पत्र के आधार पर बनता है। 2026-27 के बजट में सिर्फ़ महिलाओं और छात्राओं वाली बसें 273 से बढ़ाकर 500 करने की भी योजना है।",
    ],
  },
  benefits: {
    en: ["Free travel between home and your school or college in Haryana Roadways buses, up to 150 km."],
    hi: ["हरियाणा रोडवेज़ की बसों में घर से स्कूल या कॉलेज तक 150 किलोमीटर तक मुफ़्त सफ़र।"],
  },
  eligibilityText: {
    en: [
      "A girl student enrolled in a school, college or institution in Haryana.",
      "The distance between home and the place of study is up to 150 km.",
    ],
    hi: ["हरियाणा के किसी स्कूल, कॉलेज या संस्थान में पढ़ने वाली छात्रा।", "घर से पढ़ाई की जगह तक दूरी 150 किलोमीटर तक हो।"],
  },
  applicationProcess: {
    offline: {
      en: [
        "Get the bus pass form attested by your school or college head.",
        "Submit it at the nearest Haryana Roadways depot with your ID card and photographs to get the free pass.",
      ],
      hi: [
        "बस पास का फ़ॉर्म अपने स्कूल या कॉलेज के प्रमुख से सत्यापित करवाएँ।",
        "मुफ़्त पास के लिए फ़ॉर्म को पहचान पत्र और फ़ोटो के साथ नज़दीकी हरियाणा रोडवेज़ डिपो में जमा करें।",
      ],
    },
  },

  officialUrl: "https://hartrans.gov.in/bus-pass/",
  sources: [
    "https://cdnbbsr.s3waas.gov.in/s314ea0d5b0cf49525d1866cb1e95ada5d/uploads/2022/08/2022080222.pdf",
    "https://hartrans.gov.in/free-concessional-travelling/",
    "https://cdnbbsr.s3waas.gov.in/s386e78499eeb33fb9cac16b7555b50767/uploads/2026/03/202603201031104005.pdf",
  ],
  lastVerified: "2026-10-06",
  launchedYear: 2013,
  status: "active",
};

export default scheme;
