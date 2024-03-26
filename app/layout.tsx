import type { Metadata } from "next";
import { Libre_Baskerville } from "next/font/google";
import "./globals.css";
import localFont from "next/font/local";

const apfelGrotezk = localFont({
  src: [
    {
      path: "./fonts/ApfelGrotezk-Regular.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "./fonts/ApfelGrotezk-Fett.woff2",
      weight: "700",
      style: "normal",
    },
  ],
  variable: "--font-apfel-grotezk",
});

const libreBaskerville = Libre_Baskerville({
  weight: ["400"],
  style: ["italic"],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-libre-baskerville",
});

const clashDisplay = localFont({
  src: [
    {
      path: "./fonts/ClashDisplay-Bold.woff2",
      weight: "700",
      style: "normal",
    },
  ],
  variable: "--font-clash-display",
});

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
    <html
      lang="fr"
      className={`${apfelGrotezk.variable} ${libreBaskerville.variable} ${clashDisplay.variable}`}
    >
      <body className={"bg-pg-green font-apfel text-white"}>{children}</body>
    </html>
  );
}
