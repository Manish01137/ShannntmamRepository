import type { Metadata } from "next";
import { Lora, Poppins } from "next/font/google";
import "./globals.css";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";

const lora = Lora({
  variable: "--font-lora",
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  style: ["normal", "italic"],
});

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
});

const siteUrl = "https://www.shantasamanta.com";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Shanta Samanta — Bronze Sculptor | Faculty of Fine Arts, MSU Baroda",
    template: "%s — Shanta Samanta",
  },
  description:
    "Contemporary bronze sculpture by Dr. Shanta M. Sarvaiya (Shanta Samanta) — exploring womanhood, mythology and memory. Featured in Art & Deal Magazine. Based in Vadodara, India.",
  openGraph: {
    type: "website",
    siteName: "Shanta Samanta",
    url: siteUrl,
    images: [{ url: "/images/og-default.jpg", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${lora.variable} ${poppins.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col bg-ivory text-charcoal">
        <Nav />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
