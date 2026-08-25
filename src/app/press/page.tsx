import type { Metadata } from "next";
import Image from "next/image";
import { pressItems, newspaperClippings } from "@/content/press";
import { bio } from "@/content/bio";
import { ScrollReveal } from "@/components/ScrollReveal";

export const metadata: Metadata = {
  title: "Writings — Press & Research on Shanta Samanta",
  description:
    "Press coverage of bronze sculptor Dr. Shanta M. Sarvaiya (Shanta Samanta) — her 2023 Art & Deal Magazine cover feature, two decades of newspaper and magazine coverage, and her published research.",
};

export default function PressPage() {
  return (
    <div className="mx-auto max-w-4xl px-6 py-16 md:px-10 md:py-24">
      <ScrollReveal>
        <p className="font-sans text-sm tracking-[0.2em] text-bronze uppercase">Writings</p>
        <h1 className="mt-4 font-display text-4xl text-bronze md:text-5xl">Press &amp; Research</h1>
        <p className="mt-5 max-w-2xl font-sans text-base leading-relaxed text-charcoal/85 md:text-lg">
          Two decades of press coverage, and her published academic research.
        </p>
      </ScrollReveal>

      <div className="mt-14 space-y-10">
        {pressItems.map((item, i) => (
          <ScrollReveal key={item.slug} delay={i * 0.06}>
            <article className="rounded-sm border border-bronze/15 p-8 md:p-10">
              <p className="font-sans text-xs tracking-[0.15em] text-bronze uppercase">
                {item.publication} · {item.issue}
              </p>
              <h2 className="mt-3 font-display text-2xl text-bronze md:text-3xl">{item.title}</h2>
              <p className="mt-2 font-sans text-sm text-charcoal/70">
                {item.type}
                {item.author && <> · By {item.author}</>}
              </p>
              <p className="mt-5 font-sans text-base leading-relaxed text-charcoal/90">
                {item.summary}
              </p>

              {item.pullQuotes.length > 0 && (
                <div className="mt-6 space-y-4 border-t border-bronze/10 pt-6">
                  {item.pullQuotes.map((quote) => (
                    <blockquote
                      key={quote}
                      className="font-display text-xl leading-snug text-bronze italic"
                    >
                      &ldquo;{quote}&rdquo;
                    </blockquote>
                  ))}
                </div>
              )}

              {item.fileUrl && (
                <a
                  href={item.fileUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-6 inline-block border border-bronze px-5 py-2.5 font-sans text-sm text-bronze transition-colors hover:bg-bronze hover:text-ivory"
                >
                  Read the Full Feature
                </a>
              )}
            </article>
          </ScrollReveal>
        ))}
      </div>

      {/* Newspaper & magazine archive */}
      <ScrollReveal className="mt-20">
        <h2 className="font-display text-2xl text-bronze">Newspaper &amp; Magazine Archive</h2>
        <p className="mt-3 max-w-2xl font-sans text-base leading-relaxed text-charcoal/80">
          Coverage spanning her early exhibitions in Mumbai and Ahmedabad, from 2001 to 2005 —
          scanned from her personal archive.
        </p>
        <div className="mt-8 grid grid-cols-2 gap-5 sm:grid-cols-3 md:grid-cols-4">
          {newspaperClippings.map((clip, i) => (
            <ScrollReveal key={clip.slug} delay={i * 0.03}>
              <a
                href={clip.image.src}
                target="_blank"
                rel="noreferrer"
                className="group block"
              >
                <div className="relative aspect-3/4 w-full overflow-hidden rounded-sm border border-bronze/15 bg-ivory">
                  <Image
                    src={clip.image.src}
                    alt={`${clip.publication}, ${clip.date} — ${clip.headline}`}
                    fill
                    sizes="(min-width: 768px) 22vw, 45vw"
                    className="object-cover object-top transition-transform duration-500 ease-out group-hover:scale-105"
                  />
                </div>
                <p className="mt-2 font-sans text-xs font-medium text-bronze">{clip.publication}</p>
                <p className="font-sans text-xs text-charcoal/60">{clip.date}</p>
              </a>
            </ScrollReveal>
          ))}
        </div>
      </ScrollReveal>

      {/* Downloads */}
      <ScrollReveal className="mt-20">
        <h2 className="font-display text-2xl text-bronze">Downloads</h2>
        <div className="mt-6 grid gap-5 sm:grid-cols-2">
          <a
            href={bio.contact.resumeUrl}
            download
            className="group flex items-center gap-4 rounded-sm border border-bronze/20 p-6 transition-colors hover:border-bronze"
          >
            <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-patina-light/50 text-bronze">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="h-5 w-5">
                <path d="M12 3v12m0 0 4-4m-4 4-4-4M5 21h14" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </span>
            <span>
              <span className="block font-display text-lg text-bronze">Resume / CV</span>
              <span className="mt-0.5 block font-sans text-sm text-charcoal/70">
                Education, appointments, awards and exhibitions
              </span>
            </span>
          </a>

          <a
            href="/press/shanta-samanta-portfolio-deck.pptx"
            download
            className="group flex items-center gap-4 rounded-sm border border-bronze/20 p-6 transition-colors hover:border-bronze"
          >
            <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-patina-light/50 text-bronze">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="h-5 w-5">
                <path d="M12 3v12m0 0 4-4m-4 4-4-4M5 21h14" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </span>
            <span>
              <span className="block font-display text-lg text-bronze">Artist Portfolio Deck</span>
              <span className="mt-0.5 block font-sans text-sm text-charcoal/70">
                Artist statement, biography and selected works (.pptx)
              </span>
            </span>
          </a>
        </div>
      </ScrollReveal>

      {/* Academic writings */}
      <ScrollReveal className="mt-20">
        <h2 className="font-display text-2xl text-bronze">Academic Writings</h2>
        <a
          href={bio.contact.academia}
          target="_blank"
          rel="noreferrer"
          className="group mt-6 flex items-center gap-6 rounded-sm bg-charcoal px-8 py-10 transition-colors hover:bg-charcoal/90 md:px-10"
        >
          <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-gold/15 text-gold transition-colors group-hover:bg-gold group-hover:text-charcoal">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="h-6 w-6">
              <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" />
              <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z" />
            </svg>
          </span>
          <span>
            <span className="block font-display text-lg text-ivory">Read her research on Academia.edu</span>
            <span className="mt-1 block font-sans text-sm text-bronze-light">
              Published papers on sculpture, memory and materiality
            </span>
          </span>
        </a>
      </ScrollReveal>
    </div>
  );
}
