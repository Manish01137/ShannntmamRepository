"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

const LINKS = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/portfolio", label: "Portfolio" },
  { href: "/exhibitions", label: "Exhibitions" },
  { href: "/press", label: "Press" },
  { href: "/contact", label: "Contact" },
];

export function Nav() {
  const pathname = usePathname();
  const isHome = pathname === "/";
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  // Close the mobile menu on navigation. Adjusted during render (React's
  // recommended pattern for resetting state when a prop changes) rather
  // than in an effect, which would cause an extra cascading render.
  const [prevPathname, setPrevPathname] = useState(pathname);
  if (pathname !== prevPathname) {
    setPrevPathname(pathname);
    setMenuOpen(false);
  }

  useEffect(() => {
    if (!isHome) return;
    const onScroll = () => setScrolled(window.scrollY > 64);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [isHome]);

  const transparent = isHome && !scrolled && !menuOpen;

  return (
    <>
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${
        transparent ? "bg-transparent" : "bg-ivory/95 backdrop-blur-sm shadow-sm shadow-charcoal/5"
      }`}
    >
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4 md:px-10">
        <Link
          href="/"
          className={`font-display text-lg tracking-wide transition-colors ${
            transparent ? "text-ivory" : "text-bronze"
          }`}
        >
          Shanta Samanta
        </Link>

        <ul
          className={`hidden items-center gap-8 font-sans text-sm tracking-wide md:flex ${
            transparent ? "text-ivory" : "text-charcoal"
          }`}
        >
          {LINKS.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className={`transition-colors hover:text-gold ${
                  pathname === link.href ? (transparent ? "text-gold" : "text-bronze") : ""
                }`}
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        <button
          type="button"
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((v) => !v)}
          className={`flex h-9 w-9 flex-col items-center justify-center gap-1.5 md:hidden ${
            transparent ? "text-ivory" : "text-charcoal"
          }`}
        >
          <span
            className={`block h-px w-6 bg-current transition-transform ${menuOpen ? "translate-y-[3.5px] rotate-45" : ""}`}
          />
          <span
            className={`block h-px w-6 bg-current transition-transform ${menuOpen ? "-translate-y-[3.5px] -rotate-45" : ""}`}
          />
        </button>
      </nav>

      {menuOpen && (
        <ul className="flex flex-col gap-1 bg-ivory px-6 pb-6 font-sans text-base text-charcoal shadow-sm shadow-charcoal/5 md:hidden">
          {LINKS.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className={`block border-b border-charcoal/10 py-3 transition-colors hover:text-gold ${
                  pathname === link.href ? "text-bronze" : ""
                }`}
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </header>
    {/* Fixed header no longer reserves flow space; every page except the
        home hero (which is meant to sit full-bleed under it) needs this
        spacer so content isn't hidden underneath. */}
    {!isHome && <div className="h-17 md:h-15" aria-hidden="true" />}
    </>
  );
}
