import Image from "next/image";
import Link from "next/link";
import { bio } from "@/content/bio";
import { pieces, piecesBySeries } from "@/content/pieces";
import { seriesList } from "@/content/series";
import { exhibitions } from "@/content/exhibitions";
import { ScrollReveal } from "@/components/ScrollReveal";
import { ComingSoonPlaceholder } from "@/components/ComingSoonPlaceholder";

const FEATURED_SLUGS = [
  "freedom",
  "kalpavruksha",
  "alasya-kanya-i",
  "a-page-from-our-family-album",
  "sanjeevani-i",
  "conversation",
];

const SERIES_PREVIEW_SLUGS = seriesList.map((s) => s.slug).filter((slug) => slug !== "other-works");

export default function Home() {
  const featured = FEATURED_SLUGS.map((slug) => pieces.find((p) => p.slug === slug)).filter(
    (p): p is NonNullable<typeof p> => Boolean(p)
  );

  const seriesPreviews = SERIES_PREVIEW_SLUGS.map((slug) => {
    const series = seriesList.find((s) => s.slug === slug);
    if (!series) return null;
    const firstPiece = piecesBySeries(slug).find((p) => p.images[0]);
    return { series, image: firstPiece?.images[0] };
  }).filter((s): s is NonNullable<typeof s> => Boolean(s));

  const tickerItems = [
    ...exhibitions.awards.map((a) => a.replace(/\s*\(.+?\)\s*$/, "")),
    ...exhibitions.artFairs,
  ];

  const heroIntro = bio.philosophy.split(". ")[0] + ".";

  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-charcoal">
        <div className="mx-auto grid max-w-6xl items-center gap-10 px-6 py-16 md:grid-cols-[1.15fr_1fr] md:gap-8 md:py-20 md:px-10 lg:py-24">
          <div className="order-2 md:order-1">
            <p className="font-sans text-sm tracking-[0.2em] text-gold uppercase">A Bronze Sculptor</p>
            <h1 className="mt-4 font-display text-4xl leading-tight text-ivory md:text-5xl lg:text-6xl">
              Shanta Samanta
            </h1>
            <p className="mt-6 max-w-md font-sans text-base leading-relaxed text-bronze-light md:text-lg">
              {heroIntro}
            </p>
            <Link
              href="/about"
              className="mt-6 inline-block font-sans text-sm tracking-wide text-ivory underline decoration-gold decoration-1 underline-offset-4 transition-colors hover:text-gold"
            >
              Read her story →
            </Link>

            <div className="mt-10 inline-flex items-center gap-3 rounded-sm border border-gold/30 px-4 py-2">
              <span className="h-1.5 w-1.5 rounded-full bg-gold" />
              <span className="font-sans text-xs tracking-wide text-bronze-light">
                As featured in <span className="text-ivory">Art &amp; Deal Magazine</span>
              </span>
            </div>
          </div>

          <div className="order-1 md:order-2">
            <div className="relative mx-auto h-85 w-full max-w-70 sm:h-105 sm:max-w-80 md:mx-0 md:h-110 md:max-w-none lg:h-140 xl:h-155">
              <div
                className="absolute inset-0 -z-10 rounded-full bg-gold/10 blur-3xl"
                aria-hidden
              />
              <Image
                src="/images/portfolio/freedom/freedom-installed.webp"
                alt="Freedom — a monumental stainless-steel figure releasing birds from open hands, installed outdoors against an evening sky"
                fill
                priority
                sizes="(min-width: 1280px) 480px, (min-width: 768px) 42vw, 280px"
                className="object-contain"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Featured Works */}
      <section className="mx-auto max-w-6xl px-6 py-20 md:px-10 md:py-28">
        <ScrollReveal>
          <h2 className="font-display text-2xl text-bronze md:text-3xl">Featured Works</h2>
        </ScrollReveal>

        <div className="mt-10 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {featured.map((piece, i) => {
            const image = piece.images[0];
            if (!image) return null;
            return (
              <ScrollReveal key={piece.slug} delay={i * 0.06}>
                <Link
                  href={`/portfolio/${piece.slug}`}
                  className="group relative block overflow-hidden rounded-sm bg-charcoal/5"
                >
                  <div className="relative aspect-4/5 w-full overflow-hidden">
                    <Image
                      src={image.src}
                      alt={image.alt}
                      fill
                      sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                      className="object-cover transition-transform duration-500 ease-out group-hover:scale-105"
                    />
                    <div className="absolute inset-0 flex items-end bg-linear-to-t from-charcoal/80 via-charcoal/0 to-charcoal/0 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                      <div className="p-5">
                        <p className="font-display text-lg text-ivory">{piece.title}</p>
                        {piece.medium && (
                          <p className="mt-0.5 font-sans text-xs tracking-wide text-patina-light">
                            {piece.medium}
                          </p>
                        )}
                      </div>
                    </div>
                  </div>
                </Link>
              </ScrollReveal>
            );
          })}
        </div>

        <ScrollReveal className="mt-12 text-center">
          <Link
            href="/portfolio"
            className="inline-block border border-bronze px-6 py-3 font-sans text-sm tracking-wide text-bronze transition-colors hover:bg-bronze hover:text-ivory"
          >
            View Full Portfolio
          </Link>
        </ScrollReveal>
      </section>

      {/* The Series */}
      <section className="bg-patina-light/30 py-20 md:py-28">
        <div className="mx-auto max-w-6xl px-6 md:px-10">
          <ScrollReveal>
            <p className="font-sans text-sm tracking-[0.2em] text-bronze uppercase">The Full Body of Work</p>
            <h2 className="mt-4 font-display text-2xl text-bronze md:text-3xl">Nine Series, Three Decades</h2>
            <p className="mt-3 max-w-2xl font-sans text-base leading-relaxed text-charcoal/80">
              From childhood memory to mythology to a monumental public sculpture in stainless
              steel — each series traces a different facet of womanhood.
            </p>
          </ScrollReveal>

          <div className="mt-10 grid grid-cols-2 gap-6 sm:grid-cols-3 lg:grid-cols-5">
            {seriesPreviews.map(({ series, image }, i) => (
              <ScrollReveal key={series.slug} delay={i * 0.05}>
                <Link href={`/portfolio#${series.slug}`} className="group block">
                  <div className="relative aspect-4/5 w-full overflow-hidden bg-charcoal/5">
                    {image ? (
                      <Image
                        src={image.src}
                        alt={image.alt}
                        fill
                        sizes="(min-width: 1024px) 20vw, (min-width: 640px) 33vw, 50vw"
                        className="object-cover transition-transform duration-500 ease-out group-hover:scale-105"
                      />
                    ) : (
                      <ComingSoonPlaceholder title={series.navLabel} />
                    )}
                  </div>
                  <p className="mt-3 font-display text-base text-bronze transition-colors group-hover:text-gold">
                    {series.navLabel}
                  </p>
                </Link>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Artist Statement */}
      <section className="bg-ivory py-20 md:py-28">
        <div className="mx-auto grid max-w-6xl items-center gap-12 px-6 md:grid-cols-[0.8fr_1.2fr] md:gap-16 md:px-10">
          <ScrollReveal>
            <div className="relative mx-auto aspect-4/5 w-full max-w-70 overflow-hidden rounded-sm md:mx-0 md:max-w-none">
              <Image
                src="/images/about/artist-portrait.webp"
                alt="Dr. Shanta M. Sarvaiya, bronze sculptor, in her studio"
                fill
                sizes="(min-width: 768px) 30vw, 280px"
                className="object-cover"
              />
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.1}>
            <p className="font-sans text-sm tracking-[0.2em] text-bronze uppercase">In Her Words</p>
            <blockquote className="mt-5 font-display text-2xl leading-snug text-bronze italic md:text-3xl">
              &ldquo;{bio.quotes[0]}&rdquo;
            </blockquote>
            <p className="mt-6 max-w-xl font-sans text-base leading-relaxed text-charcoal/80">
              {bio.role}. Trained under Prof. Dhruv Mistry and Prof. Raghav Kaneria at the Faculty
              of Fine Arts, The M.S. University of Baroda.
            </p>
            <Link
              href="/about"
              className="mt-6 inline-block font-sans text-sm tracking-wide text-bronze underline decoration-gold decoration-1 underline-offset-4 transition-colors hover:text-gold"
            >
              Read her full story →
            </Link>
          </ScrollReveal>
        </div>
      </section>

      {/* Awards ticker */}
      <section className="border-y border-bronze/10 bg-patina-light/40 py-6">
        <div className="mx-auto max-w-6xl overflow-x-auto px-6 md:px-10">
          <ul className="flex min-w-max items-center justify-center gap-x-10 gap-y-2 font-sans text-xs tracking-wide text-bronze md:flex-wrap md:justify-center">
            {tickerItems.map((item) => (
              <li key={item} className="flex items-center gap-x-10">
                <span>{item}</span>
                <span className="hidden text-gold md:inline" aria-hidden>
                  ·
                </span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Closing CTA */}
      <section className="bg-bronze">
        <div className="mx-auto max-w-6xl px-6 py-16 text-center md:px-10 md:py-20">
          <ScrollReveal>
            <h2 className="font-display text-2xl text-ivory md:text-3xl">
              Explore the full body of work
            </h2>
            <p className="mx-auto mt-3 max-w-xl font-sans text-sm text-patina-light md:text-base">
              Nine series, three decades of practice — from childhood memory to mythology to a
              monumental public sculpture in stainless steel.
            </p>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
              <Link
                href="/portfolio"
                className="inline-block bg-ivory px-6 py-3 font-sans text-sm tracking-wide text-bronze transition-colors hover:bg-gold hover:text-ivory"
              >
                Browse the Portfolio
              </Link>
              <Link
                href="/contact"
                className="inline-block border border-ivory/40 px-6 py-3 font-sans text-sm tracking-wide text-ivory transition-colors hover:border-ivory"
              >
                Get in Touch
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
