import type { Metadata } from "next";
import { JetBrains_Mono, Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Rohit | Product Manager",
  description:
    "Product Manager building at Paytm. This portfolio is a product — interactive, opinionated, and built to show how I think.",
  openGraph: {
    title: "Rohit | Product Manager",
    description:
      "Product Manager building at Paytm. This portfolio is a product — interactive, opinionated, and built to show how I think.",
    type: "website",
  },
  other: {
    "theme-color": "#0A0A0A",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${jetbrainsMono.variable} scroll-smooth`}
    >
      <body style={{ background: "#0A0A0A" }}>{children}</body>
    </html>
  );
}
