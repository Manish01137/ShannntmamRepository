import type { Metadata } from "next";
import { pressItems } from "@/content/press";
import { bio } from "@/content/bio";
import { ScrollReveal } from "@/components/ScrollReveal";

export const metadata: Metadata = {
  title: "Press — Shanta Samanta in Art & Deal Magazine",
  description:
    "Press coverage of bronze sculptor Dr. Shanta M. Sarvaiya (Shanta Samanta), including her 2023 cover feature in Art & Deal Magazine.",
};

export default function PressPage() {
  return (
    <div className="mx-auto max-w-4xl px-6 py-16 md:px-10 md:py-24">
      <ScrollReveal>
        <p className="font-sans text-sm tracking-[0.2em] text-bronze uppercase">In the Press</p>
        <h1 className="mt-4 font-display text-4xl text-bronze md:text-5xl">Press</h1>
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

      <ScrollReveal className="mt-16">
        <h2 className="font-display text-2xl text-bronze">Watch</h2>
        <a
          href={bio.contact.youtube}
          target="_blank"
          rel="noreferrer"
          className="group mt-6 flex items-center gap-6 rounded-sm bg-charcoal px-8 py-10 transition-colors hover:bg-charcoal/90 md:px-10"
        >
          <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-gold/15 text-gold transition-colors group-hover:bg-gold group-hover:text-charcoal">
            <svg viewBox="0 0 24 24" fill="currentColor" className="ml-0.5 h-6 w-6">
              <path d="M8 5v14l11-7z" />
            </svg>
          </span>
          <span>
            <span className="block font-display text-lg text-ivory">Watch on YouTube</span>
            <span className="mt-1 block font-sans text-sm text-bronze-light">
              A short film featuring Shanta Samanta&rsquo;s work
            </span>
          </span>
        </a>
      </ScrollReveal>
    </div>
  );
}
