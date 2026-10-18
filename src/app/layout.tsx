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
  metadataBase: new URL("https://atilax.io"),
  title: {
    default: "ATILAX | Software industrial para petróleo y gas",
    template: "%s | ATILAX",
  },
  description:
    "ATILAX WellOS, TankOS, LiftOS y ATILAX ERP: plataformas de operación para petróleo y gas que se instalan en el servidor de su empresa. Demos en vivo con usuario de solo lectura.",
  openGraph: {
    title: "ATILAX | Software industrial para petróleo y gas",
    description: "WellOS, TankOS, LiftOS y ERP. Pruebe los demos en vivo.",
    url: "https://atilax.io",
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
