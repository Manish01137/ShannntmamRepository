export const bio = {
  name: "Dr. Shanta M. Sarvaiya (Samanta)",
  /** Her preferred public-facing name treatment: "Shanta Samanta" set large, "Sarvaiya" set small beneath it. */
  displayName: { primary: "Shanta Samanta", secondary: "Sarvaiya" },
  born: "1975, Haldia, West Bengal",
  role: "Assistant Professor, Faculty of Fine Arts, Sculpture Department, The M.S. University of Baroda",
  location: "Vadodara, India",

  originStory:
    "Grew up in a happy middle-class home in Haldia, West Bengal, drawn to art, nature, games and freedom from an early age. Made her first sculpture — a Durga — in second grade, with strong encouragement from her parents. Initially studied science before switching to art, later saying her science background actually helped her sculpture practice: bronze casting, metal casting and patination all demand real chemistry and technical precision.",

  education: [
    "BFA — Faculty of Fine Arts, The M.S. University of Baroda",
    "MFA (First Class), 2001 — same institution",
    "PhD in Sculpture — The M.S. University of Baroda",
    "Trained under Prof. Dhruv Mistry and Prof. Raghav Kaneria",
  ],

  medium:
    "Bronze — her preferred material for being timeless, durable, expressive, technically challenging, and for the beauty of its patina.",

  influencesInternational: [
    {
      name: "Pablo Picasso",
      why: "His remarkable versatility and innovative spirit — experimenting across mediums, even incorporating found objects.",
    },
    {
      name: "Henri Matisse",
      why: "His masterpiece Dance, capturing a moment of pure, unbridled freedom and joy as figures whirl around in space.",
    },
    {
      name: "Andy Scott",
      why: "Met him at his studio during a Commonwealth project in 2012 — his monumental, larger-than-life sculptures, often built single-handedly, left a lasting impression.",
    },
    {
      name: "Louise Bourgeois",
      why: "Her sculptures and installations reassert the female body as a subject of artistic exploration rather than mere objectification.",
    },
  ],
  influencesIndian: [
    {
      name: "Ramkinkar Baij",
      why: "The raw energy and dynamic movement captured in his sculptures.",
    },
    {
      name: "Prof. Raghav Kaneria",
      why: "Her Guru — his Bull sculpture exudes astonishing power and fluidity, profoundly lyrical and rooted in his rural background.",
    },
    {
      name: "Prof. Dhruva Mistry",
      why: "Her teacher during her Master's degree — his reclining figure sculpture and unwavering work ethic remain a lasting influence.",
    },
  ],

  inspirationSources:
    "Classical Indian art — temple sculpture, manuscripts, miniature paintings — especially after a study tour to Badami, Aihole, Pattadakal and Hampi. Also draws on Mahishasura Mardini imagery, Naari Shakti, and the theme of good vs. evil.",

  philosophy:
    "Almost all of her sculptures center on women — not simply as beautiful figures, but as symbols of sacrifice, resilience, nurturing, strength, struggle and transformation. Her work has evolved from sculptures of childhood innocence toward mature representations of womanhood and social realities: feminine identity, motherhood, mythology, nature, social hypocrisy, freedom, urban life, responsibility, spirituality.",

  onContemporaryArt:
    "Believes artists should engage with the issues of their time — war, environment, climate change, sustainability, mental health, technology, digital art, identity, gender, race, globalisation, freedom of expression, public art, and the accessibility of art. Views art as socially engaged, not merely decorative.",

  academicRole:
    "Assistant Professor in the Sculpture Department, Faculty of Fine Arts, The M.S. University of Baroda, since 2013 — following an earlier appointment as Temporary Lecturer there in 2002–03. Holds a PhD in Sculpture from the same institution. Researcher, PhD-scholar mentor, curriculum developer, and department leadership roles. Research themes: memory, transformation, materiality, the human body, collective memory, cultural narratives, everyday objects, participatory installations. Has organised and participated in numerous hands-on workshops — Terracotta, Raku, Dokra, glass and ceramics. Collaborated with the British Council on a research project, \"Ecology and its Sustenance,\" with Dumbarton Academy, Scotland.",

  scholarships: ["National Cultural Scholarship (2000–02)", "Lalit Kala Akademi Scholarship (2003–04)"],

  awards: [
    "AIFACS Award, New Delhi (1998)",
    "AIFACS Millennium All India Art Award, Ahmedabad (2000)",
    "Gujarat State Lalit Kala Akademi Awards (1999 & 2002)",
  ],

  contact: {
    phone: "9898445038",
    /** From her own CV. */
    email: "sarvaiya.shanta-sculpture@msubaroda.ac.in",
    website: "https://www.shantasamanta.com/",
    youtube: "https://youtu.be/K2k918_T14c",
    /** Real profile URL supplied directly by the artist. */
    academia: "https://msub.academia.edu/MsShantaSamanta",
    resumeUrl: "/shanta-samanta-cv.pdf",
  },

  quotes: [
    "Many of my Bronze creations are like a poetry of innocence of childhood and the wisdom and maturity of womanhood.",
    "I find there is a deep feminine connection between mother Earth (nature) and women, both vital for creation and nurturer of life and both are extremely exploited for their resources.",
  ],

  /** Verbatim quotes from the Art & Deal Magazine interview (Sept–Oct 2023) — see content/press.ts. */
  processQuotes: [
    "My scientific knowledge provided me with a deeper understanding of the chemical aspects involved in my art, especially the metal casting and patination process. It also influenced my ability to work with precision and maintain the necessary discipline to achieve accurate and consistent results.",
    "Achieving a beautiful patina on bronze is a challenging yet enjoyable task, as art is often filled with delightful surprises and happy accidents.",
    "I once obtained riverbank clay and created my first sculpture when I was in 2nd standard, which was a portrait of Goddess Durga. My parents were deeply impressed, and their admiration served as a great source of motivation for me.",
  ],
} as const;

export type Bio = typeof bio;
