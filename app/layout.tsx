import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Panthéon du greenwashing",
  description:
    'Chaque mois, le Consortium des Debunkers de Greenwashing (CDG) sélectionne 3 communications qui rendent "vert.e.s" de rage en essayant d\'être vertes',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body className={inter.className}>
        <nav>
          <Link href={"/"}>Accueil</Link>
          <Link href={"/charte"}>Charte</Link>
          <Link href={"/laureats"}>Lauréats</Link>
        </nav>
        {children}
      </body>
    </html>
  );
}
