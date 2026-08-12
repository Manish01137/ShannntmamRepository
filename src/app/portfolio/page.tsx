import type { Metadata } from "next";
import { seriesList } from "@/content/series";
import { piecesBySeries } from "@/content/pieces";
import { PortfolioNav } from "@/components/PortfolioNav";
import { PieceCard } from "@/components/PieceCard";
import { ScrollReveal } from "@/components/ScrollReveal";

export const metadata: Metadata = {
  title: "Portfolio — Bronze Sculptures by Shanta Samanta",
  description:
    "Browse the full body of work by bronze sculptor Shanta Samanta — Kalpavruksha, Shringar, Whispers of Innocence, Manuscript, Sanjeevani, Shackled, Freedom, Conversation, Living Tapestry and more.",
};

export default function PortfolioPage() {
  return (
    <div>
      <div className="mx-auto max-w-6xl px-6 pt-16 pb-8 md:px-10 md:pt-24">
        <p className="font-sans text-sm tracking-[0.2em] text-bronze uppercase">The Full Body of Work</p>
        <h1 className="mt-4 font-display text-4xl text-bronze md:text-5xl">Portfolio</h1>
        <p className="mt-4 max-w-2xl font-sans text-base leading-relaxed text-charcoal/80 md:text-lg">
          Nine series spanning three decades — from childhood memory to mythology to a monumental
          public sculpture in stainless steel.
        </p>
      </div>

      <div className="mx-auto max-w-6xl px-6 md:px-10">
        <PortfolioNav series={seriesList} />
      </div>

      <div className="mx-auto max-w-6xl px-6 md:px-10">
        {seriesList.map((series) => {
          const seriesPieces = piecesBySeries(series.slug);
          if (seriesPieces.length === 0) return null;

          return (
            <section key={series.slug} id={series.slug} className="scroll-mt-36 py-16 md:py-20">
              <ScrollReveal>
                <h2 className="font-display text-3xl text-bronze">{series.title}</h2>
                {series.statement && (
                  <p className="mt-4 max-w-3xl font-sans text-base leading-relaxed text-charcoal/85 md:text-lg">
                    {series.statement}
                  </p>
                )}
                {series.curatorialNote && (
                  <p className="mt-4 max-w-3xl font-sans text-sm leading-relaxed text-charcoal/70 italic">
                    {series.curatorialNote}
                  </p>
                )}
              </ScrollReveal>

              <div className="mt-10 columns-1 gap-6 sm:columns-2 lg:columns-3">
                {seriesPieces.map((piece) => (
                  <PieceCard key={piece.slug} piece={piece} />
                ))}
              </div>
            </section>
          );
        })}
      </div>
    </div>
  );
}
