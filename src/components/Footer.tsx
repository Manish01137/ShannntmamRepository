import Link from "next/link";
import { bio } from "@/content/bio";

const LINKS = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/portfolio", label: "Works" },
  { href: "/exhibitions", label: "Exhibitions" },
  { href: "/process", label: "Process" },
  { href: "/press", label: "Writings" },
  { href: "/contact", label: "Contact" },
];

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-charcoal text-ivory">
      <div className="mx-auto grid max-w-6xl gap-10 px-6 py-14 md:grid-cols-3 md:px-10">
        <div>
          <p className="font-display text-lg text-ivory">
            {bio.displayName.primary}
            <span className="ml-2 align-middle text-xs tracking-[0.2em] text-bronze-light uppercase">
              {bio.displayName.secondary}
            </span>
          </p>
          <p className="mt-1 text-sm text-bronze-light">Bronze Sculptor · Vadodara</p>
        </div>

        <nav aria-label="Footer">
          <ul className="grid grid-cols-2 gap-x-6 gap-y-2 text-sm">
            {LINKS.map((link) => (
              <li key={link.href}>
                <Link href={link.href} className="transition-colors hover:text-gold">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="text-sm">
          <a href={`tel:+91${bio.contact.phone}`} className="block transition-colors hover:text-gold">
            {bio.contact.phone}
          </a>
          <a
            href={bio.contact.youtube}
            target="_blank"
            rel="noreferrer"
            className="mt-2 block transition-colors hover:text-gold"
          >
            YouTube
          </a>
          <a
            href={bio.contact.academia}
            target="_blank"
            rel="noreferrer"
            className="mt-2 block transition-colors hover:text-gold"
          >
            Academia.edu
          </a>
        </div>
      </div>

      <div className="border-t border-ivory/10 px-6 py-5 text-center text-xs text-bronze-light md:px-10">
        © {year} Dr. Shanta M. Sarvaiya (Shanta Samanta). All rights reserved.
      </div>
    </footer>
  );
}
