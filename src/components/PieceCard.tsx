import Image from "next/image";
import Link from "next/link";
import type { Piece } from "@/content/pieces";
import { ComingSoonPlaceholder } from "./ComingSoonPlaceholder";

export function PieceCard({ piece }: { piece: Piece }) {
  const image = piece.images[0];

  return (
    <Link
      href={`/portfolio/${piece.slug}`}
      className="group mb-6 block break-inside-avoid overflow-hidden rounded-sm bg-charcoal/5 md:mb-8"
    >
      <div className="relative w-full overflow-hidden">
        {image ? (
          <Image
            src={image.src}
            alt={image.alt}
            width={image.width}
            height={image.height}
            sizes="(min-width: 1024px) 32vw, (min-width: 640px) 48vw, 100vw"
            className="h-auto w-full object-cover transition-transform duration-500 ease-out group-hover:scale-105"
          />
        ) : (
          <ComingSoonPlaceholder title={piece.title} />
        )}
      </div>
      <div className="px-1 py-3">
        <p className="font-display text-base text-charcoal group-hover:text-bronze">{piece.title}</p>
        {piece.medium && (
          <p className="mt-0.5 font-sans text-xs tracking-wide text-charcoal/70">{piece.medium}</p>
        )}
      </div>
    </Link>
  );
}
