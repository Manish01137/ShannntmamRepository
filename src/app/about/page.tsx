import type { Metadata } from "next";
import Image from "next/image";
import { bio } from "@/content/bio";
import { ScrollReveal } from "@/components/ScrollReveal";

export const metadata: Metadata = {
  title: "About Shanta Samanta — Bronze Sculptor & Researcher, MSU Baroda",
  description:
    "The story, education and philosophy behind Dr. Shanta M. Sarvaiya's bronze sculpture practice — from a childhood Durga in Haldia to three decades exploring womanhood, mythology and memory.",
};

export default function AboutPage() {
  return (
    <div className="mx-auto max-w-5xl px-6 py-16 md:px-10 md:py-24">
      <ScrollReveal>
        <p className="font-sans text-sm tracking-[0.2em] text-bronze uppercase">About the Artist</p>
        <h1 className="mt-4 font-display text-4xl text-bronze md:text-5xl">
          {bio.name}
        </h1>
        <p className="mt-2 font-sans text-sm text-charcoal/70">
          Born {bio.born} · {bio.location}
        </p>
      </ScrollReveal>

      {/* Portrait + narrative */}
      <div className="mt-14 grid gap-10 md:grid-cols-[minmax(0,320px)_1fr] md:gap-14">
        <ScrollReveal>
          <div className="relative aspect-4/5 w-full overflow-hidden rounded-sm md:sticky md:top-28">
            <Image
              src="/images/about/artist-portrait.webp"
              alt="Portrait of Dr. Shanta M. Sarvaiya, bronze sculptor, outdoors"
              fill
              sizes="(min-width: 768px) 320px, 100vw"
              className="object-cover"
            />
          </div>
        </ScrollReveal>

        <ScrollReveal delay={0.1}>
          <div className="space-y-6 font-sans text-base leading-relaxed text-charcoal md:text-lg">
            <p>{bio.originStory}</p>
            <p>{bio.medium}</p>

            <div>
              <h2 className="font-display text-xl text-bronze">Education</h2>
              <ul className="mt-3 space-y-1.5 text-charcoal/90">
                {bio.education.map((line) => (
                  <li key={line} className="border-l-2 border-patina pl-4">
                    {line}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </ScrollReveal>
      </div>

      {/* Pull quote */}
      <ScrollReveal className="mx-auto mt-20 max-w-3xl text-center">
        <blockquote className="font-display text-2xl leading-snug text-bronze italic md:text-3xl">
          &ldquo;{bio.quotes[0]}&rdquo;
        </blockquote>
      </ScrollReveal>

      {/* Philosophy */}
      <ScrollReveal className="mx-auto mt-20 max-w-3xl">
        <h2 className="font-display text-2xl text-bronze">Philosophy</h2>
        <p className="mt-4 font-sans text-base leading-relaxed text-charcoal md:text-lg">
          {bio.philosophy}
        </p>
      </ScrollReveal>

      <ScrollReveal className="mx-auto mt-14 max-w-3xl text-center">
        <blockquote className="font-display text-xl leading-snug text-bronze italic md:text-2xl">
          &ldquo;{bio.quotes[1]}&rdquo;
        </blockquote>
      </ScrollReveal>

      {/* Influences */}
      <ScrollReveal className="mx-auto mt-20 max-w-3xl">
        <h2 className="font-display text-2xl text-bronze">Influences</h2>
        <p className="mt-4 font-sans text-base leading-relaxed text-charcoal md:text-lg">
          {bio.inspirationSources}
        </p>
        <div className="mt-6 grid gap-8 sm:grid-cols-2">
          <div>
            <h3 className="font-sans text-xs tracking-[0.15em] text-bronze uppercase">International</h3>
            <ul className="mt-3 space-y-1.5 font-display text-lg text-charcoal">
              {bio.influencesInternational.map((name) => (
                <li key={name}>{name}</li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="font-sans text-xs tracking-[0.15em] text-bronze uppercase">Indian</h3>
            <ul className="mt-3 space-y-1.5 font-display text-lg text-charcoal">
              {bio.influencesIndian.map((name) => (
                <li key={name}>{name}</li>
              ))}
            </ul>
          </div>
        </div>
      </ScrollReveal>

      {/* Academic & Research */}
      <ScrollReveal className="mx-auto mt-20 max-w-5xl">
        <div className="grid gap-10 rounded-sm bg-patina-light/40 p-8 md:grid-cols-[1fr_minmax(0,320px)] md:p-12">
          <div>
            <h2 className="font-display text-2xl text-bronze">Academic &amp; Research</h2>
            <p className="mt-2 font-sans text-sm text-charcoal/70">{bio.role}</p>
            <p className="mt-4 font-sans text-base leading-relaxed text-charcoal md:text-lg">
              {bio.academicRole}
            </p>
          </div>
          <div className="relative aspect-4/3 w-full overflow-hidden rounded-sm">
            <Image
              src="/images/about/artist-studio-dancers.webp"
              alt="The artist in her studio with a row of bronze dancer maquettes on marble bases"
              fill
              sizes="(min-width: 768px) 320px, 100vw"
              className="object-cover"
            />
          </div>
        </div>
      </ScrollReveal>

      {/* On Contemporary Art — manifesto callout */}
      <ScrollReveal className="mx-auto mt-20 max-w-3xl border-t border-b border-bronze/15 py-12 text-center">
        <h2 className="font-sans text-xs tracking-[0.2em] text-bronze uppercase">On Contemporary Art</h2>
        <p className="mx-auto mt-5 max-w-2xl font-display text-xl leading-relaxed text-bronze md:text-2xl">
          {bio.onContemporaryArt}
        </p>
      </ScrollReveal>
    </div>
  );
}
