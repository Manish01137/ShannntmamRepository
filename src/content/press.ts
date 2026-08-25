export type PressItem = {
  slug: string;
  title: string;
  publication: string;
  issue: string;
  author?: string;
  type: string;
  summary: string;
  fileUrl: string | null;
  /** Real verbatim quotes only — never fabricated. */
  pullQuotes: string[];
  featured?: boolean;
};

export const pressItems: PressItem[] = [
  {
    slug: "art-and-deal-2023",
    title: "Enchanting Pathways — A Conversation with Shanta Samanta",
    publication: "Art & Deal Magazine",
    issue: "September–October 2023",
    author: "Sumati Gangopadhyay",
    type: "5-page cover interview — editorial introduction + Q&A",
    summary:
      "Profiles her as one of India's important contemporary bronze sculptors, exploring feminine identity, womanhood, childhood memory, motherhood, mythology, nature, social hypocrisy, freedom, urban life and spirituality — and walks through her major series (Shringar, Kalpavruksha, Mahishasura Mardini, Manuscript, Sanjeevani, Shackled, Freedom) plus her biography, education, influences and views on contemporary art.",
    fileUrl: "/press/art-and-deal.pdf",
    pullQuotes: [
      "My scientific knowledge provided me with a deeper understanding of the chemical aspects involved in my art, especially the metal casting and patination process.",
      "Achieving a beautiful patina on bronze is a challenging yet enjoyable task, as art is often filled with delightful surprises and happy accidents.",
      "It was from these carefree days that I drew inspiration for my series titled 'Faded Memories' — a delicate balance, harmony and a tremendous sense of movement.",
    ],
    featured: true,
  },
  {
    slug: "art-and-deal-2015",
    title: "Shanta's Treasure Trove",
    publication: "Art & Deal Magazine",
    issue: "April–May 2015 (Issue 79–80)",
    author: "Sumati Gangopadhyay",
    type: "Interview",
    summary:
      "An earlier interview by the same Art & Deal critic, tracing her journey through childhood in Haldia, her training under Chhatpat Sir, Raghav Kaneria and Dhruva Mistry, her visit to sculptor Andy Scott's studio in Glasgow, and her love of bronze — published while she was acting head of the Sculpture Department at the Faculty of Fine Arts, MSU Baroda.",
    fileUrl: "/press/art-and-deal-2015.pdf",
    pullQuotes: [
      "I love bronze for its aesthetic beauty. There is a timeless quality about it and its sheen is attractive. But I plan to work with other media as well.",
      "Sculpture demands very hard work, and the knowledge of many mediums and handling of various tools is a must. I believe over dependence on readymade work and labour-saving devices may ultimately affect the artistic quality of the completed work of art.",
    ],
  },
  {
    slug: "feelings-magazine-2026",
    title: "આધુનિક સ્ત્રીનું શિલ્પરૂપ — શાંતા સર્વૈયાની કલા (The Modern Woman in Sculptural Form — The Art of Shanta Sarvaiya)",
    publication: "Feelings Magazine (Gujarati, Global Edition)",
    issue: "April 2026",
    author: "Sumati Gangopadhyay",
    type: "2-page feature, in Gujarati",
    summary:
      "A Gujarati-language profile covering her childhood in Haldia, training at the Faculty of Fine Arts, MSU Baroda, and major series including Shringar, Sanjeevani, Conversation and Kalpavruksha, alongside her awards and academic career. Published in Feelings, an international Gujarati family magazine.",
    fileUrl: "/press/feelings-magazine-2026.pdf",
    pullQuotes: [],
  },
  // Add future press mentions here as additional objects with the same shape.
];

export const press = {
  featured: pressItems.find((p) => p.featured) ?? pressItems[0],
};

export type NewspaperClipping = {
  slug: string;
  publication: string;
  date: string;
  headline: string;
  image: { src: string; width: number; height: number };
};

/**
 * Real newspaper/magazine clippings supplied by the artist (scanned from her personal
 * archive). Headlines and dates are taken directly from the scans — nothing invented.
 */
export const newspaperClippings: NewspaperClipping[] = [
  {
    slug: "india-today-2001",
    publication: "India Today (Simply Gujarati)",
    date: "January 2001",
    headline: "Hop, Skip and Jump! The 'happening' sculptures of Shanta Samant",
    image: { src: "/press/newspaper/india-today-2001-01.webp", width: 1400, height: 1980 },
  },
  {
    slug: "asian-age-2002",
    publication: "The Asian Age",
    date: "12 February 2002",
    headline: "Revisiting childhood through bronze sculpture",
    image: { src: "/press/newspaper/asian-age-2002.webp", width: 1400, height: 1980 },
  },
  {
    slug: "baroda-times-2003",
    publication: "Baroda Times of India",
    date: "2003",
    headline: "An artistic touch to life",
    image: { src: "/press/newspaper/baroda-times-2003.webp", width: 1400, height: 1980 },
  },
  {
    slug: "times-of-india-2002",
    publication: "The Times of India (City Guide)",
    date: "7–13 February 2002",
    headline: "Sculpting the joys of life",
    image: { src: "/press/newspaper/times-of-india-2002.webp", width: 1400, height: 991 },
  },
  {
    slug: "bombay-times-2005",
    publication: "Bombay Times, The Times of India",
    date: "2 June 2005",
    headline: "All for a Pretty Picture — Cymroza Art Gallery show",
    image: { src: "/press/newspaper/bombay-times-2005.webp", width: 1400, height: 1980 },
  },
  {
    slug: "verve-2005",
    publication: "Verve Magazine",
    date: "July–August 2005, Vol. 13, Issue 4",
    headline: "Verve Listing — Cymroza Art Gallery",
    image: { src: "/press/newspaper/verve-2005.webp", width: 1400, height: 1980 },
  },
  {
    slug: "baroda-times-2001",
    publication: "Baroda Times of India / Aapla Mahanagar",
    date: "30 November 2001",
    headline: "Memories of Carefree Childhood",
    image: { src: "/press/newspaper/baroda-times-2001-11.webp", width: 1400, height: 1980 },
  },
  {
    slug: "adc-2001",
    publication: "Afternoon Despatch & Courier",
    date: "26 November 2001",
    headline: "Sculpture Exhibition — \"Through the Banks of the Sublime\"",
    image: { src: "/press/newspaper/adc-2001-11-26.webp", width: 1400, height: 1980 },
  },
  {
    slug: "adc-2003-11-17",
    publication: "Afternoon Despatch & Courier",
    date: "17 November 2003",
    headline: "World of Art — Sculpture show at Bajaj",
    image: { src: "/press/newspaper/adc-2003-11-17.webp", width: 1400, height: 1980 },
  },
  {
    slug: "adc-2003-11-22",
    publication: "Afternoon Despatch & Courier",
    date: "22 November 2003",
    headline: "Exhibition listing — Kamalnayan Bajaj Art Gallery",
    image: { src: "/press/newspaper/adc-2003-11-22.webp", width: 1400, height: 1980 },
  },
  {
    slug: "mid-day-2003",
    publication: "Mid Day / The Times of India",
    date: "19–20 November 2003",
    headline: "Exhibition listing — Manoj Sarvaiya and Shanta Samant",
    image: { src: "/press/newspaper/midday-2003-11.webp", width: 1400, height: 1980 },
  },
  {
    slug: "indian-express-2003",
    publication: "The Indian Express (Mumbai Newsline)",
    date: "21 November 2003",
    headline: "Today in Mumbai — Kamalnayan Bajaj Art Gallery",
    image: { src: "/press/newspaper/indian-express-2003-11.webp", width: 1400, height: 991 },
  },
];
