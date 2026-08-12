export const bio = {
  name: "Dr. Shanta M. Sarvaiya (Samanta)",
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

  influencesInternational: ["Pablo Picasso", "Henri Matisse", "Andy Scott", "Louise Bourgeois"],
  influencesIndian: ["Ramkinkar Baij", "Raghav Kaneria", "Dhruva Mistry"],

  inspirationSources:
    "Classical Indian art — temple sculpture, manuscripts, miniature paintings — especially after a study tour to Badami, Aihole, Pattadakal and Hampi. Also draws on Mahishasura Mardini imagery, Naari Shakti, and the theme of good vs. evil.",

  philosophy:
    "Almost all of her sculptures center on women — not simply as beautiful figures, but as symbols of sacrifice, resilience, nurturing, strength, struggle and transformation. Her work has evolved from sculptures of childhood innocence toward mature representations of womanhood and social realities: feminine identity, motherhood, mythology, nature, social hypocrisy, freedom, urban life, responsibility, spirituality.",

  onContemporaryArt:
    "Believes artists should engage with the issues of their time — war, environment, climate change, sustainability, mental health, technology, digital art, identity, gender, race, globalisation, freedom of expression, public art, and the accessibility of art. Views art as socially engaged, not merely decorative.",

  academicRole:
    "Researcher, PhD-scholar mentor, curriculum developer, department leadership roles. Research themes: memory, transformation, materiality, the human body, collective memory, cultural narratives, everyday objects, participatory installations. Collaborated with the British Council on research; has published research papers.",

  scholarships: ["National Cultural Scholarship (2000–02)", "Lalit Kala Akademi Scholarship (2003–04)"],

  awards: [
    "AIFACS Award, New Delhi (1998)",
    "AIFACS Millennium All India Art Award, Ahmedabad (2000)",
    "Gujarat State Lalit Kala Akademi Awards (1999 & 2002)",
  ],

  contact: {
    phone: "9898445038",
    website: "https://www.shantasamanta.com/",
    youtube: "https://youtu.be/K2k918_T14c",
  },

  quotes: [
    "Many of my Bronze creations are like a poetry of innocence of childhood and the wisdom and maturity of womanhood.",
    "I find there is a deep feminine connection between mother Earth (nature) and women, both vital for creation and nurturer of life and both are extremely exploited for their resources.",
  ],
} as const;

export type Bio = typeof bio;
