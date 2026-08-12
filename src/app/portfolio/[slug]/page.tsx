import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
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
