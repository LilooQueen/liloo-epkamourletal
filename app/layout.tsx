import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Liloo — Amour Létal · EPK",
  description: "EPK officiel de Liloo pour l'EP Amour Létal",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr">
      <body>{children}</body>
    </html>
  );
}
