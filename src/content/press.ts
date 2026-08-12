export type PressItem = {
  slug: string;
  title: string;
  publication: string;
  issue: string;
  author?: string;
  type: string;
  summary: string;
  /** Set once Manish supplies the scan/PDF. */
  fileUrl: string | null;
  /** Set once real verbatim quotes are supplied — never fabricate these. */
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
    fileUrl: null,
    pullQuotes: [],
    featured: true,
  },
  // Add future press mentions here as additional objects with the same shape.
];

export const press = {
  featured: pressItems.find((p) => p.featured) ?? pressItems[0],
};
