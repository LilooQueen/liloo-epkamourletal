
import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Liloo — Amour Létal · EPK",
  description: "EPK officiel de Liloo pour l'EP Amour Létal",
  icons: {
    // Favicon servi depuis /public
    icon: "/favicon.png",
    // Optionnel : si tu mets aussi app/icon.png, Next le détecte automatiquement.
  },
  // (Optionnel) aperçu quand on partage le lien
  metadataBase: new URL("https://liloo-epkamourletal-a.vercel.app"),
  openGraph: {
    title: "Liloo — Amour Létal",
    description:
      "Un EP puissant entre désir, rage et libération. Bio, visuels, tracklist et contacts.",
    url: "/",
    siteName: "Liloo EPK",
    images: [{ url: "/cover.png", width: 1200, height: 630 }],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Liloo — Amour Létal",
    description:
      "EPK officiel : bio, storytelling, visuels presse et liens.",
    images: ["/cover.png"],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr">
      <body>{children}</body>
    </html>
  );
}
