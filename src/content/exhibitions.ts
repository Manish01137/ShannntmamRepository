export const exhibitions = {
  soloShows: [
    "2001 — Bajaj Art Gallery, Mumbai",
    "2002 — Contemporary Art Gallery, Ahmedabad",
    "2007 — The Rite of Passage, Marvel Art Gallery, Ahmedabad",
    "2008 — Cymroza Art Gallery, Mumbai",
  ],
  /** From her CV — real, dated group shows and fairs, in reverse chronological order. */
  groupShowsInternational: [
    "2024 — Confluence, Lalit Kala Akademi, New Delhi",
    "2023 — Shifting Practices; Avianna; Amalgam; Myth and Aftermath Residency",
    "2022 — Creative Waves, Kolkata",
    "2019 — The Baroda March; Within Reach X, New Delhi",
    "2018 — World Art Dubai; India Art Festival",
    "2017 — Dubai Art Fair; Beyond Boundaries; The Baroda March",
    "2016 — Art Dubai; Asia House, London; India Art Festival",
    "2015 — Vivid, London; Mall of the Emirates, Dubai",
    "2013 — Art Zest Dubai",
    "2012 — Visual Art Gallery, London; Hong Kong Exhibition",
    "2010 — India Art Summit, New Delhi",
    "2007 — DASTAK, Cork Street, London",
  ],
  artFairs: ["India Art Fair", "Dubai Art Fair", "Singapore Art Fair"],
  scholarships: ["National Cultural Scholarship (2000–02)", "Lalit Kala Akademi Scholarship (2003–04)"],
  awards: [
    "AIFACS Award, New Delhi (1998)",
    "AIFACS Millennium All India Art Award, Ahmedabad (2000)",
    "Gujarat State Lalit Kala Akademi Awards (1999 & 2002)",
  ],
  researchGrants:
    "Gurus of Sculpture Department, M.S. University (2015–2017); Identification, Documentation and Cataloguing of Artworks in the Sculpture Department (2020–2021); international collaboration with the British Council on \"Ecology and its Sustenance,\" with Dumbarton Academy, Scotland; guides PhD scholars and publishes research papers.",
  publicCollections: [
    "Godrej",
    "Hindustan Lever",
    "Bayer",
    "Rubamin",
    "Pidilite",
    "Marvel Art Gallery",
    "Cymroza",
    "Private collectors",
  ],
} as const;

/** Same facts as above, merged into one chronological sequence for the timeline display. */
export const timeline: { year: string; label: string; type: "award" | "scholarship" | "solo-show" }[] = [
  { year: "1998", label: "AIFACS Award, New Delhi", type: "award" },
  { year: "1999", label: "Gujarat State Lalit Kala Akademi Award", type: "award" },
  { year: "2000", label: "AIFACS Millennium All India Art Award, Ahmedabad", type: "award" },
  { year: "2000–02", label: "National Cultural Scholarship", type: "scholarship" },
  { year: "2001", label: "Solo Show — Bajaj Art Gallery, Mumbai", type: "solo-show" },
  { year: "2002", label: "Solo Show — Contemporary Art Gallery, Ahmedabad", type: "solo-show" },
  { year: "2002", label: "Gujarat State Lalit Kala Akademi Award", type: "award" },
  { year: "2003–04", label: "Lalit Kala Akademi Scholarship", type: "scholarship" },
  { year: "2007", label: "Solo Show — The Rite of Passage, Marvel Art Gallery, Ahmedabad", type: "solo-show" },
  { year: "2008", label: "Solo Show — Cymroza Art Gallery, Mumbai", type: "solo-show" },
];
