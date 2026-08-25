import type { Metadata } from "next";
import Image from "next/image";
import { bio } from "@/content/bio";
import { ScrollReveal } from "@/components/ScrollReveal";

function getYouTubeId(url: string): string | null {
  const match = url.match(/youtu\.be\/([\w-]+)/) ?? url.match(/[?&]v=([\w-]+)/);
  return match ? match[1] : null;
}

export const metadata: Metadata = {
  title: "Process — How Shanta Samanta Casts Bronze",
  description:
    "Inside Dr. Shanta M. Sarvaiya's (Shanta Samanta) bronze sculpture practice — metal casting, patination, and the science behind the studio.",
};

const WORKSHOPS = ["Terracotta", "Raku", "Dokra", "Glass", "Ceramics"];

export default function ProcessPage() {
  const youtubeId = getYouTubeId(bio.contact.youtube);

  return (
    <div className="mx-auto max-w-4xl px-6 py-16 md:px-10 md:py-24">
      <ScrollReveal>
        <p className="font-sans text-sm tracking-[0.2em] text-bronze uppercase">In the Studio</p>
        <h1 className="mt-4 font-display text-4xl text-bronze md:text-5xl">Process</h1>
        <p className="mt-5 max-w-2xl font-sans text-base leading-relaxed text-charcoal/85 md:text-lg">
          {bio.medium}
        </p>
      </ScrollReveal>

      {/* Metal casting demonstration at the Faculty of Fine Arts */}
      <ScrollReveal className="mt-16">
        <h2 className="font-display text-2xl text-bronze">
          Metal Casting at the Faculty of Fine Arts
        </h2>
        <p className="mt-4 max-w-2xl font-sans text-base leading-relaxed text-charcoal md:text-lg">
          A live bronze-pour demonstration in the foundry at the Faculty of Fine Arts, The M.S.
          University of Baroda, where {bio.displayName.primary} teaches students the lost-wax
          casting process firsthand.
        </p>
        <div className="mt-8 grid gap-6 sm:grid-cols-2">
          <div className="relative aspect-4/3 w-full overflow-hidden rounded-sm">
            <Image
              src="/images/process/metal-casting-pour.webp"
              alt="Students and faculty gathered around a crucible, pouring molten metal into moulds during a casting demonstration"
              fill
              sizes="(min-width: 640px) 45vw, 100vw"
              className="object-cover"
            />
          </div>
          <div className="relative aspect-4/3 w-full overflow-hidden rounded-sm">
            <Image
              src="/images/process/metal-casting-overhead.webp"
              alt="Overhead view of the foundry courtyard during the casting demonstration, with students gathered around the furnace"
              fill
              sizes="(min-width: 640px) 45vw, 100vw"
              className="object-cover"
            />
          </div>
        </div>
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

      {/* Watch the process */}
      {youtubeId && (
        <ScrollReveal className="mt-16">
          <h2 className="font-display text-2xl text-bronze">Watch the Process</h2>
          <div className="relative mt-6 aspect-video w-full overflow-hidden rounded-sm bg-charcoal">
            <iframe
              src={`https://www.youtube.com/embed/${youtubeId}`}
              title="Indian Sculptor Shanta Samant: Figures From The Bottom Of The Earth"
              className="absolute inset-0 h-full w-full"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
        </ScrollReveal>
      )}
    </div>
  );
}
