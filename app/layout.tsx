import "./globals.css";
import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/next";
import { Space_Grotesk, Manrope } from "next/font/google";

const manrope = Manrope({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-manrope",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-space-grotesk",
});

export const metadata: Metadata = {
  title: "Externalisation de la paie | GPE Solutions",
  description:
    "Externalisez votre paie simplement. Bulletins, DSN, formalités sociales. Service humain, réactif et sécurisé.",
  robots: { index: true, follow: true },
  alternates: { canonical: "https://gpe-solutions.fr" },
  openGraph: {
    title: "GPE Solutions – Externalisation de la paie",
    description:
      "Paie, DSN et accompagnement social pour TPE, PME et grandes entreprises.",
    type: "website",
    locale: "fr_FR",
  },
  icons: { icon: "/icon.png" },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="fr" className={`${manrope.variable} ${spaceGrotesk.variable}`}>
      <body className="min-h-screen bg-white text-gray-900">
        {children}
        <Analytics />
      </body>
    </html>
  );
}
