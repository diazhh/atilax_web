import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "ATILAX | Plataforma IoT para la Industria Petrolera",
    template: "%s | ATILAX",
  },
  description:
    "Plataforma integral de monitoreo industrial IoT para el sector petrolero. Monitoreo de pozos, gestión de flota y seguridad perimetral con IA.",
  keywords: [
    "IoT petrolero",
    "monitoreo de pozos",
    "industria petrolera Venezuela",
    "plataforma IoT industrial",
  ],
  authors: [{ name: "ATILAX Solutions" }],
  openGraph: {
    title: "ATILAX | Plataforma IoT para la Industria Petrolera",
    description:
      "Plataforma integral de monitoreo industrial IoT para el sector petrolero.",
    url: "https://www.atilax.io",
    siteName: "ATILAX",
    locale: "es_VE",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body className={`${inter.variable} font-sans antialiased`}>
        <Navbar />
        <main className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
