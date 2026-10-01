import type { Metadata } from "next";
import "@fontsource-variable/space-grotesk";
import "@fontsource-variable/jetbrains-mono";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://orylab.fr"),
  title: "öRyLab — Créations 3D · site en construction",
  description:
    "öRyLab, le laboratoire R&D de Grégory Garcia : impression 3D, objets conçus et fabriqués à Harnes. Site en construction.",
  openGraph: {
    title: "öRyLab — en construction",
    description: "Impression 3D, prototypes et objets imprimés. Bientôt en ligne.",
    url: "https://orylab.fr",
    siteName: "öRyLab",
    locale: "fr_FR",
    type: "website",
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr">
      <body className="font-sans antialiased">{children}</body>
    </html>
  );
}
