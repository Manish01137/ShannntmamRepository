export const exhibitions = {
  soloShows: [
    "2001 — Bajaj Art Gallery, Mumbai",
    "2002 — Contemporary Art Gallery, Ahmedabad",
    "2007",
    "2008",
  ],
  groupShowsInternational: ["London", "Dubai", "Hong Kong", "Delhi", "Kolkata"],
  artFairs: ["India Art Fair", "Dubai Art Fair", "Singapore Art Fair"],
  scholarships: ["National Cultural Scholarship (2000–02)", "Lalit Kala Akademi Scholarship (2003–04)"],
  awards: [
    "AIFACS Award, New Delhi (1998)",
    "AIFACS Millennium All India Art Award, Ahmedabad (2000)",
    "Gujarat State Lalit Kala Akademi Awards (1999 & 2002)",
  ],
  researchGrants:
    "Research projects including sculpture documentation and university research; international collaboration with the British Council; guides PhD scholars; publishes research papers.",
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
  { year: "2007", label: "Solo Show", type: "solo-show" },
  { year: "2008", label: "Solo Show", type: "solo-show" },
];
