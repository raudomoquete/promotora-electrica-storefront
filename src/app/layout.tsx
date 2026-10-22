import type { Metadata } from "next";
import { Source_Sans_3, Syne } from "next/font/google";
import { CartProvider } from "@/lib/cart-context";
import { SiteFooter } from "@/components/SiteFooter";
import { SiteHeader } from "@/components/SiteHeader";
import "./globals.css";

const syne = Syne({
  subsets: ["latin"],
  variable: "--font-syne",
  display: "swap",
  weight: ["500", "600", "700", "800"],
});

const sourceSans = Source_Sans_3({
  subsets: ["latin"],
  variable: "--font-source-sans",
  display: "swap",
  weight: ["400", "500", "600", "700"],
});

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL;

export const metadata: Metadata = {
  title: {
    absolute: "Promotora Eléctrica",
  },
  description:
    "Catálogo académico de servicios de transmisión eléctrica: diseño, obra, mantenimiento, estudios y automatización.",
  icons: {
    icon: "/favicon.ico",
  },
  ...(siteUrl
    ? {
        metadataBase: new URL(siteUrl),
      }
    : {}),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body className={`${syne.variable} ${sourceSans.variable}`}>
        <CartProvider>
          <div className="page-shell">
            <SiteHeader />
            <main className="page-main">{children}</main>
            <SiteFooter />
          </div>
        </CartProvider>
      </body>
    </html>
  );
}
