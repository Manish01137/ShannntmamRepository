"use client";

import { useEffect, useState } from "react";
import type { Series } from "@/content/series";

export function PortfolioNav({ series }: { series: Series[] }) {
  const [active, setActive] = useState<string | undefined>(series[0]?.slug);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setActive(entry.target.id);
          }
        }
      },
      { rootMargin: "-45% 0px -50% 0px", threshold: 0 }
    );

    for (const s of series) {
      const el = document.getElementById(s.slug);
      if (el) observer.observe(el);
    }
    return () => observer.disconnect();
  }, [series]);

  return (
    <nav
      aria-label="Portfolio series"
      className="sticky top-16 z-40 -mx-6 overflow-x-auto border-b border-bronze/10 bg-ivory/95 px-6 py-3 backdrop-blur-sm md:-mx-10 md:px-10"
    >
      <ul className="flex min-w-max gap-6 font-sans text-sm tracking-wide text-charcoal/70">
        {series.map((s) => (
          <li key={s.slug}>
            <a
              href={`#${s.slug}`}
              className={`block whitespace-nowrap border-b-2 pb-1 transition-colors ${
                active === s.slug
                  ? "border-gold text-bronze"
                  : "border-transparent hover:text-bronze"
              }`}
            >
              {s.navLabel}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
