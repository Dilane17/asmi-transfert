import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/sections/Navbar";

export const metadata: Metadata = {
  title: "ASMI Transfert — Envoyez. Recevez. En toute sécurité.",
  description:
    "La plateforme de transfert de fonds nouvelle génération pour l'Afrique et l'Europe.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body>
          <Navbar />
          {children}
        </body>
    </html>
  );
}
