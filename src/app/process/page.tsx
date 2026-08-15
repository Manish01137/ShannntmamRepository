import type { Metadata } from "next";
import { bio } from "@/content/bio";
import { ScrollReveal } from "@/components/ScrollReveal";

export const metadata: Metadata = {
  title: "Process — How Shanta Samanta Casts Bronze",
  description:
    "Inside Dr. Shanta M. Sarvaiya's (Shanta Samanta) bronze sculpture practice — metal casting, patination, and the science behind the studio.",
};

const WORKSHOPS = ["Terracotta", "Raku", "Dokra", "Glass", "Ceramics"];

export default function ProcessPage() {
  return (
    <div className="mx-auto max-w-4xl px-6 py-16 md:px-10 md:py-24">
      <ScrollReveal>
        <p className="font-sans text-sm tracking-[0.2em] text-bronze uppercase">In the Studio</p>
        <h1 className="mt-4 font-display text-4xl text-bronze md:text-5xl">Process</h1>
        <p className="mt-5 max-w-2xl font-sans text-base leading-relaxed text-charcoal/85 md:text-lg">
          {bio.medium}
        </p>
      </ScrollReveal>

      {/* The science of casting */}
      <ScrollReveal className="mt-16">
        <h2 className="font-display text-2xl text-bronze">A Scientist&rsquo;s Eye</h2>
        <p className="mt-4 font-sans text-base leading-relaxed text-charcoal md:text-lg">
          Before switching to art, {bio.displayName.primary} studied science — a background she
          has said shaped her sculpture practice directly. Bronze casting and patination are, at
          their core, chemistry: controlled heat, metal, and reaction.
        </p>
        <blockquote className="mt-6 border-l-2 border-gold pl-6 font-display text-xl leading-snug text-bronze italic md:text-2xl">
          &ldquo;{bio.processQuotes[0]}&rdquo;
        </blockquote>
      </ScrollReveal>

      {/* Patina */}
      <ScrollReveal className="mx-auto mt-16 max-w-3xl text-center">
        <blockquote className="font-display text-2xl leading-snug text-bronze italic md:text-3xl">
          &ldquo;{bio.processQuotes[1]}&rdquo;
        </blockquote>
      </ScrollReveal>

      {/* Workshops & materials */}
      <ScrollReveal className="mt-16 rounded-sm bg-patina-light/40 p-8 md:p-10">
        <h2 className="font-display text-2xl text-bronze">Workshops &amp; Materials</h2>
        <p className="mt-3 font-sans text-base leading-relaxed text-charcoal/90">
          Beyond bronze, {bio.displayName.primary} has organised and participated in numerous
          hands-on workshops across the sculpture department at The M.S. University of Baroda.
        </p>
        <ul className="mt-5 flex flex-wrap gap-3">
          {WORKSHOPS.map((w) => (
            <li
              key={w}
              className="rounded-full border border-bronze/30 px-4 py-1.5 font-sans text-sm text-bronze"
            >
              {w}
            </li>
          ))}
        </ul>
      </ScrollReveal>

      {/* First sculpture */}
      <ScrollReveal className="mt-16">
        <h2 className="font-display text-2xl text-bronze">Where It Began</h2>
        <p className="mt-4 font-sans text-base leading-relaxed text-charcoal md:text-lg">
          {bio.processQuotes[2]}
        </p>
      </ScrollReveal>

      {/* Watch the process — placeholder until a working video link is confirmed */}
      <ScrollReveal className="mt-16">
        <h2 className="font-display text-2xl text-bronze">Watch the Process</h2>
        <div className="mt-6 flex flex-col items-center justify-center gap-3 rounded-sm border border-dashed border-bronze/30 bg-patina-light/20 px-8 py-14 text-center">
          <svg viewBox="0 0 40 40" fill="none" aria-hidden className="h-10 w-10 text-bronze/40">
            <circle cx="20" cy="20" r="17" stroke="currentColor" strokeWidth="1.5" />
            <path d="M17 14l10 6-10 6V14z" fill="currentColor" />
          </svg>
          <p className="font-display text-base text-bronze italic">Casting film coming soon</p>
          <p className="max-w-sm font-sans text-xs tracking-wide text-bronze/70 uppercase">
            A video of the bronze-casting process will be embedded here once confirmed
          </p>
        </div>
      </ScrollReveal>
    </div>
  );
}
