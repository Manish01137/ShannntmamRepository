import type { Metadata } from "next";
import { bio } from "@/content/bio";
import { ContactForm } from "@/components/ContactForm";
import { ScrollReveal } from "@/components/ScrollReveal";

export const metadata: Metadata = {
  title: "Contact — Shanta Samanta, Bronze Sculptor",
  description:
    "Get in touch with bronze sculptor Dr. Shanta M. Sarvaiya (Shanta Samanta), based in Vadodara, India, for collector, gallery and commission enquiries.",
};

export default function ContactPage() {
  return (
    <div className="mx-auto max-w-5xl px-6 py-16 md:px-10 md:py-24">
      <ScrollReveal>
        <p className="font-sans text-sm tracking-[0.2em] text-bronze uppercase">Get in Touch</p>
        <h1 className="mt-4 font-display text-4xl text-bronze md:text-5xl">Contact</h1>
      </ScrollReveal>

      <div className="mt-14 grid gap-14 md:grid-cols-[1fr_1.2fr]">
        <ScrollReveal>
          <div className="space-y-8 font-sans">
            <div>
              <h2 className="text-xs tracking-[0.15em] text-bronze uppercase">Location</h2>
              <p className="mt-2 text-lg text-charcoal">{bio.location}</p>
            </div>
            <div>
              <h2 className="text-xs tracking-[0.15em] text-bronze uppercase">Phone</h2>
              <a
                href={`tel:+91${bio.contact.phone}`}
                className="mt-2 block text-lg text-charcoal transition-colors hover:text-bronze"
              >
                {bio.contact.phone}
              </a>
            </div>
            <div>
              <h2 className="text-xs tracking-[0.15em] text-bronze uppercase">Website</h2>
              <a
                href={bio.contact.website}
                target="_blank"
                rel="noreferrer"
                className="mt-2 block text-lg text-charcoal transition-colors hover:text-bronze"
              >
                shantasamanta.com
              </a>
            </div>
            <div>
              <h2 className="text-xs tracking-[0.15em] text-bronze uppercase">YouTube</h2>
              <a
                href={bio.contact.youtube}
                target="_blank"
                rel="noreferrer"
                className="mt-2 block text-lg text-charcoal transition-colors hover:text-bronze"
              >
                Watch on YouTube
              </a>
            </div>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={0.1}>
          <ContactForm />
        </ScrollReveal>
      </div>
    </div>
  );
}
