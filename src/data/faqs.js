export const generalFaqs = [
  {
    id: 1,
    question: "What are the clinic operating hours?",
    answer: "We are open 7 days a week. Monday to Saturday: 9:00 AM to 11:00 PM. Sunday: Closed for regular appointments but emergency services available."
  },
  {
    id: 2,
    question: "Do you offer emergency dental services?",
    answer: "Yes, we provide 24/7 emergency dental services. Call +8801973703423 for immediate assistance."
  },
  {
    id: 3,
    question: "What payment methods do you accept?",
    answer: "We accept cash, bKash, Nagad, Rocket, and all major credit/debit cards for your convenience."
  },
  {
    id: 4,
    question: "Do you have parking facilities?",
    answer: "Yes, we have dedicated parking space for our patients at Savar Stand location."
  },
  {
    id: 5,
    question: "Are your dentists registered with BMDC?",
    answer: "Yes, all our dentists are fully registered with Bangladesh Medical and Dental Council (BMDC) with valid license numbers."
  },
  {
    id: 6,
    question: "Do you provide dental insurance coverage?",
    answer: "We work with most major dental insurance providers. Please contact us with your insurance details for verification."
  },
  {
    id: 7,
    question: "Can I book an appointment online?",
    answer: "Yes, you can book appointments through our online form or call +8801973703423. WhatsApp is also available for quick inquiries."
  },
  {
    id: 8,
    question: "Do you treat children?",
    answer: "Yes, we have specialized pediatric dental services with trained pediatric dentists for children's dental care."
  },
  {
    id: 9,
    question: "Is the clinic hygienic and sterilized?",
    answer: "Absolutely! We follow strict international hygiene and sterilization protocols. All instruments are sterilized in an autoclave."
  },
  {
    id: 10,
    question: "What should I do if I have dental anxiety?",
    answer: "Our compassionate team is experienced in handling dental anxiety. Let us know, and we'll take extra care to make you comfortable."
  }
];

export const rootCanalFaqs = [
  {
    id: 1,
    question: "Is root canal treatment painful?",
    answer: "Modern root canal treatment is relatively painless. We use local anesthesia and advanced techniques to ensure comfort. Most patients report it's no more uncomfortable than having a filling done."
  },
  {
    id: 2,
    question: "How long does a root canal treatment take?",
    answer: "Typically, a root canal treatment takes 1.5 to 2.5 hours depending on tooth complexity. Some cases may require multiple visits."
  },
  {
    id: 3,
    question: "What symptoms indicate I need a root canal?",
    answer: "Severe toothache pain, sensitivity to hot/cold, darkening or discoloration of the tooth, and prolonged pain are common signs."
  },
  {
    id: 4,
    question: "What is the success rate of root canal treatment?",
    answer: "Modern root canal therapy has a success rate of 95-98% when properly performed by experienced endodontists."
  },
  {
    id: 5,
    question: "Can I eat normally after root canal treatment?",
    answer: "We recommend soft foods for a few days. You can resume normal eating once the tooth is restored with a crown."
  }
];

export const teethWhiteningFaqs = [
  {
    id: 1,
    question: "How long do teeth whitening results last?",
    answer: "Professional whitening results typically last 6-12 months depending on your diet and lifestyle habits."
  },
  {
    id: 2,
    question: "Is teeth whitening safe?",
    answer: "Yes, professional teeth whitening performed by dentists is safe and effective. We use professional-grade bleaching agents."
  },
  {
    id: 3,
    question: "Can I whiten my teeth if I have fillings?",
    answer: "Whitening only affects natural tooth structure. Existing fillings won't whiten, so they may need replacement to match."
  },
  {
    id: 4,
    question: "How many shades can my teeth get whiter?",
    answer: "Professional whitening can lighten teeth by 2-8 shades depending on the starting color and treatment method."
  },
  {
    id: 5,
    question: "Are there any side effects to teeth whitening?",
    answer: "Some patients experience temporary tooth sensitivity or gum irritation, which typically subsides within a few days."
  }
];

export const dentureFaqs = [
  {
    id: 1,
    question: "How long do dentures last?",
    answer: "With proper care, dentures typically last 5-8 years. Regular adjustments and relining may be needed as your jaw structure changes."
  },
  {
    id: 2,
    question: "How do I care for my dentures?",
    answer: "Remove dentures daily, clean them with a brush and denture cleaner, soak overnight in water or denture solution, and always handle carefully."
  },
  {
    id: 3,
    question: "Will dentures affect my speech?",
    answer: "Initially, you may notice slight speech changes. This is temporary and improves with practice as you adapt to the dentures."
  },
  {
    id: 4,
    question: "Can I sleep with dentures on?",
    answer: "It's best to remove dentures at night to give your gums rest and allow dentures to air dry for better hygiene."
  },
  {
    id: 5,
    question: "How often do dentures need adjustment?",
    answer: "Initial adjustments are common in the first few weeks. After that, annual check-ups are recommended for optimal fit."
  }
];

export const orthodonticseFaqs = [
  {
    id: 1,
    question: "What is the average duration of braces treatment?",
    answer: "Most braces treatment takes 18-24 months, though duration varies based on the complexity of misalignment."
  },
  {
    id: 2,
    question: "Do braces hurt?",
    answer: "There may be discomfort for a few days after initial placement and adjustments, but it's not typically painful. Pain relief can be managed with over-the-counter medication."
  },
  {
    id: 3,
    question: "What foods should I avoid with braces?",
    answer: "Avoid hard, sticky, crunchy, and chewy foods like nuts, caramel, popcorn, and whole fruits. Cut harder foods into smaller pieces."
  },
  {
    id: 4,
    question: "Are invisible aligners as effective as braces?",
    answer: "Invisible aligners are very effective for most cases of mild to moderate misalignment. Severe cases may still require traditional braces."
  },
  {
    id: 5,
    question: "How important is wearing a retainer after braces?",
    answer: "Wearing a retainer is crucial to maintain results. We typically recommend wearing it consistently for at least 6-12 months after braces are removed."
  }
];

export const getFaqsByService = (serviceSlug) => {
  const faqMap = {
    'root-canal-treatment': rootCanalFaqs,
    'root-canal-endodontics': rootCanalFaqs,
    'teeth-whitening': teethWhiteningFaqs,
    'in-office-whitening': teethWhiteningFaqs,
    'take-home-whitening': teethWhiteningFaqs,
    'whitening-touch-ups': teethWhiteningFaqs,
    'complete-dentures': dentureFaqs,
    'partial-dentures': dentureFaqs,
    'denture-repair-adjustment': dentureFaqs,
    'denture-relines': dentureFaqs,
    'braces-treatment': orthodonticseFaqs,
    'invisible-aligners': orthodonticseFaqs,
    'teeth-retainers': orthodonticseFaqs
  };
  
  return faqMap[serviceSlug] || generalFaqs;
};
