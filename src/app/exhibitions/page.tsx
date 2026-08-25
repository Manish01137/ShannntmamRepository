import type { Metadata } from "next";
import { exhibitions, timeline } from "@/content/exhibitions";
import { ScrollReveal } from "@/components/ScrollReveal";

export const metadata: Metadata = {
  title: "Exhibitions, Awards & Collections — Shanta Samanta",
  description:
    "Solo shows, scholarships, awards, international exhibitions and public collections holding the bronze sculpture of Dr. Shanta M. Sarvaiya (Shanta Samanta).",
};

const TYPE_LABEL: Record<(typeof timeline)[number]["type"], string> = {
  award: "Award",
  scholarship: "Scholarship",
  "solo-show": "Solo Show",
};

export default function ExhibitionsPage() {
  return (
    <div className="mx-auto max-w-5xl px-6 py-16 md:px-10 md:py-24">
      <ScrollReveal>
        <p className="font-sans text-sm tracking-[0.2em] text-bronze uppercase">Recognition</p>
        <h1 className="mt-4 font-display text-4xl text-bronze md:text-5xl">
          Exhibitions, Awards &amp; Collections
        </h1>
      </ScrollReveal>

      {/* Timeline */}
      <section className="mt-16">
        <ScrollReveal>
          <h2 className="font-display text-2xl text-bronze">Timeline</h2>
        </ScrollReveal>
        <ol className="mt-8 space-y-0 border-l border-bronze/20 pl-8">
          {timeline.map((item, i) => (
            <li key={`${item.year}-${item.label}`} className="relative pb-8">
              <ScrollReveal delay={i * 0.03}>
                <span className="absolute top-1.5 -left-[calc(2rem+4.5px)] h-2 w-2 rounded-full bg-gold" />
                <p className="font-sans text-xs font-semibold tracking-wide text-bronze">{item.year}</p>
                <p className="mt-1 font-display text-lg text-charcoal">{item.label}</p>
                <p className="mt-0.5 font-sans text-xs tracking-wide text-charcoal/70 uppercase">
                  {TYPE_LABEL[item.type]}
                </p>
              </ScrollReveal>
            </li>
          ))}
        </ol>
      </section>

      {/* International */}
      <section className="mt-16 grid gap-10 sm:grid-cols-2">
        <ScrollReveal>
          <h2 className="font-display text-2xl text-bronze">Group Exhibitions</h2>
          <ul className="mt-4 space-y-2 font-sans text-base text-charcoal/85">
            {exhibitions.groupShowsInternational.map((show) => (
              <li key={show} className="border-b border-bronze/10 pb-2">
                {show}
              </li>
            ))}
          </ul>
        </ScrollReveal>
        <ScrollReveal delay={0.08}>
          <h2 className="font-display text-2xl text-bronze">Art Fairs</h2>
          <ul className="mt-4 space-y-2 font-sans text-base text-charcoal/85">
            {exhibitions.artFairs.map((fair) => (
              <li key={fair} className="border-b border-bronze/10 pb-2">
                {fair}
              </li>
            ))}
          </ul>
        </ScrollReveal>
      </section>

      {/* Research */}
      <ScrollReveal className="mt-16 rounded-sm bg-patina-light/40 p-8 md:p-10">
        <h2 className="font-display text-2xl text-bronze">Research &amp; Academic Work</h2>
        <p className="mt-3 font-sans text-base leading-relaxed text-charcoal/90">
          {exhibitions.researchGrants}
        </p>
      </ScrollReveal>

      {/* Collections */}
      <section className="mt-16 border-t border-bronze/15 pt-12 text-center">
        <ScrollReveal>
          <h2 className="font-sans text-xs tracking-[0.2em] text-bronze uppercase">
            Held in the Collections Of
          </h2>
          <ul className="mx-auto mt-6 flex max-w-3xl flex-wrap items-center justify-center gap-x-10 gap-y-4">
            {exhibitions.publicCollections.map((name) => (
              <li
                key={name}
                className="font-display text-lg tracking-wide text-bronze/70 md:text-xl"
              >
                {name}
              </li>
            ))}
          </ul>
        </ScrollReveal>
      </section>
    </div>
  );
}
