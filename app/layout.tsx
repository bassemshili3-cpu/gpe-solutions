import "./globals.css";
import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/next"

export const metadata: Metadata = {
  title: "Externalisation de la paie | GPE Solutions",
  description:
    "Externalisez votre paie simplement. Bulletins, DSN, formalités sociales. Service humain, réactif et sécurisé.",
  robots: { index: true, follow: true },
  openGraph: {
    title: "GPE Solutions – Externalisation de la paie",
    description:
      "Paie, DSN et accompagnement social pour TPE, PME et grandes entreprises.",
    type: "website",
    locale: "fr_FR",
  },
  icons: {
    icon: "/icon.png",
    shortcut: "/icon.png",
    apple: "/icon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="fr">
      <body className="min-h-screen bg-white text-gray-900">
        {children}
      </body>
    </html>
  );
  <Analytics/>
}
