import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { bio } from "@/content/bio";
import { pieces } from "@/content/pieces";
import { seriesBySlug } from "@/content/series";
import { ComingSoonPlaceholder } from "@/components/ComingSoonPlaceholder";
import { ScrollReveal } from "@/components/ScrollReveal";

export function generateStaticParams() {
  return pieces.map((p) => ({ slug: p.slug }));
}

function getPiece(slug: string) {
  return pieces.find((p) => p.slug === slug);
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const piece = getPiece(slug);
  if (!piece) return {};

  const series = seriesBySlug[piece.series];
  return {
    title: `${piece.title} — Portfolio`,
    description: `${piece.title}${piece.medium ? `, ${piece.medium}` : ""} — from the ${series.title} series by bronze sculptor Shanta Samanta.`,
  };
}

export default async function PieceDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const piece = getPiece(slug);
  if (!piece) notFound();

  const series = seriesBySlug[piece.series];
  const conceptNote = piece.note ?? (piece.unlisted ? undefined : series.statement);
  const enquiryHref = `https://wa.me/91${bio.contact.phone}?text=${encodeURIComponent(
    `Hi, I'm interested in "${piece.title}" — could you share more details?`
  )}`;

  return (
    <div className="mx-auto max-w-5xl px-6 py-16 md:px-10 md:py-24">
      <Link
        href={`/portfolio#${series.slug}`}
        className="font-sans text-sm text-bronze transition-colors hover:text-gold"
      >
        ← Back to {series.navLabel}
      </Link>

      <div className="mt-8 grid gap-10 md:grid-cols-[1.3fr_1fr] md:gap-14">
        <ScrollReveal>
          <div className="space-y-6">
            {piece.images.length > 0 ? (
              piece.images.map((image) => (
                <div key={image.src} className="relative w-full overflow-hidden rounded-sm bg-charcoal/5">
                  <Image
                    src={image.src}
                    alt={image.alt}
                    width={image.width}
                    height={image.height}
                    sizes="(min-width: 768px) 60vw, 100vw"
                    className="h-auto w-full object-cover"
                    priority
                  />
                </div>
              ))
            ) : (
              <ComingSoonPlaceholder title={piece.title} />
            )}
          </div>
        </ScrollReveal>

        <ScrollReveal delay={0.1}>
          <p className="font-sans text-xs tracking-[0.2em] text-bronze uppercase">{series.navLabel}</p>
          <h1 className="mt-3 font-display text-3xl text-bronze md:text-4xl">{piece.title}</h1>

          <dl className="mt-6 space-y-2 font-sans text-sm text-charcoal/80">
            {piece.medium && (
              <div className="flex gap-2">
                <dt className="text-charcoal/70">Medium</dt>
                <dd>{piece.medium}</dd>
              </div>
            )}
            {piece.size && (
              <div className="flex gap-2">
                <dt className="text-charcoal/70">Size</dt>
                <dd>{piece.size}</dd>
              </div>
            )}
          </dl>

          {piece.images.length > 0 && (
            <a
              href={enquiryHref}
              target="_blank"
              rel="noreferrer"
              className="mt-6 inline-flex items-center gap-2 rounded-sm bg-[#25D366] px-5 py-2.5 font-sans text-sm text-white transition-opacity hover:opacity-90"
            >
              <svg viewBox="0 0 32 32" fill="currentColor" className="h-4 w-4">
                <path d="M16.02 3C9.4 3 4 8.4 4 15.02c0 2.34.65 4.52 1.78 6.38L4 29l7.78-1.75a11.97 11.97 0 0 0 4.24.77h.01c6.62 0 12.02-5.4 12.02-12.02C28.05 8.4 22.65 3 16.02 3Zm0 21.86h-.01a9.9 9.9 0 0 1-5.05-1.38l-.36-.21-3.77.85.87-3.68-.24-.38a9.83 9.83 0 0 1-1.5-5.24c0-5.46 4.45-9.9 9.92-9.9 2.65 0 5.14 1.03 7.01 2.9a9.83 9.83 0 0 1 2.9 6.99c0 5.47-4.45 9.9-9.87 9.9v.15Z" />
              </svg>
              Enquire on WhatsApp
            </a>
          )}

          {conceptNote && (
            <p className="mt-8 border-t border-bronze/10 pt-6 font-sans text-base leading-relaxed text-charcoal/90">
              {conceptNote}
            </p>
          )}

          {piece.unlisted && (
            <p className="mt-8 border-t border-bronze/10 pt-6 font-sans text-xs text-charcoal/70 italic">
              A concept note for this piece hasn&rsquo;t been published yet.
            </p>
          )}
        </ScrollReveal>
      </div>
    </div>
  );
}
