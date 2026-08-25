import type { SeriesSlug } from "./series";

export type PieceImage = {
  src: string;
  width: number;
  height: number;
  alt: string;
};

export type Piece = {
  slug: string;
  title: string;
  series: SeriesSlug;
  medium?: string;
  size?: string;
  note?: string;
  images: PieceImage[];
  /** No photograph exists yet — render the on-brand placeholder. */
  comingSoon?: boolean;
  /** A real, confirmed piece with no title/statement documented anywhere in the source brief — plain caption only, no invented backstory. */
  unlisted?: boolean;
};

export const pieces: Piece[] = [
  // ---------- Kalpavruksha ----------
  {
    slug: "kalpavruksha",
    title: "Kalpavruksha",
    series: "kalpavruksha",
    medium: "Bronze, brass & copper",
    size: "29 × 27 × 26 in.",
    note: "An Ode to Nature — Contemplating the beauty of the earth, I found reserves of strength that will endure as long as life lasts…",
    images: [
      {
        src: "/images/portfolio/kalpavruksha/kalpavruksha-i.webp",
        width: 1500,
        height: 2000,
        alt: "Kalpavruksha — bronze and brass-wire tree sculpture rooted in a woman's silhouette, bare branches spreading above a round dark-green marble base",
      },
      {
        src: "/images/portfolio/kalpavruksha/kalpavruksha-i-alt.webp",
        width: 1429,
        height: 2000,
        alt: "Kalpavruksha, alternate angle — the woman's figure-eight torso rising into gnarled bronze branches",
      },
    ],
  },

  // ---------- Shringar ----------
  {
    slug: "lady-with-a-mirror-iii",
    title: "Lady with a Mirror III",
    series: "shringar",
    medium: "Bronze",
    images: [
      {
        src: "/images/portfolio/shringar/lady-with-a-mirror-iii.webp",
        width: 1306,
        height: 2000,
        alt: "Lady with a Mirror III — bronze seated figure in mint-green patina dress, one arm arced overhead holding a small mirror",
      },
    ],
  },
  {
    slug: "lady-with-a-parrot-ii",
    title: "Lady with a Parrot II",
    series: "shringar",
    medium: "Bronze",
    images: [
      {
        src: "/images/portfolio/shringar/lady-with-a-parrot-ii.webp",
        width: 1467,
        height: 2000,
        alt: "Lady with a Parrot II — bronze seated figure in mint-green patina dress, arm crossed to the chest cradling a parrot",
      },
    ],
  },
  {
    slug: "alasya-kanya-i",
    title: "Alasya Kanya I",
    series: "shringar",
    medium: "Bronze",
    images: [
      {
        src: "/images/portfolio/shringar/alasya-kanya-i.webp",
        width: 1500,
        height: 2000,
        alt: "Alasya Kanya I — bronze seated figure with both arms raised straight up, hands nearly touching in a tall triangular silhouette",
      },
    ],
  },
  {
    slug: "alasya-kanya-vi",
    title: "Alasya Kanya VI",
    series: "shringar",
    medium: "Bronze",
    images: [
      {
        src: "/images/portfolio/shringar/alasya-kanya-vi.webp",
        width: 1333,
        height: 2000,
        alt: "Alasya Kanya VI — bronze seated figure, arms raised overhead in a rounded arch",
      },
    ],
  },
  {
    slug: "alasya-kanya-vii",
    title: "Alasya Kanya VII",
    series: "shringar",
    medium: "Bronze",
    images: [
      {
        src: "/images/portfolio/shringar/alasya-kanya-vii.webp",
        width: 2000,
        height: 1333,
        alt: "Alasya Kanya VII — bronze figure reclining with one arm extended along the ground in a dramatic diagonal pose",
      },
    ],
  },
  {
    slug: "lady-wearing-necklace",
    title: "Lady Wearing Necklace",
    series: "shringar",
    medium: "Bronze",
    unlisted: true,
    images: [
      {
        src: "/images/portfolio/shringar/lady-wearing-necklace.webp",
        width: 1500,
        height: 2000,
        alt: "Bronze seated figure in mint-green patina dress, arms raised in an overhead loop, adjusting a necklace",
      },
    ],
  },
  {
    slug: "lady-with-a-flower",
    title: "Lady with a Flower",
    series: "shringar",
    medium: "Bronze",
    unlisted: true,
    images: [
      {
        src: "/images/portfolio/shringar/lady-with-a-flower.webp",
        width: 1500,
        height: 2000,
        alt: "Bronze seated figure in mint-green patina dress, one arm arced overhead, the other hand holding a flower to the chest",
      },
    ],
  },
  {
    slug: "lady-with-flowers",
    title: "Lady with Flowers",
    series: "shringar",
    medium: "Bronze",
    unlisted: true,
    images: [
      {
        src: "/images/portfolio/shringar/lady-with-flowers.webp",
        width: 1333,
        height: 2000,
        alt: "Bronze seated figure with floral appliqué on the bodice, arms crossed overhead in an oval loop",
      },
    ],
  },
  {
    slug: "lady-with-a-punkha",
    title: "Lady with a Punkha",
    series: "shringar",
    medium: "Bronze",
    unlisted: true,
    images: [
      {
        src: "/images/portfolio/shringar/lady-with-a-punkha.webp",
        width: 1333,
        height: 2000,
        alt: "Bronze seated figure with flowers in upswept hair, legs extended, a hand-fan (punkha) raised near the face",
      },
    ],
  },

  // ---------- Whispers of Innocence ----------
  {
    slug: "a-page-from-our-family-album",
    title: "A Page From Our Family Album",
    series: "whispers-of-innocence",
    medium: "Bronze",
    images: [
      {
        src: "/images/portfolio/whispers-of-innocence/a-page-from-our-family-album.webp",
        width: 1864,
        height: 1211,
        alt: "A Page From Our Family Album — three children's heads and arms emerging from a cracked bronze egg",
      },
      {
        src: "/images/portfolio/whispers-of-innocence/a-page-from-our-family-album-alt.webp",
        width: 1864,
        height: 1232,
        alt: "A Page From Our Family Album, alternate angle — the cracked bronze egg mounted on a black base with a glass disc",
      },
    ],
  },
  {
    slug: "silent-evenings-on-the-bank-of-sublime",
    title: "Silent Evenings on the Bank of Sublime",
    series: "whispers-of-innocence",
    medium: "Bronze",
    images: [
      {
        src: "/images/portfolio/whispers-of-innocence/silent-evenings-on-the-bank-of-sublime.webp",
        width: 1497,
        height: 2000,
        alt: "Silent Evenings on the Bank of Sublime — a figure balanced on a curved, wave-textured bronze canoe-shaped base",
      },
    ],
  },
  {
    slug: "skiing-ii",
    title: "Skiing II",
    series: "whispers-of-innocence",
    medium: "Bronze",
    images: [
      {
        src: "/images/portfolio/whispers-of-innocence/skiing-ii.webp",
        width: 2000,
        height: 1500,
        alt: "Skiing II — bronze figure balanced on a curved ski, arms outstretched mid-motion",
      },
    ],
  },
  {
    slug: "swing",
    title: "Swing",
    series: "whispers-of-innocence",
    medium: "Bronze",
    images: [
      {
        src: "/images/portfolio/whispers-of-innocence/swing.webp",
        width: 2000,
        height: 1497,
        alt: "Swing — bronze figure suspended by wire in a dynamic climbing pose, mint-green patina dress",
      },
      {
        src: "/images/portfolio/whispers-of-innocence/swing-alt.webp",
        width: 1596,
        height: 2000,
        alt: "Swing, alternate angle — the wire-hung figure captured mid-leap",
      },
    ],
  },
  {
    slug: "acrobat-iii",
    title: "Acrobat III",
    series: "whispers-of-innocence",
    medium: "Bronze",
    unlisted: true,
    images: [
      {
        src: "/images/portfolio/whispers-of-innocence/acrobat-iii.webp",
        width: 2000,
        height: 1500,
        alt: "Bronze acrobat figure arched into a full backbend loop, mounted on a green marble slab",
      },
    ],
  },
  {
    slug: "acrobat-ii",
    title: "Acrobat II",
    series: "whispers-of-innocence",
    medium: "Bronze",
    unlisted: true,
    images: [
      {
        src: "/images/portfolio/whispers-of-innocence/acrobat-ii.webp",
        width: 1500,
        height: 2000,
        alt: "Bronze acrobat figure balanced in a one-legged backbend on a black base",
      },
    ],
  },
  {
    slug: "acrobat",
    title: "Acrobat",
    series: "whispers-of-innocence",
    medium: "Bronze",
    unlisted: true,
    images: [
      {
        src: "/images/portfolio/whispers-of-innocence/acrobat.webp",
        width: 1487,
        height: 2000,
        alt: "Bronze acrobat figure in an extreme handstand backbend, mint-green patina dress, on a granite base",
      },
    ],
  },
  {
    slug: "three-dancers",
    title: "Three Dancers",
    series: "whispers-of-innocence",
    medium: "Bronze",
    unlisted: true,
    images: [
      {
        src: "/images/portfolio/whispers-of-innocence/three-dancers.webp",
        width: 1500,
        height: 2000,
        alt: "Three small bronze dancing figures joined by flowing ribbon-like forms overhead, on a black base",
      },
    ],
  },
  {
    slug: "funny-moments",
    title: "Funny Moments",
    series: "whispers-of-innocence",
    medium: "Bronze",
    unlisted: true,
    images: [
      {
        src: "/images/portfolio/whispers-of-innocence/funny-moments.webp",
        width: 1400,
        height: 2000,
        alt: "Bronze acrobatic figure captured mid-tumble in an abstract, dynamic pose",
      },
    ],
  },
  {
    slug: "to-touch-the-sky",
    title: "To Touch the Sky",
    series: "whispers-of-innocence",
    medium: "Bronze",
    unlisted: true,
    images: [
      {
        src: "/images/portfolio/whispers-of-innocence/to-touch-the-sky.webp",
        width: 691,
        height: 922,
        alt: "Bronze dancing figure leaping with one leg forward, arms diagonal, on a rectangular base",
      },
    ],
  },

  // ---------- Object Study ----------
  {
    slug: "object-study",
    title: "An Object Study",
    series: "object-study",
    medium: "Bronze",
    images: [
      {
        src: "/images/portfolio/object-study/object-study.webp",
        width: 753,
        height: 2000,
        alt: "An Object Study — a bronze seated girl in a mint-green dress on a wooden stool, holding a small object",
      },
    ],
  },

  // ---------- Sanjeevani ----------
  {
    slug: "sanjeevani-i",
    title: "Sanjeevani — An Endless Journey",
    series: "sanjeevani",
    medium: "Bronze",
    images: [
      {
        src: "/images/portfolio/sanjeevani/sanjeevani-i.webp",
        width: 2000,
        height: 1666,
        alt: "Sanjeevani — a bronze figure flying over a cityscape, a stone balanced in one hand and a mobile phone in the other",
      },
    ],
  },
  {
    slug: "sanjeevani-ii",
    title: "Sanjeevani II",
    series: "sanjeevani",
    medium: "Bronze",
    images: [
      {
        src: "/images/portfolio/sanjeevani/sanjeevani-ii.webp",
        width: 1501,
        height: 2000,
        alt: "Sanjeevani II — bronze flying figure balancing a stone overhead, mounted on a round green base",
      },
    ],
  },
  {
    slug: "sanjeevani-iii",
    title: "Sanjeevani III",
    series: "sanjeevani",
    medium: "Bronze",
    images: [
      {
        src: "/images/portfolio/sanjeevani/sanjeevani-iii.webp",
        width: 1009,
        height: 2000,
        alt: "Sanjeevani III — bronze figure kneeling on a natural rock, reaching up toward a round stone",
      },
    ],
  },

  // ---------- Manuscript ----------
  {
    slug: "manuscript-series",
    title: "Manuscript Series",
    series: "manuscript",
    medium: "Bronze and terracotta",
    images: [
      {
        src: "/images/portfolio/manuscript/manuscript-series.webp",
        width: 1483,
        height: 2000,
        alt: "Manuscript Series — three terracotta and bronze relief panels on dark wood, each with a circular relief scene of a goddess slaying a demon",
      },
    ],
  },

  // ---------- Shackled ----------
  {
    slug: "shackled",
    title: "Shackled",
    series: "shackled",
    medium: "Epoxy resin",
    size: "2 × 2 × 1 ft (2018)",
    images: [
      {
        src: "/images/portfolio/shackled/shackled.webp",
        width: 720,
        height: 1280,
        alt: "Shackled — a bronze bust adorned with a flower, wearing a barbed-wire necklace in place of a diamond pendant",
      },
    ],
  },

  // ---------- Freedom ----------
  {
    slug: "freedom",
    title: "Freedom",
    series: "freedom",
    medium: "Stainless steel",
    size: "15 × 8 × 7 ft (2017) — Harni Sculpture Park, near Vadodara Airport",
    images: [
      {
        src: "/images/portfolio/freedom/freedom-installed.webp",
        width: 838,
        height: 2000,
        alt: "Freedom — a monumental stainless-steel figure releasing birds from open hands, installed outdoors against an evening sky",
      },
    ],
  },

  // ---------- Conversation ----------
  {
    slug: "conversation-iii",
    title: "Conversation III",
    series: "conversation",
    medium: "Bronze",
    images: [
      {
        src: "/images/portfolio/conversation/conversation-iii.webp",
        width: 2000,
        height: 1500,
        alt: "Conversation III — three small bronze figures in mint-green dresses seated on a plinth edge, legs dangling",
      },
    ],
  },
  {
    slug: "conversation",
    title: "Conversation",
    series: "conversation",
    medium: "Epoxy resin, life-size",
    images: [
      {
        src: "/images/portfolio/conversation/conversation.webp",
        width: 2000,
        height: 1554,
        alt: "Conversation — three life-size figures in green swimsuits seated on an outdoor ledge, one holding a drink, building backdrop",
      },
    ],
  },

  // ---------- Living Tapestry ----------
  {
    slug: "living-tapestry",
    title: "Living Tapestry",
    series: "living-tapestry",
    medium: "Textile waste wall hanging",
    size: "2 × 3 ft",
    images: [
      {
        src: "/images/portfolio/living-tapestry/living-tapestry.webp",
        width: 816,
        height: 1104,
        alt: "Living Tapestry — a textile wall hanging of blue and green fabric strips forming sky, water and greenery, with yellow appliqué crocodiles",
      },
      {
        src: "/images/portfolio/living-tapestry/living-tapestry-process.webp",
        width: 958,
        height: 757,
        alt: "Living Tapestry in progress — the artist constructing the textile wall hanging in her studio",
      },
    ],
  },

  // ---------- Other Works ----------
  {
    slug: "in-my-garden-under-the-champa-tree",
    title: "In My Garden… Under the Champa Tree",
    series: "other-works",
    medium: "Bronze and terracotta",
    images: [
      {
        src: "/images/portfolio/other-works/in-my-garden-under-the-champa-tree.webp",
        width: 958,
        height: 902,
        alt: "In My Garden… Under the Champa Tree — a rounded abstract bronze bust at the centre of a round terracotta disc scattered with ceramic flower petals",
      },
      {
        src: "/images/portfolio/other-works/in-my-garden-under-the-champa-tree-alt.webp",
        width: 1080,
        height: 1135,
        alt: "In My Garden… Under the Champa Tree, front view — the bronze bust seen from the front amid scattered ceramic petals",
      },
    ],
  },
  {
    slug: "gazing-in-my-lily-pond",
    title: "Gazing in My Lily Pond",
    series: "other-works",
    medium: "Bronze",
    images: [
      {
        src: "/images/portfolio/other-works/gazing-in-my-lily-pond.webp",
        width: 2000,
        height: 1812,
        alt: "Gazing in My Lily Pond — a small bronze figure with a bird on its head, seated amid bronze lily pads on a glass base",
      },
    ],
  },
  {
    slug: "golfer",
    title: "Golfer",
    series: "other-works",
    medium: "Bronze",
    images: [
      {
        src: "/images/portfolio/other-works/golfer.webp",
        width: 1500,
        height: 2000,
        alt: "Golfer — bronze figure mid-swing on a wavy glass base",
      },
    ],
  },
  {
    slug: "hanging-sculpture",
    title: "Hanging Sculpture",
    series: "other-works",
    medium: "Bronze",
    images: [
      {
        src: "/images/portfolio/other-works/hanging-sculpture.webp",
        width: 1500,
        height: 2000,
        alt: "A bronze dancer figure suspended by wire, mint-green dress, captured mid-leap",
      },
    ],
  },
  {
    slug: "mystery-ii",
    title: "Mystery II",
    series: "other-works",
    medium: "Bronze",
    unlisted: true,
    images: [
      {
        src: "/images/portfolio/unlisted/mystery-ii.webp",
        width: 1501,
        height: 2000,
        alt: "Abstract bronze sculpture, a crescent wing-like form with two small carved hands pulling taut wires, on a round black base",
      },
    ],
  },
  {
    slug: "mystery-iii",
    title: "Mystery III",
    series: "other-works",
    medium: "Bronze",
    unlisted: true,
    images: [
      {
        src: "/images/portfolio/unlisted/mystery-iii.webp",
        width: 1285,
        height: 2000,
        alt: "Abstract bronze sculpture, a rib-cage-like curved form with carved hands grasping strings at its base",
      },
    ],
  },
  {
    slug: "portrait-busts-six",
    title: "Portrait Busts",
    series: "other-works",
    medium: "Bronze",
    unlisted: true,
    images: [
      {
        src: "/images/portfolio/unlisted/portrait-busts-six.webp",
        width: 1287,
        height: 728,
        alt: "Six bronze portrait busts in a row, braided hair, mint-patina bodices, no arms or legs",
      },
    ],
  },
  {
    slug: "portrait-busts-three",
    title: "Portrait Busts (study)",
    series: "other-works",
    medium: "Bronze",
    unlisted: true,
    images: [
      {
        src: "/images/portfolio/unlisted/portrait-busts-three.webp",
        width: 1027,
        height: 770,
        alt: "Three bronze portrait busts with braided hair and mint-patina bodices",
      },
    ],
  },
  {
    slug: "self-portrait-bust",
    title: "Self Portrait",
    series: "other-works",
    medium: "Ceramic",
    unlisted: true,
    images: [
      {
        src: "/images/portfolio/unlisted/self-portrait-bust.webp",
        width: 614,
        height: 1024,
        alt: "A ceramic bust with a crescent-moon motif on the forehead, mounted on a flower-shaped green base",
      },
    ],
  },
  {
    slug: "driving-driving",
    title: "Driving, Driving",
    series: "other-works",
    medium: "Bronze",
    unlisted: true,
    images: [
      {
        src: "/images/portfolio/unlisted/driving-driving.webp",
        width: 2000,
        height: 1497,
        alt: "Two bronze children's figures on a playground swing structure, gold-bronze patina",
      },
    ],
  },
  {
    slug: "only-for-you",
    title: "Only for You",
    series: "other-works",
    medium: "Bronze",
    unlisted: true,
    images: [
      {
        src: "/images/portfolio/unlisted/only-for-you.webp",
        width: 2000,
        height: 1497,
        alt: "A robed bronze figure holding budding branches, mounted on a black base",
      },
    ],
  },
  {
    slug: "dancing-trio",
    title: "Dancing Trio",
    series: "other-works",
    medium: "Bronze",
    images: [
      {
        src: "/images/portfolio/other-works/dancing-trio.webp",
        width: 1080,
        height: 1076,
        alt: "Three bronze nude dancing figures in mid-motion, each on a round green-marble base",
      },
    ],
  },
];

export const piecesBySeries = (slug: SeriesSlug) => pieces.filter((p) => p.series === slug);
