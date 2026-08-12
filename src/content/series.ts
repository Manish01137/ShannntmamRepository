export type SeriesSlug =
  | "kalpavruksha"
  | "shringar"
  | "whispers-of-innocence"
  | "object-study"
  | "sanjeevani"
  | "manuscript"
  | "shackled"
  | "freedom"
  | "conversation"
  | "living-tapestry"
  | "other-works";

export type Series = {
  slug: SeriesSlug;
  navLabel: string;
  title: string;
  statement?: string;
  curatorialNote?: string;
};

export const seriesList: Series[] = [
  {
    slug: "kalpavruksha",
    navLabel: "Kalpavruksha",
    title: "Kalpavruksha Series: Women as the Eternal Nurturers",
    statement:
      "My 'Kalpavruksha' series seamlessly melds the essence of femininity with the enduring symbolism of a tree, meticulously crafted in bronze. Witness the transformation of a woman's figure into a magnificent tree, adorned with branches, leaves, flowers, and harmonious birds. The symbolism draws a poignant parallel between women and the Kalpavruksha, the wish-fulfilling divine tree of Hindu mythology — women as givers of shelter, protection, sustenance, and love, much like the steadfast tree, serving as a visual commentary on women as eternal nurturers.",
  },
  {
    slug: "shringar",
    navLabel: "Shringar",
    title: "Shringar Series: A Celebration of Feminine Beauty and Grace",
    statement:
      "The 'Shringar Series' explores sensuous adult womanhood — slender, sensuous female figures in bronze with supple, elongated limbs capturing the graceful transition into adulthood. The women are shown in moments of self-adornment, celebrating feminine beauty and grace without objectification — each figure poised in a moment of unabashed abandon.",
    curatorialNote:
      "The female protagonist is gracefully clad, sensuous yet very bold and determined. She sits upright with folded legs, combing her hair with her fingers, or gazing at herself. She lures the onlooker with her beauty and sensuality, tapping her toes to a tune that lingers in her head. Her strength is conveyed through her postures and the confidence of her beauty.",
  },
  {
    slug: "whispers-of-innocence",
    navLabel: "Whispers of Innocence",
    title: "Whispers of Innocence",
    statement:
      "These bronze creations are akin to a poetic expression of the innocence found in childhood, seeking to recapture the joy and mystery of my happiest days. Infused with youthful innocence, passion and the vibrant zest for life, these works embody a delicate balance, harmony and dynamic movement. Each sculpture elicits anticipation and a realisation of the sublime beauty of nature, reminding viewers of lost innocence and the simple pleasures of childhood, through figures jumping, skipping, skating and riding — defying gravity.",
  },
  {
    slug: "object-study",
    navLabel: "Object Study",
    title: "An Object Study — Where the Subject Becomes an Object",
    statement:
      "This work looks so inconspicuous until you see the title — 'An Object Study, where the subject becomes an Object.' At first glance it captures a seated young girl engrossed in a 3-D object study, appearing innocent and ordinary. But instead of a traditional seat, she rests upon an Object Study stool — instantly transforming her into an object of study for the observer. This work delves into 'perception' and the 'male gaze,' inviting reflection on how the placement of a woman can alter perceptions within a male-dominated society — a women-centric exploration of societal and power dynamics.",
  },
  {
    slug: "sanjeevani",
    navLabel: "Sanjeevani",
    title: "Sanjeevani — An Endless Journey",
    statement:
      "A brilliant analogy drawn from the mythological story of Hanuman. A female figure is shown flying over a cityscape with a mountain in one hand and a mobile phone in the other — today's women in multitasking roles, rushing through each day to meet the demands of home, family and friends. Sometimes she faces life-saving, uphill situations too. The mountain represents the mountain of responsibilities; the mobile represents the modern tool that keeps her always 'available' and 'connected' to family, friends, colleagues and the world — multitasking as part of daily urban life today.",
  },
  {
    slug: "manuscript",
    navLabel: "Manuscript & Mythology",
    title: "Manuscript Series",
    statement:
      "A journey through the rich hymns of Shrushti (creation), sculpted in bronze and terracotta. These works evoke the remnants of once-opulent manuscripts, now torn and depleted, containing powerful hymns whispered in Bengali, Pali, Gujarati and some unknown letters, accompanied by illustrations of powerful goddesses — Durga, Kali, Amba Ma and Chandi — slaying demons. Inspired by a study tour to Badami, Aihole, Pattadakal and Hampi, and by sources like 'Saundarya Bahari' and miniature paintings. Infused with the spirit of Nari Shakti and the eternal struggle between good and evil, celebrating the victory of empowerment.",
  },
  {
    slug: "shackled",
    navLabel: "Shackled",
    title: "Shackled: Unveiling the Iron Chains of Modern Love",
    statement:
      "A profound exploration of the dynamics within contemporary relationships. A stunning, sensuously voluptuous woman, adorned with flowers in her hair, wears an invisible diamond necklace that metamorphoses into a barbed-wire necklace. The locket — cast from my own thumbprints on m-seal — replaces the once-ornate diamond pendant, transforming it into a symbol of confinement rather than decoration. This represents the shift from a gift of affection to a shackle that binds her to her husband: a woman reduced to a showpiece, a manifestation of her husband's wealth, authority and possessive pride rather than a true lover. 'Shackled' is a commentary on prevailing social hypocrisy and the plight of modern women entangled in a web of expectations — beyond her external beauty lies an inner yearning for freedom.",
  },
  {
    slug: "freedom",
    navLabel: "Freedom",
    title: "Freedom",
    statement:
      "A monumental public sculpture standing in stainless steel within the Harni Sculpture Park near Vadodara Airport. It unveils a mesmerizing interplay of reflections under the open sky, transforming with the changing sunlight throughout the day. At its heart stands a woman — a symbol of resilience and strength, embodying the robust nature of steel. With open hands she releases birds into the sky, each bird representing one of her dreams — a woman with unyielding willpower, fearlessly dreaming and pursuing those dreams. 'Freedom' encapsulates liberation, both figuratively and literally, an ode to the indomitable spirit of women who dare to dream, breaking free from constraints and societal expectation.",
  },
  {
    slug: "conversation",
    navLabel: "Conversation",
    title: "Conversation",
    statement:
      "Three seated figures, legs dangling off a ledge, in easy social conversation.",
  },
  {
    slug: "living-tapestry",
    navLabel: "Living Tapestry",
    title: "Living Tapestry",
    statement:
      "This artwork celebrates the interconnectedness of all life. Birds, flora, fauna, and even the crocodile are shown as vital threads in nature's fabric, reminding us to respect and protect the delicate balance of biodiversity.",
  },
  {
    slug: "other-works",
    navLabel: "Other Works",
    title: "Other Works",
  },
];

export const seriesBySlug = Object.fromEntries(seriesList.map((s) => [s.slug, s])) as Record<
  SeriesSlug,
  Series
>;
