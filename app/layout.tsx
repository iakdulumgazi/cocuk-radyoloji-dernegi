import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const geist = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });

// Yayınlanınca NEXT_PUBLIC_SITE_URL ile özel alan adı verilebilir;
// Vercel'de otomatik olarak dağıtım URL'si kullanılır.
const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ??
  (process.env.VERCEL_URL ? `https://${process.env.VERCEL_URL}` : "http://localhost:3001");

const title = "Çocuk Radyolojisi Derneği";
const description =
  "Türkiye Çocuk Radyolojisi Derneği resmi web sitesi — Society of Pediatric Radiology. Pediatrik radyolojide eğitim, bilim ve dayanışma.";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: title,
    template: "%s · Çocuk Radyolojisi Derneği",
  },
  description,
  openGraph: {
    type: "website",
    locale: "tr_TR",
    siteName: title,
    title,
    description,
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="tr" className={`${geist.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
